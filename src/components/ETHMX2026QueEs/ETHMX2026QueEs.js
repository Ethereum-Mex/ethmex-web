import "./ETHMX2026QueEs.css";

const MARQUEE_CHUNK = "BUILD TODAY • PLAY GLOBAL • ";

const featureCards = [
  {
    id: "hackathon",
    iconFile: "world-icon.png",
    text: "Hackathon global online",
  },
  {
    id: "builder-sessions",
    iconFile: "code-icon.png",
    text: "Builder Sessions",
  },
  {
    id: "conference",
    iconFile: "computer-icon.png",
    text: "Main Conference + Demo Day",
  },
  {
    id: "showcase",
    iconFile: "showcase-icon.png",
    text: "Showcase ante VCs",
  },
];

function ETHMX2026QueEs() {
  const marqueeText = Array(8).fill(MARQUEE_CHUNK).join("");

  return (
    <section
      className="ethmx26-que-es bg-white text-dark"
      id="que-es-ethmx2026"
      aria-labelledby="ethmx26-que-es-heading"
    >
      <div className="ethmx26-marquee overflow-hidden" role="presentation">
        <div className="ethmx26-marquee-track d-flex">
          <span className="ethmx26-marquee-segment text-white text-uppercase py-2">
            {marqueeText}
          </span>
          <span
            className="ethmx26-marquee-segment text-white text-uppercase py-2"
            aria-hidden="true"
          >
            {marqueeText}
          </span>
        </div>
      </div>

      <div className="ethmx26-que-es-inner container-fluid container-ethmex-event px-3 px-md-4 py-4 mx-auto">
        <h2
          id="ethmx26-que-es-heading"
          className="ethmx26-que-es-title text-center mb-4"
        >
          ¿Qué es Ethereum México 2026?
        </h2>

        <div className="ethmx26-que-es-copy mx-auto text-center">
          <p className="ethmx26-que-es-lead mb-3">
            Es un hackathon híbrido internacional enfocado en AI, Blockchain y
            pagos reales, diseñado para conectar builders con protocolos,
            empresas fintech, fondos y reguladores en un entorno de alto nivel.
          </p>
          <p className="ethmx26-que-es-lead mb-0">
            Este año evolucionamos a un formato híbrido:
          </p>
        </div>

        <div className="row g-3 justify-content-center mt-4">
          {featureCards.map((card) => (
            <div key={card.id} className="col-6 col-xl-3">
              <article className="ethmx26-que-es-card h-100 d-flex flex-column align-items-center text-center rounded-3 shadow-sm px-3 py-4">
                <div className="ethmx26-que-es-card-icon d-flex align-items-center justify-content-center mb-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${card.iconFile}`}
                    alt=""
                    className="ethmx26-que-es-svg"
                    decoding="async"
                  />
                </div>
                <p className="ethmx26-que-es-card-text mb-0">{card.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ETHMX2026QueEs;
