import './Carrusel.css';
import '../ETHMX2025/ETHMX2025.css';
import React from 'react';

function Carrusel() {


  return (
    <div id="carouselHeroEthMex" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselHeroEthMex" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ backgroundColor: '#3A3A3A' }}></button>
        <button type="button" data-bs-target="#carouselHeroEthMex" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundColor: '#3A3A3A' }}></button>
      </div>
      <div className="carousel-inner ">
        {/* Slide 1 */}
        <div className="carousel-item hero-carousel-item active" >
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="bienvenida-texto text-center">
                <span>Te damos la bienvenida a </span> <br />
                <span style={{color: '#206A4B'}}>Ethereum </span>
                <span style={{color: '#D83535'}}>México </span>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/EthMXIcon_ColorFull.png`} className="d-block img-fluid " width="500" alt="..." />
          </div>
        </div>


        {/* Slide  - ETHMX2025 Hero */}
        <div className="carousel-item hero-carousel-item hero-ethmex-evento">
          <a href="/#/ETHMX2025" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
            <div className="ETHMX2025-container d-flex justify-content-center align-items-center">
              <div className="ETHMX2025-div-white">
                <img src={`${process.env.PUBLIC_URL}/images/EthMxMty_VerdeRojo.png`} className="d-block img-fluid mx-auto" width="700" alt="ETHMX2025 Hero" />
                <br/>
                <p>Invitan</p>
                <div className="logos-container m-2">
                  <img src={`${process.env.PUBLIC_URL}/images/EthMX_ColorFull.png`} className="d-block img-fluid " width="200" alt="EthMX Logo" />
                  <img src={`${process.env.PUBLIC_URL}/images/ethereum-monterrey-logo.png`} className="d-block img-fluid " width="200" alt="Ethereum Monterrey Logo" />
                </div>
                <p>31 octubre, 1 y 2 noviembre 2025 </p>
                <p> 📍 Pop-Up Innovation Hub en el Centro Histórico de Monterrey</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <button className="carousel-control-prev w-auto" type="button" data-bs-target="#carouselHeroEthMex" data-bs-slide="prev">
          <img src={`${process.env.PUBLIC_URL}/images/arrow-prev.svg`} className="img-fluid carousel-control-prev-icono" alt="arrow-prev" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next w-auto" type="button" data-bs-target="#carouselHeroEthMex" data-bs-slide="next">
        <img src={`${process.env.PUBLIC_URL}/images/arrow-next.svg`}  className="img-fluid carousel-control-next-icono"  alt="arrow-next"  aria-hidden="true"/>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carrusel;
