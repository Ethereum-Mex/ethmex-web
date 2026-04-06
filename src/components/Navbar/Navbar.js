import "./Navbar.css";
import { Link } from "react-router-dom";

const navLinks = [
  { id: "quienes-somos", label: "Quiénes Somos" },
  { id: "events", label: "Eventos" },
  { id: "que-hacemos", label: "Qué Hacemos" },
  { id: "en-los-medios", label: "En los medios" },
  { id: "faq", label: "FAQ" },
];

function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-1 align-items-center">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className="nav-link btn btn-link"
                onClick={() => handleScroll(id)}
              >
                {label}
              </button>
            ))}
            <Link
              className="nav-link"
              to="/feedback"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback
            </Link>
            <Link
              className="nav-link btn-ethmx-2025"
              to="/ETHMX2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ethereum México 2026
            </Link>
            <a
              className="nav-link"
              href="https://t.me/ethmexico"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-navbar">
                Únete a la comunidad
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
