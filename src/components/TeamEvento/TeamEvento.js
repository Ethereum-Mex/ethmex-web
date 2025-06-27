import "./TeamEvento.css";

const teamMembers = [
  {
    name: "Ana Belén",
    username: "@AnaTech_eth",
    link: "https://x.com/AnaTech_eth",
    image: "AnaBelen.png",
  },
  {
    name: "Yael Marahi",
    username: "@YaelMarahi",
    link: "https://x.com/YaelMarahi",
    image: "YaelMarahi.png",
  },
  {
    name: "Celic Torres",
    username: "@CelicTorresz",
    link: "https://x.com/CelicTorresz",
    image: "CelicTorres.png",
  },
  {
    name: "Karen84.crypto",
    username: "@AdvoktusDiaboli",
    link: "https://x.com/AdvoktusDiaboli",
    image: "Karen84.png",
  },
  {
    name: "Mexi",
    username: "@meximalist",
    link: "https://x.com/meximalist",
    image: "Mexi.png",
  },
  {
    name: "Don Pepe",
    username: "@0xDonPepe",
    link: "https://x.com/0xDonPepe",
    image: "DonPepe.png",
  },
  {
    name: "Erezedor",
    username: "@yoSoyDev_eth",
    link: "https://x.com/yoSoyDev_eth",
    image: "Erezedor.png",
  },
  {
    name: "Liz Durán",
    username: "@liz_durang",
    link: "https://x.com/liz_durang",
    image: "LizDuran.png",
  },
  {
    name: "Sofi V",
    username: "@0xSofiverse",
    link: "https://x.com/0xSofiverse",
    image: "Sofi.png",
  },
  {
    name: "Idalia GQ",
    username: "@handle",
    link: "https://x.com",
    image: "profile-placeholder.png",
  },
  {
    name: "Carlos Colorado",
    username: "@CColorado",
    link: "https://x.com/CColorado",
    image: "profile-placeholder.png",
  },
  {
    name: "JuanRah",
    username: "@JuanRah",
    link: "https://x.com/JuanRah",
    image: "profile-placeholder.png",
  },
  {
    name: "Alejandro",
    username: "@handle",
    link: "https://x.com",
    image: "profile-placeholder.png",
  },
  {
    name: "MrOscar",
    username: "@handle",
    link: "https://x.com",
    image: "profile-placeholder.png",
  },
  {
    name: "Gabriel",
    username: "@handle",
    link: "https://x.com",
    image: "profile-placeholder.png",
  },
];

function TeamEvento() {
  return (
    <div className="container-fluid container-ethmex-event about-ethmex text-center">
      <span
        className="text-event-title d-block mb-4 text-center"
        style={{ color: "white", fontSize: "35px" }}
      >
        EQUIPO ORGANIZADOR
      </span>

      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              className="col-3 col-md-2 mb-4"
              key={index}
            >
              <div className="team-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${member.image}`}
                  className="d-block img-fluid mx-auto mt-4"
                  alt={member.name}
                  
                />
                <div className="team-item-text mt-1">
                  <p className="text-event-white">{member.name}</p>
                  <a
                    className="text-event-white" 
                    
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
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

export default TeamEvento;
