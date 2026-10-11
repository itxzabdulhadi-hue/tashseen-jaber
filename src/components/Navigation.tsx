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

export default function Navigation({ t, lang, onLangChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [lang]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[rgba(16,29,50,0.85)] backdrop-blur-xl border-b border-[rgba(247,249,251,0.08)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        {/* Utility strip — wide screens only, collapses once the page scrolls */}
        <div
          className={`hidden lg:block overflow-hidden transition-all duration-500 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-10 flex items-center justify-between gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              dir="ltr"
              className="text-frost/55 hover:text-copper-light text-xs tracking-[0.18em] transition-colors duration-300"
            >
              {contactInfo.phoneDisplay}
            </a>
            <div className="flex items-center gap-4">
              <span className="eyebrow text-frost/45 text-[0.6rem]">
                {t.social.follow}
              </span>
              <SocialLinks lang={lang} size="sm" only={headerSocialKeys} className="gap-2" />
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 block" aria-label="Tahseen Jaber Cold Storage">
            <Logo
              variant="light"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="relative text-frost/80 hover:text-frost text-xs tracking-[0.22em] uppercase font-medium transition-colors duration-300 group"
              >
                {t.nav[item.key]}
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-copper-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Lang switch */}
            <div className="hidden sm:flex items-center text-frost/80 text-xs tracking-[0.18em] font-medium">
              <button
                onClick={() => onLangChange("en")}
                className={`px-2 transition-colors ${
                  lang === "en" ? "text-frost" : "text-frost/50 hover:text-frost"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-frost/30">/</span>
              <button
                onClick={() => onLangChange("ar")}
                className={`px-2 transition-colors ${
                  lang === "ar" ? "text-frost" : "text-frost/50 hover:text-frost"
                }`}
                aria-label="التبديل إلى العربية"
              >
                AR
              </button>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-copper-light/70 text-frost text-xs tracking-[0.22em] uppercase font-medium hover:bg-copper hover:border-copper transition-all duration-500"
            >
              {t.nav.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-frost p-2"
              aria-label="Menu"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[rgba(16,29,50,0.97)] backdrop-blur-xl pt-28 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                  className="text-frost text-2xl font-display tracking-wide"
                >
                  {t.nav[item.key]}
                </motion.a>
              ))}
              <div className="pt-8 mt-4 border-t border-frost/10 flex items-center gap-6">
                <button
                  onClick={() => onLangChange("en")}
                  className={`text-sm tracking-[0.2em] ${
                    lang === "en" ? "text-copper-light" : "text-frost/50"
                  }`}
                >
                  ENGLISH
                </button>
                <button
                  onClick={() => onLangChange("ar")}
                  className={`text-sm tracking-[0.2em] ${
                    lang === "ar" ? "text-copper-light" : "text-frost/50"
                  }`}
                >
                  العربية
                </button>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 border border-copper-light/70 text-frost text-xs tracking-[0.22em] uppercase font-medium self-start"
              >
                {t.nav.cta}
              </a>

              <div className="mt-8 pt-8 border-t border-frost/10">
                <div className="eyebrow text-copper-light text-[0.65rem] mb-4">
                  {t.social.follow}
                </div>
                <SocialLinks lang={lang} size="sm" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}