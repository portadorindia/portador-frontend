import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, PackageCheck, PhoneCall, Youtube } from "lucide-react";
import { LiabilityDisclosure } from "@/components/liability-disclosure";
import { cargoPages, cities, fraudAdvisoryLink, hubArticles, legalLinks, site, socialLinks, whatsappHref } from "@/lib/site";

const socialIconMap = {
  "Head Office Location & Reviews": MapPin,
  "YouTube Channel": Youtube,
  "Instagram Profile": Instagram,
  "LinkedIn Company Page": Linkedin
};

const footerServiceLinks = [
  { label: "PORTADOR SOS", href: "/services/portador-sos" },
  { label: "PORTADOR EXPRESS", href: "/services/portador-express" },
  { label: "PORTADOR BLACK", href: "/services/portador-black" },
  { label: "PORTADOR GLOBAL", href: "/services/portador-global" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050506] py-12 md:py-16">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.55fr_repeat(5,minmax(0,1fr))] xl:items-start">
          <div className="min-w-0">
            <div className="flex flex-col items-start gap-3">
              <span className="block h-[72px] w-[220px] shrink-0 overflow-visible">
                <Image
                  src={site.logo}
                  alt="PORTADOR SOS"
                  width={1563}
                  height={1563}
                  sizes="220px"
                  className="pointer-events-none h-auto w-full -translate-y-[80px] object-contain"
                />
              </span>
              <div className="border-l border-white/15 pl-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white">Time-Critical Logistics</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">When Time Cannot Wait</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-zinc-400">
              India-first time-critical air logistics for urgent business cargo, heavier requirements, excess baggage, specialized shipments, and international priority movements.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">Official website of {site.legalName}</p>
            <div className="mt-5 grid gap-2 text-sm leading-6 text-zinc-300">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 transition hover:text-white">
                <PhoneCall size={15} className="text-[#e30613]" />
                {site.phone}
              </a>
              <a href={whatsappHref} className="inline-flex items-center gap-2 transition hover:text-white">
                <MessageCircle size={15} className="text-[#e30613]" />
                WhatsApp Operations
              </a>
              <a href={site.emailHref} className="inline-flex items-center gap-2 transition hover:text-white">
                <Mail size={15} className="text-[#e30613]" />
                {site.email}
              </a>
              <a href={site.trackingUrl} className="inline-flex items-center gap-2 transition hover:text-white">
                <PackageCheck size={15} className="text-[#e30613]" />
                Track Shipment
              </a>
              <p className="flex gap-2 text-xs leading-5 text-zinc-500">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#e30613]" />
                <span>
                  Innov8
                  <br />
                  Okhla Industrial Estate Phase 3
                  <br />
                  New Delhi 110020
                  <br />
                  India
                </span>
              </p>
            </div>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.label as keyof typeof socialIconMap];
                return (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition hover:border-[#e30613]/45 hover:text-white">
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterGroup title="Services" links={footerServiceLinks} />
          <FooterGroup title="Cargo Categories" links={cargoPages.slice(0, 8).map((item) => ({ label: item.title, href: `/cargo/${item.slug}` }))} />
          <FooterGroup title="Airport Cities" links={cities.slice(0, 8).map((item) => ({ label: item.title, href: `/cities/${item.slug}` }))} />
          <FooterGroup title="Knowledge Hub" links={hubArticles.slice(0, 6).map((item) => ({ label: item.title, href: `/knowledge-hub/${item.slug}` }))} />
          <FooterGroup title="Legal" links={[...legalLinks, fraudAdvisoryLink]} />
        </div>
        <LiabilityDisclosure compact className="mt-10" />
        <div className="mt-6 border-t border-white/10 pt-6 text-xs text-zinc-500">
          © 2026 {site.legalName} • Built for Urgency.
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="min-w-0">
      <p className="mb-4 text-sm font-bold text-white">{title}</p>
      <div className="grid gap-3">
        {links.map((link) => (
          <Link key={`${title}-${link.href}-${link.label}`} href={link.href} className="break-words text-sm leading-5 text-zinc-400 transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
