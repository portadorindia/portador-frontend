import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { industries, site } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = industries.find((item) => item.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.description, keywords: page.keywords, alternates: { canonical: `${site.url}/industries/${page.slug}` } };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industries.find((item) => item.slug === slug);
  if (!page) notFound();
  return <PageTemplate page={page} basePath="/industries" />;
}
