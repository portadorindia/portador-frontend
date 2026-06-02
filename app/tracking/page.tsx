import type { Metadata } from "next";
import { BulletGrid, FAQBlock, Process } from "@/components/page-template";
import { CTA, Section } from "@/components/ui";
import { TrackingForm } from "@/components/tracking-form";
import { faqSchema, howToSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { getFounderFaqsForStaticPage } from "@/lib/faq-authority";

const normalizedFaqs = getFounderFaqsForStaticPage("tracking");

export const metadata: Metadata = {
  title: "Tracking",
  description: "Track PORTADOR SOS urgent air cargo, same-day delivery, next flight out cargo, and airport-to-airport shipment status.",
  alternates: { canonical: "https://portador.in/tracking" }
};

export default function TrackingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(normalizedFaqs),
            howToSchema({
              name: "How to track a PORTADOR shipment",
              description: "Enter an AWB or tracking number on PORTADOR.in to open the separate PORTADOR-OPS tracking page.",
              url: `${site.url}/tracking`,
              steps: ["Enter the AWB or tracking number", "Click Track", "PORTADOR.in redirects to the PORTADOR-OPS tracking page"]
            })
          ])
        }}
      />
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="airport-grid absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">Tracking</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">Track Urgent Cargo Movement</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Enter your AWB or tracking number. PORTADOR.in will redirect you to the PORTADOR-OPS tracking app where shipment status is handled.</p>
        </div>
      </section>
      <Section eyebrow="Shipment status" title="Track Shipment">
        <TrackingForm />
      </Section>
      <Section eyebrow="Definition" title="What is urgent cargo tracking?">
        <p className="max-w-4xl text-xl leading-9 text-zinc-200">Urgent cargo tracking is handled in PORTADOR-OPS, the separate operations app for shipment status. PORTADOR.in only redirects customers to the correct tracking page.</p>
      </Section>
      <BulletGrid eyebrow="Benefits" title="Tracking priorities" items={["Deadline visibility", "Airport milestone clarity", "Air movement context", "Human support for shipment changes", "Receiver coordination", "Proof of delivery where available"]} />
      <Process items={["Enter shipment reference", "Operations checks latest milestone", "Airport or movement status is reviewed", "Destination support is coordinated", "Final status is shared"]} />
      <BulletGrid eyebrow="Use cases" title="Shipments commonly tracked" items={["Same-day air cargo", "Next flight out cargo", "Airport-to-airport cargo", "Hand carry shipments", "Excess baggage", "Mission-critical business cargo"]} />
      <BulletGrid eyebrow="Courier comparison" title="Why tracking is different" items={["Urgent cargo milestones are airport-linked", "Timing and handover matter", "Human updates can explain shipment changes", "Receiver readiness affects delivery", "Regulated cargo may have documentation checkpoints", "Mission-critical movement needs more context than a scan"]} />
      <FAQBlock faqs={normalizedFaqs} />
      <CTA title="Need live status?" text="For time-critical shipments, the fastest status update is through the assigned operations coordinator or WhatsApp desk." />
    </main>
  );
}
