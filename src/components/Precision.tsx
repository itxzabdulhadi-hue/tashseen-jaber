import { motion } from "framer-motion";
import type { Translation } from "../i18n";

interface PrecisionProps {
  t: Translation;
}

export default function Precision({ t }: PrecisionProps) {
  return (
    <section className="relative bg-midnight overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-arctic/40 via-midnight to-midnight" />
        <div className="mist-overlay opacity-30" />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-light to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glacier/30 to-transparent"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-copper-light" />
              <span className="eyebrow text-copper-light">{t.precision.eyebrow}</span>
            </div>
            <h2 className="font-display text-frost text-[clamp(2.5rem,5.5vw,5rem)] font-light leading-[1.02]">
              {t.precision.headline}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 lg:pt-12"
          >
            <p className="text-frost/70 text-lg leading-relaxed font-light">
              {t.precision.body}
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-px bg-frost/10 border border-frost/10">
          {t.precision.principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: idx * 0.15 }}
              className="group relative bg-midnight p-10 lg:p-14 hover:bg-arctic/30 transition-colors duration-700"
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-12">
                <div className="font-display text-copper-light text-6xl lg:text-7xl font-light leading-none">
                  0{idx + 1}
                </div>
                <div className="w-12 h-12 border border-frost/20 rounded-full flex items-center justify-center group-hover:border-copper-light transition-colors duration-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-copper-light">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-frost text-2xl lg:text-3xl font-light leading-tight mb-6">
                {p.title}
              </h3>

              {/* Body */}
              <p className="text-frost/60 text-base leading-relaxed font-light">
                {p.description}
              </p>

              {/* Bottom copper line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-copper-light/0 via-copper-light to-copper-light/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}