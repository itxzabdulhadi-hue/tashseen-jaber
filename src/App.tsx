import { useEffect, useState } from "react";
import { translations, type Language } from "./i18n";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Solutions from "./components/Solutions";
import Facilities from "./components/Facilities";
import Precision from "./components/Precision";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

export default function App() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="bg-frost text-midnight min-h-screen relative">
      <Navigation t={t} lang={lang} onLangChange={setLang} />
      <main>
        <Hero t={t} />
        <Introduction t={t} />
        <Marquee
          items={[
            "Cold Storage",
            "Refrigeration",
            "Preservation",
            "Cold Chain",
            "Quality",
            "Reliability",
          ]}
        />
        <Solutions t={t} />
        <Facilities t={t} />
        <Precision t={t} />
        <Industries t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} onLangChange={setLang} />
    </div>
  );
}