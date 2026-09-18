import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { portadorLegalPolicy } from "@/lib/policy";

export function LiabilityDisclosure({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <div className={`rounded-lg border border-white/10 bg-white/[0.025] ${compact ? "p-4" : "p-5 md:p-6"} ${className}`}>
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 shrink-0 text-[#e30613]" size={compact ? 18 : 21} aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">Liability and jurisdiction</p>
          <p className={`mt-2 text-zinc-400 ${compact ? "text-xs leading-5" : "text-sm leading-7"}`}>
            {compact ? portadorLegalPolicy.shortDisclosure : portadorLegalPolicy.fullDisclosure}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-zinc-300">
            <Link href="/terms-conditions" className="transition hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/booking-refund-policy" className="transition hover:text-white">Booking &amp; Refund Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LiabilitySection() {
  return (
    <section className="py-6 md:py-8" aria-label="Liability and jurisdiction notice">
      <div className="container-shell">
        <LiabilityDisclosure />
      </div>
    </section>
  );
}
