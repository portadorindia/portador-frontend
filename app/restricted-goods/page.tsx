import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalPage } from "@/lib/legal";
import { site } from "@/lib/site";

const page = getLegalPage("restricted-goods")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${site.url}/restricted-goods` },
  openGraph: { title: page.title, description: page.description, url: `${site.url}/restricted-goods` }
};

export default function RestrictedGoodsPage() {
  return <LegalPage page={page} />;
}
