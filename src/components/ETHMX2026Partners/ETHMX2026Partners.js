import "./ETHMX2026Partners.css";
import { useTranslation } from "react-i18next";
import { sponsors } from "../../data/ethmx2026Partners.js";

const IMG = `${process.env.PUBLIC_URL}/images`;

function PartnerLogo({ partner }) {
  const image = (
    <img
      src={`${IMG}/${partner.image}`}
      alt={partner.name}
      className="ethmx26-partner-logo-img img-fluid mx-auto d-block"
      style={{ width: partner.width, maxWidth: "100%" }}
      loading="lazy"
      decoding="async"
    />
  );

  if (partner.link) {
    return (
      <a
        href={partner.link}
        className="ethmx26-partner-logo-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={partner.name}
      >
        {image}
      </a>
    );
  }

  return <span className="ethmx26-partner-logo-link">{image}</span>;
}

function ETHMX2026Partners() {
  const { t } = useTranslation("ethmx2026");

  return (
    <section
      className="ethmx26-partners-section bg-white text-dark"
      id="sponsors-ethmx2026"
      aria-labelledby="sponsors-ethmx2026-heading"
    >
      <div className="ethmx26-partners-inner ethmx26-section-inner container-fluid container-ethmex-event px-3 px-md-4 mx-auto">
        <header className="text-center mb-4 mb-md-5">
          <h2 id="sponsors-ethmx2026-heading" className="ethmx26-partners-title mb-0">
            {t("partners.sponsors")}
          </h2>
        </header>

        <div className="row justify-content-center align-items-center g-4">
          {sponsors.map((partner) => (
            <div
              key={partner.name}
              className="col-4 d-flex justify-content-center align-items-center"
            >
              <PartnerLogo partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ETHMX2026Partners;
