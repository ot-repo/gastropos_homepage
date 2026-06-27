import { createFileRoute, notFound } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

type LegalSlug = "privacy" | "terms" | "impressum" | "cookies";

const legal: Record<
  LegalSlug,
  {
    title: { en: string; de: string };
    meta: { en: string; de: string };
    body: { en: string; de: string };
  }
> = {
  privacy: {
    title: { en: "Privacy Policy", de: "Datenschutzerklärung" },
    meta: {
      en: "GastroPos privacy policy — how we collect, use and protect your data under GDPR.",
      de: "Datenschutzerklärung von GastroPos — wie wir Ihre Daten gemäß DSGVO erheben, nutzen und schützen.",
    },
    body: {
      en: 'GastroPos GmbH ("we", "us") processes personal data in compliance with the EU General Data Protection Regulation (GDPR). We collect only the data we need to operate your POS account: business contact details, transaction records, and the user accounts you create. Transaction data is stored in EU data centers (Frankfurt and Amsterdam). We never sell your data. You may request access, correction or deletion of your data at any time by emailing privacy@gastropos.com. Our Data Protection Officer can be reached at dpo@gastropos.com.',
      de: "Die GastroPos GmbH („wir“) verarbeitet personenbezogene Daten gemäß der EU-Datenschutz-Grundverordnung (DSGVO). Wir erheben nur die Daten, die wir zum Betrieb Ihres Kassen-Kontos benötigen: geschäftliche Kontaktdaten, Transaktionsdaten und die von Ihnen erstellten Benutzerkonten. Transaktionsdaten werden in EU-Rechenzentren (Frankfurt und Amsterdam) gespeichert. Wir verkaufen Ihre Daten niemals. Sie können jederzeit Auskunft, Korrektur oder Löschung Ihrer Daten unter privacy@gastropos.com anfordern. Unseren Datenschutzbeauftragten erreichen Sie unter dpo@gastropos.com.",
    },
  },
  terms: {
    title: { en: "Terms of Service", de: "Allgemeine Geschäftsbedingungen" },
    meta: {
      en: "GastroPos terms of service — the agreement that governs use of our cloud POS platform.",
      de: "GastroPos Allgemeine Geschäftsbedingungen — die Vereinbarung über die Nutzung unserer Cloud-Kassenplattform.",
    },
    body: {
      en: "These Terms govern your use of GastroPos. By creating an account you agree to a monthly subscription that can be cancelled at any time with effect from the end of the current billing period. We commit to 99.9% uptime SLA and immediate notification of any incident affecting your service. You retain ownership of all your business data and may export it at any time. We may suspend service for breach of these terms, illegal use, or non-payment after 14 days of overdue invoice.",
      de: "Diese AGB regeln Ihre Nutzung von GastroPos. Mit der Kontoerstellung schließen Sie ein monatliches Abonnement ab, das jederzeit zum Ende des laufenden Abrechnungszeitraums gekündigt werden kann. Wir verpflichten uns zu einer Verfügbarkeit von 99,9 % und zur sofortigen Benachrichtigung bei jedem Vorfall, der Ihren Dienst betrifft. Sie behalten das Eigentum an allen Ihren Geschäftsdaten und können diese jederzeit exportieren. Wir können den Dienst bei Verstoß gegen diese AGB, illegaler Nutzung oder nach 14 Tagen Zahlungsverzug aussetzen.",
    },
  },
  impressum: {
    title: { en: "Imprint", de: "Impressum" },
    meta: {
      en: "Legal imprint for GastroPos GmbH as required by German law (§5 TMG).",
      de: "Impressum der GastroPos GmbH gemäß § 5 TMG.",
    },
    body: {
      en: "GastroPos GmbH\nMaximilianstraße 13\n80539 München, Germany\n\nManaging Director: Sinan Can\nRegister Court: Amtsgericht München\nRegistration Number: HRB 234567\nVAT-ID: DE312345678\n\nContact: support@gastropos.com\nPhone: +49 201 759 346 94",
      de: "GastroPos GmbH\nMaximilianstraße 13\n80539 München, Deutschland\n\nGeschäftsführer: Sinan Can\nRegistergericht: Amtsgericht München\nRegisternummer: HRB 234567\nUSt-IdNr.: DE312345678\n\nKontakt: support@gastropos.com\nTelefon: +49 201 759 346 94",
    },
  },
  cookies: {
    title: { en: "Cookie Policy", de: "Cookie-Richtlinie" },
    meta: {
      en: "How GastroPos uses cookies and similar technologies on our website and product.",
      de: "Wie GastroPos Cookies und ähnliche Technologien auf unserer Webseite und im Produkt nutzt.",
    },
    body: {
      en: "We use strictly necessary cookies to keep you logged in and protect against fraud. We use analytics cookies (only after you consent) to understand which pages are most useful. We never use advertising cookies. You can withdraw consent at any time through the cookie banner or your browser settings.",
      de: "Wir verwenden technisch notwendige Cookies, um Sie eingeloggt zu halten und vor Betrug zu schützen. Analyse-Cookies setzen wir nur mit Ihrer Einwilligung ein, um zu verstehen, welche Seiten am nützlichsten sind. Werbe-Cookies nutzen wir niemals. Sie können Ihre Einwilligung jederzeit über das Cookie-Banner oder Ihre Browsereinstellungen widerrufen.",
    },
  },
};

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const doc = legal[params.slug as LegalSlug];
    if (!doc) throw notFound();
    return { doc };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const d = loaderData.doc;
    return {
      meta: [
        { title: `${d.title.en} — GastroPos` },
        { name: "description", content: d.meta.en },
        { property: "og:url", content: absoluteUrl(`/legal/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/legal/${params.slug}`) }],
    };
  },
  component: LegalPage,
  notFoundComponent: () => <div className="p-20 text-center">Document not found</div>,
});

function LegalPage() {
  const { doc } = Route.useLoaderData();
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Rechtliches" : "Legal"}
        title={lang === "de" ? doc.title.de : doc.title.en}
        lede=""
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-muted-foreground">
            {lang === "de" ? doc.body.de : doc.body.en}
          </pre>
        </div>
      </section>
    </SiteShell>
  );
}
