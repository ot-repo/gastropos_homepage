import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Monitor,
  Hand,
  QrCode,
  ChefHat,
  Globe,
  Package,
  BookOpen,
  FileSpreadsheet,
  BarChart3,
  UtensilsCrossed,
  Coffee,
  Wine,
  Croissant,
  Truck,
  Store,
  ShoppingBag,
  Scissors,
  Sparkles,
  Briefcase,
  Rss,
  LifeBuoy,
  BookMarked,
  ShieldCheck,
  Receipt,
  Scale,
} from "lucide-react";
import logoUrl from "@/assets/logo_with_name.svg";

type LinkItem = {
  to: string;
  en: string;
  de: string;
  desc_en: string;
  desc_de: string;
  icon: React.ComponentType<{ className?: string }>;
};

const productLinks: LinkItem[] = [
  {
    to: "/product/pos",
    en: "POS System",
    de: "Kassensystem",
    desc_en: "Lightning-fast cloud till",
    desc_de: "Blitzschnelle Cloud-Kasse",
    icon: Monitor,
  },
  {
    to: "/product/waiter-ordering",
    en: "Waiter Ordering",
    de: "Kellner-App",
    desc_en: "Order at the table",
    desc_de: "Bestellen am Tisch",
    icon: Hand,
  },
  {
    to: "/product/qr-ordering",
    en: "QR Code Ordering",
    de: "QR-Bestellung",
    desc_en: "Self-order via QR",
    desc_de: "Selbstbestellung per QR",
    icon: QrCode,
  },
  {
    to: "/product/kitchen-display",
    en: "Kitchen Display",
    de: "Küchenmonitor",
    desc_en: "KDS for the line",
    desc_de: "KDS für die Küche",
    icon: ChefHat,
  },
  {
    to: "/product/online-ordering",
    en: "Online Ordering",
    de: "Online-Bestellung",
    desc_en: "Your own web shop",
    desc_de: "Eigener Webshop",
    icon: Globe,
  },
  {
    to: "/product/inventory",
    en: "Inventory",
    de: "Warenwirtschaft",
    desc_en: "Stock & recipes",
    desc_de: "Bestand & Rezepte",
    icon: Package,
  },
  {
    to: "/product/cash-book",
    en: "Cash Book",
    de: "Kassenbuch",
    desc_en: "GoBD-ready cash log",
    desc_de: "GoBD-Kassenbuch",
    icon: BookOpen,
  },
  {
    to: "/product/datev-export",
    en: "DATEV Export",
    de: "DATEV-Export",
    desc_en: "One-click accounting",
    desc_de: "Buchhaltung per Klick",
    icon: FileSpreadsheet,
  },
  {
    to: "/product/analytics",
    en: "Analytics",
    de: "Analytics",
    desc_en: "Live KPIs & reports",
    desc_de: "Live KPIs & Berichte",
    icon: BarChart3,
  },
];

const industryLinks: LinkItem[] = [
  {
    to: "/industries/restaurant",
    en: "Restaurant",
    de: "Restaurant",
    desc_en: "Full-service dining",
    desc_de: "Full-Service-Gastronomie",
    icon: UtensilsCrossed,
  },
  {
    to: "/industries/cafe",
    en: "Café",
    de: "Café",
    desc_en: "Espresso bar speed",
    desc_de: "Tempo für die Espressobar",
    icon: Coffee,
  },
  {
    to: "/industries/bar",
    en: "Bar",
    de: "Bar",
    desc_en: "Tabs & late-night flow",
    desc_de: "Tabs & Late-Night",
    icon: Wine,
  },
  {
    to: "/industries/bakery",
    en: "Bakery",
    de: "Bäckerei",
    desc_en: "Morning rush ready",
    desc_de: "Bereit für den Ansturm",
    icon: Croissant,
  },
  {
    to: "/industries/food-truck",
    en: "Food Truck",
    de: "Foodtruck",
    desc_en: "Mobile, offline-first",
    desc_de: "Mobil, offline-fähig",
    icon: Truck,
  },
  {
    to: "/industries/kiosk",
    en: "Kiosk",
    de: "Kiosk",
    desc_en: "Quick service counter",
    desc_de: "Schneller Counter",
    icon: Store,
  },
  {
    to: "/industries/retail",
    en: "Retail",
    de: "Einzelhandel",
    desc_en: "Inventory + checkout",
    desc_de: "Bestand + Kasse",
    icon: ShoppingBag,
  },
  {
    to: "/industries/hair-salon",
    en: "Hair Salon",
    de: "Friseur",
    desc_en: "Bookings & services",
    desc_de: "Termine & Dienste",
    icon: Scissors,
  },
  {
    to: "/industries/beauty-salon",
    en: "Beauty Salon",
    de: "Beautysalon",
    desc_en: "Treatments + tips",
    desc_de: "Behandlungen & Trinkgeld",
    icon: Sparkles,
  },
  {
    to: "/industries/service-business",
    en: "Service Business",
    de: "Dienstleister",
    desc_en: "Appointments + invoices",
    desc_de: "Termine + Rechnungen",
    icon: Briefcase,
  },
];

const resourceLinks: LinkItem[] = [
  {
    to: "/resources/blog",
    en: "Blog",
    de: "Blog",
    desc_en: "Insights & playbooks",
    desc_de: "Insights & Playbooks",
    icon: Rss,
  },
  {
    to: "/resources/help",
    en: "Help Center",
    de: "Hilfe-Center",
    desc_en: "Docs & how-tos",
    desc_de: "Docs & Anleitungen",
    icon: LifeBuoy,
  },
  {
    to: "/resources/pos-guide",
    en: "POS Guide",
    de: "Kassen-Guide",
    desc_en: "Choose the right POS",
    desc_de: "Die richtige Kasse wählen",
    icon: BookMarked,
  },
  {
    to: "/resources/tse-guide",
    en: "TSE Guide",
    de: "TSE-Guide",
    desc_en: "Stay KassenSichV compliant",
    desc_de: "KassenSichV-konform",
    icon: ShieldCheck,
  },
  {
    to: "/resources/datev-guide",
    en: "DATEV Guide",
    de: "DATEV-Guide",
    desc_en: "Export to your tax advisor",
    desc_de: "Export zum Steuerberater",
    icon: Receipt,
  },
  {
    to: "/compare",
    en: "Compare",
    de: "Vergleich",
    desc_en: "vs. other POS systems",
    desc_de: "vs. andere Kassen",
    icon: Scale,
  },
];

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const label = (l: LinkItem) => (lang === "de" ? l.de : l.en);
  const desc = (l: LinkItem) => (lang === "de" ? l.desc_de : l.desc_en);

  return (
    <header className="sticky top-4 z-50 px-4" onMouseLeave={() => setOpen(null)}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-white/40 bg-white/85 px-4 pl-6 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.25)] backdrop-blur-xl">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center" aria-label="GastroPos">
            <img src={logoUrl} alt="GastroPos" className="h-8 w-auto" />
          </Link>
          <nav className="hidden gap-1 text-sm font-medium text-muted-foreground lg:flex">
            <NavTrigger
              label={t.nav.product}
              isOpen={open === "product"}
              onOpen={() => setOpen("product")}
            />
            <NavTrigger
              label={t.nav.industries}
              isOpen={open === "industries"}
              onOpen={() => setOpen("industries")}
            />
            <Link
              to="/pricing"
              onMouseEnter={() => setOpen(null)}
              className="relative rounded-full px-3 py-2 transition-colors hover:text-foreground"
            >
              {t.nav.pricing}
            </Link>
            <NavTrigger
              label={t.nav.resources}
              isOpen={open === "resources"}
              onOpen={() => setOpen("resources")}
            />
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="hidden md:inline-flex items-center gap-1 rounded-full border border-border/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="Switch language"
          >
            <Globe className="size-3" />
            {lang === "en" ? "EN" : "DE"}
          </button>
          <Link
            to="/signin"
            className="hidden md:inline-flex text-sm font-semibold text-foreground hover:text-accent"
          >
            {t.nav.signin}
          </Link>
          <Link
            to="/demo"
            className="group btn-shimmer hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#ea5929] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_0_20px_rgba(234,89,41,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(234,89,41,0.5)]"
          >
            {t.nav.demo}
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button className="lg:hidden" onClick={() => setMobile(!mobile)} aria-label="Menu">
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mega-menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full mt-3 w-[min(960px,calc(100vw-2rem))] -translate-x-1/2"
            onMouseEnter={() => setOpen(open)}
          >
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/95 p-3 shadow-[0_24px_80px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5 backdrop-blur-xl">
              {open === "product" && (
                <MegaGrid
                  items={productLinks}
                  label={label}
                  desc={desc}
                  onPick={() => setOpen(null)}
                  cols={3}
                />
              )}
              {open === "industries" && (
                <MegaGrid
                  items={industryLinks}
                  label={label}
                  desc={desc}
                  onPick={() => setOpen(null)}
                  cols={2}
                />
              )}
              {open === "resources" && (
                <MegaGrid
                  items={resourceLinks}
                  label={label}
                  desc={desc}
                  onPick={() => setOpen(null)}
                  cols={2}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobile && (
        <div className="mt-2 lg:hidden">
          <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-background p-4 shadow-xl">
            <div className="flex flex-col gap-1">
              <MobileGroup
                title={t.nav.product}
                items={productLinks}
                label={label}
                onPick={() => setMobile(false)}
              />
              <MobileGroup
                title={t.nav.industries}
                items={industryLinks}
                label={label}
                onPick={() => setMobile(false)}
              />
              <Link
                to="/pricing"
                onClick={() => setMobile(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {t.nav.pricing}
              </Link>
              <MobileGroup
                title={t.nav.resources}
                items={resourceLinks}
                label={label}
                onPick={() => setMobile(false)}
              />
              <button
                onClick={() => setLang(lang === "en" ? "de" : "en")}
                className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-mono uppercase tracking-widest text-muted-foreground"
              >
                <Globe className="size-3.5" />
                {lang === "en" ? "Switch to Deutsch" : "Switch to English"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavTrigger({
  label,
  isOpen,
  onOpen,
}: {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      onMouseEnter={onOpen}
      onClick={onOpen}
      className={`relative flex items-center gap-1 rounded-full px-3 py-2 transition-colors ${
        isOpen ? "text-foreground" : "hover:text-foreground"
      }`}
    >
      {isOpen && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-accent-soft"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative">{label}</span>
      <ChevronDown
        className={`relative size-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
}

function MegaGrid({
  items,
  label,
  desc,
  onPick,
  cols,
}: {
  items: LinkItem[];
  label: (l: LinkItem) => string;
  desc: (l: LinkItem) => string;
  onPick: () => void;
  cols: 2 | 3;
}) {
  const gridCls = cols === 3 ? "grid-cols-3" : "grid-cols-2";
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.025 } } }}
      className={`grid ${gridCls} gap-1`}
    >
      {items.map((l) => {
        const Icon = l.icon;
        return (
          <motion.div
            key={l.to}
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <Link
              to={l.to as any}
              onClick={onPick}
              className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-accent-soft"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                <Icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
                  {label(l)}
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-accent" />
                </span>
                <span className="block text-xs text-muted-foreground">{desc(l)}</span>
              </span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function MobileGroup({
  title,
  items,
  label,
  onPick,
}: {
  title: string;
  items: LinkItem[];
  label: (l: LinkItem) => string;
  onPick: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold"
      >
        {title}
        <ChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
              {items.map((l) => {
                const Icon = l.icon;
                return (
                  <Link
                    key={l.to}
                    to={l.to as any}
                    onClick={onPick}
                    className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    <Icon className="size-3.5 text-accent" />
                    {label(l)}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { productLinks, industryLinks };
