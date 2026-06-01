import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/page-template";
import { authorityPages, site } from "@/lib/site";

export function generateStaticParams() {
  return authorityPages.map((page) => ({ slug: page.slug }));
}

type AuthorityRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: AuthorityRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = authorityPages.find((item) => item.slug === slug);
  if (!page) return {};

  const title = `${page.title} | PORTADOR SOS`;
  const url = `${site.url}/${page.slug}`;

  return {
    title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: page.description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: `${site.url}${site.logo}`, width: 1200, height: 630, alt: "PORTADOR SOS" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [`${site.url}${site.logo}`]
    }
  };
}

export default async function AuthorityPage({ params }: AuthorityRouteProps) {
  const { slug } = await params;
  const page = authorityPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return <PageTemplate page={page} basePath="" />;
}
