import './NuestrosLogros.css';
import './../Contactanos/Contactanos.css';
import React from 'react';

const logros = [
  {
    img: 'EM-merida1.jpeg',
    alt: 'Ethereum México 2024 en Mérida',
    titulo: 'Ethereum México 2024 en Mérida',
    descripcion: 'El evento contó con 2 escenarios, 40 ponencias, 5 paneles y 7 talleres, reuniendo a más de 700 asistentes y alcanzando 3.1k vistas en streaming.  ',
    link: 'https://x.com/ethereum_mexico/status/1842230261200605297'
  },
  {
    img: 'camino-jaguar.jpeg',
    alt: 'Camino del Jaguar',
    titulo: 'Camino del Jaguar 2024',
    descripcion: 'Con más de 300 asistentes en 15 eventos realizados en 13 ciudades diferentes, impulsamos la conversación sobre temas de blockchain a lo largo y ancho del país.',
    link: 'https://x.com/ethereum_mexico/status/1820575070114484287'
  },
  {
    img: 'pgf.jpeg',
    alt: 'Ronda Retroactiva de Bienes Públicos',
    titulo: 'Ronda Retroactiva de Bienes Públicos',
    descripcion: 'Primera ronda de financiación de bienes públicos retroactivos con un fondo de $10,000 USDC impactando a más de 20 comunidades y proyectos mexicanos.', 
    link: 'https://x.com/ethereum_mexico/status/1775948155894317185'
  },
  {
    img: 'dvt.jpeg',
    alt: 'DVT de Ethereum México',
    titulo: 'Primer DVT de Ethereum México',
    descripcion: 'Esta iniciativa comenzó operando en Sonora, Sinaloa, Puebla y Yucatán, contribuyendo a la evolución de la infraestructura descentralizada en México.',
    link: 'https://x.com/ethereum_mexico/status/1757833889643475105'
  },
  {
    img: 'workshop-web3.jpg',
    alt: 'Talleres Virtuales',
    titulo: 'Talleres Virtuales',
    descripcion: 'A la fecha, hemos organizamos más de 30 talleres sobre Web3 y Ethereum, algunos ya disponibles en nuestro canal de YouTube. ¡Y lo seguiremos haciendo!',
    link: 'https://www.youtube.com/@ethereummexico/streams'
  },
  {
    img: 'becas-EM1.jpeg',
    alt: 'Becas',
    titulo: 'Becas',
    descripcion: 'Más de 30 personas talentosas becadas para asistir a diversas conferencias Web3, entre ellas la más reciente Devcon VII en Bangkok, Tailandia.',
    link: 'https://x.com/ethereum_mexico/status/1855997382401610185'
  },
  {
    img: 'ethmex2023.jpg',
    alt: 'Ethereum México 2023 en CDMX',
    titulo: 'Ethereum México 2023 en CDMX',
    descripcion: 'Celebramos reuniendo a 32 comunidades, más de 2,000 espectadores vía streaming, 6 Media Partners y 15 community showcases en vivo.',
    link: 'https://x.com/ethereum_mexico/status/1725310417768009900'
  },
  {
    img: 'camino-optimista.jpeg',
    alt: 'Camino Optimista',
    titulo: 'Camino Optimista 2023',
    descripcion: 'Un recorrido por 11 ciudades de México, difundiendo el conocimiento sobre Optimism y conectando con diversas comunidades en el marco de Ethereum México 2023. ',
    link: 'https://x.com/ethereum_mexico/status/1696684268020273452'
  },
  {
    img: 'sombrero-vitalik1.jpeg',
    alt: 'Sombrero Vitalik',
    titulo: 'Colaboración en ETH GLOBAL 2022',
    descripcion: 'Entregamos el Sombrero Mexicano a Vitalik, Aya y Kartik en EthMexico 2022, organizado por EthGlobal. ¡Fue todo un honor!',
    link: 'https://x.com/ethereum_mexico/status/1561469182117646337'
  }
  
  
];

function NuestrosLogros() {
  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center">
      <h1 className="ethmex-primary-title text-center mb-5">Nuestros Logros</h1>

      <div className="container-ethmex-aux mx-auto">
        <div id="carouselHeroEthMex2" className="carousel slide h-100" data-bs-ride="carousel">
          
          <div className="carousel-inner h-100">
            {logros.map((logro, index) => (
              <div key={index} className={`carousel-item logro-carousel-item  ${index === 0 ? 'active' : ''}`}>
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-top gap-5">
                  <img src={`${process.env.PUBLIC_URL}/images/${logro.img}`} className="d-block img-fluid rounded-4 mx-auto" width="500" alt={logro.alt} />
                  <div className="somos-texto">
                    <span className="ethmex-primary-subtitle">{logro.titulo}</span>
                    <br />
                    <span className="ethmex-text" dangerouslySetInnerHTML={{ __html: logro.descripcion.replace(/\n/g, '<br />') }}/>

                    <br />
                    <a href={logro.link} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-contacto mt-4 mx-auto">Conocer Más</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev w-auto" type="button" data-bs-target="#carouselHeroEthMex2" data-bs-slide="prev">
            <img src={`${process.env.PUBLIC_URL}/images/arrow-prev.svg`} className="img-fluid carousel-control-prev-icono" alt="arrow-prev" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next w-auto" type="button" data-bs-target="#carouselHeroEthMex2" data-bs-slide="next">
            <img src={`${process.env.PUBLIC_URL}/images/arrow-next.svg`} className="img-fluid carousel-control-next-icono" alt="arrow-next" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NuestrosLogros;
