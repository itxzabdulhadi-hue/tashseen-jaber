import Logo from "./Logo";
import type { Translation, Language } from "../i18n";

interface FooterProps {
  t: Translation;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function Footer({ t, lang, onLangChange }: FooterProps) {
  return (
    <footer className="bg-midnight border-t border-frost/10 relative overflow-hidden">
      <div className="absolute inset-0 mist-overlay opacity-30" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Logo + tagline */}
          <div className="lg:col-span-5">
            <Logo variant="light" className="h-12 lg:h-14 w-auto" />
            <p className="mt-6 text-frost/55 text-sm font-light max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="w-2 h-2 bg-copper-light rounded-full icy-pulse" />
              <span className="eyebrow text-frost/50 text-[0.6rem]">
                {t.footer.location}
              </span>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <div className="eyebrow text-copper-light text-[0.65rem] mb-6">
              {t.footer.navigation}
            </div>
            <ul className="space-y-3">
              {[
                { key: "home", href: "#home" },
                { key: "about", href: "#about" },
                { key: "facilities", href: "#facilities" },
                { key: "solutions", href: "#solutions" },
                { key: "industries", href: "#industries" },
                { key: "contact", href: "#contact" },
              ].map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-frost/70 hover:text-copper-light text-sm transition-colors duration-300"
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="eyebrow text-copper-light text-[0.65rem] mb-6">
              {t.footer.contact}
            </div>
            <div className="space-y-3 text-frost/70 text-sm">
              <a
                href="tel:+9647768677775"
                className="block hover:text-copper-light transition-colors duration-300"
                dir="ltr"
              >
                +964 776 867 7775
              </a>
              <a
                href="mailto:info@tahseenjaber.com"
                className="block hover:text-copper-light transition-colors duration-300"
                dir="ltr"
              >
                info@tahseenjaber.com
              </a>
              <a
                href="mailto:Shuaib@tahseenjaber.com"
                className="block hover:text-copper-light transition-colors duration-300"
                dir="ltr"
              >
                Shuaib@tahseenjaber.com
              </a>
              <p className="pt-2 leading-relaxed">
                Uuayrij Industrial Area<br />Baghdad, Iraq
              </p>
            </div>

            {/* Lang switch */}
            <div className="mt-8 flex items-center gap-4 text-frost/70 text-xs tracking-[0.18em] font-medium">
              <button
                onClick={() => onLangChange("en")}
                className={`px-1 transition-colors ${
                  lang === "en" ? "text-copper-light" : "hover:text-frost"
                }`}
              >
                EN
              </button>
              <span className="text-frost/30">·</span>
              <button
                onClick={() => onLangChange("ar")}
                className={`px-1 transition-colors ${
                  lang === "ar" ? "text-copper-light" : "hover:text-frost"
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-frost/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-frost/45 text-xs">
          <p>
            © {new Date().getFullYear()} Tahseen Jaber Cold Storage.{" "}
            {t.footer.rights}
          </p>
          <p className="eyebrow text-[0.6rem]">Cold Storage · Baghdad · Iraq</p>
        </div>
      </div>
    </footer>
  );
}