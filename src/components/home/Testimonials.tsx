import { useState, useEffect, useCallback, useRef } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Star, Quote } from "lucide-react";

/* ─── Testimonial data ────────────────────────────────────────────── */

interface Testimonial {
  name: string;
  role: { en: string; de: string };
  location: string;
  quote: { en: string; de: string };
  stars: number;
  avatar: string; /* initials-based placeholder */
  color: string; /* avatar accent color */
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "David Rossi",
    role: { en: "Head Chef, Osteria Moderna", de: "Küchenchef, Osteria Moderna" },
    location: "Munich, DE",
    quote: {
      en: "GastroPos cut our ticket times by 40%. The AI routing is like having an extra sous chef who never sleeps.",
      de: "GastroPos hat unsere Ticketzeiten um 40% reduziert. Das KI-Routing ist wie ein Extra-Souschef, der nie schläft.",
    },
    stars: 5,
    avatar: "/avatars/david.jpg",
    color: "#ea5929",
  },
  {
    name: "Elia Lindström",
    role: { en: "Owner, Nordic Kitchen", de: "Inhaber, Nordic Kitchen" },
    location: "Berlin, DE",
    quote: {
      en: "We went from constant kitchen chaos to smooth service in two weeks. The QR self-ordering system completely eliminated waiting times.",
      de: "In zwei Wochen von ständigem Küchenchaos zu reibungslosem Service. Das QR-Selbstbestellsystem hat die Wartezeiten komplett eliminiert.",
    },
    stars: 5,
    avatar: "/avatars/elia.jpg",
    color: "#5b7cf7",
  },
  {
    name: "Hans Weber",
    role: { en: "F&B Director, Grand Hotel Europa", de: "F&B Direktor, Grand Hotel Europa" },
    location: "Vienna, AT",
    quote: {
      en: "Managing 3 restaurants and room service from one KDS? Game changer. Our guests notice the difference.",
      de: "3 Restaurants und Zimmerservice über ein KDS verwalten? Ein Gamechanger. Unsere Gäste bemerken den Unterschied.",
    },
    stars: 5,
    avatar: "/avatars/hans.jpg",
    color: "#10b981",
  },
  {
    name: "Jin Lee",
    role: { en: "Operations Manager, CloudBite", de: "Betriebsleiter, CloudBite" },
    location: "Hamburg, DE",
    quote: {
      en: "Managing 300+ delivery orders an hour used to be a nightmare. With the integrated delivery system and caller ID, everything is perfectly organized.",
      de: "Über 300 Lieferbestellungen pro Stunde zu verwalten war ein Albtraum. Mit dem integrierten Liefersystem und der Anruferkennung ist alles perfekt organisiert.",
    },
    stars: 5,
    avatar: "/avatars/jin.jpg",
    color: "#f59e0b",
  },
  {
    name: "Johny Hoffman",
    role: { en: "Café Owner, Bohne & Blatt", de: "Café-Inhaber, Bohne & Blatt" },
    location: "Zurich, CH",
    quote: {
      en: "The Voice AI Assistant is incredible. Being able to create tables and manage orders just by speaking has completely changed how we work.",
      de: "Der KI-Sprachassistent ist unglaublich. Tische und Bestellungen nur mit der Stimme zu verwalten, hat unsere Arbeitsweise komplett verändert.",
    },
    stars: 5,
    avatar: "/avatars/johny.jpg",
    color: "#8b5cf6",
  },
  {
    name: "Osman Yılmaz",
    role: { en: "Head Chef, Feuer & Flamme", de: "Küchenchef, Feuer & Flamme" },
    location: "Frankfurt, DE",
    quote: {
      en: "The real-time analytics caught a bottleneck I didn't even know we had. Our throughput jumped 28% overnight.",
      de: "Die Echtzeit-Analytik hat einen Engpass entdeckt, den ich nicht mal kannte. Unser Durchsatz stieg über Nacht um 28%.",
    },
    stars: 5,
    avatar: "/avatars/osman.jpg",
    color: "#ec4899",
  },
];

/* ─── Animation positions ─────────────────────────────────────────── */

/*
  Cards flow vertically like the reference:
  - Position 0 (exiting): slides up and fades out
  - Position 1 (top):     visible, slightly dimmed
  - Position 2 (center):  prominent, offset right, full opacity
  - Position 3 (bottom):  visible, slightly dimmed
  - Position 4+ (queue):  hidden below, waiting to enter
*/

interface CardPosition {
  y: number;
  x: number;
  opacity: number;
  scale: number;
  zIndex: number;
}

const POSITIONS: CardPosition[] = [
  { y: -120, x: 0, opacity: 0, scale: 0.95, zIndex: 0 },      // 0: exiting up
  { y: 0, x: 0, opacity: 0.7, scale: 0.98, zIndex: 1 },        // 1: top
  { y: 120, x: 0, opacity: 1, scale: 1, zIndex: 2 },            // 2: center (hero)
  { y: 240, x: 0, opacity: 0.7, scale: 0.98, zIndex: 1 },       // 3: bottom
  { y: 340, x: 0, opacity: 0, scale: 0.95, zIndex: 0 },         // 4: entering
];

/* ─── Testimonials Component ──────────────────────────────────────── */

export function Testimonials() {
  const { lang } = useI18n();
  const [order, setOrder] = useState(() => TESTIMONIALS.map((_, i) => i));
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const advance = useCallback(() => {
    setOrder((prev) => {
      const next = [...prev];
      const first = next.shift()!;
      next.push(first);
      return next;
    });
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(advance, 3500);
    return () => clearInterval(intervalRef.current);
  }, [advance]);

  /* Map each testimonial index → its visual position */
  const getPosition = (testimonialIdx: number): CardPosition => {
    const slot = order.indexOf(testimonialIdx);
    if (slot <= 0) return POSITIONS[0];
    if (slot === 1) return POSITIONS[1];
    if (slot === 2) return POSITIONS[2];
    if (slot === 3) return POSITIONS[3];
    return POSITIONS[4];
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ── Left: heading ── */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#ea5929]">
              {lang === "de" ? "Kundenstimmen" : "Testimonials"}
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {lang === "de"
                ? "Was unsere Kunden sagen."
                : "What our customers say."}
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              {lang === "de"
                ? "Hunderte von Küchen weltweit vertrauen auf GastroPos für schnelleren, intelligenteren Service."
                : "Hundreds of kitchens worldwide trust GastroPos for faster, smarter service."}
            </p>
          </div>

          {/* ── Right: vertical card slider ── */}
          <div className="relative h-[380px] sm:h-[420px]">
            {TESTIMONIALS.map((t, i) => {
              const pos = getPosition(i);
              return (
                <div
                  key={t.name}
                  className="absolute left-0 right-0 top-0 mx-auto w-full max-w-full sm:max-w-[520px]"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* ── Modern card ── */}
                  <div className="relative flex overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-xl shadow-slate-900/[0.04] backdrop-blur-sm">
                    {/* gradient left accent — navy→orange from logo */}
                    <div
                      className="absolute left-0 top-0 z-10 h-full w-[3px]"
                      style={{ background: "linear-gradient(180deg, #1a2d6d 0%, #ea5929 100%)" }}
                    />

                    {/* Left side: Full height avatar image */}
                    <div className="relative w-[120px] shrink-0 sm:w-[150px]">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                      {/* subtle color overlay accent from the author's brand */}
                      <div 
                        className="absolute bottom-0 left-0 h-1 w-full"
                        style={{ background: t.color }}
                      />
                    </div>

                    {/* Right side: Content */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-2">
                        <Quote className="size-5 text-[#ea5929]/30" />
                      </div>
                      
                      <p className="text-[14px] leading-relaxed text-foreground/80 sm:text-[15px]">
                        {lang === "de" ? t.quote.de : t.quote.en}
                      </p>
                      
                      <div className="mt-auto pt-4">
                        <div className="mb-3 h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent" />
                        <div className="flex items-end justify-between gap-2">
                          <div className="min-w-0">
                            <h4 className="text-sm font-semibold text-foreground">{t.name}</h4>
                            <p className="line-clamp-1 text-[11px] text-muted-foreground">
                              {lang === "de" ? t.role.de : t.role.en} · {t.location}
                            </p>
                          </div>
                          <div className="flex shrink-0 gap-0.5 pb-0.5">
                            {Array.from({ length: t.stars }).map((_, s) => (
                              <Star key={s} className="size-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
