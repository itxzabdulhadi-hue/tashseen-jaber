import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Translation } from "../i18n";

interface FloatingMessageProps {
  t: Translation;
}

/**
 * Floating "message us" button, pinned to the bottom corner (logical
 * `end`/`bottom` so it flips to the left in RTL). Appears once the visitor has
 * scrolled past the hero, and jumps to the inquiry form, focusing the first
 * field so they can start typing immediately.
 */
export default function FloatingMessage({ t }: FloatingMessageProps) {
  const [visible, setVisible] = useState(false);
  const focusTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(
    () => () => {
      if (focusTimer.current !== null) window.clearTimeout(focusTimer.current);
    },
    []
  );

  const jumpToForm = () => {
    const target = document.getElementById("inquiry");
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    // Wait for the scroll to settle before moving focus, so the page doesn't
    // jump back up to the input.
    focusTimer.current = window.setTimeout(
      () => document.getElementById("inquiry-name")?.focus({ preventScroll: true }),
      reduced ? 0 : 700
    );
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={jumpToForm}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          aria-label={t.floating.label}
          title={t.floating.label}
          className="group fixed bottom-6 end-6 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-copper text-frost shadow-[0_10px_30px_-6px_rgba(16,29,50,0.5)] hover:bg-midnight transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-frost"
        >
          {/* subtle attention ring */}
          <span className="absolute inset-0 rounded-full border border-copper-light/60 icy-pulse" aria-hidden="true" />
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
