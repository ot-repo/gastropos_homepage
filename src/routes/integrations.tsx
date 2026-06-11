import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Stripe, DATEV, Shopify, Mailchimp | GastroPos" },
      { name: "description", content: "GastroPos integrates with Stripe, SumUp, PayPal, DATEV, Lexoffice, Shopify, Mailchimp, Klaviyo, Lieferando, Uber Eats and more." },
      { property: "og:url", content: "/integrations" },
    ],
    links: [{ rel: "canonical", href: "/integrations" }],
  }),
  component: Integrations,
});

const groups = [
  { title: { en: "Payments", de: "Zahlungen" }, items: ["Stripe", "SumUp", "PayPal", "Adyen", "Mollie", "Apple Pay", "Google Pay"] },
  { title: { en: "Accounting", de: "Buchhaltung" }, items: ["DATEV Unternehmen online", "Lexoffice", "sevDesk", "Sage", "BuchhaltungsButler"] },
  { title: { en: "Delivery", de: "Lieferung" }, items: ["Lieferando / Just Eat", "Uber Eats", "Wolt", "Deliveroo", "Smoodi"] },
  { title: { en: "Retail & E-commerce", de: "Handel & E-Commerce" }, items: ["Shopify", "WooCommerce", "Shopware"] },
  { title: { en: "Marketing & CRM", de: "Marketing & CRM" }, items: ["Mailchimp", "Klaviyo", "Brevo", "Zapier", "Make"] },
  { title: { en: "Hardware", de: "Hardware" }, items: ["Epson printers", "Star printers", "Zebra scanners", "Mettler scales", "Fiskaly TSE"] },
];

function Integrations() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Integrationen" : "Integrations"}
        title={lang === "de" ? "Verbunden mit den Tools, die Sie bereits nutzen." : "Connected to the tools you already use."}
        lede={lang === "de" ? "Zahlungen, Buchhaltung, Lieferung, E-Commerce, CRM und Hardware — GastroPos spricht mit allem." : "Payments, accounting, delivery, e-commerce, CRM and hardware — GastroPos talks to it all."}
      />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title.en} className="rounded-2xl border border-border bg-surface/50 p-6">
              <h3 className="font-display text-lg font-extrabold">{lang === "de" ? g.title.de : g.title.en}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CtaFooter />
    </SiteShell>
  );
}
