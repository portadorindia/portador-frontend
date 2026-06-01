"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { legalLinks, moreNavItems, navItems, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
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
          <Link href={site.whatsapp} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-[#e30613] px-3 text-sm font-bold text-white transition hover:bg-[#ff1b28]">
            <MessageCircle size={16} />
            WhatsApp
          </Link>
        </div>
        <button className="rounded-md border border-white/15 p-2 text-white xl:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#08090b] shadow-2xl xl:hidden">
          <div className="container-shell grid gap-3 py-4">
            <div className="rounded-lg border border-[#e30613]/25 bg-[#e30613]/10 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a54]">When Time Cannot Wait</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">Same-day air cargo, NFO logistics, airport cargo, and live human operations.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link href={site.whatsapp} onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#e30613] text-sm font-bold text-white">
                  <MessageCircle size={16} />
                  WhatsApp
                </Link>
                <Link href={site.phoneHref} onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 text-sm font-bold text-white">
                  <PhoneCall size={16} />
                  Call
                </Link>
              </div>
            </div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/5">
                <span>{item.label}</span>
                <ChevronRight size={16} className="text-[#e30613]" />
              </Link>
            ))}
            {moreLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/5">
                <span>{item.label}</span>
                <ChevronRight size={16} className="text-[#e30613]" />
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
