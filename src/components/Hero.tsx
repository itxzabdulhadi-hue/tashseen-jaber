import { motion } from "framer-motion";
import type { Translation } from "../i18n";

interface HeroProps {
  t: Translation;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          src="/images/hero-warehouse.webp"
          alt="Refrigerated warehouse interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-overlay-dark" />
        <div className="mist-overlay mist-anim" />
        <div className="icy-sweep" />
      </div>

      {/* Architectural lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glacier to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glacier/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-12 bg-copper-light" />
            <span className="eyebrow text-frost/80">{t.hero.eyebrow}</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-frost text-[clamp(2.75rem,7.5vw,7.5rem)] leading-[0.95] tracking-[-0.02em] font-light">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {t.hero.headline1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {t.hero.headline2.split(".")[0]}.{" "}
              <span className="italic text-copper-light">
                {t.hero.headline2.split(".")[1]?.trim() || t.hero.accent}
              </span>
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 max-w-2xl text-frost/70 text-base lg:text-lg leading-relaxed font-light"
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <a href="#facilities" className="btn-primary">
              {t.hero.primaryCta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#solutions" className="btn-ghost">
              {t.hero.secondaryCta}
            </a>
          </motion.div>

          {/* Spec strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.8 }}
            className="mt-20 lg:mt-28 pt-8 border-t border-frost/15 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl"
          >
            {[
              { label: "Location", value: "Baghdad · IQ" },
              { label: "Established", value: "Industrial" },
              { label: "Coverage", value: "Cold Chain" },
              { label: "Approach", value: "Precision" },
            ].map((spec, i) => (
              <div key={i}>
                <div className="eyebrow text-copper-light text-[0.65rem] mb-2">
                  {spec.label}
                </div>
                <div className="font-display text-frost text-xl lg:text-2xl font-light">
                  {spec.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-frost/60"
      >
        <span className="eyebrow text-[0.6rem]">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-frost/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}