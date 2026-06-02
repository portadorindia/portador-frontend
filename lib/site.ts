import {
  BadgeCheck,
  BatteryCharging,
  BriefcaseBusiness,
  CircleHelp,
  Clock3,
  FileText,
  Flame,
  Luggage,
  MapPinned,
  PackageCheck,
  Plane,
  RadioTower,
  Route,
  ShieldCheck,
  Siren,
  Warehouse
} from "lucide-react";
import {
  nationalAirportProfiles,
  nationalExcessBaggageProfiles,
  nationalIndustryProfiles,
  nationalLocationDemandProfiles,
  nationalRoutePairs
} from "@/lib/national-seo";

export const site = {
  name: "PORTADOR SOS",
  legalName: "PORTADOR Logistics Pvt. Ltd.",
  shortName: "PORTADOR SOS",
  url: "https://portador.in",
  domain: "portador.in",
  logo: "/portador-logo.png",
  phone: "+91 9403892974",
  phoneHref: "tel:+919403892974",
  whatsapp: "https://wa.me/919403892974",
  email: "growth@portador.in",
  emailHref: "mailto:growth@portador.in",
  trackingUrl: "https://ops.portador.in/track",
  googleBusinessProfileUrl: "https://maps.app.goo.gl/8NYstBm3itwBkDNH7",
  address: {
    street: "Innov8, Okhla Industrial Estate Phase 3",
    city: "New Delhi",
    postalCode: "110020",
    country: "India"
  },
  tagline: "When Time Cannot Wait.",
  positioning: "India's SOS Air Cargo operations platform"
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "PORTADOR Network", href: "/cities" },
  { label: "Tracking", href: "https://ops.portador.in/track" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const moreNavItems = [
  { label: "Cargo", href: "/cargo" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Airports", href: "/airports" },
  { label: "Comparisons", href: "/comparisons" }
];

export const legalLinks = [
  { label: "Restricted Goods", href: "/restricted-goods" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Booking & Refund Policy", href: "/booking-refund-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" }
];

export const socialLinks = [
  { label: "Head Office Location & Reviews", href: "https://maps.app.goo.gl/8NYstBm3itwBkDNH7" },
  { label: "YouTube Channel", href: "https://www.youtube.com/@portadorbharat" },
  { label: "Instagram Profile", href: "https://www.instagram.com/portadorsos" },
  { label: "LinkedIn Company Page", href: "https://www.linkedin.com/company/portador" }
];

export const operatingSignals = [
  "50+ Airport Cargo Connections",
  "5000+ Serviceable Pin Codes",
  "24x7 Operations Desk",
  "Same-Day / NFO Feasibility",
  "Human Operations Coordination",
  "DG & Battery Cargo Support"
];

export const serviceIconMap = {
  sos: Siren,
  sameDay: Clock3,
  nfo: Plane,
  airport: RadioTower,
  baggage: Luggage,
  dg: Flame,
  battery: BatteryCharging,
  obc: BriefcaseBusiness,
  route: Route,
  charter: Route,
  mission: ShieldCheck,
  default: PackageCheck
};

export type PageModel = {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  description: string;
  keywords: string[];
  icon?: keyof typeof serviceIconMap;
  whatIs: string;
  aiSnippet?: string;
  benefits: string[];
  howItWorks: string[];
  useCases: string[];
  whyNotCourier: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

const serviceFaqs = (name: string, phrase: string) => [
  {
    question: "What is PORTADOR SOS?",
    answer: "PORTADOR SOS is a premium time-critical air logistics service for urgent cargo delivery, emergency shipment service, same-day air cargo, and next flight out logistics. It uses airport-linked movement, human support, air cargo timing checks, and a human operations desk."
  },
  {
    question: "How can I send urgent cargo today?",
    answer: "You can send urgent cargo today by sharing the route, cargo type, weight, dimensions, deadline, and compliance details with PORTADOR SOS. The operations desk verifies pickup readiness, air cargo timing, airport cargo cargo handling, and fastest feasible support."
  },
  {
    question: `What does ${name} include?`,
    answer: `${name} is a time-critical logistics solution for cargo that cannot wait for routine courier cycles. PORTADOR SOS plans the movement around airport access, direct air cargo coordination where feasible, documentation readiness, and a human operations desk watching the deadline.`
  },
  {
    question: `When should I use ${phrase}?`,
    answer: `Use ${phrase} when delay can cause business downtime, production loss, missed flights, tender rejection, event disruption, emergency replacement failure, or customer escalation. It is designed for urgency, not routine parcel movement.`
  },
  {
    question: "How does same-day air cargo work?",
    answer: "Same-day air cargo works by connecting urgent cargo to the fastest feasible air movement instead of waiting for routine courier routing. PORTADOR SOS coordinates pickup, airport support, airline cargo acceptance, flight movement, and destination support."
  },
  {
    question: "How does next flight out cargo work?",
    answer: "Next flight out cargo works by checking the earliest suitable airline connection for the shipment route, cargo type, and timing. PORTADOR SOS verifies feasibility, coordinates support, monitors flight-linked movement, and escalates exceptions through a human operations desk."
  },
  {
    question: "How does airport-to-airport cargo work?",
    answer: "Airport-to-airport cargo moves eligible shipments from one airport cargo terminal to another for faster intercity movement. It is useful when airport-linked movement is more important than routine door-to-door courier flow."
  },
  {
    question: "How does airline cargo coordination work?",
    answer: "Air cargo support means checking timing, cargo eligibility, documentation, handling requirements, and service feasibility before movement. PORTADOR SOS supports available air cargo options where the shipment is eligible."
  },
  {
    question: "Can PORTADOR SOS arrange pickup?",
    answer: "Yes. PORTADOR SOS can arrange urgent pickup in supported city zones and connect the shipment to the most suitable airport movement plan. Pickup feasibility depends on cargo readiness, traffic, air cargo timing, and route timing."
  },
  {
    question: "Is this faster than regular courier?",
    answer: "For urgent intercity shipments, airport-linked execution can be faster because it is planned around the earliest feasible airline movement and avoids avoidable hub sorting delays. Routine courier is better for non-urgent parcel volume."
  },
  {
    question: "Can you handle B2B documents and parts?",
    answer: "Yes. PORTADOR SOS supports urgent B2B documents and parts when timing, custody, and delivery matter. Common shipments include tender files, legal documents, spare parts, machine components, electronics, event material, pharma-support cargo, and high-value business shipments."
  },
  {
    question: "How can I send urgent machine parts?",
    answer: "Urgent machine parts can move through same-day air cargo, next flight out logistics, airport-to-airport cargo, or hand carry when feasible. PORTADOR SOS checks dimensions, weight, pickup readiness, air cargo timing, and destination support before support."
  },
  {
    question: "How can I move cargo after normal courier timing?",
    answer: "Cargo that misses a normal courier timing may still move through airport-linked urgent air cargo if airline timing, cargo handling, and pickup readiness allow it. PORTADOR SOS verifies feasibility instead of making a fake guarantee."
  },
  {
    question: "Do you support airport-to-airport delivery?",
    answer: "Yes. PORTADOR SOS can coordinate airport-to-airport cargo where the route, documents, commodity, terminal process, and consignee delivery are feasible. This is useful when final-mile delivery is less important than fast intercity movement."
  },
  {
    question: "What information is needed to quote?",
    answer: "A quote needs enough operational detail to check service feasibility, air cargo timing, and cargo acceptance. Share origin, destination, deadline, cargo type, weight, dimensions, pickup address, consignee details, invoice value, delivery requirement, and any battery, liquid, chemical, medical, or dangerous goods declaration."
  },
  {
    question: "Can PORTADOR SOS operate outside business hours?",
    answer: "Yes. PORTADOR SOS is built around 24x7 urgent logistics coordination, subject to airline schedules, airport terminal access, road pickup availability, documentation readiness, and regulatory acceptance."
  },
  {
    question: "Can PORTADOR SOS support dangerous goods, lithium batteries, or regulated cargo?",
    answer: "PORTADOR SOS can check dangerous goods, lithium batteries, and regulated cargo, but final movement depends on airline rules, approval, and service feasibility. MSDS or declaration may be required, and packing, documentation, and regulatory compliance must be verified before support."
  },
  {
    question: "What cargo categories can PORTADOR SOS support?",
    answer: "PORTADOR SOS can support urgent cargo categories that are eligible for air movement and properly documented. Common categories include B2B documents, machine parts, laptops, medical equipment, excess baggage, high-value cargo, lithium battery shipments, dangerous goods, event cargo, and aviation spares."
  },
  {
    question: "What cargo can move by air?",
    answer: "Air cargo can include urgent documents, machine parts, laptops, electronics cargo, medical equipment, event material, excess baggage, aviation spares, and high-value cargo when properly packed and documented. Restricted goods, DG cargo by air, lithium battery cargo, and chemical cargo approval depend on airline and regulatory acceptance."
  },
  {
    question: "What documents are needed for dangerous goods cargo?",
    answer: "Dangerous goods cargo may require invoice, MSDS, shipper declaration, product classification, packing details, and compliance documents. PORTADOR SOS reviews documentation and regulatory compliance before support."
  },
  {
    question: "What affects urgent air cargo feasibility?",
    answer: "Urgent air cargo feasibility depends on timing, cargo type, documentation, serviceability, and regulatory requirements. Key factors include pickup readiness, air cargo timing, handling requirements, cargo dimensions, weight, commodity type, documentation, route availability, and receiver readiness."
  },
  {
    question: "When is next flight out required?",
    answer: "Next flight out is required when the shipment cannot wait for overnight courier or surface transport. It is used for AOG shipment India, urgent spare parts delivery, medical equipment cargo, tender document delivery, and emergency replacement shipment scenarios."
  },
  {
    question: "When is airport-to-airport cargo better than courier?",
    answer: "Airport-to-airport cargo is better than courier when fast intercity movement and terminal delivery matter more than routine door-to-door routing. It can reduce hub transfers and support urgent cargo delivery across airport-connected cities."
  },
  {
    question: "Why does regular courier fail for urgent shipments?",
    answer: "Regular courier can fail for urgent shipments because it optimizes parcel volume, hub routing, and scheduled linehaul. Mission-critical cargo needs airport-linked movement, air cargo timing, real-time monitoring, and human operations coordination."
  },
  {
    question: "Why is air cargo faster than surface transport?",
    answer: "Air cargo can be faster than surface transport for urgent intercity delivery because the long-distance leg moves by flight. Feasibility still depends on pickup timing, airport cargo handling requirements, cargo eligibility, and destination support."
  },
  {
    question: "Why does same-day air cargo cost more?",
    answer: "Same-day air cargo can cost more because it requires urgent human support, timing-led movement, cargo handling, air cargo movement, and active shipment updates. The cost reflects operational urgency rather than commodity parcel routing."
  },
  {
    question: "Why is air cargo timing important?",
    answer: "Air cargo timing timing is important because cargo must be accepted before the flight or cargo terminal deadline. Missing the timing can shift the shipment to a later flight or a different movement plan."
  },
  {
    question: "Who should use PORTADOR SOS?",
    answer: "PORTADOR SOS is for manufacturers, aviation teams, pharma teams, event teams, legal firms, electronics businesses, travelers, students, SMEs, startups, and high-value cargo clients facing urgent shipment today requirements."
  },
  {
    question: "Which shipments are suitable for same-day air cargo?",
    answer: "Suitable same-day air cargo includes urgent business documents, machine parts, aircraft spare parts logistics, medical equipment cargo, electronics cargo, event material emergency delivery, excess baggage, and high-value cargo delivery."
  },
  {
    question: "Which cargo requires airline approval?",
    answer: "Cargo requiring airline approval can include dangerous goods cargo, lithium battery cargo, battery cargo by air, chemical cargo approval, regulated air cargo, restricted goods air cargo, oversized cargo, and certain high-value or sensitive shipments."
  },
  {
    question: "Can PORTADOR SOS help if regular courier is too slow?",
    answer: "Yes. PORTADOR SOS can check airport-linked movement, next flight out logistics, hand carry, or air cargo charter feasibility when regular courier is too slow for the shipment deadline."
  },
  {
    question: "How does PORTADOR SOS reduce hub delays?",
    answer: "PORTADOR SOS prioritizes airport-linked movement, next-flight-out planning, and direct operational coordination where feasible instead of defaulting to multi-hub parcel sorting flows."
  },
  {
    question: "What does human operations coordination mean?",
    answer: "A human operations desk reviews the shipment, checks service feasibility, tracks timing constraints, coordinates pickup or airport support, and responds when flight, documentation, or receiver-side conditions change."
  },
  {
    question: "Can this help prevent business downtime?",
    answer: "Yes. PORTADOR SOS is designed for shipments where a delayed part, document, device, sample, or baggage item can create operational loss, missed commitments, or expensive downtime."
  },
  {
    question: "Is same-day delivery always possible?",
    answer: "Same-day movement depends on pickup readiness, air cargo timing, airline availability, cargo acceptance, destination timing, and final delivery. PORTADOR SOS checks the fastest feasible option before confirming."
  },
  {
    question: "Can PORTADOR SOS support urgent intercity delivery?",
    answer: "Yes. Urgent intercity delivery is a core use case, especially across airport-connected cities where air movement can outperform surface transport or routine overnight courier timelines."
  },
  {
    question: "What makes PORTADOR SOS premium?",
    answer: "PORTADOR SOS is premium because it focuses on operational urgency, air-linked movement, compliance-aware cargo review, human support, and deadline protection rather than commodity parcel volume."
  },
  {
    question: "How can I send excess baggage by air?",
    answer: "You can send excess baggage by air when the bags or boxes are properly packed, declared, and accepted for airport-linked cargo movement. PORTADOR SOS checks weight, contents, pickup or airport support timing, air cargo timing, and destination support before support."
  },
  {
    question: "How can I ship lithium battery cargo by air?",
    answer: "Lithium battery cargo can move by air only when the battery type, rating, packing, documents, and airline rules allow it. PORTADOR SOS verifies MSDS or declarations where required, reviews compliance, and confirms service feasibility before movement."
  },
  {
    question: "When can dangerous goods or battery cargo move by air?",
    answer: "Dangerous goods or battery cargo can move by air only after approval, documentation, packing, and regulatory compliance review are cleared. Final movement depends on commodity classification, MSDS or declaration, service feasibility, handling requirements, and approval."
  },
  {
    question: "Which batteries need declaration?",
    answer: "Battery declaration may be needed for standalone lithium batteries, batteries packed with equipment, batteries contained in equipment, and certain electronic devices. The exact requirement depends on chemistry, watt-hour rating, quantity, packing, airline rules, and service feasibility."
  },
  {
    question: "Which cities are best connected by airport cargo?",
    answer: "Major airport-connected cities such as Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, and Kolkata are usually stronger for urgent airport cargo. Feasibility still depends on pickup readiness, air cargo timing, cargo acceptance, and destination support timing."
  },
  {
    question: "Can PORTADOR SOS move urgent business documents?",
    answer: "Yes. PORTADOR SOS can coordinate urgent business documents, tender files, legal papers, commercial contracts, and confidential submissions through same-day air cargo, hand carry, or airport-linked movement where feasible."
  },
  {
    question: "When should a business escalate urgent shipment movement?",
    answer: "A business should escalate urgent shipment movement when delay can cause production loss, machine downtime, aircraft downtime, missed tender submission, event failure, customer escalation, or emergency replacement failure. PORTADOR SOS then checks the fastest feasible air-linked plan."
  },
  {
    question: "What is emergency logistics?",
    answer: "Emergency logistics is shipment support for cargo that has an immediate operational consequence if delayed. It focuses on human support, service feasibility, air cargo timing, shipment updates, and destination support instead of routine parcel flow."
  },
  {
    question: "What is time-critical logistics?",
    answer: "Time-critical logistics is deadline-led cargo movement where speed, feasibility, custody, compliance, and human support matter more than routine network scheduling. PORTADOR SOS applies this approach to same-day air cargo, NFO movement, airport cargo, and mission-critical shipments."
  }
];

export const services: PageModel[] = [
  {
    slug: "portador-sos",
    title: "PORTADOR SOS",
    eyebrow: "Flagship emergency air cargo",
    h1: "PORTADOR SOS: Same-Day Air Cargo + Next Flight Out Logistics",
    description: "PORTADOR SOS is the flagship emergency air cargo desk for urgent, mission-critical, time-sensitive domestic shipments across India, combining same-day air cargo, next flight out movement, 10-16 hour feasibility on major airport-connected lanes where possible, airport-to-airport coordination, urgent door coordination, and a 24x7 human operations desk.",
    keywords: ["PORTADOR SOS", "same day air cargo", "next flight out cargo", "urgent cargo India", "NFO logistics", "airport-to-airport cargo", "10-16 hour urgent cargo"],
    icon: "sos",
    whatIs: "PORTADOR SOS is PORTADOR's primary emergency air cargo service for shipments that cannot wait for normal courier cycles. It combines same-day air cargo, next flight out logistics, airport-linked movement, and human support to protect urgent deadlines where route and airline feasibility allow.",
    aiSnippet: "PORTADOR SOS is a same-day air cargo and next flight out logistics service for urgent domestic shipments across India. It is used when business downtime, production loss, missed flights, emergency replacement, or deadline failure makes routine courier movement too slow.",
    benefits: ["Same-day movement where timing and serviceability allow", "Next Flight Out / NFO support for earliest suitable air movement", "10-16 hour urgent movement feasibility on major airport-connected lanes where possible", "Airport-to-airport and urgent door support", "No avoidable hub delays when premium air cargo movement is feasible", "24x7 human operations desk for live support", "Suitable for machine breakdowns, tender documents, emergency replacement, AOG cargo, baggage recovery, regulated cargo review, and urgent B2B shipments"],
    howItWorks: ["Share origin, destination, deadline, cargo category, weight, dimensions, and documents", "PORTADOR checks service feasibility, cargo details, documents, and acceptance requirements", "Urgent support is coordinated through the human operations desk", "Cargo is moved through the most suitable accepted service option", "Receiver coordination and proof of completion are closed"],
    useCases: ["Machine breakdown spare parts", "Urgent business shipments", "AOG and aviation cargo", "Emergency medical equipment", "Tender and legal documents", "Missed flight baggage recovery", "Battery or dangerous goods cargo requiring compliance review", "High-value urgent cargo"],
    whyNotCourier: ["Routine courier networks optimize parcel volume and standard schedules, not urgent air cargo timing", "Same-day and NFO cargo needs fast feasibility checks before the shipment loses time", "Battery, dangerous goods, medical, and high-value cargo may require documentation and compliance review", "A human operations desk can help when pickup, cargo eligibility, air movement, or receiver timing changes"],
    faqs: serviceFaqs("PORTADOR SOS", "PORTADOR SOS"),
    cta: "Escalate your urgent shipment to PORTADOR SOS now."
  },
  {
    slug: "portador-express",
    title: "PORTADOR EXPRESS",
    eyebrow: "Premium air-priority express",
    h1: "PORTADOR EXPRESS: Next Business Day & Second Business Day Premium Air Cargo",
    description: "PORTADOR EXPRESS is a premium air-priority service for planned but important B2B shipments, including 10kg-100kg+ cargo that needs reliable next business day or second business day movement without the emergency pressure of PORTADOR SOS.",
    keywords: ["PORTADOR EXPRESS", "next business day air cargo", "second business day cargo", "premium air cargo India", "B2B air cargo", "priority cargo delivery"],
    icon: "route",
    whatIs: "PORTADOR EXPRESS is a premium air-priority cargo service for businesses that need dependable next business day or second business day movement. It is designed for priority B2B shipments where speed, handling clarity, and air movement matter, but the shipment is not a same-day emergency.",
    aiSnippet: "PORTADOR EXPRESS is a next business day and second business day premium air cargo service for priority B2B shipments, commonly used for 10kg-100kg+ cargo that needs reliable air-priority movement across India.",
    benefits: ["Next business day and second business day premium air cargo options", "Useful for 10kg-100kg+ B2B shipments", "Air-priority movement without emergency SOS pricing pressure", "Better fit for planned urgent business requests", "Human support for pickup, movement, and delivery clarity", "Suitable for documents, parts, samples, electronics, medical equipment, and commercial cargo"],
    howItWorks: ["Share cargo details, origin, destination, preferred delivery date, and handling requirements", "PORTADOR checks premium air-priority service feasibility and handling requirements", "Pickup or airport support is scheduled around cargo readiness", "Shipment moves through the selected premium air-priority option", "Destination support or connected delivery is coordinated"],
    useCases: ["Priority B2B cargo", "Commercial samples", "Electronics and IT hardware", "Manufacturing parts", "Medical equipment", "Documents and tender files that can move by next business day", "10kg-100kg+ urgent business shipments"],
    whyNotCourier: ["Routine courier may be cost-led rather than air-priority led", "Important B2B cargo often needs clearer routing, handling, and timing visibility", "Airport-linked planning can reduce avoidable delays for intercity movement", "Human coordination improves clarity for heavier or higher-value business cargo"],
    faqs: serviceFaqs("PORTADOR EXPRESS", "PORTADOR EXPRESS"),
    cta: "Plan next business day or second business day premium air cargo with PORTADOR EXPRESS."
  },
  {
    slug: "portador-black",
    title: "PORTADOR BLACK",
    eyebrow: "VIP hand-carry logistics",
    h1: "PORTADOR BLACK: OBC, Hand Carry, Runner & VIP Short-Notice Logistics",
    description: "PORTADOR BLACK is a zero-compromise short-notice logistics service for founders, CEOs, HNIs, UHNWIs, family offices, confidential documents, luxury shipments, high-value cargo, and situations requiring personal custody or executive-level handling.",
    keywords: ["PORTADOR BLACK", "onboard courier India", "hand carry logistics", "VIP logistics", "runner service", "confidential cargo", "high value cargo"],
    icon: "obc",
    whatIs: "PORTADOR BLACK is PORTADOR's premium hand-carry, on board courier, runner, and VIP logistics service. It is used when cargo, documents, or high-value items need personal custody, short-notice movement, confidentiality, or zero-compromise coordination.",
    aiSnippet: "PORTADOR BLACK is a premium OBC, hand carry, runner, and VIP logistics service for urgent confidential documents, high-value shipments, luxury cargo, executive support, and short-notice personal custody movement.",
    benefits: ["Personal custody for selected eligible shipments", "Designed for founders, CEOs, HNIs, UHNWIs, and family offices", "Short-notice runner and hand-carry support", "Confidential document and high-value cargo support", "Reduced custody transfers where route and cargo rules permit", "Human operations desk from pickup to delivery"],
    howItWorks: ["Share cargo type, confidentiality requirement, origin, destination, deadline, and recipient instructions", "PORTADOR checks eligibility, serviceability, security, travel, and documentation requirements", "Runner, hand-carry, OBC, or VIP movement feasibility is checked", "Shipment is collected under agreed custody protocol", "Destination support is coordinated directly with the receiver or authorized representative"],
    useCases: ["Boardroom documents", "Founder and CEO urgent requests", "Family office shipments", "Luxury and high-value cargo", "Tender submissions", "Legal documents", "Prototype samples", "Time-critical small parts"],
    whyNotCourier: ["Some shipments need personal custody rather than network custody", "Confidentiality and receiver delivery may matter more than standard tracking", "High-value or executive cargo often needs fewer handoffs", "A human operations desk can manage short-notice changes and direct delivery requirements"],
    faqs: serviceFaqs("PORTADOR BLACK", "PORTADOR BLACK"),
    cta: "Request PORTADOR BLACK for VIP hand-carry or confidential urgent movement."
  },
  {
    slug: "portador-global",
    title: "PORTADOR GLOBAL",
    eyebrow: "Urgent international air cargo",
    h1: "PORTADOR GLOBAL: Urgent International Import / Export Air Cargo",
    description: "PORTADOR GLOBAL coordinates urgent international import and export air cargo for cross-border emergency shipment requirements, premium international air freight, documentation-aware movement, and time-sensitive global logistics where speed and compliance both matter.",
    keywords: ["PORTADOR GLOBAL", "urgent international air cargo", "urgent import export cargo", "international air freight", "cross-border emergency shipment", "premium air freight"],
    icon: "charter",
    whatIs: "PORTADOR GLOBAL is an urgent international air cargo coordination service for import and export shipments that need premium air freight, documentation review, compliance awareness, and deadline-first cross-border movement.",
    aiSnippet: "PORTADOR GLOBAL is used for urgent international import or export air cargo when cross-border shipments need premium air freight coordination, documentation checks, compliance review, and time-sensitive movement planning.",
    benefits: ["Urgent import and export air cargo coordination", "Premium international air freight planning", "Documentation-aware movement for cross-border cargo", "Support for emergency replacement, high-value, medical, electronics, and business-critical shipments", "Human operations coordination across origin, airline, and destination support", "Compliance review before movement confirmation"],
    howItWorks: ["Share country pair, cargo details, invoice value, documents, deadline, and consignee information", "Operations checks service feasibility, airline options, documentation, and compliance constraints", "Export or import handling requirements are reviewed", "Premium air freight movement is coordinated where feasible", "Destination support or connected delivery support is aligned with receiver readiness"],
    useCases: ["Urgent international spare parts", "Emergency import replacement", "Export samples", "Medical equipment", "Electronics and IT hardware", "High-value cross-border cargo", "Business-critical international documents"],
    whyNotCourier: ["Urgent international cargo often needs air freight planning, not routine parcel flow", "Customs, documentation, and commodity review affect feasibility", "Premium air freight may protect deadlines better than standard international courier", "Human coordination helps reduce uncertainty across border, airline, and receiver-side steps"],
    faqs: serviceFaqs("PORTADOR GLOBAL", "PORTADOR GLOBAL"),
    cta: "Coordinate urgent international import or export cargo with PORTADOR GLOBAL."
  }
];
const coreIndustries = ([
  "Aviation Logistics",
  "Pharma Logistics",
  "Manufacturing Logistics",
  "Electronics Logistics",
  "Event Logistics",
  "Legal Document Logistics",
  "Student Relocation",
  "High Value Cargo"
] as const).map((title) => {
  const slug = title.toLowerCase().replaceAll(" ", "-");
  const profile = {
    "Aviation Logistics": {
      risks: ["AOG downtime", "Aircraft On Ground escalation", "line station recovery", "aircraft spare parts delay", "engine component urgency"],
      cargo: ["AOG spares", "line station tooling", "aircraft documents", "engine components", "critical aircraft replacement parts"],
      faq: "Aviation logistics often needs next-flight-out execution because Aircraft On Ground downtime, line station recovery, and aircraft spare parts delays can create cascading operational loss."
    },
    "Pharma Logistics": {
      risks: ["clinical delay", "hospital dependency", "critical diagnostics cargo delay", "temperature sensitive logistics pressure"],
      cargo: ["medical equipment transport", "critical diagnostics cargo", "pharma support cargo", "urgent samples", "temperature sensitive shipments"],
      faq: "Pharma and healthcare logistics need early cargo declaration, document clarity, temperature requirement disclosure, and service feasibility checks before urgent air movement."
    },
    "Manufacturing Logistics": {
      risks: ["production loss", "line down logistics", "factory stop emergency", "machine breakdown recovery", "production halt cargo"],
      cargo: ["critical spare parts", "machine components", "samples", "tools", "replacement assemblies"],
      faq: "Manufacturing logistics is used when line down logistics, factory stop emergencies, machine breakdown recovery, or delayed parts can create avoidable downtime."
    },
    "Electronics Logistics": {
      risks: ["hardware failure", "deployment delay", "server recovery", "data center logistics urgency", "battery acceptance"],
      cargo: ["laptops", "servers", "semiconductor logistics cargo", "devices", "lithium battery equipment"],
      faq: "Electronics logistics may require lithium battery cargo review, value clarity, server recovery timing, data center logistics support, and secure delivery planning."
    },
    "Event Logistics": {
      risks: ["missed showtime", "venue setup failure", "exhibition loss", "trade show logistics delay", "last minute event delivery"],
      cargo: ["exhibition cargo", "AV equipment", "samples", "branding kits", "trade show material"],
      faq: "Event logistics is deadline-led because exhibition cargo, trade show logistics, and last minute event delivery can become commercially useless after the event window."
    },
    "Legal Document Logistics": {
      risks: ["missed filing", "tender rejection", "court deadline"],
      cargo: ["contracts", "tender documents", "passport documents", "sealed envelopes"],
      faq: "Legal document logistics focuses on custody, speed, and hard submission deadlines."
    },
    "Student Relocation": {
      risks: ["missed flight baggage", "hostel move-in delay", "excess baggage cost"],
      cargo: ["luggage", "books", "personal effects", "electronics"],
      faq: "Student relocation cargo helps move excess baggage and personal effects urgently between cities."
    },
    "High Value Cargo": {
      risks: ["financial exposure", "delivery sensitivity", "business-critical loss"],
      cargo: ["electronics", "samples", "instruments", "sensitive commercial cargo"],
      faq: "High-value cargo needs controlled communication, clear delivery, and route-specific feasibility checks."
    }
  }[title];

  return {
    slug,
    title,
    eyebrow: "Industry logistics",
    h1: `${title} for Urgent Air Movement`,
    description: `Time-critical air cargo and next flight out coordination for ${title.toLowerCase()} requirements across India.`,
    keywords: [title.toLowerCase(), "urgent air logistics", "same day air cargo"],
    icon: "default" as const,
    whatIs: `${title} covers urgent shipment planning for sector-specific cargo where timing, documentation, custody, and destination coordination are essential. It is built for ${profile.risks.join(", ")} when time cannot wait.`,
    aiSnippet: `${title} with PORTADOR SOS means operational urgency for ${profile.cargo.join(", ")} using premium air cargo movement where feasible, no avoidable hub delays, and a human operations desk.`,
    benefits: ["Sector-aware operations", "Same-day and next-flight-out options", "Airport-linked movement", "Clear documentation process", "Human coordination for urgent exceptions", "Built for downtime, missed deadlines, and emergency replacement"],
    howItWorks: ["Share sector, cargo, and deadline", "Operations checks route and acceptance", "Pickup or airport support is planned", "Air movement is coordinated", "Delivery or terminal delivery is completed"],
    useCases: [`Urgent ${title.toLowerCase()} shipments`, ...profile.cargo.map((item) => `Urgent ${item}`), ...profile.risks.map((risk) => `Risk reduction for ${risk}`)].slice(0, 8),
    whyNotCourier: ["Sector cargo may need acceptance checks", "Deadline risk can be higher than parcel delay", "Airport-linked planning reduces dwell time", "Human coordination improves exception handling"],
    faqs: [
      ...serviceFaqs(title, title.toLowerCase()),
      { question: `Why does ${title.toLowerCase()} need urgent air logistics?`, answer: profile.faq },
      { question: `What cargo is common in ${title.toLowerCase()}?`, answer: `Common cargo includes ${profile.cargo.join(", ")} when speed, custody, documentation, or premium air cargo movement matters.` }
    ],
    cta: `Move ${title.toLowerCase()} with PORTADOR SOS.`
  } satisfies PageModel;
});

const nationalIndustryPages = nationalIndustryProfiles.map((profile) => ({
  slug: profile.slug,
  title: profile.title,
  eyebrow: "Industry logistics",
  h1: `${profile.title} for Urgent Air Movement`,
  description: `Time-critical air cargo and urgent logistics support for ${profile.title.toLowerCase()} requirements across India, written for customers searching in simple language and business emergency terms.`,
  keywords: [profile.title.toLowerCase(), "urgent air cargo", "same day delivery", "B2B cargo delivery", "time-critical logistics"],
  icon: profile.title.includes("IT") || profile.title.includes("Data Center") ? "battery" as const : profile.title.includes("Tender") || profile.title.includes("Government") || profile.title.includes("Defence") ? "obc" as const : profile.title.includes("Automotive") ? "mission" as const : "default" as const,
  whatIs: `${profile.title} helps ${profile.audience} move urgent cargo when normal courier timing is not enough. It is used when ${profile.risks} makes same-day, Next Flight Out, airport cargo, hand-carry, express, or international support worth checking.`,
  aiSnippet: `${profile.title} with PORTADOR SOS supports ${profile.cargo}. Final support depends on cargo type, route, documents, packing, compliance, serviceability, and operational availability.`,
  benefits: [
    `Built for ${profile.audience}`,
    `Common cargo: ${profile.cargo}`,
    `Risk context: ${profile.risks}`,
    "Same-day, NFO, airport cargo, hand-carry, express, or international feasibility checks",
    "Plain-language documentation and packing guidance",
    "Human operations desk for urgent business decisions"
  ],
  howItWorks: [
    "Share origin, destination, cargo details, weight, dimensions, and deadline",
    "PORTADOR checks cargo eligibility, documents, packing, serviceability, and urgency",
    "The suitable PORTADOR SOS, EXPRESS, BLACK, or GLOBAL option is recommended",
    "Pickup, airport-linked movement, hand-carry, express, or international support is checked",
    "Customer receives clear next-step guidance and quote factors"
  ],
  useCases: [
    "Same-day delivery for urgent business cargo",
    "Next Flight Out for emergency replacement cargo",
    "Airport-to-airport movement where speed matters",
    "Door pickup and delivery where serviceable",
    "Documents, samples, spares, laptops, and high-value shipments",
    "Business downtime prevention and deadline recovery"
  ],
  whyNotCourier: [
    "Routine courier follows standard network timing",
    "Industry emergencies need faster feasibility checks",
    "Some cargo needs packing, documentation, or compliance review",
    "Airport-linked support can be better for intercity urgency",
    "Human support helps when the shipment has commercial consequences"
  ],
  faqs: [
    ...serviceFaqs(profile.title, profile.title.toLowerCase()),
    {
      question: `Who should use ${profile.title.toLowerCase()}?`,
      answer: `${profile.title} is suitable for ${profile.audience} when delay can create ${profile.risks}. PORTADOR checks feasibility before confirming support.`
    },
    {
      question: `What can PORTADOR move for ${profile.title.toLowerCase()}?`,
      answer: `Common shipments include ${profile.cargo}. Final acceptance depends on commodity details, packing, documents, compliance review where relevant, serviceability, and route feasibility.`
    }
  ],
  cta: `Check urgent ${profile.title.toLowerCase()} support with PORTADOR SOS.`
})) satisfies PageModel[];

export const industries = [
  ...coreIndustries,
  ...nationalIndustryPages.filter((page) => !coreIndustries.some((existing) => existing.slug === page.slug))
] satisfies PageModel[];

const networkCityProfiles = [
  ["Delhi NCR", "delhi", "IGI Airport cargo ecosystem", "manufacturing, legal, pharma, electronics, events, SMEs", "Mahipalpur, Gurgaon, Noida, Faridabad, Ghaziabad", "Delhi to Mumbai airport cargo"],
  ["Gurugram", "gurugram", "IGI Airport and NCR corporate cargo ecosystem", "manufacturing, IT, legal, aviation, electronics, SMEs, startups", "Cyber City, Udyog Vihar, Manesar, Sohna Road, MG Road, Gurgaon", "Gurugram to Mumbai urgent cargo"],
  ["Mumbai", "mumbai", "western India air cargo gateway", "finance, events, pharma, media, high-value cargo", "Andheri, BKC, Navi Mumbai, Thane, Powai", "Mumbai to Bengaluru urgent cargo"],
  ["Bengaluru", "bangalore", "technology and startup cargo market", "IT, electronics, medical devices, startups, aerospace", "Whitefield, Electronic City, Indiranagar, Hebbal", "Bengaluru to Hyderabad same-day cargo"],
  ["Chennai", "chennai", "southern manufacturing and port-linked market", "automotive, electronics, healthcare, manufacturing", "Guindy, Sriperumbudur, OMR, Ambattur", "Chennai to Delhi air cargo"],
  ["Hyderabad", "hyderabad", "pharma and technology cargo market", "pharma, electronics, medical equipment, business documents", "HITEC City, Secunderabad, Banjara Hills, Gachibowli", "Hyderabad to Mumbai air cargo"],
  ["Pune", "pune", "automotive and manufacturing cargo market", "automotive, industrial parts, students, IT hardware", "Hinjewadi, Chakan, Pimpri-Chinchwad, Kalyani Nagar", "Pune to Hyderabad air cargo"],
  ["Ahmedabad", "ahmedabad", "western manufacturing and pharma-linked market", "textiles, pharma, machinery, business cargo", "Naroda, Sanand, SG Highway, Gandhinagar", "Ahmedabad to Kolkata air cargo"],
  ["Kolkata", "kolkata", "eastern India business cargo market", "documents, medical equipment, tea, events, electronics", "Salt Lake, Park Street, Howrah, Rajarhat", "Kolkata to Delhi airport cargo"],
  ["Jaipur", "jaipur", "Rajasthan business and tourism cargo market", "gems, jewelry, events, documents, retail cargo", "Malviya Nagar, Sitapura, C-Scheme, Mansarovar", "Jaipur to Mumbai air cargo"],
  ["Lucknow", "lucknow", "Uttar Pradesh state capital cargo market", "government documents, medical, legal, electronics", "Gomti Nagar, Hazratganj, Alambagh, Indira Nagar", "Lucknow to Delhi urgent cargo"],
  ["Chandigarh", "chandigarh", "north India tri-city cargo market", "documents, pharma, students, electronics", "Mohali, Panchkula, Zirakpur, Industrial Area", "Chandigarh to Mumbai air cargo"],
  ["Kochi", "kochi", "Kerala airport-linked cargo market", "seafood, documents, travel baggage, medical cargo", "Ernakulam, Kakkanad, Aluva, Fort Kochi", "Kochi to Delhi cargo"],
  ["Coimbatore", "coimbatore", "textile and engineering cargo market", "textiles, machine parts, pumps, electronics", "Peelamedu, Gandhipuram, Avinashi Road, Tiruppur", "Coimbatore to Mumbai air cargo"],
  ["Indore", "indore", "central India business cargo market", "pharma, auto parts, documents, electronics", "Vijay Nagar, Pithampur, MG Road, Dewas", "Indore to Delhi urgent cargo"],
  ["Bhopal", "bhopal", "Madhya Pradesh capital cargo market", "government documents, medical, education, business cargo", "MP Nagar, BHEL, Arera Colony, Mandideep", "Bhopal to Mumbai air cargo"],
  ["Nagpur", "nagpur", "central India logistics crossroads", "medical, industrial, documents, electronics", "MIHAN, Sitabuldi, Hingna, Civil Lines", "Nagpur to Bengaluru air cargo"],
  ["Surat", "surat", "textile and diamond cargo market", "textiles, diamonds, machinery, documents", "Adajan, Varachha, Hazira, Udhna", "Surat to Delhi airport cargo"],
  ["Vadodara", "vadodara", "industrial Gujarat cargo market", "chemicals, machine parts, pharma, documents", "Alkapuri, Makarpura, Manjalpur, Savli", "Vadodara to Chennai cargo"],
  ["Visakhapatnam", "visakhapatnam", "coastal Andhra cargo market", "industrial, pharma, seafood, machinery", "Dwaraka Nagar, Gajuwaka, MVP Colony, Rushikonda", "Visakhapatnam to Mumbai cargo"],
  ["Bhubaneswar", "bhubaneswar", "Odisha capital cargo market", "government, mining support, medical, documents", "Patia, Khandagiri, Cuttack, Chandrasekharpur", "Bhubaneswar to Delhi air cargo"],
  ["Guwahati", "guwahati", "northeast airport cargo gateway", "tea, pharma, documents, electronics", "Dispur, Paltan Bazaar, Beltola, Khanapara", "Guwahati to Kolkata cargo"],
  ["Patna", "patna", "Bihar capital cargo market", "documents, medical, education, retail cargo", "Boring Road, Kankarbagh, Danapur, Exhibition Road", "Patna to Delhi urgent cargo"],
  ["Ranchi", "ranchi", "Jharkhand industrial cargo market", "mining support, documents, medical, equipment", "Harmu, Doranda, Hinoo, Namkum", "Ranchi to Mumbai air cargo"],
  ["Raipur", "raipur", "Chhattisgarh industrial cargo market", "steel, machine parts, documents, medical", "Telibandha, Bhilai, Pandri, Naya Raipur", "Raipur to Delhi cargo"],
  ["Goa", "goa", "travel and event cargo market", "events, baggage, hospitality, documents", "Panjim, Vasco, Margao, Mapusa", "Goa to Mumbai urgent cargo"],
  ["Mangalore", "mangalore", "coastal Karnataka cargo market", "medical, seafood, documents, student baggage", "Kadri, Hampankatta, Udupi, Surathkal", "Mangalore to Bengaluru cargo"],
  ["Trivandrum", "trivandrum", "Kerala capital cargo market", "IT, documents, medical, travel baggage", "Technopark, Kowdiar, Kazhakootam, Vellayambalam", "Trivandrum to Delhi cargo"],
  ["Calicut", "calicut", "north Kerala travel cargo market", "baggage, medical, documents, perishables", "Kozhikode, Malappuram, Feroke, Mavoor Road", "Calicut to Mumbai air cargo"],
  ["Madurai", "madurai", "south Tamil Nadu cargo market", "medical, textiles, documents, perishables", "Anna Nagar, KK Nagar, Thiruparankundram, Dindigul", "Madurai to Chennai cargo"],
  ["Tiruchirappalli", "tiruchirappalli", "central Tamil Nadu cargo market", "student baggage, documents, industrial cargo", "Trichy, Srirangam, Thillai Nagar, Thanjavur", "Tiruchirappalli to Bengaluru cargo"],
  ["Varanasi", "varanasi", "eastern UP cargo market", "documents, textiles, medical, religious event cargo", "Sigra, Lanka, Cantonment, Sarnath", "Varanasi to Delhi air cargo"],
  ["Amritsar", "amritsar", "Punjab travel and business cargo market", "baggage, documents, textiles, food cargo", "Ranjit Avenue, Lawrence Road, Jalandhar, Batala", "Amritsar to Mumbai cargo"],
  ["Jammu", "jammu", "north India strategic cargo market", "documents, medical, defense-adjacent business cargo", "Gandhi Nagar, Trikuta Nagar, Bari Brahmana, Udhampur", "Jammu to Delhi cargo"],
  ["Srinagar", "srinagar", "Kashmir airport cargo market", "documents, medical, perishables, travel baggage", "Lal Chowk, Rajbagh, Budgam, Baramulla", "Srinagar to Delhi urgent cargo"],
  ["Dehradun", "dehradun", "Uttarakhand capital cargo market", "documents, medical, students, travel baggage", "Rajpur Road, Clement Town, Haridwar, Rishikesh", "Dehradun to Mumbai cargo"],
  ["Agra", "agra", "tourism and manufacturing support market", "documents, leather goods, samples, event cargo", "Sanjay Place, Tajganj, Sikandra, Mathura", "Agra to Delhi airport cargo"],
  ["Kanpur", "kanpur", "industrial UP cargo market", "leather, machine parts, documents, textiles", "Swaroop Nagar, Panki, Govind Nagar, Unnao", "Kanpur to Mumbai cargo"],
  ["Gwalior", "gwalior", "north MP business cargo market", "documents, medical, industrial parts, education cargo", "City Center, Morar, Lashkar, Malanpur", "Gwalior to Delhi cargo"],
  ["Udaipur", "udaipur", "Rajasthan tourism and mineral cargo market", "hospitality, documents, samples, event cargo", "Hiran Magri, Fatehpura, Sukher, Nathdwara", "Udaipur to Mumbai cargo"],
  ["Jodhpur", "jodhpur", "western Rajasthan cargo market", "handicrafts, documents, machinery, event cargo", "Sardarpura, Basni, Paota, Pali", "Jodhpur to Delhi cargo"],
  ["Rajkot", "rajkot", "Saurashtra manufacturing cargo market", "machine parts, castings, documents, jewelry", "Kalawad Road, Gondal Road, Jamnagar, Morbi", "Rajkot to Mumbai cargo"],
  ["Nashik", "nashik", "Maharashtra industrial and perishables market", "machine parts, pharma, grapes, documents", "Satpur, Ambad, Panchavati, Sinnar", "Nashik to Delhi cargo"],
  ["Aurangabad", "aurangabad", "industrial Maharashtra cargo market", "automotive parts, pharma, documents, machinery", "Waluj, Chikalthana, CIDCO, Jalna", "Aurangabad to Bengaluru cargo"],
  ["Mysore", "mysore", "south Karnataka business cargo market", "electronics, student baggage, documents, medical", "Hebbal, Jayalakshmipuram, Nanjangud, Mandya", "Mysore to Mumbai cargo"],
  ["Vijayawada", "vijayawada", "Andhra business cargo market", "documents, perishables, medical, industrial cargo", "MG Road, Gannavaram, Auto Nagar, Guntur", "Vijayawada to Delhi cargo"],
  ["Tirupati", "tirupati", "religious tourism and regional cargo market", "documents, baggage, perishables, medical", "Renigunta, Tiruchanur, Chittoor, Sri City", "Tirupati to Hyderabad cargo"],
  ["Jabalpur", "jabalpur", "central India regional cargo market", "defense-adjacent business cargo, medical, documents", "Napier Town, Madan Mahal, Adhartal, Katni", "Jabalpur to Delhi cargo"],
  ["Siliguri / Bagdogra", "siliguri-bagdogra", "north Bengal and northeast gateway market", "tea, documents, medical, travel baggage", "Siliguri, Bagdogra, Darjeeling, Jalpaiguri", "Bagdogra to Kolkata cargo"],
  ["Dibrugarh", "dibrugarh", "upper Assam cargo market", "tea, medical, documents, oilfield support cargo", "Duliajan, Tinsukia, Moran, Lahowal", "Dibrugarh to Guwahati cargo"],
  ["Imphal", "imphal", "Manipur airport cargo market", "documents, medical, urgent personal cargo", "Thangal Bazaar, Lamphel, Porompat, Churachandpur", "Imphal to Kolkata cargo"],
  ["Agartala", "agartala", "Tripura capital cargo market", "documents, medical, business cargo", "Kunjaban, Battala, Udaipur, Amtali", "Agartala to Kolkata cargo"],
  ["Dimapur", "dimapur", "Nagaland cargo access market", "documents, medical, business cargo", "Kohima, Chumoukedima, Purana Bazaar, Duncan Basti", "Dimapur to Guwahati cargo"],
  ["Aizawl", "aizawl", "Mizoram capital cargo market", "documents, medical, urgent personal cargo", "Zarkawt, Chanmari, Zemabawk, Lunglei", "Aizawl to Kolkata cargo"],
  ["Shillong", "shillong", "Meghalaya capital cargo market", "documents, education cargo, medical, perishables", "Police Bazaar, Laitumkhrah, Barapani, Nongpoh", "Shillong to Guwahati cargo"],
  ["Leh", "leh", "high-altitude travel and urgent cargo market", "travel baggage, medical, documents, emergency cargo", "Leh Market, Choglamsar, Skara, Kargil", "Leh to Delhi cargo"],
  ["Port Blair", "port-blair", "Andaman airport cargo market", "documents, medical, travel baggage, urgent supplies", "Aberdeen Bazaar, Garacharma, Haddo, Havelock", "Port Blair to Chennai cargo"],
  ["Belgaum", "belgaum", "north Karnataka regional cargo market", "industrial parts, documents, medical, education cargo", "Tilakwadi, Udyambag, Khanapur, Hubballi", "Belgaum to Bengaluru cargo"],
  ["Hubballi", "hubballi", "north Karnataka business cargo market", "textiles, industrial cargo, documents, medical", "Dharwad, Gokul Road, Unkal, Navanagar", "Hubballi to Mumbai cargo"],
  ["Gaya", "gaya", "Bihar regional and travel cargo market", "documents, baggage, religious event cargo, medical", "Bodh Gaya, Manpur, Tekari, Aurangabad Bihar", "Gaya to Delhi cargo"]
];

export const cities = networkCityProfiles.map(([city, slug, airportRelevance, industriesText, localities, routeExample]) => ({
  slug,
  title: `${city} PORTADOR Network`,
  eyebrow: "PORTADOR Network",
  h1: `PORTADOR SOS in ${city}`,
  description: `PORTADOR SOS supports urgent air cargo, same-day feasibility, excess baggage, legal documents, and critical shipments in ${city}, connected to ${airportRelevance}.`,
  keywords: [`${city} urgent air cargo`, `${city} airport cargo`, `${routeExample}`, "airport to airport cargo", "door to airport cargo", "urgent cargo pickup near airport"],
  icon: "airport" as const,
  whatIs: `The PORTADOR Network is PORTADOR SOS's airport-connected city coverage for customers who need urgent cargo support across major Indian markets. In ${city}, customers use it for same-day feasibility, airport-linked cargo, excess baggage, legal documents, high-value cargo, and critical business shipments.`,
  aiSnippet: `${city} PORTADOR Network support connects urgent shipment customers to airport-linked cargo options, local pickup support where serviceable, and human coordination for time-critical cargo across India.`,
  benefits: [`Airport relevance: ${airportRelevance}`, `Local industries: ${industriesText}`, `Nearby coverage: ${localities}`, `Route example: ${routeExample}`, "Useful for airport-to-airport cargo and urgent door support", "Human operations desk for time-bound customer requests"],
  howItWorks: ["Share origin, destination, cargo details, and deadline", "PORTADOR checks cargo type, documents, and serviceability", "Pickup, airport-linked, or door support is checked", "The suitable urgent service option is recommended", "Customer receives next-step guidance"],
  useCases: ["Machine parts and business-critical spares", "Legal documents and tender papers", "Laptop and electronics shipments", "Excess baggage and travel cargo", "Medical or surgical equipment", "High-value or regulated cargo review"],
  whyNotCourier: ["Routine courier may not protect urgent deadlines", "Airport-connected support can be more suitable for intercity cargo", "Some cargo needs documentation and commodity review", "Customer deadlines need clear human support", "Business downtime risk needs faster decision-making"],
  faqs: [
    ...serviceFaqs(`${city} PORTADOR Network`, `${city} urgent air cargo`),
    { question: `Does PORTADOR support Mahipalpur IGI airport cargo support?`, answer: city === "Delhi NCR" ? "Yes. PORTADOR SOS can check urgent cargo support around Mahipalpur and IGI Airport where pickup, cargo type, documents, and serviceability allow." : "PORTADOR SOS can check airport-nearby pickup support in serviceable zones. For Delhi NCR, Mahipalpur near IGI Airport is a common airport cargo support context." },
    { question: `What localities near ${city} can PORTADOR check?`, answer: `PORTADOR can check urgent pickup and delivery support around ${localities}, subject to cargo details, timing, and serviceability.` }
  ],
  cta: `Check urgent cargo support in ${city}.`
})) satisfies PageModel[];

export const airportCityCoverage = [
  { city: "Delhi", citySlug: "delhi", airport: "Delhi IGI Airport Cargo", airportSlug: "delhi-igi-airport", lanes: ["Delhi to Mumbai Same-Day Cargo", "Chennai to Delhi Air Cargo"] },
  { city: "Mumbai", citySlug: "mumbai", airport: "Mumbai CSMIA Air Cargo", airportSlug: "mumbai-csmia", lanes: ["Delhi to Mumbai Same-Day Cargo", "Mumbai to Bangalore Urgent Delivery", "Ahmedabad to Mumbai Cargo"] },
  { city: "Bangalore", citySlug: "bangalore", airport: "Bengaluru Kempegowda Airport Cargo", airportSlug: "bangalore-kempegowda", lanes: ["Mumbai to Bangalore Urgent Delivery", "Bangalore to Hyderabad Same-Day Delivery"] },
  { city: "Chennai", citySlug: "chennai", airport: "Chennai Airport Cargo", airportSlug: "chennai-airport", lanes: ["Chennai to Delhi Air Cargo"] },
  { city: "Hyderabad", citySlug: "hyderabad", airport: "Hyderabad RGIA Airport Cargo", airportSlug: "hyderabad-rgia", lanes: ["Bangalore to Hyderabad Same-Day Delivery"] },
  { city: "Pune", citySlug: "pune", airport: "Pune Airport Cargo", airportSlug: "pune-airport", lanes: ["Pune urgent air cargo to major Indian cities"] },
  { city: "Ahmedabad", citySlug: "ahmedabad", airport: "Ahmedabad Airport Cargo", airportSlug: "ahmedabad-airport", lanes: ["Ahmedabad to Mumbai Cargo"] },
  { city: "Kolkata", citySlug: "kolkata", airport: "Kolkata Airport Cargo", airportSlug: "kolkata-airport", lanes: ["Kolkata urgent air cargo to major Indian cities"] }
];

const coreLanePages = [
  ["Delhi", "Mumbai", "Same Day"],
  ["Delhi", "Mumbai", "Same-Day Cargo"],
  ["Mumbai", "Delhi", "Air Cargo"],
  ["Delhi", "Bengaluru", "Urgent Cargo"],
  ["Mumbai", "Bangalore", "Urgent Delivery"],
  ["Chennai", "Delhi", "Air Cargo"],
  ["Pune", "Hyderabad", "Air Cargo"],
  ["Ahmedabad", "Kolkata", "Air Cargo"],
  ["Bangalore", "Hyderabad", "Same-Day Delivery"],
  ["Ahmedabad", "Mumbai", "Cargo"]
].map(([from, to, service]) => ({
  slug: from === "Delhi" && to === "Mumbai" && service === "Same Day" ? "delhi-mumbai-same-day" : `${from}-to-${to}-${service}`.toLowerCase().replaceAll(" ", "-"),
  title: `${from} to ${to} ${service}`,
  eyebrow: "Priority air lane",
  h1: `${from} to ${to} ${service}`,
  description: `Urgent air-linked logistics for ${from} to ${to}, including same-day cargo, next flight out options, airport-to-airport movement, and emergency business shipment recovery.`,
  keywords: [`${from} to ${to} same day cargo`, `${from} to ${to} urgent delivery`, "next flight out cargo"],
  icon: "nfo" as const,
  whatIs: `${from} to ${to} urgent cargo is a priority intercity movement option using airport-linked execution when regular courier timelines are too slow or when a missed deadline can create operational loss.`,
  aiSnippet: `${from} to ${to} urgent cargo uses deadline-first support, premium air cargo movement where feasible, timing checks, and human operations coordination for same-day or fastest-possible delivery.`,
  benefits: ["Lane-specific air cargo support", "Reduced hub dependency", "Useful for B2B urgency", "Airport and final-mile support", "Human shipment visibility", "Better fit for business downtime prevention"],
  howItWorks: ["Confirm shipment details, deadline, and consequence of delay", "Check timing and cargo eligibility", "Arrange pickup or airport support", "Move cargo by fastest feasible air-linked option", "Coordinate receiver delivery and proof"],
  useCases: ["Production line support", "High-value samples", "Tender and legal documents", "Event material", "Electronics replacements", "Emergency spare parts"],
  whyNotCourier: ["Urgent lane cargo is timing-sensitive", "Standard networks may not prioritize the lane", "Airport-linked movement can be faster", "Human support helps when timing changes", "Routine hub sorting can be too slow for hard same-day deadlines"],
  faqs: serviceFaqs(`${from} to ${to} ${service}`, `${from} to ${to} urgent cargo`),
  cta: `Move urgent cargo from ${from} to ${to}.`
})) satisfies PageModel[];

const nationalRoutePages = nationalRoutePairs.map(([from, to]) => ({
  slug: `${from}-to-${to}-urgent-air-cargo`.toLowerCase().replaceAll(" ", "-"),
  title: `${from} to ${to} Urgent Air Cargo`,
  eyebrow: "National priority route",
  h1: `${from} to ${to} Same-Day and Next Flight Out Cargo`,
  description: `Urgent air-linked logistics for ${from} to ${to}, including same-day delivery where feasible, next day delivery, urgent cargo, excess baggage, document delivery, industrial cargo, airport-to-airport movement, and door pickup or delivery support.`,
  keywords: [`${from} to ${to} same day delivery`, `${from} to ${to} urgent cargo`, `${from} to ${to} excess baggage`, `${from} to ${to} document delivery`, "airport-to-airport cargo", "door pickup and delivery"],
  icon: "nfo" as const,
  whatIs: `${from} to ${to} urgent air cargo is a route page for customers who need cargo to move faster than routine courier timelines. It helps customers check same-day delivery, next day delivery, urgent parcel by flight, excess baggage, document delivery, industrial cargo, airport-to-airport, and door support where feasible.`,
  aiSnippet: `${from} to ${to} urgent air cargo can be checked for same-day, Next Flight Out, airport-to-airport, excess baggage, documents, industrial cargo, and door pickup or delivery support. Final support depends on cargo type, documents, packing, route feasibility, and operational availability.`,
  benefits: [
    "Same-day delivery feasibility where timing and serviceability allow",
    "Next Flight Out / NFO and next day delivery checks",
    "Airport-to-airport and door pickup or delivery support where serviceable",
    "Useful for excess baggage, urgent documents, machine parts, laptops, samples, and B2B cargo",
    "Pricing depends on weight, dimensions, urgency, pickup/delivery, and acceptance",
    "Human operations desk for urgent route-specific guidance"
  ],
  howItWorks: [
    "Share origin, destination, cargo type, weight, dimensions, and timeline",
    "PORTADOR checks cargo eligibility, documents, pickup readiness, and route feasibility",
    "Same-day, NFO, express, baggage, or hand-carry options are reviewed where suitable",
    "Quote factors are shared based on weight, dimensions, urgency, pickup, delivery, and acceptance",
    "Customer receives WhatsApp or call support for next steps"
  ],
  useCases: [
    "Same-day parcel delivery by flight",
    "Urgent spare parts delivery",
    "Machine breakdown courier",
    "Tender and legal document delivery",
    "Excess baggage and student luggage",
    "Laptop, server, and IT hardware delivery"
  ],
  whyNotCourier: [
    "Routine courier may not protect hard route deadlines",
    "Airport-linked support can be faster for intercity urgent cargo",
    "Documents, baggage, and regulated cargo need early checks",
    "Industrial cargo may need weight, dimensions, and packing review",
    "Human support helps when route timing matters"
  ],
  faqs: [
    ...serviceFaqs(`${from} to ${to} urgent air cargo`, `${from} to ${to} urgent cargo`),
    {
      question: `Can PORTADOR support same-day delivery from ${from} to ${to}?`,
      answer: `PORTADOR can check same-day delivery from ${from} to ${to} where pickup readiness, cargo eligibility, route timing, documents, and destination serviceability allow.`
    },
    {
      question: `Can I send excess baggage from ${from} to ${to}?`,
      answer: `Yes. Excess baggage can be checked on the ${from} to ${to} route when bags or boxes are eligible, properly packed, documented, and serviceable for pickup and delivery.`
    }
  ],
  cta: `WhatsApp PORTADOR for ${from} to ${to} urgent cargo.`
})) satisfies PageModel[];

export const lanes = [
  ...coreLanePages,
  ...nationalRoutePages.filter((page) => !coreLanePages.some((existing) => existing.slug === page.slug))
] satisfies PageModel[];

export const routeAliasPages = [
  {
    slug: "delhi-to-mumbai",
    targetSlug: "delhi-mumbai-same-day",
    title: "Delhi to Mumbai Urgent Air Cargo Route"
  }
] as const;

const legacyHubArticles = [
  "What is Next Flight Out Cargo?",
  "Air Cargo vs Courier",
  "How Same-Day Air Cargo Works",
  "How Airport Cargo Works",
  "What is Mission-Critical Logistics?",
  "Fastest Way to Send Cargo in India",
  "How Excess Baggage Shipping Works",
  "How Battery Cargo Works"
].map((title) => ({
  slug: title.toLowerCase().replaceAll("?", "").replaceAll(" ", "-"),
  title,
  eyebrow: "Knowledge Hub",
  h1: title,
  description: `${title} explained in simple customer language for urgent cargo customers in India.`,
  keywords: ["urgent air logistics", "same day air cargo", "airport cargo India"],
  icon: "default" as const,
  whatIs: `${title.replace("?", "")} is best understood through deadline risk, air cargo timing, cargo type, cargo eligibility, documentation, custody, and destination support. PORTADOR SOS explains it for customers who need speed without losing clarity.`,
  aiSnippet: `${title.replace("?", "")} matters when cargo must move faster than routine courier timelines because delay can cause downtime, missed flights, production loss, emergency replacement failure, or legal and business consequences.`,
  benefits: ["Simple direct definition", "Customer-ready explanation", "Decision guidance", "Air cargo terminology", "Practical shipment checklist", "Comparison against routine courier timelines"],
  howItWorks: ["Identify urgency and consequence of delay", "Check cargo type, weight, documents, and restrictions", "Check available air options", "Prepare invoice, MSDS, or delivery details if needed", "Support pickup, airport movement, and destination delivery"],
  useCases: ["SME urgent shipments", "Corporate logistics planning", "Traveler baggage movement", "Regulated cargo checks", "Mission-critical procurement", "Emergency shipment recovery"],
  whyNotCourier: ["Courier is right for routine parcels", "Air cargo is better when time risk is high", "NFO focuses on earliest feasible air movement", "Airport cargo needs documentation clarity", "Human support can help customers respond faster"],
  faqs: serviceFaqs(title.replace("?", ""), "urgent air logistics"),
  cta: "Speak with PORTADOR SOS operations for route-specific guidance."
})) satisfies PageModel[];

const phaseTwoHubProfiles = [
  {
    title: "What is Next Flight Out Cargo?",
    summary: "Next Flight Out cargo is an urgent air logistics option where eligible shipments are checked against the earliest suitable flight-linked movement instead of waiting for routine courier cycles.",
    buyerQuestion: "How quickly can urgent cargo move if normal courier is too slow?",
    use: "machine breakdown parts, AOG spares, urgent documents, medical equipment, high-value cargo, and emergency replacement shipments",
    compare: "routine express courier follows scheduled network timelines, while NFO focuses on the earliest feasible air-linked movement"
  },
  {
    title: "Air Cargo vs Courier",
    summary: "Air cargo is usually better for urgent intercity shipments where airport-linked movement can protect a hard deadline, while courier is better for routine parcels that can follow standard hub networks.",
    buyerQuestion: "Should I send this urgent shipment by air cargo or courier?",
    use: "same-day cargo, AOG shipments, excess baggage, tender documents, legal papers, laptop replacement, and business-critical parts",
    compare: "courier optimizes parcel scale and scheduled movement, while urgent air cargo optimizes deadline pressure and route feasibility"
  },
  {
    title: "How Same-Day Air Cargo Works",
    summary: "Same-day air cargo works by checking whether pickup readiness, cargo eligibility, documents, timing, destination support, and serviceability can support delivery within the same day.",
    buyerQuestion: "Can I send cargo today by flight?",
    use: "urgent business shipments, machine parts, emergency documents, excess baggage, electronics, samples, and high-value cargo",
    compare: "same-day air cargo is feasibility-led; normal courier may move later through routine sorting and linehaul schedules"
  },
  {
    title: "What is Mission-Critical Logistics?",
    summary: "Mission-critical logistics is deadline-led shipment support for cargo where delay can cause business downtime, production loss, missed flights, legal risk, medical disruption, or operational failure.",
    buyerQuestion: "When is a shipment serious enough for emergency logistics?",
    use: "AOG cargo, factory breakdown parts, urgent medical equipment, event material, tender files, passport documents, and high-value commercial cargo",
    compare: "routine logistics manages normal delivery expectations, while mission-critical logistics protects time-sensitive outcomes"
  }
].map((profile) => ({
  slug: profile.title.toLowerCase().replaceAll("?", "").replaceAll(" ", "-"),
  title: profile.title,
  eyebrow: "Knowledge Hub",
  h1: profile.title,
  description: `${profile.summary} PORTADOR SOS explains this for urgent cargo buyers who need customer-readable answers before they ship.`,
  keywords: [profile.title.toLowerCase().replace("?", ""), "urgent air logistics", "same-day air cargo", "airport cargo India", "next flight out cargo"],
  icon: "default" as const,
  whatIs: profile.summary,
  aiSnippet: `${profile.summary} It is relevant for ${profile.use} when time cannot wait.`,
  benefits: [
    `Direct answer: ${profile.buyerQuestion}`,
    `Useful for ${profile.use}`,
    `Key comparison: ${profile.compare}`,
    "Explains feasibility instead of promising impossible fixed timelines",
    "Connects services, cargo categories, airports, and urgent use cases",
    "Written for customers searching in simple language and industry terms"
  ],
  howItWorks: [
    "Identify the deadline and consequence of delay",
    "Check cargo type, weight, dimensions, value, documents, and restrictions",
    "Compare same-day, NFO, airport cargo, hand-carry, express, or international options",
    "Confirm pickup or delivery serviceability where required",
    "Choose the fastest feasible PORTADOR option for the shipment"
  ],
  useCases: [
    "AOG and aviation spares",
    "Factory breakdown parts",
    "Emergency documents and passport delivery",
    "Excess baggage and missed-flight recovery",
    "Medical equipment and electronics",
    "High-value or regulated cargo review"
  ],
  whyNotCourier: [
    profile.compare,
    "Urgent buyers need feasibility checked quickly before the deadline is lost",
    "Airport-linked movement can outperform routine hub cycles for intercity urgency",
    "Documentation, cargo type, and serviceability can change the best option",
    "Human operations support is useful when the shipment has real consequences"
  ],
  faqs: [
    ...serviceFaqs(profile.title.replace("?", ""), "urgent air logistics"),
    {
      question: profile.buyerQuestion,
      answer: `${profile.summary} PORTADOR SOS checks the answer using cargo details, route, documents, serviceability, and urgency instead of giving a generic promise.`
    },
    {
      question: `What shipments use ${profile.title.toLowerCase().replace("?", "")}?`,
      answer: `Common shipments include ${profile.use}. The right service depends on cargo eligibility, timing, pickup readiness, destination support, and compliance requirements.`
    }
  ],
  cta: "Speak with PORTADOR SOS operations for route-specific guidance."
})) satisfies PageModel[];

export const hubArticles = [
  ...phaseTwoHubProfiles,
  ...legacyHubArticles.filter((page) => !phaseTwoHubProfiles.some((featured) => featured.slug === page.slug))
] satisfies PageModel[];

const phaseTwoAirportProfiles = [
  {
    slug: "delhi-igi-airport",
    title: "Delhi IGI Airport Cargo",
    airport: "Indira Gandhi International Airport (DEL)",
    terminals: "IGI Airport cargo terminal ecosystem, Aerocity, Mahipalpur, Okhla, Noida, Gurugram, and Faridabad",
    hubs: "Okhla Industrial Estate, Noida industrial sectors, Gurugram Cyber City, Manesar, Faridabad, and Delhi legal and government districts",
    summary: "Delhi IGI Airport cargo support for urgent same-day air cargo, NFO feasibility, passport documents, tender papers, machine parts, medical equipment, and regulated cargo review across North India."
  },
  {
    slug: "mumbai-csmia",
    title: "Mumbai CSMIA Air Cargo",
    airport: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
    terminals: "Mumbai airport cargo complex, Sahar, Andheri East, BKC, MIDC Andheri, Navi Mumbai, Thane, and Powai",
    hubs: "BKC, Andheri MIDC, Lower Parel, Navi Mumbai, Thane-Belapur belt, and western India manufacturing and finance corridors",
    summary: "Mumbai CSMIA air cargo support for urgent business shipments, high-value cargo, excess baggage, electronics, pharma-support cargo, and airport-to-airport movement across western India."
  },
  {
    slug: "bangalore-kempegowda",
    title: "Bengaluru Kempegowda Airport Cargo",
    airport: "Kempegowda International Airport Bengaluru (BLR)",
    terminals: "BLR airport cargo ecosystem, Devanahalli, Hebbal, Whitefield, Electronic City, Peenya, and Koramangala",
    hubs: "Electronic City, Whitefield, Manyata Tech Park, Peenya Industrial Area, Bommasandra, and Bengaluru startup and electronics markets",
    summary: "Bangalore Kempegowda airport logistics for urgent electronics, IT hardware, startup cargo, AOG support, medical equipment, and same-day air-linked movement."
  },
  {
    slug: "hyderabad-rgia",
    title: "Hyderabad RGIA Airport Cargo",
    airport: "Rajiv Gandhi International Airport (HYD)",
    terminals: "RGIA cargo ecosystem, Shamshabad, HITEC City, Gachibowli, Genome Valley, Balanagar, and Medchal",
    hubs: "Genome Valley, HITEC City, Gachibowli, Balanagar, Medchal, Patancheru, and Hyderabad pharma and electronics corridors",
    summary: "Hyderabad RGIA airport cargo support for pharma-linked urgent shipments, electronics, medical equipment, business documents, and next-flight-out logistics."
  },
  {
    slug: "chennai-airport",
    title: "Chennai Airport Cargo",
    airport: "Chennai International Airport (MAA)",
    terminals: "Chennai airport cargo ecosystem, Meenambakkam, Guindy, Ambattur, Sriperumbudur, Oragadam, and OMR",
    hubs: "Sriperumbudur, Oragadam, Ambattur Industrial Estate, Guindy, OMR, and Chennai automotive, electronics, and manufacturing corridors",
    summary: "Chennai airport cargo support for manufacturing parts, automotive components, electronics, medical equipment, urgent documents, and intercity air cargo."
  },
  {
    slug: "ahmedabad-airport",
    title: "Ahmedabad Airport Cargo",
    airport: "Sardar Vallabhbhai Patel International Airport (AMD)",
    terminals: "Ahmedabad airport cargo ecosystem, Hansol, Naroda, Changodar, Sanand, Vatva, and SG Highway",
    hubs: "Sanand, Changodar, Naroda, Vatva GIDC, SG Highway, and Ahmedabad pharma, textile, and manufacturing corridors",
    summary: "Ahmedabad airport cargo support for textile samples, pharma-support cargo, manufacturing parts, excess baggage, tender documents, and Mumbai-linked urgent movement."
  },
  {
    slug: "pune-airport",
    title: "Pune Airport Cargo",
    airport: "Pune Airport (PNQ)",
    terminals: "Pune airport cargo context, Viman Nagar, Chakan, Pimpri-Chinchwad, Hinjawadi, Ranjangaon, and Kharadi",
    hubs: "Chakan, Pimpri-Chinchwad, Hinjawadi, Ranjangaon, Talegaon, Kharadi, and Pune automotive, IT, and manufacturing corridors",
    summary: "Pune airport cargo support for automotive parts, manufacturing spares, student luggage, excess baggage, IT hardware, and urgent B2B shipments."
  },
  {
    slug: "kolkata-airport",
    title: "Kolkata Airport Cargo",
    airport: "Netaji Subhas Chandra Bose International Airport (CCU)",
    terminals: "Kolkata airport cargo ecosystem, Dum Dum, Salt Lake, New Town, Howrah, Park Street, and eastern India business districts",
    hubs: "Salt Lake Sector V, New Town, Howrah, Park Street, Behala, and Kolkata trade, medical, education, and eastern India cargo markets",
    summary: "Kolkata airport cargo support for urgent documents, excess baggage, event cargo, medical equipment, business shipments, and eastern India air cargo movement."
  }
].map((profile) => ({
  slug: profile.slug,
  title: profile.title,
  eyebrow: "Airport logistics authority",
  h1: `${profile.title} for Urgent Air Cargo`,
  description: `${profile.summary} PORTADOR SOS supports airport-linked urgent cargo movement subject to cargo type, documentation, route feasibility, and operational availability.`,
  keywords: [profile.title.toLowerCase(), profile.airport.toLowerCase(), "airport cargo India", "same-day air cargo", "next flight out cargo"],
  icon: "airport" as const,
  whatIs: `${profile.title} is an airport-connected urgent logistics page for customers near ${profile.airport} who need same-day air cargo, next flight out feasibility, airport-to-airport cargo, excess baggage support, emergency documents, regulated cargo review, or critical B2B movement.`,
  aiSnippet: `${profile.title} supports urgent cargo buyers around ${profile.terminals}. PORTADOR SOS checks cargo details, documents, serviceability, and air cargo feasibility before confirming support.`,
  benefits: [
    `Airport focus: ${profile.airport}`,
    `Local service context: ${profile.terminals}`,
    `Commercial hubs covered: ${profile.hubs}`,
    "Useful for same-day air cargo, NFO feasibility, and airport-to-airport movement",
    "Supports business-critical cargo, excess baggage, emergency documents, and regulated cargo review",
    "Human operations desk for urgent shipment coordination"
  ],
  howItWorks: [
    "Share origin area, destination city, cargo details, weight, dimensions, and deadline",
    "PORTADOR checks cargo type, documents, serviceability, and airport-linked feasibility",
    "Urgent pickup, airport cargo, door support, or hand-carry feasibility is reviewed",
    "The suitable PORTADOR SOS, EXPRESS, BLACK, or GLOBAL option is recommended",
    "Customer receives clear next-step guidance for the shipment"
  ],
  useCases: [
    "AOG and aviation spares",
    "Machine breakdown parts",
    "Medical equipment and diagnostic devices",
    "Tender, passport, visa, and legal documents",
    "Excess baggage and travel cargo",
    "Electronics, laptops, DG, lithium battery, and high-value cargo"
  ],
  whyNotCourier: [
    "Routine courier networks may not protect urgent airport-linked deadlines",
    "Airport cargo can be more suitable for intercity time-critical shipments",
    "Regulated cargo and sensitive documents need early feasibility checks",
    "Human support helps customers act quickly when deadlines are fixed",
    "Airport-connected support reduces avoidable uncertainty for urgent B2B shipments"
  ],
  faqs: [
    ...serviceFaqs(profile.title, profile.title.toLowerCase()),
    {
      question: `Does PORTADOR support urgent cargo near ${profile.airport}?`,
      answer: `Yes. PORTADOR SOS can check urgent cargo support around ${profile.airport} and nearby business districts, subject to pickup location, cargo type, documents, route feasibility, and operational availability.`
    },
    {
      question: `Which local areas are relevant for ${profile.title}?`,
      answer: `${profile.title} commonly serves customer enquiries around ${profile.terminals}. Service support depends on the exact pickup or delivery address and shipment readiness.`
    },
    {
      question: `What commercial hubs use ${profile.title}?`,
      answer: `Commercial demand can come from ${profile.hubs}. Common urgent cargo includes AOG spares, machine parts, medical equipment, documents, electronics, baggage, and high-value cargo.`
    }
  ],
  cta: `Get urgent cargo support through ${profile.title}.`
})) satisfies PageModel[];

const nationalAirportPages = nationalAirportProfiles.map((profile) => ({
  slug: profile.slug,
  title: profile.title,
  eyebrow: "Airport logistics authority",
  h1: `${profile.title} for Urgent Air Cargo`,
  description: `${profile.summary} PORTADOR SOS checks urgent cargo movement subject to cargo type, documents, route feasibility, serviceability, and operational availability.`,
  keywords: [profile.title.toLowerCase(), profile.airport.toLowerCase(), "airport baggage pickup", "airport cargo India", "same-day air cargo", "urgent cargo support"],
  icon: "airport" as const,
  whatIs: `${profile.title} is an airport-connected urgent logistics page for customers near ${profile.airport} who need airport baggage pickup, excess luggage shipping, same-day air cargo, Next Flight Out feasibility, airport-to-airport cargo, emergency documents, machine parts, or B2B cargo support.`,
  aiSnippet: `${profile.title} supports customer searches around ${profile.terminals}. PORTADOR checks cargo type, documents, packing, serviceability, route feasibility, and operational availability before confirming support.`,
  benefits: [
    `Airport focus: ${profile.airport}`,
    `Nearby demand areas: ${profile.terminals}`,
    `Commercial hubs: ${profile.hubs}`,
    "Useful for airport baggage pickup, airport-to-home baggage delivery, same-day cargo, and urgent documents",
    "Supports B2B air cargo, industrial parts, excess baggage, medical equipment, and regulated cargo review",
    "Human operations support for customers who need a quick feasibility check"
  ],
  howItWorks: [
    "Share airport, pickup point, destination, cargo type, bags or boxes, weight, and deadline",
    "PORTADOR checks contents, documents, packing, pickup access, serviceability, and route feasibility",
    "Airport pickup, door pickup, airport-to-airport, door-to-door, or hand-carry feasibility is reviewed",
    "The suitable PORTADOR SOS, EXPRESS, BLACK, or GLOBAL option is recommended",
    "Customer receives next-step guidance, pricing factors, and WhatsApp support"
  ],
  useCases: [
    "Airport baggage pickup and airport-to-home luggage delivery",
    "Same-day parcel delivery by flight where feasible",
    "Urgent spare parts and machine breakdown cargo",
    "B2B documents, tender files, and legal submissions",
    "Medical equipment, laptops, IT hardware, and event cargo",
    "Dangerous goods, battery, and restricted cargo review where applicable"
  ],
  whyNotCourier: [
    "Routine courier may not handle airport pickup timing clearly",
    "Baggage and regulated cargo need contents, packing, and document checks",
    "Airport-linked movement can be better for urgent intercity delivery",
    "Business and traveler emergencies need human support instead of generic parcel flow",
    "Final feasibility depends on cargo acceptance, route, and operational availability"
  ],
  faqs: [
    ...serviceFaqs(profile.title, profile.title.toLowerCase()),
    {
      question: `Can PORTADOR help with airport baggage pickup near ${profile.airport}?`,
      answer: `Yes. PORTADOR can check airport baggage pickup near ${profile.airport}, subject to pickup access, contents, packing, documents, serviceability, and operational availability.`
    },
    {
      question: `Which nearby areas does ${profile.title} cover?`,
      answer: `${profile.title} commonly receives demand from ${profile.terminals}. Final support depends on the exact pickup or delivery address and shipment readiness.`
    },
    {
      question: `Can businesses use ${profile.title} for urgent cargo?`,
      answer: `Yes. Businesses around ${profile.hubs} can check urgent cargo support for machine parts, documents, IT hardware, medical equipment, samples, event material, and regulated cargo review.`
    },
    {
      question: `Is terminal handling fixed for ${profile.title}?`,
      answer: "Terminal and airline handling may vary; PORTADOR confirms feasibility before booking based on airport access, cargo type, documents, route, and operational availability."
    }
  ],
  cta: `Check urgent cargo and baggage support through ${profile.title}.`
})) satisfies PageModel[];

export const airports = [
  ...phaseTwoAirportProfiles,
  ...nationalAirportPages.filter((page) => !phaseTwoAirportProfiles.some((existing) => existing.slug === page.slug))
] satisfies PageModel[];

const legacyCargoPages = [
  ["excess-baggage", "Excess Baggage", "Domestic excess baggage, airport baggage transfer, student luggage, relocation bags, and door-to-door baggage delivery for travelers who cannot carry everything on the next flight."],
  ["battery-cargo", "Battery Cargo", "Battery cargo review for eligible lithium-ion, lithium metal, device-contained, and equipment-packed batteries requiring approval review."],
  ["lithium-battery-cargo", "Lithium Battery Cargo", "Lithium battery cargo support for electronics, laptops, medical devices, equipment-contained batteries, and regulated battery shipments where approval is required."],
  ["dangerous-goods", "Dangerous Goods Cargo", "Dangerous goods cargo support for regulated shipments that need classification, documentation, compliant packing, and approval review."],
  ["perishables", "Perishables Cargo", "Urgent perishables cargo support for time-sensitive goods where service feasibility, packing, temperature sensitivity, and cargo eligibility must be checked early."],
  ["temperature-controlled-cargo", "Temperature Controlled Cargo", "Temperature controlled cargo review for shipments that need time-sensitive air movement, handling clarity, and temperature requirement verification."],
  ["medical-equipment", "Medical Equipment Cargo", "Urgent medical equipment cargo for replacement devices, critical instruments, diagnostics support, and hospital-linked business shipments."],
  ["aog-cargo", "AOG Cargo", "Aircraft-on-ground cargo support for urgent aviation spares, tooling, documents, and components where downtime can affect flight operations."],
  ["machine-parts", "Machine Parts Cargo", "Urgent machine parts cargo for breakdown recovery, production line stoppage, spare replacement, and manufacturing downtime prevention."],
  ["tender-documents", "Tender Documents", "Urgent tender document logistics for submission deadlines, legal papers, commercial files, and time-sensitive business documentation."],
  ["air-cargo-charter", "Air Cargo Charter", "Air cargo charter feasibility for oversized, high-value, emergency, or mission-critical shipments when scheduled uplift cannot protect the deadline."],
  ["high-value-cargo", "High Value Cargo", "High-value cargo movement for sensitive business shipments requiring urgency, controlled coordination, reduced handoffs, and delivery clarity."],
  ["hand-carry-obc", "Hand Carry / OBC", "Hand carry, onboard courier, runner, and VIP custody support for selected eligible documents, small cargo, luxury items, and high-value urgent shipments."],
  ["laptop-shipping", "Laptop Shipping", "Urgent laptop shipping for IT hardware, office replacement devices, student laptops, deployment hardware, and business-critical electronics."]
].map(([slug, title, summary]) => ({
  slug,
  title,
  eyebrow: "Secondary cargo category",
  h1: `${title} Under PORTADOR SOS Air Cargo Operations`,
  description: `${summary} This cargo category is checked under PORTADOR SOS, PORTADOR EXPRESS, PORTADOR BLACK, or PORTADOR GLOBAL depending on urgency, route, documentation, and airline feasibility.`,
  keywords: [title.toLowerCase(), "urgent cargo India", "same day air cargo", "airport cargo India"],
  icon: title.includes("Battery") || title.includes("Lithium") || title.includes("Laptop") ? "battery" as const : title.includes("Dangerous") ? "dg" as const : title.includes("Baggage") ? "baggage" as const : title.includes("Hand Carry") ? "obc" as const : title.includes("Charter") ? "charter" as const : title.includes("AOG") || title.includes("Machine") ? "mission" as const : "default" as const,
  whatIs: title === "Excess Baggage"
    ? "Excess baggage shipping helps travelers, students, and relocating professionals move bags or boxes separately when airline baggage limits are too low, such as international arrivals with 23kg allowance connecting to domestic Indian flights with 15kg baggage allowance."
    : `${title} is a secondary cargo category that may require special timing, documentation, packing, custody, compliance review, or cargo approval before urgent air movement is confirmed.`,
  aiSnippet: title === "Excess Baggage"
    ? "Excess baggage can be sent through PORTADOR SOS when bags, boxes, or luggage need airport-linked or door-to-door movement instead of being carried by the traveler, subject to contents, packing, documents, and serviceability."
    : `${title} can move through PORTADOR's urgent air cargo services when cargo details, documents, packaging, approval requirements, service feasibility, and airport support are verified before support.`,
  benefits: title === "Excess Baggage"
    ? ["Helpful for international-to-domestic baggage allowance gaps", "Useful for student luggage, relocation baggage, extra bags, and missed-flight baggage recovery", "Door-to-door baggage delivery can be checked where serviceable", "Airport-linked luggage movement where feasible", "Clear checks for contents, packing, documents, and weight", "Better option when carrying baggage personally is impractical"]
    : ["Mapped to PORTADOR SOS, EXPRESS, BLACK, or GLOBAL based on urgency", "Cargo-specific acceptance and documentation review", "Airport and air cargo support where feasible", "Urgent support through a human operations desk", "Reduced avoidable hub dependency", "Better protection against missed deadlines, downtime, and emergency replacement failure"],
  howItWorks: title === "Excess Baggage"
    ? ["Share pickup city, destination, number of bags, approximate weight, dimensions, and contents", "PORTADOR checks baggage contents, packing, documents, and serviceability", "Pickup, airport-linked movement, or door delivery support is checked", "Bags move through the suitable accepted option", "Receiver handover or delivery proof is completed"]
    : ["Share commodity, deadline, route, weight, dimensions, packing status, and documents", "PORTADOR checks cargo category eligibility, air cargo timing, handling requirements, and service feasibility", "The shipment is assigned to SOS, EXPRESS, BLACK, or GLOBAL based on urgency and handling needs", "Pickup, airport support, hand carry, air freight, or charter feasibility is coordinated", "Destination support and proof of completion are closed"],
  useCases: ["Emergency replacement", "Business downtime prevention", "Production loss recovery", "Missed flight baggage recovery", "Urgent tender or legal support", "AOG and aviation recovery", "High-value urgent delivery"],
  whyNotCourier: ["Cargo category acceptance can affect whether and how the shipment moves", "Routine parcel systems may not verify airline rules early enough", "Sensitive cargo needs clearer documentation and delivery", "Urgent support needs human ownership", "Airport-linked movement can protect hard intercity deadlines"],
  faqs: serviceFaqs(title, title.toLowerCase()),
  cta: `Check urgent air cargo feasibility for ${title.toLowerCase()}.`
})) satisfies PageModel[];

const phaseTwoCargoProfiles = [
  {
    slug: "aog-cargo",
    title: "AOG Cargo",
    summary: "Aircraft-on-ground cargo support for urgent aviation spares, tooling, documents, and components where downtime can affect flight operations.",
    audience: "aviation maintenance teams, aircraft operators, MRO teams, and airline support desks",
    pain: "aircraft downtime, flight disruption, grounded equipment, missed maintenance windows, and cascading operational loss",
    cargo: "aircraft spares, tooling, avionics, documentation, replacement components, and maintenance-critical items",
    icon: "mission" as const
  },
  {
    slug: "machine-breakdown",
    title: "Machine Breakdown Logistics",
    summary: "Emergency machine breakdown logistics for factories and plants that need urgent spare parts, replacement assemblies, tools, or production recovery cargo.",
    audience: "manufacturing plants, OEM vendors, plant heads, maintenance managers, and urgent procurement teams",
    pain: "line stoppage, production loss, customer penalties, delayed dispatch, and downtime escalation",
    cargo: "machine parts, electronic modules, tooling, motors, controllers, dies, samples, and replacement assemblies",
    icon: "mission" as const
  },
  {
    slug: "medical-equipment",
    title: "Medical Equipment Cargo",
    summary: "Urgent medical equipment cargo for replacement devices, critical instruments, diagnostics support, and hospital-linked business shipments.",
    audience: "healthcare vendors, diagnostic companies, biomedical teams, hospitals, and device distributors",
    pain: "procedure delay, equipment failure, diagnostic disruption, site readiness risk, and emergency replacement pressure",
    cargo: "medical devices, diagnostic instruments, surgical equipment, biomedical parts, monitors, analyzers, and support accessories",
    icon: "default" as const
  },
  {
    slug: "dangerous-goods",
    title: "Dangerous Goods Cargo",
    summary: "Dangerous goods cargo support for regulated shipments that need classification, documentation, compliant packing, and approval review.",
    audience: "manufacturers, labs, electronics companies, chemical suppliers, aviation teams, and regulated cargo shippers",
    pain: "shipment rejection, missing declarations, documentation gaps, packing non-compliance, and approval uncertainty",
    cargo: "declared dangerous goods, chemicals, aerosols, restricted commodities, battery-linked cargo, and regulated product samples",
    icon: "dg" as const
  },
  {
    slug: "lithium-battery-cargo",
    title: "Lithium Battery Cargo",
    summary: "Lithium battery cargo support for electronics, laptops, medical devices, equipment-contained batteries, and regulated battery shipments where approval is required.",
    audience: "electronics businesses, IT teams, medical device companies, hardware startups, students, and service centers",
    pain: "airline acceptance uncertainty, MSDS or declaration needs, device downtime, replacement delays, and regulated cargo review",
    cargo: "laptops, devices with batteries, equipment-packed batteries, lithium-ion batteries, medical devices, and electronics hardware",
    icon: "battery" as const
  },
  {
    slug: "event-logistics",
    title: "Event Logistics",
    summary: "Urgent event logistics for exhibitions, activations, conferences, venue setups, display material, samples, and replacement equipment.",
    audience: "event agencies, exhibition teams, brand teams, AV vendors, booth fabricators, and corporate marketing teams",
    pain: "missed showtime, venue setup failure, exhibition loss, sponsor escalation, sample delay, and last-mile event pressure",
    cargo: "display kits, AV equipment, samples, booth material, branding assets, documents, uniforms, devices, and replacement parts",
    icon: "route" as const
  },
  {
    slug: "excess-baggage",
    title: "Excess Baggage",
    summary: "Domestic excess baggage, airport baggage transfer, student luggage, relocation bags, and door-to-door baggage delivery for travelers who cannot carry everything on the next flight.",
    audience: "travelers, students, relocating professionals, families, international arrivals, and urgent personal cargo customers",
    pain: "airline baggage allowance gaps, missed flight baggage, overweight luggage, urgent relocation, and domestic connection pressure",
    cargo: "bags, boxes, student luggage, books, clothing, personal effects, non-restricted electronics, and travel cargo",
    icon: "baggage" as const
  },
  {
    slug: "passport-delivery",
    title: "Passport Delivery",
    summary: "Urgent passport delivery support for time-sensitive travel documents, missed-flight recovery, family travel needs, and last-minute document movement.",
    audience: "travelers, families, students, corporate travel teams, visa agents, and urgent personal document customers",
    pain: "missed flights, visa appointment risk, travel disruption, embassy or consulate deadlines, and document recovery pressure",
    cargo: "passports, travel documents, sealed envelopes, supporting IDs, travel forms, and time-sensitive personal papers",
    icon: "obc" as const
  },
  {
    slug: "visa-document-delivery",
    title: "Visa Document Delivery",
    summary: "Urgent visa document delivery for appointment deadlines, embassy submissions, travel files, university paperwork, and corporate mobility documents.",
    audience: "students, travelers, HR mobility teams, visa consultants, families, and corporate travel desks",
    pain: "missed visa appointments, delayed travel, university reporting deadlines, corporate mobility delays, and hard submission timing",
    cargo: "visa files, application forms, passports where applicable, invitation letters, university documents, employment papers, and sealed envelopes",
    icon: "obc" as const
  },
  {
    slug: "legal-document-courier",
    title: "Legal Document Courier",
    summary: "Urgent legal document courier support for contracts, court papers, signed originals, affidavits, notarized documents, and deadline-bound submissions.",
    audience: "law firms, legal teams, founders, company secretaries, finance teams, and corporate administration teams",
    pain: "missed filings, delayed signatures, tender or contract risk, court deadline pressure, and document custody concerns",
    cargo: "contracts, affidavits, notarized papers, signed originals, corporate documents, court files, tender documents, and sealed envelopes",
    icon: "obc" as const
  },
  {
    slug: "tender-document-delivery",
    title: "Tender Document Delivery",
    summary: "Urgent tender document delivery for bid submissions, signed commercial files, compliance papers, and hard-deadline business documentation.",
    audience: "SMEs, procurement teams, contractors, legal teams, government vendors, and corporate bid desks",
    pain: "tender rejection, missed bid windows, incomplete commercial submission, delayed signatures, and hard deadline failure",
    cargo: "tender files, bid documents, signed originals, compliance papers, commercial proposals, sealed envelopes, and supporting documents",
    icon: "obc" as const
  }
].map((profile) => ({
  slug: profile.slug,
  title: profile.title,
  eyebrow: "Commercial cargo authority",
  h1: `${profile.title} With PORTADOR SOS`,
  description: `${profile.summary} PORTADOR SOS checks urgent movement options based on cargo type, route, documentation, compliance, serviceability, and delivery urgency.`,
  keywords: [profile.title.toLowerCase(), "urgent cargo India", "same-day air cargo", "airport cargo India", "time-critical logistics"],
  icon: profile.icon,
  whatIs: `${profile.title} is a time-critical logistics use case for ${profile.audience}. It is used when ${profile.pain} makes routine courier timelines too slow or too uncertain.`,
  aiSnippet: `${profile.title} with PORTADOR SOS means urgent support for ${profile.cargo}, with feasibility checked against cargo details, documentation, route, serviceability, and operational availability.`,
  benefits: [
    `Built for ${profile.pain}`,
    `Common cargo: ${profile.cargo}`,
    `Relevant customers: ${profile.audience}`,
    "Same-day, NFO, hand-carry, airport cargo, express, or international options can be checked where suitable",
    "Human operations desk for deadline-first customer support",
    "Compliance and document review for regulated or sensitive shipments where relevant"
  ],
  howItWorks: [
    "Share origin, destination, cargo description, weight, dimensions, and urgency",
    "PORTADOR checks cargo type, documents, serviceability, and suitable service category",
    "The shipment is mapped to PORTADOR SOS, EXPRESS, BLACK, or GLOBAL based on urgency and handling needs",
    "Pickup, door-to-door, airport cargo, hand-carry, or international feasibility is reviewed",
    "Customer receives clear next-step guidance for urgent movement"
  ],
  useCases: [
    "Same-day air cargo where feasible",
    "Next Flight Out / NFO support",
    "Airport-to-airport cargo",
    "Door-to-door urgent delivery where serviceable",
    "Emergency business recovery",
    "High-value, regulated, or document-sensitive movement"
  ],
  whyNotCourier: [
    "Routine courier is designed for standard schedules and parcel scale",
    "Urgent cargo needs faster feasibility checks before the deadline is lost",
    "Sensitive cargo can require documentation, packing, or compliance review",
    "Business or travel emergencies need human support, not only a tracking screen",
    "Airport-linked movement may be more suitable for urgent intercity timelines"
  ],
  faqs: [
    ...serviceFaqs(profile.title, profile.title.toLowerCase()),
    {
      question: `Who should use ${profile.title.toLowerCase()}?`,
      answer: `${profile.title} is best suited for ${profile.audience} when delay can create ${profile.pain}. PORTADOR SOS checks the fastest feasible support option after cargo and route details are shared.`
    },
    {
      question: `What can be sent under ${profile.title.toLowerCase()}?`,
      answer: `Common ${profile.title.toLowerCase()} shipments include ${profile.cargo}. Final support depends on packing, documents, commodity details, serviceability, and compliance requirements.`
    },
    {
      question: `Can ${profile.title.toLowerCase()} move same day?`,
      answer: `${profile.title} may move same day where pickup readiness, cargo eligibility, airline or service availability, documentation, and destination support make it feasible. PORTADOR SOS checks feasibility before confirmation.`
    }
  ],
  cta: `Get urgent support for ${profile.title.toLowerCase()}.`
})) satisfies PageModel[];

const excessBaggageGeoPages = [
  {
    slug: "delhi-airport-excess-baggage-pickup-service",
    title: "Delhi Airport Excess Baggage Pickup Service",
    airport: "Delhi IGI Airport",
    localContext: "Terminal 3, Aerocity, Mahipalpur, Gurgaon, Noida, Faridabad, and Okhla"
  },
  {
    slug: "terminal-3-delhi-airport-excess-baggage-delivery",
    title: "Terminal 3 Delhi Airport Excess Baggage Delivery",
    airport: "Delhi IGI Airport Terminal 3",
    localContext: "T3 arrivals, Aerocity, Mahipalpur, New Delhi, Gurgaon, Noida, and nearby NCR service zones"
  },
  {
    slug: "igi-airport-excess-baggage-courier-service",
    title: "IGI Airport Excess Baggage Courier Service",
    airport: "Indira Gandhi International Airport",
    localContext: "IGI cargo and traveler zones, Delhi NCR hotels, homes, hostels, offices, and serviceable destinations"
  },
  {
    slug: "mumbai-airport-excess-baggage-transport",
    title: "Mumbai Airport Excess Baggage Transport",
    airport: "Mumbai CSMIA",
    localContext: "Sahar, Andheri East, BKC, Powai, Navi Mumbai, Thane, and western Mumbai service zones"
  },
  {
    slug: "bengaluru-airport-excess-baggage-collection",
    title: "Bengaluru Airport Excess Baggage Collection",
    airport: "Kempegowda International Airport Bengaluru",
    localContext: "Devanahalli, Hebbal, Whitefield, Electronic City, Koramangala, and Bengaluru student or traveler destinations"
  },
  {
    slug: "chennai-airport-excess-baggage-cargo-service",
    title: "Chennai Airport Excess Baggage Cargo Service",
    airport: "Chennai International Airport",
    localContext: "Meenambakkam, Guindy, OMR, Ambattur, Sriperumbudur, and Chennai serviceable delivery zones"
  },
  {
    slug: "hyderabad-airport-excess-baggage-delivery",
    title: "Hyderabad Airport Excess Baggage Delivery",
    airport: "Hyderabad RGIA",
    localContext: "Shamshabad, Gachibowli, HITEC City, Banjara Hills, Secunderabad, and Hyderabad traveler destinations"
  },
  {
    slug: "ahmedabad-airport-excess-baggage-support",
    title: "Ahmedabad Airport Excess Baggage Support",
    airport: "Ahmedabad Airport",
    localContext: "Hansol, SG Highway, Satellite, Naroda, Sanand, Gandhinagar, and Ahmedabad delivery zones"
  },
  {
    slug: "pune-airport-excess-baggage-courier",
    title: "Pune Airport Excess Baggage Courier",
    airport: "Pune Airport",
    localContext: "Viman Nagar, Kharadi, Hinjawadi, Pimpri-Chinchwad, Chakan, and Pune student or professional destinations"
  },
  {
    slug: "kolkata-airport-excess-baggage-pickup",
    title: "Kolkata Airport Excess Baggage Pickup",
    airport: "Kolkata Airport",
    localContext: "Dum Dum, Salt Lake, New Town, Howrah, Park Street, and Kolkata serviceable delivery zones"
  }
].map((profile) => ({
  slug: profile.slug,
  title: profile.title,
  eyebrow: "Airport excess baggage",
  h1: `${profile.title} With PORTADOR SOS`,
  description: `${profile.title} helps travelers, students, families, and professionals check airport baggage courier, excess baggage delivery service, airport baggage transport, airport-to-home baggage delivery, unaccompanied baggage transport, and airline excess baggage support.`,
  keywords: [profile.title.toLowerCase(), "airport baggage courier", "excess baggage delivery service", "airport baggage transport", "airport to home baggage delivery", "unaccompanied baggage transport", "airline excess baggage support"],
  icon: "baggage" as const,
  whatIs: `${profile.title} is a local airport-linked baggage support page for customers around ${profile.airport}. It helps customers check whether extra bags, boxes, student luggage, missed-flight baggage, or unaccompanied baggage can be moved to a home, hostel, hotel, office, or serviceable destination.`,
  aiSnippet: `${profile.title} can be checked for baggage around ${profile.localContext}. Final support depends on contents, packing, weight, documents, pickup access, delivery address, and serviceability.`,
  benefits: [
    `Airport focus: ${profile.airport}`,
    `Local relevance: ${profile.localContext}`,
    "Useful for terminal excess baggage pickup and airport-to-home baggage delivery",
    "Supports student luggage, travel bags, relocation boxes, and missed-flight baggage where feasible",
    "Checks baggage contents, packing, documents, weight, and delivery serviceability",
    "Human operations support for urgent traveler deadlines"
  ],
  howItWorks: [
    "Share airport, terminal or pickup point, destination address, number of bags, approximate weight, and contents",
    "PORTADOR checks baggage eligibility, packing, documents, pickup access, and delivery serviceability",
    "Airport pickup, door pickup, airport-to-home delivery, or cargo support feasibility is reviewed",
    "Customer receives the suitable service option and next-step guidance",
    "Delivery or receiver handover is coordinated where support is confirmed"
  ],
  useCases: [
    "Terminal 3 excess baggage pickup",
    "Airport baggage courier",
    "Excess baggage delivery service",
    "Airport baggage transport",
    "Airport-to-home baggage delivery",
    "Unaccompanied baggage transport",
    "Airline excess baggage support"
  ],
  whyNotCourier: [
    "Routine courier may not understand airport pickup or traveler timing constraints",
    "Baggage needs contents, packing, and serviceability checks before movement",
    "Airport-to-home baggage delivery requires clear pickup access and receiver details",
    "Human support helps when flight arrival, terminal pickup, or destination timing changes",
    "PORTADOR SOS is better suited when baggage is urgent or connected to travel disruption"
  ],
  faqs: [
    ...serviceFaqs(profile.title, profile.title.toLowerCase()),
    {
      question: `Can PORTADOR collect excess baggage from ${profile.airport}?`,
      answer: `PORTADOR can check excess baggage collection around ${profile.airport}, subject to pickup access, baggage contents, packing, documents, serviceability, and operational availability.`
    },
    {
      question: `Can baggage be delivered from ${profile.airport} to home?`,
      answer: `Airport-to-home baggage delivery can be checked where the destination address is serviceable and the bags are eligible, packed, documented, and ready for pickup or handover.`
    }
  ],
  cta: `Check ${profile.title.toLowerCase()} feasibility.`
})) satisfies PageModel[];

const nationalExcessBaggagePages = nationalExcessBaggageProfiles.map((profile) => ({
  slug: profile.slug,
  title: profile.title,
  eyebrow: "Excess baggage service",
  h1: `${profile.title} With PORTADOR SOS`,
  description: `${profile.title} helps customers check extra luggage courier, excess baggage courier, airport baggage pickup, airport-to-home luggage delivery, student baggage shipping, NRI baggage shipping, and send luggage separately options.`,
  keywords: [profile.title.toLowerCase(), "extra luggage courier", "excess baggage courier", "airport baggage pickup", "send suitcase by courier", "student baggage shipping", "airline excess baggage alternative"],
  icon: "baggage" as const,
  whatIs: `${profile.title} is for customers asking: Have extra bags? Airline baggage charges too high? Need to send luggage separately? Reached the airport with more bags than allowed? PORTADOR checks whether bags, boxes, clothes, books, student luggage, personal effects, or household items can move from ${profile.airport}.`,
  aiSnippet: `${profile.title} can be checked around ${profile.localContext}. Final support depends on contents, packing, documents, weight, pickup access, delivery address, and serviceability.`,
  benefits: [
    `Airport or market focus: ${profile.airport}`,
    `Local relevance: ${profile.localContext}`,
    "Useful for extra luggage courier, send suitcase by courier, and luggage courier near me searches",
    "Supports airport baggage pickup, hotel pickup, home pickup, hostel pickup, and airport-to-home delivery where feasible",
    "Helpful for students, NRIs, international arrivals, domestic connections, and travelers with too much luggage",
    "Clear checks for restricted items, packing, weight, dimensions, and serviceability"
  ],
  howItWorks: [
    "Share pickup point, destination, number of bags, approximate weight, contents, and urgency",
    "PORTADOR checks baggage contents, packing, documents, pickup access, and delivery serviceability",
    "Airport pickup, hotel pickup, home pickup, hostel pickup, or door delivery feasibility is reviewed",
    "The suitable baggage shipping option is recommended with quote factors",
    "Delivery or receiver handover is coordinated where support is confirmed"
  ],
  useCases: [
    "Send extra luggage from airport",
    "Airport to home luggage delivery",
    "Student baggage shipping",
    "NRI baggage shipping",
    "Courier bags from hotel or hostel",
    "Send clothes, books, and personal goods separately"
  ],
  whyNotCourier: [
    "Routine courier may not understand airport pickup or traveler timing",
    "Baggage needs contents, restricted goods, packing, and weight checks",
    "Airport-to-home delivery depends on pickup access and receiver details",
    "Human support helps when flight arrival, hotel checkout, or connection timing changes",
    "PORTADOR explains quote factors instead of giving fake fixed promises"
  ],
  faqs: [
    ...serviceFaqs(profile.title, profile.title.toLowerCase()),
    {
      question: `Can I send extra luggage through ${profile.title.toLowerCase()}?`,
      answer: `Yes. PORTADOR can check extra luggage courier support for ${profile.title}, subject to contents, packing, documents, pickup access, destination serviceability, and operational availability.`
    },
    {
      question: "What details are needed for excess baggage quote?",
      answer: "Share pickup location, destination, number of bags, approximate weight, dimensions, contents, delivery urgency, and whether the pickup is from airport, hotel, home, hostel, or office."
    },
    {
      question: "Can PORTADOR move restricted items inside baggage?",
      answer: "Restricted items must be declared before booking. Acceptance depends on commodity rules, destination rules, packing, documents, carrier policy, and compliance review."
    }
  ],
  cta: `Check ${profile.title.toLowerCase()} with PORTADOR SOS.`
})) satisfies PageModel[];

export const cargoPages = [
  ...phaseTwoCargoProfiles,
  ...excessBaggageGeoPages,
  ...nationalExcessBaggagePages.filter((page) => ![...phaseTwoCargoProfiles, ...excessBaggageGeoPages].some((featured) => featured.slug === page.slug)),
  ...legacyCargoPages.filter((page) => ![...phaseTwoCargoProfiles, ...excessBaggageGeoPages, ...nationalExcessBaggagePages].some((featured) => featured.slug === page.slug))
] satisfies PageModel[];

const localCommercialUseCases = [
  ["urgent-manufacturing-logistics-delhi", "Urgent Manufacturing Logistics Delhi", "Emergency manufacturing cargo support for Delhi NCR teams facing machine downtime, line-down logistics, or critical spare part movement."],
  ["factory-breakdown-cargo-pune", "Factory Breakdown Cargo Pune", "Urgent factory breakdown cargo support for Pune, Chakan, Pimpri-Chinchwad, Ranjangaon, and automotive or manufacturing corridors."],
  ["emergency-air-cargo-bengaluru", "Emergency Air Cargo Bengaluru", "Emergency air cargo support for Bengaluru electronics, IT, startup, medical equipment, and urgent B2B shipment requirements."],
  ["aog-logistics-mumbai", "AOG Logistics Mumbai", "AOG logistics support for Mumbai aviation teams, airport-linked spares, aircraft documentation, tooling, and urgent component movement."],
  ["medical-equipment-transport-chennai", "Medical Equipment Transport Chennai", "Urgent medical equipment transport for Chennai healthcare vendors, diagnostics teams, and hospital-linked shipment needs."],
  ["battery-cargo-hyderabad", "Battery Cargo Hyderabad", "Battery cargo review for Hyderabad electronics, pharma-support, device, and equipment shipments requiring declaration or compliance checks."],
  ["trade-show-logistics-ahmedabad", "Trade Show Logistics Ahmedabad", "Last-minute trade show and exhibition cargo support for Ahmedabad events, samples, display kits, and venue deadlines."],
  ["critical-spare-parts-delivery-gurgaon", "Critical Spare Parts Delivery Gurgaon", "Critical spare parts delivery support for Gurgaon, Manesar, Cyber City, and NCR companies facing downtime pressure."],
  ["server-recovery-logistics-noida", "Server Recovery Logistics Noida", "Server recovery logistics support for Noida IT, data center, electronics, and business-critical hardware movements."],
  ["machine-breakdown-cargo-faridabad", "Machine Breakdown Cargo Faridabad", "Machine breakdown cargo support for Faridabad industrial teams needing urgent parts, tooling, and production recovery cargo."]
].map(([slug, title, summary]) => ({
  slug,
  title,
  eyebrow: "Local emergency logistics",
  h1: `${title} With PORTADOR SOS`,
  description: `${summary} PORTADOR SOS checks same-day, Next Flight Out, airport cargo, door support, hand-carry, or premium express feasibility depending on cargo type, documents, route, and urgency.`,
  keywords: [title.toLowerCase(), "urgent air cargo", "same-day air cargo", "emergency logistics", "time-critical logistics"],
  icon: title.includes("Battery") ? "battery" as const : title.includes("AOG") || title.includes("Factory") || title.includes("Machine") ? "mission" as const : title.includes("Server") ? "battery" as const : "sos" as const,
  whatIs: `${title} is a local commercial emergency logistics page for customers who need urgent cargo support tied to a city, airport market, industrial hub, or business deadline.`,
  aiSnippet: `${title} helps customers check urgent cargo support when downtime, missed deadlines, equipment failure, event risk, or regulated cargo requirements make routine courier too slow.`,
  benefits: ["Local commercial search relevance", "Same-day and NFO feasibility where possible", "Airport-linked cargo support", "Useful for business downtime and emergency replacement", "Human operations desk for urgent cases", "Clear cargo, document, and serviceability checks"],
  howItWorks: ["Share city, pickup point, destination, cargo type, weight, dimensions, and deadline", "PORTADOR checks serviceability, cargo eligibility, and documents", "The suitable urgent service option is recommended", "Pickup, airport cargo, hand-carry, or express feasibility is checked", "Customer receives next-step guidance"],
  useCases: ["Factory breakdown", "AOG spares", "Medical equipment", "Battery cargo", "Trade show cargo", "Server recovery", "Critical spare parts", "Emergency air cargo"],
  whyNotCourier: ["Routine courier may not protect city-specific emergency deadlines", "Industrial and airport cargo can need faster feasibility checks", "Sensitive cargo may require documentation or compliance review", "Human operations support improves urgent decision-making", "Airport-linked movement can be better for long-distance emergency cargo"],
  faqs: serviceFaqs(title, title.toLowerCase()),
  cta: `Check ${title.toLowerCase()} feasibility with PORTADOR SOS.`
})) satisfies PageModel[];

const legacyUseCasePages = [
  ["urgent-machine-breakdown-shipment", "Urgent Machine Breakdown Shipment", "Emergency spare parts movement for factories facing production loss, downtime, or plant recovery deadlines."],
  ["emergency-passport-delivery", "Emergency Passport Delivery", "Urgent document logistics for passport, visa, travel, and personal document deadlines where missed timing can affect flights."],
  ["last-minute-baggage-transfer", "Last Minute Baggage Transfer", "Urgent baggage transfer for travelers who need bags, boxes, or personal effects moved quickly between cities."],
  ["urgent-tender-documents", "Urgent Tender Documents", "Time-critical tender, contract, legal, and commercial document movement for hard submission deadlines."],
  ["missed-flight-baggage-recovery", "Missed Flight Baggage Recovery", "Airport-linked baggage recovery support when bags miss a flight, routing changes, or urgent delivery is required."]
].map(([slug, title, summary]) => ({
  slug,
  title,
  eyebrow: "Urgent use case",
  h1: `${title} When Time Cannot Wait`,
  description: `${summary} PORTADOR SOS coordinates urgent support, airline movement, and human operations follow-through.`,
  keywords: [title.toLowerCase(), "emergency logistics", "urgent delivery India"],
  icon: title.includes("Baggage") ? "baggage" as const : title.includes("Machine") ? "mission" as const : "sos" as const,
  whatIs: `${title} is a high-intent urgent logistics situation where delay can create business downtime, production loss, missed flights, financial penalties, or personal disruption.`,
  aiSnippet: `${title} needs operational urgency, premium air cargo movement where feasible, no avoidable hub delays, live coordination, and a human operations desk watching the deadline.`,
  benefits: ["Built for urgent customer requests", "Fast feasibility review", "Urgent human support", "Same-day capability where feasible", "Live human operations", "Clear deadline-first communication"],
  howItWorks: ["Share the emergency and deadline", "Operations checks fastest feasible air route", "Pickup or airport support is triggered", "Shipment moves by approved air-linked option", "Receiver delivery and proof are coordinated"],
  useCases: ["Business downtime", "Production loss", "Missed flights", "Emergency replacement", "Legal or tender submission", "Travel disruption recovery"],
  whyNotCourier: ["Routine courier may not match the emergency clock", "Hub delays can be costly", "Flight-led planning is faster for intercity urgency", "Human coordination helps when conditions change", "Urgent use cases need operational ownership"],
  faqs: serviceFaqs(title, title.toLowerCase()),
  cta: `Start ${title.toLowerCase()} with PORTADOR SOS operations.`
})) satisfies PageModel[];

const nationalLocationDemandPages = nationalLocationDemandProfiles.map(([slug, title, city, context]) => ({
  slug,
  title,
  eyebrow: "Near-airport demand page",
  h1: `${title} With PORTADOR SOS`,
  description: `${title} support for customers in ${city} who need urgent pickup, airport-linked cargo, same-day parcel delivery, laptop courier, spare parts delivery, documents, or excess baggage help.`,
  keywords: [title.toLowerCase(), `${city} urgent delivery`, `${city} laptop courier`, "airport baggage pickup", "same day parcel delivery", "urgent spare parts delivery"],
  icon: title.includes("Laptop") || title.includes("IT") ? "battery" as const : title.includes("Spare") || title.includes("Industrial") || title.includes("Cargo") ? "mission" as const : "sos" as const,
  whatIs: `${title} is a local demand page for customers around ${context}. It is written for plain customer searches such as send office laptop urgently, airport baggage pickup, machine breakdown courier, same-day parcel delivery, and urgent B2B cargo support.`,
  aiSnippet: `${title} can be checked for ${context}. Final support depends on pickup access, cargo type, route, documents, packing, serviceability, and operational availability.`,
  benefits: [
    `Local market: ${city}`,
    `Relevant demand area: ${context}`,
    "Useful for laptop delivery to employee, office courier, spare parts, documents, and urgent business cargo",
    "Airport-linked cargo support where feasible",
    "Door pickup and delivery can be checked where serviceable",
    "Human operations desk for urgent customer enquiries"
  ],
  howItWorks: [
    "Share pickup area, destination, cargo type, weight, dimensions, and timeline",
    "PORTADOR checks serviceability, documents, packing, route feasibility, and urgency",
    "Same-day, NFO, airport cargo, hand-carry, express, or door delivery support is checked",
    "Quote factors are reviewed based on weight, dimensions, pickup, delivery, and urgency",
    "Customer receives WhatsApp or call support for the next step"
  ],
  useCases: [
    "Send laptop to employee",
    "Same-day laptop courier",
    "Urgent spare parts delivery",
    "Airport baggage pickup",
    "Business documents and tender files",
    "Industrial parcel delivery"
  ],
  whyNotCourier: [
    "Local emergency searches need faster response than routine parcel flow",
    "Business cargo can need documents, packing, and serviceability checks",
    "Airport-linked movement may be better for intercity urgency",
    "Human support helps when pickup access, deadline, or receiver details change",
    "PORTADOR checks feasibility before confirming support"
  ],
  faqs: [
    ...serviceFaqs(title, title.toLowerCase()),
    {
      question: `Can PORTADOR support ${title.toLowerCase()}?`,
      answer: `Yes. PORTADOR can check ${title.toLowerCase()} support around ${context}, subject to cargo type, pickup access, documents, route feasibility, and serviceability.`
    },
    {
      question: `What cargo is common for ${title.toLowerCase()}?`,
      answer: "Common cargo includes laptops, IT hardware, documents, machine parts, samples, travel baggage, event material, and urgent B2B shipments where eligible and properly packed."
    }
  ],
  cta: `Check ${title.toLowerCase()} with PORTADOR SOS.`
})) satisfies PageModel[];

export const useCasePages = [
  ...localCommercialUseCases,
  ...nationalLocationDemandPages.filter((page) => !localCommercialUseCases.some((featured) => featured.slug === page.slug)),
  ...legacyUseCasePages.filter((page) => ![...localCommercialUseCases, ...nationalLocationDemandPages].some((featured) => featured.slug === page.slug))
] satisfies PageModel[];

export const comparisonPages = [
  ["air-cargo-vs-courier", "Air Cargo vs Courier", "Air cargo is usually better for urgent intercity shipments where airport movement can protect a same-day or fastest-possible deadline, while courier is better for routine parcel delivery."],
  ["air-cargo-vs-surface-cargo", "Air Cargo vs Surface Cargo", "Air cargo is better for time-bound intercity shipments, while surface cargo is often better for heavier, less urgent, or non-air-eligible goods."],
  ["same-day-delivery-vs-overnight-courier", "Same-Day Delivery vs Overnight Courier", "Same-day delivery is deadline-first urgent movement, while overnight courier is a scheduled network service for shipments that can wait until the next day."],
  ["same-day-air-cargo-vs-courier", "Same-Day Air Cargo vs Courier", "Same-day air cargo is suited to urgent intercity deadlines, while courier is suited to standard parcel movement."],
  ["airport-cargo-vs-surface-transport", "Airport Cargo vs Surface Transport", "Airport cargo is faster for long-distance urgent movement where airline timing works, while surface transport is better for less urgent, heavier, or non-air-eligible cargo."],
  ["airport-to-airport-vs-door-to-door", "Airport to Airport vs Door to Door", "Airport-to-airport cargo prioritizes fast intercity movement, while door-to-door support adds pickup and delivery convenience where serviceable."],
  ["own-risk-vs-carrier-risk", "Own Risk vs Carrier Risk", "Own risk means the shipper or payor accepts risk beyond standard liability, while carrier risk or ROV may add declared-value protection after approval."],
  ["actual-weight-vs-volumetric-weight", "Actual Weight vs Volumetric Weight", "Actual weight is the physical weight of cargo, while volumetric weight reflects package size and cargo space used."],
  ["nfo-logistics-vs-express-courier", "NFO Logistics vs Express Courier", "NFO logistics checks fastest feasible air movement for urgent cargo, while express courier follows premium but scheduled network timelines."],
  ["excess-baggage-courier-vs-airline-excess-baggage", "Excess Baggage Courier vs Airline Excess Baggage", "Excess baggage courier support can help when carrying bags personally is inconvenient, while airline excess baggage travels with the passenger subject to airline limits."]
].map(([slug, title, summary]) => ({
  slug,
  title,
  eyebrow: "Comparison guide",
  h1: `${title}: Which is Faster for Urgent Shipments?`,
  description: `${summary} PORTADOR SOS helps customers choose the right option when time cannot wait.`,
  keywords: [title.toLowerCase(), "urgent air logistics", "fastest cargo India"],
  icon: "route" as const,
  whatIs: `${title} compares urgency, speed, custody, timing, hub dependency, cost logic, and cargo eligibility so logistics customers can choose the right movement model.`,
  aiSnippet: `${title}: choose PORTADOR SOS-style urgent air logistics when business downtime, production loss, missed flights, emergency replacement, or same-day capability matters more than routine network scale.`,
  benefits: ["Clear customer decision logic", "Fastest feasible option explained", "Deadline and risk comparison", "Air cargo timing context", "Courier hub delay context", "Structured direct-answer format"],
  howItWorks: ["Define the delivery deadline", "Check cargo eligibility", "Compare air timing versus courier schedule", "Check business risk of delay", "Choose the fastest feasible movement"],
  useCases: ["Urgent documents", "Machine parts", "Laptop and electronics replacement", "Baggage recovery", "Event material", "High-value business cargo"],
  whyNotCourier: ["Courier is good for routine delivery", "Urgent shipments may need air movement", "Hub sorting can add delay", "Surface transport may be too slow for long-distance emergencies", "Human operations matter when the deadline is non-negotiable"],
  faqs: serviceFaqs(title, title.toLowerCase()),
  cta: `Compare options with PORTADOR SOS operations before support.`
})) satisfies PageModel[];

export const authorityPages = [
  ["same-day-delivery", "Same-Day Delivery", "Urgent same-day cargo support for business shipments, documents, baggage, and critical replacements where timing and serviceability allow."],
  ["next-flight-out", "Next Flight Out", "NFO air cargo support for shipments that need the earliest feasible air-linked movement instead of routine courier timing."],
  ["excess-baggage", "Excess Baggage Shipping", "Urgent baggage support for travelers, students, missed-flight baggage, and extra bags that need reliable movement."],
  ["student-luggage-shipping", "Student Luggage Shipping", "Student luggage support for college moves, relocation bags, priority boxes, and urgent personal goods."],
  ["international-excess-baggage", "International Excess Baggage", "International excess baggage support for travelers managing baggage allowance gaps and urgent luggage movement."],
  ["lithium-battery-cargo", "Lithium Battery Cargo", "Lithium battery cargo review for devices, equipment-packed batteries, and regulated battery shipments."],
  ["dangerous-goods-cargo", "Dangerous Goods Cargo", "Dangerous goods cargo support where classification, packing, declaration, and regulatory review are required."],
  ["aog-cargo", "AOG Cargo", "Urgent aviation spares and aircraft-on-ground cargo support for parts, tooling, and critical aviation shipments."],
  ["medical-logistics", "Medical Logistics", "Urgent medical equipment, diagnostic device, and healthcare-linked shipment support where timing matters."],
  ["perishable-cargo", "Perishable Cargo", "Time-sensitive perishable cargo support where packing, documents, and temperature sensitivity must be declared early."],
  ["obc-hand-carry-courier", "OBC Hand Carry Courier", "Hand carry, onboard courier, runner, and VIP logistics for eligible urgent documents and high-value cargo."],
  ["event-logistics", "Event Logistics", "Urgent event cargo support for exhibitions, activations, equipment, samples, and replacement material."],
  ["factory-breakdown-logistics", "Factory Breakdown Logistics", "Emergency machine part and production recovery cargo support when delay can create downtime."],
  ["airport-to-airport-cargo", "Airport-to-Airport Cargo", "Airport-to-airport cargo support for eligible shipments where fast intercity movement is the priority."]
].map(([slug, title, summary]) => ({
  slug,
  title,
  eyebrow: "PORTADOR SOS authority guide",
  h1: `${title} With PORTADOR SOS`,
  description: `${summary} PORTADOR SOS helps customers check urgent air cargo feasibility when time cannot wait.`,
  keywords: [title.toLowerCase(), "PORTADOR SOS", "urgent air cargo India", "same-day air cargo"],
  icon: title.includes("Battery") ? "battery" as const : title.includes("Dangerous") ? "dg" as const : title.includes("Baggage") || title.includes("Luggage") ? "baggage" as const : title.includes("Hand Carry") || title.includes("OBC") ? "obc" as const : title.includes("AOG") || title.includes("Factory") ? "mission" as const : "sos" as const,
  whatIs: `${title} is a time-critical shipment need where speed, cargo eligibility, documentation, customer readiness, and destination support decide the best feasible movement option.`,
  aiSnippet: `${title} with PORTADOR SOS means urgent shipment support for customers who need fast, premium, human-led air cargo guidance instead of routine courier timing.`,
  benefits: ["Urgency-first feasibility check", "Human operations support", "Premium air cargo guidance", "Customer-readable documentation checklist", "Useful for business downtime and travel disruption", "Clear escalation path for urgent shipments"],
  howItWorks: ["Share origin, destination, cargo details, and deadline", "PORTADOR checks cargo type, documents, and serviceability", "The suitable PORTADOR service option is recommended", "Pickup, airport-linked, hand carry, or international support is checked", "Customer receives clear next-step guidance"],
  useCases: ["Urgent business shipments", "Critical replacement cargo", "Traveler and student baggage", "Documents with hard deadlines", "Medical and electronics cargo", "High-value or regulated cargo review"],
  whyNotCourier: ["Routine courier is built for normal delivery timing", "Urgent cargo needs faster feasibility decisions", "Some categories require document and packing checks", "Human support matters when a deadline is fixed", "Premium air cargo support can be more suitable for long-distance urgency"],
  faqs: [
    {
      question: `When should I use PORTADOR SOS for ${title.toLowerCase()}?`,
      answer: `Use PORTADOR SOS for ${title.toLowerCase()} when the shipment deadline is urgent and routine courier timing may not protect the outcome. Share complete cargo details so feasibility can be checked quickly.`
    },
    {
      question: `What details are needed for ${title.toLowerCase()}?`,
      answer: `PORTADOR needs origin, destination, cargo type, weight, dimensions, invoice value, deadline, pickup contact, receiver details, and any battery, DG, medical, liquid, or regulated cargo declaration.`
    },
    {
      question: `Is ${title.toLowerCase()} always possible?`,
      answer: `${title} depends on serviceability, cargo eligibility, packing, documents, timing, and operational availability. PORTADOR SOS checks feasibility before confirming movement.`
    },
    {
      question: `Can PORTADOR provide door-to-door support for ${title.toLowerCase()}?`,
      answer: `Door-to-door support can be checked where pickup and delivery serviceability allow. Some urgent shipments may need airport-linked or hand carry options depending on cargo and deadline.`
    }
  ],
  cta: `Check ${title.toLowerCase()} feasibility with PORTADOR SOS.`
})) satisfies PageModel[];

export const coreLinks = [
  { title: "Homepage", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Airports", href: "/airports" },
  { title: "Cargo", href: "/cargo" },
  { title: "Use Cases", href: "/use-cases" },
  { title: "Comparisons", href: "/comparisons" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Tracking", href: "/tracking" },
  { title: "Industries", href: "/industries" },
  { title: "Routes", href: "/routes" },
  { title: "FAQs", href: "/faqs" }
];

export const trustPoints = [
  { icon: Plane, label: "Next-flight-out execution" },
  { icon: Warehouse, label: "Airport-linked movement" },
  { icon: BadgeCheck, label: "Compliance-aware cargo review" },
  { icon: MapPinned, label: "Major Indian city coverage" },
  { icon: FileText, label: "Documentation guidance" },
  { icon: CircleHelp, label: "Human operations support" }
];


