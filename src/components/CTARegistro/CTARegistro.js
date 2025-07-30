import "./CTARegistro.css";

function CTARegistro() {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center text-center container-ethmex-event"
    >
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>REGISTRATE&nbsp;</span>
        <span style={{ color: "#D73535" }}>AHORA</span>
      </h2>

      {/* Responsive iframe container */}
      <div style={{ position: "relative", overflow: "hidden", width: "100%", maxWidth: "950px", height: "540px"}}>
        <iframe
          src="https://lu.ma/embed/event/evt-F88uJPDtKGCKgiG/simple"
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
    </div>
  );
}

export default CTARegistro;
