import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Clock3, Globe2, Plane, Siren } from "lucide-react";

const services = [
  {
    title: "PORTADOR SOS",
    detail: "Same-Day / Next Flight Out",
    href: "/services/portador-sos",
    Icon: Siren
  },
  {
    title: "PORTADOR EXPRESS",
    detail: "Next / Second Business Day",
    href: "/services/portador-express",
    Icon: Clock3
  },
  {
    title: "PORTADOR BLACK",
    detail: "OBC / Hand Carry / Controlled Custody",
    href: "/services/portador-black",
    Icon: BriefcaseBusiness
  },
  {
    title: "PORTADOR GLOBAL",
    detail: "International Priority",
    href: "/services/portador-global",
    Icon: Globe2
  }
];

export function AviationHeroVisual() {
  return (
    <aside aria-labelledby="hero-service-selector-title" className="relative w-full max-w-[590px] overflow-hidden rounded-lg border border-white/10 bg-[#0b0c0f] shadow-[0_30px_90px_rgba(0,0,0,0.45)] lg:justify-self-end">
      <div className="airport-grid absolute inset-0 opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e30613] to-transparent" />
      <div className="absolute right-[-5rem] top-[-6rem] h-64 w-64 rounded-full bg-[#e30613]/[0.07] blur-3xl" />

      <div className="relative p-4 sm:p-5 lg:p-6">
        <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e30613]">PORTADOR services</p>
            <h2 id="hero-service-selector-title" className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-[1.75rem]">Choose by urgency</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">Select the service that best matches your deadline and shipment type.</p>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#e30613]/30 bg-[#e30613]/10 text-[#e30613]" aria-hidden="true">
            <Plane className="rotate-45" size={22} strokeWidth={1.7} />
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {services.map(({ title, detail, href, Icon }) => (
            <Link
              key={title}
              href={href}
              aria-label={`Explore ${title}: ${detail}`}
              className="group flex min-h-[112px] flex-col justify-between rounded-md border border-white/10 bg-black/45 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#e30613]/50 hover:bg-[#e30613]/[0.07] focus-visible:border-[#e30613]"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e30613]/25 bg-[#e30613]/10 text-[#e30613]">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <ArrowUpRight className="text-zinc-600 transition group-hover:text-[#e30613]" size={17} aria-hidden="true" />
              </span>
              <span className="mt-4 min-w-0">
                <span className="block text-sm font-bold text-white">{title}</span>
                <span className="mt-1 block text-xs leading-5 text-zinc-400">{detail}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
