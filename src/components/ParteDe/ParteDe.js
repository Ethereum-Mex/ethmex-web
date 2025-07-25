import "./ParteDe.css";

function ParteDe() {

  return (
    <div className="container-fluid align-items-center justify-content-center text-center container-ethmex-event parte-de-container">
      <span className="text-event-title" style={{ color: "white", fontSize: "35px", textAlign: "left" }}> QUIERO SER PARTE</span>
      <br/>
      <span className="text-event-white"><i>Registros disponibles muy pronto</i></span>

      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 gap-lg-5 esperar-items p-3">
        <div className="d-flex flex-column gap-4 gap-lg-5">
          <a
            href="https://www.canva.com/design/DAGst9rkO3M/cjiRLBjb0sl6xGh5z313Ew/view?utm_content=DAGst9rkO3M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2b309d877d"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="parte-item d-flex justify-content-center align-items-center zoom-on-hover">
              <span className="text-event"> Sponsor </span> <br/> 
            </div>
          </a>
          <div className="parte-item d-flex justify-content-center align-items-center">
            <span className="text-event">Mentor / Juez</span>
          </div>
        </div>
        <div className="d-flex flex-column gap-4 gap-lg-5">
          <div className="parte-item d-flex justify-content-center align-items-center">
            <span className="text-event">Media Partner</span>
          </div>
          <div className="parte-item d-flex justify-content-center align-items-center">
            <span className="text-event">Hacker</span>
          </div>
        </div>
      </div>

      <div className="pt-3 pt-lg-4 pb-lg-2 hat-container mx-auto">
        <span className="text-event-white">Ayúdanos a hacer de esta edición la más poderosa hasta ahora</span>
      </div>
      <br/>
      <a
        class="btn btn-primary-event"
        href="https://t.me/ethmexico"
        target="_blank"
        rel="noopener noreferrer"
      >
        CONTÁCTANOS
      </a>


    </div>
  );
}

export default ParteDe;
