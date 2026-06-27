import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/affiliate")({
  head: () => ({
    meta: [
      { title: "Affiliate Program — Earn with GastroPos" },
      {
        name: "description",
        content:
          "Refer hospitality and retail operators to GastroPos. Earn up to €300 per qualified signup, plus recurring revenue share.",
      },
      { property: "og:url", content: absoluteUrl("/affiliate") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/affiliate") }],
  }),
  component: Affiliate,
});

function Affiliate() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Affiliate" : "Affiliate"}
        title={lang === "de" ? "Verdienen Sie mit jeder Empfehlung." : "Earn from every referral."}
        lede={
          lang === "de"
            ? "Bis zu 300 € pro qualifizierter Anmeldung plus 10 % wiederkehrende Umsatzbeteiligung — lebenslang."
            : "Up to €300 per qualified signup plus 10% recurring revenue share — for life."
        }
      />
      <ContentSections
        sections={[
          {
            heading: lang === "de" ? "Wie es funktioniert" : "How it works",
            body:
              lang === "de"
                ? "1) Anmelden und einen einzigartigen Empfehlungslink erhalten. 2) Teilen mit Ihrem Netzwerk. 3) Auszahlung jeden Monat via Banküberweisung oder PayPal."
                : "1) Sign up and get a unique referral link. 2) Share with your network. 3) Get paid monthly via bank transfer or PayPal.",
          },
          {
            heading: lang === "de" ? "Wer eignet sich" : "Who it's for",
            body:
              lang === "de"
                ? "Berater, Agenturen, Food-Blogger, Hospitality-Influencer und alle, die mit Gastronomie- oder Handelsbetreiber:innen sprechen."
                : "Consultants, agencies, food bloggers, hospitality influencers and anyone who talks to hospitality or retail operators.",
          },
        ]}
      />
      <CtaFooter />
    </SiteShell>
  );
}
