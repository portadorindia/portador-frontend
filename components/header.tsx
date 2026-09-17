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
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);
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

    const drawer = mobileDrawerRef.current;
    const menuButton = mobileMenuButtonRef.current;
    const focusableSelector = "a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])";
    const focusFrame = window.requestAnimationFrame(() => {
      drawer?.querySelector<HTMLElement>("[data-mobile-menu-focus]")?.focus();
    });

    function handleDrawerKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawer) return;
      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(focusableSelector)).filter((element) => !element.hasAttribute("disabled"));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleDrawerKeydown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleDrawerKeydown);
      document.body.style.overflow = originalOverflow;
      window.requestAnimationFrame(() => menuButton?.focus());
    };
  }, [open]);

  function closeMobileMenu() {
    setOpen(false);
  }

  function toggleSection(title: string) {
    setOpenSections((current) => ({ ...current, [title]: !current[title] }));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050506]/94 shadow-[0_10px_35px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <div className="container-shell flex h-[88px] items-center justify-between md:h-[96px]">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="PORTADOR SOS homepage">
          <span className="block h-[88px] w-[132px] shrink-0 md:h-[96px] md:w-[144px]">
            <img src={site.logo} alt="PORTADOR SOS" className="h-full w-full object-contain" />
          </span>
          <span className="hidden sm:block xl:hidden 2xl:block">
            <span className="block border-l border-white/15 pl-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-300">Time-Critical Logistics</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium text-zinc-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <div className="relative" ref={moreRef}>
            <button type="button" onClick={() => setMoreOpen((value) => !value)} className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-zinc-300 transition hover:text-white" aria-expanded={moreOpen}>
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
          <Link href={whatsappHref} className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-md bg-[#e30613] px-3.5 text-sm font-bold text-white transition hover:bg-[#c80510]">
            <MessageCircle size={16} />
            Urgent help
          </Link>
        </div>
        <button
          ref={mobileMenuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div
          ref={mobileDrawerRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 top-[88px] z-50 h-[calc(100dvh-88px)] border-t border-white/10 bg-[#06070a]/98 shadow-2xl backdrop-blur-xl md:top-[96px] md:h-[calc(100dvh-96px)] xl:hidden"
        >
          <div className="h-full overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
            <div className="container-shell flex justify-end pt-3">
              <button
                type="button"
                data-mobile-menu-focus
                onClick={closeMobileMenu}
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/15 px-3 text-sm font-bold text-white"
              >
                Close menu <X size={16} />
              </button>
            </div>
            <div className="container-shell grid gap-3 pb-[calc(10rem+env(safe-area-inset-bottom))] pt-3">
              <div className="rounded-lg border border-[#e30613]/25 bg-[#e30613]/[0.07] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e30613]">Time-Critical Air Logistics</p>
                <p className="mt-2 text-sm leading-6 text-zinc-200">PORTADOR SOS, EXPRESS, BLACK, and GLOBAL for urgent domestic, planned air-priority, controlled-custody, and international movements.</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link href={whatsappHref} onClick={closeMobileMenu} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#e30613] text-sm font-bold text-white">
                    <MessageCircle size={16} />
                    Get help
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
