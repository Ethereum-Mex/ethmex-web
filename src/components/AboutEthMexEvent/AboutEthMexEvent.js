import "./AboutEthMexEvent.css";

function AboutEthMexEvent() {
  

  return (
    <div className="container-fluid align-items-center justify-content-center text-center container-ethmex-event about-ethmex" id="sobre-ethereum-mexico">
      <div className="d-flex justify-content-center align-items-center align-items-lg-start gap-3 gap-lg-5 flex-column flex-lg-row  mx-auto">
        <div className="">
          <img
            src={`${process.env.PUBLIC_URL}/images/Rectangle3-event.png`}
            className="img-fluid mx-auto"
            width="550"
            alt="EthMex 2023"
          />
        </div>
      
        <div className="about-ethmex-div-white text-center text-lg-start p-4">
          <span className="text-event-title" style={{ color: "#358541", fontSize: "40px", textAlign: "left" }}> SOBRE ETHEREUM </span>
          <span className="text-event-title" style={{ color: "#D73535", fontSize: "40px", textAlign: "left" }}> MEXICO </span>
          <br/><br/>
          <span className="text-event" >ETH México es un evento anual y en esta edición, Conferencias + Hackathon Web3 </span><span className="text-event-green"> que impulsa el desarrollo del ecosistema Ethereum en el país.</span>
          <br/><br/>
          <span className="text-event">Conectamos a </span><span className="text-event-green">desarrolladores, diseñoadores, estudiantes, emprendedores y entusiastas en blockchain </span> <span className="text-event">a través de experiencias educativas, colaborativas e inspiradoras.</span>
        </div>
      </div>

      <div className="pt-5 hat-container mx-auto">
        <span className="text-event-white">Esta tercera edición es una invitación a crear soluciones abiertas, descentralizadas y con impacto.</span>
   
        <span className="text-event-white">Y este año, desde Monterrey lo hacemos más emocionados que nunca de compartirlo contigo.</span>

      </div>

    </div>
  );
}

export default AboutEthMexEvent;
