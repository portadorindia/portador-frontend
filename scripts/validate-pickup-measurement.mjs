import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { test } from "node:test";
import ts from "typescript";

// Synthetic fixtures only: no network, real enquiries, credentials or analytics hits.
function load(path, context = {}, imports = {}) {
  const exports = {};
  const result = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
    reportDiagnostics: true, fileName: path
  });
  assert.equal(result.diagnostics.filter((d) => d.category === ts.DiagnosticCategory.Error).length, 0);
  runInNewContext(result.outputText, {
    exports, URL, URLSearchParams, Event, process: { env: {} },
    require(name) { if (Object.hasOwn(imports, name)) return imports[name]; throw new Error(`Unexpected import ${name}`); },
    ...context
  });
  return exports;
}
const p = load("lib/pickup-analytics.ts");
const plain = (v) => JSON.parse(JSON.stringify(v));
const web = "https://portador.in", ops = "https://ops.portador.in";
const guest = { opsOrigin: ops, entryType: "guest" }, account = { opsOrigin: ops, entryType: "account" };
const campaign = { utm_source: "google", utm_medium: "cpc", utm_campaign: "ex_mumbai", gclid: "SYNTHETIC-CLICK" };

test("acquisition allowlist excludes personal, booking and payment fields", () => {
  const data = p.acquisitionFromSearch("?utm_source=google&gclid=SYNTHETIC-CLICK&name=PRIVATE&phone=PRIVATE&awb=PRIVATE&token=PRIVATE&address=PRIVATE&pickup_id=PRIVATE");
  assert.deepEqual(plain(data), { utm_source: "google", gclid: "SYNTHETIC-CLICK" });
});
test("malformed, oversized and unexpanded values are rejected", () => {
  const data = p.acquisitionFromSearch(`?utm_campaign=${"x".repeat(257)}&utm_source=x%40example.com&gclid=bad%20id&utm_id=%7Bcampaignid%7D&device=m&matchtype=p&utm_content=%3Cscript%3E`);
  assert.deepEqual(plain(data), { device: "m", matchtype: "p" });
});
test("normal route without query context preserves attribution in memory", () => {
  assert.deepEqual(plain(p.nextAcquisition(campaign, "?service=SOS&phone=PRIVATE")), campaign);
});
test("new campaign never inherits a stale click ID", () => {
  assert.deepEqual(plain(p.nextAcquisition(campaign, "?utm_campaign=ex_bengaluru")), { utm_campaign: "ex_bengaluru" });
});
test("new click ID never inherits an unrelated campaign", () => {
  assert.deepEqual(plain(p.nextAcquisition(campaign, "?gbraid=NEW-CLICK")), { gbraid: "NEW-CLICK" });
});
test("chooser retains service and fragment", () => {
  const url = new URL(p.attributedPickupHref("/book-pickup?service=SOS#options", web, campaign));
  assert.equal(url.origin, web); assert.equal(url.searchParams.get("service"), "SOS");
  assert.equal(url.searchParams.get("gclid"), "SYNTHETIC-CLICK"); assert.equal(url.hash, "#options");
});
test("guest and customer OPS handoffs preserve attribution", () => {
  for (const [path, hints] of [["/secure-pickup?service=SOS", guest], ["/customer/secure-pickup?service=SOS", account]]) {
    const url = new URL(p.attributedPickupHref(ops + path, web, campaign, hints));
    assert.equal(url.searchParams.get("utm_campaign"), "ex_mumbai"); assert.equal(url.searchParams.get("service"), "SOS");
  }
});
test("unmarked or mismarked OPS links are not decorated", () => {
  assert.equal(p.attributedPickupHref(ops + "/secure-pickup", web, campaign), null);
  assert.equal(p.attributedPickupHref(ops + "/secure-pickup", web, campaign, account), null);
});
test("lookalike, credential-bearing and unrelated links are rejected", () => {
  for (const href of ["https://ops.portador.in.evil.test/secure-pickup", "https://portador.in.evil.test/book-pickup", "https://x:secret@ops.portador.in/secure-pickup", "javascript:alert(1)", "https://wa.me/123?text=PRIVATE", "tel:+910000000000", ops + "/track/PRIVATE", web + "/contact"]) {
    assert.equal(p.attributedPickupHref(href, web, campaign, guest), null, href);
  }
});
test("OPS configuration must be a valid origin", () => {
  for (const opsOrigin of [ops + "/path", ops + "/?token=secret", ops + "/#hash", "http://ops.portador.in"]) {
    assert.equal(p.attributedPickupHref(ops + "/secure-pickup", web, campaign, { opsOrigin, entryType: "guest" }), null);
  }
});
test("local HTTP is permitted only for local-to-local testing", () => {
  const hints = { opsOrigin: "http://127.0.0.1:3001", entryType: "guest" };
  assert.ok(p.attributedPickupHref(hints.opsOrigin + "/secure-pickup", "http://localhost:3000", campaign, hints));
  assert.equal(p.attributedPickupHref(hints.opsOrigin + "/secure-pickup", web, campaign, hints), null);
});
test("destination-owned attribution is never mixed with another campaign", () => {
  const href = web + "/book-pickup?utm_campaign=owned&service=SOS";
  assert.equal(p.attributedPickupHref(href, web, campaign), href);
});
test("caller data is revalidated and not copied wholesale", () => {
  const url = p.attributedPickupHref("/book-pickup", web, { ...campaign, name: "PRIVATE", utm_content: "bad@value" });
  assert.ok(!url.includes("PRIVATE")); assert.ok(!url.includes("utm_content"));
});
test("pickup event carries no private query or booking-success claim", () => {
  const event = p.pickupClickEvent(ops + "/secure-pickup?service=SOS&pickup_id=PRIVATE", web, "/book-pickup?name=PRIVATE", guest);
  assert.equal(event.name, "pickup_handoff"); assert.equal(event.params.conversion_stage, "ops_handoff");
  assert.equal(event.params.pickup_entry_type, "guest"); assert.equal(event.params.page_path, "/book-pickup");
  assert.ok(!JSON.stringify(event).includes("PRIVATE")); assert.ok(!JSON.stringify(event).includes("confirmed"));
});
function sender(hostname = "portador.in", posthog) {
  const calls = [];
  const window = { location: { hostname, origin: `https://${hostname}`, pathname: "/book-pickup", search: "?phone=PRIVATE" }, dataLayer: [], gtag: (...args) => calls.push(args), posthog };
  return { window, calls, a: load("lib/analytics.ts", { window }) };
}
test("existing contact helper keeps one emission per GA4 and dataLayer path", () => {
  const f = sender(); f.a.pushAnalyticsEvent("call_click", { page_path: "/" });
  assert.equal(f.window.dataLayer.length, 1); assert.equal(f.calls.length, 1);
});
test("both baggage aliases have the same service context", () => {
  const f = sender();
  for (const path of ["/excess-baggage", "/excess-baggage/", "/cargo/excess-baggage"]) assert.equal(f.a.serviceInterestForPath(path), "excess_baggage");
});
test("PostHog receives only new pickup stages with query-free current URL", () => {
  const captured = []; const f = sender("portador.in", { capture: (...args) => captured.push(args), has_opted_out_capturing: () => false });
  f.a.pushAnalyticsEvent("pickup_handoff", { conversion_stage: "ops_handoff" });
  f.a.pushAnalyticsEvent("page_view"); f.a.pushAnalyticsEvent("whatsapp_click");
  assert.equal(captured.length, 1); assert.equal(captured[0][0], "pickup_handoff");
  assert.equal(captured[0][1].$current_url, web + "/book-pickup"); assert.ok(!JSON.stringify(captured).includes("PRIVATE"));
});
test("PostHog opt-out, absent SDK and non-production hosts are respected", () => {
  for (const [host, optout] of [["portador.in", true], ["localhost", false], ["preview.vercel.app", false]]) {
    const captured = []; const f = sender(host, { capture: (...args) => captured.push(args), has_opted_out_capturing: () => optout });
    f.a.pushAnalyticsEvent("pickup_handoff"); assert.equal(captured.length, 0);
  }
  assert.doesNotThrow(() => sender().a.pushAnalyticsEvent("pickup_handoff"));
});
test("throwing analytics senders do not break navigation", () => {
  const f = sender("portador.in", { capture() { throw new Error("blocked"); } });
  f.window.gtag = () => { throw new Error("blocked"); };
  assert.doesNotThrow(() => f.a.pushAnalyticsEvent("pickup_handoff"));
});
test("a frozen dataLayer does not block other senders", () => {
  const f = sender(); f.window.dataLayer = Object.freeze([]);
  assert.doesNotThrow(() => f.a.pushAnalyticsEvent("pickup_handoff")); assert.equal(f.calls.length, 1);
});
class ElementFixture { constructor(anchor) { this.anchor = anchor; } closest() { return this.anchor; } }
class AnchorFixture extends ElementFixture {
  constructor(href, attrs = {}) { super(); this.href = href; this.attrs = attrs; this.textContent = "Continue"; }
  closest(selector) { return selector === "a[href]" ? this : null; }
  getAttribute(key) { return this.attrs[key] ?? null; }
}
function browser(href) {
  const events = new EventTarget(), documentEvents = new Map(); let url = new URL(href);
  const window = {
    get location() { return url; },
    history: { state: {}, pushState(state, unused, href) { if (href != null) url = new URL(href, url); this.state = state; }, replaceState(state, unused, href) { if (href != null) url = new URL(href, url); this.state = state; } },
    addEventListener: events.addEventListener.bind(events), removeEventListener: events.removeEventListener.bind(events), dispatchEvent: events.dispatchEvent.bind(events), dataLayer: [], gtag() {}
  };
  const document = { title: "Synthetic page", addEventListener(name, fn) { documentEvents.set(name, fn); }, removeEventListener(name, fn) { if (documentEvents.get(name) === fn) documentEvents.delete(name); } };
  const effects = [], a = load("lib/analytics.ts", { window });
  const m = load("components/analytics-events.tsx", { window, document, Element: ElementFixture, HTMLAnchorElement: AnchorFixture }, {
    react: { useRef: (current) => ({ current }), useEffect: (effect) => effects.push(effect) }, "@/lib/analytics": a, "@/lib/pickup-analytics": p
  });
  m.AnalyticsEvents(); let cleanups = effects.map((f) => f());
  return { window, click(anchor, type = "click", button = 0) { documentEvents.get(type)?.({ target: new ElementFixture(anchor), type, button }); }, cleanup() { cleanups.forEach((f) => f?.()); }, replay() { cleanups.forEach((f) => f?.()); cleanups = effects.map((f) => f()); } };
}
test("Next-style SPA navigation restores acquisition and preserves history state", () => {
  const f = browser(web + "/cities/mumbai?utm_campaign=ex_mumbai&gclid=SYNTHETIC-CLICK");
  f.window.history.pushState({ next: true }, "", "/book-pickup?service=SOS");
  assert.equal(f.window.location.searchParams.get("gclid"), "SYNTHETIC-CLICK"); assert.equal(f.window.location.searchParams.get("service"), "SOS");
  assert.deepEqual(f.window.history.state, { next: true });
  assert.equal(f.window.dataLayer.filter((e) => e.event === "pickup_request_page_view").length, 1); f.cleanup();
});
test("history notifications and effect replay do not duplicate chooser views", () => {
  const f = browser(web + "/book-pickup?utm_source=google");
  f.window.dispatchEvent(new Event("portador_route_change")); f.replay();
  assert.equal(f.window.dataLayer.filter((e) => e.event === "pickup_request_page_view").length, 1); f.cleanup();
});
test("guest handoff decorates anchor and records one intent without private fields", () => {
  const f = browser(web + "/book-pickup?utm_campaign=ex_mumbai&gclid=SYNTHETIC-CLICK&phone=PRIVATE");
  const a = new AnchorFixture(ops + "/secure-pickup?service=SOS", { "data-analytics-pickup": "guest", "data-analytics-pickup-origin": ops }); f.click(a);
  assert.equal(new URL(a.href).searchParams.get("gclid"), "SYNTHETIC-CLICK"); assert.ok(!a.href.includes("PRIVATE"));
  const sent = f.window.dataLayer.filter((e) => e.event === "pickup_handoff");
  assert.equal(sent.length, 1); assert.equal(sent[0].conversion_stage, "ops_handoff"); assert.ok(!JSON.stringify(sent).includes("PRIVATE")); f.cleanup();
});
test("context menus decorate without counting enquiries; middle clicks count once", () => {
  const f = browser(web + "/?utm_campaign=ex_mumbai"); const a = new AnchorFixture(web + "/book-pickup");
  f.click(a, "contextmenu", 2); f.click(a, "auxclick", 2);
  assert.equal(f.window.dataLayer.filter((e) => e.event === "pickup_cta_click").length, 0);
  assert.equal(new URL(a.href).searchParams.get("utm_campaign"), "ex_mumbai");
  f.click(a, "auxclick", 1); assert.equal(f.window.dataLayer.filter((e) => e.event === "pickup_cta_click").length, 1); f.cleanup();
});
test("a reused anchor gets the new campaign rather than stale decoration", () => {
  const f = browser(web + "/?utm_campaign=ex_mumbai&gclid=OLD"); const a = new AnchorFixture(web + "/book-pickup");
  f.click(a, "contextmenu", 2);
  f.window.history.pushState({}, "", "/?utm_campaign=ex_bengaluru&gclid=NEW"); f.click(a);
  const url = new URL(a.href); assert.equal(url.searchParams.get("utm_campaign"), "ex_bengaluru"); assert.equal(url.searchParams.get("gclid"), "NEW"); f.cleanup();
});
test("tracking and WhatsApp destinations remain unchanged", () => {
  const f = browser(web + "/?utm_campaign=ex_mumbai");
  for (const href of [ops + "/track/PRIVATE", "https://wa.me/123?text=PRIVATE"]) { const a = new AnchorFixture(href); f.click(a); assert.equal(a.href, href); }
  assert.equal(f.window.dataLayer.filter((e) => e.event === "whatsapp_click").length, 1); f.cleanup();
});
test("cleanup does not clobber a newer integration's history wrapper", () => {
  const f = browser(web + "/"); const later = function () {}; f.window.history.pushState = later;
  f.cleanup(); assert.equal(f.window.history.pushState, later);
});
const jsx = (type, props) => ({ type, props });
function descendants(n) { return !n || typeof n !== "object" ? [] : Array.isArray(n) ? n.flatMap(descendants) : [n, ...descendants(n.props?.children)]; }
async function pickupPage(env) {
  const m = load("app/book-pickup/page.tsx", { process: { env } }, {
    "react/jsx-runtime": { jsx, jsxs: jsx }, "next/link": "a", "lucide-react": { ArrowRight: "icon", CheckCircle2: "icon", FileCheck2: "icon", PackageCheck: "icon", Truck: "icon" },
    "@/components/copy-pickup-link": { CopyPickupLink: "copy-link" }, "@/lib/site": { site: { phoneHref: "tel:+910000000000" } }
  });
  return descendants(await m.default({ searchParams: Promise.resolve({ service: "SOS" }) }));
}
test("server-rendered guest/account markers use the validated OPS origin", async () => {
  const nodes = await pickupPage({ SECURE_PICKUP_OPS_ORIGIN: ops, VERCEL_ENV: "production", NODE_ENV: "production" });
  const links = nodes.filter((n) => n.props?.["data-analytics-pickup"]); assert.equal(links.length, 3);
  assert.equal(links.filter((n) => n.props["data-analytics-pickup"] === "guest").length, 2);
  for (const n of links) assert.equal(n.props["data-analytics-pickup-origin"], ops);
});
test("feature preview still cannot send pickups to production OPS", async () => {
  const nodes = await pickupPage({ SECURE_PICKUP_OPS_ORIGIN: ops, VERCEL_ENV: "preview", NODE_ENV: "production" });
  assert.equal(nodes.filter((n) => n.props?.["data-analytics-pickup"]).length, 0);
});
test("missing OPS configuration retains the contact fallback", async () => {
  const nodes = await pickupPage({ VERCEL_ENV: "production", NODE_ENV: "production" });
  assert.equal(nodes.filter((n) => n.props?.["data-analytics-pickup"]).length, 0);
  assert.ok(nodes.some((n) => n.props?.href === "tel:+910000000000"));
});
test("no new storage, submission API, SDK initializer or consent override is introduced", () => {
  const h = readFileSync("lib/pickup-analytics.ts", "utf8"), c = readFileSync("components/analytics-events.tsx", "utf8"), a = readFileSync("lib/analytics.ts", "utf8");
  assert.doesNotMatch(h + c, /localStorage|sessionStorage|document\.cookie|fetch\(/);
  assert.doesNotMatch(a, /posthog\.init\(|opt_in_capturing\(/);
});
