# PORTADOR Analytics Tracking

## Installed IDs

- Google Tag Manager: `GTM-T39648NN`
- GA4 Measurement ID: `G-9EJGWW5DXM`

The code supports environment overrides:

- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Installation Points

- GTM head script: `app/layout.tsx`
- GTM noscript iframe: immediately after the opening `<body>` in `app/layout.tsx`
- GA4 direct fallback: `app/layout.tsx`
- Client route and event tracking: `components/analytics-events.tsx`
- Event helper and IDs: `lib/analytics.ts`

## Events Sent

Events are pushed to `window.dataLayer` for GTM and to `gtag` for direct GA4 fallback:

- `page_view`
- `whatsapp_click`
- `call_click`
- `tracking_form_submit`
- `quote_contact_form_submit`
- `enquiry_start` (Phase 2C Preview: once on the first non-empty callback edit)
- `airport_page_visit`
- `city_page_visit`
- `route_page_visit`

## Delivery Ownership And GTM Publishing

Direct `gtag` is the current GA4 delivery path. Named dataLayer objects are available for GTM observation; do not publish a second GA4 sender for those same events while direct delivery remains active. Each user action emits one named dataLayer event and one direct gtag command, not two intended GA4 conversions.

The public GTM payload inspected on 19 September 2026 returned HTTP 200 and contained no literal GA4 measurement ID or visible GA4 tag type. This is not access to the private GTM workspace, GA4 key-event settings, Enhanced Measurement configuration, consent configuration, or reporting data. Those require a read-only administrator review. No container or GA4 settings were changed.

If GTM is later made the GA4 delivery owner, review and test the migration before disabling direct delivery. Do not run both as independent GA4 senders. Also check Enhanced Measurement history/form events before marking events as key events. A collecting tag alone does not prove a conversion is configured in GA4.

## Phase 2C Event Mapping

| Requested measurement | Existing/reused event | Definition |
| --- | --- | --- |
| call_click | `call_click` | Telephone link activated; not proof a call connected. |
| whatsapp_click | `whatsapp_click` | WhatsApp link activated; not proof a message was sent. |
| tracking_submit | `tracking_form_submit` | Existing OPS handoff; only `entry_type`, never the AWB or destination URL. |
| enquiry_start | `enquiry_start` | First non-empty callback edit per component mount; no field content or field name. |
| enquiry_submit / callback_submit | `quote_contact_form_submit` with `form_name=emergency_callback` | Validated WhatsApp handoff. `conversion_stage=whatsapp_handoff` explicitly distinguishes it from receipt, booking or payment. |
| heavy_cargo_lead | `whatsapp_click` with `service_interest=heavy_air_cargo` | Existing homepage Heavy Cargo CTA. No parallel lead event. |
| sos_lead | `call_click` / `whatsapp_click` with `service_interest=portador_sos` | Contact action on the SOS service page. No parallel lead event. |

The same service-interest parameter identifies EXPRESS, BLACK, GLOBAL and the main Excess Baggage page. It describes the page/CTA context, not the customer's booked service. Generic homepage actions are not assumed to be SOS leads; machine-parts visitors are not assumed to have 50kg+ cargo.

## Privacy And Attribution Boundaries

- Contact events contain the current page path and existing static link label. WhatsApp URL query text and fragments are excluded from the event payload; the actual link and message remain unchanged.
- Callback events contain `form_name`, page path, handoff stage and presence booleans only. No name, mobile, commodity, cities, weight or deadline values are sent to analytics.
- Existing page-view URL/query reporting is unchanged. GA4 can use campaign parameters on the landing URL; session attribution and key-event configuration must be checked in the GA4 property. Do not put personal or shipment identifiers in marketing URLs.
- No campaign storage, new cookies, CRM integration, backend submission, billing integration or campaign text in WhatsApp messages was added. Operations-side campaign-to-booking reconciliation remains a Founder decision.
- Tracking, call and WhatsApp handoffs retain their existing destinations. Callback UI correctly says the request is ready to send; it does not claim a successful booking or a sent message.

## Verification

Run `node --test scripts/validate-conversion-events.mjs` for event mapping, single-emission behavior, callback state/validation, privacy payloads and OPS handoff tests. These use synthetic in-memory data and do not send enquiries or analytics hits.
