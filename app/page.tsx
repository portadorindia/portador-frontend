import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Flame,
  Globe2,
  Luggage,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
  Siren,
  Warehouse,
  PackageCheck
} from "lucide-react";
import { AviationHeroVisual } from "@/components/aviation-hero-visual";
import { FAQBlock, Process } from "@/components/page-template";
import { TrackingForm } from "@/components/tracking-form";
import { CTA, EmergencyCallback, PrimaryButton, QuickSelector, SecondaryButton, Section } from "@/components/ui";
import { hubArticles, industries, site, whatsappHref } from "@/lib/site";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { customerEducationFaqs } from "@/lib/customer-faqs";
import { normalizeFaqs } from "@/lib/faq";

const heroSignals = [
  "50+ Airport Cargo Connections",
  "5000+ Serviceable Pin Codes",
  "24x7 Operations Desk",
  "Same-Day / NFO Availability",
  "Human Operations Coordination",
  "DG & Battery Cargo Support"
];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://portador.in"
  }
};

const cargoCategoryCards = [
  { label: "Machine Parts & Breakdown Recovery", href: "/cargo/machine-parts", bullets: ["Breakdown recovery", "Production support"], Icon: Warehouse },
  { label: "Critical IT Hardware, Server & Laptop Shipping", href: "/cargo/laptop-shipping", bullets: ["Device movement", "Business equipment"], Icon: PackageCheck },
  { label: "Dangerous Goods (DG), Lithium Battery & Restricted Cargo Review", href: "/cargo/dangerous-goods", bullets: ["Compliance review required", "Liquids, Powders, Gels & Batteries"], Icon: Flame },
  { label: "Excess Baggage, Personal Effects & Student Luggage", href: "/cargo/excess-baggage", bullets: ["Domestic and international", "Door to Door + Airport Pickup & Drop"], Icon: Luggage },
  { label: "Medical Equipment, Healthcare & Emergency Shipments", href: "/cargo/medical-equipment", bullets: ["Priority handling", "Surgical Equipment"], Icon: ShieldCheck },
  { label: "Aircraft Spare Parts & AOG Logistics", href: "/cargo/aog-cargo", bullets: ["Aviation spares", "Critical replacement parts"], Icon: Plane },
  { label: "Tender Documents & Legal Papers", href: "/cargo/tender-documents", bullets: ["Tender & Legal Papers", "Time-sensitive submissions"], Icon: BriefcaseBusiness },
  { label: "Perishables", href: "/cargo/perishables", bullets: ["Fruits, Vegetables & Time-Sensitive Food Cargo"], Icon: Clock3 },
  { label: "Temperature Controlled Cargo", href: "/cargo/temperature-controlled-cargo", bullets: ["Dry Ice, Gel Packs & Frozen Cargo"], Icon: Clock3 },
  { label: "High-Value Cargo", href: "/cargo/high-value-cargo", bullets: ["Electronics, IT Products & Premium Equipment"], Icon: ShieldCheck },
  { label: "Hand Carry / OBC", href: "/cargo/hand-carry-obc", bullets: ["4-7 Hours Delivery Option", "VIP urgency"], Icon: BriefcaseBusiness },
  { label: "Other Urgent Cargo", href: whatsappHref, bullets: ["Share cargo details", "PORTADOR will check service availability"], Icon: PackageCheck }
];

const comparisonRows = [
  ["Urgent Readiness", "Fast desk confirmation; Next Flight Out routing where available", "Fixed hub sorting and scheduled surface linehauls"],
  ["Support Ecosystem", "24/7 dedicated human operations desk", "Standard automated ticket / IVR flow"],
  ["Regulated Shipments", "Dedicated compliance review for DG, batteries, and liquids", "Heavily restricted or systematically rejected"],
  ["Tracking Model", "Real-time human context and milestone tracking", "Standard scan-to-scan milestone updates"],
  ["Human Decision Making", "Dedicated operations specialist reviews every urgent movement", "Automated network routing and standard processing"],
  ["Ideal For", "Manufacturing downtime, missed flight baggage, tender deadlines", "Routine commercial parcels"]
];

const trustReasons = [
  "24x7 operations desk for urgent shipment support",
  "50+ airport cargo connections across India",
  "5000+ serviceable pin codes for pickup and delivery support",
  "Same-day and NFO availability checks for urgent cargo",
  "Human operations coordination for time-sensitive shipments",
  "DG and battery cargo support with documentation review"
];

const bookingChecklist = [
  "Origin and pickup location",
  "Destination and receiver details",
  "Cargo weight and dimensions",
  "Invoice value and cargo description",
  "Required delivery deadline",
  "Battery, DG, liquid, medical, or regulated cargo declaration if applicable"
];

const protectionRows = [
  ["Standard Docket Liability", "Rs. 2,500 per docket"],
  ["Shipper / Payor Risk", "No compensation"],
  ["Carrier Risk / ROV", "5% + GST @18% of Invoice / Declared Value, subject to approval as per commodity."],
  ["High-Value Cargo", "Carrier Risk recommended"]
];

const protectionNotes = [
  ["Shipper / Payor Risk", "The shipper or payor accepts shipment risk beyond standard liability limits when additional declared-value protection is not approved or purchased."],
  ["Carrier Risk / ROV", "Carrier Risk / ROV is a declared-value option that may be available after commodity approval, invoice review, and written acceptance."],
  ["Declared Value", "Declared Value is the value the customer declares for risk review. It should match shipment documents and must be truthful."],
  ["Invoice Value", "Invoice Value is the commercial value shown on the invoice or supporting document used for shipment and risk review."],
  ["Liability Limits", "Liability limits define the maximum compensation available under the selected shipment risk option and policy terms."],
  ["Commodity Approval", "Commodity approval means PORTADOR checks whether the cargo category can be accepted for the requested service and risk option."]
];

const topServiceCards = [
  { title: "PORTADOR SOS (Same-Day & Next Flight Out)", href: "/services/portador-sos", icon: Siren, copy: "Same-day air cargo, next flight out logistics, 10-16 hour availability where possible, airport-to-airport movement, and urgent door coordination." },
  { title: "PORTADOR EXPRESS (Next Business Day)", href: "/services/portador-express", icon: Plane, copy: "Next business day and second business day premium air cargo for priority B2B shipments, 10kg-100kg+, and planned urgent movement." },
  { title: "PORTADOR BLACK (On Board Courier / Hand Carry)", href: "/services/portador-black", icon: BriefcaseBusiness, copy: "OBC, hand carry, runner, and VIP short-notice logistics for confidential cargo, founders, CEOs, HNIs, UHNWIs, and high-value shipments." },
  { title: "PORTADOR GLOBAL (Critical Imports & Exports)", href: "/services/portador-global", icon: Globe2, copy: "Urgent international import and export air cargo coordination for premium cross-border air freight and emergency shipment recovery." }
];

const emergencyKnowledgeCards = hubArticles.slice(0, 4).map((item) => ({
  title: item.title,
  href: `/knowledge-hub/${item.slug}`,
  copy: item.aiSnippet ?? item.description
}));

const aiQuickAnswers = [
  {
    question: "What is PORTADOR SOS?",
    answer: "PORTADOR SOS is PORTADOR's flagship emergency air cargo service for same-day air cargo, next flight out coordination, airport cargo support, and urgent door support where serviceability allows."
  },
  {
    question: "What is Next Flight Out cargo?",
    answer: "Next Flight Out cargo moves urgent shipments through the earliest suitable airline connection instead of waiting for routine courier hub and linehaul schedules."
  },
  {
    question: "Can PORTADOR move cargo in 10-16 hours?",
    answer: "PORTADOR SOS can check 10-16 hour urgent movement availability on major airport-connected lanes where timing, cargo eligibility, documentation, and serviceability align."
  },
  {
    question: "Why is airport cargo faster than regular courier?",
    answer: "Airport cargo can be faster than regular courier because the long-distance leg can move by air instead of waiting for routine hub sorting and surface linehaul schedules."
  }
];

const citySupportCards = [
  {
    href: "/airports/delhi-igi-airport",
    title: "PORTADOR SOS in Delhi NCR",
    copy: "Urgent support for machine parts, legal documents, medical equipment, excess baggage, and B2B shipments moving from North India's key business region."
  },
  {
    href: "/airports/mumbai-csmia",
    title: "PORTADOR SOS in Mumbai",
    copy: "Premium support for high-value cargo, event material, urgent business documents, traveler baggage, and airport-connected cargo in the western market."
  },
  {
    href: "/airports/bangalore-kempegowda",
    title: "PORTADOR SOS in Bengaluru",
    copy: "Urgent laptop shipping, electronics, IT hardware, startup cargo, medical equipment, and time-sensitive business shipments for Bengaluru teams."
  },
  {
    href: "/airports/chennai-airport",
    title: "PORTADOR SOS in Chennai",
    copy: "Air cargo support for manufacturing parts, automotive shipments, electronics, medical equipment, and urgent intercity business movement."
  },
  {
    href: "/airports/hyderabad-rgia",
    title: "PORTADOR SOS in Hyderabad",
    copy: "Urgent support for pharma-adjacent cargo, electronics, business documents, medical equipment, and airport-connected shipments."
  },
  {
    href: "/airports/pune-airport",
    title: "PORTADOR SOS in Pune",
    copy: "Support for automotive parts, manufacturing spares, student luggage, excess baggage, and priority B2B shipments from Pune."
  },
  {
    href: "/airports/ahmedabad-airport",
    title: "PORTADOR SOS in Ahmedabad",
    copy: "Urgent cargo support for manufacturing, pharma-adjacent shipments, textiles, machine parts, and Mumbai-linked business cargo."
  },
  {
    href: "/airports/kolkata-airport",
    title: "PORTADOR SOS in Kolkata",
    copy: "Eastern India support for urgent documents, baggage, event cargo, medical equipment, and business shipments where air movement is feasible."
  }
];

const phaseTwoHomeFaqs = [
  { question: "Is emergency air cargo faster than courier service?", answer: "Emergency air cargo can be faster than courier service for urgent intercity shipments when airport-linked movement is feasible. PORTADOR SOS checks cargo readiness, documents, route availability, and serviceability before confirming the fastest support option." },
  { question: "When should I use Next Flight Out cargo?", answer: "Use Next Flight Out cargo when the shipment cannot wait for routine courier or overnight movement. It is suitable for AOG parts, machine breakdown cargo, emergency documents, medical equipment, high-value cargo, and time-critical replacements." },
  { question: "Can PORTADOR arrange same-day air cargo?", answer: "PORTADOR can arrange same-day air cargo where timing, cargo eligibility, documentation, pickup readiness, destination support, and operational availability allow. Same-day support is availability-based, not a fake blanket guarantee." },
  { question: "Can PORTADOR move dangerous goods and battery shipments?", answer: "PORTADOR can check dangerous goods and battery shipments through a compliance review. Final movement depends on airline rules, MSDS or declaration where required, compliant packing, documentation, approval, route availability, and serviceability." },
  { question: "Can PORTADOR assist with excess baggage transportation?", answer: "PORTADOR can assist with excess baggage transportation where bags or boxes are eligible, packed, documented, and serviceable. Support can include airport baggage courier, airport-to-home baggage delivery, student luggage, and unaccompanied baggage transport." },
  { question: "Can PORTADOR support factory breakdown emergencies?", answer: "PORTADOR can support factory breakdown emergencies by checking urgent movement for machine parts, tooling, controllers, motors, and replacement components. The operations desk checks same-day, NFO, airport cargo, or express availability based on route and cargo details." },
  { question: "Can PORTADOR support AOG aircraft parts?", answer: "PORTADOR can support AOG aircraft parts where cargo eligibility, documents, packing, route availability, and operational availability allow. AOG support is built for aviation spares, tooling, line station recovery, and Aircraft On Ground urgency." },
  { question: "Can PORTADOR collect cargo from airport terminals?", answer: "PORTADOR can check airport terminal cargo collection where access, documents, authorization, cargo release status, serviceability, and operational availability allow. Share airport, terminal, AWB or cargo reference, receiver details, and deadline for review." }
];

const baseHomeFaqs = [
  { question: "How to send urgent cargo today?", answer: "Send urgent cargo today by sharing origin, destination, deadline, cargo category, weight, dimensions, and documents with PORTADOR SOS. The operations desk checks whether urgent same-day or next-flight-out air cargo support is feasible for the shipment." },
  { question: "How to send parcel by flight?", answer: "A parcel can move by flight when it is air-eligible, properly packed, documented, and accepted for air cargo movement. PORTADOR SOS checks same-day air cargo, next flight out options, airport-to-airport cargo, and urgent door support where feasible." },
  { question: "What is same-day air cargo?", answer: "Same-day air cargo is urgent air-linked cargo movement planned to reach the destination the same day where timing, cargo eligibility, documentation, and serviceability allow. PORTADOR SOS uses this for business downtime, machine breakdown, missed flight baggage, and emergency replacement situations." },
  { question: "What is next flight out cargo?", answer: "Next Flight Out cargo is urgent air logistics where a shipment is routed through the earliest suitable airline connection. It is used when routine courier hub movement or overnight schedules are too slow for the shipment deadline." },
  { question: "What is airport-to-airport cargo?", answer: "Airport-to-airport cargo moves eligible shipments between airport cargo terminals using airline cargo channels. It can reduce avoidable hub delays when the receiver can collect at destination airport or when connected delivery is coordinated after flight movement." },
  { question: "When should I use PORTADOR SOS?", answer: "Use PORTADOR SOS when delay can create business downtime, production loss, missed flights, tender failure, emergency replacement failure, or customer escalation. It is built for urgent domestic air cargo where operational urgency matters more than routine courier scale." },
  { question: "Can PORTADOR move cargo in 10-16 hours?", answer: "PORTADOR SOS can check 10-16 hour urgent cargo movement availability on major airport-connected lanes where timing allows. Final availability depends on cargo readiness, eligibility, documentation, available air movement, and destination serviceability." },
  { question: "Can PORTADOR support dangerous goods, lithium batteries, or regulated cargo?", answer: "PORTADOR can support dangerous goods, lithium batteries, and regulated cargo after compliance review, but acceptance depends on airline rules and approvals. MSDS or declaration may be required, packing and documentation must be verified, and final movement depends on approval and serviceability." },
  { question: "How does PORTADOR reduce hub delays?", answer: "PORTADOR reduces avoidable hub delays by prioritizing airport-linked air cargo support where feasible instead of routine multi-hub courier movement. Human operations coordination helps urgent shipments move with clearer accountability." },
  { question: "Why regular courier fails for urgent shipments?", answer: "Regular courier can be too slow for urgent shipments because routine networks optimize pickup density, hub sorting, and scheduled linehaul movement. PORTADOR SOS is used when same-day air cargo, next flight out support, and human support are needed." },
  { question: "What information is needed for an urgent quote?", answer: "An urgent quote needs origin, destination, deadline, cargo type, weight, dimensions, pickup address, receiver details, invoice value, packing status, and any battery, dangerous goods, medical, liquid, or regulated cargo declaration. These details help PORTADOR SOS check urgent air cargo availability accurately." },
  { question: "Who should use PORTADOR BLACK?", answer: "PORTADOR BLACK is for founders, CEOs, HNIs, UHNWIs, family offices, legal teams, and high-value cargo clients who need hand carry, OBC, runner, VIP, confidential, or short-notice logistics. It is used when personal custody, fewer handoffs, and discreet coordination matter." },
  { question: "When should businesses use PORTADOR EXPRESS?", answer: "Businesses should use PORTADOR EXPRESS for next business day or second business day premium air cargo when the shipment is important but not a same-day emergency. It fits priority B2B cargo, 10kg-100kg+ shipments, commercial samples, electronics, parts, and planned urgent movement." },
  { question: "What is urgent international air cargo?", answer: "Urgent international air cargo is premium import or export air freight planned for cross-border shipments with tight deadlines. PORTADOR GLOBAL coordinates documentation review, compliance checks, premium air freight support, and receiver-side coordination for time-sensitive international cargo." },
  { question: "What cargo categories can PORTADOR support?", answer: "PORTADOR can support urgent cargo categories that are air-eligible, properly packed, and documented. Common categories include excess baggage, battery cargo, dangerous goods, perishables, temperature controlled cargo, medical equipment, AOG cargo, machine parts, tender documents, hand carry / OBC, air cargo charter, laptop shipping, and high-value cargo." },
  { question: "Is same-day delivery always feasible?", answer: "Same-day delivery is not always feasible. PORTADOR SOS confirms serviceability based on cargo readiness, documents, available air movement, destination support, and regulatory requirements before accepting an urgent shipment." },
  { question: "Can PORTADOR help with tracking?", answer: "Yes. PORTADOR can support tracking for urgent shipments handled through PORTADOR SOS, EXPRESS, BLACK, or GLOBAL. Customers should share the shipment reference or booking details for the fastest status check." },
  { question: "Can PORTADOR arrange reverse pickup?", answer: "Reverse pickup can be checked where the pickup location, cargo readiness, documentation, and serviceability allow. Share pickup address, consignee details, cargo type, deadline, and packing status for review." },
  { question: "Does PORTADOR provide warehousing?", answer: "PORTADOR may support warehousing or temporary holding for selected shipments where operationally feasible. Availability depends on location, cargo type, duration, compliance requirements, and shipment urgency." },
  { question: "Can PORTADOR support import shipments?", answer: "PORTADOR GLOBAL can support urgent international import air cargo. Import availability depends on documents, commodity type, customs status, consignee readiness, regulatory requirements, and available premium air cargo options." },
  { question: "Can PORTADOR move personal goods?", answer: "PORTADOR can move personal goods, excess baggage, student relocation cargo, and urgent travel-related shipments where the items are air-eligible, properly packed, documented, and accepted for movement." },
  { question: "What is PORTADOR liability per docket?", answer: "Unless separately agreed in writing, liability may be limited to Rs. 2,500 per docket as described in the Booking & Refund Policy. Customers should review the policy before booking high-value shipments." },
  { question: "What is Carrier Risk or FOV?", answer: "Carrier Risk or FOV may be available at 5% of invoice value for declared eligible shipments, subject to acceptance and written confirmation. Coverage terms depend on shipment details and policy conditions." },
  ...customerEducationFaqs
];

const homeFaqs = [...new Map([...phaseTwoHomeFaqs, ...baseHomeFaqs].map((faq) => [faq.question, faq])).values()].slice(0, 60);
const normalizedHomeFaqs = normalizeFaqs(homeFaqs);

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(normalizedHomeFaqs),
            serviceSchema({ title: "PORTADOR SOS Air Cargo", description: "Same-day air cargo, Next Flight Out coordination, urgent airport cargo support, and 24x7 human operations for urgent shipments across India.", slug: "" }, "")
          ])
        }}
      />

      <section className="relative overflow-hidden py-5 sm:py-6 lg:flex lg:h-[calc(100svh-64px)] lg:min-h-[560px] lg:max-h-[760px] lg:items-center lg:py-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(227,6,19,0.1),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_38%)]" />
        <div className="absolute left-1/2 top-8 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#e30613]/7 blur-3xl" />
        <div className="container-shell relative grid w-full gap-4 lg:grid-cols-[52fr_48fr] lg:items-center">
          <div className="max-w-[600px]">
            <h1 className="max-w-3xl text-[clamp(2.45rem,4.4vw,4.55rem)] font-black uppercase leading-[0.88] text-white">
              WHEN <span className="text-[#e30613]">TIME</span>
              <br />
              CANNOT WAIT.
            </h1>
            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-zinc-300 md:text-base">
              Same-Day Air Cargo, Next Flight Out coordination, Airport Baggage Support, Excess Luggage Shipping and Premium Time-Critical Logistics Across India.
            </p>
            <div className="mt-3 max-w-xl rounded-lg border border-white/10 bg-white/[0.045] p-3.5 shadow-[0_0_22px_rgba(227,6,19,0.07)]">
              <p className="mb-1.5 text-sm font-semibold text-white">Urgent Shipment Support</p>
              <p className="text-[13px] leading-5 text-zinc-200">
                PORTADOR SOS helps businesses and travelers move urgent cargo when normal courier timelines are not enough.
              </p>
              <p className="mt-2 text-[13px] leading-5 text-zinc-300">
                We support same-day, next-flight-out, airport cargo, excess baggage, DG cargo, battery cargo, and high-priority shipments with proper documentation and operational review.
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[10.5px] font-semibold text-zinc-200 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <span key={signal} className="flex min-h-9 items-center rounded-md border border-white/10 bg-black/35 px-2.5 py-1.5 leading-4 shadow-[0_0_16px_rgba(227,6,19,0.05)]">
                  {signal}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href={whatsappHref}>Get Urgent Quote</PrimaryButton>
              <SecondaryButton href={whatsappHref}>WhatsApp Operations</SecondaryButton>
            </div>
          </div>

          <AviationHeroVisual />
        </div>
      </section>

      <Section eyebrow="Track shipment" title="Track Your PORTADOR Shipment">
        <TrackingForm />
      </Section>

      <Section eyebrow="Customer guidance" title="Answers Before You Ship Urgent Cargo">
        <div className="grid gap-5 md:grid-cols-2">
          {aiQuickAnswers.map((item) => (
            <div key={item.question} className="ai-snippet rounded-md">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-100">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <QuickSelector />

      <EmergencyCallback />

      <Section eyebrow="Primary services" title="Our Premium Air Cargo Services">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {topServiceCards.map((service) => (
            <Link key={service.href} href={service.href} className="glass-panel group rounded-lg p-6 transition hover:-translate-y-1 hover:border-[#e30613]/45 hover:shadow-[0_0_34px_rgba(227,6,19,0.18)]">
              <service.icon className="mb-5 text-[#e30613]" size={26} />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{service.copy}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e30613]">
                View service <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Cargo categories" title="Urgent Cargo Categories We Support">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cargoCategoryCards.map(({ label, href, bullets, Icon }) => (
            <Link key={label} href={href} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-1 hover:border-[#e30613]/40">
              <Icon className="mb-3 text-[#e30613]" size={18} />
              <h3 className="text-sm font-bold text-white">{label}</h3>
              <ul className="mt-3 grid gap-1 text-xs leading-5 text-zinc-400">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#e30613]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industry use cases" title="Industries We Support">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#e30613]/40">
              <ShieldCheck className="mb-4 text-[#e30613]" size={22} />
              <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{industry.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Air cargo coverage" title="Airport Cargo Solutions">
        <h3 className="-mt-5 text-xl font-semibold text-white">Urgent cargo support across major airport-connected markets.</h3>
        <p className="mt-3 mb-8 max-w-3xl text-base leading-7 text-zinc-300">
          PORTADOR SOS supports urgent cargo movement across 50+ airport cargo connections and 5000+ serviceable pin codes across India.
        </p>
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <AirportNetworkPanel />
          <div className="grid gap-4 sm:grid-cols-2">
            {citySupportCards.map((airport) => (
              <Link key={airport.href} href={airport.href} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#e30613]/40">
                <MapPin className="mb-3 text-[#e30613]" size={20} />
                <h3 className="font-semibold text-white">{airport.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{airport.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Trust signals" title="Why Businesses Trust PORTADOR SOS">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustReasons.map((reason) => (
            <div key={reason} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <ShieldCheck className="mb-3 text-[#e30613]" size={20} />
              <p className="text-sm font-semibold leading-6 text-zinc-100">{reason}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Comparison snippet" title="Emergency Air Cargo vs Conventional Courier Networks">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="ai-snippet rounded-md">
            <h3 className="text-xl font-semibold text-white">Air Cargo vs Routine Courier</h3>
            <p className="mt-4 text-base leading-8 text-zinc-100">
              Regular courier is useful for routine parcels. PORTADOR SOS-style urgent air logistics is better when delay can cause downtime, missed flights, production loss, tender rejection, or emergency replacement failure.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-white/[0.04] text-xs font-bold uppercase tracking-[0.14em] text-zinc-300">
              <p className="p-3">Factor</p>
              <p className="border-l border-white/10 p-3">PORTADOR SOS</p>
              <p className="border-l border-white/10 p-3">Conventional courier</p>
            </div>
            {comparisonRows.map(([need, portador, courier]) => (
              <div key={need} className="grid grid-cols-[1fr_1fr_1fr] border-t border-white/10 text-sm leading-6 text-zinc-300">
                <p className="p-3 font-semibold text-white">{need}</p>
                <p className="border-l border-white/10 p-3">{portador}</p>
                <p className="border-l border-white/10 p-3">{courier}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Knowledge Hub" title="Emergency Logistics Knowledge Hub">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {emergencyKnowledgeCards.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#e30613]/40">
              <Route className="mb-4 text-[#e30613]" size={20} />
              <h3 className="text-lg font-semibold leading-6 text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.copy}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Process items={["Same-Day Availability Check", "Next Flight Out Coordination", "Airport Cargo Support", "Human Operations Desk", "Regulated Cargo Review", "24x7 Escalation"]} />

      <Section eyebrow="Before you book" title="Details PORTADOR Needs Before Urgent Cargo Confirmation">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bookingChecklist.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <p className="text-sm font-semibold leading-6 text-zinc-100">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Shipment protection" title="Shipment Protection & Liability">
        <div className="overflow-hidden rounded-lg border border-white/10">
          {protectionRows.map(([option, value]) => (
            <div key={option} className="grid gap-0 border-b border-white/10 text-sm last:border-b-0 sm:grid-cols-[0.8fr_1fr]">
              <p className="bg-white/[0.035] p-4 font-semibold text-white">{option}</p>
              <p className="p-4 leading-6 text-zinc-300">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {protectionNotes.map(([term, note]) => (
            <details key={term} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <summary className="cursor-pointer text-sm font-semibold text-white">{term}</summary>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{note}</p>
            </details>
          ))}
        </div>
        <div className="ai-snippet mt-5 rounded-md">
          <h3 className="text-lg font-semibold text-white">Delay and TAT recalculation</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-100">
            If a flight is cancelled, delayed, rerouted, offloaded, or affected by airline, airport, weather, security, or operational reasons, the TAT will be recalculated accordingly and delay claims will not be entertained.
          </p>
        </div>
      </Section>

      <Section eyebrow="Customer trust" title="Customer Trust Signals">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="ai-snippet rounded-md">
            <h3 className="text-xl font-semibold text-white">See verified customer feedback and PORTADOR's business presence on Google.</h3>
            <p className="mt-4 text-base leading-8 text-zinc-100">
              PORTADOR does not show fabricated ratings or review text. Customers can open the live Google Business profile to review public business information and verified customer feedback.
            </p>
            <a href={site.googleBusinessProfileUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[#e30613] px-5 text-sm font-bold text-white">
              View PORTADOR on Google
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Verified reviews only", "Urgent shipment feedback", "Business and traveler trust"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 text-center">
                <p className="text-sm font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Common questions" title="Answers Before You Ship Urgent Cargo">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["Can PORTADOR SOS support urgent airport cargo?", "Yes. PORTADOR SOS supports urgent airport cargo with human operations coordination, regulated cargo review where needed, and real-time monitoring for time-critical shipments."],
            ["What affects same-day air cargo availability?", "Same-day air cargo depends on cargo readiness, serviceability, available air movement, acceptance rules, documentation, and regulatory compliance verification where relevant."],
            ["Can PORTADOR SOS support regulated cargo?", "PORTADOR SOS can check dangerous goods, lithium batteries, and regulated cargo, but final movement depends on airline rules, approval, documentation, packing, and compliance review."]
          ].map(([question, answer]) => (
            <div key={question} className="ai-snippet rounded-md">
              <h3 className="text-lg font-semibold leading-7 text-white">{question}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-100">{answer}</p>
            </div>
          ))}
        </div>
      </Section>
      <FAQBlock faqs={normalizedHomeFaqs} />
      <CTA title="When Time Cannot Wait, call the operations desk." text="Send origin, destination, deadline, cargo category, weight, dimensions, and any battery or dangerous goods declaration. PORTADOR SOS will check the fastest feasible air-linked movement." />
    </main>
  );
}

function AirportNetworkPanel() {
  const cities = ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Kolkata"];

  return (
    <div className="glass-panel relative min-h-[360px] overflow-hidden rounded-xl p-6">
      <div className="airport-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(227,6,19,0.14),transparent_48%)]" />
      <div className="relative grid min-h-[250px] gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="grid gap-3">
          {cities.slice(0, 4).map((city) => (
            <div key={city} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/35 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e30613] shadow-[0_0_16px_rgba(227,6,19,0.7)]" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-200">{city}</span>
            </div>
          ))}
        </div>
        <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#e30613]/25 bg-black/45 shadow-[0_0_38px_rgba(227,6,19,0.16)]">
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <Plane className="relative rotate-45 text-[#e30613]" size={38} />
        </div>
        <div className="grid gap-3">
          {cities.slice(4).map((city) => (
            <div key={city} className="flex items-center gap-3 rounded-md border border-white/10 bg-black/35 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e30613] shadow-[0_0_16px_rgba(227,6,19,0.7)]" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-200">{city}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-5">
        <h3 className="max-w-sm text-2xl font-semibold text-white">50+ airport cargo connections</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">Major business cities and interior delivery locations are supported where cargo type, documents, timing, and serviceability allow.</p>
      </div>
    </div>
  );
}
