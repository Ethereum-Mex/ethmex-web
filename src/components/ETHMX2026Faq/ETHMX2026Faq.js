import "./ETHMX2026Faq.css";
import { useTranslation } from "react-i18next";

const ACCORDION_ID = "accordionEthmx26Faq";

function ETHMX2026Faq() {
  const { t } = useTranslation("ethmx2026");
  const items = t("faq.items", { returnObjects: true });

  return (
    <section
      className="ethmx26-faq bg-white text-dark"
      id="faq-ethmx2026"
      aria-labelledby="ethmx26-faq-heading"
    >
      <div className="ethmx26-faq-inner ethmx26-section-inner container-fluid container-ethmex-event px-3 px-md-4 mx-auto">
        <header className="text-center mb-4 mb-md-5">
          <h2 id="ethmx26-faq-heading" className="ethmx26-faq-title mb-0">
            {t("faq.title")}
          </h2>
        </header>

        <div
          className="accordion ethmx26-faq-accordion mx-auto"
          id={ACCORDION_ID}
        >
          {items.map((item) => {
            const panelId = `ethmx26-faq-${item.id}`;
            return (
              <div className="accordion-item ethmx26-faq-item" key={item.id}>
                <h3 className="accordion-header">
                  <button
                    className="accordion-button ethmx26-faq-trigger collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${panelId}`}
                    aria-expanded="false"
                    aria-controls={panelId}
                  >
                    {item.question}
                  </button>
                </h3>
                <div
                  id={panelId}
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body ethmx26-faq-panel">
                    <p className="ethmx26-faq-answer mb-0">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ETHMX2026Faq;
