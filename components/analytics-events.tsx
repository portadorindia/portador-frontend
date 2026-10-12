"use client";

import { useEffect, useRef } from "react";
import { contactClickEvent, gaMeasurementId, pushAnalyticsEvent, routeEventName } from "@/lib/analytics";
import { Acquisition, attributedPickupHref, nextAcquisition, pickupClickEvent, PickupHints } from "@/lib/pickup-analytics";

export function AnalyticsEvents() {
  // Memory only: no additional cookies or durable browser storage.
  const acquisition = useRef<Acquisition>({});
  const lastTrackedPath = useRef("");

  useEffect(() => {
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    function trackCurrentPage() {
      acquisition.current = nextAcquisition(acquisition.current, window.location.search);
      // Next/Link may navigate using its own href rather than a decorated DOM anchor.
      // Restore approved acquisition on the chooser without changing the router's history state.
      if (window.location.pathname.replace(/\/+$/, "") === "/book-pickup") {
        const href = attributedPickupHref(window.location.href, window.location.origin, acquisition.current);
        if (href && href !== window.location.href) {
          try { originalReplaceState.call(window.history, window.history.state, "", href); } catch { /* Navigation still works. */ }
        }
      }
      const pagePath = `${window.location.pathname}${window.location.search}`;
      if (pagePath === lastTrackedPath.current) return;
      lastTrackedPath.current = pagePath;
      const pageLocation = window.location.href;
      try {
        window.gtag?.("config", gaMeasurementId, {
          page_path: pagePath,
          page_location: pageLocation,
          page_title: document.title,
          send_page_view: false
        });
      } catch { /* A blocked analytics sender must not break navigation. */ }
      pushAnalyticsEvent("page_view", { page_path: pagePath, page_location: pageLocation, page_title: document.title });
      const routeEvent = routeEventName(window.location.pathname);
      if (routeEvent) pushAnalyticsEvent(routeEvent, { page_path: pagePath, page_location: pageLocation, page_title: document.title });
      if (window.location.pathname.replace(/\/+$/, "") === "/book-pickup") {
        pushAnalyticsEvent("pickup_request_page_view", { page_path: "/book-pickup", conversion_stage: "chooser_view" });
      }
    }

    const patchedPushState: History["pushState"] = function (...args) {
      originalPushState.apply(window.history, args);
      window.dispatchEvent(new Event("portador_route_change"));
    };
    const patchedReplaceState: History["replaceState"] = function (...args) {
      originalReplaceState.apply(window.history, args);
      window.dispatchEvent(new Event("portador_route_change"));
    };
    window.history.pushState = patchedPushState;
    window.history.replaceState = patchedReplaceState;
    trackCurrentPage();
    window.addEventListener("popstate", trackCurrentPage);
    window.addEventListener("portador_route_change", trackCurrentPage);

    return () => {
      // Do not clobber a wrapper installed later by Next.js or another integration.
      if (window.history.pushState === patchedPushState) window.history.pushState = originalPushState;
      if (window.history.replaceState === patchedReplaceState) window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", trackCurrentPage);
      window.removeEventListener("portador_route_change", trackCurrentPage);
    };
  }, []);

  useEffect(() => {
    const decorated = new WeakMap<HTMLAnchorElement, { original: string; current: string }>();
    function onDocumentClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const hints: PickupHints = {
        opsOrigin: anchor.getAttribute("data-analytics-pickup-origin"),
        entryType: anchor.getAttribute("data-analytics-pickup")
      };
      const prior = decorated.get(anchor);
      const original = prior?.current === anchor.href ? prior.original : anchor.href;
      const href = attributedPickupHref(original, window.location.origin, acquisition.current, hints);
      if (href) {
        anchor.href = href;
        decorated.set(anchor, { original, current: anchor.href });
      }
      // Opening the context menu is not an enquiry. A middle-click is a navigation intent.
      if (event.type === "contextmenu" || (event.type === "auxclick" && event.button !== 1)) return;
      const pickupEvent = pickupClickEvent(anchor.href, window.location.origin, window.location.pathname, hints);
      if (pickupEvent) {
        pushAnalyticsEvent(pickupEvent.name, pickupEvent.params);
        return;
      }
      // Preserve the original contact measurement semantics (ordinary clicks only).
      if (event.type !== "click") return;
      const contactEvent = contactClickEvent(
        anchor.href,
        window.location.pathname,
        anchor.closest("[data-analytics-service]")?.getAttribute("data-analytics-service")
      );
      if (!contactEvent) return;
      pushAnalyticsEvent(contactEvent.name, { ...contactEvent.params, link_text: anchor.textContent?.trim().slice(0, 120) || "" });
    }
    const options = { capture: true };
    for (const type of ["click", "auxclick", "contextmenu"] as const) document.addEventListener(type, onDocumentClick, options);
    return () => {
      for (const type of ["click", "auxclick", "contextmenu"] as const) document.removeEventListener(type, onDocumentClick, options);
    };
  }, []);
  return null;
}
