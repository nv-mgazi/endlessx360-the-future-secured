import { waLink } from "./contact";

export type SocialPlatform = "whatsapp" | "facebook" | "instagram" | "tiktok";

// Add official profile URLs here when the accounts are available.
export const SOCIAL_ACCOUNTS: ReadonlyArray<{
  id: SocialPlatform;
  name: string;
  url: string | null;
}> = [
  { id: "whatsapp", name: "WhatsApp", url: waLink() },
  { id: "facebook", name: "Facebook", url: null },
  { id: "instagram", name: "Instagram", url: null },
  { id: "tiktok", name: "TikTok", url: null },
];

export const socialHref = (url: string | null): string | undefined => {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && !parsed.username && !parsed.password ? parsed.href : undefined;
  } catch {
    return undefined;
  }
};