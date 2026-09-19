"use client";

import { useEffect } from "react";
import { contactClickEvent, gaMeasurementId, pushAnalyticsEvent, routeEventName } from "@/lib/analytics";

export function AnalyticsEvents() {
  useEffect(() => {
    let lastTrackedPath = "";

    function trackCurrentPage() {
      const pagePath = `${window.location.pathname}${window.location.search}`;
      if (pagePath === lastTrackedPath) return;
      lastTrackedPath = pagePath;
      const pageLocation = window.location.href;

      window.gtag?.("config", gaMeasurementId, {
        page_path: pagePath,
        page_location: pageLocation,
        page_title: document.title,
        send_page_view: false
      });

      pushAnalyticsEvent("page_view", {
        page_path: pagePath,
        page_location: pageLocation,
        page_title: document.title
      });

      const routeEvent = routeEventName(window.location.pathname);
      if (routeEvent) {
        pushAnalyticsEvent(routeEvent, {
          page_path: pagePath,
          page_location: pageLocation,
          page_title: document.title
        });
      }
    }

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function patchedPushState(...args) {
      originalPushState.apply(window.history, args);
      window.dispatchEvent(new Event("portador_route_change"));
    };

    window.history.replaceState = function patchedReplaceState(...args) {
      originalReplaceState.apply(window.history, args);
      window.dispatchEvent(new Event("portador_route_change"));
    };

    trackCurrentPage();
    window.addEventListener("popstate", trackCurrentPage);
    window.addEventListener("portador_route_change", trackCurrentPage);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", trackCurrentPage);
      window.removeEventListener("portador_route_change", trackCurrentPage);
    };
  }, []);

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const contactEvent = contactClickEvent(
        anchor.href,
        window.location.pathname,
        anchor.closest("[data-analytics-service]")?.getAttribute("data-analytics-service")
      );
      if (!contactEvent) return;

      pushAnalyticsEvent(contactEvent.name, {
        ...contactEvent.params,
        link_text: anchor.textContent?.trim().slice(0, 120) || "",
      });
    }

    document.addEventListener("click", onDocumentClick, { capture: true });
    return () => document.removeEventListener("click", onDocumentClick, { capture: true });
  }, []);

  return null;
}
