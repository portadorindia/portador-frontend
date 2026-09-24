"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyPickupLink({ service }: { service?: "SOS" }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copyLink() {
    try {
      const url = new URL("/book-pickup", window.location.origin);
      if (service) url.searchParams.set("service", service);
      await navigator.clipboard.writeText(url.toString());
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div>
      <button type="button" onClick={copyLink} className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/20 px-4 text-sm font-semibold text-white transition hover:border-[#e30613]/60">
        {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {status === "copied" ? "Booking link copied" : "Copy booking link"}
      </button>
      <p role="status" className="mt-2 text-xs leading-5 text-zinc-400">
        {status === "failed" ? "Copy the page address from your browser to share this booking page." : status === "copied" ? "Paste the link into your message. No shipment details are included." : "Share this page with the person arranging the pickup."}
      </p>
    </div>
  );
}
