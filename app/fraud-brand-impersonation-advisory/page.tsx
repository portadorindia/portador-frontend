import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Camera, KeyRound, Mail, MessageCircle, PhoneCall, ShieldAlert } from "lucide-react";
import { Section } from "@/components/ui";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site, whatsappHref } from "@/lib/site";

const pageUrl = `${site.url}/fraud-brand-impersonation-advisory`;
const pageDescription = "Official PORTADOR guidance for verifying suspicious messages, payment requests, booking communications, spam, and unauthorized use of the PORTADOR name or identity.";

const advisoryFaqs = [
  {
    question: "How can I verify a message claiming to be from PORTADOR?",
    answer: `Verify the communication through the official contact details published on portador.in. Call ${site.phone}, email ${site.email}, or use the official contact page before sharing information or making a payment.`
  },
  {
    question: "What should I do if I receive a suspicious booking or payment request?",
    answer: "Pause the conversation and do not make payment until the request has been verified through an official PORTADOR channel. Preserve the message, sender details, phone number, payment information, and relevant screenshots."
  },
  {
    question: "Should I share an OTP, password, or banking credential to verify a PORTADOR shipment?",
    answer: "No. Do not share OTPs, passwords, PINs, card credentials, or online banking credentials in response to an unexpected or unverified communication."
  },
  {
    question: "How should I report suspected PORTADOR impersonation?",
    answer: `Report the communication through PORTADOR's official channels at ${site.email} or ${site.phone}. Include screenshots and sender details, but remove passwords, OTPs, and complete banking credentials before sending evidence.`
  },
  {
    question: "Does this advisory identify or accuse a specific person or organization?",
    answer: "No. This advisory is general customer-safety guidance about unauthorized use of the PORTADOR name or identity and does not identify or accuse any specific individual or entity."
  }
];

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Fraud & Brand Impersonation Advisory", href: "/fraud-brand-impersonation-advisory" }
]);

const webPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Fraud & Brand Impersonation Advisory",
  description: pageDescription,
  url: pageUrl,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url
  },
  publisher: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url
  },
  about: "Customer guidance for recognizing, verifying, preserving evidence of, and reporting suspected brand impersonation or unauthorized communications using the PORTADOR name."
};

export const metadata: Metadata = {
  title: "Fraud & Brand Impersonation Advisory",
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Fraud & Brand Impersonation Advisory | PORTADOR",
    description: pageDescription,
    url: pageUrl,
    type: "article"
  }
};

export default function FraudBrandImpersonationAdvisoryPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([webPage, breadcrumb, faqSchema(advisoryFaqs)]) }} />

      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="airport-grid absolute inset-0 opacity-45" />
        <div className="container-shell relative">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-zinc-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-zinc-300">Fraud & Brand Impersonation Advisory</li>
            </ol>
          </nav>
          <div className="flex max-w-4xl gap-4">
            <ShieldAlert className="mt-1 hidden shrink-0 text-[#e30613] sm:block" size={34} aria-hidden="true" />
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#e30613]">Official customer advisory</p>
              <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">Fraud & Brand Impersonation Advisory</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">Guidance for customers who receive suspicious messages, booking or payment requests, spam, or other communications using the PORTADOR name or identity.</p>
            </div>
          </div>

          <div className="mt-8 max-w-5xl rounded-lg border border-[#e30613]/30 bg-[#e30613]/[0.07] p-5 md:p-6">
            <p className="text-base leading-7 text-zinc-100">PORTADOR Logistics Private Limited has received reports of unauthorized persons using the PORTADOR name or identity to send spam, unsolicited or inappropriate messages, fake booking/payment communications, or other communications that do not originate from PORTADOR or are not authorized by PORTADOR.</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Official verification" title="Verify before you respond or pay">
        <p className="max-w-4xl text-base leading-7 text-zinc-300">If a communication appears unusual, stop and verify it independently using the contact details published on this website. Do not rely only on a phone number, email address, payment link, or profile supplied in the suspicious message.</p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {[
            { icon: PhoneCall, title: "Call the official desk", text: site.phone, href: site.phoneHref },
            { icon: Mail, title: "Email PORTADOR", text: site.email, href: site.emailHref },
            { icon: MessageCircle, title: "Use official WhatsApp", text: "Open verified contact link", href: whatsappHref }
          ].map((item) => (
            <a key={item.title} href={item.href} className="glass-panel rounded-lg p-5 transition hover:-translate-y-1 hover:border-[#e30613]/40">
              <item.icon className="text-[#e30613]" size={23} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 break-words text-sm leading-6 text-zinc-400">{item.text}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section eyebrow="Customer safety" title="What to do with a suspicious communication">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { icon: BadgeCheck, title: "Verify independently", text: "Confirm unexpected booking, shipment, or payment communications through PORTADOR's official website, phone number, email, or contact page." },
            { icon: KeyRound, title: "Protect credentials", text: "Never share OTPs, passwords, PINs, card credentials, or online banking credentials in response to an unexpected or unverified request." },
            { icon: BadgeCheck, title: "Confirm payment requests", text: "Verify the purpose, recipient, and payment instructions through an official PORTADOR channel before making payment." },
            { icon: Camera, title: "Preserve evidence", text: "Keep screenshots, message timestamps, sender profiles, phone numbers, email addresses, links, and payment details where impersonation is suspected." }
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <item.icon className="text-[#e30613]" size={22} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-5">
          <h3 className="text-lg font-semibold text-white">Report suspected impersonation</h3>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-zinc-400">Send the preserved details to an official PORTADOR contact channel. Remove passwords, OTPs, PINs, full card details, and complete banking credentials from any evidence you share.</p>
        </div>
      </Section>

      <Section eyebrow="Direct answers" title="Fraud & brand impersonation questions">
        <div className="grid gap-3">
          {advisoryFaqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 open:border-[#e30613]/35">
              <summary className="cursor-pointer list-none pr-8 text-white marker:hidden">
                <h3 className="inline text-lg font-semibold leading-7">{faq.question}</h3>
              </summary>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="pb-16 pt-4 md:pb-20">
        <div className="container-shell">
          <div className="glass-panel rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Need to verify a PORTADOR communication?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">Contact PORTADOR using the official details published on this website before responding, sharing information, or making payment.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#e30613] px-5 text-sm font-bold text-white transition hover:bg-[#ff1b28]">Contact PORTADOR</Link>
              <a href={site.phoneHref} className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-bold text-white transition hover:border-[#e30613]/55">Call official desk</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
