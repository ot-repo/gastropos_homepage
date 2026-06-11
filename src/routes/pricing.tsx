import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — GastroPos Cloud POS from €39/month" },
      { name: "description", content: "Simple, transparent pricing. Every feature in every plan — only line-item limits differ. Klein €39, Standard €59, Premium €79 per month." },
      { property: "og:title", content: "Pricing — GastroPos Cloud POS" },
      { property: "og:description", content: "Every feature in every plan. €39, €59 or €79 per month. No setup fee, cancel anytime." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const tiers = [
  { name: "Klein", price: 39, quota: { en: "1,500 line items / month", de: "1.500 Positionen / Monat" } },
  { name: "Standard", price: 59, quota: { en: "3,000 line items / month", de: "3.000 Positionen / Monat" }, featured: true },
  { name: "Premium", price: 79, quota: { en: "Unlimited line items", de: "Unbegrenzte Positionen" } },
];

const features = {
  en: ["Cloud POS for tablet & phone", "Kitchen display system", "Waiter app & QR ordering", "Online ordering site", "TSE + DSFinV-K + DATEV", "Inventory & recipe costing", "Multi-store dashboard", "Customer CRM & loyalty", "24/7 support"],
  de: ["Cloud-Kasse für Tablet & Smartphone", "Küchenmonitor", "Kellner-App & QR-Bestellung", "Online-Bestellseite", "TSE + DSFinV-K + DATEV", "Warenwirtschaft & Kalkulation", "Multi-Filial-Dashboard", "Kunden-CRM & Treue", "24/7 Support"],
};

function Pricing() {
  const { lang, t } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Preise" : "Pricing"}
        title={lang === "de" ? "Eine Plattform. Drei einfache Pakete." : "One platform. Three simple plans."}
        lede={lang === "de" ? "Jede Funktion ist in jedem Paket enthalten. Nur die Anzahl der Positionen pro Monat unterscheidet sich. Wir zählen die Positionen in einer Bestellung — nicht die Bestellung selbst." : "Every feature is included in every plan. Only the number of line items per month differs. We count the line items in an order — not the order itself."}
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border p-8 ${tier.featured ? "border-accent bg-accent-soft/40 shadow-elegant" : "border-border bg-surface/50"}`}>
              {tier.featured && <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">{lang === "de" ? "Beliebt" : "Most popular"}</p>}
              <h3 className="font-display text-2xl font-extrabold">{tier.name}</h3>
              <p className="mt-4 flex items-baseline gap-1"><span className="font-display text-5xl font-extrabold">€{tier.price}</span><span className="text-sm text-muted-foreground">/{lang === "de" ? "Monat" : "month"}</span></p>
              <p className="mt-3 rounded-full bg-secondary px-3 py-1 inline-block text-xs font-semibold">{lang === "de" ? tier.quota.de : tier.quota.en}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {(lang === "de" ? features.de : features.en).map((f) => (
                  <li key={f} className="flex gap-2"><Check className="size-4 shrink-0 text-accent" />{f}</li>
                ))}
              </ul>
              <Link to="/demo" className="mt-8 block w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground">{t.common.bookDemo}</Link>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">{lang === "de" ? "Alle Preise zzgl. MwSt. Keine Einrichtungsgebühr. Monatlich kündbar." : "All prices excl. VAT. No setup fee. Cancel monthly."}</p>
      </section>
      <CtaFooter />
    </SiteShell>
  );
}
