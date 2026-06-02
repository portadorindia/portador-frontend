import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { cities } from "@/lib/site";

export const metadata: Metadata = {
  title: "PORTADOR Network",
  description: "PORTADOR Network coverage across major Indian airport-connected cities for urgent air cargo, excess baggage, legal documents, and time-critical shipments.",
  alternates: { canonical: "https://portador.in/cities" }
};

export default function CitiesPage() {
  return <ListingPage title="PORTADOR Network" description="The PORTADOR Network connects urgent shipment customers across major airport-linked Indian cities, with local pages for airport relevance, nearby suburbs, route examples, common cargo types, and customer-friendly shipment guidance." links={cities.map((item) => ({ title: item.title, description: item.description, href: `/cities/${item.slug}` }))} />;
}
