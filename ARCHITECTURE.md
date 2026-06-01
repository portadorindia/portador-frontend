# PORTADOR Website Architecture

## Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide icons
- Vercel-ready metadata, sitemap, robots, and JSON-LD schema

## Route Map

- `/`
- `/services`
- `/services/[slug]`
- `/airports`
- `/airports/[slug]`
- `/cargo`
- `/cargo/[slug]`
- `/use-cases`
- `/use-cases/[slug]`
- `/comparisons`
- `/comparisons/[slug]`
- `/industries`
- `/industries/[slug]`
- `/cities`
- `/cities/[slug]`
- `/lanes`
- `/lanes/[slug]`
- `/knowledge-hub`
- `/knowledge-hub/[slug]`
- `/about`
- `/contact`
- `/tracking`
- `/faqs`
- `/sitemap.xml`
- `/robots.txt`

## Content Framework

The CMS-ready content model lives in `lib/site.ts`.

Each generated page includes:

- Hero section
- Extractable `.ai-snippet` summary block
- AI Overview-ready "What is" definition
- Trust and execution signals
- Benefits
- How it works
- Industry use cases
- Why not regular courier
- FAQ block
- CTA
- Sticky WhatsApp CTA
- Floating operations CTA
- Emergency callback module
- Shipment category quick selector
- Metadata
- FAQ schema
- Service schema where relevant
- Breadcrumb schema where relevant

## Brand System

The visual system uses a premium dark logistics dashboard style:

- Black and deep graphite base
- Controlled red accent `#E30613`
- Glass panels
- Aviation grid and runway motif
- Subtle Framer Motion lift/fade animation
- No orange palette
- No blue CTA buttons
- No courier/ecommerce parcel styling

## Scaling Pages

Add new services, cities, lanes, industries, or knowledge articles by appending entries in `lib/site.ts`. The App Router pages statically generate from those arrays.

The newest high-intent SEO families are:

- `airports`
- `cargoPages`
- `useCasePages`
- `comparisonPages`

## SEO Structure

SEO and AI-search features are centralized in:

- `app/layout.tsx` for global organization and website schema
- `lib/schema.ts` for Organization, WebSite, Breadcrumb, FAQ, and Service schema helpers
- `app/sitemap.ts` for generated route coverage
- `app/robots.ts` for crawler access
- route-level `generateMetadata` functions for dynamic page titles, descriptions, keywords, canonicals, and OpenGraph
