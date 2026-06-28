import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, Counter } from "@/components/ui/motion";
import {
  Brain,
  Zap,
  TrendingUp,
  UtensilsCrossed,
  Coffee,
  ChefHat,
  ShoppingBag,
  Building2,
} from "lucide-react";

/* ─── AI Capabilities ─────────────────────────────────────────────── */

export function AiCapabilities() {
  const { lang } = useI18n();
  const items =
    lang === "de"
      ? [
          {
            icon: Brain,
            title: "Vorhersagen",
            desc: "KI prognostiziert Bestellvolumen anhand von Wetter, Events und historischen Daten — mit über 92% Genauigkeit.",
            illustration: "/undraw_ai-slop_jm2g.svg",
          },
          {
            icon: Zap,
            title: "Priorisieren",
            desc: "Intelligentes Routing weist Bestellungen automatisch der optimalen Station zu und minimiert Wartezeiten.",
            illustration: "/undraw_chat-with-ai_ir62.svg",
          },
          {
            icon: TrendingUp,
            title: "Performen",
            desc: "Echtzeit-Analytics erkennen Engpässe, bevor sie entstehen, und optimieren den Durchsatz kontinuierlich.",
            illustration: "/undraw_data-input_whqw.svg",
          },
        ]
      : [
          {
            icon: Brain,
            title: "Predict",
            desc: "AI forecasts order volume using weather, events, and historical data — with 92%+ accuracy.",
            illustration: "/undraw_ai-slop_jm2g.svg",
          },
          {
            icon: Zap,
            title: "Prioritize",
            desc: "Intelligent routing assigns orders to optimal stations automatically, minimizing wait times.",
            illustration: "/undraw_chat-with-ai_ir62.svg",
          },
          {
            icon: TrendingUp,
            title: "Perform",
            desc: "Real-time analytics detect bottlenecks before they form, continuously optimizing throughput.",
            illustration: "/undraw_data-input_whqw.svg",
          },
        ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-[#ea5929]">
            {lang === "de" ? "KI-Fähigkeiten" : "AI Capabilities"}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-center font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {lang === "de"
              ? "Drei Säulen der Küchenintelligenz."
              : "Three pillars of kitchen intelligence."}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, illustration }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-xl shadow-slate-900/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ea5929]/[0.06]">
                {/* gradient top accent — navy→orange */}
                <div
                  className="absolute left-0 top-0 h-[3px] w-full"
                  style={{ background: "linear-gradient(90deg, #1a2d6d 0%, #ea5929 100%)" }}
                />

                {/* illustration */}
                <div className="flex items-center justify-center bg-gradient-to-b from-[#fef7f3] to-transparent px-6 pt-8 pb-4">
                  <img
                    src={illustration}
                    alt={title}
                    className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* content */}
                <div className="p-8 pt-4">
                  {/* decorative corner glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 bottom-0 size-32 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "radial-gradient(circle, rgba(234,89,41,0.06) 0%, transparent 70%)" }}
                  />
                  <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Strip ─────────────────────────────────────────────────── */

export function StatsStrip() {
  const { lang } = useI18n();
  const stats =
    lang === "de"
      ? [
          { value: 2400, suffix: "+", label: "Bestellungen / Stunde" },
          { value: 34, suffix: "%", label: "Schnellere Tickets" },
          { value: 99, suffix: ".99%", label: "Verfügbarkeit" },
        ]
      : [
          { value: 2400, suffix: "+", label: "Orders / hour" },
          { value: 34, suffix: "%", label: "Faster tickets" },
          { value: 99, suffix: ".99%", label: "Uptime" },
        ];

  return (
    <section className="relative py-20 bg-[#0c1b3d]">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <p className="font-display text-5xl font-extrabold text-white md:text-6xl">
                <Counter to={s.value} />
                {s.suffix}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/40">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Built For ───────────────────────────────────────────────────── */

export function BuiltFor() {
  const { lang } = useI18n();
  const industries = [
    { icon: UtensilsCrossed, en: "Restaurants", de: "Restaurants" },
    { icon: Coffee, en: "Cafés", de: "Cafés" },
    { icon: ChefHat, en: "Hotels", de: "Hotels" },
    { icon: ShoppingBag, en: "Ghost Kitchens", de: "Ghost Kitchens" },
    { icon: Building2, en: "Catering", de: "Catering" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {lang === "de" ? "Gebaut für" : "Built for"}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {industries.map(({ icon: Icon, en, de }) => (
              <span
                key={en}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-[#ea5929]/20 hover:shadow-md"
              >
                <Icon className="size-4 text-[#ea5929]" />
                {lang === "de" ? de : en}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Final CTA ───────────────────────────────────────────────────── */

export function FinalCta() {
  const { lang, t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-[#0c1b3d] py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(234,89,41,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {lang === "de"
              ? "Bereit, Ihre Küche zu transformieren?"
              : "Ready to transform your kitchen?"}
          </h2>
          <p className="mt-5 text-white/60">
            {lang === "de"
              ? "Live in unter zwei Stunden. Keine Kreditkarte nötig."
              : "Live in under two hours. No credit card required."}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/demo"
              className="rounded-full bg-[#ea5929] px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(234,89,41,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(234,89,41,0.6)]"
            >
              {t.common.bookDemo}
            </Link>
            <Link
              to="/demo"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
            >
              {t.common.startTrial}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
