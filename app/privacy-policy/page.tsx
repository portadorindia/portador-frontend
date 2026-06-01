import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalPage } from "@/lib/legal";
import { site } from "@/lib/site";

const page = getLegalPage("privacy-policy")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${site.url}/privacy-policy` },
  openGraph: { title: page.title, description: page.description, url: `${site.url}/privacy-policy` }
};

export default function PrivacyPolicyPage() {
  return <LegalPage page={page} />;
}
