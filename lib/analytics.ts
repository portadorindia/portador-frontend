export const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-T39648NN";
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-9EJGWW5DXM";

export type AnalyticsEventName =
  | "page_view"
  | "whatsapp_click"
  | "call_click"
  | "tracking_form_submit"
  | "quote_contact_form_submit"
  | "enquiry_start"
  | "airport_page_visit"
  | "city_page_visit"
  | "route_page_visit"
  | "pickup_cta_click"
  | "pickup_request_page_view"
  | "pickup_handoff";

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

const serviceInterests = ["heavy_air_cargo", "portador_sos", "portador_express", "portador_black", "portador_global", "excess_baggage"] as const;
export type ServiceInterest = typeof serviceInterests[number];

export function serviceInterestForPath(pathname: string): ServiceInterest | undefined {
  const path = pathname.replace(/\/+$/, "");
  const services: Record<string, ServiceInterest> = {
    "/services/portador-sos": "portador_sos",
    "/services/portador-express": "portador_express",
    "/services/portador-black": "portador_black",
    "/services/portador-global": "portador_global",
    "/cargo/excess-baggage": "excess_baggage",
    "/excess-baggage": "excess_baggage"
  };
  return services[path];
}

export function contactClickEvent(href: string, pathname: string, serviceHint?: string | null) {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  const name = url.protocol === "tel:"
    ? "call_click"
    : url.protocol === "https:" && (url.hostname === "wa.me" || url.hostname === "whatsapp.com" || url.hostname.endsWith(".whatsapp.com"))
      ? "whatsapp_click"
      : null;
  if (!name) return null;

  const serviceInterest = serviceInterests.find((value) => value === serviceHint) ?? serviceInterestForPath(pathname);
  return {
    name,
    params: {
      // Never send a WhatsApp message, query string, or fragment to analytics.
      link_url: name === "call_click" ? `${url.protocol}${url.pathname}` : `${url.origin}${url.pathname}`,
      page_path: pathname,
      ...(serviceInterest ? { service_interest: serviceInterest } : {})
    }
  } as const;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: "event" | "config" | "set", target: string, params?: AnalyticsEventParams) => void;
  }
}

export function routeEventName(pathname: string): AnalyticsEventName | null {
  if (pathname.startsWith("/airports/")) return "airport_page_visit";
  if (pathname.startsWith("/cities/")) return "city_page_visit";
  if (pathname.startsWith("/routes/") || pathname.startsWith("/lanes/")) return "route_page_visit";
  return null;
}

// Reuse an existing consent-managed SDK only. This is not a second PostHog initializer.
type ExistingPostHog = {
  capture: (name: string, properties: AnalyticsEventParams) => unknown;
  has_opted_out_capturing?: () => boolean;
};
const pickupEvents = new Set<AnalyticsEventName>(["pickup_cta_click", "pickup_request_page_view", "pickup_handoff"]);

export function pushAnalyticsEvent(name: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;

  // Analytics failures must never interrupt the actual contact/pickup navigation.
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  } catch { /* The other delivery paths may still be available. */ }
  try {
    window.gtag?.("event", name, params);
  } catch { /* The user action must still complete when tracking is blocked. */ }

  // Existing PostHog autocapture continues to own page, Call and WhatsApp events.
  if (!pickupEvents.has(name)) return;
  if (!["portador.in", "www.portador.in"].includes(window.location.hostname)) return;
  try {
    const posthog = (window as Window & { posthog?: ExistingPostHog }).posthog;
    if (!posthog || typeof posthog.capture !== "function" || posthog.has_opted_out_capturing?.()) return;
    posthog.capture(name, {
      ...params,
      // Strip arbitrary query data from the automatic current-URL property for these events.
      $current_url: `${window.location.origin}${window.location.pathname}`,
      $pathname: window.location.pathname
    });
  } catch { /* No opt-in, SDK injection or retry that could bypass consent. */ }
}
