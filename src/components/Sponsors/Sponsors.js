import "./Sponsors.css";

const sponsors = [
  {
    name: "ESP",
    image: "esp.svg",
    width: "230px", 
  },
  {
    name: "geodework",
    image: "geodework.png",
    width: "500px", 
  },
  {
    name: "Meebits",
    image: "Horizontal_Logo_meebits.png",
    width: "230px", 
  },
  
];

function Sponsors() {
  return (
    <div className="container-fluid container-ethmex-event text-center" id="sponsors">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>SPONSORS&nbsp;</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {sponsors.map((member, index) => (
            <div className="col-6 col-sm-4 col-md-3 mb-4" key={index}>
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

export default Sponsors;
