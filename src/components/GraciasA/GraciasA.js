import "./GraciasA.css";

const graciasA = [
  {
    name: "Gobierno de Nuevo León",
    image: "LogosEconomiaGobiernoEstadoMTY/responsiva 6.png",
    width: "90px",
  },
  {
    name: "SECRETARÍA DE ECONOMÍA",
    image: "LogosEconomiaGobiernoEstadoMTY/economia.png",
    width: "", 
  },
  {
    name: "Gobierno de Monterrey",
    image: "Escudo de Armas_vertical.png",
    width: "", 
  },
  {
    name: "Secretaría de Desarrollo Económico",
    image: "sec_desarrollo_ecnomico.png",
    width: "", 
  },
  {
    name: "Secretaría de Desarrollo Económico",
    image: "OCVMTY Color.png",
    width: "", 
  },
  {
    name: "Secretaría de Nuevo León",
    image: "nuevo_leon.png",
    width: "", 
  },
];

function GraciasA() {
  return (
    <div className="container-fluid container-ethmex-event text-center" id="sponsors">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>CON EL APOYO DE&nbsp;</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {graciasA.map((member, index) => (
            <div className="col-4 col-md-2 mb-4" key={index}>
              <div className="">
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

export default GraciasA;
