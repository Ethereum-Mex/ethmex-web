import "./Venue.css";

function Venue() {

  return (
    <div className="container-fluid align-items-center justify-content-center text-center container-ethmex-event">
      <span className="text-event-title" style={{ color: "#358541", fontSize: "35px", textAlign: "left" }}> VENUE</span>
      <br/><br/>
      <div className=" mx-auto hat-container">
        <p>
        Este año, <b> ETH México 2025 </b> transforma el centro histórico de Monterrey en un <b>Pop-Up Innovation Hub</b>, una red de actividades descentralizadas que durante tres días conectará tecnología, cultura y colaboración.
        </p>
        <p>
        Del <b>Palacio Municipal, al Museo MARCO y al Museo Metropolitano</b>, cada espacio icónico del centro de Monterrey se convierte en un nodo para construir, aprender y conectar a través de Ethereum.
        </p>
      </div>
      <br/>
      <div>
        <img
            src={`${process.env.PUBLIC_URL}/images/mapa-venues.png`}
            className="d-block img-fluid mx-auto"
            width=""
            alt="White Hat Hackathon"
          />
      </div>


    </div>
  );
}

export default Venue;
