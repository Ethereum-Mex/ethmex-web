import { useTranslation } from "react-i18next";

export function Ethmx2026HackathonCta() {
  const { t } = useTranslation("ethmx2026");

  return (
    <div className="ethmx26-cta-wrap text-center">
      <a
        href={t("ctaHackathonHref")}
        className="ethmx2026-btn-hackathon d-inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("ctaHackathon")}
      </a>
    </div>
  );
}
