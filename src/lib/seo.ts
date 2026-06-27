/**
 * Central SEO constants used across all routes for canonical URLs,
 * Open Graph tags, sitemap generation, and hreflang links.
 *
 * Change SITE_URL when the production domain is ready.
 */

export const SITE_URL = "https://www.gastropos.com";

/** Build an absolute URL from a relative path (e.g. "/pricing" → "https://www.gastropos.com/pricing"). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/** OG image used as default across all pages (absolute URL). */
export const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ad137272-001b-4c66-bed1-b4f11ed3b04d/id-preview-7638e9eb--3b22a1a5-3d65-4235-85c2-8c259e63c40e.lovable.app-1780505889467.png";
