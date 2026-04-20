import "./ETHMX2026BuildingSince2022.css";
import { useTranslation } from "react-i18next";

const EDITIONS = [
  {
    id: "2023",
    videoId: "4kBLHlW6T00",
    year: "2023",
    locationLabel: "CDMX",
  },
  {
    id: "2024",
    videoId: "xVa7wcIWrN4",
    year: "2024",
    locationLabel: "MÉRIDA, YUCATÁN",
  },
  {
    id: "2025",
    videoId: "IpYQd3MsCi4",
    year: "2025",
    locationLabel: "MONTERREY, NL",
  },
];

function youtubeVideoUrl(videoId) {
  return `https://youtu.be/${videoId}`;
}

function youtubeThumbnailUrl(videoId) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function PlayIconLarge() {
  return (
    <span className="ethmx26-building-edition-play" aria-hidden="true">
      <svg
        className="ethmx26-building-edition-play-svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="28"
          cy="28"
          r="26"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
          fill="rgba(255,255,255,0.18)"
        />
        <path d="M24 18L38 28L24 38V18Z" fill="#ffffff" />
      </svg>
    </span>
  );
}

function ETHMX2026BuildingSince2022() {
  const { t } = useTranslation("ethmx2026");
  const stats = t("building.stats", { returnObjects: true });

  return (
    <section
      className="ethmx26-building-since text-white"
      id="building-since-2022-ethmx2026"
      aria-labelledby="ethmx26-building-heading"
    >
      <div className="ethmx26-building-inner container-fluid container-ethmex-event px-3 px-md-4 py-5 mx-auto">
        <header className="text-center mb-4">
          <h2
            id="ethmx26-building-heading"
            className="ethmx26-building-title text-uppercase text-white mb-3"
          >
            {t("building.title")}
          </h2>
          <h3 className="ethmx26-building-subtitle text-white mb-0">
            {t("building.subtitle")}
          </h3>
        </header>

        <div className="row g-3 justify-content-center mb-5">
          {stats.map((item) => (
            <div
              key={item.id}
              className="col-4 col-md-4 col-xl-2 d-flex justify-content-center"
            >
              <div className="ethmx26-building-stat-card w-100 text-center rounded-3 border border-dark bg-white px-2 py-4 d-flex flex-column justify-content-center align-items-center">
                <p className="ethmx26-building-stat-value mb-2">{item.value}</p>
                <p className="ethmx26-building-stat-label mb-0">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="ethmx26-building-editions"
          role="region"
          aria-label={t("building.editionsAriaLabel")}
        >
          {EDITIONS.map((edition) => (
            <article
              key={edition.id}
              className="ethmx26-building-edition-card"
            >
              <a
                href={youtubeVideoUrl(edition.videoId)}
                target="_blank"
                rel="noopener noreferrer"
                className="ethmx26-building-edition-thumb"
                aria-label={`${t("building.watchAftermovieLabel")} ${edition.year}, ${edition.locationLabel}`}
              >
                <img
                  className="ethmx26-building-edition-thumb-img"
                  src={youtubeThumbnailUrl(edition.videoId)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className="ethmx26-building-edition-thumb-shade"
                  aria-hidden="true"
                />
                <PlayIconLarge />
                <span className="ethmx26-building-edition-pill ethmx26-building-edition-pill--year">
                  {edition.year}
                </span>
                <span className="ethmx26-building-edition-pill ethmx26-building-edition-pill--location">
                  {edition.locationLabel}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ETHMX2026BuildingSince2022;
