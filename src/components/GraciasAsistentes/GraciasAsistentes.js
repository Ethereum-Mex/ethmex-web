import "./GraciasAsistentes.css";
import "../Esperar/Esperar.css";

const photoLinks = [
  {
    name: "Galería de Fotos",
    url: "https://drive.google.com/drive/folders/153Ju7gI2axU1xGzlyMnj7tq5sNexekrz?usp=sharing", // Replace with actual photo gallery URL
    description: "Ver todas las fotos del evento"
  },

];

function GraciasAsistentes() {
  return (
    <div className="container-fluid container-ethmex-event text-center gracias-asistentes-container" id="gracias-asistentes">
      <div className="mx-auto hat-container mb-4">
        
      </div>
      
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>¡GRACIAS POR HABER SIDO PARTE DE ETHEREUM MEXICO 2025!</span>
      </h2>
      <img
          src={`${process.env.PUBLIC_URL}/images/white-hat.png`}
          className="d-block img-fluid mx-auto"
          width="550"
          alt="White Hat Hackathon"
        />

      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 gap-lg-5 esperar-items p-3 mb-5 mt-4">
          <div className="esperar-item d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-event-title mb-3" style={{ fontSize: "24px", color: "#358541" }}>
              MAIN EVENT
            </h3>
            <div className="d-flex flex-column gap-2 align-items-start">
              <span className="text-event">👥 +600 asistentes</span>
              <span className="text-event">🎤 +50 speakers</span>
              <span className="text-event">📢 +20 keynotes, paneles y charlas</span>
              <span className="text-event">🎓 6 University Partners</span>
              <span className="text-event">📺 8 Media Partners</span>
              <span className="text-event">🤝 8 Strategic Partners</span>
              <span className="text-event">🌐 28 Community Partners</span>
            </div>
          </div>

          <div className="esperar-item d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-event-title mb-3" style={{ fontSize: "24px", color: "#358541" }}>
              HACKATHON
            </h3>
            <div className="d-flex flex-column gap-2 align-items-start">
              <span className="text-event">🕒 36 horas de construcción</span>
              <span className="text-event">🏁 9 tracks</span>
              <span className="text-event">💰 +$15,000 USD en premios</span>
              <span className="text-event">👩‍💻 +130 hackers</span>
              <span className="text-event">💡 38 proyectos en Dorahacks</span>
              <span className="text-event">📚 9 workshops</span>
              <span className="text-event">🤝 17 mentores</span>
            </div>
          </div>
        </div>

        <p className="text-event mb-5" style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto 40px" }}>
          Fue increíble compartir este momento con las y los Ethereans que formaron parte de este evento. 
          Revive los mejores momentos a través de nuestras galerías de fotos.
        </p>

        <div className="d-flex justify-content-center align-items-center">
          {photoLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary-event"
              style={{ fontSize: '20px' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GraciasAsistentes;

