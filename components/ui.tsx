"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUp, Headphones, MessageCircle, Minus, PhoneCall, X } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import { pushAnalyticsEvent } from "@/lib/analytics";
import { site, whatsappHref } from "@/lib/site";

export function Section({
  eyebrow,
  title,
  children,
  className = ""
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container-shell">
        <div className="mb-8 max-w-4xl md:mb-12">
          {eyebrow ? <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#e30613]">{eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold leading-[1.12] text-white md:text-[2.75rem]">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#e30613] px-5 text-center text-sm font-bold text-white shadow-[0_12px_32px_rgba(227,6,19,0.2)] transition hover:bg-[#c80510]"
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-5 text-center text-sm font-bold text-white transition hover:border-[#e30613]/50 hover:bg-[#e30613]/10"
    >
      {children}
    </Link>
  );
}

export function MotionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className={`glass-panel rounded-lg p-6 transition ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CTA({ title = "When Time Cannot Wait, speak to operations now.", text }: { title?: string; text?: string }) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-lg border border-[#e30613]/25 bg-[#0a0b0d] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.35)] md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">24x7 operations</p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">{text ?? "Share origin, destination, cargo details, deadline, and any battery or dangerous goods information. PORTADOR SOS will check the fastest feasible air-linked support."}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <PrimaryButton href={site.phoneHref}>
                <PhoneCall size={17} />
                Speak To Operations Now
              </PrimaryButton>
              <SecondaryButton href={whatsappHref}>
                <MessageCircle size={17} />
                WhatsApp Shipment Details
              </SecondaryButton>
              <SecondaryButton href={whatsappHref}>
                <Headphones size={17} />
                Escalate Urgent Shipment
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StickyConversionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#050506]/92 px-2.5 py-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="grid min-w-0 grid-cols-2 gap-2">
        <Link href={site.phoneHref} className="inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-md bg-[#e30613] px-2 text-xs font-bold text-white min-[400px]:text-sm">
          <PhoneCall size={16} className="shrink-0" />
          Call Now
        </Link>
        <Link href={whatsappHref} className="inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-md border border-white/15 bg-white/[0.04] px-2 text-xs font-bold text-white min-[400px]:text-sm">
          <MessageCircle size={16} className="shrink-0" />
          WhatsApp Operations
        </Link>
      </div>
    </div>
  );
}

export function FloatingOperationsCTA() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-6 right-6 z-[49] hidden xl:block"
    >
      {open ? (
        <div className="w-[min(300px,calc(100vw-32px))] rounded-lg border border-[#e30613]/30 bg-[#090a0c]/95 p-3 shadow-[0_0_24px_rgba(227,6,19,0.16)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e30613]">PORTADOR Operations Desk</p>
              <p className="mt-1 text-xs text-zinc-400">When Time Cannot Wait.</p>
            </div>
            <div className="flex gap-1">
              <button type="button" onClick={() => setOpen(false)} className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-zinc-300" aria-label="Minimize SOS desk">
                <Minus size={16} />
              </button>
              <button type="button" onClick={() => setOpen(false)} className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-zinc-300" aria-label="Close SOS desk">
                <X size={16} />
              </button>
            </div>
          </div>
          <div className="mt-3 grid gap-2">
            <Link href={whatsappHref} className="inline-flex min-h-10 items-center justify-between rounded-md bg-[#e30613] px-3 text-sm font-bold text-white">
              Urgent Shipment
              <MessageCircle size={16} />
            </Link>
            <Link href={site.trackingUrl} className="inline-flex min-h-10 items-center justify-between rounded-md border border-white/15 px-3 text-sm font-bold text-white">
              Tracking Support
              <PhoneCall size={16} />
            </Link>
            <Link href="/contact" className="inline-flex min-h-10 items-center justify-between rounded-md border border-white/15 px-3 text-sm font-bold text-white">
              Commercial Inquiry
              <Headphones size={16} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-1">
          <button type="button" onClick={() => setOpen(true)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e30613]/35 bg-[#e30613] text-white shadow-[0_0_22px_rgba(227,6,19,0.24)]" aria-label="Open SOS Desk">
            <Headphones size={18} />
          </button>
          <span className="rounded-full border border-white/10 bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">SOS Desk</span>
        </div>
      )}
    </motion.div>
  );
}

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 520);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-[49] hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white shadow-[0_0_20px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-[#e30613]/50 hover:text-[#e30613] xl:inline-flex"
      aria-label="Back to top"
    >
      <ArrowUp size={17} />
    </button>
  );
}

export function EmergencyCallback() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    origin: "",
    destination: "",
    boxes: "",
    weight: "",
    commodity: "",
    urgency: ""
  });
  const [error, setError] = useState("");

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const name = form.name.trim();
    const mobile = form.mobile.trim();
    const mobileDigits = mobile.replace(/\D/g, "");

    if (!name || mobileDigits.length < 7) {
      setError("Please enter your name and a valid mobile number.");
      return;
    }

    const message = [
      "New PORTADOR Callback Request",
      "",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Origin: ${form.origin.trim()}`,
      `Destination: ${form.destination.trim()}`,
      `Boxes: ${form.boxes.trim()}`,
      `Approx Weight: ${form.weight.trim()}`,
      `Commodity: ${form.commodity.trim()}`,
      `Urgency: ${form.urgency.trim()}`,
      "",
      "Source: PORTADOR.in"
    ].join("\n");

    const whatsappBase = site.whatsapp || "https://wa.me/919818038779";
    pushAnalyticsEvent("quote_contact_form_submit", {
      form_name: "emergency_callback",
      has_origin: Boolean(form.origin.trim()),
      has_destination: Boolean(form.destination.trim()),
      has_weight: Boolean(form.weight.trim()),
      has_commodity: Boolean(form.commodity.trim())
    });
    window.location.href = `${whatsappBase}?text=${encodeURIComponent(message)}`;
  }

  const fields = [
    { key: "name" as const, label: "Name", placeholder: "Name", required: true },
    { key: "mobile" as const, label: "Mobile Number", placeholder: "Mobile Number", required: true, inputMode: "tel" as const },
    { key: "origin" as const, label: "Origin City", placeholder: "Origin City" },
    { key: "destination" as const, label: "Destination City", placeholder: "Destination City" },
    { key: "boxes" as const, label: "Number of Boxes", placeholder: "Number of Boxes", inputMode: "numeric" as const },
    { key: "weight" as const, label: "Approx Weight", placeholder: "Approx Weight" },
    { key: "commodity" as const, label: "Commodity / Product", placeholder: "Commodity / Product" },
    { key: "urgency" as const, label: "Urgency / Delivery Timeline", placeholder: "Urgency / Delivery Timeline" }
  ];

  return (
    <section id="callback" className="py-16">
      <div className="container-shell">
        <div className="glass-panel rounded-xl p-6 md:p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">Emergency callback</p>
          <h2 className="text-2xl font-semibold text-white md:text-4xl">Need operations to call back now?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            Share the basics. PORTADOR SOS will open WhatsApp with your request ready to send.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {fields.map((field) => (
              <div key={field.key}>
                <label className="sr-only" htmlFor={`callback-${field.key}`}>{field.label}</label>
                <input
                  id={`callback-${field.key}`}
                  aria-label={field.label}
                  aria-invalid={Boolean(error) && field.required ? true : undefined}
                  aria-describedby={error && field.required ? "callback-form-error" : undefined}
                  value={form[field.key]}
                  onChange={(event) => updateField(field.key, event.target.value)}
                  placeholder={field.placeholder}
                  required={field.required}
                  inputMode={field.inputMode}
                  className="min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#e30613]/60"
                />
              </div>
            ))}
            <div aria-live="assertive" aria-atomic="true" className="md:col-span-2 xl:col-span-3">
              {error ? <p id="callback-form-error" role="alert" className="text-sm font-semibold text-[#e30613]">{error}</p> : null}
            </div>
            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#e30613] px-5 text-sm font-bold text-white transition hover:bg-[#c80510] md:col-span-2 xl:col-span-1">
              <MessageCircle size={16} />
              Request Callback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function QuickSelector() {
  const categories = [
    { title: "Machine Parts", detail: "Breakdown support" },
    { title: "Legal Documents", detail: "Tender & legal papers" },
    { title: "Laptop Shipping", detail: "IT equipment" },
    { title: "Dangerous Goods, Batteries & Restricted Cargo", detail: "Approval review" },
    { title: "Excess Baggage", detail: "Airport pickup & drop" },
    { title: "Medical Equipment", detail: "Surgical equipment" },
    { title: "AOG Cargo", detail: "Aviation spares" },
    { title: "Perishables", detail: "Food cargo" },
    { title: "Temperature Controlled Cargo", detail: "Dry ice & frozen cargo" },
    { title: "High-Value Cargo", detail: "Premium equipment" },
    { title: "Hand Carry / OBC", detail: "4-7 hours option" },
    { title: "Other Urgent Cargo", detail: "Share cargo details. PORTADOR will check service availability." }
  ];
  return (
    <section className="py-14">
      <div className="container-shell">
        <div className="glass-panel rounded-xl p-6 md:p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#e30613]">Shipment category</p>
          <h2 className="text-2xl font-semibold text-white md:text-4xl">Tell Us What You Need To Move</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.title} href={whatsappHref} className="flex min-h-[78px] flex-col justify-center rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold leading-5 text-zinc-200 transition hover:border-[#e30613]/50 hover:bg-[#e30613]/10">
                <span>{category.title}</span>
                <span className="mt-1 line-clamp-2 text-xs font-normal leading-5 text-zinc-500">{category.detail}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
