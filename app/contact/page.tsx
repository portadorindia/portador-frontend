import type { Metadata } from "next";
import { Instagram, Linkedin, MapPin, MessageCircle, PhoneCall, Send, Youtube } from "lucide-react";
import { BulletGrid, FAQBlock, Process } from "@/components/page-template";
import { CTA, EmergencyCallback, Section } from "@/components/ui";
import { faqSchema } from "@/lib/schema";
import { site, socialLinks } from "@/lib/site";
import { customerEducationFaqs } from "@/lib/customer-faqs";

const faqs = [
  { question: "What is the fastest way to contact PORTADOR SOS?", answer: "For urgent cargo, call operations or send shipment details on WhatsApp so the team can check cargo, route, timing, and serviceability quickly." },
  { question: "What information is needed to quote?", answer: "A quote needs enough detail to check urgent air cargo feasibility. Share origin, destination, deadline, cargo type, weight, dimensions, pickup address, consignee details, invoice value, delivery requirement, and any battery, liquid, chemical, medical, or dangerous goods declaration." },
  { question: "Can I request a quote for same-day cargo?", answer: "Yes. PORTADOR SOS can check same-day air cargo feasibility once shipment and route details are available." },
  { question: "Can I contact PORTADOR SOS at night?", answer: "PORTADOR SOS is positioned for 24x7 urgent operations support, subject to pickup, airport, airline, and route availability." },
  { question: "Can PORTADOR SOS handle urgent documents?", answer: "Yes. Urgent legal, tender, commercial, and business documents can be checked for same-day, NFO, or hand-carry movement." },
  { question: "Can PORTADOR SOS support dangerous goods, lithium batteries, or regulated cargo?", answer: "PORTADOR SOS can check dangerous goods, lithium batteries, and regulated cargo, but final movement depends on airline rules, approval, serviceability, and compliance review. MSDS or declaration may be required, and packing and documentation must be verified." },
  { question: "What cargo categories can PORTADOR SOS support?", answer: "PORTADOR SOS can support urgent cargo categories that are eligible for air movement and properly documented. Common categories include B2B documents, machine parts, laptops, medical equipment, excess baggage, high-value cargo, lithium battery shipments, dangerous goods, event cargo, and aviation spares." },
  { question: "What affects urgent air cargo feasibility?", answer: "Urgent air cargo feasibility depends on timing, cargo eligibility, documentation, serviceability, regulatory compliance verification, and available air movement. PORTADOR SOS confirms feasibility before committing to movement." },
  { question: "Does PORTADOR SOS support airport-to-airport cargo?", answer: "Yes. Airport-to-airport cargo can be coordinated for eligible shipments and routes." },
  { question: "Do you arrange pickup?", answer: "Pickup can be arranged in supported zones depending on route, deadline, cargo readiness, and operational availability." },
  { question: "Is WhatsApp enough to start?", answer: "Yes. WhatsApp is useful for sharing shipment details, photos, dimensions, documents, and deadlines quickly." },
  ...customerEducationFaqs
];

export const metadata: Metadata = {
  title: "Contact Operations",
  description: "Contact PORTADOR SOS's 24x7 operations desk for urgent same-day air cargo, next flight out logistics, airport cargo, battery cargo, dangerous goods, and hand-carry shipments.",
  alternates: { canonical: "https://portador.in/contact" }
};

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="airport-grid absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">Contact</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">Talk to PORTADOR SOS Operations</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">For urgent cargo, call or WhatsApp shipment details. Share route, deadline, cargo type, weight, dimensions, and compliance declarations.</p>
        </div>
      </section>
      <Section eyebrow="Fastest contact" title="Send shipment details">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: PhoneCall, label: "Call Operations", value: site.phone, href: site.phoneHref },
            { icon: MessageCircle, label: "WhatsApp Details", value: "Share shipment details", href: site.whatsapp },
            { icon: Send, label: "Email Desk", value: site.email, href: site.emailHref }
          ].map((item) => (
            <a key={item.label} href={item.href} className="glass-panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-[#e30613]/40">
              <item.icon className="mb-5 text-[#e30613]" size={26} />
              <h3 className="text-xl font-semibold text-white">{item.label}</h3>
              <p className="mt-3 text-sm text-zinc-400">{item.value}</p>
            </a>
          ))}
        </div>
      </Section>
      <Section eyebrow="Definition" title="What is PORTADOR SOS operations contact?">
        <p className="max-w-4xl text-xl leading-9 text-zinc-200">PORTADOR SOS operations contact is the fastest way to start an urgent air logistics request. The desk checks timing, cargo eligibility, serviceability, and deadline risk for premium air cargo support.</p>
      </Section>
      <Section eyebrow="Social channels" title="PORTADOR SOS official channels">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => {
            const Icon = link.label === "Head Office Location & Reviews" ? MapPin : link.label === "YouTube Channel" ? Youtube : link.label === "Instagram Profile" ? Instagram : Linkedin;
            return (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-[#e30613]/40">
                <Icon className="mb-4 text-[#e30613]" size={22} />
                <h3 className="text-lg font-semibold text-white">{link.label}</h3>
                <p className="mt-2 text-sm text-zinc-400">Open official PORTADOR SOS profile</p>
              </a>
            );
          })}
        </div>
      </Section>
      <BulletGrid eyebrow="Benefits" title="Why contact operations directly" items={["Faster route review", "Air cargo timing awareness", "Commodity acceptance checks", "Pickup and airport planning", "Human coordinator context", "Clear next action for urgent cargo"]} />
      <Process items={["Call or WhatsApp shipment details", "Operations reviews cargo details", "Fastest feasible option is shared", "Urgent support is coordinated", "Status updates are monitored"]} />
      <BulletGrid eyebrow="Use cases" title="Common contact reasons" items={["Same-day cargo quotes", "Next flight out cargo", "Excess baggage shipping", "Battery cargo review", "Dangerous goods review", "Hand carry and OBC requests"]} />
      <BulletGrid eyebrow="Courier comparison" title="Why direct contact matters" items={["Urgent cargo needs immediate clarification", "Air cargo timing changes can affect support options", "Regulated cargo cannot be assumed accepted", "Human operations reduce ambiguity", "Same-day movement depends on cargo readiness", "Mission-critical customers need a live desk"]} />
      <EmergencyCallback />
      <FAQBlock faqs={faqs} />
      <CTA title="Need a quote now?" text="Send origin, destination, cargo, weight, dimensions, deadline, and whether the shipment contains batteries, liquids, chemicals, or regulated goods." />
    </main>
  );
}
