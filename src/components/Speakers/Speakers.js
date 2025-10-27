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
    name: "Abraham Rivv",
    username: "@abrahamrivv",
    link: "https://x.com/abrahamrivv",
    image: "abrahamrivv-38.png",
  },
  {
    name: "Diego Tenorio",
    username: "@deLarg0",
    link: "https://x.com/deLarg0",
    image: "deLargo-14.png",
  },

  {
    name: "Alberto Franco",
    username: "@Beto_gap_trader",
    link: "https://x.com/Beto_gap_trader",
    image: "albertofranco-26.png",
  },
  {
    name: "Ana Belen",
    username: "@anabelen_eth",
    link: "https://x.com/anabelen_eth",
    image: "AnaBelen-24.png",
  },
  {
    name: "Austin Griffith",
    username: "@austingriffith",
    link: "https://x.com/austingriffith",
    image: "austin-20.png",
  },
  {
    name: "Ale RaMo",
    username: "@AleRaMo30",
    link: "https://x.com/AleRaMo30",
    image: "AleRamo-28.png",
  },
  {
    name: "Scarf",
    username: "@0xscarf",
    link: "https://x.com/oxscarf",
    image: "Scarf-74.png",
  },
  {
    name: "Carlos Ocampo",
    username: "",
    link: "https://www.linkedin.com/in/carlos-ocampo-d31/",
    image: "Carlosocampo-44.png",
  },
  {
    name: "Frida Ruh",
    username: "@FridaRuh",
    link: "https://x.com/FridaRuh",
    image: "FridaRuh-18.png",
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
    name: "Israel Cortes",
    username: "@isracts",
    link: "https://x.com/isracts",
    image: "SpeakersIG-72.png",
  },
  {
    name: "Javier Murga",
    username: "@JavierMurga",
    link: "https://www.linkedin.com/in/javier-murga-hernandez-74222319",
    image: "JavierMurga-32.png",
  },
  {
    name: "Andres Salcedo",
    username: "@andyfi",
    link: "https://x.com/andyfi",
    image: "andresalcedo-50.png",
  },
  {
    name: "Adrian Treviño",
    username: "",
    link: "",
    image: "AdrianTrevino-56.png",
  },
  {
    name: "Etienne Luquet",
    username: "",
    link: "https://www.linkedin.com/in/etienne-luquet-782b511ab",
    image: "Etienne-58.png",
  },
  {
    name: "Brian Smokes",
    username: "@BSmokes_",
    link: "https://x.com/bsmokes_",
    image: "BrianSmokes-48.png",
  },
  {
    name: "Yazareth Sánchez",
    username: "",
    link: "",
    image: "Yazareth-91.png",
  },
  {
    name: "Mauricio Cruz",
    username: "@meximalist",
    link: "https://x.com/meximalist",
    image: "mexi-40.png",
  },
  {
    name: "Nathaly Cortez",
    username: "@_nathcortez",
    link: "https://x.com/_nathcortez",
    image: "NatCortez-64.png",
  },

  {
    name: "Liz Durán",
    username: "@liz_durang",
    link: "https://x.com/liz_durang",
    image: "Liz-62.png",
  },
  {
    name: "Rosa González",
    username: "@rosaglez_eth",
    link: "https://x.com/rosaglez_eth",
    image: "RosaGlez-60.png",
  },
  {
    name: "Vianey Alvarez",
    username: "@vialvalv",
    link: "https://x.com/vialvalv",
    image: "Vianey-89.png",
  },

  {
    name: "Gerardo Vela",
    username: "@gerapedrizco",
    link: "https://x.com/gerapedrizco",
    image: "GerardoVela-64.png",
  },
  {
    name: "Erezedor",
    username: "@yoSoyDev_eth",
    link: "https://x.com/yoSoyDev_eth",
    image: "Erezedor-22.png",
  },
  
  {
    name: "Almond",
    username: "@oyealmond",
    link: "https://x.com/oyealmond",
    image: "Almond-69.png",
  },
  {
    name: "Anthony Chavez",
    username: "@anthonysurfermx",
    link: "https://x.com/anthonysurfermx",
    image: "Anthony2-78.png",
  },
  {
    name: "Don Pepe",
    username: "@0xDonPepe",
    link: "https://x.com/0xDonPepe",
    image: "DonPepe-67.png",
  },
  {
    name: "David",
    username: "@0x_dav",
    link: "https://x.com/0x_dav",
    image: "David-52.png",
  },
  {
    name: "Mitch Ozmun",
    username: "@divine_comedian",
    link: "https://x.com/divine_comedian",
    image: "Mitch-62.png",
  },
  {
    name: "Juan Rah",
    username: "@JuanRah",
    link: "https://x.com/JuanRah",
    image: "JuanRah-30.png",
  },
  {
    name: "Humberto Besso",
    username: "@HumbertoBesso",
    link: "https://x.com/HumbertoBesso",
    image: "Humberto-73.png",
  },
  {
    name: "Julio Flores",
    username: "",
    link: "",
    image: "JulioFlores-76.png",
  },
  {
    name: "Mariela Saldivar",
    username: "@marielasvmx",
    link: "https://x.com/marielasvmx",
    image: "Mariela-71.png",
  },
  {
    name: "Maria Fernandez",
    username: "@onchainfer",
    link: "https://x.com/onchainfer",
    image: "MariaFer-74.png",
  },
  {
    name: "Alan Kantapin",
    username: "@akantapin",
    link: "https://x.com/akantapin",
    image: "Alan-76.png",
  },

  {
    name: "Saswat Sahu",
    username: "@arbalestpartner",
    link: "https://x.com/arbalestpartner",
    image: "Saswat-72.png",
  },
  {
    name: "Creatress",
    username: "@creatressart",
    link: "https://x.com/creatressart",
    image: "Creatress-95.png",
  },
  {
    name: "Yedid Romero",
    username: "@yedidweb3",
    link: "https://x.com/yedidweb3",
    image: "Yedid-80.png",
  },
  {
    name: "Rafael Cardenas",
    username: "@rafaelcr",
    link: "https://x.com/rafaelcr",
    image: "RafaCardenas-54.png",
  },
  {
    name: "JJ Campuzano",
    username: "@das_grasshopper",
    link: "https://x.com/das_grasshopper",
    image: "JJ-68.png",
  },
  {
    name: "Irwing Tello",
    username: "",
    link: "",
    image: "IrwingTello-68.png",
  },
  {
    name: "Carlos Valderrama",
    username: "@legalfintech",
    link: "https://x.com/legalfintech",
    image: "CarlosValderrama-94.png",
  },
  {
    name: "Zeymer Montes",
    username: "@zeymermoca",
    link: "https://x.com/zeymermoca",
    image: "Zeymer-83.png",
  },








];



function Speakers() {
  return (
    <div
      className="container-fluid container-ethmex-event text-center"
      id="Speakers"
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
                    style={{ width: "170px" }}
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
