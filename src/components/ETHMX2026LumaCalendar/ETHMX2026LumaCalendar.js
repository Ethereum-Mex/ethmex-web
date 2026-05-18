import "./ETHMX2026LumaCalendar.css";
import { useTranslation } from "react-i18next";

const LUMA_CALENDAR_EMBED_SRC =
  "https://luma.com/embed/calendar/cal-GTrG3QVgrb95wvz/events";

/** Calendar embed rendered inside “¿Por qué México?” (subsection heading is h3). */
export function ETHMX2026LumaCalendarBlock() {
  const { t } = useTranslation("ethmx2026");

  return (
    <div
      id="luma-calendar-ethmx2026"
      className="ethmx26-luma-cal-block"
      role="region"
      aria-labelledby="ethmx26-luma-cal-heading"
    >
      <header className="text-center mb-4">
        <h3 id="ethmx26-luma-cal-heading" className="ethmx26-luma-cal-title mb-0">
          {t("lumaCalendar.title")}
        </h3>
      </header>

      <div className="ethmx26-luma-cal-embed-shell">
        <iframe
          src={LUMA_CALENDAR_EMBED_SRC}
          title={t("lumaCalendar.iframeTitle")}
          className="ethmx26-luma-cal-iframe"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
