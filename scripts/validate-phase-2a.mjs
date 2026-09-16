import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SITE_ORIGIN = "https://portador.in";
const ADVISORY_PATH = "/fraud-brand-impersonation-advisory";
const BASELINE_ROUTE_COUNT = 303;
const EXPECTED_ROUTE_COUNT = BASELINE_ROUTE_COUNT + 1;
const BASELINE_ROUTE_HASH = "70a5f972c22735a108d9a95ac0f328b79aee7deac1070aa6d3f19745694304c3";
const BASELINE_REDIRECT_COUNT = 63;
const BASELINE_REDIRECT_HASH = "7aaf0f24b58db2f5797cdfe55188277d2ca23b9adb61492a3b4bb37e488fae20";
const FAQ_CORPUS_HASH = "79afaebbd11f047e914009040e0413e9930ed8895a23d9e8e8a64c8252b9e6bf";

function hash(value) {
  return createHash("sha256").update(value).digest("hex");
}

function read(path) {
  return readFileSync(join(ROOT, path), "utf8");
}

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function htmlFileFor(pathname) {
  const relative = pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`;
  return join(ROOT, ".next", "server", "app", ...relative.split("/"));
}

function extractCanonical(html) {
  const tags = html.match(/<link\b[^>]*>/gi) ?? [];
  return tags
    .filter((tag) => /\brel=["']canonical["']/i.test(tag))
    .map((tag) => tag.match(/\bhref=["']([^"']+)["']/i)?.[1])
    .filter(Boolean);
}

function extractJsonLd(html, pathname) {
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter((match) => /\btype=["']application\/ld\+json["']/i.test(match[1]));

  assert.ok(scripts.length > 0, `${pathname} has no JSON-LD`);
  return scripts.map((match, index) => {
    try {
      return JSON.parse(match[2]);
    } catch (error) {
      throw new Error(`${pathname} contains invalid JSON-LD in block ${index + 1}: ${error.message}`);
    }
  });
}

function collectSchemaTypes(value, types = new Set()) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectSchemaTypes(item, types));
    return types;
  }
  if (!value || typeof value !== "object") return types;
  const type = value["@type"];
  if (Array.isArray(type)) type.forEach((item) => types.add(item));
  else if (typeof type === "string") types.add(type);
  Object.values(value).forEach((item) => collectSchemaTypes(item, types));
  return types;
}

function internalPathFromHref(rawHref) {
  const href = rawHref.replaceAll("&amp;", "&").trim();
  if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:|data:)/i.test(href)) return null;

  let parsed;
  try {
    parsed = new URL(href, SITE_ORIGIN);
  } catch {
    return null;
  }

  if (!['portador.in', 'www.portador.in'].includes(parsed.hostname)) return null;
  const pathname = normalizePath(parsed.pathname);
  if (
    pathname.startsWith("/_next") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/llms.txt" ||
    pathname === "/manifest.webmanifest" ||
    /\.(?:ico|png|jpg|jpeg|webp|svg|gif|xml|txt|webmanifest)$/i.test(pathname)
  ) return null;
  return pathname;
}

const sitemapFile = join(ROOT, ".next", "server", "app", "sitemap.xml.body");
const redirectManifestFile = join(ROOT, ".next", "routes-manifest.json");
assert.ok(existsSync(sitemapFile), "Build output is missing sitemap.xml.body; run npm run build first");
assert.ok(existsSync(redirectManifestFile), "Build output is missing routes-manifest.json; run npm run build first");

const sitemapXml = readFileSync(sitemapFile, "utf8");
const sitemapPaths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => normalizePath(new URL(match[1]).pathname))
  .sort();
const sitemapSet = new Set(sitemapPaths);

assert.equal(sitemapPaths.length, EXPECTED_ROUTE_COUNT, `Expected ${EXPECTED_ROUTE_COUNT} sitemap routes after adding the advisory`);
assert.equal(sitemapSet.size, EXPECTED_ROUTE_COUNT, "Sitemap contains duplicate URLs");
assert.ok(sitemapSet.has(ADVISORY_PATH), "Advisory route is missing from sitemap");

const protectedPaths = sitemapPaths.filter((pathname) => pathname !== ADVISORY_PATH);
assert.equal(protectedPaths.length, BASELINE_ROUTE_COUNT, "Protected canonical route count changed");
assert.equal(hash(protectedPaths.join("\n")), BASELINE_ROUTE_HASH, "Protected canonical route inventory changed");

const manifest = JSON.parse(readFileSync(redirectManifestFile, "utf8"));
const customRedirects = manifest.redirects.filter((redirect) => redirect.source !== "/:path+/");
const redirectLines = customRedirects.map((redirect) => {
  const conditions = (redirect.has ?? [])
    .map((condition) => `${condition.type}:${condition.key ?? ""}:${condition.value ?? ""}`)
    .join(",");
  return [redirect.source, redirect.destination, redirect.statusCode, conditions].join("|");
}).sort();

assert.equal(customRedirects.length, BASELINE_REDIRECT_COUNT, "Protected redirect count changed");
assert.equal(hash(redirectLines.join("\n")), BASELINE_REDIRECT_HASH, "Protected redirect inventory changed");

const faqCorpus = read("lib/founder-faqs.ts");
assert.equal(hash(faqCorpus), FAQ_CORPUS_HASH, "The protected founder FAQ corpus changed");
assert.equal((faqCorpus.match(/"sourceIndex"\s*:/g) ?? []).length, 385, "Founder FAQ count is no longer 385");

const representativePaths = [
  "/",
  "/tracking",
  "/faqs",
  "/use-cases",
  ADVISORY_PATH,
  "/services/portador-sos",
  "/airports/delhi-igi-airport",
  "/cities/delhi",
  "/routes/delhi-to-mumbai",
  "/industries/aviation-logistics"
];
representativePaths.forEach((pathname) => assert.ok(sitemapSet.has(pathname), `${pathname} is missing from sitemap`));

const htmlByPath = new Map();
const schemaTypesByPath = new Map();
for (const pathname of sitemapPaths) {
  const htmlFile = htmlFileFor(pathname);
  assert.ok(existsSync(htmlFile), `${pathname} has no prerendered HTML`);
  const html = readFileSync(htmlFile, "utf8");
  htmlByPath.set(pathname, html);

  const canonical = extractCanonical(html);
  assert.equal(canonical.length, 1, `${pathname} must contain exactly one canonical tag`);
  const canonicalUrl = new URL(canonical[0], SITE_ORIGIN);
  assert.equal(canonicalUrl.origin, SITE_ORIGIN, `${pathname} canonical points to another origin`);
  assert.equal(normalizePath(canonicalUrl.pathname), pathname, `${pathname} canonical path does not self-reference`);

  const jsonLd = extractJsonLd(html, pathname);
  schemaTypesByPath.set(pathname, collectSchemaTypes(jsonLd));
}

const requiredSchemas = new Map([
  ["/", ["FAQPage", "Service"]],
  ["/faqs", ["FAQPage"]],
  [ADVISORY_PATH, ["WebPage", "BreadcrumbList", "FAQPage"]],
  ["/services/portador-sos", ["WebPage", "Service", "BreadcrumbList", "FAQPage"]],
  ["/airports/delhi-igi-airport", ["WebPage", "Service", "BreadcrumbList", "FAQPage"]]
]);
for (const [pathname, requiredTypes] of requiredSchemas) {
  const types = schemaTypesByPath.get(pathname);
  requiredTypes.forEach((type) => assert.ok(types?.has(type), `${pathname} is missing ${type} schema`));
}

const redirectSources = customRedirects.map((redirect) => redirect.source);
function resolvesThroughRedirect(pathname) {
  return redirectSources.some((source) => {
    if (!source.includes(":")) return normalizePath(source) === pathname;
    const prefix = source.split(":")[0].replace(/\/$/, "");
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  });
}

const brokenInternalLinks = new Set();
for (const [sourcePath, html] of htmlByPath) {
  const hrefs = [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const href of hrefs) {
    const pathname = internalPathFromHref(href);
    if (!pathname || sitemapSet.has(pathname) || resolvesThroughRedirect(pathname)) continue;
    brokenInternalLinks.add(`${sourcePath} -> ${pathname}`);
  }
}
assert.deepEqual([...brokenInternalLinks], [], `Broken internal links found:\n${[...brokenInternalLinks].join("\n")}`);

const requiredHeaderKeys = ["x-content-type-options", "x-frame-options", "referrer-policy", "permissions-policy"];
const configuredHeaderKeys = new Set(
  (manifest.headers ?? []).flatMap((entry) => entry.headers ?? []).map((header) => header.key.toLowerCase())
);
requiredHeaderKeys.forEach((key) => assert.ok(configuredHeaderKeys.has(key), `Missing security header: ${key}`));

const analyticsSource = read("lib/analytics.ts");
assert.ok(analyticsSource.includes("GTM-T39648NN"), "Protected GTM ID changed or is missing");
assert.ok(analyticsSource.includes("G-9EJGWW5DXM"), "Protected GA4 ID changed or is missing");
const trackingFormSource = read("components/tracking-form.tsx");
assert.ok(!trackingFormSource.includes("awb_length"), "Tracking analytics still records AWB length");
const trackingAnalyticsPayload = trackingFormSource.match(/pushAnalyticsEvent\("tracking_form_submit",\s*\{([\s\S]*?)\}\);/)?.[1] ?? "";
assert.ok(!trackingAnalyticsPayload.includes("destination"), "Tracking analytics still records an AWB-bearing destination");
assert.ok(trackingFormSource.includes("window.location.href = destination"), "PORTADOR-OPS tracking redirect changed");

console.log(JSON.stringify({
  canonicalRoutesPreserved: protectedPaths.length,
  sitemapUrls: sitemapPaths.length,
  legacyRedirectsPreserved: customRedirects.length,
  founderFaqsPreserved: 385,
  canonicalTagsValidated: sitemapPaths.length,
  jsonLdPagesValidated: sitemapPaths.length,
  brokenInternalLinks: brokenInternalLinks.size,
  representativeRoutesValidated: representativePaths.length,
  securityHeadersValidated: requiredHeaderKeys.length
}, null, 2));
