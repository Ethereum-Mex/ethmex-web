import "./ETHMX2026FormatoHibrido.css";

const FORMATO_CARDS = [
  {
    id: "global-online",
    headline: "Global Online Hackathon",
    meta: "May 4 – June 5",
    blocks: [
      {
        type: "p",
        text: "5 semanas abierto a builders de todo el mundo, enfocado en pagos digitales y blockchain",
      },
      {
        type: "labeledList",
        items: [
          "Workshops técnicos",
          "Mentoría global bilingüe",
          "Checkpoints semanales con mentores",
          "Proceso de demo submissions",
        ],
      },
    ],
  },
  {
    id: "builder-sessions",
    headline: "Private Builder Sessions",
    meta: "June 4 – 5 · Bitso Offices, CDMX",
    blocks: [
      {
        type: "p",
        text: "Sprint exclusivo para equipos del hackathon desde el código al producto",
      },
      {
        type: "ul",
        items: [
          "Deep technical mentoring",
          "Product refinement",
          "Compliance & UX feedback",
          "Demo Day preparation",
        ],
      },
    ],
  },
  {
    id: "main-conference",
    headline: "Ethereum México 2026 — Main Conference",
    meta: "June 12 · CDMX",
    blocks: [
      {
        type: "p",
        text: "El encuentro de actores referentes del ecosistema",
      },
      {
        type: "ul",
        items: [
          "Founders de protocolos",
          "Protocol & infrastructure teams",
          "Inversores y fondos activos en LATAM",
          "Ejecutivos fintech",
        ],
      },
    ],
  },
  {
    id: "showcase",
    headline: "Showcase en Stablecoin Conference ",
    meta: "June 15 - 16 · WTC, CDMX",
    blocks: [
      {
        type: "p",
        text: "Los mejores proyectos ante el evento de pagos digitales más relevante de la región",
      },
      {
        type: "ul",
        items: [
          "+20 fondos activos en LATAM",
          "Exchanges y stablecoin issuers",
          "Payment companies",
          "Reguladores",
        ],
      },
    ],
  },
];

function Block({ block }) {
  if (block.type === "p") {
    return (
      <p
        className={`ethmx26-formato-p mb-0 text-start ${block.className || ""}`.trim()}
      >
        {block.text}
      </p>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="ethmx26-formato-ul mb-0 ps-3 text-start">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "labeledList") {
    return (
      <div className="ethmx26-formato-labeled d-flex flex-column gap-1">
        {block.label ? (
          <p className="ethmx26-formato-label mb-2 text-start">{block.label}</p>
        ) : null}
        <ul className="ethmx26-formato-ul mb-0 ps-3 text-start">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

function ETHMX2026FormatoHibrido() {
  return (
    <section
      className="ethmx26-formato bg-white text-dark"
      id="formato-hibrido-ethmx2026"
      aria-labelledby="ethmx26-formato-heading"
    >
      <div className="ethmx26-formato-inner container-fluid container-ethmex-event px-3 px-md-4 py-4 mx-auto">
        <h2
          id="ethmx26-formato-heading"
          className="ethmx26-formato-hero-title text-center mb-2"
        >
          Agenda
        </h2>
        <p className="ethmx26-que-es-lead text-center mb-4">
          Cómo funciona Ethereum México 2026
        </p>

        <div className="row row-cols-1 row-cols-lg-2 g-3">
          {FORMATO_CARDS.map((card) => (
            <div key={card.id} className="col">
              <article
                className="ethmx26-formato-card h-100 d-flex flex-column overflow-hidden border border-dark rounded-3 shadow-sm bg-white"
              >
                <header className="ethmx26-formato-card-head d-flex flex-wrap align-items-center justify-content-between gap-2 text-white px-3 py-2 px-md-3 py-md-3">
                  <h3 className="ethmx26-formato-card-title mb-0 text-start">
                    {card.headline}
                  </h3>
                  {card.meta ? (
                    <span className="ethmx26-formato-card-meta text-end">
                      {card.meta}
                    </span>
                  ) : null}
                </header>
                <div className="ethmx26-formato-card-body flex-grow-1 bg-white px-3 py-3 px-md-4 py-md-3 d-flex flex-column gap-2">
                  {card.blocks.map((block, i) => (
                    <Block key={`${card.id}-${i}`} block={block} />
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ETHMX2026FormatoHibrido;
