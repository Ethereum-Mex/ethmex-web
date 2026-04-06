import "../NavbarEvent2025/NavbarEvent2025.css";
import "./NavbarEvent2026.css";
import { Link } from "react-router-dom";

const navLinks = [
  { id: "hero-ethmx2026", label: "Inicio" },
  { id: "que-es-ethmx2026", label: "¿Qué es?" },
];

function NavbarEvent2026() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/ETHMX2026">
          <img
            src={`${process.env.PUBLIC_URL}/images/ethmx26-logo.png`}
            alt="Ethereum México 2026"
            className="navbar-brand-ethmx26-logo"
          />
        </Link>
        <button
          className="navbar-toggler btn-toggler-ethmex-event"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavEthmx2026"
          aria-controls="navbarNavEthmx2026"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavEthmx2026">
          <div className="navbar-nav ms-auto gap-3 mt-2 align-items-center navbar-nav-evento">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className="nav-link btn btn-link"
                onClick={() => handleScroll(link.id)}
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

export default NavbarEvent2026;
