import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, FeatureList, ContentSections, CtaFooter } from "@/components/layout/SubPage";
import { industries, type IndustrySlug } from "@/content/industries";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const ind = industries[params.slug as IndustrySlug];
    if (!ind) throw notFound();
    return { industry: ind };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const i = loaderData.industry;
    return {
      meta: [
        { title: i.metaTitle.en },
        { name: "description", content: i.metaDescription.en },
        { property: "og:title", content: i.metaTitle.en },
        { property: "og:description", content: i.metaDescription.en },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  component: IndustryPage,
  notFoundComponent: () => <div className="p-20 text-center">Industry not found</div>,
});

function IndustryPage() {
  const { industry } = Route.useLoaderData();
  const { lang } = useI18n();
  const pick = (o: { en: any; de: any }): any => (lang === "de" ? o.de : o.en);
  return (
    <SiteShell>
      <SubPageHero eyebrow={pick(industry.eyebrow)} title={pick(industry.title)} lede={pick(industry.lede)} />
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-6 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight">{lang === "de" ? "Die Probleme, die wir lösen" : "Problems we solve"}</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {pick(industry.painPoints).map((p: string) => <li key={p} className="border-l-2 border-destructive/40 pl-4">{p}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight">{lang === "de" ? "Was Sie bekommen" : "What you get"}</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {pick(industry.features).map((f: string) => <li key={f} className="border-l-2 border-accent pl-4">{f}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <ContentSections sections={[{ heading: lang === "de" ? "Was Kunden sagen" : "What customers say", body: pick(industry.proof) }]} />
      <CtaFooter />
    </SiteShell>
  );
}
