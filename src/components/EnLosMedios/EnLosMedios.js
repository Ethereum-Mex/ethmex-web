import "./EnLosMedios.css";

const ARTICLES = [
  {
    id: "1",
    title: "Ethereum México 2025 conectó a gobierno, fintech y academia rumbo a la próxima generación de aplicaciones",
    href: "https://x.com/ethereum_mexico/status/1985761630467023042?s=20",
    outlet: "Nov 3, 2025",
    logo: "El_Economista_mx.png",
    logoAlt: "ethereum mexico en el economista",
    logoWidth: "14rem",
  },
  {
    id: "2",
    title: "Transformación digital: impulso en la adopción de nuevas tecnologías",
    href: "https://forbescentroamerica.com/2025/11/03/transformacion-digital-impulso-en-la-adopcion-de-nuevas-tecnologias",
    outlet: "Nov 2025",
    logo: "Forbes_logo.svg",
    logoAlt: "",
    logoWidth: "7rem",
  },
  {
    id: "3",
    title: "La tecnología como herramienta clave para la autonomía de Latinoamérica hacia 2026",
    href: "https://x.com/ethereum_mexico/status/2018400066260664769?s=20",
    outlet: "Jan 30, 2026",
    logo: "Forbes_logo.svg",
    logoAlt: "",
    logoWidth: "7rem",
  },
  {
    id: "4",
    title: "Ethereum para todos: Finanzas abiertas, crédito global y nuevas oportunidades para América Latina",
    href: "https://x.com/ethereum_mexico/status/2019541125296447565?s=20",
    outlet: "Feb 5, 2026",
    logo: "mercado_logo.avif",
    logoAlt: "",
    logoWidth: "9rem",
  },
  {
    id: "5",
    title: "En México la adopción de Ethereum “no se empuja, se construye”",
    href: "https://x.com/ethereum_mexico/status/2024180876532204003?s=20",
    outlet: "Feb 17, 2026",
    logo: "Logo-Criptonoticias-3.webp",
    logoAlt: "",  
    logoWidth: "15rem",
  },
  {
    id: "6",
    title: "Soberanía digital, la llave que las mujeres mexicanas aún no tienen en la mano",
    href: "https://mujeres.expansion.mx/opinion/2026/03/06/soberania-digital-la-llave-que-las-mujeres-mexicanas-aun-no-tienen-en-la-mano",
    outlet: "March 6, 2026",
    logo: "logo-mujeres.svg",
    logoAlt: "",
    logoWidth: "15rem",
  },

];

function EnLosMedios() {
  return (
    <div
      className="container-fluid container-ethmex align-items-center justify-content-center en-los-medios"
      id="en-los-medios"
      aria-labelledby="en-los-medios-heading"
    >
      <h1
        id="en-los-medios-heading"
        className="ethmex-primary-title text-center mb-5"
      >
        Ethereum México en los Medios
      </h1>

      <div className="container-ethmex-aux mx-auto">
        <ul className="row g-4 list-unstyled mb-0 justify-content-center">
          {ARTICLES.map((item) => (
            <li key={item.id} className="col-12 col-md-6 col-xl-4">
              <a
                href={item.href}
                className="en-los-medios-card d-flex flex-column h-100 text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.logo ? (
                  <span
                    className={
                      item.logoWidth
                        ? "en-los-medios-logo-wrap en-los-medios-logo-wrap--custom"
                        : "en-los-medios-logo-wrap"
                    }
                    style={
                      item.logoWidth
                        ? { "--en-los-medios-logo-w": item.logoWidth }
                        : undefined
                    }
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${item.logo}`}
                      alt={item.logoAlt || item.outlet}
                      className="en-los-medios-logo"
                    />
                  </span>
                ) : null}
                <span className="en-los-medios-outlet">{item.outlet}</span>
                <span className="en-los-medios-art-title flex-grow-1">
                  {item.title}
                </span>
                <span className="en-los-medios-cta">Leer artículo →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EnLosMedios;
