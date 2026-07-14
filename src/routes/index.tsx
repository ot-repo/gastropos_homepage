import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { AiCapabilities, StatsStrip, BuiltFor, FinalCta, SocialProof, KeyBenefits, ProductShowcase } from "@/components/home/Sections";
import { DashboardDemo } from "@/components/home/DashboardDemo";
import { Testimonials } from "@/components/home/Testimonials";
import { FuturisticIntro } from "@/components/home/FuturisticIntro";
import { useState, useCallback } from "react";

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
    links: [
      { rel: "canonical", href: absoluteUrl("/") },
      { rel: "preload", as: "image", href: "/carousel-kitchen.png" },
      { rel: "preload", as: "image", href: "/carousel-restaurant.png" },
      { rel: "preload", as: "image", href: "/carousel-cafe.png" },
      { rel: "preload", as: "image", href: "/carousel-bar.png" },
    ],
  }),
  component: Index,
});

function Index() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      <FuturisticIntro onComplete={handleIntroComplete} />
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.6s ease-out",
          pointerEvents: introComplete ? "auto" : "none",
        }}
      >
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
      </div>
    </>
  );
}
