import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SubPageHero, ContentSections, CtaFooter } from "@/components/layout/SubPage";
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
        { property: "og:url", content: `/resources/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/resources/${params.slug}` }],
    };
  },
  component: ResourcePage,
  notFoundComponent: () => <div className="p-20 text-center">Resource not found</div>,
});

function ResourcePage() {
  const { resource } = Route.useLoaderData();
  const { lang } = useI18n();
  const pick = (o: { en: any; de: any }): any => (lang === "de" ? o.de : o.en);
  return (
    <SiteShell>
      <SubPageHero eyebrow={pick(resource.eyebrow)} title={pick(resource.title)} lede={pick(resource.lede)} />
      <ContentSections sections={resource.sections.map((s: any) => ({ heading: pick(s.heading), body: pick(s.body) }))} />
      <CtaFooter />
    </SiteShell>
  );
}
