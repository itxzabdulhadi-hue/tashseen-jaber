import { motion } from "framer-motion";
import SocialLinks from "./SocialIcons";
import { contactInfo } from "../social";
import type { Translation, Language } from "../i18n";

interface ContactProps {
  t: Translation;
  lang: Language;
}

export default function Contact({ t, lang }: ContactProps) {
  return (
    <section
      id="contact"
      className="relative bg-midnight overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/facility-1.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/85 to-midnight" />
        <div className="mist-overlay opacity-40" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-copper-light" />
                <span className="eyebrow text-copper-light">{t.contact.eyebrow}</span>
              </div>

              <h2 className="font-display text-frost text-[clamp(2.5rem,5.5vw,5rem)] font-light leading-[1.02]">
                {t.contact.headline}
              </h2>

              <p className="mt-10 text-frost/70 text-lg font-light leading-relaxed max-w-2xl">
                {t.contact.body}
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <a href={`mailto:${contactInfo.email}`} className="btn-primary">
                  {t.contact.primaryCta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href={`tel:${contactInfo.phone}`} className="btn-ghost">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t.contact.secondaryCta}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right - Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-arctic/30 backdrop-blur-xl border border-frost/10 p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <div className="eyebrow text-copper-light text-[0.65rem] mb-3">
                    {t.contact.location}
                  </div>
                  <div className="font-display text-frost text-xl lg:text-2xl font-light leading-snug">
                    Uuayrij Industrial Area<br />Baghdad, Iraq
                  </div>
                </div>

                <div className="h-px bg-frost/10" />

                <div>
                  <div className="eyebrow text-copper-light text-[0.65rem] mb-3">
                    {t.contact.phone}
                  </div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="font-display text-frost text-xl lg:text-2xl font-light hover:text-copper-light transition-colors duration-500"
                    dir="ltr"
                  >
                    {contactInfo.phoneDisplay}
                  </a>
                </div>

                <div className="h-px bg-frost/10" />

                <div>
                  <div className="eyebrow text-copper-light text-[0.65rem] mb-3">
                    {t.contact.email}
                  </div>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="block font-display text-frost text-lg lg:text-xl font-light hover:text-copper-light transition-colors duration-500"
                      dir="ltr"
                    >
                      {contactInfo.email}
                    </a>
                    <a
                      href={`mailto:${contactInfo.emailAlt}`}
                      className="block text-frost/70 text-base hover:text-copper-light transition-colors duration-500"
                      dir="ltr"
                    >
                      {contactInfo.emailAlt}
                    </a>
                  </div>
                </div>

                <div className="h-px bg-frost/10" />

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-copper-light rounded-full icy-pulse" />
                  <span className="eyebrow text-frost/60 text-[0.6rem]">
                    Operational facility · Baghdad
                  </span>
                </div>

                <div className="h-px bg-frost/10" />

                <div>
                  <div className="eyebrow text-copper-light text-[0.65rem] mb-4">
                    {t.social.follow}
                  </div>
                  <SocialLinks lang={lang} size="sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}