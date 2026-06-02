import type { Metadata } from "next";
import { BulletGrid, FAQBlock, Process } from "@/components/page-template";
import { CTA, Section } from "@/components/ui";
import { faqSchema } from "@/lib/schema";

const faqs = [
  { question: "What is PORTADOR SOS?", answer: "PORTADOR SOS is a premium time-critical air logistics platform for same-day air cargo, next flight out logistics, airport-to-airport cargo, hand carry, dangerous goods, battery cargo, and urgent business shipments." },
  { question: "Is PORTADOR SOS a courier company?", answer: "PORTADOR SOS is not positioned as a generic courier company. It focuses on urgent air-linked movement and human operations support when time cannot wait." },
  { question: "What makes PORTADOR SOS different?", answer: "PORTADOR SOS prioritizes urgent air cargo support, timing clarity, no avoidable hub delays, and live human ownership for urgent shipments." },
  { question: "Who uses PORTADOR SOS?", answer: "Manufacturing, aviation, pharma, electronics, events, legal firms, SMEs, startups, travelers, students, and high-value cargo clients use PORTADOR SOS for urgent movement." },
  { question: "Does PORTADOR SOS operate 24x7?", answer: "Yes. PORTADOR SOS is built around a 24x7 urgent support posture, subject to route, cargo type, airport, and pickup availability." },
  { question: "Can PORTADOR SOS support dangerous goods, lithium batteries, or regulated cargo?", answer: "PORTADOR SOS can check dangerous goods, lithium batteries, and regulated cargo, but final movement depends on airline rules, approval, and service feasibility. MSDS or declaration may be required, and packing, documentation, and regulatory compliance must be verified before support." },
  { question: "Does PORTADOR SOS offer next flight out logistics?", answer: "Yes. Next flight out logistics is one of PORTADOR SOS's core services for shipments that need the earliest feasible flight." },
  { question: "Does PORTADOR SOS support airport-to-airport cargo?", answer: "Yes. PORTADOR SOS coordinates airport-to-airport cargo for eligible shipments and routes." },
  { question: "What is the brand promise?", answer: "The brand promise is When Time Cannot Wait, meaning PORTADOR SOS is designed for shipment urgency rather than routine parcel movement." },
  { question: "How do I start?", answer: "Call or WhatsApp operations with origin, destination, deadline, cargo details, weight, dimensions, and any regulated cargo declaration." }
];

export const metadata: Metadata = {
  title: "About",
  description: "PORTADOR SOS is India's time-critical air logistics network for same-day cargo, NFO execution, airport cargo, and mission-critical shipments.",
  alternates: { canonical: "https://portador.in/about" }
};

export default function AboutPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="airport-grid absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">About PORTADOR SOS</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">India's SOS Air Cargo Operations Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">PORTADOR SOS exists for business and personal shipments where normal courier timelines are not enough. The brand combines premium air cargo support, airport-linked movement, and real human urgency.</p>
        </div>
      </section>
      <Section eyebrow="Positioning" title="Urgency before routine parcel flow">
        <p className="max-w-4xl text-xl leading-9 text-zinc-200">Traditional courier networks optimize routing, sorting, and scale. PORTADOR SOS focuses on urgency: the fastest feasible air-linked support, the right documentation, and one accountable human support desk watching the deadline.</p>
      </Section>
      <BulletGrid eyebrow="Principles" title="How PORTADOR SOS supports urgent customers" items={["Airport-linked air cargo support", "No default dependency on hub delays", "Human ownership for mission-critical movement", "Compliance-aware review for regulated cargo", "Premium communication for urgent customers", "Built around same-day and next-flight-out feasibility"]} />
      <Process items={["Understand the deadline", "Check cargo and serviceability", "Support pickup or airport movement", "Move cargo through the fastest feasible option", "Close with destination support"]} />
      <BulletGrid eyebrow="Use cases" title="Where PORTADOR SOS fits" items={["Plant shutdown recovery", "Aviation AOG support", "Urgent legal documentation", "Exhibition and event deadlines", "High-value electronics", "Traveler and student baggage movement"]} />
      <BulletGrid eyebrow="Courier comparison" title="Why not regular courier" items={["PORTADOR SOS is built for deadline-first support", "Air cargo timing awareness matters for same-day cargo", "Airport-linked movement can reduce delay", "Human support helps when plans change", "Regulated cargo needs early review", "Mission-critical customers need clarity"]} />
      <FAQBlock faqs={faqs} />
      <CTA />
    </main>
  );
}
