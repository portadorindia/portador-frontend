# Phase 2B Founder UAT Continuation

Review date: 18 September 2026.

## Scope and starting state

- Branch: `codex/phase-2b-visual-refresh`.
- Starting commit: `b5ab8c1a96763b113dbc413158248039e54dbdf2`.
- Starting tracked working tree was clean; prior Phase 2B work was present.
- Existing untracked attachments, screenshots, dependencies, and build output were not reset, deleted, or staged.
- Shared Round 2 Preview reviewed: https://portador-frontend-git-code-426580-sanjeev-kumar-antals-projects.vercel.app/
- Corrections were checked using a local production build, not deployed to Production.

## Confirmed defects and corrections

| Finding | Reproduction | Correction | File |
| --- | --- | --- | --- |
| Mobile drawer leaves page scrolling locked after a desktop resize | Open drawer at 768px, resize to 1440px. Drawer is hidden by CSS but body retains `overflow: hidden`. | Close drawer at the existing 1280px desktop breakpoint; restore body scrolling; do not return focus to a hidden menu trigger. | `components/header.tsx` |
| SOS Desk loses keyboard focus and cannot be dismissed with Escape | Open desktop SOS Desk. Trigger is removed, focus falls to the document, and Escape has no effect. | Focus the panel's first control, close on Escape, return focus on close/minimize, and label the panel/trigger relationship. | `components/ui.tsx` |
| Callback fields depend on faint placeholders for visible labels | Fields have screen-reader-only labels. After typing, the field purpose is no longer visible; placeholder text is faint against the dark background. | Keep all eight labels persistently visible and brighten callback/tracking placeholder text within the existing neutral palette. | `components/ui.tsx`, `components/tracking-form.tsx` |

No layout redesign, new service claim, route change, analytics change, form destination change, tracking logic change, or new dependency was introduced.

## Browser review

Browser viewport emulation was used at 100% page zoom. This is not a physical-device or cross-browser certification.

| Viewport | Findings after correction |
| --- | --- |
| 390 x 844 | Header/logo, stacked hero, CTA hierarchy, compact sticky controls, callback labels, airport page, and drawer reviewed. No page-wide horizontal overflow. Drawer final legal link remains visible; Escape restores trigger focus. |
| 430 x 932 | Wider mobile hero, Heavy Air Cargo, cargo grid, coverage, industries, comparison scroller, FAQs, final CTA, footer, contact form, security notice, and city template reviewed. No page-wide horizontal overflow. |
| 768 x 1024 | Tablet hero/service selector, navigation, knowledge article, and industry template reviewed. Drawer-to-desktop transition now restores page scrolling. |
| 1440 x 900 | Desktop header, full hero, four service families, forms, footer, route template, and SOS Desk reviewed. Hero fits within the first viewport; no horizontal overflow. |

Additional checks:

- SOS, EXPRESS, BLACK, and GLOBAL links resolve and retain their existing service hierarchy.
- Heavy Air Cargo remains a 50kg+ commercial focus, not a new master service or universal technical minimum.
- Homepage contains one H1 and 56 native FAQ disclosure items. Collapsed FAQ answer content remains in the HTML.
- Native FAQ expansion and the comparison table's keyboard-accessible horizontal scrolling work.
- Skip navigation activates `main-content`.
- Mobile drawer focus starts at Close menu. Shift+Tab reaches the last Terms & Conditions link inside the visible drawer; Escape closes the drawer and returns focus.
- Desktop SOS Desk opens with focus on Minimize. Escape, Close, and Minimize restore the launch button's focus.
- Callback submission with missing Name/Mobile is blocked. A short mobile number produces the existing live error. No customer enquiry or WhatsApp message was sent.
- A synthetic tracking number redirected to `https://ops.portador.in/track/PORTADOR-UAT-NOT-A-SHIPMENT`. No OPS code or data was modified.
- Local homepage browser console check reported no errors or warnings.
- A floating review/comment overlay visible in the shared Preview belongs to the Codex browser, not the PORTADOR application; it was not treated as a site defect.

## Validation

| Check | Result |
| --- | --- |
| `npm run lint` | Passed; one pre-existing inline Google Analytics lint warning in `app/layout.tsx` remains. Protected analytics integration was not changed. |
| `npm run build` | Passed; all 362 generated build entries completed. Shared first-load JavaScript remains 103 kB. |
| `npm audit --json` | Zero vulnerabilities before and after these corrections, including zero high or critical findings. |
| Phase 2A protected canonical inventory | 303 preserved; inventory fingerprint unchanged. |
| Sitemap | 304 unique URLs; every URL has generated HTML and returned HTTP 200 from the local production server. |
| Canonical tags | 304 self-referencing production canonicals validated. |
| JSON-LD | 304 pages parse successfully; representative required schema types validated. This is not a Google rich-result eligibility guarantee. |
| Legacy redirects | All 63 rules and their fingerprint preserved. All 63 tested destinations ultimately return HTTP 200. |
| Internal links | Zero unresolved internal route links in generated sitemap pages. |
| FAQ integrity | All 385 source questions preserved; source fingerprint unchanged. |
| Security headers | All four Phase 2A headers preserved and validated. |
| GTM / GA4 | Protected IDs and source unchanged: `GTM-T39648NN`, `G-9EJGWW5DXM`. |
| Tracking privacy | AWB-bearing URLs remain excluded from tracking analytics events; actual OPS redirect still works. |

### Existing redirect normalization

Runtime checks found 58 direct HTTP 301 responses. Five existing trailing-slash URLs first receive Next.js HTTP 308 normalization:

- `/restricted-goods/` -> 308 -> 200
- `/privacy-policy/` -> 308 -> 200
- `/booking-refund-policy/` -> 308 -> 200
- `/booking_refund_policy/` -> 308 -> 301 -> 200
- `/terms-conditions/` -> 308 -> 200

This behavior predates these corrections and was left unchanged to preserve Phase 2A redirect protections. The five support-subdomain rules were tested using an actual `Host: support.portador.in` HTTP header; this does not verify public DNS or production subdomain routing.

## Founder decisions preserved

The existing review documents remain unchanged:

- `docs/FOUNDER_CLAIMS_REVIEW_PHASE_2B.md`
- `docs/VISUAL_ASSET_SPECIFICATIONS_PHASE_2B.md`

Outstanding decisions include evidence and wording approval for credentials; confirmation of coverage/24x7 claims; review of protected FAQ timelines, guarantees, tracking, insurance, pricing, regulated-cargo and customs statements; and approval of original photography with web-use rights. No unsupported credentials or new commitments were added in this continuation.

Long protected FAQ and landing-page copy remains intact. Any future editorial shortening or claim correction needs the separate Founder approval already recorded in the review list.

## Deployment boundary

The shared Round 2 Preview remains the latest deployed Preview at the time of this report. Vercel CLI has no saved authenticated session and requires Founder sign-in before a new Preview can be deployed. No deployment-protection setting was changed.

No new Preview has been created during this continuation. Corrections are validated locally pending authentication. No environment variables, DNS, Production settings, main branch, or Production deployment were changed.
