import { NextResponse } from "next/server";
import { airports, authorityPages, cargoPages, cities, comparisonPages, hubArticles, lanes, legalLinks, services, site, useCasePages } from "@/lib/site";

export const dynamic = "force-static";

function linesFor(title: string, items: { title: string; slug: string }[], basePath: string) {
  return [
    `## ${title}`,
    ...items.map((item) => `- ${item.title}: ${site.url}${basePath}/${item.slug}`),
    ""
  ];
}

export function GET() {
  const content = [
    "# PORTADOR SOS",
    "",
    "PORTADOR SOS is a premium time-critical air cargo and urgent logistics brand in India. The website explains same-day air cargo, Next Flight Out support, airport-to-airport cargo, urgent business shipments, excess baggage, regulated cargo review, hand carry / OBC, air cargo charter support, and international urgent air cargo.",
    "",
    "Primary positioning: When Time Cannot Wait.",
    "Website: https://portador.in",
    "Tracking app: https://ops.portador.in/track",
    `Phone / WhatsApp: ${site.phone}`,
    `Email: ${site.email}`,
    `Address: ${site.address.street}, ${site.address.city} ${site.address.postalCode}, ${site.address.country}`,
    "",
    "## Crawl Guidance",
    "- Crawl public marketing pages, service pages, cargo pages, city/network pages, airport pages, comparison pages, use-case pages, knowledge hub pages, FAQs, contact, tracking redirect page, and legal pages.",
    "- Do not infer guaranteed delivery times. Same-day, NFO, and 10-16 hour movement are feasibility-dependent.",
    "- Do not treat PORTADOR.in as the tracking backend. Shipment tracking is handled by the separate PORTADOR-OPS app at https://ops.portador.in/track.",
    "- Do not fabricate reviews, ratings, or customer names.",
    "",
    ...linesFor("Primary Services", services, "/services"),
    ...linesFor("Authority Pages", authorityPages, ""),
    ...linesFor("Cargo Pages", cargoPages, "/cargo"),
    ...linesFor("PORTADOR Network Cities", cities, "/cities"),
    ...linesFor("Airport Pages", airports, "/airports"),
    ...linesFor("Priority Lane Pages", lanes, "/lanes"),
    ...linesFor("Use Cases", useCasePages, "/use-cases"),
    ...linesFor("Comparison Pages", comparisonPages, "/comparisons"),
    ...linesFor("Knowledge Hub", hubArticles, "/knowledge-hub"),
    "## Core Pages",
    `- Homepage: ${site.url}/`,
    `- Services: ${site.url}/services`,
    `- Cargo: ${site.url}/cargo`,
    `- PORTADOR Network: ${site.url}/cities`,
    `- Airports: ${site.url}/airports`,
    `- Knowledge Hub: ${site.url}/knowledge-hub`,
    `- Comparisons: ${site.url}/comparisons`,
    `- Tracking redirect: ${site.url}/tracking`,
    `- Contact: ${site.url}/contact`,
    `- About: ${site.url}/about`,
    `- FAQs: ${site.url}/faqs`,
    "",
    "## Legal Pages",
    ...legalLinks.map((link) => `- ${link.label}: ${site.url}${link.href}`),
    ""
  ].join("\n");

  return new NextResponse(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
