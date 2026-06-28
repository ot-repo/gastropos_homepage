import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Mic, Check, Plus, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

/* ─── Types ─────────────────────────────────────────────────── */

type Phase = "idle" | "listening" | "typing" | "adding" | "done";
type TableStatus = "free" | "occupied" | "ready";

interface OrderItem {
  name: string;
  qty: number;
  price: number;
}

/* ─── Constants ─────────────────────────────────────────────── */

const VOICE_COMMAND_EN = "Add 2 Wagyu Burgers and a Riesling for table A3";
const VOICE_COMMAND_DE = "2 Wagyu Burger und einen Riesling für Tisch A3";

const ZONES = ["Balkon", "Garten", "Terrasse"];

type Table = { id: string; status: TableStatus; amount?: string; time?: string };

const TABLES: Table[] = [
  { id: "A1", status: "occupied", amount: "1× 19,55€", time: "14:36" },
  { id: "A2", status: "occupied", amount: "1× 7,50€", time: "14:44" },
  { id: "A3", status: "occupied", amount: "4× 14,00€", time: "22:04" },
  { id: "A4", status: "occupied", amount: "1× 16,95€", time: "23:20" },
  { id: "A5", status: "ready", amount: "1× 20,00€", time: "14:45" },
  { id: "A6", status: "free" },
  { id: "A7", status: "occupied", amount: "2× 11,00€", time: "14:47" },
  { id: "A8", status: "free" },
  { id: "A9", status: "free" },
  { id: "A10", status: "free" },
];

const STATUS_COLORS: Record<TableStatus, string> = {
  free: "bg-[#e8e8e8] text-[#666]",
  occupied: "bg-[#7B3F72] text-white",
  ready: "bg-[#5a9c56] text-white",
};

const BASE_ORDER: OrderItem[] = [
  { name: "Espresso", qty: 1, price: 3.5 },
  { name: "Seabass", qty: 2, price: 34.0 },
  { name: "Tiramisu", qty: 1, price: 8.0 },
];

const AI_ADDED_ITEMS: OrderItem[] = [
  { name: "Wagyu Burger", qty: 2, price: 24.9 },
  { name: "Riesling 0.2l", qty: 1, price: 9.5 },
];

/* ─── Waveform Bars ─────────────────────────────────────────── */

function WaveformBars() {
  return (
    <div className="flex items-center justify-center gap-1">
      {[0, 1, 2, 3, 4, 3, 2].map((i, idx) => (
        <motion.div
          key={idx}
          className="w-1 rounded-full bg-[#ea5929]"
          animate={{ height: [6, 18 + i * 4, 6, 22 + i * 3, 6] }}
          transition={{ duration: 0.7 + i * 0.08, repeat: Infinity, ease: "easeInOut", delay: idx * 0.07 }}
        />
      ))}
    </div>
  );
}

/* ─── Typewriter ────────────────────────────────────────────── */

function TypewriterText({ text, onComplete }: { text: string; onComplete: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");
    const id = setInterval(() => {
      indexRef.current++;
      if (indexRef.current > text.length) {
        clearInterval(id);
        setTimeout(onComplete, 600);
        return;
      }
      setDisplayed(text.slice(0, indexRef.current));
    }, 38);
    return () => clearInterval(id);
  }, [text, onComplete]);

  return (
    <span className="font-mono text-sm text-white/90">
      &ldquo;{displayed}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>
        |
      </motion.span>
      &rdquo;
    </span>
  );
}

/* ─── Main Component ────────────────────────────────────────── */

export function DashboardDemo() {
  const { lang } = useI18n();
  const [phase, setPhase] = useState<Phase>("idle");
  const [zone, setZone] = useState(0);
  const [activeTable, setActiveTable] = useState("A3");
  const [orderItems, setOrderItems] = useState<OrderItem[]>(BASE_ORDER);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const voiceText = lang === "de" ? VOICE_COMMAND_DE : VOICE_COMMAND_EN;

  const runSequence = useCallback(() => {
    setPhase("listening");
    timeoutRef.current = setTimeout(() => setPhase("typing"), 2000);
  }, []);

  const handleTypingComplete = useCallback(() => {
    setPhase("adding");
    setActiveTable("A3");
    timeoutRef.current = setTimeout(() => {
      setOrderItems([...BASE_ORDER, ...AI_ADDED_ITEMS]);
      setPhase("done");
      timeoutRef.current = setTimeout(() => {
        setPhase("idle");
        setOrderItems(BASE_ORDER);
      }, 5000);
    }, 800);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let loopId: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loopId = setTimeout(runSequence, 2000);
        } else {
          clearTimeout(loopId);
          clearTimeout(timeoutRef.current);
          setPhase("idle");
          setOrderItems(BASE_ORDER);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(loopId);
      clearTimeout(timeoutRef.current);
    };
  }, [runSequence]);

  useEffect(() => {
    if (phase !== "idle") return;
    const id = setTimeout(runSequence, 9000);
    return () => clearTimeout(id);
  }, [phase, runSequence]);

  const total = orderItems.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy-pattern py-28">
      {/* background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(234,89,41,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#ea5929]">
            {lang === "de" ? "KI-Sprachassistent" : "AI Voice Assistant"}
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {lang === "de" ? "Sprechen Sie mit Ihrem System." : "Talk to your system."}
          </h2>
          <p className="mt-4 text-white/50">
            {lang === "de"
              ? "Bestellungen aufnehmen, Tische verwalten — nur mit Ihrer Stimme."
              : "Take orders, manage tables, and control your business — just with your voice."}
          </p>
        </div>

        {/* POS card */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#f4f5f7] shadow-2xl">
          <div className="grid min-h-[520px] grid-cols-1 gap-0 lg:grid-cols-12">

            {/* ── LEFT: Table Grid ── */}
            <div className="border-r border-[#e0e0e0] bg-[#f4f5f7] p-5 lg:col-span-7">

              {/* Status legend */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#999]">Status</span>
                <div className="ml-auto flex flex-wrap gap-1.5">
                  {[
                    { label: lang === "de" ? "Frei" : "Free", color: "bg-[#e0e0e0]" },
                    { label: lang === "de" ? "Bestellt" : "Occupied", color: "bg-[#7B3F72]" },
                    { label: lang === "de" ? "Bereit" : "Ready", color: "bg-[#5a9c56]" },
                    { label: lang === "de" ? "Serviert" : "Served", color: "bg-[#aaa]" },
                  ].map(({ label, color }) => (
                    <span key={label} className="flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold shadow-sm">
                      <span className={`size-2 rounded-full ${color}`} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Zone tabs */}
              <div className="mb-3 grid grid-cols-3 rounded-xl bg-white p-1 shadow-sm">
                {ZONES.map((z, i) => (
                  <button
                    key={z}
                    onClick={() => setZone(i)}
                    className={`rounded-lg py-1.5 text-sm font-semibold transition-colors ${
                      zone === i ? "bg-[#0c1b3d] text-white" : "text-[#666] hover:text-[#333]"
                    }`}
                  >
                    {z}
                  </button>
                ))}
              </div>

              {/* Table grid */}
              <div className="grid grid-cols-3 gap-2">
                {TABLES.map((t) => (
                  <motion.button
                    key={t.id}
                    onClick={() => setActiveTable(t.id)}
                    whileTap={{ scale: 0.97 }}
                    className={`relative rounded-xl p-3 text-left transition-all ${STATUS_COLORS[t.status]} ${
                      activeTable === t.id ? "ring-2 ring-[#0c1b3d] ring-offset-1" : ""
                    }`}
                  >
                    <p className="text-sm font-bold">{t.id}</p>
                    {t.amount && <p className="mt-0.5 text-[10px] opacity-80">{t.amount}</p>}
                    {t.time && (
                      <p className="mt-0.5 flex items-center gap-0.5 text-[9px] opacity-60">
                        ⏱ {t.time}
                      </p>
                    )}
                    {t.status === "free" && (
                      <p className="mt-0.5 text-[10px] opacity-40">⇄ {lang === "de" ? "Teilen" : "Split"}</p>
                    )}
                    {phase === "done" && t.id === "A3" && (
                      <motion.div
                        className="absolute inset-0 rounded-xl ring-2 ring-[#ea5929]"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* AI order button */}
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => phase === "idle" && runSequence()}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-br from-[#ea5929] to-[#d44a1e] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#ea5929]/30 transition-all hover:scale-105"
                >
                  {phase === "idle" ? (
                    <>
                      <Sparkles className="size-4" />
                      {lang === "de" ? "Mit KI bestellen" : "Order with AI"}
                    </>
                  ) : (
                    <>
                      <Mic className="size-4 animate-pulse" />
                      {lang === "de" ? "Ich höre zu..." : "Listening..."}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* ── RIGHT: Order Panel ── */}
            <div className="flex flex-col bg-white p-5 lg:col-span-5">

              {/* table header */}
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-[#0c1b3d]">🔔 {activeTable}</span>
                <div className="flex gap-1.5">
                  <button className="flex size-7 items-center justify-center rounded-full bg-[#f4f5f7] hover:bg-[#e8e8e8]">
                    <ChevronLeft className="size-3.5 text-[#555]" />
                  </button>
                  <button className="flex size-7 items-center justify-center rounded-full bg-[#f4f5f7] hover:bg-[#e8e8e8]">
                    <ChevronRight className="size-3.5 text-[#555]" />
                  </button>
                </div>
              </div>

              {/* add buttons */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-1.5 rounded-lg border border-[#0c1b3d]/20 py-2 text-xs font-semibold text-[#0c1b3d] hover:bg-[#f4f5f7]">
                  <Plus className="size-3.5" />
                  {lang === "de" ? "Hinzufügen" : "Add Item"}
                </button>
                <button className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-[#0c1b3d] py-2 text-xs font-semibold text-[#0c1b3d] hover:bg-[#0c1b3d]/5">
                  <Sparkles className="size-3.5" />
                  {lang === "de" ? "Mit KI hinzufügen" : "Add with AI"}
                </button>
              </div>

              {/* course nav */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#aaa]">
                <ChevronLeft className="size-3" />
                <span>{lang === "de" ? "Gang #1" : "Course #1"}</span>
                <ChevronRight className="size-3" />
              </div>

              {/* order items */}
              <div className="mt-2 flex-1 space-y-1.5 overflow-auto">
                <AnimatePresence>
                  {orderItems.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center py-8 text-center text-[#ccc]"
                    >
                      <ShoppingBag className="size-8 mb-2" />
                      <p className="text-sm">{lang === "de" ? "Noch keine Produkte bestellt" : "No items yet"}</p>
                    </motion.div>
                  ) : (
                    orderItems.map((item, idx) => {
                      const isNew = idx >= BASE_ORDER.length;
                      return (
                        <motion.div
                          key={item.name}
                          initial={isNew ? { opacity: 0, x: 20 } : false}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: isNew ? (idx - BASE_ORDER.length) * 0.18 : 0 }}
                          className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                            isNew ? "bg-[#ea5929]/10 ring-1 ring-[#ea5929]/30" : "bg-[#f8f8f8]"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isNew && (
                              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#ea5929]">
                                <Sparkles className="size-2.5 text-white" />
                              </span>
                            )}
                            <span className="font-medium text-[#222]">
                              {item.qty}× {item.name}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-[#666]">
                            €{(item.qty * item.price).toFixed(2)}
                          </span>
                        </motion.div>
                      );
                    })
                  )}
                </AnimatePresence>
              </div>

              {/* total bar */}
              <div className="mt-3 rounded-xl bg-[#0c1b3d] px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {lang === "de" ? "Gesamt" : "Total"}
                </p>
                <motion.p
                  key={total}
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  className="font-display text-xl font-bold text-white"
                >
                  {orderItems.length}× / €{total.toFixed(2)}
                </motion.p>
              </div>
            </div>
          </div>

          {/* ── Voice Overlay ── */}
          <AnimatePresence>
            {(phase === "listening" || phase === "typing") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(12,27,61,0.97) 0%, rgba(12,27,61,0.93) 100%)",
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="relative flex size-20 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20"
                >
                  <Mic className="size-8 text-white" />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(234,89,41,0.2)",
                        "0 0 50px rgba(234,89,41,0.5)",
                        "0 0 20px rgba(234,89,41,0.2)",
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>

                <div className="mt-6 h-8">
                  {phase === "listening" && <WaveformBars />}
                </div>

                <div className="mt-4 h-10 text-center">
                  {phase === "listening" && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-white/50">
                      {lang === "de" ? "Ich höre zu..." : "Listening..."}
                    </motion.p>
                  )}
                  {phase === "typing" && (
                    <TypewriterText text={voiceText} onComplete={handleTypingComplete} />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Success Toast ── */}
          <AnimatePresence>
            {phase === "done" && (
              <motion.div
                initial={{ opacity: 0, y: 20, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: -10, x: "-50%" }}
                className="absolute bottom-6 left-1/2 z-20 flex items-center gap-2 rounded-full bg-[#ea5929] px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                <Check className="size-4" />
                {lang === "de"
                  ? "2 Wagyu Burger & Riesling zu A3 hinzugefügt"
                  : "2 Wagyu Burgers & Riesling added to A3"}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* status badge */}
        <AnimatePresence>
          {phase === "done" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
                <span className="inline-block size-2 rounded-full bg-green-400" />
                {lang === "de"
                  ? "KI-Assistent aktiv · 14 Befehle heute"
                  : "AI assistant active · 14 commands today"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
