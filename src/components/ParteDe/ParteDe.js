import "./ParteDe.css";

function ParteDe() {
  return (
    <div className="container-fluid align-items-center justify-content-center text-center container-ethmex-event parte-de-container" id="quiero-ser-parte">
      <span className="text-event-title" style={{ color: "white", fontSize: "35px", textAlign: "left" }}> QUIERO SER PARTE</span>
      <br/>

      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 gap-lg-5 esperar-items p-3">
        <div className="d-flex flex-column gap-4 gap-lg-5">
          <a
            href="https://www.canva.com/design/DAGst9rkO3M/cjiRLBjb0sl6xGh5z313Ew/view?utm_content=DAGst9rkO3M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2b309d877d"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="parte-item d-flex flex-column justify-content-center align-items-center zoom-on-hover">
              <span className="text-event">Sponsor</span> 
              <i><span className="text-event" style={{fontSize: '12px'}}>Consulta el deck aquí</span></i>
            </div>
          </a>
          <a
            href="https://ethereumexico.notion.site"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="parte-item d-flex flex-column justify-content-center align-items-center zoom-on-hover">
              <span className="text-event">Attendee Guide</span> 
              <i><span className="text-event" style={{fontSize: '12px'}}>Consulta aquí</span></i>
            </div>
          </a>

        </div>
        
        <div className="d-flex flex-column gap-4 gap-lg-5">
        <a
            href="https://tally.so/r/3NzV7G"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="parte-item d-flex flex-column justify-content-center align-items-center zoom-on-hover">
              <span className="text-event">Voluntario/a</span> 
              <i><span className="text-event" style={{fontSize: '12px'}}>Aplica aquí</span></i>
            </div>
          </a>
          {/** 
          <a
            href="https://tally.so/r/n0KzMQ"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="parte-item d-flex flex-column justify-content-center align-items-center zoom-on-hover">
              <span className="text-event">Speaker</span> 
              <i><span className="text-event" style={{fontSize: '12px'}}>Aplica aquí</span></i>
            </div>
          </a>

          */}
          {/** 
          <a
            href="https://tally.so/r/nPo9a5"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="parte-item d-flex flex-column justify-content-center align-items-center zoom-on-hover">
              <span className="text-event">Community Partner</span> 
              <i><span className="text-event" style={{fontSize: '12px'}}>Aplica aquí</span></i>
            </div>
          </a>
          */}
          <a
            href="https://accessible-mitten-7e2.notion.site/Hackers-Guide-2866a580104b806db60fc46ba80bc4c6?pvs=74/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="parte-item d-flex flex-column justify-content-center align-items-center zoom-on-hover">
              <span className="text-event">Hacker Guide</span> 
              <i><span className="text-event" style={{fontSize: '12px'}}>Consulta aquí</span></i>
            </div>
          </a>
        </div>
      </div>
      
      <div className="pt-3 pt-lg-4 pb-lg-2 hat-container mx-auto">
        <span className="text-event-white">Ayúdanos a hacer de esta edición la más poderosa hasta ahora</span>
      </div>
      <br/>

    </div>
  );
}

export default ParteDe;
