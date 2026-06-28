// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const productSlugs = [
  "pos",
  "waiter-ordering",
  "qr-ordering",
  "kitchen-display",
  "online-ordering",
  "inventory",
  "cash-book",
  "datev-export",
  "analytics",
];

const industrySlugs = [
  "restaurant",
  "cafe",
  "bar",
  "bakery",
  "food-truck",
  "kiosk",
  "retail",
  "hair-salon",
  "beauty-salon",
  "service-business",
];

const resourceSlugs = ["blog", "help", "pos-guide", "tse-guide", "datev-guide"];

const legalSlugs = ["privacy", "terms", "impressum", "cookies"];

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/demo",
  "/pricing",
  "/compare",
  "/partners",
  "/affiliate",
  "/signin",
];

// Explicit list of every page to prerender to static HTML. Dynamic routes
// (product/industries/resources/legal) aren't all link-discoverable, so we
// enumerate their slugs here in addition to crawlLinks.
const prerenderPages = [
  ...staticPaths,
  ...productSlugs.map((s) => `/product/${s}`),
  ...industrySlugs.map((s) => `/industries/${s}`),
  ...resourceSlugs.map((s) => `/resources/${s}`),
  ...legalSlugs.map((s) => `/legal/${s}`),
].map((path) => ({ path }));

export default defineConfig({
  // Disable Nitro so TanStack Start runs its native build + preview-server
  // prerenderer, emitting static HTML into dist/client (deployed to Firebase).
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: prerenderPages,
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: false,
    },
  },
});
