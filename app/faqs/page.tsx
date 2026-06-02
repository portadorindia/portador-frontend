import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { CTA } from "@/components/ui";
import { faqSchema } from "@/lib/schema";
import { faqAuthorityCategories, faqAuthorityFaqs } from "@/lib/faq-authority";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Grouped PORTADOR SOS FAQs for same-day air cargo, NFO, excess baggage, international cargo, DG cargo, laptop shipping, GST documents, airports, cities, and urgent routes.",
  alternates: { canonical: "https://portador.in/faqs" }
};

export default function FAQsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqAuthorityFaqs)) }} />
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="airport-grid absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">PORTADOR SOS FAQs</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">Urgent Air Logistics Questions</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Clear customer answers for same-day cargo, Next Flight Out, airport cargo, excess baggage, international movement, restricted goods, GST documents, and mission-critical shipments.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {faqAuthorityCategories.map((category) => (
              <a key={category.id} href={`#${category.id}`} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#e30613]/45">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e30613]">{category.faqs.length} FAQs</span>
                <span className="mt-2 block text-sm font-semibold leading-6 text-white">{category.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {faqAuthorityCategories.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-24 py-12 md:py-16">
          <div className="container-shell">
            <div className="mb-8 max-w-4xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#e30613]">FAQ category</p>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{category.title}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">{category.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.links.map((link) => (
                  <Link key={`${category.id}-${link.href}-${link.label}`} href={link.href} className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-bold text-zinc-200 transition hover:border-[#e30613]/45 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {category.faqs.map((faq) => (
                <details key={`${category.id}-${faq.question}`} className="group glass-panel rounded-lg p-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-white">
                    <h3 className="text-base font-semibold leading-7 text-white">{faq.question}</h3>
                    <ChevronDown className="mt-1 shrink-0 text-[#e30613] transition group-open:rotate-180" size={18} />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTA title="Need urgent shipment support?" text="Share pickup, delivery, weight, deadline, cargo type, and documents. PORTADOR SOS will confirm the fastest available support path." />
    </main>
  );
}
