import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { cargoPages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cargo Categories",
  description: "Secondary cargo categories under PORTADOR SOS, EXPRESS, BLACK, and GLOBAL, including excess baggage, battery cargo, dangerous goods, perishables, medical equipment, AOG cargo, machine parts, tender documents, OBC, charter, and high-value cargo."
};

export default function CargoPage() {
  return <ListingPage title="Secondary Cargo Categories" description="Cargo-specific air logistics pages for shipments that are routed under PORTADOR SOS, EXPRESS, BLACK, or GLOBAL depending on urgency, acceptance, documentation, packaging, speed, and delivery clarity." links={cargoPages.map((item) => ({ title: item.title, description: item.description, href: `/cargo/${item.slug}` }))} />;
}
