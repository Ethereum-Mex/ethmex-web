import './Navbar.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [

  { id: "quienes-somos", label: "Quiénes Somos" },
  { id: "que-hacemos", label: "Qué Hacemos" },
  { id: "eventos", label: "Eventos" },
  { id: "transparencia", label: "Transparencia" },
  { id: "faq", label: "FAQ" },
];

function Navbar() {
  const location = useLocation();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`; // Redirigir si no estamos en home
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-ethmex">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/EthMX_ColorFull.png`}
            alt="Ethereum México Logo"
            width="120"
          />
        </Link>
        <button
          className="navbar-toggler btn-toggler-ethmex"
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
          <div className="navbar-nav ms-auto gap-1 align-items-center">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                className="nav-link btn btn-link"
                onClick={() => handleScroll(id)}
              >
                {label}
              </button>
            ))}
            {/* Enlace externo a Feedback */}
            <Link key="feedback" className="nav-link" to="/feedback" target="_blank" rel="noopener noreferrer">
              Feedback
            </Link>
            
            {/* Enlace externo a Tally */}
            
            <Link key="ETHMX2025" className="nav-link" to="/ETHMX2025" target="_blank" rel="noopener noreferrer">
              ETHMX 2025
            </Link>
            
            {/* Enlace externo a Telegram */}
            <a className="nav-link" href="https://t.me/ethmexico" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-navbar">Únete a la comunidad</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
