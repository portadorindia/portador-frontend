import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { lanes, routeAliasPages, site } from "@/lib/site";

function resolveRoutePage(slug: string) {
  const alias = routeAliasPages.find((item) => item.slug === slug);
  const targetSlug = alias?.targetSlug ?? slug;
  const page = lanes.find((item) => item.slug === targetSlug);
  if (!page) return null;
  return alias ? { ...page, slug: alias.slug, title: alias.title, h1: "Delhi to Mumbai Same-Day and Next Flight Out Cargo" } : page;
}

export function generateStaticParams() {
  return [...lanes.map((item) => ({ slug: item.slug })), ...routeAliasPages.map((item) => ({ slug: item.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = resolveRoutePage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `${site.url}/routes/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `${site.url}/routes/${page.slug}` }
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = resolveRoutePage(slug);
  if (!page) notFound();
  return <PageTemplate page={page} basePath="/routes" />;
}
