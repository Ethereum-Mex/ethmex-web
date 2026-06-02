import { useTranslation } from "react-i18next";

export function Ethmx2026HackathonCta({ className = "" }) {
  const { t } = useTranslation("ethmx2026");
  const wrapClass = ["ethmx26-cta-wrap", "text-center", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClass}>
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
