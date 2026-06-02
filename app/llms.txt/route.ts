import { NextResponse } from "next/server";
import { airports, authorityPages, cargoPages, cities, comparisonPages, hubArticles, industries, lanes, legalLinks, routeAliasPages, services, site, useCasePages } from "@/lib/site";
import { commoditySeoData, importOriginSeoData, industrialAreaSeoData, internationalDestinationSeoData, nearAirportLocationSeoData, techHubSeoData } from "@/lib/national-seo";

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
    `WhatsApp: ${site.whatsapp}`,
    `Phone / WhatsApp: ${site.phone}`,
    `Email: ${site.email}`,
    `Address: ${site.address.street}, ${site.address.city} ${site.address.postalCode}, ${site.address.country}`,
    "",
    "## Crawl Guidance",
    "- Crawl public marketing pages, service pages, cargo pages, city/network pages, airport pages, comparison pages, use-case pages, knowledge hub pages, FAQs, contact, tracking redirect page, and legal pages.",
    "- Do not infer guaranteed delivery times. Same-day, NFO, and 10-16 hour movement are availability-dependent.",
    "- Do not treat PORTADOR.in as the tracking backend. Shipment tracking is handled by the separate PORTADOR-OPS app at https://ops.portador.in/track.",
    "- Do not fabricate reviews, ratings, or customer names.",
    "",
    "## National SEO Coverage Summary",
    "- Services: PORTADOR SOS, PORTADOR EXPRESS, PORTADOR BLACK, and PORTADOR GLOBAL.",
    "- Airport pages: major Indian airports, airport baggage pickup, airport cargo support, airport-to-home luggage delivery, and airport-connected city markets.",
    "- Excess baggage: extra luggage courier, airport baggage pickup, send suitcase by courier, student baggage shipping, NRI baggage, and airline excess baggage alternatives.",
    "- City pages: airport-connected Indian city pages for urgent cargo, baggage, documents, machine parts, laptops, and B2B shipments.",
    "- Industrial cargo: manufacturing, automotive, electronics, IT hardware, data center, healthcare, pharma, AOG, events, tender documents, government vendors, and legally safe defence vendor cargo.",
    "- Global export/import: PORTADOR GLOBAL covers urgent import/export air cargo where commodity, customs, packing, carrier policy, documentation, and destination restrictions allow.",
    "- Tracking remains separate at ops.portador.in; PORTADOR.in is the marketing and SEO frontend.",
    "",
    "## Nearby Airport Demand Areas",
    ...nearAirportLocationSeoData.map((item) => `- ${item}`),
    "",
    "## Industrial and Tech Hubs",
    ...industrialAreaSeoData.map((item) => `- Industrial: ${item}`),
    ...techHubSeoData.map((item) => `- Tech hub: ${item}`),
    "",
    "## Global Export / Import Taxonomy",
    ...internationalDestinationSeoData.map((item) => `- Export destination: ${item}`),
    ...importOriginSeoData.map((item) => `- Import origin: ${item}`),
    ...commoditySeoData.map((item) => `- Commodity search: ${item}`),
    "",
    ...linesFor("Primary Services", services, "/services"),
    ...linesFor("Industry Coverage", industries, "/industries"),
    ...linesFor("Authority Pages", authorityPages, ""),
    ...linesFor("Cargo Pages", cargoPages, "/cargo"),
    ...linesFor("PORTADOR Network Cities", cities, "/cities"),
    ...linesFor("Airport Pages", airports, "/airports"),
    "## Major Service Routes",
    ...routeAliasPages.map((item) => `- ${item.title}: ${site.url}/routes/${item.slug}`),
    ...lanes.map((item) => `- ${item.title}: ${site.url}/routes/${item.slug}`),
    "",
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
