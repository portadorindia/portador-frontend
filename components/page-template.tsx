import { CheckCircle2, ChevronRight, Plane } from "lucide-react";
import Link from "next/link";
import { FAQEngine } from "@/components/faq-engine";
import { CTA, MotionCard, PrimaryButton, QuickSelector, SecondaryButton, Section } from "@/components/ui";
import { airportCityCoverage, airports, cargoPages, cities, comparisonPages, hubArticles, industries, lanes, PageModel, serviceIconMap, services, site, useCasePages, whatsappHref } from "@/lib/site";
import { breadcrumbSchema, faqSchema, itemListSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { normalizeFaqs } from "@/lib/faq";

export function PageTemplate({ page, basePath }: { page: PageModel; basePath: string }) {
  const Icon = serviceIconMap[page.icon ?? "default"];
  const pageUrl = `${site.url}${basePath}/${page.slug}`;
  const normalizedFaqs = normalizeFaqs(page.faqs);
  const schemas = [
    breadcrumbSchema([{ name: "Home", href: "/" }, { name: page.title, href: `${basePath}/${page.slug}` }]),
    faqSchema(normalizedFaqs),
    serviceSchema(page, basePath),
    webPageSchema(page, basePath),
    itemListSchema({
      name: `${page.title} use cases and customer searches`,
      url: pageUrl,
      items: [...page.useCases, ...page.benefits].slice(0, 12)
    })
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <main>
        <section className="relative overflow-hidden py-12 md:py-16">
          <div className="airport-grid absolute inset-0 opacity-70" />
          <div className="container-shell relative">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:items-center">
              <div className="max-w-[820px]">
                <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#e30613]/30 bg-[#e30613]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a54]">
                  <Icon size={15} />
                  {page.eyebrow}
                </div>
                <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">{page.h1}</h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">{page.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryButton href={site.phoneHref}>Call PORTADOR SOS</PrimaryButton>
                  <SecondaryButton href={whatsappHref}>WhatsApp Shipment Details</SecondaryButton>
                </div>
              </div>
              <div className="glass-panel rounded-xl p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Trust signals</p>
                <div className="mt-5 grid gap-3">
                  {["50+ Airport Cargo Connections", "5000+ Serviceable Pin Codes", "Same-Day / NFO Feasibility", "Human Operations Coordination", "24x7 Operations Desk"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold leading-6 text-zinc-200">
                      <CheckCircle2 className="text-[#e30613]" size={18} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Definition" title={`What is ${page.title}?`}>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xl leading-9 text-zinc-200">{page.whatIs}</p>
              <div className="ai-snippet mt-6 rounded-md">
                <h3 className="mb-2 text-lg font-semibold text-white">Direct shipment summary</h3>
                <p className="text-base leading-7 text-zinc-100">{page.aiSnippet ?? page.whatIs}</p>
              </div>
            </div>
            <div className="glass-panel rounded-lg p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Best fit for urgent shipments</h3>
              <ul className="grid gap-3 text-sm leading-6 text-zinc-300">
                {page.keywords.map((keyword) => (
                  <li key={keyword} className="flex gap-3">
                    <ChevronRight className="mt-1 shrink-0 text-[#e30613]" size={16} />
                    PORTADOR SOS supports {keyword} with customer-focused, deadline-first air cargo support.
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <WhenTimeCannotWaitStory />
        <TrustSignals />
        <AirportConnectedCoverage slug={page.slug} />
        <BulletGrid eyebrow="Benefits" title="Why businesses use PORTADOR SOS" items={page.benefits} />
        <Process items={["Same-Day Feasibility", "Next Flight Out Coordination", "Airport Cargo Support", "Human Operations Desk", "Regulated Cargo Review", "24x7 Escalation"]} />
        <BulletGrid eyebrow="Use cases" title="Industry use cases" items={page.useCases} />
        <BulletGrid eyebrow="Courier comparison" title="Why this is different from regular courier" items={page.whyNotCourier} />
        <QuickSelector />
        <DirectAnswerStack page={page} />
        <RelatedCommercialLinks page={page} basePath={basePath} />
        <RelatedLocationLinks page={page} basePath={basePath} />
        <OperationalNextLinks />
        <FAQBlock faqs={normalizedFaqs} />
        <CTA title={page.cta} />
      </main>
    </>
  );
}

function getRelatedCommercialLinks(page: PageModel, basePath: string) {
  const currentHref = `${basePath}/${page.slug}`;
  const pools = [
    ...services.map((item) => ({ title: item.title, description: item.description, href: `/services/${item.slug}`, group: "Service" })),
    ...cargoPages.map((item) => ({ title: item.title, description: item.description, href: `/cargo/${item.slug}`, group: "Cargo" })),
    ...industries.map((item) => ({ title: item.title, description: item.description, href: `/industries/${item.slug}`, group: "Industry" })),
    ...comparisonPages.map((item) => ({ title: item.title, description: item.description, href: `/comparisons/${item.slug}`, group: "Comparison" })),
    ...hubArticles.map((item) => ({ title: item.title, description: item.description, href: `/knowledge-hub/${item.slug}`, group: "Knowledge" })),
    ...useCasePages.map((item) => ({ title: item.title, description: item.description, href: `/use-cases/${item.slug}`, group: "Use case" }))
  ].filter((item) => item.href !== currentHref);

  const focusText = [page.title, page.h1, page.description, page.keywords.join(" ")].join(" ").toLowerCase();
  const priority = [
    "/services/portador-sos",
    "/services/portador-express",
    "/cargo/aog-cargo",
    "/cargo/machine-breakdown",
    "/cargo/excess-baggage",
    "/cargo/passport-delivery",
    "/cargo/dangerous-goods",
    "/cargo/lithium-battery-cargo",
    "/airports/delhi-igi-airport",
    "/airports/mumbai-csmia",
    "/knowledge-hub/what-is-next-flight-out-cargo",
    "/knowledge-hub/air-cargo-vs-courier",
    "/comparisons/air-cargo-vs-courier"
  ];

  return pools
    .map((item) => {
      const words = item.title.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3);
      const relevance = words.reduce((score, word) => score + (focusText.includes(word) ? 2 : 0), 0);
      const priorityScore = priority.includes(item.href) ? 3 : 0;
      const sameFamilyScore = item.href.startsWith(basePath) ? 1 : 0;
      return { ...item, score: relevance + priorityScore + sameFamilyScore };
    })
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 8);
}

export function RelatedCommercialLinks({ page, basePath }: { page: PageModel; basePath: string }) {
  const links = getRelatedCommercialLinks(page, basePath);

  return (
    <Section eyebrow="Related services" title="Related PORTADOR SOS resources">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#e30613]/40">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e30613]">{link.group}</p>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">{link.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{link.description}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function getRelatedLocationLinks(page: PageModel, basePath: string) {
  const currentHref = `${basePath}/${page.slug}`;
  const focusText = [page.title, page.h1, page.description, page.keywords.join(" ")].join(" ").toLowerCase();
  const pools = [
    ...airports.map((item) => ({ title: item.title, description: item.description, href: `/airports/${item.slug}`, group: "Airport" })),
    ...cities.map((item) => ({ title: item.title, description: item.description, href: `/cities/${item.slug}`, group: "City" })),
    ...lanes.map((item) => ({ title: item.title, description: item.description, href: `/routes/${item.slug}`, group: "Route" }))
  ].filter((item) => item.href !== currentHref);

  const priority = [
    "/airports/delhi-igi-airport",
    "/airports/mumbai-csmia",
    "/airports/bangalore-kempegowda",
    "/airports/hyderabad-rgia",
    "/airports/chennai-airport",
    "/cities/delhi",
    "/cities/gurugram",
    "/cities/mumbai",
    "/routes/delhi-to-mumbai",
    "/routes/mumbai-to-bangalore-urgent-delivery"
  ];

  return pools
    .map((item) => {
      const words = item.title.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3);
      const relevance = words.reduce((score, word) => score + (focusText.includes(word) ? 2 : 0), 0);
      return { ...item, score: relevance + (priority.includes(item.href) ? 3 : 0) + (item.href.startsWith(basePath) ? 1 : 0) };
    })
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 8);
}

export function RelatedLocationLinks({ page, basePath }: { page: PageModel; basePath: string }) {
  const links = getRelatedLocationLinks(page, basePath);

  return (
    <Section eyebrow="Related locations" title="Airport, city, and route pages">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#e30613]/40">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e30613]">{link.group}</p>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">{link.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{link.description}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function OperationalNextLinks() {
  const links = [
    { title: "Track Shipment", description: "Open PORTADOR-OPS tracking for AWB and shipment status.", href: site.trackingUrl, group: "Tracking" },
    { title: "Contact Operations", description: "Call or submit a callback request for urgent cargo support.", href: "/contact", group: "Contact" },
    { title: "WhatsApp Operations", description: "Send pickup, delivery, weight, and deadline details to PORTADOR.", href: whatsappHref, group: "WhatsApp" },
    { title: "PORTADOR GLOBAL", description: "Check urgent international import or export air cargo support.", href: "/services/portador-global", group: "Global shipping" }
  ];

  return (
    <Section eyebrow="Next action" title="Get shipment support faster">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-lg border border-[#e30613]/25 bg-[#e30613]/10 p-5 transition hover:-translate-y-1 hover:border-[#e30613]/50">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff4a54]">{link.group}</p>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">{link.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{link.description}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function DirectAnswerStack({ page }: { page: PageModel }) {
  const answers = [
    {
      question: `Can PORTADOR SOS handle ${page.title.toLowerCase()} urgently?`,
      answer: `Yes. PORTADOR SOS checks ${page.title.toLowerCase()} through deadline-first support, premium air cargo options, and a human operations desk.`
    },
    {
      question: `What makes ${page.title.toLowerCase()} different from routine courier?`,
      answer: "The service is built around operational urgency, cargo eligibility, and business risk instead of routine parcel sorting and network scale."
    },
    {
      question: `Who should use ${page.title.toLowerCase()}?`,
      answer: "Use it when a delayed shipment can cause production loss, business downtime, missed flights, legal risk, event disruption, or emergency replacement failure."
    }
  ];

  return (
    <Section eyebrow="Shipment answers" title="Answers Before You Ship Urgent Cargo">
      <div className="grid gap-4 lg:grid-cols-3">
        {answers.map((item) => (
          <div key={item.question} className="ai-snippet rounded-md">
            <h3 className="text-lg font-semibold leading-7 text-white">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-100">{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function AirportConnectedCoverage({ slug }: { slug: string }) {
  const matches = airportCityCoverage.filter((item) => item.citySlug === slug || item.airportSlug === slug);
  if (matches.length === 0) return null;

  return (
      <Section eyebrow="Airport-connected coverage" title="Local urgent cargo support">
      <div className="grid gap-4 md:grid-cols-2">
        {matches.map((item) => (
          <div key={item.citySlug} className="glass-panel rounded-lg p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e30613]">PORTADOR SOS in {item.city}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Urgent air cargo support in {item.city}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              PORTADOR SOS supports urgent shipments in {item.city} for customers who need same-day air cargo, excess baggage, business documents, machine parts, medical equipment, or other time-sensitive cargo where serviceability allows.
            </p>
            <div className="mt-5 grid gap-2">
              {item.lanes.map((lane) => (
                <p key={lane} className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-semibold text-zinc-200">{lane}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function WhenTimeCannotWaitStory() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#e30613]">When Time Cannot Wait</p>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">Urgent shipments need one accountable support desk.</h2>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              PORTADOR SOS is built for moments where delay is expensive: production loss, aircraft downtime, missed flights, tender deadlines, emergency replacement, regulated cargo review, and business continuity pressure.
            </p>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-xl p-6">
            <div className="airport-grid absolute inset-0 opacity-50" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              {["Business downtime", "Production loss", "Missed flights", "Emergency replacement", "Airport cargo support", "Human operations desk"].map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-black/30 p-4">
                  <Plane className="mb-3 text-[#e30613]" size={18} />
                  <p className="text-sm font-semibold text-zinc-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSignals() {
  const signals = [
    "50+ Airport Cargo Connections",
    "5000+ Serviceable Pin Codes",
    "24x7 Operations Desk",
    "Same-Day / NFO Feasibility",
    "Human Operations Coordination",
    "DG & Battery Cargo Support"
  ];

  return (
    <Section eyebrow="Trust and execution" title="Signals that matter in urgent logistics">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {signals.map((signal) => (
          <div key={signal} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <CheckCircle2 className="mb-4 text-[#e30613]" size={20} />
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-zinc-100">{signal}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function BulletGrid({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return (
    <Section eyebrow={eyebrow} title={title}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MotionCard key={item}>
            <CheckCircle2 className="mb-5 text-[#e30613]" size={22} />
            <p className="text-base font-semibold leading-7 text-zinc-100">{item}</p>
          </MotionCard>
        ))}
      </div>
    </Section>
  );
}

export function Process({ items }: { items: string[] }) {
  return (
    <Section eyebrow="Support outcomes" title="Premium support without routine courier delays">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <MotionCard key={item}>
            <p className="mb-5 text-sm font-black text-[#e30613]">0{index + 1}</p>
            <p className="text-sm font-semibold leading-6 text-zinc-100">{item}</p>
          </MotionCard>
        ))}
      </div>
    </Section>
  );
}

export function FAQBlock({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return <FAQEngine faqs={normalizeFaqs(faqs)} />;
}

export function ListingPage({ title, description, links }: { title: string; description: string; links: { title: string; description: string; href: string }[] }) {
  const faqs = [
    { question: `What is ${title}?`, answer: `${title} is a PORTADOR SOS logistics section built to explain urgent air cargo options and airport-linked movement in clear customer and industry language.` },
    { question: "How does PORTADOR SOS make urgent cargo faster?", answer: "PORTADOR SOS prioritizes deadline pressure, cargo eligibility, premium air movement, and human operations coordination instead of relying only on standard courier hub cycles." },
    { question: "Can I use these pages to choose the right service?", answer: "Yes. Each page explains the service definition, benefits, use cases, and common questions so urgent customers can decide quickly." },
    { question: "Does PORTADOR SOS support same-day intercity delivery?", answer: "Yes, where timing, cargo acceptance, pickup readiness, and destination serviceability make same-day movement feasible." },
    { question: "What information is needed to quote?", answer: "A quote needs enough detail to check urgent air cargo feasibility. Share origin, destination, deadline, cargo type, weight, dimensions, pickup address, consignee details, invoice value, delivery requirement, and any battery, liquid, chemical, medical, or dangerous goods declaration." },
    { question: "Is PORTADOR SOS suitable for business-critical shipments?", answer: "Yes. PORTADOR SOS is built for manufacturing, aviation, pharma, electronics, events, legal, high-value cargo, travelers, students, SMEs, and startups." },
    { question: "Does PORTADOR SOS handle airport-to-airport cargo?", answer: "Yes. Airport-to-airport cargo is supported where the route, documents, commodity, and cargo eligibility allow it." },
    { question: "Why not use regular courier for urgent cargo?", answer: "Regular courier can be right for routine parcels. PORTADOR SOS is better suited when speed, airport-linked air cargo support, and live human ownership matter more." },
    { question: "Can PORTADOR SOS support dangerous goods, lithium batteries, or regulated cargo?", answer: "PORTADOR SOS can check dangerous goods, lithium batteries, and regulated cargo, but final movement depends on airline rules, approval, serviceability, and compliance review. MSDS or declaration may be required, and packing and documentation must be verified." },
    { question: "What cargo categories can PORTADOR SOS support?", answer: "PORTADOR SOS can support urgent cargo categories that are eligible for air movement and properly documented. Common categories include B2B documents, machine parts, laptops, medical equipment, excess baggage, high-value cargo, lithium battery shipments, dangerous goods, event cargo, and aviation spares." },
    { question: "What affects urgent air cargo feasibility?", answer: "Urgent air cargo feasibility depends on timing, cargo eligibility, documentation, serviceability, regulatory compliance verification, cargo dimensions, weight, commodity type, and available air movement." },
    { question: "Is support available outside office hours?", answer: "Yes. PORTADOR SOS is positioned for 24x7 urgent operations support, subject to route, pickup, airport, and airline availability." }
  ];
  const normalizedFaqs = normalizeFaqs(faqs);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(normalizedFaqs),
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: title,
              itemListElement: links.map((link, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: link.title,
                url: `${site.url}${link.href}`
              }))
            }
          ])
        }}
      />
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="airport-grid absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">PORTADOR SOS network</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{description}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="glass-panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-[#e30613]/40">
              <h3 className="text-xl font-semibold text-white">{link.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{link.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff4a54]">
                Open page <ChevronRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Section eyebrow="Definition" title={title === "PORTADOR Network" ? "What is the PORTADOR Network?" : title === "Knowledge Hub" ? "What does the PORTADOR Knowledge Hub explain?" : title === "Urgent Logistics Use Cases" ? "How do urgent logistics use cases help customers?" : `What is ${title}?`}>
        <div className="max-w-4xl">
          <p className="text-xl leading-9 text-zinc-200">
            {title === "PORTADOR Network"
              ? "The PORTADOR Network is the customer-facing view of PORTADOR SOS coverage across major airport-connected Indian cities, local business markets, nearby suburbs, and useful urgent cargo route examples."
              : title === "Knowledge Hub"
                ? "The PORTADOR Knowledge Hub explains real shipment questions in simple language, including same-day cargo, next flight out, airport cargo, excess baggage, legal documents, dangerous goods basics, volumetric weight, E-Way Bill, airline delays, shipment protection, and pickup or delivery planning."
                : title === "Urgent Logistics Use Cases"
                  ? "Urgent logistics use cases show how PORTADOR supports customers when cargo cannot wait - from legal papers and medical equipment to last-minute commercial cargo, event material, excess baggage, and time-bound airport cargo."
                  : `${title} is part of PORTADOR SOS's urgent air cargo network: every page explains urgent air cargo in simple customer language so customers can understand when same-day air cargo, next flight out logistics, airport cargo, or human-supported urgent delivery is the right choice.`}
          </p>
          <div className="ai-snippet mt-6 rounded-md">
            <h3 className="mb-2 text-lg font-semibold text-white">Direct shipment summary</h3>
            <p className="text-base leading-7 text-zinc-100">When Time Cannot Wait, PORTADOR SOS coordinates urgent air cargo support and a human operations desk for cargo facing business downtime, production loss, missed flights, or emergency replacement needs.</p>
          </div>
        </div>
      </Section>
      <TrustSignals />
      <Section eyebrow="Urgent shipment requests" title="Tell Us What You Need To Move">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "I need to send cargo today between cities.",
            "A machine is down and the replacement part must fly now.",
            "My shipment cannot wait for overnight courier.",
            "I need airport-to-airport cargo with live coordination.",
            "I need to send battery, DG, or high-value cargo urgently.",
            "I need a human operations desk, not a generic tracking screen."
          ].map((query) => (
            <div key={query} className="ai-snippet rounded-md">
              <p className="text-sm font-semibold leading-7 text-zinc-100">{query}</p>
            </div>
          ))}
        </div>
      </Section>
      <BulletGrid eyebrow="Benefits" title="Why PORTADOR's urgent air cargo support helps when timelines are critical" items={["Clear urgent cargo definitions", "Service and route selection support", "Airport-linked movement context", "Same-day and next-flight-out language", "Customer-ready shipment explanation", "Structured answers for urgent shipment searches"]} />
      <Process items={["Same-Day Feasibility", "Next Flight Out Coordination", "Airport Cargo Support", "Human Operations Desk", "Regulated Cargo Review", "24x7 Escalation"]} />
      <BulletGrid eyebrow="Use cases" title="Who uses PORTADOR SOS" items={["Manufacturing companies", "Aviation companies", "Pharma and medical support teams", "Events and exhibitions", "Electronics and IT teams", "Travelers, students, SMEs, startups, and legal firms"]} />
      <BulletGrid eyebrow="Courier comparison" title="Why not regular courier" items={["Routine parcel networks optimize scale", "Urgent air cargo prioritizes time-critical business needs", "Hub sorting can add avoidable delay", "Regulated cargo needs acceptance checks", "Human operations can reduce ambiguity", "Mission-critical cargo needs deadline-first ownership"]} />
      <Section eyebrow="Shipment answers" title="Answers Before You Ship Urgent Cargo">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["Can PORTADOR SOS support urgent cargo?", "Yes. PORTADOR SOS supports urgent air cargo through airport-linked movement and human operations desk oversight."],
            ["Is same-day air cargo always possible?", "Same-day capability depends on timing, cargo readiness, cargo acceptance, available air movement, and destination serviceability."],
            ["Why use PORTADOR SOS instead of routine courier?", "Use PORTADOR SOS when urgent air cargo support, live shipment updates, and human support matter more than routine parcel scale."]
          ].map(([question, answer]) => (
            <div key={question} className="ai-snippet rounded-md">
              <h3 className="text-lg font-semibold leading-7 text-white">{question}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-100">{answer}</p>
            </div>
          ))}
        </div>
      </Section>
      <FAQBlock faqs={normalizedFaqs} />
      <CTA />
    </main>
  );
}
