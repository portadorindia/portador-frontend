import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { comparisonPages, site } from "@/lib/site";

export function generateStaticParams() {
  return comparisonPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = comparisonPages.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `${site.url}/comparisons/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `${site.url}/comparisons/${page.slug}` }
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = comparisonPages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <PageTemplate page={page} basePath="/comparisons" />;
}
