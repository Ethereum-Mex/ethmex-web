import { useTranslation } from "react-i18next";
import "./ETHMX2026.css";

export function Ethmx2026LanguageToggle() {
  const { i18n } = useTranslation("ethmx2026");
  const isEn = i18n.language?.startsWith("en");

  return (
    <div
      className="ethmx26-lang-toggle d-flex align-items-center gap-2 text-white"
      lang={isEn ? "en" : "es"}
    >
      <span
        className={`ethmx26-lang-toggle-label small ${!isEn ? "ethmx26-lang-toggle-label--active" : ""}`}
      >
        ES
      </span>
      <div className="form-check form-switch m-0 ethmx26-lang-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          checked={isEn}
          onChange={(e) => {
            void i18n.changeLanguage(e.target.checked ? "en" : "es");
          }}
          aria-label={
            isEn
              ? "Show this page in Spanish"
              : "Mostrar esta página en inglés"
          }
        />
      </div>
      <span
        className={`ethmx26-lang-toggle-label small ${isEn ? "ethmx26-lang-toggle-label--active" : ""}`}
      >
        EN
      </span>
    </div>
  );
}
