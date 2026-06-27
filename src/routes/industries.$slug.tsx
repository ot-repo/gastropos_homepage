import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, FaqList, CtaFooter } from "@/components/layout/SubPage";
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
      scripts: i.faq.length
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: i.faq.map((f) => ({
                "@type": "Question",
                name: f.q.en,
                acceptedAnswer: { "@type": "Answer", text: f.a.en },
              })),
            }),
          }]
        : undefined,
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
      <ContentSections sections={industry.sections.map((s: any) => ({ heading: pick(s.heading), body: pick(s.body) }))} />
      <section className="border-t border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{lang === "de" ? "Was Kunden sagen" : "What customers say"}</p>
          <blockquote className="mt-5 font-display text-xl font-semibold leading-relaxed tracking-tight md:text-2xl text-balance">
            {pick(industry.proof)}
          </blockquote>
        </div>
      </section>
      <FaqList items={industry.faq.map((f: any) => ({ q: pick(f.q), a: pick(f.a) }))} />
      <CtaFooter />
    </SiteShell>
  );
}
