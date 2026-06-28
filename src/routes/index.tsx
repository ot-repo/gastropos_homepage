import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { AiCapabilities, StatsStrip, BuiltFor, FinalCta, SocialProof, KeyBenefits, ProductShowcase } from "@/components/home/Sections";
import { DashboardDemo } from "@/components/home/DashboardDemo";
import { Testimonials } from "@/components/home/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GastroPos — AI-Powered Gastronomy Platform & POS" },
      {
        name: "description",
        content:
          "The AI-powered cloud platform for gastronomy. POS, KDS, QR ordering, reservations, and AI routing in one unified system.",
      },
      { property: "og:title", content: "GastroPos — AI-Powered Gastronomy Platform & POS" },
      {
        property: "og:description",
        content:
          "POS, KDS, QR ordering, and reservations connected by a smart voice assistant. Scalable for restaurants, cafés, and service businesses.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <SocialProof />
      <ProductShowcase />
      <DashboardDemo />
      <StatsStrip />
      <BuiltFor />
      <Testimonials />
      <FinalCta />
    </SiteShell>
  );
}
