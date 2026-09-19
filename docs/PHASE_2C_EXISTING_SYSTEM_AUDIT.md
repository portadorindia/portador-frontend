# Phase 2C: Existing-System Audit And Verified Conversion Gaps

Audit date: 19 September 2026. Starting branch: `main`. Starting commit: `ef1d88a5d223d472836b522f673d5f8649a20129`. Actual GitHub main was checked and matched. The tracked working tree was clean. Existing untracked attachments, build output, dependencies and screenshots were preserved.

The inventory below was presented to the Founder before edits. Implementation is limited to `codex/phase-2c-trust-conversion`; no redesign, SEO/content rewrite, new lead system, billing system, tracking system or public claim is included.

## A. Existing System Inventory

| Capability | Existing implementation / files | Current status and potential gap | Action |
| --- | --- | --- | --- |
| Homepage CTAs | `app/page.tsx`, `components/ui.tsx` | Existing primary WhatsApp assistance and secondary OPS tracking. Repeated CTAs serve different sections of a long page, not separate quotation systems. | None |
| SOS / EXPRESS / BLACK / GLOBAL | `lib/site.ts`, `components/aviation-hero-visual.tsx`, `components/page-template.tsx`, `app/services/[slug]/page.tsx` | Four existing service families, working contact CTAs and internal links. | None |
| Heavy Cargo 50kg+ | Homepage `heavy-air-cargo` feature, QuickSelector, existing machine-parts page | Commercial focus clearly conditional, not a universal minimum. Existing WhatsApp click lacked a stable service-interest dimension. | Fix measurement only |
| Excess Baggage | Existing cargo/authority/location content and shared templates | Existing page, contact journey and FAQ links. No new page needed. | None |
| Enquiry and callback | `EmergencyCallback` in `components/ui.tsx`; homepage and `app/contact/page.tsx` | One reusable eight-field form. Validates Name/Mobile, shows live errors, opens WhatsApp with details. No callback-start measurement. | Fix measurement only |
| Tracking | `components/tracking-form.tsx`, `app/tracking/page.tsx`, `lib/site.ts` | Existing form URL-encodes AWB and hands off to OPS. Analytics records only entry type. | None |
| Call and WhatsApp | `lib/site.ts`, header/footer/UI/template/FAQ components | Central official number and shared prefill. Existing delegated click analytics. WhatsApp query text currently included in the click URL payload. | Fix payload minimization; preserve destinations |
| GTM and GA4 | `app/layout.tsx`, `lib/analytics.ts`, `components/analytics-events.tsx` | Correct protected IDs. GTM head/noscript and direct GA4 installation already exist. Existing route/page-view listeners. | None in installation; Founder admin review |
| Conversion analytics | Existing click events, `tracking_form_submit`, `quote_contact_form_submit` | Requested submit events already have equivalents. Callback submit needs an explicit handoff definition; service intents need structured context. | Enrich existing events; add only `enquiry_start` |
| Source / campaign attribution | Page-view pathname/query/location; callback source `PORTADOR.in` | Landing campaign information is available to GA4. No campaign persistence in WhatsApp or booking reconciliation. GA4 property configuration is not available in this repo. | Founder Decision |
| Forms / abuse protection | Browser-side validation; no lead POST endpoint, server action or lead database | No frontend submission service to add CAPTCHA/rate-limiting to. WhatsApp message still requires the customer to send it. Validation is not bot prevention. | None; review messaging abuse operationally |
| Mobile sticky controls | `components/header.tsx`, `components/ui.tsx`, `app/globals.css` | Scrollable focus-managed drawer; safe-area mobile call/WhatsApp bar; desktop SOS Desk and Back to Top. | Validate; no redesign |
| Routes / metadata | App Router templates and `lib/site.ts`, `lib/national-seo.ts` | 303 protected canonical routes plus the advisory; no missing architecture to recreate. | Validate only |
| Sitemap / robots / llms | `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts` | Existing generated crawl assets. | Preserve |
| Redirects | `next.config.ts`, `public/legacy-redirect-map.json` | 63 protected rules. Existing trailing-slash normalization is separate. | Preserve |
| Canonicals / JSON-LD | Route metadata, `lib/schema.ts`, shared templates | Existing self-references, organization/business/service/page/breadcrumb/FAQ schemas. | Validate only |
| FAQ authority | `lib/founder-faqs.ts`, `lib/faq-authority.ts`, `components/faq-engine.tsx` | 385-question source corpus; native disclosures render answer content in initial HTML. | Preserve byte-for-byte |
| Trust / security | Existing official channels, advisory page, policy source, Founder Claims Review | Advisory and verification already implemented; credentials are intentionally held pending evidence. | Founder Decision |
| Billing / quotations / CRM | None in frontend; tracking points to OPS | Swipe remains outside frontend scope. No PDF or billing feature is required here. | None |

## B. Claims Review

The existing `docs/FOUNDER_CLAIMS_REVIEW_PHASE_2B.md` is unchanged and remains the governing evidence checklist. Repository evidence is not independent verification of operational performance.

| Claim group | Classification | Evidence / decision required |
| --- | --- | --- |
| Official contact details, tracking destination, visible service families | Supported by the approved implementation | Existing Founder-approved source configuration; no new external corporate verification claimed. |
| Incorporation/date, GST, IEC, MSME/Udyam, DPIIT, ISO and other certifications | Needs evidence + Founder approval | Current certificate/registration, ownership, validity, permitted wording and approved identifiers. Do not publish from filenames or presentation decks alone. |
| 50+ connections, 5000+ pin codes, 24x7 availability | Needs current evidence | Retained Founder-supplied claims, not newly substantiated by code. Keep current coverage and staffing evidence. |
| Same-day, NFO, fixed hourly/TAT promises or guarantees | Needs wording review + Founder approval | Protected FAQ groups 1-3 in the existing review include hard timing/cutoff claims. Confirm eligible lanes, exclusions and written SLA/remedies before editing. |
| Heavy Cargo 50kg+ | Supported as approved positioning only | Homepage explicitly calls this a commercial focus, not a universal minimum. Expansion to a contractual rule requires approval. |
| GPS/live tracking, API/ERP integrations, POD format and timing | Needs evidence + wording review | Frontend proves an OPS handoff only. It cannot substantiate all shipment-level tracking/POD capabilities. Confirm scope in OPS without altering it. |
| Airline/DG/battery acceptance | Needs compliance review + Founder approval | Confirm classification, packing, documentation and acceptance exceptions. Preserve restricted-goods policy. |
| Insurance and liability | Approved central policy exists; service/insurer claims need evidence | Preserve the existing INR 2,500 policy and Delhi jurisdiction. Insurer scope, exclusions and settlement claims need approved supporting terms. No legal text changed. |
| Customs and international scope | Needs evidence + Founder approval | Countries, goods, broker scope, duties and customer responsibilities need confirmation. No customs outcome guaranteed by this work. |
| Airport access, pickup, service availability | Needs current operational evidence | Permissions and feasibility vary; retain conditional booking-time confirmation. |

No claim was newly published, certified or silently rewritten. The source FAQ remains protected even where the Founder review recommends eventual editorial correction.

## C. Conversion Findings And Limited Corrections

- Heavy Cargo: existing working WhatsApp CTA; added only `data-analytics-service="heavy_air_cargo"` to its existing section. No layout/copy/destination change, new page or new lead event.
- SOS, EXPRESS, BLACK, GLOBAL and main Excess Baggage page: existing call/WhatsApp events now include a fixed `service_interest` determined by the current service page. Generic homepage or machine-parts visits are not automatically classified as SOS or Heavy Cargo leads.
- Callback: existing start/validation/handoff UI is retained. Added one `enquiry_start` on first non-empty edit per mount. Existing `quote_contact_form_submit` now carries page path and `conversion_stage=whatsapp_handoff`; it is not proof the message was sent, received, booked or paid.
- Privacy: WhatsApp query text and fragments are excluded from click analytics URLs. Actual CTA links and message payloads are unchanged. No AWB, name, mobile or form-field value is added to events.
- Tracking: existing submit event and OPS handoff already satisfy the requested journey. No duplicate tracking logic/event added.
- Success/error states: native required validation, live error messages and the explanation that WhatsApp opens with a ready-to-send request already exist. A frontend-only handoff cannot truthfully show a received-booking success state.
- Repeated footer/sticky/page CTAs are intentional entry points, not duplicated capabilities. The requested Phase 2B design remains unchanged.
- Campaign-to-booking reconciliation, stricter phone-format policy, response SLAs and GA4 key-event ownership remain Founder decisions, not speculative fixes.

## D. Analytics Event Map

| Requested name | Implemented equivalent | Phase 2C action |
| --- | --- | --- |
| call_click | `call_click` | Reused; service-interest context where known. |
| whatsapp_click | `whatsapp_click` | Reused; context added, query text excluded. |
| tracking_submit | `tracking_form_submit` | No change; AWB excluded. |
| enquiry_start | No prior equivalent in repo | Only new event, once on callback edit. |
| enquiry_submit | `quote_contact_form_submit` | Reused; no parallel event. |
| callback_submit | Same event, `form_name=emergency_callback` | Reused; handoff stage made explicit. |
| heavy_cargo_lead | `whatsapp_click` + `service_interest=heavy_air_cargo` | Filter existing event; no new lead event. |
| sos_lead | `call_click` / `whatsapp_click` + `service_interest=portador_sos` | Filter existing event; no new lead event. |

Existing `page_view`, `airport_page_visit`, `city_page_visit` and `route_page_visit` behavior is unchanged. GTM remains `GTM-T39648NN`; GA4 remains `G-9EJGWW5DXM`.

The public GTM script returned 200 and exposed no literal GA4 measurement ID/GA4 tag type in the inspected payload. This does not prove private workspace or GA4 configuration. No GTM publishing, key-event creation, environment edit or additional tag installation was attempted. Direct gtag remains the existing delivery owner; documentation now explicitly warns against adding duplicate GTM senders. GA4 reporting, Enhanced Measurement and key-event setup require an administrator's read-only review.

Attribution boundary: existing URL/query reporting is retained, without new cookies, session storage, user identifiers or WhatsApp campaign parameters. Operations-side source attribution needs a Founder-approved reconciliation approach in the existing systems, not a new frontend CRM.

## E. Founder-Required Authentic Assets

The existing `docs/VISUAL_ASSET_SPECIFICATIONS_PHASE_2B.md` remains unchanged. Still outstanding:

1. Actual airport cargo operation / aircraft hold / terminal cargo hero. Master 2400 x 1500 (8:5), left-side copy space. AVIF target <=220 KB and WebP <=320 KB.
2. Secured industrial consignment / pallet / ULD / machinery-component image. Master 2000 x 1333 (3:2); cargo and safe packing visible. AVIF <=180 KB, WebP <=280 KB.
3. Authentic BLACK/OBC accompanied-cargo image. Master 1800 x 1200; no identifiable customer documents or boarding passes; AVIF/WebP.
4. Authentic airport infrastructure photo or licensed non-political aviation network visual. Master 2400 x 1350 (16:9), suitable mobile crop.

For each: original high-resolution source, exact subject/location/context, rights holder, written commercial-web permission, required property/person releases, and Founder approval of the final crop. No airline/customer/partner logo use without approval. No stock/AI placeholders or presentation-deck extractions added. The official PORTADOR logo remains untouched.

## F. Validation And Deployment

| Check | Result |
| --- | --- |
| `npm audit --json` | Zero vulnerabilities; no dependency or lockfile changes. |
| `npm run lint` | Pass: zero errors, one existing inline-GA warning at `app/layout.tsx:64`. |
| `npm run build` | Pass: 362 generated build entries; shared first-load bundle remains 103 kB. |
| `node --test scripts/validate-conversion-events.mjs` | All 10 tests pass: existing event reuse, one-time start, service attribution, privacy payloads, invalid/valid callback behavior and encoded OPS handoff. Synthetic in-memory fixtures do not send messages or analytics requests. |
| Phase 2A validator | 303 protected canonical routes, 304 unique sitemap URLs, 63 redirect rules, 385 source FAQs, 304 canonical tags and 304 JSON-LD pages pass. Zero broken internal links; all four security headers preserved. |
| Local production HTTP audit | All 304 sitemap URLs return 200. All 63 redirect chains resolve to 200. 58 initial responses are 301; five existing trailing-slash 308 normalizations remain unchanged. Support-host rules tested with the Host header, not public DNS changes. |
| Protected file comparison | No changes to logo/assets, CSS, header/footer, tracking form, layout/tags, routes, sitemap, robots, llms, redirects, content datasets, policy/FAQ/schema sources or the existing Founder Claims/Asset Requirements documents. |

Browser QA used the local production build at 100% page zoom; this is viewport emulation, not physical-device certification.

| Viewport | Result |
| --- | --- |
| 390 x 844 | Homepage/logo, hero, CTA hierarchy and sticky bar render without page-wide horizontal overflow; one H1; both logo images load. Drawer focus starts at Close; Shift+Tab reaches the final legal link above the sticky bar; Escape restores focus and body scrolling. |
| 430 x 932 | Hero/CTAs remain contained. Callback fields retain visible labels and required-field focus; sticky controls do not remove access to form content. No horizontal overflow. |
| 768 x 1024 | Tablet hero and four-service selector remain readable; no horizontal overflow. Open drawer closes on resizing to desktop and restores body scrolling. |
| 1440 x 900 | Approved desktop hero, Heavy Cargo CTA and focus indicators remain intact. SOS Desk focuses Minimize, closes on Escape and restores focus. Contact form exposes all eight labels. No horizontal overflow. |

Additional browser checks: callback invalid-mobile error remains visible and live; a synthetic tracking reference navigates to `https://ops.portador.in/track/PORTADOR-UAT-NOT-A-SHIPMENT` and receives the expected no-record result. No OPS data or code was changed. No browser warnings/errors were observed on the reviewed local homepage/contact journey. No real customer enquiry, call or WhatsApp message was sent.

Only seven files are changed: `app/page.tsx` (one non-visual analytics attribute), `components/analytics-events.tsx`, `components/ui.tsx`, `lib/analytics.ts`, `ANALYTICS_TRACKING.md`, this audit, and `scripts/validate-conversion-events.mjs`.

One feature-branch Preview will be created from the validated commit. Its URL and readiness will be reported in the final handoff. No merge or Production deployment is authorized in Phase 2C. No existing capability was duplicated, and no Production, DNS, environment, protection or billing settings were changed.
