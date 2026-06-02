import type { LegalPage as LegalPageModel } from "@/lib/legal";
import { site, whatsappHref } from "@/lib/site";

export function LegalPage({ page }: { page: LegalPageModel }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${site.url}/${page.slug}`,
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      logo: `${site.url}${site.logo}`,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country
      }
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="container-shell">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#e30613]">PORTADOR SOS Legal</p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300">{page.description}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Effective {page.updated}</p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div className="grid gap-5">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 md:p-6">
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                {section.body ? <p className="mt-3 text-sm leading-7 text-zinc-300">{section.body}</p> : null}
                {section.items ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-300">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <aside className="rounded-lg border border-[#e30613]/25 bg-[#e30613]/10 p-5 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a54]">Operations Contact</p>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-zinc-200">
              <a className="font-semibold text-white transition hover:text-[#ff4a54]" href={site.emailHref}>{site.email}</a>
              <a className="font-semibold text-white transition hover:text-[#ff4a54]" href={site.phoneHref}>{site.phone}</a>
              <a className="font-semibold text-white transition hover:text-[#ff4a54]" href={whatsappHref}>WhatsApp Operations</a>
              <p className="text-zinc-400">{site.address.street}, {site.address.city} {site.address.postalCode}, {site.address.country}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
