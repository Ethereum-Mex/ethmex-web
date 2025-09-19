import React from "react";
import "./ETHMX2025.css";

function ETHMX2025() {

  return (

    <div className=" ETHMX2025-container d-flex justify-content-center align-items-center" id="hero-ethmx2025">
      <div className="ETHMX2025-div-white">
        <img src={`${process.env.PUBLIC_URL}/images/EthMxMty_VerdeRojo.png`} className="d-block img-fluid mx-auto" width="700" alt="..." />
        <br/>
        <p>Invitan</p>
        <div className="logos-container m-2">
          <img src={`${process.env.PUBLIC_URL}/images/EthMX_ColorFull.png`} className="d-block img-fluid " width="200" alt="..." />
          <img src={`${process.env.PUBLIC_URL}/images/ethereum-monterrey-logo.png`} className="d-block img-fluid " width="200" alt="..." />
        </div>

        <p>31 octubre, 1 y 2 noviembre 2025 </p>
        <p> 📍 Pop-Up Innovation Hub en el Centro Histórico de Monterrey</p>

      </div>
  </div>
    
  );
}

export default ETHMX2025;
