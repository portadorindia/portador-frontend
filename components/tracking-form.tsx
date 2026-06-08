"use client";

import { Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { pushAnalyticsEvent } from "@/lib/analytics";
import { site } from "@/lib/site";

export function TrackingForm() {
  const [awb, setAwb] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trackingNumber = awb.trim();
    const destination = trackingNumber ? `${site.trackingUrl}/${encodeURIComponent(trackingNumber)}` : site.trackingUrl;
    pushAnalyticsEvent("tracking_form_submit", {
      has_awb: Boolean(trackingNumber),
      awb_length: trackingNumber.length,
      destination
    });
    window.location.href = destination;
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel mx-auto grid max-w-2xl gap-4 rounded-xl p-6 sm:grid-cols-[1fr_auto]">
      <label className="sr-only" htmlFor="tracking">AWB or tracking number</label>
      <input
        id="tracking"
        name="awb"
        value={awb}
        onChange={(event) => setAwb(event.target.value)}
        placeholder="Enter AWB / Tracking Number"
        className="min-h-12 rounded-md border border-white/10 bg-black/30 px-4 text-white outline-none placeholder:text-zinc-600 focus:border-[#e30613]/60"
      />
      <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#e30613] px-5 text-sm font-bold text-white transition hover:bg-[#ff1b28]">
        <Search size={17} />
        Track
      </button>
    </form>
  );
}
