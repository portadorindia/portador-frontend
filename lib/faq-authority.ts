import {
  airports,
  authorityPages,
  cargoPages,
  cities,
  comparisonPages,
  hubArticles,
  industries,
  lanes,
  legalLinks,
  routeAliasPages,
  services,
  site,
  useCasePages
} from "@/lib/site";
import { customerEducationFaqs } from "@/lib/customer-faqs";
import { normalizeFaqs, type FAQItem } from "@/lib/faq";

type PageWithFaqs = {
  slug: string;
  title: string;
  faqs: FAQItem[];
};

type MaybePageWithFaqs = {
  slug: string;
  title: string;
  faqs?: FAQItem[];
};

export type FAQAuthorityCategory = {
  id: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
  faqs: FAQItem[];
};

const pagePools = {
  services,
  cargo: cargoPages,
  airports,
  cities,
  routes: [...routeAliasPages, ...lanes],
  industries,
  useCases: useCasePages,
  comparisons: comparisonPages,
  knowledgeHub: hubArticles,
  authority: authorityPages
};

function includesAny(text: string, terms: string[]) {
  const value = text.toLowerCase();
  return terms.some((term) => value.includes(term));
}

function uniqueFaqs(faqs: FAQItem[]) {
  return Array.from(
    new Map(
      normalizeFaqs(faqs)
        .filter((faq) => faq.question.trim() && faq.answer.trim())
        .map((faq) => [faq.question.trim().toLowerCase(), { question: faq.question.trim(), answer: faq.answer.trim() }])
    ).values()
  );
}

function faqsFromPages(pages: MaybePageWithFaqs[]) {
  return pages.flatMap((page) => page.faqs ?? []);
}

function pageFaqs(pages: MaybePageWithFaqs[], terms: string[], faqTerms = terms) {
  return pages
    .filter((page) => includesAny(`${page.slug} ${page.title}`, terms))
    .flatMap((page) => page.faqs ?? [])
    .filter((faq) => faqTextMatches(faq, faqTerms));
}

function faqTextMatches(faq: FAQItem, terms: string[]) {
  return includesAny(`${faq.question} ${faq.answer}`, terms);
}

function matchingFaqs(terms: string[]) {
  const all = Object.values(pagePools).flatMap((pages) => faqsFromPages(pages));
  return all.filter((faq) => faqTextMatches(faq, terms));
}

function categoryFaqs(faqs: FAQItem[], usedQuestions: Set<string>) {
  const unique = uniqueFaqs(faqs);
  const fresh = unique.filter((faq) => !usedQuestions.has(faq.question.toLowerCase()));
  fresh.forEach((faq) => usedQuestions.add(faq.question.toLowerCase()));
  return fresh;
}

export function buildFAQAuthorityCategories(): FAQAuthorityCategory[] {
  const usedQuestions = new Set<string>();
  const getService = (slug: string) => services.find((service) => service.slug === slug);

  const sos = getService("portador-sos");
  const global = getService("portador-global");

  const categories: FAQAuthorityCategory[] = [
    {
      id: "excess-baggage",
      title: "Excess Baggage, Student Luggage & Traveler FAQs",
      description: "Airport panic searches, airline excess baggage alternatives, rejected baggage, student moves, NRI luggage, hotel pickup, and personal effects.",
      links: [
        { label: "Excess Baggage", href: "/cargo/excess-baggage" },
        { label: "Student Luggage Shipping", href: "/student-luggage-shipping" },
        { label: "Delhi Airport", href: "/airports/delhi-igi-airport" },
        { label: "Mumbai Airport", href: "/airports/mumbai-csmia" },
        { label: "PORTADOR GLOBAL", href: "/services/portador-global" }
      ],
      faqs: categoryFaqs([
        ...pageFaqs([...cargoPages, ...authorityPages, ...useCasePages], ["baggage", "luggage", "student", "nri", "personal-goods", "personal goods", "airport-to-home"]),
        ...matchingFaqs(["baggage", "luggage", "student", "nri", "personal goods", "suitcase", "airport pickup", "hotel"])
      ], usedQuestions)
    },
    {
      id: "portador-global",
      title: "PORTADOR GLOBAL Import / Export FAQs",
      description: "International food, household goods, documents, gifts, luggage, China imports, Dubai imports, Saudi and UAE movement questions.",
      links: [
        { label: "PORTADOR GLOBAL", href: "/services/portador-global" },
        { label: "Restricted Goods", href: "/restricted-goods" },
        { label: "Excess Baggage", href: "/cargo/excess-baggage" },
        { label: "Contact Operations", href: "/contact" }
      ],
      faqs: categoryFaqs([
        ...(global?.faqs ?? []),
        ...matchingFaqs(["global", "international", "import", "export", "customs", "food", "ghee", "documents", "household", "china", "dubai", "saudi", "uae"])
      ], usedQuestions)
    },
    {
      id: "industrial-b2b",
      title: "Industrial, Manufacturing & B2B FAQs",
      description: "Factory line-down cargo, machine parts, manufacturing downtime, heavy shipments, aviation spares, medical equipment, tender and event emergencies.",
      links: [
        { label: "Manufacturing Logistics", href: "/industries/manufacturing-logistics" },
        { label: "Aviation Logistics", href: "/industries/aviation-logistics" },
        { label: "Machine Breakdown", href: "/cargo/machine-breakdown" },
        { label: "AOG Cargo", href: "/cargo/aog-cargo" },
        { label: "Tender Documents", href: "/cargo/tender-document-delivery" }
      ],
      faqs: categoryFaqs([
        ...pageFaqs([...industries, ...cargoPages, ...useCasePages, ...authorityPages], ["manufacturing", "machine", "factory", "breakdown", "aog", "aviation", "medical", "event", "tender", "government", "defence", "high-value", "heavy"]),
        ...matchingFaqs(["machine", "factory", "manufacturing", "aog", "aviation", "medical", "event", "tender", "heavy", "b2b", "commercial"])
      ], usedQuestions)
    },
    {
      id: "it-hardware",
      title: "IT Hardware, Laptop & Data Center FAQs",
      description: "Laptop courier, server movement, corporate IT assets, electronics cargo, data center equipment, lithium battery rules, and urgent hardware recovery.",
      links: [
        { label: "Electronics Logistics", href: "/industries/electronics-logistics" },
        { label: "Laptop Shipping", href: "/cargo/laptop-shipping" },
        { label: "Battery Cargo", href: "/cargo/battery-cargo" },
        { label: "Lithium Battery Cargo", href: "/cargo/lithium-battery-cargo" }
      ],
      faqs: categoryFaqs([
        ...pageFaqs([...industries, ...cargoPages, ...useCasePages, ...authorityPages], ["electronics", "laptop", "server", "data-center", "data center", "it", "hardware", "battery", "lithium"]),
        ...matchingFaqs(["laptop", "server", "electronics", "it hardware", "data center", "battery", "lithium", "mobile phone"])
      ], usedQuestions)
    },
    {
      id: "dangerous-goods",
      title: "Dangerous Goods, Battery & Restricted Cargo FAQs",
      description: "DG cargo, lithium batteries, MSDS, dry ice, pharma, medical, restricted goods, dangerous cargo declarations, and compliance review.",
      links: [
        { label: "Dangerous Goods", href: "/cargo/dangerous-goods" },
        { label: "Lithium Battery Cargo", href: "/cargo/lithium-battery-cargo" },
        { label: "Restricted Goods", href: "/restricted-goods" },
        { label: "Medical Equipment", href: "/cargo/medical-equipment" },
        { label: "Temperature Controlled Cargo", href: "/cargo/temperature-controlled-cargo" }
      ],
      faqs: categoryFaqs([
        ...pageFaqs([...cargoPages, ...industries, ...authorityPages], ["dangerous", "dg", "battery", "lithium", "restricted", "perishable", "temperature", "medical", "pharma", "dry-ice", "dry ice"]),
        ...matchingFaqs(["dangerous", "dg", "battery", "lithium", "restricted", "msds", "dry ice", "pharma", "medical", "compliance", "chemical"])
      ], usedQuestions)
    },
    {
      id: "gst-eway-compliance",
      title: "GST, E-Way Bill, Invoice & Claims FAQs",
      description: "GST invoice, e-way bill, commercial invoice, POD, declared value, FOV, Carrier Risk, claims, refunds, restricted goods, and documentation questions.",
      links: [
        { label: "Booking & Refund Policy", href: "/booking-refund-policy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
        { label: "Restricted Goods", href: "/restricted-goods" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        ...legalLinks
      ],
      faqs: categoryFaqs([
        ...customerEducationFaqs,
        ...matchingFaqs(["gst", "e-way", "eway", "invoice", "pod", "claim", "refund", "fov", "carrier risk", "own risk", "tax", "commercial invoice", "declared value", "payment"])
      ], usedQuestions)
    },
    {
      id: "airport-city-route",
      title: "Airport, City & Route FAQs",
      description: "Airport cargo, terminal pickup, city-specific same-day movement, route questions, airport-to-home baggage, and urgent cargo near airports.",
      links: [
        { label: "All Airports", href: "/airports" },
        { label: "All Cities", href: "/cities" },
        { label: "All Routes", href: "/routes" },
        { label: "Delhi to Mumbai", href: "/routes/delhi-to-mumbai" },
        { label: "Gurugram", href: "/cities/gurugram" }
      ],
      faqs: categoryFaqs([
        ...faqsFromPages(pagePools.airports),
        ...faqsFromPages(pagePools.cities),
        ...faqsFromPages(pagePools.routes)
      ], usedQuestions)
    },
    {
      id: "sos-air-cargo",
      title: "Same-Day Air Cargo & NFO FAQs",
      description: "Questions about fastest same-day support, next flight out cargo, urgent documents, emergency business shipments, and airport-linked movement.",
      links: [
        { label: "PORTADOR SOS", href: "/services/portador-sos" },
        { label: "Same-Day Delivery", href: "/same-day-delivery" },
        { label: "Next Flight Out", href: "/next-flight-out" },
        { label: "Airport-to-Airport Cargo", href: "/airport-to-airport-cargo" }
      ],
      faqs: categoryFaqs([
        ...(sos?.faqs ?? []),
        ...matchingFaqs(["same-day", "same day", "next flight", "nfo", "airport-to-airport", "airport cargo"])
      ], usedQuestions)
    },
    {
      id: "general-service",
      title: "General Urgent Cargo FAQs",
      description: "Broad customer questions about same-day delivery, urgent parcel movement, airport cargo, tracking, pricing, liability, and support.",
      links: [
        { label: "PORTADOR SOS", href: "/services/portador-sos" },
        { label: "Track Shipment", href: site.trackingUrl },
        { label: "Contact Operations", href: "/contact" },
        { label: "WhatsApp Operations", href: `${site.whatsapp}?text=${encodeURIComponent("Hi PORTADOR,\n\nNeed assistance with a shipment.\n\nPickup:\nDelivery:\nWeight:\nDeadline:\n\nPlease assist.")}` }
      ],
      faqs: categoryFaqs([...(sos?.faqs ?? []), ...customerEducationFaqs], usedQuestions)
    }
  ];

  return categories.filter((category) => category.faqs.length > 0);
}

export const faqAuthorityCategories = buildFAQAuthorityCategories();
export const faqAuthorityFaqs = faqAuthorityCategories.flatMap((category) => category.faqs);
export const faqAuthorityStats = Object.fromEntries(faqAuthorityCategories.map((category) => [category.id, category.faqs.length]));
