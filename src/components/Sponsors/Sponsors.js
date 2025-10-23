import "./Sponsors.css";

const sponsors = [
  {
    name: "Arbitrum DAO",
    image: "0525_ArbitrumDao_Primary_H_Blue.svg",
    width: "400px", 
    link: "https://x.com/arbitrum_esp", 
  },
  {
    name: "HIV3",
    image: "Hiv3.jpeg",
    width: "160px", 
    link: "", 
  },
  {
    name: "Etherfuse",
    image: "Etherfuse_Full-logo_black.png",
    width: "180px", 
    link: "https://x.com/ethereum_mexico/status/1980281196786393248", 
  },
  {
    name: "scroll",
    image: "Scroll_FullLogo.8b9fd528.svg",
    width: "150px", 
    link: "https://x.com/ethereum_mexico/status/1978552830563611067", 
  },
  {
    name: "ENS",
    image: "ens-logo-Blue.svg",
    width: "130px", 
    link: "https://x.com/ethereum_mexico/status/1981060334262604219", 
  },
  {
    name: "Base",
    image: "Base_lockup_2color.svg",
    width: "130px", 
    link: "https://x.com/ethereum_mexico/status/1973473598380843133", 
  },
  {
    name: "Uniswap Labs",
    image: "UniswapLabs_Horizontal_Pink.svg",
    width: "230px", 
    link: "https://x.com/ethereum_mexico/status/1980642202784264277", 
  },
  {
    name: "Meebits",
    image: "Horizontal_Logo_meebits.png",
    width: "100px", 
    link: "https://x.com/ethereum_mexico/status/1971242832305524910", 
  },
  {
    name: "ESP",
    image: "esp.svg",
    width: "140px", 
    link: "https://x.com/EF_ESP", 
  },
  {
    name: "geodework",
    image: "geodework.png",
    width: "200px", 
    link: "https://x.com/geodelabs", 
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
            <div className="col-3 col-sm-5 col-md-3 mb-5" key={index}>
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
