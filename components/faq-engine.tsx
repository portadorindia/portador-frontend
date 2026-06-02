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

function StructuredFAQAnswer({ answer }: FAQItem) {
  return <p className="mt-4 text-sm leading-7 text-zinc-300">{answer}</p>;
}
