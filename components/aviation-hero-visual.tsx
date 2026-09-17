import { Boxes, BriefcaseBusiness, Clock3, Globe2, Headphones, Plane, ShieldCheck, Siren } from "lucide-react";

const serviceFamilyItems = [
  { label: "PORTADOR SOS", detail: "Same-Day + NFO", Icon: Siren },
  { label: "PORTADOR EXPRESS", detail: "Next / second business day", Icon: Clock3 },
  { label: "PORTADOR BLACK", detail: "OBC / hand carry", Icon: BriefcaseBusiness },
  { label: "PORTADOR GLOBAL", detail: "International priority", Icon: Globe2 }
];

export function AviationHeroVisual() {
  return (
    <div className="relative w-full max-w-[590px] overflow-hidden rounded-lg border border-white/10 bg-[#0b0c0f] shadow-[0_30px_90px_rgba(0,0,0,0.45)] lg:justify-self-end">
      <div className="absolute inset-0 airport-grid opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e30613] to-transparent" />

      <div className="relative p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e30613]">PORTADOR service control</p>
            <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Time-Critical Cargo Control</h2>
          </div>
          <div className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#e30613]/35 bg-[#e30613]/10 px-3 py-2 text-xs font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-[#e30613] shadow-[0_0_12px_rgba(227,6,19,0.75)]" />
            Live desk
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
          <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-md border border-white/10 bg-black/45">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,6,19,0.14),transparent_52%)]" />
            <div className="absolute h-52 w-52 rounded-full border border-white/[0.07]" />
            <div className="absolute h-36 w-36 rounded-full border border-[#e30613]/20" />
            <div className="absolute h-20 w-20 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[78%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#e30613]/35 bg-[#08090b] shadow-[0_0_42px_rgba(227,6,19,0.2)]">
              <Plane className="rotate-45 text-[#e30613]" size={44} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-md border border-white/10 bg-black/70 px-3 py-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Assistance status</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white">
                <Headphones size={14} className="text-[#e30613]" />
                Human-led
              </span>
            </div>
          </div>

          <div className="grid content-start gap-2">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Service families</p>
            {serviceFamilyItems.map(({ label, detail, Icon }) => (
              <div key={label} className="flex min-h-[48px] items-center gap-3 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#e30613]/25 bg-[#e30613]/10 text-[#e30613]">
                  <Icon size={16} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white">{label}</p>
                  <p className="mt-0.5 text-[10px] leading-4 text-zinc-500">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 rounded-md border border-white/10 bg-white/[0.025]">
          <div className="px-3 py-3 text-center">
            <Boxes className="mx-auto text-[#e30613]" size={17} aria-hidden="true" />
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-300">Cargo-led</p>
          </div>
          <div className="px-3 py-3 text-center">
            <ShieldCheck className="mx-auto text-[#e30613]" size={17} aria-hidden="true" />
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-300">Feasibility first</p>
          </div>
          <div className="px-3 py-3 text-center">
            <Headphones className="mx-auto text-[#e30613]" size={17} aria-hidden="true" />
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-300">Human support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
