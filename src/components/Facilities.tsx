import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Translation } from "../i18n";

interface FacilitiesProps {
  t: Translation;
}



export default function Facilities({ t }: FacilitiesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bigImageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="facilities" ref={ref} className="relative bg-frost overflow-hidden">
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

        {/* Hero facility image - full width cinematic */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-midnight mb-6 lg:mb-8"
        >
          <motion.img
            style={{ y: bigImageY }}
            src="/images/facility-1.jpg"
            alt="Cold storage facility architecture"
            loading="lazy"
            className="absolute inset-0 w-full h-[120%] object-cover cinematic-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />

          {/* Caption overlay */}
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-14 flex items-end justify-between">
            <div>
              <div className="eyebrow text-copper-light text-[0.65rem] mb-2">
                Featured
              </div>
              <div className="font-display text-frost text-2xl lg:text-4xl font-light">
                Insulated Cold-Room Architecture
              </div>
            </div>
            <div className="hidden md:block text-frost/70 eyebrow text-[0.65rem]">
              01 / 04
            </div>
          </div>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="col-span-12 md:col-span-7 relative aspect-[4/3] overflow-hidden bg-arctic group"
          >
            <img
              src="/images/facility-2.jpg"
              alt="Industrial refrigeration systems"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-80" />
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-frost">
              <div>
                <div className="eyebrow text-copper-light text-[0.6rem] mb-1">02</div>
                <div className="font-display text-xl lg:text-2xl font-light">
                  Industrial Refrigeration
                </div>
              </div>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15 }}
            className="col-span-12 md:col-span-5 relative aspect-[4/3] overflow-hidden bg-arctic group"
          >
            <img
              src="/images/solution-produce.jpg"
              alt="Storage aisle architecture"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-80" />
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-frost">
              <div>
                <div className="eyebrow text-copper-light text-[0.6rem] mb-1">03</div>
                <div className="font-display text-xl lg:text-2xl font-light">
                  Organized Storage Aisle
                </div>
              </div>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.05 }}
            className="col-span-12 md:col-span-5 relative aspect-[4/3] overflow-hidden bg-arctic group"
          >
            <img
              src="/images/facility-4.jpg"
              alt="Loading and handling area"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-80" />
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-frost">
              <div>
                <div className="eyebrow text-copper-light text-[0.6rem] mb-1">04</div>
                <div className="font-display text-xl lg:text-2xl font-light">
                  Loading Area
                </div>
              </div>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-12 md:col-span-7 relative aspect-[4/3] overflow-hidden bg-arctic group"
          >
            <img
              src="/images/facility-intro.jpg"
              alt="Cold storage loading dock"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent opacity-80" />
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-frost">
              <div>
                <div className="eyebrow text-copper-light text-[0.6rem] mb-1">
                  Operations
                </div>
                <div className="font-display text-xl lg:text-2xl font-light">
                  Loading & Handling Operations
                </div>
              </div>
            </figcaption>
          </motion.figure>
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