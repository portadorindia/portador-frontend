import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { comparisonPages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Logistics Comparisons",
  description: "Comparison pages for air cargo vs courier, same-day delivery vs overnight courier, and airport cargo vs surface transport."
};

export default function ComparisonsPage() {
  return <ListingPage title="Logistics Comparison Guides" description="Direct comparison pages that help urgent customers decide when airport-linked air logistics is better than routine courier or surface transport." links={comparisonPages.map((item) => ({ title: item.title, description: item.description, href: `/comparisons/${item.slug}` }))} />;
}
