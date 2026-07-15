import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  CreditCard,
  Languages,
  LayoutGrid,
  Plus,
  Printer,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Star,
  TabletSmartphone,
  Users,
  WifiOff,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Reveal } from "@/components/ui/motion";

export function SubPageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface/40 pt-28 pb-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-24 -z-10 size-72 rounded-full bg-secondary-brand/10 blur-3xl"
      />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-secondary-brand" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {lede}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/demo"
              className="group btn-shimmer inline-flex items-center gap-2 rounded-full bg-secondary-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(234,89,41,0.5)] transition-all hover:-translate-y-0.5"
            >
              {t.common.bookDemo}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-secondary"
            >
              {t.nav.pricing}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  const { lang } = useI18n();
  const featured = items[0];
  const rest = items.slice(1);
  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="absolute -left-32 top-1/3 -z-10 size-96 rounded-full bg-accent/5 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-secondary-brand/5 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-secondary-brand">
              {lang === "de" ? "Alles an Bord" : "Everything on board"}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {lang === "de" ? "Das ist enthalten" : "What's included"}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {lang === "de"
                ? "Keine Module, keine Aufpreise — jeder Punkt ist in jedem Paket dabei."
                : "No modules, no add-on fees — every item ships with every plan."}
            </p>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {featured && (
            <li className="sm:col-span-2 lg:col-span-4">
              <Reveal className="h-full">
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-hero-blue p-8 text-white shadow-elegant">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-hero-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_100%_0%,black,transparent)]"
                  />
                  <div
                    aria-hidden
                    className="absolute -right-16 -top-16 size-56 rounded-full bg-secondary-brand/20 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex size-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <FeatureIcon text={featured} index={0} className="size-6 text-white" />
                  </div>
                  <p className="relative mt-10 max-w-md font-display text-xl font-bold leading-snug md:text-2xl">
                    {featured}
                  </p>
                  <p className="relative mt-3 font-mono text-[10px] uppercase tracking-widest text-white/50">
                    01 / {String(items.length).padStart(2, "0")}
                  </p>
                </div>
              </Reveal>
            </li>
          )}
          {rest.map((f, i) => {
            const spanClass = SPAN_CLASSES[featureSpans(rest.length)[i]];
            return (
              <li key={f} className={spanClass}>
                <Reveal delay={Math.min(i * 0.05, 0.35)} className="h-full">
                  <div className="group relative flex h-full flex-col rounded-3xl border border-border bg-surface/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-elegant">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-8 -bottom-8 size-28 rounded-full bg-secondary-brand/[0.06] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-accent/[0.06] text-accent transition-colors duration-300 group-hover:bg-secondary-brand/10 group-hover:text-secondary-brand">
                        <FeatureIcon text={f} index={i + 1} className="size-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-foreground">{f}</p>
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-success">
                        <Check className="size-3" />
                        {lang === "de" ? "Inklusive" : "Included"}
                      </span>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const SPAN_CLASSES: Record<number, string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  6: "sm:col-span-2 lg:col-span-6",
};

// Compute column spans (on a 6-col grid) so every row sums to exactly 6.
// The first tile shares the top row with the 4-wide featured card; the
// remaining tiles alternate row patterns for a bento rhythm.
function featureSpans(count: number): number[] {
  const spans: number[] = [];
  if (count === 0) return spans;
  spans.push(2);
  const rowPatterns = [
    [3, 3],
    [2, 4],
    [4, 2],
  ];
  let row = 0;
  while (spans.length < count) {
    const remaining = count - spans.length;
    if (remaining === 1) {
      spans.push(6);
    } else {
      spans.push(...rowPatterns[row % rowPatterns.length]);
      row++;
    }
  }
  return spans;
}

const FEATURE_ICON_RULES: [RegExp, LucideIcon][] = [
  [/tablet|ipad|android|device|geräte?/i, TabletSmartphone],
  [/tse|dsfinv|certif|zertifi|gobd|kassensichv|compliant|konform/i, ShieldCheck],
  [/offline|wi-?fi|wlan|internet/i, WifiOff],
  [/split|bill|rechnung|trinkgeld|tip|discount|rabatt|zahlung|payment|card|karte/i, CreditCard],
  [/drucker|printer|schublade|drawer|scanner|bondrucker|hardware/i, Printer],
  [/sync|kds|echtzeit|real-?time|live/i, RefreshCw],
  [/sprache|language|multiling|mehrsprachig/i, Languages],
  [/produkt|product|kategor|categor|modifi|artikel|menü|menu/i, LayoutGrid],
  [/rolle|role|rechte|permission|inhaber|owner|manager|staff|team/i, Users],
  [/dashboard|report|analytic|auswertung|prognose|forecast/i, BarChart3],
];

const FEATURE_ICON_FALLBACKS: LucideIcon[] = [Sparkles, Zap, Star];

function FeatureIcon({
  text,
  index,
  className,
}: {
  text: string;
  index: number;
  className?: string;
}) {
  const match = FEATURE_ICON_RULES.find(([re]) => re.test(text));
  const Icon = match ? match[1] : FEATURE_ICON_FALLBACKS[index % FEATURE_ICON_FALLBACKS.length];
  return <Icon className={className} />;
}

export function ContentSections({ sections }: { sections: { heading: string; body: string }[] }) {
  if (!sections.length) return null;
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative ml-4 space-y-14 border-l border-border pl-12">
          {sections.map((s, i) => (
            <Reveal key={s.heading}>
              <article className="relative">
                <span className="absolute -left-16 top-0 flex size-8 items-center justify-center rounded-full border border-border bg-surface font-mono text-[11px] font-bold text-accent shadow-card">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                  {s.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const { lang } = useI18n();
  if (!items.length) return null;
  return (
    <section className="border-t border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-widest text-secondary-brand">
            {lang === "de" ? "Gut zu wissen" : "Good to know"}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            FAQ
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {items.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 0.04, 0.24)}>
              <details className="group rounded-2xl border border-border bg-background p-5 shadow-card transition-colors hover:border-accent/30 open:border-accent/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-all duration-300 group-open:rotate-45 group-open:border-secondary-brand/40 group-open:text-secondary-brand">
                    <Plus className="size-3.5" />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFooter() {
  const { t, lang } = useI18n();
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-hero-blue px-6 py-16 text-center md:py-20">
            <div
              aria-hidden
              className="absolute inset-0 bg-hero-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]"
            />
            <div
              aria-hidden
              className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
            />
            <h2 className="relative font-display text-3xl font-extrabold tracking-tight text-white text-balance md:text-4xl">
              {lang === "de"
                ? "Bereit, in unter 20 Minuten live zu gehen?"
                : "Ready to be live in under 20 minutes?"}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              {lang === "de"
                ? "Keine Einrichtungsgebühr, keine Vertragsbindung — starten Sie noch heute."
                : "No setup fee, no lock-in — get started today."}
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/demo"
                className="group btn-shimmer inline-flex items-center gap-2 rounded-full bg-secondary-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(234,89,41,0.6)] transition-all hover:-translate-y-0.5"
              >
                {t.common.bookDemo}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/pricing"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                {t.nav.pricing}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
