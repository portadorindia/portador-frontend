import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQEngine({
  faqs,
  title = "Frequently Asked Questions (FAQs)",
  eyebrow = "FAQs"
}: {
  faqs: FAQItem[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl md:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#e30613]">{eyebrow}</p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group glass-panel rounded-lg p-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-white">
                <h3 className="text-base font-semibold leading-7 text-white">{faq.question}</h3>
                <ChevronDown className="mt-1 shrink-0 text-[#e30613] transition group-open:rotate-180" size={18} />
              </summary>
              <StructuredFAQAnswer question={faq.question} answer={faq.answer} />
            </details>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-[#e30613]/25 bg-[#e30613]/10 p-5">
          <h3 className="text-xl font-semibold text-white">Need Immediate Assistance?</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { label: "PORTADOR SOS", href: "/services/portador-sos" },
              { label: "Excess Baggage", href: "/cargo/excess-baggage" },
              { label: "PORTADOR GLOBAL", href: "/services/portador-global" },
              { label: "Restricted Goods", href: "/restricted-goods" },
              { label: "Track Shipment", href: site.trackingUrl },
              { label: "Contact Operations", href: "/contact" }
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-xs font-bold text-zinc-200 transition hover:border-[#e30613]/45 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href={site.phoneHref} className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-[#e30613] px-5 text-sm font-bold text-white">
            Call +91 94038 92974
          </Link>
        </div>
      </div>
    </section>
  );
}

function StructuredFAQAnswer({ question, answer }: FAQItem) {
  const structured = getStructuredAnswer(question, answer);

  if (!structured) {
    return <p className="mt-4 text-sm leading-7 text-zinc-300">{answer}</p>;
  }

  return (
    <div className="mt-4 text-sm leading-7 text-zinc-300">
      <p>{structured.lead}</p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {structured.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {structured.note ? <p className="mt-3">{structured.note}</p> : null}
    </div>
  );
}

function getStructuredAnswer(question: string, answer: string) {
  if (question === "How can I send urgent cargo today?") {
    return {
      lead: "You can send urgent cargo today by sharing shipment details with PORTADOR SOS for a fast availability check.",
      items: [
        "Share route, cargo type, weight, dimensions, deadline, and compliance details.",
        "The team checks pickup readiness and air cargo timing.",
        "Airport cargo support and available air movement are checked.",
        "Human support begins after availability is confirmed."
      ]
    };
  }

  if (question.startsWith("When should I use")) {
    return {
      lead: answer.split(". ")[0] + ".",
      items: [
        "Business downtime or production loss is likely if the shipment waits.",
        "The shipment needs same-day air cargo, next flight out logistics, or airport-to-airport movement.",
        "Timing, cargo type, and urgent human support matter.",
        "A human operations desk is needed for live shipment support."
      ],
      note: "PORTADOR SOS checks availability before confirming movement because urgent cargo still depends on route, approval, and cargo readiness."
    };
  }

  if (question === "How does same-day air cargo work?") {
    return {
      lead: "Same-day air cargo connects urgent cargo to the fastest feasible air movement instead of routine courier routing.",
      items: [
        "Pickup or airport support is coordinated.",
        "Cargo eligibility and timing are checked.",
        "Flight-linked movement is supported where feasible.",
        "Destination support is coordinated through the human operations desk."
      ]
    };
  }

  if (question === "How does next flight out cargo work?") {
    return {
      lead: "Next flight out cargo uses the earliest suitable airline connection that can accept the shipment.",
      items: [
        "Origin, destination, cargo type, and timing are checked.",
        "Documentation and packing are reviewed before movement.",
        "The shipment is moved through NFO logistics where feasible.",
        "Operations monitor exceptions and destination support."
      ]
    };
  }

  if (question === "How does airport-to-airport cargo work?") {
    return {
      lead: "Airport-to-airport cargo moves eligible shipments between airport cargo terminals for faster intercity movement.",
      items: [
        "Origin airport support is checked before movement.",
        "Cargo eligibility and handling requirements are reviewed.",
        "Air movement connects the origin and destination airport where feasible.",
        "The consignee collects at destination or final-mile support is arranged where feasible."
      ]
    };
  }

  if (question === "How does airline cargo coordination work?") {
    return {
      lead: "Air cargo support checks whether the shipment can move through an available air cargo option.",
      items: [
        "Timing and route availability are checked.",
        "Dimensions, weight, and commodity restrictions are reviewed.",
        "Airport cargo handling requirements are considered.",
        "Support is coordinated only when documents and availability align."
      ]
    };
  }

  if (question === "What information is needed to quote?") {
    return {
      lead: "A quote needs enough shipment detail to check service availability and air cargo eligibility.",
      items: [
        "Origin, destination, pickup address, and consignee details.",
        "Deadline, delivery requirement, and consequence of delay.",
        "Cargo type, weight, dimensions, invoice value, and packaging status.",
        "Battery, liquid, chemical, medical, dangerous goods, or regulated cargo declaration.",
        "Documents such as invoice, MSDS, authorization, or handling notes when applicable."
      ],
      note: "These details help PORTADOR SOS check availability, regulated cargo requirements, and avoidable delay risk."
    };
  }

  if (question === "Can you handle B2B documents and parts?") {
    return {
      lead: "Yes. PORTADOR SOS supports urgent B2B documents and parts when timing, custody, and delivery matter.",
      items: [
        "Tender files, legal documents, commercial contracts, and business-critical papers.",
        "Machine parts, aviation spares, electronics, samples, and emergency replacement items.",
        "Event material, pharma-support cargo, and high-value business shipments.",
        "Airport-linked movement with human support and shipment updates."
      ]
    };
  }

  if (question === "How can I send urgent machine parts?") {
    return {
      lead: "Urgent machine parts can move by same-day air cargo, next flight out logistics, airport-to-airport cargo, or hand carry when feasible.",
      items: [
        "Share part dimensions, weight, invoice value, pickup point, and deadline.",
        "The team checks timing and serviceability.",
        "Packing, documentation, and handling requirements are reviewed.",
        "Human support starts after availability is confirmed."
      ]
    };
  }

  if (question === "How can I move cargo after normal courier timing?") {
    return {
      lead: "Cargo that misses a normal courier timing may still move through urgent air cargo if airline timing and cargo handling allow it.",
      items: [
        "PORTADOR SOS checks air cargo and airport-linked delivery availability.",
        "Pickup readiness and airport support timing are reviewed.",
        "Commodity restrictions and documentation are verified.",
        "A new movement plan is shared without fake delivery guarantees."
      ]
    };
  }

  if (question === "What cargo categories can PORTADOR SOS support?") {
    return {
      lead: "PORTADOR SOS can support urgent cargo categories that are eligible for air movement and properly documented.",
      items: [
        "B2B documents, tender papers, legal documents, and commercial samples.",
        "Machine parts, aviation spares, electronics, laptops, and medical equipment.",
        "Excess baggage, missed-flight baggage recovery, event cargo, and high-value cargo.",
        "Lithium battery shipments, dangerous goods, and regulated cargo subject to approval."
      ],
      note: "Final acceptance depends on airline rules, documentation, handling requirements, and service availability."
    };
  }

  if (question === "What cargo can move by air?") {
    return {
      lead: "Air cargo can include urgent shipments that are eligible, properly packed, and correctly documented.",
      items: [
        "Urgent documents, machine parts, laptops, electronics cargo, and medical equipment.",
        "Event material, exhibition cargo, aviation spares, excess baggage, and high-value cargo.",
        "DG cargo by air, lithium battery cargo, chemical cargo, and restricted goods only after approval.",
        "Final movement depends on airline rules, regulatory compliance verification, and service availability."
      ]
    };
  }

  if (question === "What documents are needed for dangerous goods cargo?") {
    return {
      lead: "Dangerous goods cargo may require compliance documents before airline movement can be planned.",
      items: [
        "Invoice and commodity description.",
        "MSDS or declaration where applicable.",
        "Product classification, packing details, and handling notes.",
        "Regulatory compliance documents required by airline or terminal process."
      ],
      note: "PORTADOR SOS reviews documentation before support."
    };
  }

  if (question === "What affects urgent air cargo availability?") {
    return {
      lead: "Urgent air cargo availability depends on timing, cargo type, documentation, and serviceability.",
      items: [
        "Pickup readiness, road access, and air cargo timing.",
        "Cargo dimensions, weight, commodity type, packaging, and handling requirements.",
        "Airline acceptance, route availability, compliance documents, and serviceability.",
        "Destination readiness and final-mile or airport support timing."
      ],
      note: "PORTADOR SOS checks these factors before confirming same-day air cargo or next flight out logistics."
    };
  }

  if (question === "When is next flight out required?") {
    return {
      lead: "Next flight out is required when the shipment cannot wait for overnight courier or surface transport.",
      items: [
        "AOG shipment India or aircraft spare parts logistics.",
        "Urgent spare parts delivery for production line stopped shipment.",
        "Medical equipment cargo or pharma urgent shipment.",
        "Tender document delivery or emergency replacement shipment."
      ]
    };
  }

  if (question === "When is airport-to-airport cargo better than courier?") {
    return {
      lead: "Airport-to-airport cargo is better when fast intercity movement and terminal delivery matter more than routine door-to-door courier flow.",
      items: [
        "The shipment can be handed over at an airport cargo terminal.",
        "Receiver-side airport pickup or connected delivery is feasible.",
        "Avoiding hub transfers is more important than standard parcel convenience.",
        "Air cargo timing timing supports the deadline."
      ]
    };
  }

  if (question === "Which shipments are suitable for same-day air cargo?") {
    return {
      lead: "Suitable same-day air cargo includes urgent shipments where delay creates business or personal impact.",
      items: [
        "Urgent business documents, tender documents, and legal papers.",
        "Machine parts, aviation spares, laptops, electronics, and medical equipment.",
        "Event material emergency delivery, excess baggage, and high-value cargo.",
        "Emergency replacement shipment where route, cargo type, and approval requirements are feasible."
      ]
    };
  }

  if (question === "Which cargo requires airline approval?") {
    return {
      lead: "Airline approval may be required for regulated, restricted, oversized, sensitive, or high-value cargo.",
      items: [
        "Dangerous goods cargo and DG cargo by air.",
        "Lithium battery cargo and battery cargo by air.",
        "Chemical cargo approval and MSDS required cargo.",
        "Restricted goods air cargo, oversized cargo, and certain high-value shipments."
      ]
    };
  }

  if (question === "Can PORTADOR SOS support dangerous goods, lithium batteries, or regulated cargo?") {
    return {
      lead: "PORTADOR SOS can check dangerous goods, lithium batteries, and regulated cargo, but final movement depends on airline rules, approval, and service availability.",
      items: [
        "Airline rules and commodity restrictions are checked before movement planning.",
        "MSDS, declaration, invoice, or authorization documents may be required.",
        "Packing, labeling, documentation, and handling details must be verified.",
        "Regulatory compliance review is completed before support.",
        "Final movement depends on approval, cargo eligibility, handling requirements, and service availability."
      ]
    };
  }

  return null;
}
