import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalPage } from "@/lib/legal";
import { site } from "@/lib/site";

const page = getLegalPage("booking-refund-policy")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${site.url}/booking-refund-policy` },
  openGraph: { title: page.title, description: page.description, url: `${site.url}/booking-refund-policy` }
};

export default function BookingRefundPolicyPage() {
  return <LegalPage page={page} />;
}
