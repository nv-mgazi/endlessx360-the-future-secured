import { test, expect } from "bun:test";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PRIVACY_META, SITE_URL, STATIC_ROUTES } from "./site";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const html = readFileSync(join(root, "index.html"), "utf8");
const robots = readFileSync(join(root, "public", "robots.txt"), "utf8");

const jpegSize = (path: string): [number, number] => {
  const buf = readFileSync(path);
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    const isFrame = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isFrame) return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
    i += 2 + buf.readUInt16BE(i + 2);
  }
  throw new Error("no JPEG start-of-frame marker");
};

test("public metadata uses the official domain and never the Lovable preview host", () => {
  expect(html).not.toContain("lovable.app");
  expect(html).toContain('content="https://endlessx360.co.za/"');
});

test("no personal contact data is printed in the document head", () => {
  expect(html).not.toContain("790267179");
  expect(html).not.toContain("27 79 026 7179");
  expect(html).not.toContain("gmail");
  expect(html).not.toContain("Anton Lembede");
});

test("homepage title and description match the approved copy", () => {
  expect(html).toContain("<title>EndlessX360 | Building Technology for What's Next</title>");
  expect(html).toContain(
    'EndlessX360 develops software, digital platforms, artificial intelligence and security-focused technology solutions. Based in Durban, South Africa.'
  );
});

test("structured data parses and describes the company without invented identifiers", () => {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match).not.toBeNull();
  const data = JSON.parse(match![1]);
  const serialised = JSON.stringify(data);
  expect(data["@graph"].map((n: { "@type": string }) => n["@type"])).toEqual(
    expect.arrayContaining(["WebSite", "Organization"])
  );
  // Nothing fabricated: no registration numbers, no phone, no email, no profiles.
  for (const key of ["telephone", "email", "sameAs", "vatID", "foundingDate", "award"]) {
    expect(serialised).not.toContain(key);
  }
  expect(serialised).not.toContain("lovable.app");
});

test("the share image exists at the referenced link-preview size", () => {
  const path = join(root, "public", "og-endlessx360.jpg");
  expect(existsSync(path)).toBe(true);
  expect(jpegSize(path)).toEqual([1200, 630]);
  expect(html).toContain('content="https://endlessx360.co.za/og-endlessx360.jpg"');
});

test("crawlers are not blocked from the public site", () => {
  expect(robots).not.toMatch(/Disallow:\s*\/\s*$/m);
  expect(robots).toContain("Allow: /");
});

test("the privacy route carries its own approved metadata", () => {
  expect(SITE_URL).toBe("https://endlessx360.co.za");
  expect(STATIC_ROUTES.map((r) => r.path)).toContain("/privacy");
  expect(PRIVACY_META.title).toBe("Privacy Policy | EndlessX360");
  expect(PRIVACY_META.description).toContain("privacy notice");
});
