import "./StrategicPartners.css";

const strategicPartners = [
  {
    name: "Odisea",
    image: "OdiseaBlack_1.png",
    width: "220px", 
    link: "https://x.com/odisealabs", 
  },

];

function StrategicPartners() {
  return (
    <div className="container-fluid container-ethmex-event text-center" id="sponsors">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#358541" }}>STRATEGIC PARTNERS&nbsp;</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {strategicPartners.map((member, index) => (
            <div className="col-6 col-sm-4 col-md-3 mb-4" key={index}>
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
