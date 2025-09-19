import "./CalendarioRoadTo.css";

function CalendarioRoadTo() {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center text-center container-ethmex-event"
      id="road-to-ethmex"
    >
      <h2 className="text-event-title" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>CALENDARIO ROAD TO&nbsp;</span>
        <span style={{ color: "#D73535" }}>ETHEREUM MEXICO 2025</span>
      </h2>

      <div className="mx-auto hat-container mt-3 mb-4">
        <p className="text-event">
        Sé parte de esta gira de eventos para impulsar la conversación sobre blockchain y preparar a la comunidad rumbo a ETH México y Devconnect Buenos Aires.
        </p>
      </div>

      <a
        href="https://lu.ma/roadtoethmexico2025"
        className="btn btn-primary-event mb-5"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "20px" }}
      >
        EXPLORA EL CALENDARIO
      </a>

      {/* Responsive iframe container */}
      <div style={{ position: "relative", overflow: "hidden", width: "100%", maxWidth: "950px", height: "450px"}}>
        <iframe
          src="https://lu.ma/embed/calendar/cal-8VHmZwe16GeMtUb/events"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "1px solid #bfcbda88",
            borderRadius: "2px",
          }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          title="Calendario de ROAD TO ETH México"
        />
      </div>

      <div className="container-fluid align-items-center justify-content-center text-center mapa-ethmex mt-5" style={{maxWidth: "800px"}}>
      <img
        src={`${process.env.PUBLIC_URL}/images/BannerRoadTo.png`}
        className="img-fluid "
        alt="ruta global"
        style={{
          width: "100%",
          height: "100%"
        }}
        
      />
    </div>

    </div>
  );
}

export default CalendarioRoadTo;
