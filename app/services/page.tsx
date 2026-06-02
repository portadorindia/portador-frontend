import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "PORTADOR SOS, PORTADOR EXPRESS, PORTADOR BLACK, and PORTADOR GLOBAL premium air cargo services for urgent domestic and international logistics.",
  alternates: { canonical: "https://portador.in/services" }
};

export default function ServicesPage() {
  return <ListingPage title="PORTADOR SOS Air Cargo Services" description="Four premium service brands for emergency same-day air cargo, planned air-priority express, VIP hand-carry logistics, and urgent international air cargo." links={services.map((item) => ({ title: item.title, description: item.description, href: `/services/${item.slug}` }))} />;
}
