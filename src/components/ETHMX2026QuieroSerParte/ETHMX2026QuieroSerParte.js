import "./ETHMX2026QuieroSerParte.css";

function linkTargetProps(href) {
  if (!href || href.startsWith("mailto:")) {
    return { target: undefined, rel: undefined };
  }
  return { target: "_blank", rel: "noopener noreferrer" };
}

const ROLES = [
  {
    id: "builder",
    title: "Builder",
    description:
      "Construye durante 5 semanas. Workshops, mentores y recursos para llevar tu proyecto al siguiente nivel",
    ctaLabel: "Apply Now",
    href: "https://tally.so/r/PdALz1",
  },
  {
    id: "sponsor",
    title: "Sponsor",
    description:
      "Invierte en el futuro de AI, Pagos y Blockchain en LATAM",
    ctaLabel: "Download Deck",
    href:
      "https://docs.google.com/presentation/d/1LcIhAQdpLkczcBzh4-ZCIbq3dRjo8qeD/edit?usp=sharing&ouid=114310261720515721669&rtpof=true&sd=true",
    secondaryCta: {
      label: "Contact Us",
      href: "https://t.me/ethereum_mexico",
    },
  },
  {
    id: "mentor",
    title: "Mentor",
    description:
      "Comparte lo que sabes. Acompaña a la próxima generación de builders",
    ctaLabel: "Apply Soon",
    href:
      "",
  },
  {
    id: "media",
    title: "Partners",
    description:
      "Si tienes comunidad en tech, founders, IA o blockchain, hay algo que construir juntos",
    ctaLabel: "Contact Us",
    href: "https://t.me/ethereum_mexico",
  },

];

function ETHMX2026QuieroSerParte() {
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
            Quiero ser parte
          </h2>
          <p className="ethmx26-quiero-ser-parte-subtitle mb-0">
            Encuentra tu rol en Ethereum México 2026
          </p>
        </header>

        <ul className="ethmx26-quiero-ser-parte-list row g-3 list-unstyled mb-0">
          {ROLES.map((item) => (
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
                      href={item.href}
                      className="ethmx26-quiero-ser-parte-cta ethmx26-quiero-ser-parte-cta--sized d-inline-flex align-items-center justify-content-center text-center text-decoration-none"
                      {...linkTargetProps(item.href)}
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
