import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partner Program — GastroPos" },
      {
        name: "description",
        content:
          "Become a GastroPos partner. Resellers, system integrators, hardware vendors and tax advisors welcome.",
      },
      { property: "og:url", content: absoluteUrl("/partners") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/partners") }],
  }),
  component: Partners,
});

function Partners() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Partner" : "Partners"}
        title={lang === "de" ? "Werden Sie GastroPos-Partner." : "Become a GastroPos partner."}
        lede={
          lang === "de"
            ? "Wiederverkäufer, Systemintegratoren, Hardware-Anbieter und Steuerberater — verdienen Sie wiederkehrende Provisionen, indem Sie eine Plattform empfehlen, die Ihre Kunden lieben."
            : "Resellers, system integrators, hardware vendors and tax advisors — earn recurring commissions by recommending a platform your clients love."
        }
      />
      <ContentSections
        sections={[
          {
            heading: lang === "de" ? "Wiederverkäufer" : "Resellers",
            body:
              lang === "de"
                ? "Verdienen Sie 20 % wiederkehrende Provision auf jeden Kunden, den Sie einbringen. Wir kümmern uns um Onboarding, Support und Abrechnung."
                : "Earn 20% recurring commission on every customer you bring. We handle onboarding, support and billing.",
          },
          {
            heading: lang === "de" ? "Steuerberater" : "Tax advisors",
            body:
              lang === "de"
                ? "Ihre Mandanten brauchen DATEV-kompatible Kassen. Werden Sie zertifizierter Berater und erhalten Sie Vorzugskonditionen für Ihre Mandanten."
                : "Your clients need DATEV-compatible POS systems. Become a certified advisor and unlock preferred terms for your clients.",
          },
          {
            heading: lang === "de" ? "Hardware-Anbieter" : "Hardware vendors",
            body:
              lang === "de"
                ? "Listen Sie Ihre Drucker, Scanner und Terminals in unserem Marktplatz. Direkter Zugang zu 12.000+ Betreibern."
                : "List your printers, scanners and terminals in our marketplace. Direct access to 12,000+ operators.",
          },
        ]}
      />
      <CtaFooter />
    </SiteShell>
  );
}
