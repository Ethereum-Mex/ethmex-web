import "./ETHMX2026.css";

export function ETHMX2026HeroContent() {
  return (
    <div className="ETHMX2026-hero-inner container px-3 text-center">
      <h1 className="ethmx2026-hero-title mb-0">
        <div className="d-flex flex-column align-items-center mb-3">
          <div className="ethmx2026-partner-logos">
            <img
              src={`${process.env.PUBLIC_URL}/images/ethmx-logo-white.svg`}
              className="ethmx2026-partner-logo"
              alt="Ethereum México"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/bitso-business-white.svg`}
              className="ethmx2026-partner-logo"
              alt="Bitso Business"
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/ethmx26-logo.png`}
            className="ethmx2026-logo-img mt-2"
            alt="Ethereum México 2026"
            width="700"
          />
        </div>
        <span className="ethmx2026-tagline d-inline-block">
          HYBRID HACKATHON
        </span>
        <span className="ethmx2026-track-line d-block">
          For hackers and startups
        </span>
        <span className="ethmx2026-badge-row d-inline-block">
          AI + Payments + Blockchain
        </span>
      </h1>

      <div className="ethmx2026-meta px-2 mt-3">
        <span className="ethmx2026-meta-item">
          <span> 📍 Mexico City </span>
        </span>
        <span className="ethmx2026-meta-item">
          <span> 📅 June 12, 2026</span>
        </span>
        <span className="ethmx2026-meta-item">
          <span>
            🌐 Global Online Hackathon + IRL Builder Sessions + Networking
            Conference
          </span>
        </span>
      </div>

      <div className="ethmx2026-ctas">
        <a
          className="ethmx2026-btn-hackathon"
          href="https://tally.so/r/PdALz1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply to Hackathon
        </a>
        <a
          className="ethmx2026-btn-light"
          href="https://docs.google.com/presentation/d/1LcIhAQdpLkczcBzh4-ZCIbq3dRjo8qeD/edit?usp=sharing&ouid=114310261720515721669&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsor Main Event
        </a>
      </div>
    </div>
  );
}
