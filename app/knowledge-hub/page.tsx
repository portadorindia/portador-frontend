import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { hubArticles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Definitions and buyer guides for next flight out cargo, air cargo vs courier, same-day air cargo, airport cargo, mission-critical logistics, excess baggage, and battery cargo.",
  alternates: { canonical: "https://portador.in/knowledge-hub" }
};

export default function KnowledgeHubPage() {
  return <ListingPage title="Knowledge Hub" description="The PORTADOR Knowledge Hub helps customers understand real logistics challenges: same-day cargo, next flight out, airport cargo, excess baggage, urgent documents, dangerous goods basics, volumetric weight, E-Way Bill, airline delays, shipment protection, and pickup or delivery planning." links={hubArticles.map((item) => ({ title: item.title, description: item.description, href: `/knowledge-hub/${item.slug}` }))} />;
}
