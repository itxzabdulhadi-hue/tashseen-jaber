import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Translation } from "../i18n";

interface IntroductionProps {
  t: Translation;
}

export default function Introduction({ t }: IntroductionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="relative bg-frost overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-copper" />
          <span className="eyebrow text-copper">{t.intro.eyebrow}</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-silver">
              <motion.img
                style={{ y: imageY }}
                src="/images/facility-intro.jpg"
                alt="Cold storage facility"
                className="absolute inset-0 w-full h-[120%] object-cover cinematic-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-midnight/5" />

              {/* Floating label */}
              <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                <div className="bg-frost/95 backdrop-blur-sm px-4 py-3">
                  <div className="eyebrow text-copper text-[0.6rem]">Est.</div>
                  <div className="font-display text-midnight text-lg leading-none mt-1">
                    {t.intro.signature}
                  </div>
                </div>
                <div className="text-right text-frost/90">
                  <div className="eyebrow text-[0.6rem]">01</div>
                </div>
              </div>

              {/* Bottom corner badge */}
              <div className="absolute bottom-6 left-6 text-frost/90">
                <div className="eyebrow text-[0.6rem] mb-1">Architecture</div>
                <div className="font-display text-2xl">Cold Room</div>
              </div>
            </div>

            {/* Decorative copper frame */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-copper/40 hidden lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-midnight text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] font-light">
              {t.intro.headline}
            </h2>

            <div className="mt-10 copper-divider w-24 h-px bg-copper" />

            <p className="mt-10 text-midnight/70 text-lg leading-relaxed font-light">
              {t.intro.body}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-silver">
              <div>
                <div className="font-display text-copper text-4xl font-light">01</div>
                <div className="eyebrow text-midnight/60 mt-3 text-[0.65rem]">
                  Preservation
                </div>
              </div>
              <div>
                <div className="font-display text-copper text-4xl font-light">02</div>
                <div className="eyebrow text-midnight/60 mt-3 text-[0.65rem]">
                  Reliability
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}