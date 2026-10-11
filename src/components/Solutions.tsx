import { motion } from "framer-motion";
import type { Translation } from "../i18n";

interface SolutionsProps {
  t: Translation;
}

const solutionImages = [
  "/images/solution-chilled.webp",
  "/images/solution-frozen.webp",
  "/images/solution-produce.webp",
  "/images/solution-meat.webp",
  "/images/solution-seafood.webp",
  "/images/solution-pharma.webp",
];

export default function Solutions({ t }: SolutionsProps) {
  return (
    <section id="solutions" className="relative bg-midnight overflow-hidden">
      {/* Atmospheric */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/50 to-transparent" />
      </div>
      <div className="absolute inset-0 mist-overlay opacity-40" />

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
              <span className="eyebrow text-copper-light">{t.solutions.eyebrow}</span>
            </div>
            <h2 className="font-display text-frost text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1.05] font-light">
              {t.solutions.headline}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 lg:pt-12"
          >
            <p className="text-frost/65 text-lg leading-relaxed font-light">
              {t.solutions.description}
            </p>
          </motion.div>
        </div>

        {/* Solutions grid - asymmetric editorial */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.solutions.items.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: idx * 0.08 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-arctic cinematic-zoom-wrap">
                <img
                  src={solutionImages[idx]}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />

                {/* Top right temp */}
                <div className="absolute top-5 right-5 bg-frost/10 backdrop-blur-md border border-frost/20 px-3 py-1.5">
                  <span className="font-mono text-frost text-xs tracking-wider">
                    {item.temp}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-copper-light eyebrow text-[0.65rem]">
                      0{idx + 1}
                    </span>
                    <div className="h-px flex-1 bg-copper-light/40" />
                  </div>
                  <h3 className="font-display text-frost text-2xl lg:text-3xl leading-tight mb-3 font-light">
                    {item.title}
                  </h3>
                  <p className="text-frost/65 text-sm font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}