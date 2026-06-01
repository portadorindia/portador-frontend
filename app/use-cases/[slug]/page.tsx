import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { site, useCasePages } from "@/lib/site";

export function generateStaticParams() {
  return useCasePages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = useCasePages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `${site.url}/use-cases/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `${site.url}/use-cases/${page.slug}` }
  };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = useCasePages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <PageTemplate page={page} basePath="/use-cases" />;
}
