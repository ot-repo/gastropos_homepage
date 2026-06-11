import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { SocialProof, KeyBenefits, ProductShowcase, IndustriesGrid, FeatureBento, Testimonials, PricingPreview, Faq, FinalCta } from "@/components/home/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GastroPos — Cloud POS for restaurants, retail & service businesses" },
      { name: "description", content: "TSE & DATEV compliant cloud POS for European hospitality and retail. KDS, QR ordering, inventory, analytics, multi-store. Live in under 2 hours." },
      { property: "og:title", content: "GastroPos — The infrastructure of modern commerce" },
      { property: "og:description", content: "Precision-engineered cloud POS for restaurants, cafés, bars, retail and service businesses." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <SocialProof />
      <KeyBenefits />
      <ProductShowcase />
      <IndustriesGrid />
      <FeatureBento />
      <Testimonials />
      <PricingPreview />
      <Faq />
      <FinalCta />
    </SiteShell>
  );
}
