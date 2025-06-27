import './NavbarEvent.css';
import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [

  { id: "ethereum-mexico", label: "Sobre Ethereum México" },
  { id: "venue", label: "Venue" },
  { id: "faq", label: "FAQ" },
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

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
          <div className="navbar-nav ms-auto gap-4 align-items-center navbar-nav-evento">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                className="nav-link btn btn-link"
                onClick={() => handleScroll(id)}
              >
                {label}
              </button>
            ))}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarEvent;
