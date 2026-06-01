"use client";

import { Clock3, Headphones, PackageCheck, Plane, ShieldCheck } from "lucide-react";

const supportItems = [
  { label: "Time-Bound Cargo", Icon: Plane },
  { label: "Last-Minute Cargo", Icon: PackageCheck },
  { label: "10-16 Hours Delivery", Icon: ShieldCheck },
  { label: "30-60 Minutes Pickup", Icon: Clock3 },
  { label: "Live Human Support", Icon: Headphones }
];

export function AviationHeroVisual() {
  return (
    <div className="relative w-full max-w-[610px] overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(18,19,23,0.94),rgba(5,5,6,0.9))] p-4 shadow-[0_0_34px_rgba(227,6,19,0.12)] lg:justify-self-end">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(227,6,19,0.15),transparent_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
      <div className="relative z-10 grid gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-base font-black uppercase tracking-[0.14em] text-white">Premium Air Cargo Support</p>
            <p className="mt-1 max-w-sm text-xs font-semibold leading-5 text-zinc-400">
              Urgent shipment support for air-linked cargo movement across India.
            </p>
          </div>
          <div className="rounded-md border border-[#e30613]/35 bg-[#e30613]/10 px-3 py-1.5 text-sm font-black text-[#e30613]">24x7</div>
        </div>

        <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-white/10 bg-black/45">
          <div className="absolute left-1/2 top-1/2 h-[214px] w-[214px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e30613]/18" />
          <div className="absolute left-1/2 top-1/2 h-[148px] w-[148px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e30613]/24 bg-[#e30613]/5" />
          <div className="absolute left-1/2 top-1/2 h-[2px] w-[78%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#e30613]/45 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[72%] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent" />
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e30613]/30 bg-black/70 shadow-[0_0_42px_rgba(227,6,19,0.2)]">
            <Plane className="rotate-45 text-[#e30613]" size={42} strokeWidth={1.8} />
          </div>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">
            {["Air-linked", "Priority", "Human-led"].map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {supportItems.map(({ label, Icon }) => (
            <div key={label} className="flex min-h-[68px] min-w-0 flex-col items-center justify-center rounded-md border border-white/10 bg-black/45 p-2 text-center">
              <Icon className="text-[#e30613]" size={18} />
              <p className="mt-1.5 text-[8.5px] font-bold uppercase leading-[1.18] tracking-0 text-zinc-200">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
