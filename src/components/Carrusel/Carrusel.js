import './Carrusel.css';
import React from 'react';

function Carrusel() {


  return (
    <div id="carouselHeroEthMex" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselHeroEthMex" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ backgroundColor: '#3A3A3A' }}></button>
        <button type="button" data-bs-target="#carouselHeroEthMex" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundColor: '#3A3A3A' }}></button>
        <button type="button" data-bs-target="#carouselHeroEthMex" data-bs-slide-to="2" aria-label="Slide 3" style={{ backgroundColor: '#3A3A3A' }}></button>
      </div>
      <div className="carousel-inner ">
        {/* Slide 1 */}
        <div className="carousel-item hero-carousel-item active">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="bienvenida-texto text-center">
                <span>Te damos la bienvenida a </span> <br />
                <span style={{color: '#206A4B'}}>Ethereum </span>
                <span style={{color: '#D83535'}}>México </span>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/EthMXIcon_ColorFull.png`} className="d-block img-fluid " width="500" alt="..." />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item hero-carousel-item">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5  h-100">
            <div className="bienvenida-texto text-center">
              <span style={{color: '#206A4B'}}>Muy Pronto... </span>
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/MTY-1.avif`} className="d-block img-fluid h-40 rounded-4" width="600"  alt="..." />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item hero-carousel-item">
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 h-100">
            <div className="bienvenida-texto text-center">
                <span style={{color: '#206A4B'}}>Ethereum México 2025</span> <br />
                <span style={{color: '#D83535'}}>Monterrey</span> 
            </div>
            <a href='/ETHMX2025'>
              <img src={`${process.env.PUBLIC_URL}/images/ethmex25-flyer.png`} className="d-block img-fluid  h-40 rounded-4" width="600" alt="..." />
            </a>
            
          </div>
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
