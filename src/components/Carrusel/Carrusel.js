import "./Carrusel.css";
import "../ETHMX2026/ETHMX2026.css";
import { Link } from "react-router-dom";
import { ETHMX2026HeroContent } from "../ETHMX2026/ETHMX2026HeroContent";

function Carrusel() {
  return (
    <div
      id="carouselHeroEthMex"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselHeroEthMex"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Ethereum México 2026"
          style={{ backgroundColor: "#3A3A3A" }}
        />
        <button
          type="button"
          data-bs-target="#carouselHeroEthMex"
          data-bs-slide-to="1"
          aria-label="Bienvenida Ethereum México"
          style={{ backgroundColor: "#3A3A3A" }}
        />
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item hero-carousel-item active ethmx26-carousel-slide">
          <div className="ethmx26-carousel-slide-inner position-relative">
            <div className="ethmx26-carousel-slide-fill">
              <div className="ETHMX2026-hero w-100 ethmx26-carousel-hero">
                <ETHMX2026HeroContent />
              </div>
            </div>
            <Link to="/ETHMX2026" className="stretched-link" />
          </div>
        </div>

        <div className="carousel-item hero-carousel-item">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="bienvenida-texto text-center">
              <span>Te damos la bienvenida a </span>
              <br />
              <span className="hero-carousel-welcome-brand hero-carousel-welcome-brand--green">
                Ethereum
              </span>
              <span className="hero-carousel-welcome-brand hero-carousel-welcome-brand--red">
                {" "}
                México
              </span>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/EthMXIcon_ColorFull.png`}
              className="d-block img-fluid hero-carousel-welcome-icon"
              alt="Ethereum México"
            />
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev w-auto"
        type="button"
        data-bs-target="#carouselHeroEthMex"
        data-bs-slide="prev"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/arrow-prev.svg`}
          className="img-fluid carousel-control-prev-icono"
          alt=""
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next w-auto"
        type="button"
        data-bs-target="#carouselHeroEthMex"
        data-bs-slide="next"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/arrow-next.svg`}
          className="img-fluid carousel-control-next-icono"
          alt=""
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;
