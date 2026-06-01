import type { MetadataRoute } from "next";
import { airports, authorityPages, cargoPages, cities, comparisonPages, coreLinks, hubArticles, industries, lanes, legalLinks, services, site, useCasePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamic = [
    ...services.map((item) => `/services/${item.slug}`),
    ...airports.map((item) => `/airports/${item.slug}`),
    ...cargoPages.map((item) => `/cargo/${item.slug}`),
    ...useCasePages.map((item) => `/use-cases/${item.slug}`),
    ...comparisonPages.map((item) => `/comparisons/${item.slug}`),
    ...industries.map((item) => `/industries/${item.slug}`),
    ...cities.map((item) => `/cities/${item.slug}`),
    ...lanes.map((item) => `/lanes/${item.slug}`),
    ...hubArticles.map((item) => `/knowledge-hub/${item.slug}`),
    ...authorityPages.map((item) => `/${item.slug}`)
  ];

  return [...coreLinks.map((link) => link.href), ...legalLinks.map((link) => link.href), "/airports", "/cargo", "/use-cases", "/comparisons", "/cities", "/lanes", "/knowledge-hub", ...dynamic].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8
  }));
}
