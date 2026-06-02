import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { airports } from "@/lib/site";

export const metadata: Metadata = {
  title: "Airport Cargo Network",
  description: "Airport cargo pages for Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, and Kolkata urgent air logistics.",
  alternates: { canonical: "https://portador.in/airports" }
};

export default function AirportsPage() {
  return <ListingPage title="Airport Cargo Network" description="Airport-linked cargo pages for urgent support, premium air cargo movement, same-day capability, and human operations coordination." links={airports.map((item) => ({ title: item.title, description: item.description, href: `/airports/${item.slug}` }))} />;
}
