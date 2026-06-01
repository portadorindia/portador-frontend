import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { airports, site } from "@/lib/site";

export function generateStaticParams() {
  return airports.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = airports.find((item) => item.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `${site.url}/airports/${page.slug}` },
    openGraph: { title: page.title, description: page.description, url: `${site.url}/airports/${page.slug}` }
  };
}

export default async function AirportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = airports.find((item) => item.slug === slug);
  if (!page) notFound();
  return <PageTemplate page={page} basePath="/airports" />;
}
