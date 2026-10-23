import { describe, expect, test } from "bun:test";
import { SOCIAL_ACCOUNTS, socialHref } from "./social";
import { waLink } from "./contact";

describe("official social account availability", () => {
  test("WhatsApp retains the existing conversation destination", () => {
    expect(socialHref(SOCIAL_ACCOUNTS.find((account) => account.id === "whatsapp")?.url ?? null)).toBe(waLink());
  });
  for (const id of ["facebook", "instagram", "tiktok"] as const) {
    test(`${id} has no invented account or platform homepage link`, () => {
      const account = SOCIAL_ACCOUNTS.find((entry) => entry.id === id);
      expect(account?.url).toBe(null);
      expect(socialHref(account?.url ?? null)).toBeUndefined();
    });
  }
  test("a future HTTPS profile can become a link, but unsafe schemes cannot", () => {
    expect(socialHref("https://example.com/official-profile")).toBe("https://example.com/official-profile");
    expect(socialHref("javascript:alert(1)")).toBeUndefined();
  });
});