import "./Sponsors.css";

const sponsors = [
  {
    name: "ESP",
    image: "esp.svg",
    width: "190px", 
    link: "https://x.com/EF_ESP", 
  },
  {
    name: "geodework",
    image: "geodework.png",
    width: "270px", 
    link: "https://x.com/geodelabs", 
  },
  {
    name: "Etherfuse",
    image: "Etherfuse_Full-logo_black.png",
    width: "270px", 
    link: "https://x.com/Etherfuse", 
  },
  {
    name: "scroll",
    image: "Scroll_FullLogo.8b9fd528.svg",
    width: "180px", 
    link: "https://x.com/Scroll_ES", 
  },
  {
    name: "Base",
    image: "Base_lockup_2color.svg",
    width: "130px", 
    link: "https://x.com/base", 
  },
  {
    name: "Uniswap Labs",
    image: "UniswapLabs_Horizontal_Pink.svg",
    width: "270px", 
    link: "https://x.com/Uniswap", 
  },

  {
    name: "ENS",
    image: "ens-logo-Blue.svg",
    width: "130px", 
    link: "https://x.com/ensdomains", 
  },
  {
    name: "Meebits",
    image: "Horizontal_Logo_meebits.png",
    width: "110px", 
    link: "https://x.com/MeebitsNFTs", 
  },
];

function Sponsors() {
  return (
    <div className="container-fluid container-ethmex-event text-center" id="sponsors">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#D73535" }}>SPONSORS&nbsp;</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {sponsors.map((member, index) => (
            <div className="col-3 col-sm-4 col-md-3 mb-5" key={index}>
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

export default Sponsors;
