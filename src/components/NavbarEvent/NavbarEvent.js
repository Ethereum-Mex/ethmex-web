import './NavbarEvent.css';
import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  //{ id: "hackathon", label: "Hackathon" },
  { id: "sobre-ethereum-mexico", label: "Sobre Ethereum México" },
  { id: "calendario", label: "Calendario" },
  { id: "agenda", label: "Agenda" },
  { id: "quiero-ser-parte", label: "Quiero Ser Parte" },
  { id: "Speakers", label: "Speakers" },
  //{ id: "venue", label: "Venue" },
  { id: "road-to-ethmex", label: "Road To" },
  { id: "faq-evento", label: "FAQ" },
  { id: "https://lu.ma/obsm2hll", label: "Tickets", isExternal: true },
];

function NavbarEvent() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`; // Redirigir si no estamos en home
    }
  };

  const handleLinkClick = (link) => {
    if (link.isExternal) {
      window.open(link.id, '_blank');
    } else {
      handleScroll(link.id);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/ETHMX2025">
          <img
            src={`${process.env.PUBLIC_URL}/images/EthMxMty_white.png`}
            alt="Ethereum México Monterrey Logo"
            width="100"
          />
        </Link>
        <button
          className="navbar-toggler btn-toggler-ethmex-event"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-3 mt-2 align-items-center navbar-nav-evento">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="nav-link btn btn-link"
                onClick={() => handleLinkClick(link)}
              >
                {link.label}
              </button>
            ))}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarEvent;
