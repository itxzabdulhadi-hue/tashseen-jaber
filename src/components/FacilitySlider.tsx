import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Language, Translation } from "../i18n";

export interface FacilitySlide {
  src: string;
  alt: string;
}

interface FacilitySliderProps {
  t: Translation;
  lang: Language;
  slides: FacilitySlide[];
  /** Auto-advance interval in ms. */
  interval?: number;
}

const SWIPE_THRESHOLD = 48;

/**
 * Contained, auto-advancing facility slideshow.
 *
 * - arrows, dot indicators, slide counter and a pause/play control
 * - keyboard: left/right arrow keys (reversed in RTL)
 * - touch / pointer swipe
 * - auto-play is suspended while hovering, while focused, and while the tab is
 *   hidden; under `prefers-reduced-motion` it stays off until explicitly started
 */
export default function FacilitySlider({
  t,
  lang,
  slides,
  interval = 6000,
}: FacilitySliderProps) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [manualPlay, setManualPlay] = useState(false);
  const prefersReduced = useReducedMotion();

  const count = slides.length;
  const rtl = lang === "ar";
  const pointerStart = useRef<number | null>(null);

  // `paused` is the user's explicit intent (what the button reflects);
  // hover/focus/hidden are temporary suspensions on top of it.
  const paused = userPaused || (Boolean(prefersReduced) && !manualPlay);
  const running = !paused && !hovering && !focused && !tabHidden && count > 1;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-advance
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [running, count, interval]);

  // Suspend while the tab is in the background
  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  if (count === 0) return null;

  const slide = slides[index];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      rtl ? prev() : next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      rtl ? next() : prev();
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (start === null) return;
    const dx = e.clientX - start;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    // Swiping left advances in LTR; reversed in RTL.
    (rtl ? dx > 0 : dx < 0) ? next() : prev();
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={t.facilities.captions.join(", ")}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
        className="group relative w-full aspect-[3/2] sm:aspect-[16/10] overflow-hidden bg-midnight select-none touch-pan-y focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-frost"
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={slide.src}
            alt={slide.alt}
            decoding="async"
            loading={index === 0 ? "eager" : "lazy"}
            draggable={false}
            initial={{ opacity: 0, scale: prefersReduced ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReduced ? 0.25 : 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/10 to-transparent pointer-events-none" />

        {/* Caption overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 pointer-events-none">
          <div className="eyebrow text-copper-light text-[0.6rem] mb-2">
            {t.facilities.featured}
          </div>
          <AnimatePresence mode="wait">
            <motion.h3
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="font-display text-frost text-xl sm:text-2xl lg:text-3xl font-light leading-tight"
            >
              {t.facilities.captions[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={rtl ? next : prev}
              aria-label={t.facilities.prevSlide}
              title={t.facilities.prevSlide}
              className="absolute start-3 sm:start-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-frost/25 bg-midnight/35 backdrop-blur-sm text-frost opacity-70 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 hover:border-copper hover:bg-copper transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="rtl:rotate-180"
                aria-hidden="true"
              >
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={rtl ? prev : next}
              aria-label={t.facilities.nextSlide}
              title={t.facilities.nextSlide}
              className="absolute end-3 sm:end-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-frost/25 bg-midnight/35 backdrop-blur-sm text-frost opacity-70 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 hover:border-copper hover:bg-copper transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="rtl:rotate-180"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Control bar */}
      {count > 1 && (
        <div className="mt-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${t.facilities.goToSlide} ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper ${
                  i === index ? "w-8 bg-copper" : "w-1.5 bg-midnight/25 hover:bg-midnight/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="eyebrow text-midnight/50 text-[0.6rem]" aria-hidden="true">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => {
                if (paused) {
                  setUserPaused(false);
                  setManualPlay(true);
                } else {
                  setUserPaused(true);
                  setManualPlay(false);
                }
              }}
              aria-label={paused ? t.facilities.playSlides : t.facilities.pauseSlides}
              title={paused ? t.facilities.playSlides : t.facilities.pauseSlides}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-midnight/20 text-midnight/70 hover:border-copper hover:bg-copper hover:text-frost transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              {paused ? (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 4.5v15l13-7.5z" />
                </svg>
              ) : (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
