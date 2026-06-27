import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, CtaFooter } from "@/components/layout/SubPage";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GastroPos — Built for European operators" },
      {
        name: "description",
        content:
          "GastroPos is the cloud POS platform built in Munich for European hospitality, retail and service businesses. Our mission, story and team.",
      },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: About,
});

function About() {
  const { lang } = useI18n();
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={lang === "de" ? "Über uns" : "About us"}
        title={
          lang === "de"
            ? "Wir bauen die Infrastruktur für moderne Gastronomie und Handel."
            : "We build the infrastructure for modern hospitality and retail."
        }
        lede={
          lang === "de"
            ? "Gegründet 2018 in München. Heute vertrauen 12.000+ Betreiber in ganz Europa auf GastroPos."
            : "Founded in 2018 in Munich. Today 12,000+ operators across Europe run on GastroPos."
        }
      />
      <ContentSections
        sections={[
          {
            heading: lang === "de" ? "Unsere Mission" : "Our mission",
            body:
              lang === "de"
                ? "Wir glauben, dass jedes unabhängige Restaurant, Café und Geschäft die gleichen Werkzeuge verdient wie die größten Ketten — ohne sechsstellige IT-Budgets. Deshalb bauen wir eine Plattform, die in zwei Stunden einsatzbereit ist, monatlich kündbar ist und alles enthält, was Sie zum Betreiben Ihres Geschäfts brauchen."
                : "We believe every independent restaurant, café and shop deserves the same tools as the biggest chains — without six-figure IT budgets. That's why we build a platform that's live in two hours, cancellable monthly, and includes everything you need to run your business.",
          },
          {
            heading: lang === "de" ? "Wo wir sitzen" : "Where we are",
            body:
              lang === "de"
                ? "Hauptsitz in München. Support-Teams in Berlin, Wien und Istanbul. Operativ tätig in Deutschland, Österreich, der Schweiz, den Niederlanden, Frankreich und der Türkei."
                : "Headquartered in Munich. Support teams in Berlin, Vienna and Istanbul. Operating in Germany, Austria, Switzerland, the Netherlands, France and Turkey.",
          },
          {
            heading: lang === "de" ? "Unsere Werte" : "Our values",
            body:
              lang === "de"
                ? "Operator-zuerst. Konform per Design. Ausfallzeit ist nicht verhandelbar. Support antwortet in Minuten, nicht Tagen. Wir versenden nichts, was wir nicht selbst in unseren Partner-Restaurants einsetzen würden."
                : "Operator-first. Compliant by design. Downtime is non-negotiable. Support replies in minutes, not days. We ship nothing we wouldn't deploy in our own partner restaurants.",
          },
        ]}
      />
      <CtaFooter />
    </SiteShell>
  );
}
