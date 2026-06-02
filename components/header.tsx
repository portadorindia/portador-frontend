"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { legalLinks, moreNavItems, navItems, site, whatsappHref } from "@/lib/site";

const mobileMenuSections = [
  {
    title: "Services",
    links: [
      { label: "View All Services", href: "/services" },
      { label: "PORTADOR SOS", href: "/services/portador-sos" },
      { label: "PORTADOR EXPRESS", href: "/services/portador-express" },
      { label: "PORTADOR BLACK", href: "/services/portador-black" },
      { label: "PORTADOR GLOBAL", href: "/services/portador-global" }
    ]
  },
  {
    title: "Industries",
    links: [
      { label: "View All Industries", href: "/industries" },
      { label: "Aviation Logistics", href: "/industries/aviation-logistics" },
      { label: "Manufacturing Logistics", href: "/industries/manufacturing-logistics" },
      { label: "Pharma Logistics", href: "/industries/pharma-logistics" },
      { label: "Electronics Logistics", href: "/industries/electronics-logistics" },
      { label: "Legal Document Logistics", href: "/industries/legal-document-logistics" }
    ]
  },
  {
    title: "Cargo Types",
    links: [
      { label: "View All Cargo", href: "/cargo" },
      { label: "AOG Cargo", href: "/cargo/aog-cargo" },
      { label: "Machine Breakdown", href: "/cargo/machine-breakdown" },
      { label: "Medical Equipment", href: "/cargo/medical-equipment" },
      { label: "Dangerous Goods", href: "/cargo/dangerous-goods" },
      { label: "Lithium Battery Cargo", href: "/cargo/lithium-battery-cargo" },
      { label: "Laptop Shipping", href: "/cargo/laptop-shipping" }
    ]
  },
  {
    title: "Excess Baggage",
    links: [
      { label: "Excess Baggage", href: "/cargo/excess-baggage" },
      { label: "Delhi Airport Baggage Pickup", href: "/cargo/delhi-airport-excess-baggage-pickup-service" },
      { label: "Mumbai Airport Baggage Transport", href: "/cargo/mumbai-airport-excess-baggage-transport" },
      { label: "Bengaluru Airport Baggage Collection", href: "/cargo/bengaluru-airport-excess-baggage-collection" },
      { label: "Student Luggage Shipping", href: "/student-luggage-shipping" }
    ]
  },
  {
    title: "Airports",
    links: [
      { label: "View All Airports", href: "/airports" },
      { label: "Delhi IGI Airport", href: "/airports/delhi-igi-airport" },
      { label: "Mumbai CSMIA", href: "/airports/mumbai-csmia" },
      { label: "Bengaluru Kempegowda", href: "/airports/bangalore-kempegowda" },
      { label: "Hyderabad RGIA", href: "/airports/hyderabad-rgia" },
      { label: "Chennai Airport", href: "/airports/chennai-airport" }
    ]
  },
  {
    title: "Cities",
    links: [
      { label: "View All Cities", href: "/cities" },
      { label: "Delhi NCR", href: "/cities/delhi" },
      { label: "Gurugram", href: "/cities/gurugram" },
      { label: "Mumbai", href: "/cities/mumbai" },
      { label: "Bengaluru", href: "/cities/bangalore" },
      { label: "Hyderabad", href: "/cities/hyderabad" },
      { label: "Pune", href: "/cities/pune" }
    ]
  },
  {
    title: "Routes",
    links: [
      { label: "View All Routes", href: "/routes" },
      { label: "Delhi to Mumbai", href: "/routes/delhi-to-mumbai" },
      { label: "Mumbai to Bengaluru", href: "/routes/mumbai-to-bangalore-urgent-delivery" },
      { label: "Chennai to Delhi", href: "/routes/chennai-to-delhi-air-cargo" },
      { label: "Bengaluru to Hyderabad", href: "/routes/bangalore-to-hyderabad-same-day-delivery" }
    ]
  },
  {
    title: "Global Shipping",
    links: [
      { label: "PORTADOR GLOBAL", href: "/services/portador-global" },
      { label: "Food & Personal Goods Guidance", href: "/services/portador-global" },
      { label: "International Documents", href: "/services/portador-global" },
      { label: "Urgent Imports Into India", href: "/services/portador-global" }
    ]
  },
  {
    title: "Knowledge Hub",
    links: [
      { label: "View Knowledge Hub", href: "/knowledge-hub" },
      { label: "What is Next Flight Out Cargo?", href: "/knowledge-hub/what-is-next-flight-out-cargo" },
      { label: "Air Cargo vs Courier", href: "/knowledge-hub/air-cargo-vs-courier" },
      { label: "How Same-Day Air Cargo Works", href: "/knowledge-hub/how-same-day-air-cargo-works" }
    ]
  },
  {
    title: "About",
    links: [
      { label: "About PORTADOR", href: "/about" },
      { label: "Track Shipment", href: site.trackingUrl }
    ]
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Operations", href: "/contact" },
      { label: "WhatsApp Operations", href: whatsappHref },
      { label: "Call 24x7 Desk", href: site.phoneHref },
      ...legalLinks
    ]
  }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Services: true,
    Airports: true,
    Contact: true
  });
  const moreRef = useRef<HTMLDivElement>(null);
  const moreLinks = [...moreNavItems, ...legalLinks];

  useEffect(() => {
    function closeMore(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }

    function closeOnEsc(event: KeyboardEvent) {
      if (event.key === "Escape") setMoreOpen(false);
    }

    document.addEventListener("mousedown", closeMore);
    document.addEventListener("keydown", closeOnEsc);
    return () => {
      document.removeEventListener("mousedown", closeMore);
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  function closeMobileMenu() {
    setOpen(false);
  }

  function toggleSection(title: string) {
    setOpenSections((current) => ({ ...current, [title]: !current[title] }));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050506]/86 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="PORTADOR SOS homepage">
          <img src={site.logo} alt="PORTADOR SOS" className="h-12 w-auto max-w-[170px] object-contain md:h-14 md:max-w-[215px]" />
          <span className="hidden sm:block">
            <span className="block border-l border-white/15 pl-3 text-xs font-black uppercase tracking-[0.14em] text-white">SOS AIR CARGO</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-zinc-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <div className="relative" ref={moreRef}>
            <button type="button" onClick={() => setMoreOpen((value) => !value)} className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 transition hover:text-white" aria-expanded={moreOpen}>
              More <ChevronDown size={14} className={moreOpen ? "rotate-180 transition" : "transition"} />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 top-full z-50 mt-3 min-w-64 rounded-lg border border-white/10 bg-[#08090b]/96 p-2 shadow-2xl backdrop-blur-xl">
                {moreLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMoreOpen(false)} className="block rounded-md px-3 py-2 text-sm font-semibold text-zinc-300 hover:bg-white/[0.04] hover:text-white">
                  {item.label}
                </Link>
              ))}
              </div>
            ) : null}
          </div>
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <Link href={site.trackingUrl} className="inline-flex min-h-10 items-center rounded-md border border-white/15 px-3 text-sm font-bold text-white transition hover:border-[#e30613]/60 hover:bg-white/[0.04]">
            Track
          </Link>
          <Link href={site.phoneHref} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white transition hover:border-[#e30613]/60 hover:bg-white/[0.04]" aria-label="Call Operations">
            <PhoneCall size={16} />
          </Link>
          <Link href={whatsappHref} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-[#e30613] px-3 text-sm font-bold text-white transition hover:bg-[#ff1b28]">
            <MessageCircle size={16} />
            WhatsApp
          </Link>
        </div>
        <button className="rounded-md border border-white/15 p-2 text-white xl:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="fixed inset-x-0 top-16 z-50 h-[calc(100vh-64px)] border-t border-white/10 bg-[#06070a]/98 shadow-2xl backdrop-blur-xl xl:hidden">
          <div className="h-full overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
            <div className="container-shell grid gap-3 pb-40 pt-4">
              <div className="rounded-lg border border-[#e30613]/25 bg-[#e30613]/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a54]">When Time Cannot Wait</p>
                <p className="mt-2 text-sm leading-6 text-zinc-200">Same-day air cargo, NFO logistics, airport cargo, excess baggage, and 24x7 human operations.</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link href={whatsappHref} onClick={closeMobileMenu} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#e30613] text-sm font-bold text-white">
                    <MessageCircle size={16} />
                    WhatsApp
                  </Link>
                  <Link href={site.phoneHref} onClick={closeMobileMenu} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 text-sm font-bold text-white">
                    <PhoneCall size={16} />
                    Call
                  </Link>
                </div>
              </div>
              {mobileMenuSections.map((section) => {
                const expanded = !!openSections[section.title];
                return (
                  <div key={section.title} className="rounded-lg border border-white/10 bg-white/[0.03]">
                    <button
                      type="button"
                      onClick={() => toggleSection(section.title)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-black uppercase tracking-[0.14em] text-white"
                      aria-expanded={expanded}
                    >
                      {section.title}
                      <ChevronDown size={16} className={expanded ? "rotate-180 text-[#e30613] transition" : "text-[#e30613] transition"} />
                    </button>
                    {expanded ? (
                      <div className="grid gap-1 border-t border-white/10 p-2">
                        {section.links.map((item) => (
                          <Link key={`${section.title}-${item.href}-${item.label}`} href={item.href} onClick={closeMobileMenu} className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold leading-5 text-zinc-200 hover:bg-white/[0.05]">
                            <span>{item.label}</span>
                            <ChevronRight size={15} className="shrink-0 text-[#e30613]" />
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
