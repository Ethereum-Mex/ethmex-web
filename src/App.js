import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Carrusel from './components/Carrusel/Carrusel.js';
import Navbar from './components/Navbar/Navbar.js';
import QuienesSomos from './components/QuienesSomos/QuienesSomos.js';
import NuestrosValores from './components/NuestrosValores/NuestrosValores.js';
import QueHacemos from './components/QueHacemos/QueHacemos.js';
import NuestrosLogros from './components/NuestrosLogros/NuestrosLogros.js';
import ConfianNosotros from './components/ConfianNosotros/ConfianNosotros.js';
import Eventos from './components/Eventos/Eventos.js';
import Transparencia from './components/Transparencia/Transparencia.js';
import Faq from './components/FAQ/Faq.js';
//import Contactanos from './components/Contactanos/Contactanos.js';
import Footer from './components/Footer/Footer.js';
import Feedback from "./components/Feedback/Feedback.js";
import NotFound from "./components/NotFound/NotFound.js";
import NavbarEvent from "./components/NavbarEvent/NavbarEvent.js";
import ETHMX2025 from "./components/ETHMX2025/ETHMX2025.js";
import WhiteHacker from "./components/WhiteHacker/WhiteHacker.js";
import AboutEthMexEvent from "./components/AboutEthMexEvent/AboutEthMexEvent.js";
import Esperar from "./components/Esperar/Esperar.js";
import Razones from "./components/Razones/Razones.js";
import ParteDe from "./components/ParteDe/ParteDe.js";
import Venue from "./components/Venue/Venue.js";
import EdicionesAnteriores from "./components/EdicionesAnteriores/EdicionesAnteriores.js";
import TeamEvento from "./components/TeamEvento/TeamEvento.js";
import FAQEvento from "./components/FAQEvento/FAQEvento.js";
import FooterEvent from "./components/FooterEvent/FooterEvent.js";
import CalendarioEventos from "./components/CalendarioEventos/CalendarioEventos.js"
import CalendarioRoadTo from "./components/CalendarioRoadTo/CalendarioRoadTo.js";
import CTARegistro from "./components/CTARegistro/CTARegistro.js"
import GraciasA from "./components/GraciasA/GraciasA.js"
import Speakers from "./components/Speakers/Speakers.js"
import Sponsors from "./components/Sponsors/Sponsors.js";
import StrategicPartners from "./components/StrategicPartners/StrategicPartners.js";
import MediaPartners from "./components/MediaPartners/MediaPartners.js";
import ComPartners from "./components/ComPartners/ComPartners.js";
import EcosystemPartner from "./components/EcosystemPartner/EcosystemPartner.js";


function App() {
  return (
    <>
    <Router> 
      <Routes> 
          <Route path="/" element={
            <div>
              <div className="container-fluid hero-ethmex overflow-hidden">
                <Navbar />
                <Carrusel />
              </div>
              <QuienesSomos />
              <NuestrosValores />
              <QueHacemos />
              <NuestrosLogros />
              <ConfianNosotros />
              <Eventos />
              <Transparencia />
              <Faq />
              {/* <Contactanos /> */}
              <div className="container-fluid hero-footer-ethmex ">
                <Footer />
              </div>
            </div>
          } />

          {/* Nueva página */}
          <Route path="/feedback" element={<Feedback />} />
          
          <Route path="/ETHMX2025" element={
            <div>
              <div className="container-fluid hero-ethmex-evento overflow-hidden">
                <NavbarEvent/>
                <ETHMX2025/> 
              </div>
              <WhiteHacker/>
              <AboutEthMexEvent/>
              <Esperar/>
              <CalendarioEventos/>
              <ParteDe/>
              <Razones/>
              {/* <Venue/> */}
             
              <CTARegistro/>
              <Sponsors/>
              <GraciasA/>
              <Speakers/> 
              
              
              <StrategicPartners/>
              <MediaPartners/>
              <EcosystemPartner/>
              <ComPartners/>
              <CalendarioRoadTo/>
              <EdicionesAnteriores/>
              
              <TeamEvento/>
              <FAQEvento/>
              <FooterEvent/>
            </div>

          } />
          
          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes> 
    </Router>
    </>
  );
}

export default App;
