import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { useCasePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Urgent Logistics Use Cases",
  description: "High-conversion urgent logistics use cases including machine breakdown shipments, emergency passport delivery, baggage transfer, tender documents, and missed flight baggage recovery."
};

export default function UseCasesPage() {
  return <ListingPage title="Urgent Logistics Use Cases" description="Urgent logistics use cases show how PORTADOR supports customers when cargo cannot wait - from legal papers and medical equipment to last-minute commercial cargo, event material, excess baggage, and time-bound airport cargo." links={useCasePages.map((item) => ({ title: item.title, description: item.description, href: `/use-cases/${item.slug}` }))} />;
}
