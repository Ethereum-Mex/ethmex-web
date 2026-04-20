import "./ETHMX2026QuieroSerParte.css";
import { useTranslation } from "react-i18next";

function linkTargetProps(href) {
  if (!href || href.startsWith("mailto:")) {
    return { target: undefined, rel: undefined };
  }
  return { target: "_blank", rel: "noopener noreferrer" };
}

function ETHMX2026QuieroSerParte() {
  const { t } = useTranslation("ethmx2026");
  const roles = t("quieroSerParte.roles", { returnObjects: true });

  return (
    <section
      className="ethmx26-quiero-ser-parte bg-white text-dark"
      id="quiero-ser-parte-ethmx2026"
      aria-labelledby="ethmx26-quiero-ser-parte-heading"
    >
      <div className="ethmx26-quiero-ser-parte-inner container-fluid container-ethmex-event px-3 px-md-4 py-4 py-md-5 mx-auto">
        <header className="text-center mb-4 mb-md-5">
          <h2
            id="ethmx26-quiero-ser-parte-heading"
            className="ethmx26-quiero-ser-parte-title"
          >
            {t("quieroSerParte.title")}
          </h2>
          <p className="ethmx26-quiero-ser-parte-subtitle mb-0">
            {t("quieroSerParte.subtitle")}
          </p>
        </header>

        <ul className="ethmx26-quiero-ser-parte-list row g-3 list-unstyled mb-0">
          {roles.map((item) => (
            <li key={item.id} className="col-12 col-md-6 d-flex">
              <div className="ethmx26-quiero-ser-parte-card shadow-sm rounded-3 px-3 py-3 px-md-4 py-md-4 w-100">
                <div className="ethmx26-quiero-ser-parte-copy min-w-0">
                  <h3 className="ethmx26-quiero-ser-parte-role d-flex align-items-center gap-2 flex-wrap mb-2">
                    <span>{item.title}</span>
                  </h3>
                  <p className="ethmx26-quiero-ser-parte-desc mb-0">
                    {item.description}
                  </p>
                </div>
                <div className="ethmx26-quiero-ser-parte-cta-wrap min-w-0">
                  <div className="ethmx26-quiero-ser-parte-cta-group">
                    <a
                      href={item.href || "#"}
                      className="ethmx26-quiero-ser-parte-cta ethmx26-quiero-ser-parte-cta--sized d-inline-flex align-items-center justify-content-center text-center text-decoration-none"
                      {...linkTargetProps(item.href)}
                      aria-disabled={!item.href}
                      onClick={!item.href ? (e) => e.preventDefault() : undefined}
                    >
                      {item.ctaLabel}
                    </a>
                    {item.secondaryCta ? (
                      <a
                        href={item.secondaryCta.href}
                        className="ethmx26-quiero-ser-parte-cta ethmx26-quiero-ser-parte-cta--secondary ethmx26-quiero-ser-parte-cta--sized d-inline-flex align-items-center justify-content-center text-center text-decoration-none"
                        {...linkTargetProps(item.secondaryCta.href)}
                      >
                        {item.secondaryCta.label}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ETHMX2026QuieroSerParte;
