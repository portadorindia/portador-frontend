import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { lanes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Priority Air Cargo Lanes",
  description: "Urgent intercity air cargo lanes including Delhi to Mumbai, Mumbai to Bangalore, Chennai to Delhi, Bangalore to Hyderabad, and Ahmedabad to Mumbai."
};

export default function LanesPage() {
  return <ListingPage title="Priority Air Cargo Lanes" description="Same-day and next-flight-out logistics pages for high-demand Indian business lanes." links={lanes.map((item) => ({ title: item.title, description: item.description, href: `/lanes/${item.slug}` }))} />;
}
