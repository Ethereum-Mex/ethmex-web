import "./ETHMX2026.css";
import { useTranslation } from "react-i18next";
import { Ethmx2026LanguageToggle } from "./Ethmx2026LanguageToggle.js";

export function ETHMX2026HeroContent({ showLanguageToggle = false }) {
  const { t } = useTranslation("ethmx2026");

  return (
    <div className="ETHMX2026-hero-inner container px-3 text-center">
      {showLanguageToggle ? (
        <div className="d-flex justify-content-end mb-2">
          <Ethmx2026LanguageToggle />
        </div>
      ) : null}
      <h1 className="ethmx2026-hero-title mb-0">
        <div className="d-flex flex-column align-items-center mb-3">
          <div className="ethmx2026-partner-logos">
            <img
              src={`${process.env.PUBLIC_URL}/images/ethmx-logo-white.svg`}
              className="ethmx2026-partner-logo"
              alt="Ethereum México"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/bitso-business-white.svg`}
              className="ethmx2026-partner-logo"
              alt="Bitso Business"
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/ethmx26-logo.png`}
            className="ethmx2026-logo-img mt-2"
            alt="Ethereum México 2026"
            width="700"
          />
        </div>
        <span className="ethmx2026-tagline d-inline-block">
          {t("hero.tagline")}
        </span>
        <span className="ethmx2026-track-line d-block">{t("hero.trackLine")}</span>
        <span className="ethmx2026-badge-row d-inline-block">{t("hero.badgeRow")}</span>
      </h1>

      <div className="ethmx2026-meta px-2 mt-4">
        <span className="ethmx2026-meta-item">
          <span> 📍 {t("hero.metaCity")} </span>
        </span>
        <span className="ethmx2026-meta-item">
          <span> 📅 {t("hero.metaDate")}</span>
        </span>
      </div>

      <div className="ethmx2026-ctas">
        <a
          className="ethmx2026-btn-hackathon"
          href="https://www.skool.com/ethmex/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("ctaHackathon")}
        </a>
        <a
          className="ethmx2026-btn-light"
          href="https://docs.google.com/presentation/d/1LcIhAQdpLkczcBzh4-ZCIbq3dRjo8qeD/edit?usp=sharing&ouid=114310261720515721669&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("hero.ctaSponsor")}
        </a>
      </div>
    </div>
  );
}
