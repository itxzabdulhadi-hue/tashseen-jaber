import { motion } from "framer-motion";
import FacilitySlider, { type FacilitySlide } from "./FacilitySlider";
import type { Language, Translation } from "../i18n";

interface FacilitiesProps {
  t: Translation;
  lang: Language;
}

/** Slides shown in the carousel — captions come from `t.facilities.captions`. */
const slides: FacilitySlide[] = [
  {
    src: "/images/facility-1.webp",
    alt: "Insulated cold-room door with refrigerated mist",
  },
  {
    src: "/images/facility-2.webp",
    alt: "Industrial refrigeration plant and pipework",
  },
  {
    src: "/images/facility-intro.webp",
    alt: "Organized pallet storage inside a chilled room",
  },
];

/** Smaller companion row — captions come from `t.facilities.gallery`. */
const gallery = [
  {
    src: "/images/solution-produce.webp",
    alt: "Organized produce storage aisle",
  },
  {
    src: "/images/hero-warehouse.webp",
    alt: "Racked cold storage aisles",
  },
];

export default function Facilities({ t, lang }: FacilitiesProps) {
  return (
    <section id="facilities" className="relative bg-frost overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-copper" />
              <span className="eyebrow text-copper">{t.facilities.eyebrow}</span>
            </div>
            <h2 className="font-display text-midnight text-[clamp(2.25rem,4.5vw,4.25rem)] leading-[1.05] font-light">
              {t.facilities.headline}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-midnight/70 text-lg leading-relaxed font-light">
              {t.facilities.description}
            </p>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <FacilitySlider t={t} lang={lang} slides={slides} />
        </motion.div>

        {/* Companion row */}
        <div className="mt-14 lg:mt-16 grid grid-cols-12 gap-4 lg:gap-6">
          {gallery.map((item, idx) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: idx * 0.12 }}
              className="col-span-12 sm:col-span-6 relative aspect-[16/10] overflow-hidden bg-arctic group cinematic-zoom-wrap"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent opacity-90" />
              <figcaption className="absolute bottom-5 left-5 right-5 text-frost">
                <div className="eyebrow text-copper-light text-[0.6rem] mb-1">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-lg lg:text-xl font-light">
                  {t.facilities.gallery[idx]}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 pt-12 border-t border-silver grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: "Architecture", value: "Insulated" },
            { label: "Operations", value: "Organized" },
            { label: "Systems", value: "Industrial" },
            { label: "Coverage", value: "Cold Chain" },
          ].map((m, i) => (
            <div key={i}>
              <div className="eyebrow text-copper text-[0.65rem] mb-3">
                {m.label}
              </div>
              <div className="font-display text-midnight text-2xl lg:text-3xl font-light">
                {m.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
