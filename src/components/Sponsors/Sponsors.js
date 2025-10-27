import "./Sponsors.css";

const sponsors = [
  {
    name: "Arbitrum DAO",
    image: "0525_ArbitrumDao_Primary_H_Blue.svg",
    width: "500px", 
    link: "https://x.com/arbitrum_esp", 
  },
  {
    name: "HIV3",
    image: "Hiv3.jpeg",
    width: "370px", 
    link: "", 
  },
  {
    name: "Etherfuse",
    image: "Etherfuse_Full-logo_black.png",
    width: "250px", 
    link: "https://x.com/ethereum_mexico/status/1980281196786393248", 
  },
  {
    name: "scroll",
    image: "Scroll_FullLogo.8b9fd528.svg",
    width: "200px", 
    link: "https://x.com/ethereum_mexico/status/1978552830563611067", 
  },
  {
    name: "ENS",
    image: "ens-logo-Blue.svg",
    width: "110px", 
    link: "https://x.com/ethereum_mexico/status/1981060334262604219", 
  },
  {
    name: "Base",
    image: "Base_lockup_2color.svg",
    width: "140px", 
    link: "https://x.com/ethereum_mexico/status/1973473598380843133", 
  },
  {
    name: "Uniswap Labs",
    image: "UniswapLabs_Horizontal_Pink.svg",
    width: "260px", 
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
    width: "220px", 
    link: "https://x.com/geodelabs", 
  },
];

function Sponsors() {
  // Split sponsors into rows: 2, 3, 3, 2
  const row1 = sponsors.slice(0, 2);
  const row2 = sponsors.slice(2, 5);
  const row3 = sponsors.slice(5, 8);
  const row4 = sponsors.slice(8, 10);

  const renderSponsorRow = (sponsorArray, colClass) => (
    <div className="row justify-content-center align-items-center mb-4">
      {sponsorArray.map((sponsor, index) => (
        <div className={colClass} key={index}>
          <div>
            <a 
              href={sponsor.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/${sponsor.image}`}
                className="d-block img-fluid mx-auto"
                alt={sponsor.name}
                style={{ width: sponsor.width }}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container-fluid container-ethmex-event text-center" id="sponsors">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#D73535" }}>SPONSORS&nbsp;</span>
      </h2>

      <div className="container">
        {/* First row: 2 logos */}
        {renderSponsorRow(row1, "col-6 col-sm-6 col-md-6")}
        
        {/* Second row: 3 logos */}
        <div className="row justify-content-center align-items-center mb-5" style={{ marginBottom: "6rem" }}>
          {row2.map((sponsor, index) => (
            <div className="col-4 col-sm-4 col-md-4" key={index}>
              <div>
                <a 
                  href={sponsor.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${sponsor.image}`}
                    className="d-block img-fluid mx-auto"
                    alt={sponsor.name}
                    style={{ width: sponsor.width }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Third row: 3 logos */}
        <div className="row justify-content-center align-items-center mb-5">
          {row3.map((sponsor, index) => (
            <div className="col-4 col-sm-4 col-md-4" key={index}>
              <div>
                <a 
                  href={sponsor.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${sponsor.image}`}
                    className="d-block img-fluid mx-auto"
                    alt={sponsor.name}
                    style={{ width: sponsor.width }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fourth row: 2 logos */}
        {renderSponsorRow(row4, "col-6 col-sm-4 col-md-6")}
      </div>
    </div>
  );
}

export default Sponsors;
