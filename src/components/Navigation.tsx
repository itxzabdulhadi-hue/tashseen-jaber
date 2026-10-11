import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import SocialLinks from "./SocialIcons";
import { contactInfo, headerSocialKeys } from "../social";
import type { Translation, Language } from "../i18n";

interface NavigationProps {
  t: Translation;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "facilities", href: "#facilities" },
  { key: "solutions", href: "#solutions" },
  { key: "industries", href: "#industries" },
  { key: "contact", href: "#contact" },
] as const;

function EmailIconLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      title="Email"
      aria-label={`Email ${email}`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-midnight/10 bg-midnight/[0.03] text-midnight/60 transition-all duration-300 hover:border-copper hover:bg-copper hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    </a>
  );
}

export default function Navigation({ t, lang, onLangChange }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [lang]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 h-16 w-full border-b border-silver/70 bg-white text-midnight shadow-none md:h-[4.5rem]"
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-12">
          <a
            href="#home"
            className="block flex-shrink-0"
            aria-label="Tahseen Jaber Cold Storage"
          >
            <Logo variant="dark" className="h-9 w-auto md:h-10" />
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="group relative whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.14em] text-midnight/70 transition-colors duration-300 hover:text-copper 2xl:text-xs"
              >
                {t.nav[item.key]}
                <span className="absolute -bottom-1.5 left-0 right-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
            <div className="hidden items-center gap-1 lg:flex">
              <SocialLinks
                lang={lang}
                size="sm"
                tone="light"
                only={headerSocialKeys}
                className="gap-1"
              />
              <EmailIconLink email={contactInfo.email} />
            </div>

            <a
              href={`tel:${contactInfo.phone}`}
              dir="ltr"
              className="hidden whitespace-nowrap text-sm text-midnight/65 transition-colors hover:text-copper 2xl:inline-flex"
            >
              {contactInfo.phoneDisplay}
            </a>

            <div className="hidden items-center text-xs font-medium tracking-[0.12em] text-midnight/70 sm:flex">
              <button
                onClick={() => onLangChange("en")}
                className={`px-2 transition-colors ${
                  lang === "en" ? "text-midnight" : "text-midnight/45 hover:text-midnight"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-midnight/25">/</span>
              <button
                onClick={() => onLangChange("ar")}
                className={`px-2 transition-colors ${
                  lang === "ar" ? "text-midnight" : "text-midnight/45 hover:text-midnight"
                }`}
                aria-label="التبديل إلى العربية"
              >
                AR
              </button>
            </div>

            <a
              href="#contact"
              className="hidden items-center gap-2 border border-copper bg-copper px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-midnight hover:bg-midnight sm:inline-flex md:px-4 md:text-[0.68rem]"
            >
              {t.nav.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-sm p-2 text-midnight transition-colors hover:bg-midnight/5 xl:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M3 8h18" strokeLinecap="round" />
                    <path d="M3 16h18" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-b border-silver bg-white px-6 py-8 shadow-xl md:top-[4.5rem] xl:hidden"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-lg flex-col gap-5">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                  className="font-display text-2xl tracking-wide text-midnight transition-colors hover:text-copper"
                >
                  {t.nav[item.key]}
                </motion.a>
              ))}

              <div className="mt-2 flex items-center gap-5 border-t border-midnight/10 pt-6 text-sm tracking-[0.16em]">
                <button
                  onClick={() => onLangChange("en")}
                  className={lang === "en" ? "text-copper" : "text-midnight/50"}
                >
                  ENGLISH
                </button>
                <button
                  onClick={() => onLangChange("ar")}
                  className={lang === "ar" ? "text-copper" : "text-midnight/50"}
                >
                  العربية
                </button>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-1 inline-flex items-center gap-2 self-start border border-copper bg-copper px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-midnight hover:border-midnight"
              >
                {t.nav.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="mt-2 border-t border-midnight/10 pt-6">
                <div className="eyebrow mb-4 text-[0.65rem] text-copper">
                  {t.social.follow}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <SocialLinks lang={lang} size="sm" tone="light" className="gap-1" />
                  <EmailIconLink email={contactInfo.email} />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
