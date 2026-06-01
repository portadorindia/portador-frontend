import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalPage } from "@/lib/legal";
import { site } from "@/lib/site";

const page = getLegalPage("terms-conditions")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${site.url}/terms-conditions` },
  openGraph: { title: page.title, description: page.description, url: `${site.url}/terms-conditions` }
};

export default function TermsConditionsPage() {
  return <LegalPage page={page} />;
}
