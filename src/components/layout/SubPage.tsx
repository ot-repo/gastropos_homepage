import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

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
    <section className="relative overflow-hidden border-b border-border bg-surface/40 pt-24 pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl text-balance">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {lede}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/demo"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_6px_20px_-4px_rgba(37,99,235,0.5)] transition-all hover:brightness-110"
          >
            {t.common.bookDemo}
          </Link>
          <Link
            to="/pricing"
            className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold hover:bg-secondary"
          >
            {t.nav.pricing}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">What's included</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface/50 p-4"
            >
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check className="size-3" />
              </span>
              <span className="text-sm leading-relaxed text-foreground">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContentSections({ sections }: { sections: { heading: string; body: string }[] }) {
  if (!sections.length) return null;
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        {sections.map((s) => (
          <article key={s.heading}>
            <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              {s.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="border-t border-border bg-surface/40 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl font-extrabold tracking-tight">FAQ</h2>
        <div className="mt-8 space-y-4">
          {items.map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-background p-5">
              <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFooter() {
  const { t, lang } = useI18n();
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          {lang === "de"
            ? "Bereit, in unter zwei Stunden zu starten?"
            : "Ready to be live in under two hours?"}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_6px_20px_-4px_rgba(37,99,235,0.5)] hover:brightness-110"
          >
            {t.common.bookDemo} <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/pricing"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
          >
            {t.nav.pricing}
          </Link>
        </div>
      </div>
    </section>
  );
}
