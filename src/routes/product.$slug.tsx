import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, FeatureList, ContentSections, FaqList, CtaFooter } from "@/components/layout/SubPage";
import { products, type ProductSlug } from "@/content/products";
import { useI18n } from "@/lib/i18n/context";
import kdsHero from "@/assets/kds-hero.jpg";
import posHero from "@/assets/pos-hero.jpg";
import posTableside from "@/assets/pos-tableside.jpg";
import posAnalytics from "@/assets/pos-analytics.jpg";
import cashbookHero from "@/assets/cashbook-hero.jpg";
import cashbookReconcile from "@/assets/cashbook-reconcile.jpg";
import cashbookDatev from "@/assets/cashbook-datev.jpg";
import waiterHero from "@/assets/waiter-hero.jpg";
import waiterNotifications from "@/assets/waiter-notifications.jpg";
import waiterPayment from "@/assets/waiter-payment.jpg";
import qrHero from "@/assets/qr-hero.jpg";
import qrMenu from "@/assets/qr-menu.jpg";
import qrAdmin from "@/assets/qr-admin.jpg";

const PRODUCT_IMAGES: Partial<Record<ProductSlug, { src: string; alt: string }>> = {
  "kitchen-display": { src: kdsHero, alt: "AI-powered Kitchen Display System in a professional kitchen" },
  pos: { src: posHero, alt: "GastroPos cloud POS tablet with receipt printer and cash drawer on a bar counter" },
  "cash-book": { src: cashbookHero, alt: "GastroPos digital cash book on a tablet next to an open cash drawer with euro notes and coins" },
  "waiter-ordering": { src: waiterHero, alt: "Waiter taking an order on a smartphone at a restaurant table" },
  "qr-ordering": { src: qrHero, alt: "Restaurant guest scanning a QR code on the table with a smartphone" },
};


const PRODUCT_GALLERY: Partial<Record<ProductSlug, { src: string; alt: string; caption: { en: string; de: string } }[]>> = {
  pos: [
    {
      src: posTableside,
      alt: "Waiter taking an order on a GastroPos tablet at a restaurant table",
      caption: {
        en: "Take orders tableside and fire them to the kitchen before you leave the table.",
        de: "Bestellungen am Tisch aufnehmen und an die Küche senden, bevor Sie den Tisch verlassen.",
      },
    },
    {
      src: posAnalytics,
      alt: "GastroPos analytics dashboard on a laptop showing daily sales and top menu items",
      caption: {
        en: "Live analytics and AI forecasts on every device — see what's selling, what's slow and what's coming.",
        de: "Live-Analysen und KI-Prognosen auf jedem Gerät — sehen Sie, was läuft, was nicht und was kommt.",
      },
    },
  ],
  "cash-book": [
    {
      src: cashbookReconcile,
      alt: "Manager counting euro banknotes next to a tablet showing the end-of-day Z-report",
      caption: {
        en: "Guided Kassensturz: count, compare, sign off — your end-of-day in minutes, not hours.",
        de: "Geführter Kassensturz: zählen, abgleichen, freigeben — Tagesabschluss in Minuten statt Stunden.",
      },
    },
    {
      src: cashbookDatev,
      alt: "Tax advisor reviewing a DATEV-formatted cash book export on a laptop",
      caption: {
        en: "One-click DATEV export, mapped to the correct Konten — your Steuerberater will thank you.",
        de: "Ein-Klick-DATEV-Export, korrekt auf die Konten gemappt — Ihr Steuerberater dankt es Ihnen.",
      },
    },
  ],
  "waiter-ordering": [
    {
      src: waiterNotifications,
      alt: "Waiter looking at the notifications panel with a red badge counter on a smartphone",
      caption: {
        en: "A red badge counter surfaces every urgent update — from the kitchen and from the self-ordering module.",
        de: "Ein roter Badge-Counter zeigt jeden wichtigen Hinweis — aus der Küche und aus dem Self-Ordering-Modul.",
      },
    },
    {
      src: waiterPayment,
      alt: "Waiter taking a card payment at the table next to a small POS receipt printer",
      caption: {
        en: "Every waiter device acts as a POS — pay together or split, then print the invoice on the assigned POS printer.",
        de: "Jedes Kellner-Gerät ist eine Kasse — gemeinsam oder getrennt zahlen und die Rechnung auf dem hinterlegten POS-Drucker drucken.",
      },
    },
  ],
  "qr-ordering": [
    {
      src: qrMenu,
      alt: "Guest browsing a restaurant's digital menu on a smartphone after scanning a QR code at the table",
      caption: {
        en: "Guests browse categories, search dishes, remove ingredients and pick variants — all in their mobile browser, no app required.",
        de: "Gäste durchstöbern Kategorien, suchen Gerichte, entfernen Zutaten und wählen Varianten — alles im mobilen Browser, ganz ohne App.",
      },
    },
    {
      src: qrAdmin,
      alt: "Manager generating a unique QR code for a specific table in the GastroPos self-order settings",
      caption: {
        en: "Generate a unique QR code per table from Master Data → Tables. Save it to your gallery, print it, or tap Renew to issue a fresh code.",
        de: "Eindeutigen QR-Code pro Tisch unter Stammdaten → Tische erzeugen. In der Galerie speichern, drucken oder mit „Erneuern“ einen neuen Code ausstellen.",
      },
    },
  ],
};

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = products[params.slug as ProductSlug];
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const p = loaderData.product;
    return {
      meta: [
        { title: p.metaTitle.en },
        { name: "description", content: p.metaDescription.en },
        { property: "og:title", content: p.metaTitle.en },
        { property: "og:description", content: p.metaDescription.en },
        { property: "og:url", content: `/product/${params.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/product/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.metaTitle.en,
          description: p.metaDescription.en,
          brand: { "@type": "Brand", name: "GastroPos" },
        }),
      }],
    };
  },
  component: ProductPage,
  notFoundComponent: () => <div className="p-20 text-center">Product not found</div>,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const params = Route.useParams();
  const { lang } = useI18n();
  const pick = (o: { en: any; de: any }): any => (lang === "de" ? o.de : o.en);
  const image = PRODUCT_IMAGES[params.slug as ProductSlug];
  const gallery = PRODUCT_GALLERY[params.slug as ProductSlug];
  return (
    <SiteShell>
      <SubPageHero eyebrow={pick(product.eyebrow)} title={pick(product.title)} lede={pick(product.lede)} />
      {image && (
        <section className="border-b border-border bg-surface/40 pb-20">
          <div className="mx-auto max-w-5xl px-6 -mt-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elegant">
              <img
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}
      <FeatureList items={pick(product.features)} />
      {gallery && (
        <section className="border-t border-border bg-surface/40 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
            {gallery.map((g) => (
              <figure key={g.src} className="group">
                <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-elegant">
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">{pick(g.caption)}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <ContentSections sections={product.sections.map((s: any) => ({ heading: pick(s.heading), body: pick(s.body) }))} />
      <FaqList items={product.faq.map((f: any) => ({ q: pick(f.q), a: pick(f.a) }))} />
      <CtaFooter />
    </SiteShell>
  );
}
