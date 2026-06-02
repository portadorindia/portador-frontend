import type { FAQItem } from "@/lib/faq";
import { founderFAQs, founderFAQSource, type FounderFAQ } from "@/lib/founder-faqs";
import { legalLinks, site, type PageModel } from "@/lib/site";

export type FAQAuthorityCategory = {
  id: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
  faqs: FAQItem[];
};

const allFounderFAQs = founderFAQs as readonly FounderFAQ[];

const urgentTerms = ["fastest", "same-day", "same day", "next flight", "nfo", "priority air", "urgent", "air cargo", "domestic", "speed", "deadline"];
const baggageTerms = ["baggage", "luggage", "suitcase", "personal effects", "student", "nri", "expat", "hotel", "airline", "airport panic", "ghee", "souvenir"];
const industrialTerms = ["machine", "factory", "manufacturing", "line-down", "production", "industrial", "heavy", "pallet", "automotive", "aog", "aviation", "spare parts"];
const itTerms = ["laptop", "server", "electronics", "it asset", "it assets", "data center", "computer", "mobile phone", "gpu", "battery", "lithium"];
const regulatedTerms = ["dangerous", "dg", "lithium", "battery", "restricted", "msds", "dry ice", "pharma", "medical", "temperature", "hazardous", "chemical", "compliance"];
const complianceTerms = ["gst", "e-way", "eway", "invoice", "pod", "claim", "refund", "fov", "carrier risk", "declared value", "tax", "insurance", "payment", "billing"];
const airportTerms = ["airport", "terminal", "delhi", "mumbai", "bangalore", "bengaluru", "hyderabad", "chennai", "cochin", "kolkata", "city"];
const globalTerms = ["international", "customs", "import", "export", "overseas", "country", "abroad", "ata carnet", "passport", "visa", "tourist", "foreign"];
const documentTerms = ["document", "documents", "passport", "visa", "legal", "tender", "paper", "declaration", "commercial invoice"];
const trackingTerms = ["tracking", "barcode", "status", "pod", "proof", "notification", "recipient", "tracking number"];

function toFAQItem(faq: FounderFAQ): FAQItem {
  return {
    question: faq.question,
    answer: faq.answer
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90) || "faqs";
}

function cleanCategoryLabel(value: string) {
  return value.replace(/^[^A-Za-z0-9]+/, "").replace(/\s+/g, " ").trim();
}

function uniqueFaqItems(faqs: FAQItem[]) {
  return Array.from(new Map(faqs.map((faq) => [faq.question.trim().toLowerCase(), faq])).values());
}

function faqSearchText(faq: FounderFAQ) {
  return `${faq.part} ${faq.section} ${faq.question} ${faq.answer} ${faq.sourceAnswer}`.toLowerCase();
}

function includesAny(text: string, terms: string[]) {
  const value = text.toLowerCase();
  return terms.some((term) => value.includes(term.toLowerCase()));
}

function matchingFounderFAQs(terms: string[]) {
  return allFounderFAQs.filter((faq) => includesAny(faqSearchText(faq), terms));
}

function pickFounderFaqs(terms: string[], limit: number, fallbackTerms: string[] = urgentTerms): FAQItem[] {
  const primary = matchingFounderFAQs(terms).map(toFAQItem);
  const fallback = matchingFounderFAQs(fallbackTerms).map(toFAQItem);
  const broad = allFounderFAQs.map(toFAQItem);
  return uniqueFaqItems([...primary, ...fallback, ...broad]).slice(0, limit);
}

function balancedFounderFaqs(buckets: { terms: string[]; limit: number }[], limit: number) {
  const selected: FAQItem[] = [];
  const used = new Set<string>();

  for (const bucket of buckets) {
    for (const faq of matchingFounderFAQs(bucket.terms).map(toFAQItem)) {
      const key = faq.question.toLowerCase();
      if (used.has(key)) continue;
      selected.push(faq);
      used.add(key);
      if (selected.filter((item) => includesAny(`${item.question} ${item.answer}`, bucket.terms)).length >= bucket.limit) break;
    }
  }

  for (const faq of allFounderFAQs.map(toFAQItem)) {
    if (selected.length >= limit) break;
    const key = faq.question.toLowerCase();
    if (!used.has(key)) {
      selected.push(faq);
      used.add(key);
    }
  }

  return selected.slice(0, limit);
}

function categoryLinks(text: string) {
  const value = text.toLowerCase();
  const links = [
    { label: "PORTADOR SOS", href: "/services/portador-sos" },
    { label: "PORTADOR GLOBAL", href: "/services/portador-global" },
    { label: "Track Shipment", href: site.trackingUrl },
    { label: "Contact Operations", href: "/contact" }
  ];

  if (includesAny(value, baggageTerms)) {
    links.unshift({ label: "Excess Baggage", href: "/cargo/excess-baggage" });
  }

  if (includesAny(value, industrialTerms)) {
    links.unshift({ label: "Machine Breakdown", href: "/cargo/machine-breakdown" });
    links.unshift({ label: "AOG Cargo", href: "/cargo/aog-cargo" });
  }

  if (includesAny(value, itTerms)) {
    links.unshift({ label: "Laptop Shipping", href: "/cargo/laptop-shipping" });
    links.unshift({ label: "Lithium Battery Cargo", href: "/cargo/lithium-battery-cargo" });
  }

  if (includesAny(value, regulatedTerms)) {
    links.unshift({ label: "Dangerous Goods", href: "/cargo/dangerous-goods" });
    links.unshift({ label: "Restricted Goods", href: "/restricted-goods" });
  }

  if (includesAny(value, complianceTerms)) {
    links.unshift(...legalLinks.slice(0, 3));
  }

  if (includesAny(value, airportTerms)) {
    links.unshift({ label: "All Airports", href: "/airports" });
    links.unshift({ label: "All Cities", href: "/cities" });
  }

  return uniqueLinks(links).slice(0, 6);
}

function uniqueLinks(links: { label: string; href: string }[]) {
  return Array.from(new Map(links.map((link) => [`${link.label}-${link.href}`, link])).values());
}

export function buildFAQAuthorityCategories(): FAQAuthorityCategory[] {
  const groups = new Map<string, { part: string; section: string; faqs: FounderFAQ[] }>();

  for (const faq of allFounderFAQs) {
    const key = `${faq.part}__${faq.section}`;
    const group = groups.get(key) ?? { part: faq.part, section: faq.section, faqs: [] };
    group.faqs.push(faq);
    groups.set(key, group);
  }

  return Array.from(groups.values()).map((group, index) => {
    const title = `${cleanCategoryLabel(group.part)} - ${cleanCategoryLabel(group.section)}`;
    return {
      id: `${String(index + 1).padStart(2, "0")}-${slugify(title)}`,
      title,
      description: `Customer FAQ category covering ${cleanCategoryLabel(group.section).toLowerCase()} questions for PORTADOR customers.`,
      links: categoryLinks(`${group.part} ${group.section}`),
      faqs: group.faqs.map(toFAQItem)
    };
  });
}

export const faqAuthorityCategories = buildFAQAuthorityCategories();
export const faqAuthorityFaqs = allFounderFAQs.map(toFAQItem);
export const faqAuthorityStats = {
  source: founderFAQSource.file,
  total: founderFAQSource.total,
  parseFailures: founderFAQSource.parseFailures,
  duplicateQuestionCount: founderFAQSource.duplicateQuestionCount,
  visibleHubFaqs: faqAuthorityFaqs.length,
  categories: faqAuthorityCategories.length
} as const;

export const founderHomepageFaqs = balancedFounderFaqs(
  [
    { terms: urgentTerms, limit: 10 },
    { terms: baggageTerms, limit: 10 },
    { terms: industrialTerms, limit: 8 },
    { terms: itTerms, limit: 8 },
    { terms: regulatedTerms, limit: 8 },
    { terms: complianceTerms, limit: 6 },
    { terms: airportTerms, limit: 5 },
    { terms: globalTerms, limit: 4 },
    { terms: trackingTerms, limit: 4 }
  ],
  60
);

export function getFounderFaqsForPage(page: PageModel, basePath: string): FAQItem[] {
  const pageText = `${basePath} ${page.slug} ${page.title} ${page.h1} ${page.description} ${page.keywords.join(" ")}`.toLowerCase();

  if (basePath === "/services" && page.slug === "portador-sos") {
    return pickFounderFaqs([...urgentTerms, ...airportTerms, ...industrialTerms, ...documentTerms], 70);
  }

  if (basePath === "/services" && page.slug === "portador-express") {
    return pickFounderFaqs([...urgentTerms, "next business", "b2b", "weight", "pricing", "commercial", "sla", ...complianceTerms], 45);
  }

  if (basePath === "/services" && page.slug === "portador-black") {
    return pickFounderFaqs([...documentTerms, "hand carry", "obc", "high-value", "security", "traveler", "passport", "visa", ...baggageTerms], 45);
  }

  if (basePath === "/services" && page.slug === "portador-global") {
    return pickFounderFaqs([...globalTerms, ...baggageTerms, ...documentTerms, "food", "ghee", "household", "personal goods", "customs"], 65);
  }

  if (basePath === "/cargo" && includesAny(pageText, baggageTerms)) {
    return pickFounderFaqs([...baggageTerms, ...airportTerms, ...globalTerms], 75);
  }

  if (basePath === "/cargo" && includesAny(pageText, regulatedTerms)) {
    return pickFounderFaqs([...regulatedTerms, ...itTerms, ...complianceTerms], 65);
  }

  if (basePath === "/cargo" && includesAny(pageText, itTerms)) {
    return pickFounderFaqs([...itTerms, ...regulatedTerms, ...complianceTerms], 55);
  }

  if (basePath === "/cargo" && includesAny(pageText, industrialTerms)) {
    return pickFounderFaqs([...industrialTerms, ...urgentTerms, ...complianceTerms], 55);
  }

  if (basePath === "/cargo" && includesAny(pageText, documentTerms)) {
    return pickFounderFaqs([...documentTerms, ...urgentTerms, ...complianceTerms], 45);
  }

  if (basePath === "/airports") {
    return pickFounderFaqs([...airportTerms, ...baggageTerms, ...urgentTerms, ...trackingTerms], 42);
  }

  if (basePath === "/cities" || basePath === "/routes" || basePath === "/lanes") {
    return pickFounderFaqs([...airportTerms, ...urgentTerms, ...baggageTerms, ...industrialTerms], 38);
  }

  if (basePath === "/industries" && includesAny(pageText, ["manufacturing", "aviation", "industrial", "machine", "aog"])) {
    return pickFounderFaqs([...industrialTerms, ...urgentTerms, ...complianceTerms], 48);
  }

  if (basePath === "/industries" && includesAny(pageText, ["electronics", "it", "tech", "startup", "laptop"])) {
    return pickFounderFaqs([...itTerms, ...regulatedTerms, ...urgentTerms], 48);
  }

  if (basePath === "/industries" && includesAny(pageText, ["pharma", "medical", "healthcare"])) {
    return pickFounderFaqs([...regulatedTerms, "medical", "pharma", "dry ice", "temperature"], 48);
  }

  if (basePath === "/industries" && includesAny(pageText, ["event", "exhibition", "mice"])) {
    return pickFounderFaqs(["event", "mice", "exhibition", "ata carnet", ...baggageTerms, ...urgentTerms], 42);
  }

  if (basePath === "/industries" && includesAny(pageText, ["legal", "tender", "document", "student", "high-value", "value"])) {
    return pickFounderFaqs([...documentTerms, ...baggageTerms, "high-value", ...urgentTerms], 42);
  }

  if (basePath === "/knowledge-hub" || basePath === "/comparisons") {
    return pickFounderFaqs([...urgentTerms, ...airportTerms, ...regulatedTerms, ...complianceTerms], 34);
  }

  return pickFounderFaqs([...pageText.split(/[^a-z0-9]+/).filter((word) => word.length > 3), ...urgentTerms], 24);
}

export function getFounderFaqsForStaticPage(pageKey: "about" | "contact" | "tracking"): FAQItem[] {
  if (pageKey === "contact") {
    return pickFounderFaqs([...urgentTerms, ...documentTerms, ...regulatedTerms, ...complianceTerms, "pricing", "quote"], 42);
  }

  if (pageKey === "tracking") {
    return pickFounderFaqs([...trackingTerms, ...urgentTerms, ...baggageTerms, "pod", "proof"], 34);
  }

  return pickFounderFaqs([...urgentTerms, ...airportTerms, ...industrialTerms, ...baggageTerms, ...regulatedTerms], 36);
}

export function getFounderListingFaqs(title: string): FAQItem[] {
  const titleTerms = title.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3);
  return pickFounderFaqs([...titleTerms, ...urgentTerms, ...airportTerms], 20);
}
