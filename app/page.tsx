import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Factory,
  Flame,
  Globe2,
  Luggage,
  MapPin,
  PackageCheck,
  Plane,
  Route,
  ShieldCheck,
  Siren,
  Weight
} from "lucide-react";
import { AviationHeroVisual } from "@/components/aviation-hero-visual";
import { FAQBlock } from "@/components/page-template";
import { TrackingForm } from "@/components/tracking-form";
import { CTA, EmergencyCallback, PrimaryButton, QuickSelector, SecondaryButton, Section } from "@/components/ui";
import { founderHomepageFaqs } from "@/lib/faq-authority";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { hubArticles, industries, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://portador.in"
  }
};

const serviceFamilies = [
  {
    number: "01",
    title: "PORTADOR SOS",
    label: "Same-Day + NFO",
    href: "/services/portador-sos",
    description: "Emergency and time-critical domestic air cargo, including Same-Day and Next Flight Out feasibility when every hour matters.",
    Icon: Siren
  },
  {
    number: "02",
    title: "PORTADOR EXPRESS",
    label: "Planned air-priority",
    href: "/services/portador-express",
    description: "Next Business Day and Second Business Day premium air-priority cargo for important, planned B2B movements.",
    Icon: Clock3
  },
  {
    number: "03",
    title: "PORTADOR BLACK",
    label: "Controlled custody",
    href: "/services/portador-black",
    description: "OBC, hand carry, runner, and executive logistics for eligible high-value, confidential, or controlled-custody requirements.",
    Icon: BriefcaseBusiness
  },
  {
    number: "04",
    title: "PORTADOR GLOBAL",
    label: "International priority",
    href: "/services/portador-global",
    description: "Urgent international import and export air cargo subject to documentation, acceptance, customs, and serviceability.",
    Icon: Globe2
  }
];

const serviceJourney = [
  ["01", "Share the essentials", "Cargo, locations, weight, dimensions, and deadline."],
  ["02", "Confirm the service", "PORTADOR checks acceptance and service availability."],
  ["03", "Move the shipment", "Pickup and movement follow the agreed booking."],
  ["04", "Receive updates", "Shipment updates continue through destination delivery."]
];

const priorityCargo = [
  {
    title: "Machine parts and breakdown recovery",
    href: "/cargo/machine-breakdown",
    detail: "Replacement parts and production-critical equipment when downtime has a real business cost.",
    Icon: Factory
  },
  {
    title: "IT hardware and laptop shipping",
    href: "/cargo/laptop-shipping",
    detail: "Business devices, servers, deployment hardware, and urgent employee equipment.",
    Icon: PackageCheck
  },
  {
    title: "Aircraft spares and AOG cargo",
    href: "/cargo/aog-cargo",
    detail: "Aviation parts, tools, documents, and maintenance-critical items for grounded operations.",
    Icon: Plane
  },
  {
    title: "Medical equipment",
    href: "/cargo/medical-equipment",
    detail: "Time-sensitive devices, instruments, diagnostics equipment, and replacement components.",
    Icon: ShieldCheck
  },
  {
    title: "Excess baggage and personal effects",
    href: "/cargo/excess-baggage",
    detail: "Extra luggage, student baggage, relocation bags, and airport-linked personal cargo.",
    Icon: Luggage
  },
  {
    title: "DG, lithium battery, and restricted cargo",
    href: "/cargo/dangerous-goods",
    detail: "Regulated cargo considered only after documentation, packing, and acceptance review.",
    Icon: Flame
  }
];

const customerFit = [
  ["A deadline has commercial consequences", "Production downtime, a missed event, an AOG situation, or a customer escalation makes timing material."],
  ["The shipment is cargo, not just a parcel", "PORTADOR is suited to business-critical, multi-box, heavier, high-value, baggage, or specialized requirements."],
  ["The shipment needs accountable assistance", "Customers can speak with PORTADOR about acceptance, shipment readiness, and the next action."],
  ["Acceptance needs to be checked before promises", "Cargo type, documents, packing, serviceability, and applicable restrictions are reviewed before confirmation."]
];

const trustReasons = [
  "Official website of PORTADOR Logistics Pvt. Ltd.",
  "Published New Delhi business address and official contact channels",
  "24x7 assistance for time-critical shipment enquiries",
  "50+ airport cargo connections and 5000+ serviceable pin codes",
  "DG and battery cargo support subject to compliance and acceptance review",
  "Live Google Business profile for public business information and customer feedback"
];

const comparisonRows = [
  ["Urgent readiness", "Feasibility-led support for critical deadlines", "Scheduled processing designed for routine parcel flow"],
  ["Customer support", "Dedicated assistance with shipment context", "Standard ticket, IVR, or scan-based support"],
  ["Cargo profile", "Business-critical, heavier, baggage, and specialized cargo", "Primarily routine parcels and standardized shipments"],
  ["Regulated cargo", "Documentation and acceptance review where applicable", "Often restricted by standard parcel rules"],
  ["Best fit", "Downtime, urgent replacement, baggage, events, and hard deadlines", "Predictable shipments without critical urgency"]
];

const bookingChecklist = [
  "Origin and pickup location",
  "Destination and receiver details",
  "Cargo weight and dimensions",
  "Invoice value and cargo description",
  "Required delivery deadline",
  "Battery, DG, liquid, medical, or regulated cargo declaration if applicable"
];

const emergencyKnowledgeCards = hubArticles.slice(0, 4).map((item) => ({
  title: item.title,
  href: `/knowledge-hub/${item.slug}`,
  copy: item.aiSnippet ?? item.description
}));

const citySupportCards = [
  ["Delhi NCR", "/airports/delhi-igi-airport", "Industrial, aviation, legal, technology, and airport baggage requirements across the National Capital Region."],
  ["Mumbai", "/airports/mumbai-csmia", "High-value business cargo, event material, airport baggage, and western India commercial requirements."],
  ["Bengaluru", "/airports/bangalore-kempegowda", "Technology hardware, electronics, startup cargo, medical equipment, and urgent business shipments."],
  ["Chennai", "/airports/chennai-airport", "Automotive, manufacturing, electronics, healthcare, and priority intercity cargo requirements."],
  ["Hyderabad", "/airports/hyderabad-rgia", "Technology, healthcare, business documents, and airport-connected priority cargo."],
  ["Pune", "/airports/pune-airport", "Automotive, manufacturing, student baggage, and business-critical cargo from Pune."],
  ["Ahmedabad", "/airports/ahmedabad-airport", "Manufacturing, engineering, textile, medical, and business cargo across Gujarat markets."],
  ["Kolkata", "/airports/kolkata-airport", "Urgent documents, baggage, event cargo, healthcare, and eastern India business shipments."]
];

const normalizedHomeFaqs = founderHomepageFaqs;

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(normalizedHomeFaqs),
            serviceSchema(
              {
                title: "PORTADOR Time-Critical Air Logistics",
                description: "Urgent cargo support across India and international priority movements for business-critical, heavy, baggage, and specialized shipments where delivery time matters.",
                slug: ""
              },
              ""
            )
          ])
        }}
      />

      <section className="relative overflow-hidden border-b border-white/[0.06] py-8 sm:py-10 lg:flex lg:h-[calc(100svh-96px)] lg:min-h-[620px] lg:max-h-[760px] lg:items-center lg:py-6">
        <div className="absolute inset-0 airport-grid opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,6,0.98)_0%,rgba(5,5,6,0.9)_48%,rgba(5,5,6,0.62)_100%)]" />
        <div className="container-shell relative grid w-full gap-7 lg:grid-cols-[52fr_48fr] lg:items-center">
          <div className="max-w-[650px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e30613]">PORTADOR · Time-Critical Air Logistics</p>
            <h1 className="mt-3 text-[clamp(2.5rem,4.2vw,4.45rem)] font-semibold leading-[1.02] text-white">
              Urgent cargo for shipments that <span className="text-[#e30613]">cannot wait.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              PORTADOR helps businesses and travelers move urgent, heavy, high-value, baggage, and specialized cargo across India and internationally.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href={whatsappHref}>Get Urgent Cargo Assistance</PrimaryButton>
              <SecondaryButton href={site.trackingUrl}>Track Shipment</SecondaryButton>
            </div>
            <p className="mt-3 text-xs font-semibold leading-5 text-zinc-500">Route, cargo acceptance, and feasibility are confirmed before booking.</p>
          </div>

          <AviationHeroVisual />
        </div>
      </section>

      <Section eyebrow="Choose by urgency" title="Four PORTADOR services. One clear decision.">
        <p className="-mt-5 mb-8 max-w-3xl text-base leading-7 text-zinc-300">Choose the service by deadline, custody requirement, and whether the shipment is domestic or international.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {serviceFamilies.map(({ number, title, label, href, description, Icon }) => (
            <Link key={`${number}-${title}`} href={href} className="group flex min-h-56 flex-col rounded-lg border border-white/10 bg-white/[0.025] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#e30613]/45 hover:bg-[#e30613]/[0.055] md:p-6">
              <span className="flex items-start justify-between gap-4">
                <span className="text-xs font-bold text-[#e30613]">{number}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[#e30613]/25 bg-[#e30613]/10 text-[#e30613]">
                  <Icon size={18} aria-hidden="true" />
                </span>
              </span>
              <span className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-xl font-semibold text-white">{title}</span>
                <span className="rounded-sm border border-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400">{label}</span>
              </span>
              <span className="mt-3 block flex-1 text-sm leading-6 text-zinc-400">{description}</span>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#e30613]">Explore {title} <ArrowRight size={14} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <CustomerFitSection />

      <section id="heavy-air-cargo" data-analytics-service="heavy_air_cargo" className="border-y border-white/[0.06] bg-[#090a0c] py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e30613]">Heavy Air Cargo</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">Heavy Air Cargo — 50 kg+ Shipments</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              Designed for industrial spares, business equipment, multi-box cargo and critical replacement parts.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
              Share the actual weight, dimensions, commodity and delivery deadline, and our team will assess the most suitable air-cargo solution.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href={whatsappHref}>Check heavy cargo feasibility</PrimaryButton>
              <SecondaryButton href="/cargo/machine-parts">Explore industrial cargo</SecondaryButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/45 p-5 md:p-7">
            <div className="absolute inset-0 airport-grid opacity-25" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Heavy shipment requirements</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Built for Heavy, Urgent &amp; Business-Critical Cargo</h3>
                </div>
                <Weight className="text-[#e30613]" size={30} aria-hidden="true" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["Industrial spares", "Multi-box cargo", "Business equipment", "Critical replacement parts"].map((item) => (
                  <div key={item} className="flex min-h-20 items-center gap-3 rounded-md border border-white/10 bg-white/[0.025] px-4">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#e30613]" />
                    <span className="text-sm font-semibold text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-md border border-[#e30613]/25 bg-[#e30613]/[0.07] px-4 py-3">
                <Boxes className="shrink-0 text-[#e30613]" size={20} aria-hidden="true" />
                <p className="text-xs leading-5 text-zinc-300">Share actual weight, dimensions, commodity, packing, deadline, and domestic or international requirement for a responsible service match.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickSelector />

      <Section eyebrow="Track shipment" title="Track Your PORTADOR Shipment">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <h3 className="text-xl font-semibold text-white">Enter Your AWB / Tracking Number</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Enter your AWB below to view the latest shipment status on PORTADOR OPS.
            </p>
          </div>
          <TrackingForm />
        </div>
      </Section>

      <Section eyebrow="Priority cargo" title="Cargo categories where time and handling matter">
        <div className="grid border-t border-white/10 md:grid-cols-2">
          {priorityCargo.map(({ title, href, detail, Icon }, index) => (
            <Link key={title} href={href} className={`group flex min-h-40 gap-4 border-b border-white/10 py-6 transition hover:bg-white/[0.02] md:px-6 ${index % 2 === 0 ? "md:border-r" : ""}`}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 text-[#e30613] group-hover:border-[#e30613]/45">
                <Icon size={19} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{detail}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#e30613]">
                  View cargo guidance <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Coverage" title="Airport-connected support across major Indian markets">
        <p className="-mt-5 mb-8 max-w-3xl text-base leading-7 text-zinc-300">
          PORTADOR supports urgent cargo requirements across major airport-connected cities, subject to cargo type, documentation, route feasibility, and operational availability.
        </p>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <AirportNetworkPanel />
          <div className="grid content-start sm:grid-cols-2">
            {citySupportCards.map(([title, href, copy], index) => (
              <Link key={href} href={href} className={`group border-b border-white/10 py-4 sm:px-4 ${index % 2 === 0 ? "sm:border-r" : ""}`}>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#e30613]" aria-hidden="true" />
                  <h3 className="font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-500">{copy}</p>
              </Link>
            ))}
            <Link href="/airports" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-bold text-white transition hover:border-[#e30613]/50 sm:col-span-2">
              View all airport locations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Industries" title="Urgency looks different in every operation">
        <div className="grid gap-x-10 border-t border-white/10 md:grid-cols-2">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group grid grid-cols-[auto_1fr_auto] gap-4 border-b border-white/10 py-5">
              <ShieldCheck className="mt-1 text-[#e30613]" size={18} aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-white">{industry.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">{industry.description}</p>
              </div>
              <ArrowRight className="mt-1 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-[#e30613]" size={17} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>

      <section className="border-y border-white/[0.06] bg-[#090a0c] py-16 md:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e30613]">Trust and verification</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">Clear identity. Responsible commitments.</h2>
              <p className="mt-5 text-base leading-8 text-zinc-300">
                PORTADOR publishes official contact channels, explains acceptance conditions, and avoids fabricated review scores or unsupported credentials.
              </p>
              <a href={site.googleBusinessProfileUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-bold text-white transition hover:border-[#e30613]/50">
                View official Google profile <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {trustReasons.map((reason) => (
                <div key={reason} className="flex min-h-24 gap-3 rounded-md border border-white/10 bg-white/[0.025] p-4">
                  <BadgeCheck className="mt-0.5 shrink-0 text-[#e30613]" size={19} aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-zinc-200">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="What happens next" title="A clear path from enquiry to delivery">
        <div className="grid gap-px border-y border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {serviceJourney.map(([number, title, copy]) => (
            <div key={number} className="min-w-0 bg-[#050506] px-5 py-5 lg:min-h-36">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e30613]">Step {number}</p>
              <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Customer guidance" title="Direct answers before you ship">
        <div className="grid gap-5 md:grid-cols-2">
          {normalizedHomeFaqs.slice(0, 4).map((item) => (
            <div key={item.question} className="ai-snippet rounded-md">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-100">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Comparison" title="Time-critical logistics and routine courier solve different problems">
        <div className="grid gap-6 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="border-l-2 border-[#e30613] pl-5">
            <h3 className="text-xl font-semibold text-white">Use urgency only when the consequence justifies it.</h3>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              Routine courier remains suitable for predictable parcels. PORTADOR is for cargo where delay can cause downtime, missed travel, event disruption, replacement failure, or commercial escalation.
            </p>
            <Link href="/comparisons/air-cargo-vs-courier" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e30613]">
              Read air cargo vs courier <ArrowRight size={16} />
            </Link>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <div className="min-w-[680px]">
              <div className="grid grid-cols-[0.78fr_1.1fr_1.1fr] bg-white/[0.04] text-xs font-bold uppercase tracking-[0.12em] text-zinc-300">
                <p className="p-3">Factor</p>
                <p className="border-l border-white/10 p-3">PORTADOR</p>
                <p className="border-l border-white/10 p-3">Routine courier</p>
              </div>
              {comparisonRows.map(([need, portador, courier]) => (
                <div key={need} className="grid grid-cols-[0.78fr_1.1fr_1.1fr] border-t border-white/10 text-sm leading-6 text-zinc-300">
                  <p className="p-3 font-semibold text-white">{need}</p>
                  <p className="border-l border-white/10 p-3">{portador}</p>
                  <p className="border-l border-white/10 p-3">{courier}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FAQBlock faqs={normalizedHomeFaqs.slice(4)} />

      <Section eyebrow="Knowledge hub" title="Understand the service before the deadline arrives">
        <div className="grid gap-4 md:grid-cols-2">
          {emergencyKnowledgeCards.map((item, index) => (
            <Link key={item.href} href={item.href} className="group grid min-h-48 grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-5 transition hover:border-[#e30613]/40 md:p-6">
              <span className="text-xs font-bold text-[#e30613]">0{index + 1}</span>
              <div>
                <Route className="mb-4 text-[#e30613]" size={20} aria-hidden="true" />
                <h3 className="text-lg font-semibold leading-6 text-white">{item.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{item.copy}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#e30613]">
                  Read guide <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <EmergencyCallback />

      <Section eyebrow="Before you book" title="Details PORTADOR needs before urgent cargo confirmation">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bookingChecklist.map((item) => (
            <div key={item} className="flex min-h-20 items-center gap-3 rounded-md border border-white/10 bg-white/[0.025] p-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#e30613]" />
              <p className="text-sm font-semibold leading-6 text-zinc-100">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="When time cannot wait, speak to PORTADOR."
        text="Share origin, destination, deadline, cargo type, weight, dimensions, and any battery or dangerous goods details. PORTADOR will check the most appropriate feasible service."
      />
    </main>
  );
}

function CustomerFitSection() {
  return (
    <Section eyebrow="When to use PORTADOR" title="Built for consequences, not commodity volume">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-[#e30613]/25 bg-[#e30613]/[0.06] p-6 md:p-8">
          <Building2 className="text-[#e30613]" size={28} aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-semibold text-white">When PORTADOR is the right conversation</h3>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            Use PORTADOR when a missed deadline has a business or travel consequence, or when the cargo needs acceptance, documentation, or special-handling review.
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            Routine low-cost parcel movement is not the center of the service. Smaller legitimate urgent shipments remain welcome, while larger commercial requirements receive cargo-specific review.
          </p>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {customerFit.map(([title, copy], index) => (
            <div key={title} className="grid gap-2 py-5 sm:grid-cols-[38px_1fr] sm:gap-4">
              <span className="text-xs font-bold text-[#e30613]">0{index + 1}</span>
              <div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function AirportNetworkPanel() {
  const cities = ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Kolkata"];

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-[#090a0c] p-5 md:p-6">
      <div className="airport-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e30613] to-transparent" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e30613]">Airport coverage</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Major airport-connected markets</h3>
        </div>
        <Plane className="rotate-45 text-[#e30613]" size={28} aria-hidden="true" />
      </div>
      <div className="relative mt-5 grid grid-cols-2 gap-3">
        {cities.map((city, index) => (
          <div key={city} className="flex min-h-12 items-center justify-between rounded-md border border-white/10 bg-black/50 px-3">
            <span className="text-xs font-bold text-zinc-200">{city}</span>
            <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e30613] shadow-[0_0_10px_rgba(227,6,19,0.7)]" />
              0{index + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-5 border-l-2 border-[#e30613] pl-4">
        <p className="text-2xl font-semibold text-white">50+ airport cargo connections</p>
        <p className="mt-2 text-sm leading-6 text-zinc-400">Airport and city support is confirmed against the actual shipment requirement and operational availability.</p>
      </div>
    </div>
  );
}
