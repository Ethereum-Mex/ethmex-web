import "./Eventos.css";

const EDICIONES_VIDEO = [
  {
    id: "2023",
    videoId: "4kBLHlW6T00",
    year: "2023",
    locationLabel: "MÉRIDA, YUCATÁN",
  },
  {
    id: "2024",
    videoId: "i3RyCmujgj8",
    year: "2024",
    locationLabel: "MONTERREY, NL",
  },
  {
    id: "2025",
    videoId: "IpYQd3MsCi4",
    year: "2025",
    locationLabel: "CDMX",
  },
];

const enlacesExtra = [
  {
    id: "calendario",
    nombre: "Calendario de Eventos",
    enlace: "https://lu.ma/user/usr-v1zLEl1mRH1H4md",
  },
  {
    id: "reportes",
    nombre: "Reportes de Transparencia",
    enlace:
      "https://accessible-mitten-7e2.notion.site/Reportes-de-Transparencia-21b6a580104b8090b621ce5899d91707",
  },
];

function youtubeVideoUrl(videoId) {
  return `https://youtu.be/${videoId}`;
}

function youtubeThumbnailUrl(videoId) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function PlayIcon() {
  return (
    <span className="eventos-edition-play" aria-hidden="true">
      <svg
        className="eventos-edition-play-svg"
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

function Eventos() {
  return (
    <div
      className="container-fluid container-ethmex align-items-center justify-content-center"
      id="events"
    >
      <h1 className="ethmex-primary-title text-center mb-5">Eventos</h1>

      <div className="container-ethmex-aux mx-auto">
        <div className="row g-4 mb-4 mb-lg-5 justify-content-center">
          {enlacesExtra.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-4 text-center"
            >
              <a
                href={item.enlace}
                className="btn btn-evento"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir enlace de ${item.nombre}`}
              >
                {item.nombre}
              </a>
            </div>
          ))}
        </div>

        <div
          className="eventos-editions"
          role="region"
          aria-label="Aftermovies de ediciones anteriores"
        >
          {EDICIONES_VIDEO.map((edition) => (
            <article key={edition.id} className="eventos-edition-card">
              <a
                href={youtubeVideoUrl(edition.videoId)}
                target="_blank"
                rel="noopener noreferrer"
                className="eventos-edition-thumb"
                aria-label={`Ver aftermovie Ethereum México ${edition.year}, ${edition.locationLabel}`}
              >
                <img
                  className="eventos-edition-thumb-img"
                  src={youtubeThumbnailUrl(edition.videoId)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className="eventos-edition-thumb-shade"
                  aria-hidden="true"
                />
                <PlayIcon />
                <span className="eventos-edition-pill eventos-edition-pill--year">
                  {edition.year}
                </span>
                <span className="eventos-edition-pill eventos-edition-pill--location">
                  {edition.locationLabel}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eventos;
