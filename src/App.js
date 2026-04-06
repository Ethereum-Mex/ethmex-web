import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Carrusel from "./components/Carrusel/Carrusel.js";
import Navbar from "./components/Navbar/Navbar.js";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos.js";
import SideEvents from "./components/SideEvents/SideEvents.js";
import NuestrosValores from "./components/NuestrosValores/NuestrosValores.js";
import QueHacemos from "./components/QueHacemos/QueHacemos.js";
import NuestrosLogros from "./components/NuestrosLogros/NuestrosLogros.js";
import ConfianNosotros from "./components/ConfianNosotros/ConfianNosotros.js";
import Eventos from "./components/Eventos/Eventos.js";
import EnLosMedios from "./components/EnLosMedios/EnLosMedios.js";
import Faq from "./components/FAQ/Faq.js";
import Footer from "./components/Footer/Footer.js";
import Feedback from "./components/Feedback/Feedback.js";
import NotFound from "./components/NotFound/NotFound.js";
import NavbarEvent2025 from "./components/NavbarEvent2025/NavbarEvent2025.js";
import ETHMX2025 from "./components/ETHMX2025/ETHMX2025.js";
import ETHMX2026 from "./components/ETHMX2026/ETHMX2026.js";
import Ethmx2026Seo from "./components/ETHMX2026/Ethmx2026Seo.js";
import ETHMX2026QueEs from "./components/ETHMX2026QueEs/ETHMX2026QueEs.js";
import ETHMX2026FormatoHibrido from "./components/ETHMX2026FormatoHibrido/ETHMX2026FormatoHibrido.js";
import ETHMX2026PorQueMexico from "./components/ETHMX2026PorQueMexico/ETHMX2026PorQueMexico.js";
import ETHMX2026BuildingSince2022 from "./components/ETHMX2026BuildingSince2022/ETHMX2026BuildingSince2022.js";
import ETHMX2026QuieroSerParte from "./components/ETHMX2026QuieroSerParte/ETHMX2026QuieroSerParte.js";
import ETHMX2026Faq from "./components/ETHMX2026Faq/ETHMX2026Faq.js";
import AboutEthMexEvent from "./components/AboutEthMexEvent/AboutEthMexEvent.js";
import Esperar from "./components/Esperar/Esperar.js";
import Razones from "./components/Razones/Razones.js";
import ParteDe from "./components/ParteDe/ParteDe.js";
import EdicionesAnteriores from "./components/EdicionesAnteriores/EdicionesAnteriores.js";
import TeamEvento from "./components/TeamEvento/TeamEvento.js";
import FAQEvento from "./components/FAQEvento/FAQEvento.js";
import FooterEvent from "./components/FooterEvent/FooterEvent.js";
import CalendarioEventos from "./components/CalendarioEventos/CalendarioEventos.js";
import CalendarioRoadTo from "./components/CalendarioRoadTo/CalendarioRoadTo.js";
import CTARegistro from "./components/CTARegistro/CTARegistro.js";
import GraciasA from "./components/GraciasA/GraciasA.js";
import Speakers from "./components/Speakers/Speakers.js";
import Sponsors from "./components/Sponsors/Sponsors.js";
import StrategicPartners from "./components/StrategicPartners/StrategicPartners.js";
import MediaPartners from "./components/MediaPartners/MediaPartners.js";
import ComPartners from "./components/ComPartners/ComPartners.js";
import EcosystemPartner from "./components/EcosystemPartner/EcosystemPartner.js";
import Agenda from "./components/Agenda/Agenda.js";
import GraciasAsistentes from "./components/GraciasAsistentes/GraciasAsistentes.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="container-fluid hero-ethmex overflow-hidden">
                  <Navbar />
                  <Carrusel />
                </div>
                <QuienesSomos />
                <NuestrosValores />
                <QueHacemos />
                <Eventos />
                <EnLosMedios />
                <NuestrosLogros />
                <ConfianNosotros />
                <SideEvents />
                <Faq />
                <div className="container-fluid hero-footer-ethmex ">
                  <Footer />
                </div>
              </div>
            }
          />

          <Route path="/feedback" element={<Feedback />} />

          <Route
            path="/ETHMX2025"
            element={
              <div>
                <div className="container-fluid hero-ethmex-evento overflow-hidden">
                  <NavbarEvent2025 />
                  <ETHMX2025 />
                </div>
                <GraciasAsistentes />
                <AboutEthMexEvent />
                <Esperar />
                <CalendarioEventos />
                <Agenda />
                <ParteDe />
                <Razones />
                <CTARegistro />
                <Sponsors />
                <GraciasA />
                <Speakers />
                <StrategicPartners />
                <MediaPartners />
                <EcosystemPartner />
                <ComPartners />
                <CalendarioRoadTo />
                <EdicionesAnteriores />
                <TeamEvento />
                <FAQEvento />
                <FooterEvent />
              </div>
            }
          />

          <Route
            path="/ETHMX2026"
            element={
              <div className="ethmx26-page-stack">
                <Ethmx2026Seo />
                <div className="ethmx26-page-stack-hero-marquee">
                  <div className="hero-ethmx2026-shell overflow-hidden">
                    <ETHMX2026 />
                  </div>
                  <ETHMX2026QueEs />
                </div>
                <ETHMX2026FormatoHibrido />
                <ETHMX2026PorQueMexico />
                <ETHMX2026BuildingSince2022 />
                <ETHMX2026QuieroSerParte />
                <ETHMX2026Faq />
              </div>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
