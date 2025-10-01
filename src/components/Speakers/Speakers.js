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
                  />
                </a>
                <div className="team-item-text mt-3">
                  <p className="text-event" style={{ lineHeight: "1.3" }}>
                    {member.name}
                  </p>
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
