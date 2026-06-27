import { useRef, useEffect, useState, useCallback } from "react";

/* ─── Slide images ────────────────────────────────────────────────── */

const SLIDES = [
  "/carousel-kitchen.png",
  "/carousel-restaurant.png",
  "/carousel-cafe.png",
  "/carousel-bar.png",
];

/* ─── Easing helper ───────────────────────────────────────────────── */

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/* ─── Canvas Carousel Background ──────────────────────────────────── */

export function CanvasCarousel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvas1 = useRef<HTMLCanvasElement>(null);
  const maskCanvas2 = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const currentRef = useRef(0);
  const isAnimating = useRef(false);
  const animRef = useRef<number>(0);

  /* preload images */
  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === SLIDES.length) {
          imagesRef.current = imgs;
          setImagesLoaded(true);
        }
      };
      imgs.push(img);
    });
  }, []);

  /* get canvas dimensions */
  const getDims = useCallback(() => {
    const el = containerRef.current;
    if (!el) return { w: 800, h: 600 };
    return { w: el.offsetWidth, h: el.offsetHeight };
  }, []);

  /* draw a single frame (t = 0…1 transition progress) */
  const drawFrame = useCallback(
    (prevIdx: number, nextIdx: number, t: number) => {
      const canvas = canvasRef.current;
      const mask1 = maskCanvas1.current;
      const mask2 = maskCanvas2.current;
      if (!canvas || !mask1 || !mask2) return;

      const ctx = canvas.getContext("2d")!;
      const ctx1 = mask1.getContext("2d")!;
      const ctx2 = mask2.getContext("2d")!;
      const images = imagesRef.current;
      if (!images.length) return;

      const { w, h } = getDims();
      canvas.width = mask1.width = mask2.width = w;
      canvas.height = mask1.height = mask2.height = h;

      const imgPrev = images[prevIdx];
      const imgNext = images[nextIdx];

      /* cover-fit */
      const iar = imgNext.naturalWidth / imgNext.naturalHeight;
      const car = w / h;
      let dw: number, dh: number;
      if (iar < car) { dw = w; dh = w / iar; }
      else { dw = h * iar; dh = h; }
      const dx = (w - dw) / 2;
      const dy = (h - dh) / 2;

      const progress = easeInOutQuad(t);
      const opacity = 1 - progress;

      /* base: next on bottom, prev fading on top */
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 1;
      ctx.drawImage(imgNext, dx, dy, dw, dh);
      ctx.globalAlpha = opacity;
      ctx.drawImage(imgPrev, dx, dy, dw, dh);
      ctx.globalAlpha = 1;

      /* mask circle 1 */
      const r1 = w * 0.38;
      const xOff1 = 100 * opacity;
      ctx1.clearRect(0, 0, w, h);
      ctx1.save();
      ctx1.beginPath();
      ctx1.arc(w / 2, h / 2, r1 * progress + r1 * 0.1, 0, Math.PI * 2);
      ctx1.fill();
      ctx1.globalCompositeOperation = "source-in";
      ctx1.globalAlpha = 1;
      ctx1.drawImage(imgNext, dx + xOff1, dy, dw, dh);
      ctx1.globalCompositeOperation = "source-atop";
      ctx1.globalAlpha = opacity;
      ctx1.drawImage(imgPrev, dx - xOff1 * (1 - opacity), dy, dw, dh);
      ctx1.restore();

      /* mask circle 2 */
      const r2 = w * 0.18;
      const xOff2 = -60 * opacity;
      ctx2.clearRect(0, 0, w, h);
      ctx2.save();
      ctx2.beginPath();
      ctx2.arc(w / 2, h / 2, r2 * progress + r2 * 0.05, 0, Math.PI * 2);
      ctx2.fill();
      ctx2.globalCompositeOperation = "source-in";
      ctx2.globalAlpha = 1;
      ctx2.drawImage(imgNext, dx + xOff2, dy, dw, dh);
      ctx2.globalCompositeOperation = "source-atop";
      ctx2.globalAlpha = opacity;
      ctx2.drawImage(imgPrev, dx - xOff2 * (1 - opacity), dy, dw, dh);
      ctx2.restore();
    },
    [getDims],
  );

  /* static draw (no transition) */
  const drawStatic = useCallback(
    (idx: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d")!;
      const images = imagesRef.current;
      if (!images.length) return;

      const { w, h } = getDims();
      canvas.width = w;
      canvas.height = h;

      const img = images[idx];
      const iar = img.naturalWidth / img.naturalHeight;
      const car = w / h;
      let dw: number, dh: number;
      if (iar < car) { dw = w; dh = w / iar; }
      else { dw = h * iar; dh = h; }
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);

      maskCanvas1.current?.getContext("2d")?.clearRect(0, 0, w, h);
      maskCanvas2.current?.getContext("2d")?.clearRect(0, 0, w, h);
    },
    [getDims],
  );

  /* animate transition */
  const animateTo = useCallback(
    (nextIdx: number) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const prevIdx = currentRef.current;
      const duration = 1200;
      let start: number | null = null;

      const step = (ts: number) => {
        if (start === null) start = ts;
        const elapsed = ts - start;
        const t = Math.min(elapsed / duration, 1);
        drawFrame(prevIdx, nextIdx, t);
        if (t < 1) {
          animRef.current = requestAnimationFrame(step);
        } else {
          isAnimating.current = false;
          drawStatic(nextIdx);
        }
      };

      animRef.current = requestAnimationFrame(step);
      currentRef.current = nextIdx;
    },
    [drawFrame, drawStatic],
  );

  /* initial draw */
  useEffect(() => {
    if (imagesLoaded) drawStatic(0);
  }, [imagesLoaded, drawStatic]);

  /* resize handler */
  useEffect(() => {
    if (!imagesLoaded) return;
    const onResize = () => drawStatic(currentRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [imagesLoaded, drawStatic]);

  /* auto-play */
  useEffect(() => {
    if (!imagesLoaded) return;
    const id = setInterval(() => {
      const next = (currentRef.current + 1) % SLIDES.length;
      animateTo(next);
    }, 5000);
    return () => clearInterval(id);
  }, [imagesLoaded, animateTo]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <canvas ref={maskCanvas1} className="absolute inset-0 h-full w-full" />
      <canvas ref={maskCanvas2} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
