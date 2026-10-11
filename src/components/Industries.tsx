import { motion } from "framer-motion";
import type { Translation } from "../i18n";

interface IndustriesProps {
  t: Translation;
}

const industryImages = [
  "/images/solution-produce.jpg", // agriculture
  "/images/facility-intro.jpg",   // distribution
  "/images/solution-meat.jpg",    // meat
  "/images/solution-seafood.jpg", // seafood
  "/images/solution-frozen.jpg",  // frozen food
  "/images/solution-pharma.jpg",  // pharma
];

export default function Industries({ t }: IndustriesProps) {
  return (
    <section id="industries" className="relative bg-frost overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-copper" />
              <span className="eyebrow text-copper">{t.industries.eyebrow}</span>
            </div>
            <h2 className="font-display text-midnight text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1.05] font-light">
              {t.industries.headline}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-midnight/70 text-lg leading-relaxed font-light">
              {t.industries.description}
            </p>
          </div>
        </motion.div>

        {/* Industries tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {t.industries.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: idx * 0.07 }}
              className="group relative aspect-[4/5] overflow-hidden bg-arctic cinematic-zoom-wrap"
            >
              <img
                src={industryImages[idx]}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
                style={{ filter: "brightness(0.55) saturate(0.85)" }}
              />

              {/* Tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/30 group-hover:via-midnight/40 transition-all duration-700" />

              {/* Copper accent on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-copper/15 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between text-frost">
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-copper-light text-[0.65rem]">
                    0{idx + 1}
                  </span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-frost/60 group-hover:text-copper-light group-hover:rotate-[-45deg] transition-all duration-700">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-display text-2xl lg:text-[1.75rem] font-light leading-[1.15] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-frost/70 text-sm leading-relaxed font-light max-h-0 group-hover:max-h-40 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom copper line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-copper-light/0 via-copper-light to-copper-light/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}