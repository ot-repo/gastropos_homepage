import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare GastroPos vs Lightspeed, Vectron, GastroSoft" },
      {
        name: "description",
        content:
          "How GastroPos compares against legacy POS systems on TSE compliance, offline reliability, KDS, multi-store and total cost.",
      },
      { property: "og:title", content: "Compare GastroPos vs other POS systems" },
      {
        property: "og:description",
        content:
          "Feature-by-feature comparison: TSE, offline, KDS, multi-store, total cost of ownership.",
      },
      { property: "og:url", content: absoluteUrl("/compare") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/compare") }],
  }),
  component: Compare,
});

const rows = [
  { label: { en: "Cloud-native", de: "Cloud-nativ" }, ot: true, legacy: false },
  { label: { en: "TSE included", de: "TSE inklusive" }, ot: true, legacy: false },
  { label: { en: "Offline-first", de: "Offline-first" }, ot: true, legacy: false },
  { label: { en: "KDS included", de: "KDS inklusive" }, ot: true, legacy: false },
  {
    label: { en: "Online ordering included", de: "Online-Bestellung inklusive" },
    ot: true,
    legacy: false,
  },
  { label: { en: "Multi-store dashboard", de: "Multi-Filial-Dashboard" }, ot: true, legacy: false },
  {
    label: { en: "Setup in under 2 hours", de: "Setup in unter 2 Stunden" },
    ot: true,
    legacy: false,
  },
  { label: { en: "Monthly cancellable", de: "Monatlich kündbar" }, ot: true, legacy: false },
];

function Compare() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Vergleich" : "Compare"}
        title={
          lang === "de"
            ? "GastroPos vs klassische Kassensysteme"
            : "GastroPos vs legacy POS systems"
        }
        lede={
          lang === "de"
            ? "Funktion für Funktion: Sehen Sie, was Sie mit einer modernen Cloud-Kasse bekommen, das Legacy-Systeme einfach nicht liefern können."
            : "Feature by feature: see what you get with a modern cloud POS that legacy systems simply cannot deliver."
        }
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">
                    {lang === "de" ? "Funktion" : "Feature"}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-accent">GastroPos</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground">
                    {lang === "de" ? "Klassisch" : "Legacy POS"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label.en} className="border-t border-border">
                    <td className="px-6 py-4">{lang === "de" ? r.label.de : r.label.en}</td>
                    <td className="px-6 py-4 text-center">
                      {r.ot ? (
                        <Check className="mx-auto size-5 text-success" />
                      ) : (
                        <X className="mx-auto size-5 text-muted-foreground" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {r.legacy ? (
                        <Check className="mx-auto size-5 text-success" />
                      ) : (
                        <X className="mx-auto size-5 text-muted-foreground" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {lang === "de"
              ? "Wechseln von einer anderen Kasse? Wir migrieren Ihr Menü und Ihre Stammdaten kostenlos."
              : "Switching from another POS? We migrate your menu and master data for free."}{" "}
            <Link to="/demo" className="text-accent font-semibold">
              {lang === "de" ? "Demo buchen" : "Book a demo"}
            </Link>
          </p>
        </div>
      </section>
      <CtaFooter />
    </SiteShell>
  );
}
