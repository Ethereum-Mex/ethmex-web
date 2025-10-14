import "./ComPartners.css";

const comPartners = [
  {
    name: "SheFi",
    image: "SheFi-logo.png",
    width: "140px", 
    link: "https://linktr.ee/shefiorg", 
  },
  {
    name: "ETH Cinco de Mayo",
    image: "LOGO-ETHCDM.png",
    width: "130px", 
    link: "https://x.com/EthCincoDeMayo", 
  },
  {
    name: "H.E.R. DAO México",
    image: "herdao_mexico.png",
    width: "130px", 
    link: "https://x.com/HerDaoMexico", 
  },
  {
    name: "mxweb3",
    image: "mxweb3.png",
    width: "170px", 
    link: "https://x.com/mxweb3", 
  },
  {
    name: "Criptec",
    image: "criptec.png",
    width: "140px", 
    link: "https://beacons.ai/criptecmx", 
  },
  {
    name: "ITEMZ",
    image: "ITEMZ-negro.png",
    width: "130px", 
    link: "https://x.com/ItemzLatam", 
  },
  {
    name: "L-Phant",
    image: "l-phant.png",
    width: "140px", 
    link: "https://www.instagram.com/lphant.io", 
  },
  {
    name: "Blocka",
    image: "blocka.png",
    width: "150px", 
    link: "https://x.com/lablockatoon", 
  },
  {
    name: "Cripto Unam",
    image: "cripto_unam.png",
    width: "150px", 
    link: "https://x.com/Cripto_UNAM", 
  },
  {
    name: "Viva la Calaca",
    image: "VVLCLC_NEGRO.png",
    width: "130px", 
    link: "https://x.com/VivaLaCalaca", 
  },
  {
    name: "Opportuni",
    image: "Opportuni_Logo.png",
    width: "150px", 
    link: "https://www.instagram.com/opportuni__mx/", 
  },
  {
    name: "Eth Veracruz",
    image: "ETHEREUM-VERACRUZ.png",
    width: "120px", 
    link: "https://x.com/eth_veracruz", 
  },
  {
    name: "Web3 Acceleration Association ",
    image: "wwa.png",
    width: "150px", 
    link: "https://x.com/ttu_waa", 
  },
  {
    name: "UNLOCK Universe",
    image: "UNLOCK-Web-3-obscuro.png",
    width: "150px", 
    link: "https://linktr.ee/UnlockSummit", 
  },
  {
    name: "Ethereum Tegucigalpa",
    image: "eth_tg.png",
    width: "150px", 
    link: "https://linktr.ee/ethereumtgu", 
  },
  {
    name: "Es Blockchain",
    image: "EsBlockchainl-1-.png",
    width: "150px", 
    link: "https://x.com/3sBlockchain ", 
  },
  {
    name: "Centrifuge DAO",
    image: "CFG1.png",
    width: "190px", 
    link: "https://x.com/centrifuge", 
  },
  {
    name: "Xovem Hub",
    image: "xovem.jpeg",
    width: "120px", 
    link: "https://www.instagram.com/xovem_hub", 
  },
  {
    name: "Vadi Latam",
    image: "logovadiii-02-2-.jpg",
    width: "130px", 
    link: "https://x.com/VADILATAM", 
  },
  {
    name: "Woman Way",
    image: "ww_logo_negro.png",
    width: "140px", 
    link: "https://www.instagram.com/womanwayofficial", 
  },
  {
    name: "MicrobiomeDAO",
    image: "MicrobiomeDAO-logo.png",
    width: "90px", 
    link: "https://x.com/microbiomedao", 
  },
  {
    name: "Trading Room",
    image: "trading_room.jpeg",
    width: "160px", 
    link: "https://x.com/MinimalTrading_", 
  },
  {
    name: "Cripto Baja",
    image: "cripto_baja.jpg",
    width: "120px", 
    link: "https://x.com/CriptoBaja", 
  },
  {
    name: "Paisano Dao",
    image: "paisano.png",
    width: "130px", 
    link: "https://x.com/paisanodao", 
  },
  {
    name: "Pelea de robots",
    image: "peleaRobots.png",
    width: "110px", 
    link: "https://www.instagram.com/peleaderobots/", 
  },
  {
    name: "Modular Crypto",
    image: "modularcripto.png",
    width: "150px", 
    link: "https://x.com/ModularCrypto", 
  },
  {
    name: "BandaWeb3",
    image: "BANDA-WEB3.png",
    width: "150px", 
    link: "https://x.com/BandaWeb3", 
  },
  {
    name: "Mobil3.xyz",
    image: "mobil3.jpg",
    width: "100px", 
    link: "https://x.com/mobil3_xyz", 
  },
];




function ComPartners() {
  return (
    <div className="container-fluid container-ethmex-event text-center" id="sponsors">
      <h2 className="text-event-title mb-4" style={{ fontSize: "35px" }}>
        <span style={{ color: "#D73535" }}>COMMUNITY PARTNERS&nbsp;</span>
      </h2>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {comPartners.map((member, index) => (
            <div className="col-3 col-sm-3 col-md-2 mb-4" key={index}>
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

export default ComPartners;
