import "./Esperar.css";

function Esperar() {

  return (
    <div className="container-fluid align-items-center justify-content-center text-center container-ethmex-event ">
      <span className="text-event-title" style={{ color: "#358541", fontSize: "35px", textAlign: "left" }}> LO QUE TE ESPERA EN </span>
      <span className="text-event-title" style={{ color: "#D73535", fontSize: "35px", textAlign: "left" }}> ETHEREUM MEXICO 2025</span>
      <br/><br/>

      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 gap-lg-5 esperar-items p-3">
        <div className="d-flex flex-column gap-4 gap-lg-5">
          <div className="esperar-item d-flex justify-content-center align-items-center">
            <span className="text-event"> 🛠️ Hackathon de 36 horas para lanzar tu MVP Web3</span>
          </div>
          <div className="esperar-item d-flex justify-content-center align-items-center">
            <span className="text-event">🧑‍🏫 Mentores y jueces de talla internacional</span>
          </div>
          <div className="esperar-item d-flex justify-content-center align-items-center">
            <span className="text-event">🫂 Comunidad, comunidad y más comunidad reunida en activaciones, side events y espacios para conectar</span>
          </div>
        </div>
        <div className="d-flex flex-column gap-4 gap-lg-5">
          <div className="esperar-item d-flex justify-content-center align-items-center">
            <span className="text-event">🧠 Charlas técnicas y workshops sobre temas en tendencia como IA, ZK, identidad, DeFi, gaming y más</span>
          </div>
          <div className="esperar-item d-flex justify-content-center align-items-center">
            <span className="text-event">💸 Premios, grants y oportunidades de financiamiento</span>
          </div>
          
          <div className="esperar-item d-flex justify-content-center align-items-center">
            <span className="text-event">💀 Como plus único de esta edición, lo haremos inspirados en una de las tradiciones más emblemáticas de México: el Día de Muertos.</span>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Esperar;
