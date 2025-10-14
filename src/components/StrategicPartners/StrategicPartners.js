import "./StrategicPartners.css";

const strategicPartners = [
  {
    name: "Odisea",
    image: "OdiseaBlack_1.png",
    width: "220px", 
    link: "https://x.com/odisealabs", 
  },
  {
    name: "Monterrey Tech Week",
    image: "Base_lockup_2color.png",
    width: "220px", 
    link: "https://monterreytechweek.mx/", 
  },
  {
    name: "Texas Blockchain",
    image: "texas-blockchain.png",
    width: "240px", 
    link: "https://x.com/txblockchain", 
  },
  {
    name: "Chihuahua Tech Week",
    image: "CTW.png",
    width: "240px", 
    link: "https://x.com/txblockchain", 
  },
  {
    name: "Espacio Cripto",
    image: "Logo EC.png",
    width: "220px", 
    link: "https://x.com/EspacioCripto", 
  },
  {
    name: "Frontera",
    image: "Logo_Frontera_Dark@2x.png",
    width: "220px", 
    link: "https://x.com/BandoCool", 
  },
  {
    name: "Irrazonables",
    image: "Irrazonables_Logotipo-Horizontal-Negativo_Transparente.png",
    width: "220px", 
    link: "https://www.instagram.com/somosirrazonables/", 
  },
  {
    name: "Product LatAm",
    image: "product latam.svg",
    width: "150px", 
    link: "https://www.product-latam.com/", 
  },

];


function StrategicPartners() {
  return (
    <div className="container-fluid container-ethmex-event text-center" id="strategic-partners">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>STRATEGIC PARTNERS&nbsp;</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {strategicPartners.map((member, index) => (
            <div className="col-4 col-sm-4 col-md-3 mb-4" key={index}>
              <div>
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${member.image}`}
                    className="d-block img-fluid mx-auto"
                    alt={member.name}
                    style={{ width: member.width }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StrategicPartners;
