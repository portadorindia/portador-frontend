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
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">India's SOS Air Cargo Operations Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">PORTADOR SOS exists for business and personal shipments where normal courier timelines are not enough. The brand combines premium air cargo support, airport-linked movement, and real human urgency.</p>
        </div>
      </section>
      <Section eyebrow="Positioning" title="Urgency before routine parcel flow">
        <p className="max-w-4xl text-xl leading-9 text-zinc-200">Traditional courier networks optimize routing, sorting, and scale. PORTADOR SOS focuses on urgency: the fastest feasible air-linked support, the right documentation, and one accountable human support desk watching the deadline.</p>
      </Section>
      <BulletGrid eyebrow="Principles" title="How PORTADOR SOS supports urgent customers" items={["Airport-linked air cargo support", "No default dependency on hub delays", "Human ownership for mission-critical movement", "Compliance-aware review for regulated cargo", "Premium communication for urgent customers", "Built around same-day and next-flight-out availability"]} />
      <Process items={["Understand the deadline", "Check cargo and serviceability", "Support pickup or airport movement", "Move cargo through the fastest feasible option", "Close with destination support"]} />
      <BulletGrid eyebrow="Use cases" title="Where PORTADOR SOS fits" items={["Plant shutdown recovery", "Aviation AOG support", "Urgent legal documentation", "Exhibition and event deadlines", "High-value electronics", "Traveler and student baggage movement"]} />
      <BulletGrid eyebrow="Courier comparison" title="Why not regular courier" items={["PORTADOR SOS is built for deadline-first support", "Air cargo timing awareness matters for same-day cargo", "Airport-linked movement can reduce delay", "Human support helps when plans change", "Regulated cargo needs early review", "Mission-critical customers need clarity"]} />
      <FAQBlock faqs={normalizedFaqs} />
      <CTA />
    </main>
  );
}
