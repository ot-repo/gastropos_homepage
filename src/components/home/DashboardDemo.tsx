import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Mic, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

/* ─── Demo phases ─────────────────────────────────────────────────── */

type Phase = "idle" | "listening" | "typing" | "creating" | "done";

const VOICE_COMMAND = "Create a new table — Table 15, Terrace";
const VOICE_COMMAND_DE = "Neue Tisch erstellen — Tisch 15, Terrasse";

/* ─── Siri Waveform Bars ──────────────────────────────────────────── */

function WaveformBars() {
  return (
    <div className="flex items-center justify-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-white"
          animate={{
            height: [8, 24 + Math.random() * 16, 8, 20 + Math.random() * 12, 8],
          }}
          transition={{
            duration: 0.8 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Typewriter Text ─────────────────────────────────────────────── */

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
        setTimeout(onComplete, 800);
        return;
      }
      setDisplayed(text.slice(0, indexRef.current));
    }, 45);
    return () => clearInterval(id);
  }, [text, onComplete]);

  return (
    <span className="font-mono text-sm text-white/90">
      "{displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        |
      </motion.span>
      "
    </span>
  );
}

/* ─── Main Component ──────────────────────────────────────────────── */

export function DashboardDemo() {
  const { lang } = useI18n();
  const [phase, setPhase] = useState<Phase>("idle");
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const voiceText = lang === "de" ? VOICE_COMMAND_DE : VOICE_COMMAND;

  /* ── Auto-loop via IntersectionObserver ── */
  const runSequence = useCallback(() => {
    setPhase("listening");

    timeoutRef.current = setTimeout(() => {
      setPhase("typing");
    }, 2000);
  }, []);

  const handleTypingComplete = useCallback(() => {
    setPhase("creating");
    timeoutRef.current = setTimeout(() => {
      setPhase("done");
      timeoutRef.current = setTimeout(() => {
        setPhase("idle");
      }, 4000);
    }, 1200);
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
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(loopId);
      clearTimeout(timeoutRef.current);
    };
  }, [runSequence]);

  /* re-trigger loop when done resets to idle */
  useEffect(() => {
    if (phase !== "idle") return;
    const id = setTimeout(runSequence, 8000);
    return () => clearTimeout(id);
  }, [phase, runSequence]);

  const handleAiClick = () => {
    if (phase !== "idle") return;
    runSequence();
  };

  /* ── Order state ── */
  const isNewTable = phase === "creating" || phase === "done";

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0c1b3d] py-28">
      {/* decorative bg glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(26,45,109,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#ea5929]">
            {lang === "de" ? "KI-Sprachassistent" : "AI Voice Assistant"}
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {lang === "de"
              ? "Sprechen Sie mit Ihrer Küche."
              : "Talk to your kitchen."}
          </h2>
          <p className="mt-4 text-white/50">
            {lang === "de"
              ? "Erstellen Sie Tische, ändern Sie Bestellungen und steuern Sie Ihre Küche — nur mit Ihrer Stimme."
              : "Create tables, modify orders, and control your kitchen — just with your voice."}
          </p>
        </div>

        {/* dashboard card */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
          {/* POS Dashboard Mockup */}
          <div className="grid min-h-[440px] grid-cols-1 gap-0 lg:grid-cols-12">
            {/* Left: Menu Grid */}
            <div className="space-y-3 border-r border-border p-6 lg:col-span-7">
              {/* category tabs */}
              <div className="grid grid-cols-4 gap-2">
                {["Mains", "Drinks", "Sides", "Desserts"].map((c, i) => (
                  <div
                    key={c}
                    className={`rounded-lg px-3 py-2 text-center text-xs font-semibold ${
                      i === 0
                        ? "bg-[#0c1b3d] text-white"
                        : "bg-[#f8fafc] text-foreground ring-1 ring-border"
                    }`}
                  >
                    {c}
                  </div>
                ))}
              </div>

              {/* product grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Burger", price: "€10.50" },
                  { name: "Steak", price: "€14.00" },
                  { name: "Salad", price: "€17.50" },
                  { name: "Pasta", price: "€21.00" },
                  { name: "Pizza", price: "€24.50" },
                  { name: "Fries", price: "€28.00" },
                ].map((m) => (
                  <div
                    key={m.name}
                    className="rounded-xl bg-[#f8fafc] p-4 ring-1 ring-border transition-shadow hover:shadow-md"
                  >
                    <div className="aspect-video rounded-md bg-gradient-to-br from-[#e8edf5] to-[#d9e2f3]" />
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {m.name}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground">
                      {m.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Order Panel */}
            <div className="flex flex-col p-6 lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {lang === "de" ? "DATEV EXPORT" : "DATEV EXPORT"} #0842-X
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={isNewTable ? "new" : "old"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="mt-1 font-display text-lg font-bold text-foreground">
                    {isNewTable ? "Table 15 · Terrace" : "Table 14 · Terrace"}
                  </h4>
                </motion.div>
              </AnimatePresence>

              {/* order items */}
              <AnimatePresence mode="wait">
                {isNewTable ? (
                  <motion.div
                    key="new-order"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 flex flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#ea5929]/20 bg-[#ea5929]/5 p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12, delay: 0.2 }}
                      className="flex size-12 items-center justify-center rounded-full bg-green-500"
                    >
                      <Check className="size-6 text-white" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-3 font-display font-bold text-foreground"
                    >
                      {lang === "de" ? "Tisch erstellt!" : "Table created!"}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-1 text-sm text-muted-foreground"
                    >
                      Table 15 · Terrace · 0 items
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="existing-order"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex-1"
                  >
                    <div className="space-y-3 text-sm">
                      {[
                        ["Espresso", "€3.50"],
                        ["Riesling 0.2l", "€9.50"],
                        ["Seabass", "€34.00"],
                        ["Tiramisu", "€8.00"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-foreground">{k}</span>
                          <span className="font-mono text-muted-foreground">
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-border pt-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">MwSt 19%</span>
                      </div>
                      <div className="mt-1 flex justify-between font-display text-lg font-bold">
                        <span>Total</span>
                        <span>€84.50</span>
                      </div>
                      <p className="mt-1 flex items-center gap-1 text-[10px] text-green-600">
                        <span className="inline-block size-1.5 rounded-full bg-green-500" />
                        TSE SIGNED
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* bottom bar */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-[#0c1b3d] p-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    TOTAL
                  </p>
                  <p className="font-display text-xl font-bold text-white">
                    {isNewTable ? "€0.00" : "€84.50"}
                  </p>
                </div>
                <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0c1b3d] transition-transform hover:scale-105">
                  Tap to Pay
                </button>
              </div>
            </div>
          </div>

          {/* ── AI Button (floating) ── */}
          <button
            onClick={handleAiClick}
            className="absolute bottom-6 right-6 z-20 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ea5929] to-[#d44a1e] text-white shadow-lg shadow-[#ea5929]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#ea5929]/40"
          >
            {/* pulsing ring */}
            {phase === "idle" && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#ea5929]"
                animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <Sparkles className="size-6" />
          </button>

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
                  background:
                    "radial-gradient(ellipse at center, rgba(12,27,61,0.97) 0%, rgba(12,27,61,0.92) 100%)",
                }}
              >
                {/* mic icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="relative flex size-20 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20"
                >
                  <Mic className="size-8 text-white" />
                  {/* glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: "0 0 40px rgba(234,89,41,0.4)" }}
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

                {/* waveform */}
                <div className="mt-6 h-8">
                  {phase === "listening" && <WaveformBars />}
                </div>

                {/* status text */}
                <div className="mt-4 h-8 text-center">
                  {phase === "listening" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-white/50"
                    >
                      {lang === "de" ? "Ich höre zu..." : "Listening..."}
                    </motion.p>
                  )}
                  {phase === "typing" && (
                    <TypewriterText
                      text={voiceText}
                      onComplete={handleTypingComplete}
                    />
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
                className="absolute bottom-6 left-1/2 z-20 flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                <Check className="size-4" />
                {lang === "de"
                  ? "Tisch 15 erfolgreich erstellt"
                  : "Table 15 successfully created"}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* STATUS badge */}
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
