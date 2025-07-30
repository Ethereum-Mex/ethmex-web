import "./Venue.css";

function Venue() {

  return (
    <div className="container-fluid align-items-center justify-content-center text-center container-ethmex-event" id="venue">
      <span className="text-event-title" style={{ color: "#358541", fontSize: "35px", textAlign: "left" }}> VENUE</span>
      <br/><br/>
      <div className=" mx-auto hat-container">
        <p className="text-event">
        Este año, ETH México 2025  transforma el centro histórico de Monterrey en un <b>Pop-Up Innovation Hub</b>, una red de actividades descentralizadas que durante tres días conectará tecnología, cultura y colaboración.
        </p>
        <a 
          href="https://maps.app.goo.gl/LQVppNcLc4EUCrBq6" 
          className="text-event" 
          style={{textDecoration: "none"}}
          target="_blank"
          rel="noopener noreferrer"
        > 
          Lista de Venues en Google Maps
        </a>
      </div>
      
      <div className="mapa-venue">
        <img
            src={`${process.env.PUBLIC_URL}/images/mapa-venues.png`}
            className="d-block img-fluid mx-auto "
            width="800"
            alt="img-venue"
          />
      </div>


    </div>
  );
}

export default Venue;
