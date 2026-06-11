import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";

export function PageHero({ eyebrow, title, lede, ctaTo = "/demo" }: { eyebrow?: string; title: string; lede?: string; ctaTo?: string }) {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden pt-20 pb-16 border-b border-border">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        {eyebrow && <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{eyebrow}</p>}
        <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight md:text-6xl text-balance">{title}</h1>
        {lede && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{lede}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to={ctaTo} className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant">{t.common.bookDemo}</Link>
          <Link to="/pricing" className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold">{t.nav.pricing}</Link>
        </div>
      </div>
    </section>
  );
}

export function ContentSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 prose prose-slate prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h3:text-xl prose-a:text-accent">
        {children}
      </div>
    </section>
  );
}
