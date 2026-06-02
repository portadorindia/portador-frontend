import type { Metadata } from "next";
import { ListingPage } from "@/components/page-template";
import { lanes, routeAliasPages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Priority Air Cargo Routes",
  description: "Urgent intercity air cargo routes including Delhi to Mumbai, Mumbai to Bangalore, Chennai to Delhi, Bangalore to Hyderabad, and major airport-connected Indian lanes.",
  alternates: { canonical: `${site.url}/routes` }
};

export default function RoutesPage() {
  const routeLinks = [
    ...routeAliasPages.map((item) => {
      const target = lanes.find((lane) => lane.slug === item.targetSlug);
      return {
        title: item.title,
        description: target?.description ?? "Urgent route support for same-day, Next Flight Out, excess baggage, documents, and airport-linked cargo where feasible.",
        href: `/routes/${item.slug}`
      };
    }),
    ...lanes.map((item) => ({ title: item.title, description: item.description, href: `/routes/${item.slug}` }))
  ];

  return <ListingPage title="Priority Air Cargo Routes" description="Same-day, next-flight-out, airport-to-airport, excess baggage, document, and urgent B2B route pages for high-demand Indian air cargo lanes." links={routeLinks} />;
}
