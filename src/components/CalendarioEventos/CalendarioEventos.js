import "./CalendarioEventos.css";

function CalendarioEventos() {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center text-center container-ethmex-event"
      id="venue"
    >
      <h2 className="text-event-title" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>CALENDARIO OFICIAL&nbsp;</span>
        <span style={{ color: "#D73535" }}>DE EVENTOS</span>
      </h2>

      <div className="mx-auto hat-container mt-3 mb-4">
        <p className="text-event">
          Aquí encontrarás el registro al main event, hackathon, side events, meetups y
          fiestas que se llevarán a cabo en la tercera edición de{" "}
          <b>#ETHMéxico</b>.
        </p>
      </div>

      <a
        href="https://lu.ma/ethmexico2025"
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
          src="https://lu.ma/embed/calendar/cal-sq6HoI6rsxKd71N/events"
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
          title="Calendario de Eventos ETH México"
        />
      </div>

      <div className="container-fluid align-items-center justify-content-center text-center mapa-ethmex mt-4" style={{maxWidth: "1100px"}}>
      <img
        src={`${process.env.PUBLIC_URL}/images/Mapa-ethmex.png`}
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

export default CalendarioEventos;
