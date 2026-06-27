import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { AiCapabilities, StatsStrip, BuiltFor, FinalCta } from "@/components/home/Sections";
import { Testimonials } from "@/components/home/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GastroPos — AI-Powered Kitchen Display System" },
      {
        name: "description",
        content:
          "The AI brain behind every kitchen. GastroPos KDS predicts demand, prioritizes orders, and optimizes throughput in real time.",
      },
      { property: "og:title", content: "GastroPos — AI-Powered Kitchen Display System" },
      {
        property: "og:description",
        content:
          "Predict. Prioritize. Perform. The AI-powered kitchen display system for modern restaurants.",
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
      <AiCapabilities />
      <StatsStrip />
      <BuiltFor />
      <Testimonials />
      <FinalCta />
    </SiteShell>
  );
}
