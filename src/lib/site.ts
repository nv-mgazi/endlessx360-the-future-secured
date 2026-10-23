// Single source of truth for public page metadata.
// The same values drive the in-app <Helmet> tags and the per-route HTML
// generated at build time (see the route-metadata plugin in vite.config.ts).

export const SITE_URL = "https://endlessx360.co.za";
export const OG_IMAGE = `${SITE_URL}/og-endlessx360.jpg`;

export type RouteMeta = {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/privacy". Used for canonical and og:url. */
  path: string;
  noindex?: boolean;
};

export const HOME_META: RouteMeta = {
  title: "EndlessX360 | Building Technology for What's Next",
  description:
    "EndlessX360 develops software, digital platforms, artificial intelligence and security-focused technology solutions. Based in Durban, South Africa.",
  path: "/",
};

export const PRIVACY_META: RouteMeta = {
  title: "Privacy Policy | EndlessX360",
  description:
    "Learn how EndlessX360 handles website information, enquiries and personal information in accordance with its privacy notice.",
  path: "/privacy",
};

/** Routes that get their own HTML head in the production build output. */
export const STATIC_ROUTES: ReadonlyArray<RouteMeta> = [PRIVACY_META];
