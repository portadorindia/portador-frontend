import type { Metadata } from "next";
import { BulletGrid, FAQBlock, Process } from "@/components/page-template";
import { CTA, Section } from "@/components/ui";
import { faqSchema } from "@/lib/schema";
import { getFounderFaqsForStaticPage } from "@/lib/faq-authority";

const normalizedFaqs = getFounderFaqsForStaticPage("about");

export const metadata: Metadata = {
  title: "About",
  description: "PORTADOR SOS is India's time-critical air logistics network for same-day cargo, NFO execution, airport cargo, and mission-critical shipments.",
  alternates: { canonical: "https://portador.in/about" }
};

export default function AboutPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(normalizedFaqs)) }} />
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="airport-grid absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">About PORTADOR SOS</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">Time-Critical Air Logistics for Shipments That Cannot Wait</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">PORTADOR exists for business and personal shipments where normal courier timelines are not enough. Customers receive premium air cargo support, clear acceptance guidance, and dedicated assistance when timing matters.</p>
        </div>
      </section>
      <Section eyebrow="Positioning" title="Urgency before routine parcel flow">
        <p className="max-w-4xl text-xl leading-9 text-zinc-200">Traditional courier networks are designed for routine parcel flow. PORTADOR focuses on urgent cargo, clear documentation, cargo acceptance, and responsible communication around the customer&apos;s deadline.</p>
      </Section>
      <BulletGrid eyebrow="Principles" title="How PORTADOR supports urgent customers" items={["Airport-connected air cargo support", "Deadline-led service selection", "Dedicated assistance for critical shipments", "Compliance-aware review for regulated cargo", "Clear communication before commitment", "Same-Day and Next Flight Out options where feasible"]} />
      <Process items={["Share the shipment requirement", "Confirm service and cargo eligibility", "Arrange the agreed movement", "Receive shipment updates", "Complete destination delivery"]} />
      <BulletGrid eyebrow="Use cases" title="Where PORTADOR SOS fits" items={["Plant shutdown recovery", "Aviation AOG support", "Urgent legal documentation", "Exhibition and event deadlines", "High-value electronics", "Traveler and student baggage movement"]} />
      <BulletGrid eyebrow="Courier comparison" title="Why not regular courier" items={["PORTADOR is built for deadline-first support", "Same-Day cargo needs early availability checks", "Airport-connected movement may suit urgent intercity cargo", "Dedicated assistance helps when plans change", "Regulated cargo needs early review", "Mission-critical customers need clarity"]} />
      <FAQBlock faqs={normalizedFaqs} />
      <CTA />
    </main>
  );
}
