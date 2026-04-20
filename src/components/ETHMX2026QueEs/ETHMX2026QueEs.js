import "./ETHMX2026QueEs.css";
import { useTranslation } from "react-i18next";

function ETHMX2026QueEs() {
  const { t } = useTranslation("ethmx2026");
  const marqueeText = Array(8).fill(t("marqueeChunk")).join("");
  const cards = t("queEs.cards", { returnObjects: true });

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
          {t("queEs.title")}
        </h2>

        <div className="ethmx26-que-es-copy mx-auto text-center">
          <p className="ethmx26-que-es-lead mb-3">{t("queEs.lead1")}</p>
          <p className="ethmx26-que-es-lead mb-0">{t("queEs.lead2")}</p>
        </div>

        <div className="row g-3 justify-content-center mt-4">
          {cards.map((card) => (
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
