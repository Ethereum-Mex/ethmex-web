import "./EdicionesAnteriores.css";

function EdicionesAnteriores() {
  return (
    <div className="container-fluid align-items-center justify-content-center text-center container-ethmex-event" id="ediciones-anteriores" >
      {/* Título principal */}
      <div className="mb-4">
        <span className="text-event-title" style={{ color: "#358541", fontSize: "35px" }}>
          REVIVE NUESTRAS&nbsp;
        </span>
        <span className="text-event-title" style={{ color: "#D73535", fontSize: "35px" }}>
          EDICIONES ANTERIORES
        </span>
      </div>

      <div className="d-flex justify-content-center mx-auto carousel-ediciones align-items-center">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active text-center">
              {/* Título fuera del div con borde */}
              <div className="mb-3">
                <h4 className="text-event mb-1">ETH México 2024</h4>
                <p className="text-event">Mérida, Yucatán</p>
              </div>

              {/* Solo el video tiene borde y padding */}
              <div className="video-box">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/xVa7wcIWrN4?si=AcuGDwnRzkVtIICN"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item text-center">
              <div className="mb-3">
                <h4 className="text-event mb-1">ETH México 2023</h4>
                <p className="text-event">Ciudad de México</p>
              </div>

              <div className="video-box">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/4kBLHlW6T00?si=lPzRrZeRs7EI8Bf9"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Controles */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EdicionesAnteriores;
