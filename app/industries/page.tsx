import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "Urgent air logistics for aviation, pharma, manufacturing, electronics, events, legal documents, students, and high-value cargo.",
  alternates: { canonical: "https://portador.in/industries" }
};

export default function IndustriesPage() {
  return <ListingPage title="Industry Logistics" description="Sector-aware urgent logistics for customers who need speed, documentation clarity, and reliable human support." links={industries.map((item) => ({ title: item.title, description: item.description, href: `/industries/${item.slug}` }))} />;
}
