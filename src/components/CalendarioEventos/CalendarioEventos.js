import "./CalendarioEventos.css";

function CalendarioEventos() {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center text-center container-ethmex-event"
      id="calendario"
    >
      <h2 className="text-event-title" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>CALENDARIO OFICIAL&nbsp;</span>
      </h2>

      <div className="mx-auto hat-container mt-3 mb-4">
        <p className="text-event">
          Aquí encontrarás el registro al main event, hackathon y side events que se llevarán a cabo en la tercera edición de{" "}
          <b style={{ color: "#D73535" }}>#ETHMéxico</b>. <br/>
          <i>Horarios aún por definir</i>
        </p>
      </div>

      {/* 4 Days Event Cards - Single Row Layout */}
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-stretch gap- gap-lg-4 esperar-items p-3 mt-2 mb-5" style={{ maxWidth: "1400px", width: "100%" }}>
        <div className="day-card d-flex justify-content-center align-items-center">
          <span className="text-event">
            <strong className="text-event-green">DÍA 1</strong><br/>
            <strong > Jueves 30 de Octubre</strong><br/><br/>
            🍽️ VIP Dinner <br/>
            (Previa Invitación)  <br/>
            8pm <br/><br/>
           Secret Venue
          </span>
        </div>
        <div className="day-card d-flex justify-content-center align-items-center">
          <span className="text-event">
            <strong className="text-event-green">DÍA 2</strong><br/>
            <strong>Viernes 31 de Octubre</strong><br/><br/>
            🎙️ Conferencias <br/>
            10am - 6pm <br/>
            Hotel Krystal Monterrey <br/><br/>
            🧑‍💻  Hackathon  <br/>
            7pm <br/>
            Museo Metropolitano
          </span>
        </div>
        <div className="day-card d-flex justify-content-center align-items-center">
          <span className="text-event">
            <strong className="text-event-green">DÍA 3</strong><br/>
            <strong>Sábado 1 de Noviembre</strong><br/><br/>
            🎙️ Conferencias <br/>  
            10am - 6pm <br/>
            Hotel Krystal Monterrey <br/><br/>
            🧑‍💻 Hackathon  & Workshops<br/>
            Todo el día <br/>
            Museo Metropolitano
            
          </span>
        </div>
        <div className="day-card d-flex justify-content-center align-items-center">
          <span className="text-event">
            <strong className="text-event-green">DÍA 4</strong><br/>
            <strong> Domingo 2 de Noviembre</strong><br/><br/>
            🎉 Ceremonia de Cierre  & Anuncio de Ganadores<br/>
              1pm <br/><br/>
            Museo Metropolitano
          </span>
        </div>
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
