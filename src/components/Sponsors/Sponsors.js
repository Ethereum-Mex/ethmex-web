import "./Sponsors.css";

const sponsors = [
  {
    name: "ESP",
    image: "esp.svg",
    width: "250px", 
  },
  {
    name: "geodework",
    image: "geodework.png",
    width: "500px", 
  },
  {
    name: "Gobierno de Monterrey",
    image: "LogosEconomiaGobiernoEstadoMTY/mty_gdm_logo_iso.svg",
    width: "220px",
  },
  {
    name: "ECONOMÍA MONTERREY",
    image: "LogosEconomiaGobiernoEstadoMTY/economia.png",
    width: "450px", 
  },
];

function Sponsors() {
  return (
    <div className="container-fluid container-ethmex-event text-center">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>CON EL APOYO DE&nbsp;</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {sponsors.map((member, index) => (
            <div className="col-6 col-sm-4 col-md-3 mb-4" key={index}>
              <div className="sponsor-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${member.image}`}
                  className="d-block img-fluid mx-auto"
                  alt={member.name}
                  style={{ width: member.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
