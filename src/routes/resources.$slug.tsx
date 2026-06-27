import { createFileRoute, notFound } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, FaqList, CtaFooter } from "@/components/layout/SubPage";
import { resources, type ResourceSlug } from "@/content/resources";
import { useI18n } from "@/lib/i18n/context";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const r = resources[params.slug as ResourceSlug];
    if (!r) throw notFound();
    return { resource: r };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const r = loaderData.resource;
    return {
      meta: [
        { title: r.metaTitle.en },
        { name: "description", content: r.metaDescription.en },
        { property: "og:title", content: r.metaTitle.en },
        { property: "og:description", content: r.metaDescription.en },
        { property: "og:url", content: absoluteUrl(`/resources/${params.slug}`) },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/resources/${params.slug}`) }],
      scripts: r.faq.length
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: r.faq.map((f) => ({
                  "@type": "Question",
                  name: f.q.en,
                  acceptedAnswer: { "@type": "Answer", text: f.a.en },
                })),
              }),
            },
          ]
        : undefined,
    };
  },
  component: ResourcePage,
  notFoundComponent: () => <div className="p-20 text-center">Resource not found</div>,
});

function ResourcePage() {
  const { resource } = Route.useLoaderData();
  const { lang } = useI18n();
  type Bilingual<T> = { en: T; de: T };
  const pick = <T,>(o: Bilingual<T>): T => (lang === "de" ? o.de : o.en);
  return (
    <SiteShell>
      <SubPageHero
        eyebrow={pick(resource.eyebrow)}
        title={pick(resource.title)}
        lede={pick(resource.lede)}
      />
      <ContentSections
        sections={resource.sections.map((s) => ({
          heading: pick(s.heading),
          body: pick(s.body),
        }))}
      />
      <FaqList items={resource.faq.map((f) => ({ q: pick(f.q), a: pick(f.a) }))} />
      <CtaFooter />
    </SiteShell>
  );
}
