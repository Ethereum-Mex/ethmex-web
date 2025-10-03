import "./Razones.css";

function Razones() {
  return (
    <div className="container-fluid container-ethmex-event text-center mb-5"  id="razones-asistir">
      <div className="mb-4">
        <span className="text-event-title" style={{ color: "#358541", fontSize: "35px" }}>
          RAZONES&nbsp;
        </span>
        <span className="text-event-title" style={{ color: "#D73535", fontSize: "35px" }}>
          PARA ASISTIR
        </span>
      </div>

      <div className="d-flex justify-content-center mx-auto carousel-razones">
        <div
          id="carouselRazones"
          className="carousel slide"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active razon-item">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start gap-lg-3">
                <div className="col-12 col-lg-4 mb-3 mb-lg-0" >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/rectangle-4.png`}
                    className="img-fluid"
                    alt="Aprendizaje con líderes del ecosistema"
                  />
                </div>
                <br/>
                <div className="col-12 col-lg-7" >
                  <span className="text-event-green">Aprende con líderes del ecosistema</span>
                  <br /><br />
                  <span className="text-event">
                    Explora ideas revolucionarias junto a builders y expertos en Blockchain e IA que están redefiniendo la web.
                    Cada charla y taller está diseñado para brindarte herramientas prácticas en temas como seguridad, desarrollo Web3 y diseño descentralizado.
                  </span>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item razon-item">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start gap-lg-3">
                <div className="col-12 col-lg-4 mb-3 mb-lg-0" >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Rectangle-7.png`}
                    className="img-fluid"
                    alt="Aprendizaje con líderes del ecosistema"
                  />
                </div>
                <br/>
                <div className="col-12 col-lg-7" >
                  <span className="text-event-green">Construye con propósito</span>
                  <br /><br />
                  <span className="text-event">
                    Este es tu campo de juego para testear ideas, colaborar con otros hackers y lanzar prototipos funcionales. Contamos con recursos técnicos, soporte y el ambiente ideal para que lo intentes TODO.
                  </span>
                </div>
              </div>
            </div>
            

            {/* Slide 3 */}
            <div className="carousel-item razon-item">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start gap-lg-3">
                  <div className="col-12 col-lg-4 mb-3 mb-lg-0" >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Rectangle-9.png`}
                      className="img-fluid"
                      alt="Aprendizaje con líderes del ecosistema"
                    />
                  </div>
                  <br/>
                  <div className="col-12 col-lg-7" >
                    <span className="text-event-green">Conecta con tu próxima gran oportunidad</span>
                    <br /><br />
                    <span className="text-event">
                      Desde estudiantes hasta empresas e inversores: aquí están quienes están cambiando el juego en Web3. Monterrey es uno de los principales hubs de innovación en LATAM, y ETH México es tu entrada a esa red. Saldrás no solo con nuevos aprendizajes, sino con contactos clave que podrían transformar tu futuro profesional.
                    </span>
                  </div>
                </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item razon-item">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start gap-lg-3">
                  <div className="col-12 col-lg-4 mb-3 mb-lg-0" >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Rectangle-11.png`}
                      className="img-fluid"
                      alt="Aprendizaje con líderes del ecosistema"
                    />
                  </div>
                  <br/>
                  <div className="col-12 col-lg-7" >
                    <span className="text-event-green">Evento blockchain en México</span>
                    <br /><br />
                    <span className="text-event">
                      ETH México es más que un evento; es una experiencia inmersiva en el mundo de Ethereum. Este día se ha consolidado como una cita imperdible para quienes desean estar al día y construir con las últimas tendencias, herramientas y prácticas en el ecosistema Ethereum.
                    </span>
                  </div>
                </div>
            </div>
          </div>

          {/* Controles */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselRazones"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselRazones"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Razones;
