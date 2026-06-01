import { site, socialLinks } from "@/lib/site";

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "PORTADOR SOS premium air cargo services",
  itemListElement: [
    {
      name: "PORTADOR SOS",
      serviceType: "Same-Day Air Cargo + Next Flight Out Logistics",
      description: "Flagship emergency domestic air cargo service for same-day, NFO, 10-16 hour feasibility where possible, airport-to-airport movement, urgent door coordination, and 24x7 human operations."
    },
    {
      name: "PORTADOR EXPRESS",
      serviceType: "Next Business Day & Second Business Day Premium Air Cargo",
      description: "Premium air-priority movement for planned B2B cargo, 10kg-100kg+ shipments, and reliable next business day or second business day cargo."
    },
    {
      name: "PORTADOR BLACK",
      serviceType: "OBC / Hand Carry / Runner / VIP Short-Notice Logistics",
      description: "VIP hand-carry and runner logistics for founders, CEOs, HNIs, UHNWIs, family offices, confidential cargo, and high-value shipments."
    },
    {
      name: "PORTADOR GLOBAL",
      serviceType: "Urgent International Import / Export Air Cargo",
      description: "Urgent cross-border air cargo coordination for premium international air freight, import/export movement, documentation review, and compliance-aware shipment planning."
    },
    {
      name: "Secondary Cargo Categories",
      serviceType: "Excess Baggage, Dangerous Goods, Batteries & Restricted Cargo, Perishables, Temperature Controlled Cargo, Medical Equipment, AOG Cargo, Machine Parts, Legal Documents, Air Cargo Charter, High-Value Cargo",
      description: "Cargo categories checked under PORTADOR SOS, EXPRESS, BLACK, or GLOBAL based on urgency, documents, packing, compliance requirements, and serviceability."
    }
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      areaServed: "India",
      serviceType: service.serviceType,
      description: service.description,
      serviceOutput: "Airport-linked air cargo support, real-time monitoring, regulatory compliance verification where relevant, and human operations desk support for urgent cargo."
    }
  }))
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country
  },
  slogan: site.tagline,
  description: "Premium SOS air cargo operations platform specializing in PORTADOR SOS same-day air cargo, next flight out coordination, airport cargo support, PORTADOR EXPRESS, PORTADOR BLACK, PORTADOR GLOBAL, regulated cargo review, and mission-critical shipments across India.",
  areaServed: "India",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["en", "hi"]
  },
  hasOfferCatalog: offerCatalog,
  sameAs: [site.url, ...socialLinks.map((link) => link.href)]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  image: `${site.url}${site.logo}`,
  logo: `${site.url}${site.logo}`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country
  },
  priceRange: "$$",
  slogan: site.tagline,
  description: "24x7 SOS air cargo operations for same-day air cargo, next flight out cargo, airport-to-airport movement, urgent support, PORTADOR EXPRESS, PORTADOR BLACK, PORTADOR GLOBAL, and mission-critical shipments across India.",
  additionalType: "https://schema.org/LogisticsBusiness",
  areaServed: [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Kolkata",
    "India"
  ],
  knowsAbout: [
    "Same-day air cargo",
    "Next Flight Out logistics",
    "Airport-to-airport cargo",
    "PORTADOR SOS",
    "PORTADOR EXPRESS",
    "PORTADOR BLACK",
    "PORTADOR GLOBAL",
    "Dangerous goods cargo",
    "Battery cargo",
    "On Board Courier",
    "Mission-critical logistics"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["en", "hi"]
  },
  hasOfferCatalog: offerCatalog,
  sameAs: [site.url, ...socialLinks.map((link) => link.href)],
  serviceOutput: "Same-day air cargo, next flight out logistics, airport cargo support, real-time monitoring, and human operations coordination for urgent shipments."
};

export const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "PORTADOR SOS Operations Desk",
  url: site.url,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country
  }
};

export const serviceSchemas = offerCatalog.itemListElement.map((offer: any) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: offer.itemOffered.name,
  serviceType: offer.itemOffered.serviceType,
  description: offer.itemOffered.description,
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email
  },
  areaServed: "India"
}));

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.trackingUrl}/{search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`
    }))
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function serviceSchema(page: { title: string; description: string; slug: string }, basePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    serviceType: page.title,
    serviceOutput: "Airport-linked air cargo support, real-time monitoring, human operations desk coordination, and regulated cargo review where relevant.",
    hasOfferCatalog: offerCatalog,
    url: `${site.url}${basePath}/${page.slug}`
  };
}

export function webPageSchema(page: { title: string; description: string; slug: string }, basePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${site.url}${basePath}/${page.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url
    },
    about: ["urgent air cargo", "same-day air cargo", "airport cargo", "PORTADOR SOS", "time-critical logistics"]
  };
}

export function howToSchema({ name, description, steps, url }: { name: string; description: string; steps: string[]; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step,
      text: step
    }))
  };
}

export function articleSchema(page: { title: string; description: string; slug: string }, basePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    mainEntityOfPage: `${site.url}${basePath}/${page.slug}`
  };
}
