import React, { useEffect, useState } from "react";
import "./WhiteHacker.css";

function WhiteHacker() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-31T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="container-fluid align-items-center justify-content-center text-center container-ethmex-event " id="hackathon">
      <div className="mx-auto hat-container ">
        <img
          src={`${process.env.PUBLIC_URL}/images/white-hat.png`}
          className="d-block img-fluid mx-auto"
          width="550"
          alt="White Hat Hackathon"
        />
        <br/>
        <p className="text-event mt-3">
          Únete a las Conferencias + Hackathon Web3 que reúne a la <b> comunidad de builders más diversa de LATAM. </b> Aprende, programa, conecta y lanza ese proyecto que siempre has querido construir, integrando tecnología blockchain e IA.
        </p>
      </div>
      <br/>
      <a
        href="https://lu.ma/event/evt-F88uJPDtKGCKgiG"
        className="btn btn-primary-event"
        target="_blank" 
        rel="noopener noreferrer"
        style={{fontSize: '20px'}}
      >
        REGÍSTRATE AHORA
      </a>


          
      <br/><br/>
      <h2 className="m-3 text-event">
        {timeLeft ? "" : "¡El evento ha comenzado!"}
      </h2>

      {timeLeft && (
        <div className=" d-flex justify-content-center gap-4 flex-wrap">
          
          <div >
            <p className="text-event-green">Días</p> 
            <p className="text-event-red num-contador">{timeLeft.días}</p> 
          </div>
          <div>
            <p className="text-event-green">Horas</p> 
            <p className="text-event-red num-contador"> {timeLeft.horas}</p> 
          </div>
          <div>
          <p className="text-event-green">Minutos</p> 
            <p className="text-event-red num-contador">{timeLeft.minutos}</p> 
          </div>
          <div>
          <p className="text-event-green">Segundos</p> 
            <p className="text-event-red num-contador">{timeLeft.segundos}</p> 
          </div>
        </div>
      )}
    </div>
  );
}

export default WhiteHacker;
