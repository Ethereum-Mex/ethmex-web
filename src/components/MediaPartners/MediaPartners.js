import "./MediaPartners.css";

const mediaPartners = [
  {
    name: "Cryptoconexión",
    image: "cryptoconexion.jpg",
    width: "200px", 
    link: "https://x.com/cryptoconexion", 
  },
  {
    name: "Fundamento",
    image: "FUNDAMENTO.png",
    width: "270px", 
    link: "https://x.com/FundamentoMedia", 
  },
  {
    name: "Indasocial",
    image: "indasocial-logo.png",
    width: "180px", 
    link: "https://x.com/indasocial_mx", 
  },
  {
    name: "Web3 En Corto",
    image: "WEB3ENCORTO4.png",
    width: "250px", 
    link: "https://x.com/web3encorto", 
  },
];

function MediaPartners() {
  return (
    <div className="container-fluid container-ethmex-event text-center" id="sponsors">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#D73535" }}>MEDIA PARTNERS&nbsp;</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {mediaPartners.map((member, index) => (
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

export default MediaPartners;
