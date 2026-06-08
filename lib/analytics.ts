export const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-T39648NN";
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-9EJGWV5DXM";

export type AnalyticsEventName =
  | "page_view"
  | "whatsapp_click"
  | "call_click"
  | "tracking_form_submit"
  | "quote_contact_form_submit"
  | "airport_page_visit"
  | "city_page_visit"
  | "route_page_visit";

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

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

export function pushAnalyticsEvent(name: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...params
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
