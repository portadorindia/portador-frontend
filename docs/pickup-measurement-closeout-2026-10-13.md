# Pickup measurement closeout — 13 October 2026

## Scope and source

This is a narrow frontend change on top of `codex/secure-pickup-entry`, commit
`a074a42062d48fa5ee57b9b66b2d707cd408a77a`. It does not replace the existing pickup
form or change the operations backend. The existing `main` ref was
`3fd2ab5de9f5a979c3d93f05036df635aba8d73e` when inspected; do not assume either ref
is the source of the most recent production deployment.

## Implemented

- Three separate navigation-stage events: `pickup_cta_click`,
  `pickup_request_page_view`, and `pickup_handoff`.
- Guest and customer-account handoffs are distinguished using server-rendered
  markers and the existing validated `SECURE_PICKUP_OPS_ORIGIN`.
- Approved URL acquisition fields survive client-side navigation to the pickup
  chooser and the marked OPS handoff. The fields are `utm_source`, `utm_medium`,
  `utm_campaign`, `utm_id`, `utm_term`, `utm_content`, `gclid`, `gbraid`, `wbraid`,
  `gad_source`, `device`, and `matchtype`.
- Context is kept in component memory, not a new cookie or browser storage.
  A new tagged visit replaces previous context; an explicitly tagged destination
  keeps its own context. Reloading an untagged intermediate page loses context.
- Unknown fields, oversized values, unresolved ValueTrack placeholders, control
  characters and obvious email/markup-like values are not forwarded. Campaign
  values must still never contain personal data: an allowlist is not a general
  personal-data detector.
- Contact and tracking destinations are unchanged. Context-menu use does not
  count as an enquiry; a middle-click counts only as navigation intent.
- `/excess-baggage` and `/cargo/excess-baggage` share the existing service context.
- Analytics errors do not interrupt the underlying navigation, and effect replay
  or duplicate history notifications do not duplicate chooser-view events.

## Measurement and consent boundaries

| Event | Meaning | Not evidence of |
| --- | --- | --- |
| `pickup_cta_click` | Visitor activated a link to the chooser | Form submission, accepted pickup or revenue |
| `pickup_request_page_view` | Chooser was viewed | Qualified enquiry or booking |
| `pickup_handoff` | Visitor activated a marked OPS guest/account link | Successful request receipt, AWB, payment or booked shipment |

The existing GA4/direct-gtag and named dataLayer delivery pattern is retained.
Do not add a second GTM GA4 sender for the same events. Existing GA4 pageview URL
reporting is outside this patch and remains unchanged.

Only the new pickup-stage events are optionally forwarded to an already present
`window.posthog` on `portador.in` or `www.portador.in`. Existing PostHog opt-out is
respected; no SDK is initialized, no opt-in is forced, no retry queue is created,
and no extra pageview/Call/WhatsApp PostHog event is sent. If the SDK is absent,
loads after the action, or exists only as a module-scoped instance, this adapter
will not deliver that PostHog event. It must be checked against the actual
production SDK owner before release. New pickup events supply a query-free
`$current_url`; they do not read form values or send arbitrary destination URLs.

**This patch does not fix or prove production PostHog ingestion.** The observed
localhost/preview-only analytics coverage needs a separate deployment/configuration
check. The existing Contact Intent action remains unchanged; pickup stages must
not be silently relabelled as qualified leads.

## Validation actually performed

- `node --test scripts/validate-pickup-measurement.mjs`: **31 passed, 0 failed**
  using TypeScript 5.8.3 and synthetic in-memory DOM/React fixtures.
- Isolated strict TypeScript check of the two analytics helpers and the client
  listener passed, using DOM types and minimal React/process declarations.
  This is not a project-wide or real React/Next.js build.
- Source files used as the base were checked against their Git blob hashes.
- No real customer request, analytics hit, payment, or shipment was submitted.

**Not run:** full locked dependency installation, existing full application test
suite, project lint, full Next.js build, or real-browser end-to-end verification.
The runtime could not resolve GitHub for a repository clone, and the complete
Next.js/React dependency tree was not available locally. No new dependencies or
package-lock changes were introduced.

## Release gates still open

1. Identify the exact source commit/environment serving production. Vercel
   deployment inspection returned 403 for team
   `team_ct0sqRPrDxcYFWuXRLWttxmu`, project
   `prj_QjWA754VNGAtX7Q7fnDgjODo9OIE`. The current connection could list projects
   but could not inspect this team's deployments. No authenticated Vercel CLI
   fallback was available in the runtime. Do not overwrite newer production work.
2. In the complete repository run `npm ci`, `npm run lint`,
   `node --test scripts/validate-conversion-events.mjs scripts/validate-pickup-measurement.mjs`,
   and `npm run build`. Inspect repository scripts before running with credentials.
3. Test the exact commit in a non-production preview with a non-production OPS
   origin. Check click, keyboard and new-tab paths, mobile guest/account flows,
   browser back/forward and campaign replacement. Existing preview-to-production
   OPS safeguards remain unchanged.
4. Verify production PostHog ownership, project token/region, script loading,
   permitted network requests and consent behavior. Configure one SDK owner,
   not parallel GTM and code initializers. Confirm real production-host events
   separately from localhost and preview traffic.
5. Verify the OPS form preserves permitted attribution through login and submission.
   A successful request event belongs at the genuine server-acknowledged success
   point. No backend success event or campaign-to-revenue linkage is fabricated here.
6. Release only after the above checks and the applicable publishing approval.
   No production deployment, legal-policy edit, or Google Ads mutation is part of
   this patch.

Related technical references:
- https://posthog.com/docs/libraries/next-js
- https://posthog.com/docs/product-analytics/troubleshooting
- Existing repository `ANALYTICS_TRACKING.md`
