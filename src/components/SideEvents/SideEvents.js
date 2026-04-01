import "./SideEvents.css";
import "../NuestrosLogros/NuestrosLogros.css";
import "../Contactanos/Contactanos.css";
import React from "react";

const sideEventsSlides = [
  {
    img: "DeAI-Summit.jpg",
    alt: "Side events de Ethereum México",
    title: "Side Events",
    descripcion:
      "<p>Organizamos side events en el marco de grandes eventos sucediendo en México con el fin de apoyar el crecimiento del ecosistema, entre ellos: <b>DeAI Summit</b> y nuestra popular <b>CarnETHa Asada</b>.</p>",
    link: "https://x.com/ethereum_mexico/status/2005680236873056554",
  },
  {
    img: "openhub.png",
    alt: "Meetups de Ethereum México",
    title: "Meetups",
    descripcion:
      "<p>Nos aliamos con otras comunidades y proyectos para organizar o colaborar como partners en meetups organizados en distintas ciudades de México: Monterrey, CDMX, Puebla, Guadalajara.</p>",
    link: "https://x.com/ethereum_mexico/status/1951105563988820160?s=20",
  },
  {
    img: "builder-day.png",
    alt: "Builders Day — Ethereum México",
    title: "Builders Day",
    descripcion: `<p>Con el objetivo de conectar con personas que ya están construyendo y con quienes están dando sus primeros pasos en el ecosistema organizamos:</p>
    <ul>
    <li>☑️ Builders Day CDMX, en el marco de Stablecoin Conference de Bitso Business</li>
    <li>☑️ Builders Day Guadalajara</li>
    <li>☑️ Builders Day Monterrey junto a <a href="https://x.com/nerdconf_ar" target="_blank" rel="noopener noreferrer">Nerdconf</a></li>
    <li>☑️ Builders Day Texas junto a <a href="https://x.com/txblockchain" target="_blank" rel="noopener noreferrer">Texas Blockchain</a> </li>
    </ul>`,
    link: "https://x.com/ethereum_mexico/status/1962591422864855514?s=20",
  },
  {
    img: "ubd.jpeg",
    alt: "University Blockchain Days de Ethereum México",
    title: "University Blockchain Days",
    descripcion: `<p>Impulsamos encuentros en universidades para acercar el ecosistema Ethereum a estudiantes:</p>
    <ul>
    <li>🎓 Chihuahua en UTCH y como parte de <a href="https://x.com/ChihTechWeek" target="_blank" rel="noopener noreferrer">Chihuahua Tech Week</a> </li>
    <li>🎓 Puebla en UMAD Puebla</li>
    <li>🎓 University Tour en Monterrey – UANL, TecMilenio y Universidad del Norte</li>
    </ul>`,
    link: "https://x.com/ethereum_mexico/status/1973913488931037380",
  },
];

function SideEvents() {
  return (
    <div
      className="container-fluid container-ethmex align-items-center justify-content-center"
      id="side-events"
    >
      <h1 className="ethmex-primary-title text-center mb-5">Side Events</h1>

      <div className="container-ethmex-aux mx-auto">
        <div
          id="carouselSideEvents"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {sideEventsSlides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item logro-carousel-item ${
                  index === 0 ? "active" : ""
                }`}
              >
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-start gap-5">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${slide.img}`}
                    className="d-block img-fluid rounded-4 mx-auto"
                    width="450"
                    alt={slide.alt}
                  />
                  <div className="somos-texto">
                    <span className="ethmex-primary-subtitle">
                      {slide.title}
                    </span>
                    <br />
                    <span
                      className="ethmex-text side-events-descripcion"
                      dangerouslySetInnerHTML={{ __html: slide.descripcion }}
                    />
                    {slide.link ? (
                      <>
                        <br />
                        <a
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="btn btn-contacto mx-auto"
                          >
                            Conocer Más
                          </button>
                        </a>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev w-auto"
            type="button"
            data-bs-target="#carouselSideEvents"
            data-bs-slide="prev"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/arrow-prev.svg`}
              className="img-fluid carousel-control-prev-icono"
              alt="arrow-prev"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next w-auto"
            type="button"
            data-bs-target="#carouselSideEvents"
            data-bs-slide="next"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/arrow-next.svg`}
              className="img-fluid carousel-control-next-icono"
              alt="arrow-next"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideEvents;
