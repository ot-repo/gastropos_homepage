import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import { useState, useEffect } from "react";
import { CanvasCarousel } from "./CanvasCarousel";
import {
  ArrowRight,
  Brain,
  Sparkles,
  Timer,
  Flame,
  CheckCircle2,
  Zap,
} from "lucide-react";

/* ────────────────────────────── Types ────────────────────────────── */

type OrderStatus = "new" | "cooking" | "ready";

interface KdsOrder {
  id: string;
  table: string;
  items: string[];
  status: OrderStatus;
  elapsed: number;
  priority?: boolean;
}

/* ────────────────────────────── Data ────────────────────────────── */

const SEED_ORDERS: KdsOrder[] = [
  {
    id: "a",
    table: "#14",
    items: ["2× Wagyu Burger", "1× Truffle Fries"],
    status: "cooking",
    elapsed: 342,
  },
  {
    id: "b",
    table: "#08",
    items: ["1× Lobster Risotto", "2× Caesar"],
    status: "cooking",
    elapsed: 187,
    priority: true,
  },
  {
    id: "c",
    table: "#22",
    items: ["3× Margherita", "1× Tiramisu"],
    status: "new",
    elapsed: 24,
  },
  {
    id: "d",
    table: "Bar",
    items: ["4× Espresso Martini"],
    status: "new",
    elapsed: 8,
  },
];

const STATUS_META: Record<
  OrderStatus,
  { color: string; bg: string; border: string; label: string }
> = {
  new: {
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-l-blue-500",
    label: "NEW",
  },
  cooking: {
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-l-amber-500",
    label: "COOKING",
  },
  ready: {
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-l-emerald-500",
    label: "READY",
  },
};

function fmtTime(s: number) {
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

/* ────────────────────────────── Component ────────────────────────── */

export function Hero() {
  const { lang, t } = useI18n();
  const [orders, setOrders] = useState(SEED_ORDERS);
  const [wordIdx, setWordIdx] = useState(0);

  const words = lang === "de"
    ? ["jede Küche.", "jedes Restaurant.", "jedes Café.", "jede Kasse.", "jeden Kiosk."]
    : ["every kitchen.", "every restaurant.", "every café.", "every POS.", "every kiosk."];

  /* tick timers every second */
  useEffect(() => {
    const id = setInterval(
      () => setOrders((p) => p.map((o) => ({ ...o, elapsed: o.elapsed + 1 }))),
      1000,
    );
    return () => clearInterval(id);
  }, []);

  /* cycle order statuses every 4 s */
  useEffect(() => {
    const id = setInterval(() => {
      setOrders((prev) => {
        const ni = prev.findIndex((o) => o.status === "new");
        if (ni !== -1)
          return prev.map((o, i) => (i === ni ? { ...o, status: "cooking" as const } : o));
        const ci = prev.findIndex((o) => o.status === "cooking");
        if (ci !== -1)
          return prev.map((o, i) => (i === ci ? { ...o, status: "ready" as const } : o));
        return SEED_ORDERS;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  /* cycle rotating words every 2.5s */
  useEffect(() => {
    const id = setInterval(() => {
      setWordIdx((p) => (p + 1) % words.length);
    }, 2500);
    return () => clearInterval(id);
  }, [words.length]);

  const c =
    lang === "de"
      ? {
          badge: "KI-gestützte Gastronomie-Plattform",
          h1a: "Das KI-Gehirn",
          sub: "Kassensystem, Küchenmonitor, QR-Bestellung & Reservierung in einer App.",
          cta1: t.common.startTrial,
          cta2: t.common.bookDemo,
        }
      : {
          badge: "AI-Powered Gastronomy Platform",
          h1a: "The AI brain behind",
          sub: "POS, KDS, QR ordering & reservations in one unified system.",
          cta1: t.common.startTrial,
          cta2: t.common.bookDemo,
        };

  return (
    <section className="relative -mt-20 min-h-screen overflow-hidden pt-32 pb-20">
      {/* ── Canvas carousel background ── */}
      <div aria-hidden className="absolute inset-0 z-0">
        <CanvasCarousel />
      </div>
      {/* semi-transparent overlay — warm tint for brand harmony */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(254,247,243,0.68) 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* ── text block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ea5929]/20 bg-[#ea5929]/5 px-4 py-2 text-xs font-semibold text-[#ea5929]">
            <Brain className="size-3.5" /> {c.badge}
          </span>

          <h1 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            {c.h1a}
            <br />
            <span className="inline-grid grid-cols-1 overflow-hidden h-[1.25em] pb-[0.1em] align-bottom text-gradient-ai relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 22,
                  }}
                  className="col-start-1 row-start-1 inline-block"
                >
                  {words[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg font-mono tracking-wide text-muted-foreground">
            {c.sub}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/demo"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ea5929] px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(234,89,41,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(234,89,41,0.6)]"
            >
              {c.cta1}{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 font-semibold text-foreground transition-all hover:bg-accent-soft hover:border-accent"
            >
              {c.cta2}
            </Link>
          </div>
        </motion.div>

        {/* ── KDS mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          {/* glow behind mockup */}
          <div
            aria-hidden
            className="absolute -inset-6 rounded-3xl opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(234,89,41,0.10) 0%, transparent 70%)",
            }}
          />

          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-white shadow-2xl shadow-slate-200/60">
            {/* title bar */}
            <div className="flex items-center justify-between border-b border-border/40 bg-[#f8fafc] px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  GastroPos KDS
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-600">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
                </span>
                <span className="hidden items-center gap-1.5 font-mono text-[10px] text-[#ea5929] sm:flex">
                  <Zap className="size-3" /> AI ROUTING
                </span>
              </div>
            </div>

            {/* order card grid */}
            <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-4">
              {orders.map((order) => {
                const m = STATUS_META[order.status];
                return (
                  <motion.div
                    key={order.id}
                    layout
                    className={`rounded-xl border-l-2 bg-[#f8fafc] ring-1 ring-border/30 p-4 ${m.border} transition-colors duration-500`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-bold text-foreground">{order.table}</span>
                      {order.priority && (
                        <span className="rounded bg-red-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-red-600">
                          Rush
                        </span>
                      )}
                    </div>
                    <p className={`mt-1 font-mono text-xs ${m.color}`}>
                      {fmtTime(order.elapsed)}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {order.items.map((item) => (
                        <li key={item} className="text-[11px] text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${m.bg} ${m.color}`}
                      >
                        {order.status === "new" && <Sparkles className="size-2.5" />}
                        {order.status === "cooking" && <Flame className="size-2.5" />}
                        {order.status === "ready" && <CheckCircle2 className="size-2.5" />}
                        {m.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* floating stat pills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -left-4 top-16 hidden animate-float rounded-xl border border-border bg-white/80 px-4 py-3 shadow-lg backdrop-blur-sm lg:flex"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-full bg-emerald-500/20">
                <Timer className="size-4 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase text-muted-foreground">Avg. Ticket</p>
                <p className="text-sm font-bold text-foreground">-34% faster</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute -right-4 bottom-12 hidden animate-float rounded-xl border border-border bg-white/80 px-4 py-3 shadow-lg backdrop-blur-sm lg:flex"
            style={{ animationDelay: "3s" }}
          >
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-full bg-[#ea5929]/20">
                <Zap className="size-4 text-[#ea5929]" />
              </div>
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase text-muted-foreground">Throughput</p>
                <p className="text-sm font-bold text-foreground">2,400 orders/hr</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Wave decoration ── */}
      <div className="ocean" aria-hidden>
        <div className="wave wave-1" />
        <div className="wave wave-2" />
      </div>
    </section>
  );
}
