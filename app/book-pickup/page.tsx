import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, PackageCheck, Truck } from "lucide-react";
import { CopyPickupLink } from "@/components/copy-pickup-link";
import { site } from "@/lib/site";

export const metadata = { title: "Book Pickup", description: "Arrange a PORTADOR pickup as a guest or with your customer account. Prepare addresses, cargo details, documents and service requirements.", alternates: { canonical: "/book-pickup" } };
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
export default async function BookPickupPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const origin = pickupOrigin();
  const requestedService = (await searchParams).service === "SOS" ? "SOS" : undefined;
  const options = [
    { title: "Book Pickup", service: "STANDARD", text: "Plan collection for your boxes, baggage or cargo. Choose the service and timing that suit your shipment.", Icon: PackageCheck },
    { title: "Secure SOS Pickup", service: "SOS", text: "Request urgent collection for time-sensitive cargo. PORTADOR checks route and collection availability before confirmation.", Icon: Truck }
  ];
  const orderedOptions = requestedService ? [...options].reverse() : options;

  return (
    <main className="container-shell py-12 md:py-20">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e30613]">PORTADOR Secure Pickup</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Your shipment starts with one pickup.</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">Enter your addresses, select a service and declare your cargo. Your details stay together under one unique Pickup ID for Operations review.</p>
      <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200"><CheckCircle2 size={17} className="text-[#e30613]" aria-hidden="true" />No signup required for guest bookings</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {orderedOptions.map(({ title, service, text, Icon }) => (
          <section className={`flex flex-col rounded-xl border p-6 md:p-7 ${requestedService === service ? "border-[#e30613]/60 bg-[#e30613]/[0.07]" : "border-white/15 bg-white/[0.03]"}`} key={service}>
            <div className="flex items-center gap-3"><Icon size={23} className="text-[#e30613]" aria-hidden="true" /><h2 className="text-2xl font-semibold">{title}</h2></div>
            <p className="mt-3 flex-1 leading-7 text-zinc-300">{text}</p>
            {origin ? (
              <a className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#e30613] px-5 py-3 text-sm font-bold transition hover:bg-[#c80510]" href={`${origin}/secure-pickup?service=${service}`} aria-label={`Continue to ${title} without signup`}>Continue without signup <ArrowRight size={17} aria-hidden="true" /></a>
            ) : <p className="mt-6 rounded-md border border-white/10 p-3 text-sm text-zinc-400">Online secure booking is being prepared. Contact PORTADOR for pickup assistance.</p>}
          </section>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl text-sm leading-6 text-zinc-300">
          {origin ? <a className="inline-flex min-h-11 items-center gap-2 font-semibold text-white underline underline-offset-4" href={`${origin}/customer/secure-pickup${requestedService ? "?service=SOS" : ""}`}>Already a customer? Continue with your account <ArrowRight size={15} aria-hidden="true" /></a> : <Link href={site.phoneHref} className="inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4">Contact PORTADOR to arrange a pickup</Link>}
          <p>Collection and service timing are confirmed after PORTADOR reviews your request.</p>
        </div>
        <CopyPickupLink service={requestedService} />
      </div>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" aria-labelledby="pickup-preparation">
        <div>
          <h2 id="pickup-preparation" className="text-2xl font-semibold">A few details to have ready</h2>
          <ol className="mt-5 space-y-5">
            {[
              ["Pickup and delivery", "Separate addresses, pincodes, contact names and phone numbers. Add a map location if useful."],
              ["Your cargo", "Description, declared value, box count, and the packed length, width, height and approximate weight of every piece."],
              ["Documents and declarations", "Keep the requested business or individual KYC document ready and declare any restricted goods or special handling needs."]
            ].map(([title, text], index) => <li key={title} className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e30613]/40 text-xs font-bold text-[#e30613]">{index + 1}</span><div><h3 className="font-semibold text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p></div></li>)}
          </ol>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.025] p-6">
          <FileCheck2 size={23} className="text-[#e30613]" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-semibold">Review before you submit</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">The booking form asks you to review and accept the applicable policies separately. Read them before preparing your shipment.</p>
          <ul className="mt-4 space-y-3 text-sm font-semibold">
            {[
              ["Terms & Conditions", "/terms-conditions"],
              ["Booking & Refund Policy", "/booking-refund-policy"],
              ["Restricted Goods", "/restricted-goods"],
              ["Privacy Policy", "/privacy-policy"]
            ].map(([label, href]) => <li key={href}><Link href={href} className="inline-flex min-h-6 items-center gap-2 text-white underline underline-offset-4">{label}<ArrowRight size={14} aria-hidden="true" /></Link></li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
