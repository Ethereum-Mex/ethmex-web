import "./Speakers.css";

const speakers = [
  {
    name: "Rine Dunia",
    username: "@lachicaWeb3",
    link: "https://x.com/lachicaWeb3",
    image: "SpeakersIG-08.png",
  },
  {
    name: "Gabriella Mena",
    username: "@gabriellamena",
    link: "https://x.com/gabriellamena",
    image: "SpeakersIG-09.png",
  },
  {
    name: "Rafa Canseco",
    username: "@0xRafaCC",
    link: "https://x.com/0xRafaCC",
    image: "rafacanseco.png",
  },
  {
    name: "João Kury",
    username: "@cripto_nita_",
    link: "https://x.com/cripto_nita_",
    image: "joao.png",
  },
  {
    name: "Diego Fernández",
    username: "@fernandezdiego",
    link: "https://x.com/fernandezdiego",
    image: "diegofernandez.png",
  },
  {
    name: "Chuy Cepeda",
    username: "@chuycepeda",
    link: "https://x.com/chuycepeda",
    image: "chuycepeda.png",
  },
  {
    name: "Diego Tenorio",
    username: "@deLarg0",
    link: "https://x.com/deLarg0",
    image: "deLargo-14.png",
  },
  {
    name: "Abraham Rivv",
    username: "@abrahamrivv",
    link: "https://x.com/abrahamrivv",
    image: "abrahamrivv-38.png",
  },
  {
    name: "Ana Belen",
    username: "@anabelen_eth",
    link: "https://x.com/anabelen_eth",
    image: "AnaBelen-24.png",
  },
  {
    name: "Alberto Franco",
    username: "@Beto_gap_trader",
    link: "https://x.com/Beto_gap_trader",
    image: "albertofranco-26.png",
  },
  {
    name: "Ale RaMo",
    username: "@AleRaMo30",
    link: "https://x.com/AleRaMo30",
    image: "AleRamo-28.png",
  },
  {
    name: "Austin Griffith",
    username: "@austingriffith",
    link: "https://x.com/austingriffith",
    image: "austin-20.png",
  },
  {
    name: "Frida Ruh",
    username: "@FridaRuh",
    link: "https://x.com/FridaRuh",
    image: "FridaRuh-18.png",
  },
  {
    name: "Carlos Ocampo",
    username: "",
    link: "https://www.linkedin.com/in/carlos-ocampo-d31/",
    image: "Carlosocampo-44.png",
  },
  {
    name: "Javier Murga",
    username: "@JavierMurga",
    link: "https://www.linkedin.com/in/javier-murga-hernandez-74222319",
    image: "JavierMurga-32.png",
  },
  {
    name: "Jordi Gracia",
    username: "@jordigraciapuig",
    link: "https://www.instagram.com/jordigraciapuig/",
    image: "jordi-16-16.png",
  },
  {
    name: "Karina Córdova",
    username: "@irrazonables_",
    link: "https://x.com/irrazonables_",
    image: "KariCordova-36.png",
  },
  {
    name: "Aime Figueroa",
    username: "@Lady_cripto",
    link: "https://x.com/aime_fl?t=-SzgqHMmychclwrK3MmnWg&s=09",
    image: "Aime-66.png",
  },
  {
    name: "Adrian Treviño",
    username: "",
    link: "",
    image: "AdrianTrevino-56.png",
  },
  {
    name: "Andres Salcedo",
    username: "@andyfi",
    link: "https://x.com/andyfi",
    image: "andresalcedo-50.png",
  },
  {
    name: "Brian Smokes",
    username: "@BSmokes_",
    link: "https://x.com/bsmokes_",
    image: "BrianSmokes-48.png",
  },
  {
    name: "Etienne Luquet",
    username: "",
    link: "https://www.linkedin.com/in/etienne-luquet-782b511ab",
    image: "Etienne-58.png",
  },
  {
    name: "Ile Designia",
    username: "@iledesignia",
    link: "https://x.com/iledesignia",
    image: "IleDesignia-42.png",
  },
  {
    name: "Jay McCarthy",
    username: "@jeapostrophe",
    link: "https://x.com/jeapostrophe",
    image: "jay-34.png",
  },
  {
    name: "Nathaly Cortez",
    username: "@_nathcortez",
    link: "https://x.com/_nathcortez",
    image: "NatCortez-64.png",
  },
  {
    name: "Mauricio Cruz",
    username: "@meximalist",
    link: "https://x.com/meximalist",
    image: "mexi-40.png",
  },
  {
    name: "Rosa González",
    username: "@rosaglez_eth",
    link: "https://x.com/rosaglez_eth",
    image: "RosaGlez-60.png",
  },
  {
    name: "Liz Durán",
    username: "@liz_durang",
    link: "https://x.com/liz_durang",
    image: "Liz-62.png",
  },
  {
    name: "Erezedor",
    username: "@yoSoyDev_eth",
    link: "https://x.com/yoSoyDev_eth",
    image: "Erezedor-22.png",
  },
];

function Speakers() {
  return (
    <div
      className="container-fluid container-ethmex-event text-center"
      id="equipo-organizador"
    >
      <span
        className="text-event-title d-block mb-4 text-center"
        style={{ color: "#D73535", fontSize: "35px" }}
      >
        SPEAKERS
      </span>

      <div className="container">
        <div className="row justify-content-center">
          {speakers.map((member, index) => (
            <div className="col-4 col-sm-3 col-md-2 mb-4" key={index}>
              <div className="team-item">
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${member.image}`}
                    className="d-block img-fluid mx-auto mt-4"
                    alt={member.name}
                    style={{ width: "16A0px" }}
                  />
                </a>
                <div className="team-item-text mt-3">
                  <p className="text-event" style={{ lineHeight: "1.3" }}>
                    {member.name}
                  </p>
                  {member.mode && (
                    <p className="text-event" style={{ lineHeight: "1.3" }}>
                      {member.mode}
                    </p>
                  )}
                  <a
                    className="text-event"
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    {member.username}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
