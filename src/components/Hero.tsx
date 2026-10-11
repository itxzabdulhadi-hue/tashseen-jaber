import { motion } from "framer-motion";
import type { Translation } from "../i18n";

interface HeroProps {
  t: Translation;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section
      id="home"
      className="hero-section relative flex w-full items-center overflow-hidden bg-midnight"
      aria-label="Hero"
    >
      {/* A contained image panel keeps the opening section lighter and shorter. */}
      <div className="absolute inset-0">
        <div className="hero-image-panel">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            src="/images/hero-warehouse.webp"
            alt="Refrigerated warehouse interior"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="hero-image-overlay absolute inset-0" />
          <div className="mist-overlay mist-anim" />
          <div className="icy-sweep" />
        </div>
      </div>

      {/* Architectural lines */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="absolute right-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-glacier to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glacier/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-10 pt-10 lg:px-12 lg:pb-12 lg:pt-12">
        <div className="max-w-4xl lg:max-w-[58%]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-copper-light" />
            <span className="eyebrow text-frost/80">{t.hero.eyebrow}</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2.5rem,5.8vw,6rem)] font-light leading-[0.98] tracking-[-0.02em] text-frost">
            <motion.span
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {t.hero.headline1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-7 max-w-xl text-base font-light leading-relaxed text-frost/75 lg:text-lg"
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-8 flex flex-wrap items-center gap-4"
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
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-9 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 border-t border-frost/15 pt-5 sm:mt-10 sm:gap-x-8 lg:mt-11 lg:grid-cols-4 lg:gap-6"
          >
            {[
              { label: "Location", value: "Baghdad · IQ" },
              { label: "Established", value: "Industrial" },
              { label: "Coverage", value: "Cold Chain" },
              { label: "Approach", value: "Precision" },
            ].map((spec, i) => (
              <div key={i}>
                <div className="eyebrow mb-2 text-[0.6rem] text-copper-light">
                  {spec.label}
                </div>
                <div className="font-display text-xl font-light text-frost lg:text-2xl">
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
        transition={{ duration: 0.8, delay: 1.7 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-frost/60 sm:flex"
      >
        <span className="eyebrow text-[0.6rem]">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-frost/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
