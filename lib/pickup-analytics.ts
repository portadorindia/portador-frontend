/** Only marketing context is forwarded. Never pass form fields or shipment identifiers. */
const acquisitionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_term", "utm_content", "gclid", "gbraid", "wbraid", "gad_source", "device", "matchtype"] as const;
type AcquisitionKey = typeof acquisitionKeys[number];
export type Acquisition = Partial<Record<AcquisitionKey, string>>;
export type PickupHints = { opsOrigin?: string | null; entryType?: string | null };
const clickIdKeys = new Set<string>(["gclid", "gbraid", "wbraid", "gad_source"]);
const localHosts = new Set(["localhost", "127.0.0.1", "[::1]"]);

export function acquisitionFromSearch(search: string): Acquisition {
  const params = new URLSearchParams(search);
  const result: Acquisition = {};
  for (const key of acquisitionKeys) {
    const value = params.get(key)?.trim();
    if (!value || value.length > 256 || /[\u0000-\u001f\u007f<>@{}]/.test(value)) continue;
    if (clickIdKeys.has(key) && !/^[A-Za-z0-9_-]+$/.test(value)) continue;
    if (key === "device" && !["m", "c", "t"].includes(value)) continue;
    if (key === "matchtype" && !["e", "p", "b"].includes(value)) continue;
    result[key] = value;
  }
  return result;
}

export function nextAcquisition(previous: Acquisition, search: string): Acquisition {
  const current = acquisitionFromSearch(search);
  // A new campaign/click replaces the whole context: never mix a stale click ID with new UTMs.
  return Object.keys(current).length ? current : previous;
}

function parseOrigin(raw: string): URL | null {
  try {
    const url = new URL(raw);
    if (url.username || url.password || url.pathname !== "/" || url.search || url.hash) return null;
    if (url.protocol !== "https:" && !(url.protocol === "http:" && localHosts.has(url.hostname))) return null;
    return url;
  } catch { return null; }
}

function pickupTarget(href: string, pageOrigin: string, hints: PickupHints = {}) {
  const page = parseOrigin(pageOrigin);
  if (!page) return null;
  let url: URL;
  try { url = new URL(href, page.origin); } catch { return null; }
  if (url.username || url.password) return null;
  const path = url.pathname.replace(/\/+$/, "") || "/";
  if (url.origin === page.origin && path === "/book-pickup") return { url, path, entryType: "chooser" as const };
  const ops = hints.opsOrigin ? parseOrigin(hints.opsOrigin) : null;
  if (!ops || ops.origin !== url.origin) return null;
  if (ops.protocol === "http:" && !(page.protocol === "http:" && localHosts.has(page.hostname))) return null;
  if (path === "/secure-pickup" && hints.entryType === "guest") return { url, path, entryType: "guest" as const };
  if (path === "/customer/secure-pickup" && hints.entryType === "account") return { url, path, entryType: "account" as const };
  return null;
}

export function attributedPickupHref(href: string, pageOrigin: string, acquisition: Acquisition, hints: PickupHints = {}): string | null {
  const target = pickupTarget(href, pageOrigin, hints);
  if (!target) return null;
  // Destination-owned campaign context wins. Never append an unrelated click ID to it.
  if (acquisitionKeys.some((key) => target.url.searchParams.has(key))) return target.url.href;
  // Revalidate callers' data as well; this helper never forwards arbitrary object properties.
  const params = new URLSearchParams();
  for (const key of acquisitionKeys) if (acquisition[key]) params.set(key, acquisition[key]!);
  const safe = acquisitionFromSearch(params.toString());
  for (const key of acquisitionKeys) if (safe[key]) target.url.searchParams.set(key, safe[key]!);
  return target.url.href;
}

export function pickupClickEvent(href: string, pageOrigin: string, pathname: string, hints: PickupHints = {}) {
  const target = pickupTarget(href, pageOrigin, hints);
  if (!target) return null;
  return {
    name: target.entryType === "chooser" ? "pickup_cta_click" as const : "pickup_handoff" as const,
    params: {
      page_path: pathname.split(/[?#]/, 1)[0],
      destination_path: target.path,
      pickup_entry_type: target.entryType,
      requested_service: target.url.searchParams.get("service") === "SOS" ? "SOS" : "STANDARD",
      conversion_stage: target.entryType === "chooser" ? "chooser_handoff" : "ops_handoff"
    }
  };
}
