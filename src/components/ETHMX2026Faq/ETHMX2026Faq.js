import "./ETHMX2026Faq.css";

const ACCORDION_ID = "accordionEthmx26Faq";

const FAQS = [
  {
    id: "web3",
    question: "¿Necesito experiencia en Web3 para participar?",
    answer:
      "No. El hackathon está diseñado para ser accesible. Contarás con workshops técnicos desde cero, mentoría bilingüe y recursos de aprendizaje. Si desarrollas en Web2, eres bienvenido; los perfiles no técnicos también pueden participar.",
  },
  {
    id: "gratis",
    question: "¿El evento es gratuito?",
    answer:
      "El evento principal es gratuito con registro aprobado. El hackathon puede requerir un depósito reembolsable como compromiso de participación. Los detalles se comunicarán en el proceso de aplicación.",
  },
  {
    id: "mexico",
    question: "¿Es solo para participantes de México?",
    answer: 
        "No. Ethereum México 2026 es un hackathon global y bilingüe ( español e inglés).  El hackathon online está abierto a builders de todo el mundo. Las Builder Sessions presenciales son de cupo limitado y están dirigidas a equipos seleccionados del hackathon."
  },
  {
    id: "equipo",
    question: "¿Puedo participar solo o necesito equipo?",
    answer:
      "Puedes aplicar de forma individual o con equipo. En el proceso de onboarding facilitamos la formación de equipos entre participantes sin grupo.",
  },
  {
    id: "presencial",
    question: "¿Dónde son las sesiones presenciales?",
    answer:
      "En las oficinas de Bitso, Ciudad de México. El venue exacto del Main Conference se anunciará próximamente.",
  },
  {
    id: "temas",
    question: "¿Qué temas y tecnologías se trabajan?",
    answer:
      "Stablecoins, pagos digitales, remesas, AI × Blockchain, L2s, Account Abstraction, infraestructura de pagos. Los tracks completos se anunciarán próximamente.",
  },
];

function ETHMX2026Faq() {
  return (
    <section
      className="ethmx26-faq bg-white text-dark"
      id="faq-ethmx2026"
      aria-labelledby="ethmx26-faq-heading"
    >
      <div className="ethmx26-faq-inner container-fluid container-ethmex-event px-3 px-md-4 py-4 py-md-5 mx-auto">
        <header className="text-center mb-4 mb-md-5">
          <h2 id="ethmx26-faq-heading" className="ethmx26-faq-title mb-0">
            Preguntas Frecuentes
          </h2>
        </header>

        <div
          className="accordion ethmx26-faq-accordion mx-auto"
          id={ACCORDION_ID}
        >
          {FAQS.map((item) => {
            const panelId = `ethmx26-faq-${item.id}`;
            return (
              <div className="accordion-item ethmx26-faq-item" key={item.id}>
                <h3 className="accordion-header">
                  <button
                    className="accordion-button ethmx26-faq-trigger collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${panelId}`}
                    aria-expanded="false"
                    aria-controls={panelId}
                  >
                    {item.question}
                  </button>
                </h3>
                <div
                  id={panelId}
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body ethmx26-faq-panel">
                    <p className="ethmx26-faq-answer mb-0">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ETHMX2026Faq;
