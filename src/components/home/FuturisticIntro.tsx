import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const SESSION_KEY = "gastropos_intro_seen";
const PARTICLE_COUNT = 62;
const TOTAL_DURATION = 3500;

/**
 * Futuristic intro overlay — spiral vortex + logo reveal.
 * Rendered via Portal into <body> to bypass PageTransition opacity.
 */
export function FuturisticIntro({ onComplete }: { onComplete: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(SESSION_KEY)) {
      setShow(false);
      onComplete();
      return;
    }

    setMounted(true);

    const logoTimer = setTimeout(() => setLogoVisible(true), 1000);
    const fadeTimer = setTimeout(() => setFading(true), TOTAL_DURATION - 800);
    const doneTimer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setShow(false);
      onComplete();
    }, TOTAL_DURATION);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  /* ── Background Image Preloader ──
     Fetch heavy hero images in the background while the 3.5s intro runs
     so they are instantly ready when the intro fades out. */
  useEffect(() => {
    if (!mounted) return;
    const imagesToPreload = [
      "/carousel-kitchen.png",
      "/carousel-restaurant.png",
      "/carousel-cafe.png",
      "/carousel-bar.png",
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      // @ts-ignore - fetchPriority is standard but sometimes missing in older TS DOM types
      img.fetchPriority = "high";
      img.src = src;
    });
  }, [mounted]);

  if (!show) return null;
  if (typeof document === "undefined") return null;

  const overlay = (
    <div
      className="intro-overlay"
      style={{
        opacity: fading ? 0 : 1,
        transform: fading ? "scale(1.05)" : "scale(1)",
        transition: "opacity 0.8s cubic-bezier(0.76,0,0.24,1), transform 0.8s cubic-bezier(0.76,0,0.24,1)",
      }}
    >
      <div className="intro-neural-grid" />
      {mounted && <div className="intro-scanline" />}

      <div className="intro-spiral-wrapper">
        <div className="intro-spiral">
          {Array.from({ length: PARTICLE_COUNT }, (_, i) => {
            const angle = ((i + 1) * 720) / PARTICLE_COUNT;
            const delay = ((i + 1) * 3) / PARTICLE_COUNT;
            return (
              <span
                key={i}
                className="intro-particle"
                style={{
                  transform: `rotate(${angle}deg) translate3d(80px, 0, 0)`,
                  animationDelay: `${delay.toFixed(5)}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      <div
        className="intro-logo-container"
        style={{
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? "scale(1) translateY(0)" : "scale(0.85) translateY(10px)",
          filter: logoVisible ? "blur(0px)" : "blur(12px)",
          transition: "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.8s ease-out",
        }}
      >
        <h1 className="intro-logo-text font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span style={{ color: "#ea5929" }}>Gastro</span>
          <span style={{ color: "#5b8af5" }}>Pos</span>
          <span style={{ color: "#5b8af5", fontSize: "0.55em", fontWeight: 700, letterSpacing: "0.02em", opacity: 0.85 }}>.ai</span>
        </h1>

        <div
          className="mt-4"
          style={{
            opacity: logoVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out 0.3s",
          }}
        >
          <span className="intro-tagline">
            <span className="intro-tagline-dot" />
            AI-POWERED GASTRONOMY PLATFORM
          </span>
        </div>

        <div
          className="intro-divider mt-4"
          style={{
            transform: logoVisible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.4s",
          }}
        />
      </div>

      <div className="intro-corner intro-corner--tl">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2 8V2h6" stroke="rgba(234,89,41,0.6)" strokeWidth="1" />
        </svg>
      </div>
      <div className="intro-corner intro-corner--tr">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2 8V2h6" stroke="rgba(234,89,41,0.6)" strokeWidth="1" />
        </svg>
      </div>
      <div className="intro-corner intro-corner--bl">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2 8V2h6" stroke="rgba(234,89,41,0.6)" strokeWidth="1" />
        </svg>
      </div>
      <div className="intro-corner intro-corner--br">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M2 8V2h6" stroke="rgba(234,89,41,0.6)" strokeWidth="1" />
        </svg>
      </div>

      <div className="intro-hud">
        <span className="intro-hud-dots">
          <span className="intro-hud-dot" style={{ animationDelay: "0s" }} />
          <span className="intro-hud-dot" style={{ animationDelay: "0.2s" }} />
          <span className="intro-hud-dot" style={{ animationDelay: "0.4s" }} />
        </span>
        <span>INITIALIZING NEURAL ENGINE</span>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
