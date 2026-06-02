# support.portador.in Redirect Requirements

The PORTADOR.in Next.js app now includes host-specific 301 redirects for these legacy support URLs:

- `https://support.portador.in/register` -> `https://portador.in/`
- `https://support.portador.in/track-form` -> `https://portador.in/tracking`
- `https://support.portador.in/category/blog` -> `https://portador.in/knowledge-hub`
- `https://support.portador.in/portador-services` -> `https://portador.in/services`
- `https://support.portador.in/contact-us` -> `https://portador.in/contact`

These rules execute only if `support.portador.in` reaches the same Vercel project as `portador.in`.

If `support.portador.in` is controlled by a different Vercel project, hosting provider, or DNS target, add equivalent 301 redirects at that layer and keep the destinations above unchanged.
