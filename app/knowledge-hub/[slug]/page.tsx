import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { hubArticles, site } from "@/lib/site";
import { articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return hubArticles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = hubArticles.find((item) => item.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.description, keywords: page.keywords, alternates: { canonical: `${site.url}/knowledge-hub/${page.slug}` } };
}

export default async function HubArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = hubArticles.find((item) => item.slug === slug);
  if (!page) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(page, "/knowledge-hub")) }} />
      <PageTemplate page={page} basePath="/knowledge-hub" />
    </>
  );
}
