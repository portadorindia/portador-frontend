import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { cities, site } from "@/lib/site";

export function generateStaticParams() {
  return cities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = cities.find((item) => item.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.description, keywords: page.keywords, alternates: { canonical: `${site.url}/cities/${page.slug}` } };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = cities.find((item) => item.slug === slug);
  if (!page) notFound();
  return <PageTemplate page={page} basePath="/cities" />;
}
