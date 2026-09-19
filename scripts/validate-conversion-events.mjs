import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { runInNewContext } from "node:vm";
import { test } from "node:test";
import ts from "typescript";

const require = createRequire(import.meta.url);

function loadSource(path, context, imports = {}) {
  const exports = {};
  const code = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  runInNewContext(code, {
    exports, URL, process,
    require: (name) => imports[name] ?? require(name),
    ...context
  });
  return exports;
}

function analyticsFixture(pathname = "/") {
  const sent = [];
  const window = { location: { pathname }, dataLayer: [], gtag: (...args) => sent.push(args) };
  return { window, sent, analytics: loadSource("lib/analytics.ts", { window }) };
}

function callbackFixture() {
  const fixture = analyticsFixture("/contact");
  const slots = [];
  let cursor = 0;
  const react = {
    useState(initial) {
      const index = cursor++;
      if (!(index in slots)) slots[index] = initial;
      return [slots[index], (value) => { slots[index] = typeof value === "function" ? value(slots[index]) : value; }];
    },
    useRef(initial) {
      const index = cursor++;
      if (!(index in slots)) slots[index] = { current: initial };
      return slots[index];
    }
  };
  const ui = loadSource("components/ui.tsx", { window: fixture.window }, {
    react,
    "@/lib/analytics": fixture.analytics,
    "@/lib/site": { site: { whatsapp: "https://wa.me/919403892974" } },
    "@/lib/policy": { portadorLegalPolicy: { shortDisclosure: "Existing policy" } }
  });
  function nodes(node) {
    if (!node || typeof node !== "object") return [];
    if (Array.isArray(node)) return node.flatMap(nodes);
    return [node, ...nodes(node.props?.children)];
  }
  function render() { cursor = 0; return nodes(ui.EmergencyCallback()); }
  return {
    ...fixture,
    edit(field, value) { render().find((n) => n.props?.id === `callback-${field}`).props.onChange({ target: { value } }); },
    submit() { render().find((n) => n.type === "form").props.onSubmit({ preventDefault() {} }); },
    render
  };
}

test("existing event helper sends exactly once per existing channel", () => {
  const { analytics, window, sent } = analyticsFixture();
  analytics.pushAnalyticsEvent("call_click", { page_path: "/" });
  assert.equal(window.dataLayer.length, 1);
  assert.equal(sent.length, 1);
  assert.equal(window.dataLayer[0].event, "call_click");
  assert.equal(sent[0][1], "call_click");
});

test("WhatsApp query text and fragments never enter click payloads", () => {
  const { analytics } = analyticsFixture();
  const event = analytics.contactClickEvent("https://wa.me/919403892974?text=PRIVATE_NAME_PHONE#secret", "/contact");
  assert.equal(event.name, "whatsapp_click");
  assert.equal(event.params.link_url, "https://wa.me/919403892974");
  assert.ok(!JSON.stringify(event).includes("PRIVATE"));
  assert.ok(!JSON.stringify(event).includes("secret"));
});

test("Heavy Cargo reuses whatsapp_click with an explicit service interest", () => {
  const { analytics } = analyticsFixture();
  const event = analytics.contactClickEvent("https://wa.me/919403892974", "/", "heavy_air_cargo");
  assert.equal(event.name, "whatsapp_click");
  assert.equal(event.params.service_interest, "heavy_air_cargo");
});

test("all four service journeys and baggage enrich existing contact events", () => {
  const { analytics } = analyticsFixture();
  for (const slug of ["portador-sos", "portador-express", "portador-black", "portador-global"]) {
    const event = analytics.contactClickEvent("tel:+919403892974", `/services/${slug}/`);
    assert.equal(event.name, "call_click");
    assert.equal(event.params.service_interest, slug.replaceAll("-", "_"));
  }
  assert.equal(analytics.serviceInterestForPath("/cargo/excess-baggage"), "excess_baggage");
  assert.equal(analytics.serviceInterestForPath("/cargo/machine-parts"), undefined);
  assert.equal(analytics.serviceInterestForPath("/"), undefined);
});

test("untrusted hints, lookalike domains and non-contact links are not leads", () => {
  const { analytics } = analyticsFixture();
  assert.equal(analytics.contactClickEvent("https://wa.me/919403892974", "/", "private text").params.service_interest, undefined);
  for (const href of ["not a URL", "https://wa.me.example.org/", "javascript:alert(1)", "https://ops.portador.in/track/PRIVATE-AWB", "https://portador.in/services/portador-sos"]) {
    assert.equal(analytics.contactClickEvent(href, "/"), null);
  }
});

test("callback start fires once on first non-empty edit, not on render", () => {
  const f = callbackFixture();
  f.render();
  f.edit("name", " ");
  assert.equal(f.window.dataLayer.length, 0);
  f.edit("name", "Synthetic QA");
  f.edit("mobile", "1");
  f.edit("name", "Synthetic QA revised");
  assert.equal(f.window.dataLayer.length, 1);
  assert.equal(f.window.dataLayer[0].event, "enquiry_start");
  assert.equal(f.window.dataLayer[0].form_name, "emergency_callback");
  assert.equal(f.window.dataLayer[0].page_path, "/contact");
});

test("invalid callback remains blocked and emits no submit event", () => {
  const f = callbackFixture();
  f.edit("name", "Synthetic QA");
  f.edit("mobile", "1");
  f.submit();
  assert.equal(f.window.location.href, undefined);
  assert.equal(f.window.dataLayer.filter((e) => e.event === "quote_contact_form_submit").length, 0);
  assert.ok(f.render().some((n) => n.props?.role === "alert"));
});

test("valid callback keeps the same WhatsApp handoff without personal analytics data", () => {
  const f = callbackFixture();
  f.edit("name", "Synthetic QA");
  f.edit("mobile", "0000000000");
  f.edit("origin", "Synthetic origin");
  f.submit();
  const destination = new URL(f.window.location.href);
  assert.equal(destination.origin + destination.pathname, "https://wa.me/919403892974");
  assert.ok(destination.searchParams.get("text").includes("Name: Synthetic QA"));
  assert.ok(destination.searchParams.get("text").includes("Source: PORTADOR.in"));
  const submitEvents = f.window.dataLayer.filter((e) => e.event === "quote_contact_form_submit");
  assert.equal(submitEvents.length, 1);
  assert.equal(submitEvents[0].conversion_stage, "whatsapp_handoff");
  assert.equal(submitEvents[0].has_origin, true);
  assert.equal(submitEvents[0].page_path, "/contact");
  for (const value of ["Synthetic QA", "0000000000", "Synthetic origin", "?text="]) {
    assert.ok(!JSON.stringify(f.window.dataLayer).includes(value));
    assert.ok(!JSON.stringify(f.sent).includes(value));
  }
});

test("tracking remains an OPS handoff and never emits the AWB", () => {
  const f = analyticsFixture("/tracking");
  const component = loadSource("components/tracking-form.tsx", { window: f.window }, {
    react: { useState: () => ["PRIVATE-AWB/123", () => {}] },
    "@/lib/analytics": f.analytics,
    "@/lib/site": { site: { trackingUrl: "https://ops.portador.in/track" } }
  });
  component.TrackingForm().props.onSubmit({ preventDefault() {} });
  assert.equal(f.window.location.href, "https://ops.portador.in/track/PRIVATE-AWB%2F123");
  assert.equal(f.window.dataLayer[0].event, "tracking_form_submit");
  assert.equal(Object.keys(f.window.dataLayer[0]).sort().join(","), "entry_type,event");
  assert.ok(!JSON.stringify(f.sent).includes("PRIVATE-AWB"));
});

test("no duplicate callback_submit, tracking_submit or service lead events were added", () => {
  const source = readFileSync("lib/analytics.ts", "utf8");
  for (const duplicate of ["callback_submit", "enquiry_submit", "tracking_submit", "heavy_cargo_lead", "sos_lead"]) {
    assert.ok(!source.includes(`"${duplicate}"`));
  }
  assert.match(readFileSync("app/page.tsx", "utf8"), /id="heavy-air-cargo" data-analytics-service="heavy_air_cargo"/);
});
