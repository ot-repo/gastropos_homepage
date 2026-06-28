import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, SectionLabel, Counter } from "@/components/ui/motion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Zap,
  TrendingUp,
  Sparkles,
  UtensilsCrossed,
  Coffee,
  ChefHat,
  ShoppingBag,
  Building2,
  Receipt,
  ScanLine,
  BarChart3,
  Globe,
  Check,
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
    <section className="relative overflow-hidden py-20 bg-[#0c1b3d]">
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

/* ═══════════════════════════════════════════════════════════════════ */
/* ─── Social Proof (marquee) ──────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════ */

export function SocialProof() {
  const { lang } = useI18n();
  const logos = [
    "GASTROGRUPPE",
    "KAFFEEHAUS",
    "LUXEHAIR",
    "BISTROMATIC",
    "TAP&PAY",
    "RETAILHUB",
    "MÜLLER & CO",
    "ALMA",
  ];
  return (
    <section className="overflow-hidden border-y border-border bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {lang === "de"
            ? "Vertraut von 12.000+ Betreibern in Europa"
            : "Trusted by 12,000+ operators across Europe"}
        </p>
        <div className="mt-8 overflow-hidden">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-lg font-bold tracking-widest text-muted-foreground/50"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/* ─── Key Benefits (AI features) ──────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════ */

export function KeyBenefits() {
  const { lang } = useI18n();
  const items =
    lang === "de"
      ? [
          {
            icon: Brain,
            t: "KI-Nachfrageprognose",
            d: "GastroPos lernt aus Wetter, Events und Verlaufsdaten — und sagt voraus, was Sie morgen verkaufen werden, mit über 92 % Genauigkeit.",
          },
          {
            icon: Sparkles,
            t: "Menü- & Preis-KI",
            d: "Automatische Empfehlungen für Bestseller, Margen-Optimierung und dynamische Preise zu Stoßzeiten.",
          },
          {
            icon: TrendingUp,
            t: "Anomalie-Erkennung",
            d: "Die KI erkennt ungewöhnliche Stornos, Schwund oder Kassenabweichungen in Echtzeit — bevor sie zum Problem werden.",
          },
        ]
      : [
          {
            icon: Brain,
            t: "AI demand forecasting",
            d: "GastroPos learns from weather, events and historical data — and predicts what you'll sell tomorrow with 92%+ accuracy.",
          },
          {
            icon: Sparkles,
            t: "Menu & pricing AI",
            d: "Automatic recommendations for bestsellers, margin optimization and dynamic pricing during peak hours.",
          },
          {
            icon: TrendingUp,
            t: "Anomaly detection",
            d: "AI flags unusual voids, shrinkage or cash discrepancies in real time — before they become a problem.",
          },
        ];
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-8 shadow-xl shadow-slate-900/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ea5929]/[0.06]">
                {/* gradient top accent */}
                <div
                  className="absolute left-0 top-0 h-[3px] w-full"
                  style={{ background: "linear-gradient(90deg, #1a2d6d 0%, #ea5929 100%)" }}
                />
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ea5929]/10 to-[#1a2d6d]/5 text-[#ea5929] ring-1 ring-[#ea5929]/10 transition-transform group-hover:-translate-y-1">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/* ─── Product Showcase (tabbed dashboard) ─────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════ */

const showcaseTabs = [
  { id: "pos", icon: Receipt, en: "POS System", de: "Kasse" },
  { id: "kds", icon: ChefHat, en: "Kitchen Display", de: "Küchenmonitor" },
  { id: "qr", icon: ScanLine, en: "QR Ordering", de: "QR-Bestellung" },
  { id: "analytics", icon: BarChart3, en: "Analytics", de: "Analytics" },
] as const;

export function ProductShowcase() {
  const { lang } = useI18n();
  const [active, setActive] = useState<(typeof showcaseTabs)[number]["id"]>("pos");
  return (
    <section className="overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>
              {lang === "de" ? "Eine Suite. Jeder Touchpoint." : "One suite. Every touchpoint."}
            </SectionLabel>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {lang === "de"
                ? "Die komplette professionelle Suite."
                : "The complete professional suite."}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {lang === "de"
                ? "Vom Tresen bis zur Küche. Vom Tisch bis zum Online-Shop. Alles synchron, in Echtzeit."
                : "From counter to kitchen. From table to online shop. Everything synced, in real time."}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div className="flex flex-wrap justify-center gap-1 rounded-2xl border border-border bg-[#f8fafc] p-1 sm:inline-flex sm:rounded-full">
              {showcaseTabs.map((tab) => {
                const isActive = active === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#0c1b3d] text-white shadow"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    {lang === "de" ? tab.de : tab.en}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="grid min-h-[420px] grid-cols-1 gap-3 rounded-2xl bg-[#f8fafc] p-6 lg:grid-cols-12"
              >
                {active === "pos" && <PosPreview />}
                {active === "kds" && <KdsPreview />}
                {active === "qr" && <QrPreview />}
                {active === "analytics" && <AnalyticsPreview />}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Preview sub-components ─────────────────────────────────── */

function PosPreview() {
  return (
    <>
      <div className="space-y-3 lg:col-span-7">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["Mains", "Drinks", "Sides", "Desserts"].map((c, i) => (
            <div
              key={c}
              className={`rounded-lg px-3 py-2 text-xs font-semibold ${i === 0 ? "bg-[#0c1b3d] text-white" : "bg-white ring-1 ring-border"}`}
            >
              {c}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { name: "Burger", image: "/food/burger.jpg" },
            { name: "Steak", image: "/food/steak.jpg" },
            { name: "Salad", image: "/food/salad.jpg" },
            { name: "Pasta", image: "/food/pasta.jpg" },
            { name: "Pizza", image: "/food/pizza.jpg" },
            { name: "Fries", image: "/food/fries.jpg" },
            { name: "Soup", image: "/food/soup.jpg" },
            { name: "Wrap", image: "/food/wrap.jpg" },
            { name: "Bowl", image: "/food/bowl.jpg" },
          ].map((m, i) => (
            <div key={m.name} className="rounded-xl bg-white p-4 ring-1 ring-border">
              <div className="aspect-video w-full overflow-hidden rounded-md bg-gradient-to-br from-[#e8edf5] to-[#d9e2f3]">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <p className="mt-2 text-sm font-semibold">{m.name}</p>
              <p className="font-mono text-[10px] text-muted-foreground">€{(i + 1) * 4.5}.00</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-white p-5 ring-1 ring-border lg:col-span-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Order #2047
        </p>
        <h4 className="mt-1 font-display font-bold">Table 14 · Terrace</h4>
        <div className="mt-4 space-y-3 text-sm">
          {[
            ["2× Burger", "18.00"],
            ["1× Salad", "9.00"],
            ["3× Coke", "9.00"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span>{k}</span>
              <span className="font-mono">€{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-border pt-4">
          <div className="flex justify-between font-display text-lg font-bold">
            <span>Total</span>
            <span>€36.00</span>
          </div>
        </div>
        <button className="mt-4 w-full rounded-lg bg-[#ea5929] py-3 text-sm font-semibold text-white">
          Tap to Pay
        </button>
      </div>
    </>
  );
}

function KdsPreview() {
  return (
    <div className="col-span-full grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
      {[
        { table: "#14", time: "00:42", items: ["2× Burger", "1× Salad", "3× Coke"], status: "Cooking" },
        { table: "#08", time: "00:21", items: ["1× Steak", "1× Pasta", "2× Wine"], status: "New" },
        { table: "#22", time: "01:14", items: ["3× Pizza", "2× Beer"], status: "Cooking" },
        { table: "Bar", time: "00:05", items: ["4× Espresso"], status: "New" },
      ].map((t) => (
        <div key={t.table} className="rounded-xl bg-white p-4 ring-1 ring-border">
          <div className="flex items-center justify-between">
            <span className="font-display font-bold">{t.table}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${t.status === "New" ? "bg-[#ea5929]/10 text-[#ea5929]" : "bg-green-500/10 text-green-600"}`}
            >
              {t.status}
            </span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{t.time}</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {t.items.map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="mt-0.5 size-3.5 text-muted-foreground" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function QrPreview() {
  return (
    <>
      <div className="flex items-center justify-center lg:col-span-5">
        <div className="w-64 rounded-3xl border border-border bg-white p-6 shadow-xl">
          <div className="mx-auto grid aspect-square w-40 grid-cols-8 gap-0.5 rounded-xl bg-[#0c1b3d] p-2">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-[1px] ${Math.random() > 0.5 ? "bg-white" : "bg-[#0c1b3d]"}`}
              />
            ))}
          </div>
          <p className="mt-4 text-center font-display font-bold">Scan to order</p>
          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Table 14
          </p>
        </div>
      </div>
      <div className="rounded-xl bg-white p-6 ring-1 ring-border lg:col-span-7">
        <div className="flex items-center gap-2">
          <Globe className="size-4 text-[#ea5929]" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            order.gastropos.ai
          </span>
        </div>
        <h4 className="mt-3 font-display text-2xl font-bold">Welcome to Table 14</h4>
        <p className="text-sm text-muted-foreground">
          Browse the menu, customize, pay — without waiting.
        </p>
        <div className="mt-5 space-y-3">
          {["Margherita Pizza", "Truffle Pasta", "Tiramisu"].map((m) => (
            <div key={m} className="flex items-center justify-between rounded-lg bg-[#f8fafc] p-3">
              <div>
                <p className="text-sm font-semibold">{m}</p>
                <p className="font-mono text-xs text-muted-foreground">€12.00</p>
              </div>
              <button className="rounded-md bg-[#ea5929] px-3 py-1.5 text-xs font-semibold text-white">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function AnalyticsPreview() {
  return (
    <>
      <div className="rounded-xl bg-white p-6 ring-1 ring-border lg:col-span-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Revenue · Last 30 days
            </p>
            <p className="mt-1 font-display text-3xl font-extrabold">
              €<Counter to={184230} />
            </p>
          </div>
          <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-bold text-green-600">
            +24.5%
          </span>
        </div>
        <svg viewBox="0 0 400 140" className="mt-6 w-full">
          <defs>
            <linearGradient id="chart-g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1a2d6d" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1a2d6d" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C40,80 80,90 120,60 C160,40 200,70 240,50 C280,30 320,55 360,25 L400,15 L400,140 L0,140 Z"
            fill="url(#chart-g)"
          />
          <path
            d="M0,100 C40,80 80,90 120,60 C160,40 200,70 240,50 C280,30 320,55 360,25 L400,15"
            stroke="#1a2d6d"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:col-span-4">
        {[
          { k: "Avg. ticket", v: "€42.30" },
          { k: "Covers today", v: "284" },
          { k: "Active staff", v: "12" },
          { k: "Open tables", v: "14/20" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl bg-white p-4 ring-1 ring-border">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {s.k}
            </p>
            <p className="mt-1 font-display text-xl font-bold">{s.v}</p>
          </div>
        ))}
      </div>
    </>
  );
}
