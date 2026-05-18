import "./ETHMX2026FormatoHibrido.css";
import { useTranslation } from "react-i18next";

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
  return null;
}

function ETHMX2026FormatoHibrido() {
  const { t } = useTranslation("ethmx2026");
  const cards = t("agendaCards", { returnObjects: true });
  const newTabHint = t("agenda.cardOpensNewTabHint");

  return (
    <section
      className="ethmx26-formato bg-white text-dark"
      id="formato-hibrido-ethmx2026"
      aria-labelledby="ethmx26-formato-heading"
    >
      <div className="ethmx26-formato-inner ethmx26-section-inner container-fluid container-ethmex-event px-3 px-md-4 mx-auto">
        <h2
          id="ethmx26-formato-heading"
          className="ethmx26-formato-hero-title text-center mb-2"
        >
          {t("agenda.title")}
        </h2>
        <p className="ethmx26-que-es-lead text-center mb-4">{t("agenda.subtitle")}</p>

        <div className="row row-cols-1 row-cols-lg-2 g-3">
          {cards.map((card) => {
            const article = (
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
            );

            return (
              <div key={card.id} className="col">
                {card.href ? (
                  <a
                    href={card.href}
                    className="ethmx26-formato-card-link d-block h-100 text-decoration-none text-body"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${card.headline}. ${newTabHint}`}
                  >
                    {article}
                  </a>
                ) : (
                  article
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ETHMX2026FormatoHibrido;
