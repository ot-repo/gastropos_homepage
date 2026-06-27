import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import {
  ArrowRight,
  Utensils,
  ShoppingBag,
  Scissors,
  Sparkles,
  Brain,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  const { lang, t } = useI18n();
  const copy =
    lang === "de"
      ? {
          badge: "KI-gestütztes Cloud POS · TSE-zertifiziert",
          headlineA: "Das erste",
          headlineHighlight: "KI-gestützte",
          headlineB: "Kassensystem für Gastronomie & Retail.",
          sub: "GastroPos lernt Ihr Geschäft: prognostiziert Nachfrage, optimiert Preise, automatisiert Bestellungen und erkennt Anomalien in Echtzeit. Cloud, TSE & DATEV inklusive — live in unter 2 Stunden.",
          cta1: t.common.startTrial,
          cta2: t.common.bookDemo,
          builtFor: "Gebaut für",
        }
      : {
          badge: "AI-powered Cloud POS · TSE-certified",
          headlineA: "The first",
          headlineHighlight: "AI-powered",
          headlineB: "POS for hospitality & retail.",
          sub: "GastroPos learns your business: forecasts demand, optimizes pricing, automates reordering and flags anomalies in real time. Cloud, TSE & DATEV built in — live in under 2 hours.",
          cta1: t.common.startTrial,
          cta2: t.common.bookDemo,
          builtFor: "Built for",
        };

  return (
    <section className="relative -mt-20 overflow-hidden pt-36 pb-32 bg-hero-blue">
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <Sparkles className="size-3.5" /> {copy.badge}
          </span>
          <h1 className="mt-7 text-balance font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            {copy.headlineA}{" "}
            <span className="relative inline-block bg-gradient-to-r from-secondary-brand via-orange-400 to-amber-300 bg-clip-text text-transparent">
              {copy.headlineHighlight}
            </span>
            <br />
            {copy.headlineB}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{copy.sub}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/demo"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-accent shadow-[0_10px_30px_-10px_rgba(15,23,42,0.4)] transition-transform hover:-translate-y-0.5"
            >
              {copy.cta1}{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              {copy.cta2}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <AiPill
              icon={<Brain className="size-3.5" />}
              label={lang === "de" ? "Nachfrageprognose" : "Demand forecasting"}
            />
            <AiPill
              icon={<Sparkles className="size-3.5" />}
              label={lang === "de" ? "Menü-Insights" : "Menu insights"}
            />
            <AiPill
              icon={<TrendingUp className="size-3.5" />}
              label={lang === "de" ? "Dynamische Preise" : "Dynamic pricing"}
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-white/70">
              {copy.builtFor}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <PlatformPill
                icon={<Utensils className="size-4" />}
                label={lang === "de" ? "Gastronomie" : "Hospitality"}
              />
              <PlatformPill icon={<ShoppingBag className="size-4" />} label="Retail" />
              <PlatformPill
                icon={<Scissors className="size-4" />}
                label={lang === "de" ? "Dienstleister" : "Services"}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="relative rounded-2xl border border-black/5 bg-surface p-3 shadow-2xl">
            <div className="flex h-[480px] w-full gap-3 overflow-hidden rounded-lg bg-background">
              <div className="w-16 shrink-0 border-r border-border bg-surface p-3 flex flex-col gap-4">
                <div className="size-10 rounded-lg bg-accent" />
                <div className="size-10 rounded-lg bg-secondary" />
                <div className="size-10 rounded-lg bg-secondary" />
                <div className="size-10 rounded-lg bg-secondary" />
                <div className="mt-auto size-10 rounded-lg bg-secondary" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="text-left">
                    <span className="block font-mono text-[10px] uppercase tracking-tighter text-muted-foreground">
                      Active Table
                    </span>
                    <h3 className="font-display font-bold">Terrace · #14</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-9 w-28 rounded-md bg-secondary" />
                    <div className="h-9 w-9 rounded-md bg-accent" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 py-6">
                  {["Espresso", "Riesling", "Seabass", "Tiramisu", "Cappuccino", "Pasta"].map(
                    (item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.06 }}
                        className="rounded-xl bg-surface shadow-sm ring-1 ring-black/5 p-3 text-left"
                      >
                        <div className="mb-2 h-2 w-10 rounded bg-accent/30" />
                        <p className="text-xs font-semibold">{item}</p>
                        <p className="mt-1 font-mono text-[10px] text-muted-foreground">
                          €{(i + 3) * 3.5}.00
                        </p>
                      </motion.div>
                    ),
                  )}
                </div>
                <div className="mt-auto flex items-center justify-between rounded-xl bg-foreground p-4 text-primary-foreground">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                      Total
                    </p>
                    <p className="font-display text-xl font-bold">€84.50</p>
                  </div>
                  <button className="rounded-md bg-accent px-4 py-2 text-xs font-semibold">
                    Tap to Pay
                  </button>
                </div>
              </div>
              <div className="hidden md:flex w-64 flex-col border-l border-border bg-surface p-5">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                  <span>DATEV Export</span>
                  <span>#0842-X</span>
                </div>
                <div className="space-y-3 text-xs">
                  <RowLine label="Espresso" value="€3.50" />
                  <RowLine label="Riesling 0.2l" value="€9.50" />
                  <RowLine label="Seabass" value="€34.00" />
                  <RowLine label="Tiramisu" value="€8.00" />
                </div>
                <div className="mt-auto border-t border-border pt-4">
                  <RowLine label="MwSt 19%" value="€13.50" muted />
                  <RowLine label="Total" value="€84.50" bold />
                  <div className="mt-3 flex items-center gap-1.5 font-mono text-[9px] uppercase text-success">
                    <span className="size-1.5 rounded-full bg-success" /> TSE signed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -left-6 top-20 hidden lg:flex animate-float rounded-xl border border-border bg-surface p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-accent-soft grid place-items-center text-accent font-bold">
                ↑
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase text-muted-foreground">Today</p>
                <p className="font-display font-bold text-sm">+24% revenue</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute -right-6 bottom-16 hidden lg:flex animate-float rounded-xl border border-border bg-surface p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="size-2.5 rounded-full bg-success animate-pulse" />
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase text-muted-foreground">Status</p>
                <p className="font-display font-bold text-sm">All 7 stores online</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function RowLine({
  label,
  value,
  bold,
  muted,
}: {
  label: string;
  value: string;
  bold?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex justify-between ${bold ? "font-bold text-foreground" : muted ? "text-muted-foreground" : "text-foreground"}`}
    >
      <span>{label}</span>
      <span className="font-mono">{value}</span>
    </div>
  );
}

function PlatformPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/25">
      {icon} {label}
    </span>
  );
}

function AiPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary-brand/40 bg-gradient-to-r from-secondary-brand/25 via-orange-500/15 to-amber-400/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
      {icon} {label}
    </span>
  );
}
