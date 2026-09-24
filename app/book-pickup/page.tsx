import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = { title: "Book Pickup | PORTADOR", description: "Request a PORTADOR pickup as a guest or with your customer account." };
export const dynamic = "force-dynamic";
function pickupOrigin() {
  const raw = process.env.SECURE_PICKUP_OPS_ORIGIN;
  if (!raw) return null;
  try {
    const u = new URL(raw);
    if (u.username || u.password || u.pathname !== "/" || u.search || u.hash) return null;
    // A feature Preview must never send booking mutations into Production.
    if (process.env.VERCEL_ENV === "preview" && u.hostname === "ops.portador.in") return null;
    if (u.protocol !== "https:" && !(u.protocol === "http:" && ["localhost", "127.0.0.1"].includes(u.hostname) && process.env.NODE_ENV !== "production")) return null;
    return u.origin;
  } catch { return null; }
}
export default function BookPickupPage() {
  const origin = pickupOrigin();
  return <main className="container-shell py-16 md:py-24"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e30613]">PORTADOR Secure Pickup</p><h1 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">Your shipment starts with one pickup.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">Share pickup and delivery details, declare your cargo, and keep everything together under one Pickup ID.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-2">{[{ title: "Book Pickup", service: "STANDARD", text: "Plan collection for your boxes, baggage or cargo." }, { title: "Secure SOS Pickup", service: "SOS", text: "Request urgent collection for time-sensitive cargo. Operations will review availability." }].map(option => <section className="rounded-xl border border-white/15 bg-white/[0.03] p-7" key={option.service}><h2 className="text-2xl font-bold">{option.title}</h2><p className="mt-3 leading-7 text-zinc-300">{option.text}</p>{origin ? <a className="mt-6 inline-block rounded-md bg-[#e30613] px-5 py-3 font-bold" href={`${origin}/secure-pickup?service=${option.service}`}>Continue without signup</a> : <p className="mt-6 text-zinc-400">Online secure booking is being prepared.</p>}</section>)}</div>
    <div className="mt-8 max-w-3xl space-y-4 text-zinc-300"><p>Have ready: separate pickup and delivery pincodes, contact details, dimensions and approximate weight for each piece, declared value, and handling requirements.</p><p>The booking advance is ₹2,000 plus applicable GST, held for later adjustment against the final invoice. You will review the applicable commercial terms and amount before payment.</p>{origin ? <a className="inline-block font-bold text-white underline" href={`${origin}/customer/secure-pickup`}>Continue with your customer account</a> : <Link href={site.phoneHref} className="inline-block font-bold text-white underline">Contact PORTADOR to arrange a pickup</Link>}</div>
  </main>;
}
