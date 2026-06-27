import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, SectionLabel, Counter } from "@/components/ui/motion";
import {
  Shield,
  Zap,
  Layers,
  Smartphone,
  ScanLine,
  ChefHat,
  ShoppingBag,
  BarChart3,
  Users,
  Package,
  Building2,
  Receipt,
  ArrowRight,
  Check,
  Plus,
  Minus,
  Globe,
  Brain,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SocialProof() {
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
    <section className="border-y border-border bg-surface py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Trusted by 12,000+ operators across Europe
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
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="group">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-surface shadow-card ring-1 ring-black/5 transition-transform group-hover:-translate-y-1">
                  <Icon className="size-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold">{t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>
              {lang === "de" ? "Eine Suite. Jeder Touchpoint." : "One suite. Every touchpoint."}
            </SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
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
            <div className="inline-flex gap-1 rounded-full border border-border bg-background p-1">
              {showcaseTabs.map((tab) => {
                const isActive = active === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-foreground text-primary-foreground shadow"
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
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-background p-3 shadow-elegant">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="grid min-h-[420px] grid-cols-1 gap-3 rounded-2xl bg-surface p-6 lg:grid-cols-12"
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

function PosPreview() {
  return (
    <>
      <div className="lg:col-span-7 space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {["Mains", "Drinks", "Sides", "Desserts"].map((c, i) => (
            <div
              key={c}
              className={`rounded-lg px-3 py-2 text-xs font-semibold ${i === 0 ? "bg-foreground text-primary-foreground" : "bg-background ring-1 ring-border"}`}
            >
              {c}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["Burger", "Steak", "Salad", "Pasta", "Pizza", "Fries", "Soup", "Wrap", "Bowl"].map(
            (m, i) => (
              <div key={m} className="rounded-xl bg-background p-4 ring-1 ring-border">
                <div className="aspect-video rounded-md bg-secondary" />
                <p className="mt-2 text-sm font-semibold">{m}</p>
                <p className="font-mono text-[10px] text-muted-foreground">€{(i + 1) * 4.5}.00</p>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="lg:col-span-5 rounded-xl bg-background p-5 ring-1 ring-border">
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
        <button className="mt-4 w-full rounded-lg bg-accent py-3 text-sm font-semibold text-accent-foreground">
          Tap to Pay
        </button>
      </div>
    </>
  );
}

function KdsPreview() {
  return (
    <div className="col-span-full grid grid-cols-1 gap-3 md:grid-cols-4">
      {[
        {
          table: "#14",
          time: "00:42",
          items: ["2× Burger", "1× Salad", "3× Coke"],
          status: "Cooking",
        },
        { table: "#08", time: "00:21", items: ["1× Steak", "1× Pasta", "2× Wine"], status: "New" },
        { table: "#22", time: "01:14", items: ["3× Pizza", "2× Beer"], status: "Cooking" },
        { table: "Bar", time: "00:05", items: ["4× Espresso"], status: "New" },
      ].map((t) => (
        <div key={t.table} className="rounded-xl bg-background p-4 ring-1 ring-border">
          <div className="flex items-center justify-between">
            <span className="font-display font-bold">{t.table}</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${t.status === "New" ? "bg-accent-soft text-accent" : "bg-success/10 text-success"}`}
            >
              {t.status}
            </span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{t.time}</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {t.items.map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="size-3.5 mt-0.5 text-muted-foreground" />
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
      <div className="lg:col-span-5 flex items-center justify-center">
        <div className="rounded-3xl border border-border bg-background p-6 shadow-xl w-64">
          <div className="mx-auto aspect-square w-40 rounded-xl bg-foreground grid grid-cols-8 gap-0.5 p-2">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-[1px] ${Math.random() > 0.5 ? "bg-primary-foreground" : "bg-foreground"}`}
              />
            ))}
          </div>
          <p className="mt-4 text-center font-display font-bold">Scan to order</p>
          <p className="text-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Table 14
          </p>
        </div>
      </div>
      <div className="lg:col-span-7 rounded-xl bg-background p-6 ring-1 ring-border">
        <div className="flex items-center gap-2">
          <Globe className="size-4 text-accent" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            order.orderstracker.app
          </span>
        </div>
        <h4 className="mt-3 font-display text-2xl font-bold">Welcome to Table 14</h4>
        <p className="text-sm text-muted-foreground">
          Browse the menu, customize, pay — without waiting.
        </p>
        <div className="mt-5 space-y-3">
          {["Margherita Pizza", "Truffle Pasta", "Tiramisu"].map((m) => (
            <div key={m} className="flex items-center justify-between rounded-lg bg-secondary p-3">
              <div>
                <p className="text-sm font-semibold">{m}</p>
                <p className="font-mono text-xs text-muted-foreground">€12.00</p>
              </div>
              <button className="rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">
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
      <div className="lg:col-span-8 rounded-xl bg-background p-6 ring-1 ring-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Revenue · Last 30 days
            </p>
            <p className="mt-1 font-display text-3xl font-extrabold">
              €<Counter to={184230} />
            </p>
          </div>
          <span className="rounded-full bg-success/10 px-2 py-1 text-xs font-bold text-success">
            +24.5%
          </span>
        </div>
        <svg viewBox="0 0 400 140" className="mt-6 w-full">
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C40,80 80,90 120,60 C160,40 200,70 240,50 C280,30 320,55 360,25 L400,15 L400,140 L0,140 Z"
            fill="url(#g)"
          />
          <path
            d="M0,100 C40,80 80,90 120,60 C160,40 200,70 240,50 C280,30 320,55 360,25 L400,15"
            stroke="hsl(217 91% 60%)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="lg:col-span-4 grid grid-cols-1 gap-3">
        {[
          { k: "Avg. ticket", v: "€42.30" },
          { k: "Covers today", v: "284" },
          { k: "Active staff", v: "12" },
          { k: "Open tables", v: "14/20" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl bg-background p-4 ring-1 ring-border">
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

const industries = [
  { slug: "restaurant", icon: ChefHat, en: "Restaurants", de: "Restaurants" },
  { slug: "cafe", icon: Receipt, en: "Cafés", de: "Cafés" },
  { slug: "bar", icon: Receipt, en: "Bars", de: "Bars" },
  { slug: "bakery", icon: Receipt, en: "Bakeries", de: "Bäckereien" },
  { slug: "food-truck", icon: Smartphone, en: "Food Trucks", de: "Foodtrucks" },
  { slug: "kiosk", icon: ShoppingBag, en: "Kiosks", de: "Kioske" },
  { slug: "retail", icon: ShoppingBag, en: "Retail", de: "Einzelhandel" },
  { slug: "hair-salon", icon: Users, en: "Hair Salons", de: "Friseure" },
  { slug: "beauty-salon", icon: Users, en: "Beauty Salons", de: "Beautysalons" },
  { slug: "service-business", icon: Building2, en: "Services", de: "Dienstleister" },
] as const;

export function IndustriesGrid() {
  const { lang } = useI18n();
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionLabel>
                {lang === "de" ? "Branchenlösungen" : "Industry solutions"}
              </SectionLabel>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight">
                {lang === "de"
                  ? "Maßgeschneidert für jede Branche."
                  : "Tailored for every industry."}
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              {lang === "de"
                ? "Workflows, Hardware und Compliance, abgestimmt auf Ihr Geschäftsmodell."
                : "Workflows, hardware, and compliance shaped to fit your business model."}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map(({ slug, icon: Icon, en, de }) => (
              <Link
                key={slug}
                to={`/industries/${slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-5 transition-all hover:border-accent/40 hover:shadow-card"
              >
                <Icon className="size-5 text-accent" />
                <h3 className="mt-4 font-display font-bold">{lang === "de" ? de : en}</h3>
                <span className="mt-auto pt-6 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                  {lang === "de" ? "Mehr" : "Explore"} <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FeatureBento() {
  const { lang } = useI18n();
  return (
    <section className="bg-foreground py-28 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <SectionLabel>{lang === "de" ? "Eine Plattform" : "One platform"}</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              {lang === "de"
                ? "Alles, was Sie zum Betreiben brauchen."
                : "Everything you need to operate."}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="rounded-3xl bg-accent p-10 h-full">
              <BarChart3 className="size-6" />
              <h3 className="mt-6 font-display text-3xl font-bold">
                {lang === "de" ? "Echtzeit-Analytics" : "Real-time analytics"}
              </h3>
              <p className="mt-3 max-w-md text-primary-foreground/80">
                {lang === "de"
                  ? "Jede Transaktion, jede Marge, jede Schicht. Aus jeder Filiale, von jedem Gerät."
                  : "Every transaction, margin, and shift. From every location, on every device."}
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <Stat label="Stores" value={<Counter to={12000} />} />
                <Stat label="Tx/sec" value={<Counter to={4200} />} />
                <Stat
                  label="Uptime"
                  value={
                    <>
                      <Counter to={99} />
                      .99%
                    </>
                  }
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="rounded-3xl border border-white/5 bg-secondary/5 p-10 h-full">
              <Smartphone className="size-6 text-accent" />
              <h3 className="mt-6 font-display text-2xl font-bold">
                {lang === "de" ? "Hardware-agnostisch" : "Hardware agnostic"}
              </h3>
              <p className="mt-3 text-primary-foreground/70">
                {lang === "de"
                  ? "iPad, Android, Windows, macOS — Sie wählen die Hardware."
                  : "iPad, Android, Windows, macOS — you choose the hardware."}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="rounded-3xl border border-white/5 bg-secondary/5 p-8 h-full">
              <Package className="size-6 text-accent" />
              <h3 className="mt-5 font-display text-xl font-bold">
                {lang === "de" ? "Warenwirtschaft" : "Inventory"}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {lang === "de"
                  ? "Bestände, Lieferanten, automatische Nachbestellung."
                  : "Stock, suppliers, automatic reorders."}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-4">
            <div className="rounded-3xl border border-white/5 bg-secondary/5 p-8 h-full">
              <Building2 className="size-6 text-accent" />
              <h3 className="mt-5 font-display text-xl font-bold">
                {lang === "de" ? "Multi-Filiale" : "Multi-store"}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {lang === "de"
                  ? "Zentrale Verwaltung über alle Standorte."
                  : "Centralized control across every location."}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25} className="lg:col-span-4">
            <div className="rounded-3xl border border-white/5 bg-secondary/5 p-8 h-full">
              <Users className="size-6 text-accent" />
              <h3 className="mt-5 font-display text-xl font-bold">
                {lang === "de" ? "Mitarbeiter" : "Employees"}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {lang === "de"
                  ? "Schichten, Zugriffe, Trinkgeld, Provisionen."
                  : "Shifts, access, tips, commissions."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-3xl font-extrabold">{value}+</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/60">
        {label}
      </p>
    </div>
  );
}

export function Testimonials() {
  const { lang } = useI18n();
  const items = [
    {
      q:
        lang === "de"
          ? "GastroPos hat unseren Ablauf in sieben Berliner Standorten transformiert. Die Cloud-Synchronisation ist schneller als jede lokale Hardware der letzten zehn Jahre."
          : "GastroPos transformed our workflow across seven locations in Berlin. The cloud sync is faster than any local hardware we've used in a decade.",
      a: "Niklas Vogt",
      r: "Founder, Haus of Coffee",
    },
    {
      q:
        lang === "de"
          ? "Die DATEV-Integration spart unserem Steuerberater jeden Monat zwei volle Tage. Allein das hat die Software bezahlt."
          : "The DATEV integration saves our accountant two full days every month. That alone paid for the software.",
      a: "Sophia Brandt",
      r: "Owner, Bistro Marlene",
    },
    {
      q:
        lang === "de"
          ? "QR-Bestellung hat den Umsatz pro Tisch um 23% erhöht. Gäste bestellen mehr, wenn sie nicht warten müssen."
          : "QR ordering lifted revenue per table by 23%. Guests order more when they don't have to wait.",
      a: "Tomás Ricci",
      r: "GM, Aperitivo Group",
    },
  ];
  return (
    <section className="py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel>
            {lang === "de" ? "Stimmen aus dem Markt" : "Voices from the floor"}
          </SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight max-w-2xl">
            {lang === "de"
              ? "Betreiber, die jeden Tag damit arbeiten."
              : "Operators who run on it every day."}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.a} delay={i * 0.08}>
              <figure className="h-full rounded-3xl border border-border bg-background p-8">
                <blockquote className="font-display text-lg leading-snug text-balance">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-secondary" />
                  <div>
                    <p className="text-sm font-bold">{t.a}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t.r}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingPreview() {
  const { lang } = useI18n();
  const featuresList =
    lang === "de"
      ? [
          "Alle Funktionen inklusive",
          "TSE & DATEV-Export",
          "KDS, QR & Multi-Terminal",
          "Cloud-Backup & Priority Support",
        ]
      : [
          "All features included",
          "TSE & DATEV export",
          "KDS, QR & multi-terminal",
          "Cloud backup & priority support",
        ];
  const tiers = [
    {
      name: "Klein",
      price: "€39",
      period: lang === "de" ? "/Monat" : "/mo",
      desc: lang === "de" ? "Bis zu 1.500 Artikel pro Monat." : "Up to 1,500 line items per month.",
      quota: lang === "de" ? "1.500 Artikel / Monat" : "1,500 line items / month",
      features: featuresList,
    },
    {
      name: "Standard",
      price: "€59",
      period: lang === "de" ? "/Monat" : "/mo",
      featured: true,
      desc: lang === "de" ? "Bis zu 3.000 Artikel pro Monat." : "Up to 3,000 line items per month.",
      quota: lang === "de" ? "3.000 Artikel / Monat" : "3,000 line items / month",
      features: featuresList,
    },
    {
      name: "Premium",
      price: "€79",
      period: lang === "de" ? "/Monat" : "/mo",
      desc: lang === "de" ? "Unbegrenzte Artikel pro Monat." : "Unlimited line items per month.",
      quota: lang === "de" ? "Unbegrenzte Artikel" : "Unlimited line items",
      features: featuresList,
    },
  ];
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>{lang === "de" ? "Preise" : "Pricing"}</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              {lang === "de"
                ? "Einfach. Transparent. Skalierbar."
                : "Simple. Transparent. Scales with you."}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {lang === "de"
                ? "Alle Funktionen in jedem Paket. Sie wählen nur das Artikel-Volumen — gezählt werden die Positionen pro Bestellung, nicht die Bestellungen selbst."
                : "Every feature in every plan. You only pick your line-item volume — we count positions per order, not orders themselves."}
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 ${tier.featured ? "bg-foreground text-primary-foreground shadow-elegant" : "bg-surface border border-border"}`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground">
                    {lang === "de" ? "Beliebt" : "Most popular"}
                  </span>
                )}
                <p className="font-mono text-[11px] uppercase tracking-widest opacity-60">
                  {tier.name}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold">{tier.price}</span>
                  <span className="text-sm opacity-60">{tier.period}</span>
                </div>
                <p
                  className={`mt-3 text-sm ${tier.featured ? "opacity-70" : "text-muted-foreground"}`}
                >
                  {tier.desc}
                </p>
                <div
                  className={`mt-4 inline-flex items-center gap-2 self-start rounded-full px-3 py-1 text-xs font-semibold ${tier.featured ? "bg-accent/20 text-accent-foreground" : "bg-accent-soft text-accent"}`}
                >
                  {tier.quota}
                </div>
                <ul className="mt-6 space-y-3 border-t border-current/10 pt-6 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="size-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pricing"
                  className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold ${tier.featured ? "bg-accent text-accent-foreground" : "bg-foreground text-primary-foreground"}`}
                >
                  {lang === "de" ? "Plan wählen" : "Choose plan"}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const { lang } = useI18n();
  const items =
    lang === "de"
      ? [
          {
            q: "Ist GastroPos TSE- und KassenSichV-konform?",
            a: "Ja. Unsere integrierte TSE-Lösung erfüllt alle Anforderungen der KassenSichV. DSFinV-K-Exporte und GoBD-konforme Belege sind Standard.",
          },
          {
            q: "Funktioniert das System offline?",
            a: "Absolut. Die Offline-First-Architektur verarbeitet Bestellungen und druckt Bons weiter, auch ohne Internet. Die Synchronisation erfolgt automatisch bei der nächsten Verbindung.",
          },
          {
            q: "Auf welchen Geräten läuft GastroPos?",
            a: "Android, iPhone/iPad, Windows, macOS und Web-Browser. Kompatibel mit professionellen POS-Terminals und gängigen Bondruckern.",
          },
          {
            q: "Kann ich DATEV nutzen?",
            a: "Ja, DATEV-Export ist nativ integriert. Ihr Steuerberater erhält monatlich automatisch alle relevanten Daten in DATEV-Format.",
          },
          {
            q: "Wie lange dauert die Einrichtung?",
            a: "Die meisten Betriebe sind in weniger als zwei Stunden live. Unser Onboarding-Team begleitet Sie bei der Migration.",
          },
          {
            q: "Gibt es eine Mindestvertragslaufzeit?",
            a: "Nein. Monatlich kündbar. Jährliche Abrechnung spart 20%.",
          },
        ]
      : [
          {
            q: "Is GastroPos TSE and KassenSichV compliant?",
            a: "Yes. Our integrated TSE solution meets every KassenSichV requirement. DSFinV-K exports and GoBD-compliant receipts ship by default.",
          },
          {
            q: "Does it work offline?",
            a: "Absolutely. The offline-first architecture continues processing orders and printing receipts without internet. It syncs automatically when the connection returns.",
          },
          {
            q: "Which devices does GastroPos run on?",
            a: "Android, iPhone/iPad, Windows, macOS, and any web browser. Compatible with professional POS terminals and common receipt printers.",
          },
          {
            q: "Can I use DATEV?",
            a: "Yes. DATEV export is natively integrated. Your accountant automatically receives all relevant data in DATEV format every month.",
          },
          {
            q: "How long does setup take?",
            a: "Most operators are live in under two hours. Our onboarding team supports the migration end to end.",
          },
          { q: "Is there a minimum contract?", a: "No. Cancel monthly. Annual billing saves 20%." },
        ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight">
            {lang === "de" ? "Häufige Fragen." : "Frequently asked."}
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold">{item.q}</span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0 text-accent" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-muted-foreground" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { lang, t } = useI18n();
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-12 text-primary-foreground md:p-20">
            <div aria-hidden className="absolute inset-0 bg-radial-fade opacity-50" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl text-balance">
                {lang === "de" ? "Bereit, schneller zu kassieren?" : "Ready to ring faster?"}
              </h2>
              <p className="mt-5 text-primary-foreground/70">
                {lang === "de"
                  ? "Live in unter zwei Stunden. Keine Kreditkarte nötig. EU-Hosting. GDPR-konform."
                  : "Live in under two hours. No credit card required. EU hosting. GDPR compliant."}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/demo"
                  className="rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-elegant hover:brightness-110"
                >
                  {t.common.bookDemo}
                </Link>
                <Link
                  to="/demo"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold hover:bg-white/10"
                >
                  {t.common.startTrial}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
