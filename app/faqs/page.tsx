import type { Metadata } from "next";
import { FAQBlock } from "@/components/page-template";
import { CTA } from "@/components/ui";
import { services } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import { customerEducationFaqs } from "@/lib/customer-faqs";

const faqs = Array.from(new Map([
  ...services[0].faqs,
  { question: "Which Indian cities does PORTADOR SOS support?", answer: "PORTADOR SOS focuses on major airport-linked Indian cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, and Kolkata, with service feasibility checked per shipment." },
  { question: "Can PORTADOR SOS help with urgent business shipments?", answer: "Yes. PORTADOR SOS is designed for urgent B2B shipments, manufacturing parts, aviation spares, legal documents, electronics, event cargo, and high-value movement." },
  { question: "What does no hub delays mean?", answer: "No avoidable hub delays means PORTADOR SOS prioritizes direct airport-linked planning where feasible instead of defaulting to multi-hub parcel sorting cycles used by high-volume courier networks." },
  { question: "Who should use PORTADOR BLACK?", answer: "PORTADOR BLACK is for founders, CEOs, HNIs, UHNWIs, family offices, legal teams, and high-value cargo customers who need hand carry, OBC, runner, VIP, confidential, or short-notice logistics." },
  { question: "When should businesses use PORTADOR EXPRESS?", answer: "Businesses should use PORTADOR EXPRESS for next business day or second business day premium air cargo when a shipment is important, B2B, and air-priority, but not a same-day emergency." },
  { question: "What is PORTADOR GLOBAL?", answer: "PORTADOR GLOBAL is urgent international import and export air cargo coordination for premium cross-border air freight, documentation-aware movement, compliance review, and time-sensitive global shipment planning." },
  ...customerEducationFaqs
].map((faq) => [faq.question, faq])).values());

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about PORTADOR SOS same-day air cargo, next flight out logistics, airport cargo, battery cargo, dangerous goods, hand carry, and urgent delivery in India."
};

export default function FAQsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="airport-grid absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">FAQs</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">Urgent Air Logistics Questions</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Clear answers for same-day cargo, next flight out logistics, airport cargo, regulated cargo, hand carry, and mission-critical shipments.</p>
        </div>
      </section>
      <FAQBlock faqs={faqs} />
      <CTA />
    </main>
  );
}
