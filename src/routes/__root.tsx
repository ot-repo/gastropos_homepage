import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider, useI18n } from "../lib/i18n/context";
import { SITE_URL, absoluteUrl, OG_IMAGE } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again, or head back home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-accent"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-secondary"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GastroPos — Cloud POS for restaurants, retail & service businesses" },
      {
        name: "description",
        content:
          "GastroPos is the cloud POS platform engineered for European hospitality and retail. TSE & DATEV compliant, offline-first, with KDS, QR ordering, inventory, and multi-store analytics.",
      },
      { name: "author", content: "GastroPos GmbH" },
      { property: "og:site_name", content: "GastroPos" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "GastroPos — Cloud POS for restaurants, retail & service businesses",
      },
      {
        property: "og:description",
        content:
          "GastroPos is the cloud POS platform engineered for European hospitality and retail. TSE & DATEV compliant, offline-first, with KDS, QR ordering, inventory, and multi-store analytics.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@GastroPos" },
      { name: "theme-color", content: "#0F172A" },
      {
        name: "twitter:title",
        content: "GastroPos — Cloud POS for restaurants, retail & service businesses",
      },
      {
        name: "twitter:description",
        content:
          "GastroPos is the cloud POS platform engineered for European hospitality and retail. TSE & DATEV compliant, offline-first, with KDS, QR ordering, inventory, and multi-store analytics.",
      },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GastroPos",
          url: SITE_URL,
          logo: absoluteUrl("/favicon.svg"),
          sameAs: [],
          description:
            "Cloud POS platform for restaurants, retail and service businesses across Europe.",
          address: { "@type": "PostalAddress", addressLocality: "Munich", addressCountry: "DE" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "GastroPos",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Android, iOS, Windows, macOS, Web",
          offers: { "@type": "Offer", price: "49", priceCurrency: "EUR" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/** Syncs <html lang> with the active i18n language after hydration. */
function HtmlLangSync() {
  const { lang } = useI18n();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <HtmlLangSync />
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
