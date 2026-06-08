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
- `airport_page_visit`
- `city_page_visit`
- `route_page_visit`

## GTM Publishing Note

The website now sends analytics events directly and through `dataLayer`. If GA4 is configured inside Google Tag Manager, confirm that the GTM workspace has a published GA4 configuration tag using `G-9EJGWW5DXM` and event tags/listeners for the events above.

If GTM is later confirmed to fire GA4 page views with the same Measurement ID, remove or disable the direct GA4 fallback to avoid duplicate GA4 events.
