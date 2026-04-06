import "./ETHMX2026PorQueMexico.css";

const STATS = [
  {
    id: "remesas",
    value: "$61B USD",
    description:
      "en remesas anuales",
  },
  {
    id: "inclusion",
    value: "60%",
    description: "de población sin acceso a servicios financieros",
  },
  {
    id: "stablecoins",
    value: "+400%",
    description:
      "en adopción de stablecoins en LATAM desde 2022",
  },
];

const COMBINA_ITEMS = [
  "Ley Fintech vigente",
  "Marco regulatorio activo",
  "Sandbox regulatorio activo",
  "Ecosistema fintech con casos de uso reales",
  "Talento técnico de clase mundial",
];

function ETHMX2026PorQueMexico() {
  return (
    <section
      className="ethmx26-por-que-mx bg-white text-dark"
      id="por-que-mexico-ethmx2026"
      aria-labelledby="ethmx26-por-que-heading"
    >
      <div className="ethmx26-por-que-inner container-fluid container-ethmex-event px-3 px-md-4 py-4 mx-auto">
        <header className="text-center mb-4 mb-md-5">
          <h2 id="ethmx26-por-que-heading" className="ethmx26-por-que-title">
            ¿Por qué México?
          </h2>
          <p className="ethmx26-por-que-subtitle">
            El momento es ahora
          </p>
        </header>

        <div className="ethmx26-por-que-stats row g-3 g-md-4 justify-content-center mb-5">
          {STATS.map((item) => (
            <div key={item.id} className="col-4 col-md-4">
              <div className="ethmx26-por-que-stat-card h-100 text-white text-center rounded-3 py-4 px-3 d-flex flex-column align-items-center justify-content-center">
                <p className="ethmx26-por-que-stat-value mb-2 mb-md-3">
                  {item.value}
                </p>
                <p className="ethmx26-por-que-stat-desc mb-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="row align-items-start g-4 ethmx26-por-que-combina-row">
          <div className="col-12 col-lg-3">
            <h3 className="ethmx26-por-que-combina-heading mb-0 text-lg-start text-center">
              México combina
            </h3>
          </div>
          <div className="col-12 col-lg-9">
            <ul className="row row-cols-2 row-cols-lg-3 row-cols-xl-5 g-3 list-unstyled mb-0 p-0">
              {COMBINA_ITEMS.map((text) => (
                <li key={text} className="col">
                  <div className="ethmx26-por-que-mini-card h-100 rounded-3 shadow-sm px-3 py-3 text-center d-flex align-items-center justify-content-center">
                    <span className="ethmx26-por-que-mini-text mb-0">
                      {text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ETHMX2026PorQueMexico;
