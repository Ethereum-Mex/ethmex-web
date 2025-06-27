import './FAQEvento.css';
import React from 'react';

const faqs = [
  {
    id: "One",
    question: "¿Qué es Ethereum?",
    answer: `Ethereum es una red descentralizada que permite crear y usar aplicaciones, organizaciones y activos digitales sin depender de una autoridad central. Puedes crear una cuenta, explorar aplicaciones o construir las tuyas propias, todo sin restricciones externas.`,
    show: true,
  },
  {
    id: "Two",
    question: "¿Qué es Ethereum México?",
    answer: `Ethereum México es una organización comprometida con el fortalecimiento del ecosistema Ethereum en el país a través de eventos anuales, iniciativas educativas y el desarrollo de recursos accesibles para la comunidad.

    Nos enfocamos en crear espacios de aprendizaje e innovación en colaboración con organizaciones nacionales e internacionales. Buscamos ser una plataforma que impulse un evento anual, promueva la educación y brinde apoyo y recursos a la comunidad.`,
  },
  {
    id: "Three",
    question: "¿Qué es ETH México?",
    answer: `ETH México es una de las iniciativas de Ethereum México, un evento anual que promueve el aprendizaje, la construcción y la colaboración en torno al ecosistema Ethereum en México.`,
  },
  {
    id: "Four",
    question: "¿Quién puede participar?",
    answer: `Desde desarrolladores hasta diseñadores, marketeros, artistas y estudiantes. Si tienes curiosidad por la tecnología Blockchain, web3 y el mundo descentralizado, este espacio es para ti.`,
  },
  {
    id: "Five",
    question: "¿Necesito experiencia en Web3?",
    answer: `¡No! Si vienes del mundo Web2, aquí encontrarás los recursos y mentores para dar el salto a Web3.`,
  },
];

function FAQEvento() {
  return (
    <div className="container-fluid container-ethmex-event text-center">
      {/* Título principal */}
      <div className="mb-4">
        <span className="text-event-title" style={{ color: "#358541", fontSize: "35px" }}>
          PREGUNTAS&nbsp;
        </span>
        <span className="text-event-title" style={{ color: "#D73535", fontSize: "35px" }}>
          FRECUENTES (FAQ)
        </span>
      </div>

      <div className="accordion" id="accordionPanelsStayOpenExample" style={{maxWidth: "950px"}}>
        {faqs.map(({ id, question, answer, show = false }, index) => (
          <div className="accordion-item-event mb-3 text-center text-lg-start" key={id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button accordion-button-event text-event-green ${!show ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapse${id}`}
                aria-expanded={show ? 'true' : 'false'}
                aria-controls={`panelsStayOpen-collapse${id}`}
              >
                {question}
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse${id}`}
              className={`accordion-collapse collapse ${show ? 'show' : ''}`}
            >
              <div className="accordion-body">
                <p className="text-event" style={{ whiteSpace: 'pre-line', fontSize: '14px' }}>
                  {answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQEvento;
