import './FooterEvent.css';
import React, { useState, useEffect } from 'react';

function FooterEvent() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer-ethmex-event">
      {/* Contenedor principal del footer */}
      <div className="p-3  footer-container ">
        <div className="d-flex align-items-center justify-content-center flex-wrap mx-auto">
          {/* Logo a la izquierda */}
          <div className="footer-logo mx-auto">
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/ethmex-logo-black.png`}
                alt="Ethereum México"
                width="100"
              />
            </a>
          </div>

          {/* Iconos sociales alineados a la derecha */}
          <div className="d-flex gap-3 footer-icons ms-auto mt-4 mt-sm-0 mx-auto ">
            {[
              { href: "https://x.com/ethereum_mexico", src: "x-icon.svg", alt: "X" },
              { href: "https://t.me/ethmexico", src: "telegram-icon.svg", alt: "Telegram" },
              { href: "https://www.linkedin.com/company/ethereum-mexico-comunidad/", src: "linkedin-icon.svg", alt: "LinkedIn" },
              { href: "https://www.youtube.com/@ethereummexico", src: "youtube-icon.svg", alt: "YouTube" },
              { href: "https://www.instagram.com/ethereum_mexico/", src: "ig-icon.svg", alt: "Instagram" },
            ].map((icon, index) => (
              <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${icon.src}`}
                  alt={icon.alt}
                  width="25"
                  height="25"
                  className="social-icon"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Botón volver al inicio */}
        {showButton && (
          <div className="text-center mt-3">
            <button
              type="button"
              className="btn btn-footer d-none d-md-inline-block"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Volver al inicio
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}

export default FooterEvent;
