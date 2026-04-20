import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getEthmx2026Copy } from "../locales/ethmx2026/strings.js";

const STORAGE_KEY = "ethmx2026-locale";

function syncHtmlLang(lng) {
  document.documentElement.setAttribute("lang", lng === "en" ? "en" : "es");
}

i18n.on("languageChanged", syncHtmlLang);

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { ethmx2026: getEthmx2026Copy("en") },
      es: { ethmx2026: getEthmx2026Copy("es") },
    },
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    load: "languageOnly",
    ns: ["ethmx2026"],
    defaultNS: "ethmx2026",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    detection: {
      order: ["localStorage", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: STORAGE_KEY,
    },
  })
  .then(() => {
    syncHtmlLang(i18n.resolvedLanguage?.startsWith("en") ? "en" : "es");
  });

export default i18n;
