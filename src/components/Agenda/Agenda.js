import React, { useState } from "react";
import "./Agenda.css";

const agendaData = {
  day1: [
    {
      ponencia: "Acreditaciones & Acceso",
      speaker: "",
      hour: "10:00 - 11:00",
      day: "Day 1"
    },
    {
      ponencia: "Opening Ceremony - Day 1",
      speaker: "Estado de Nuevo León & Ethereum México Team",
      hour: "11:00 - 11:30",
      day: "Day 1"
    },
    {
      ponencia: "PANEL: Why Decentralization Matters",
      speaker: "TBD",
      hour: "11:40 - 12:20",
      day: "Day 1"
    },
    {
      ponencia: "PANEL: Confianza en la Blockchain: Salud, Dinero y Datos en la Era Descentralizada",
      speaker: "TBD",
      hour: "12:30 - 13:10",
      day: "Day 1"
    },
    {
      ponencia: "PANEL: Instituciones Onchain: El Próximo Capítulo de las Finanzas en México",
      speaker: "TBD",
      hour: "13:20 - 14:00",
      day: "Day 1"
    },
    {
      ponencia: "Cripto-Revolución: El Futuro de la Economía Descentralizada",
      speaker: "TBD",
      hour: "14:10 - 14:35",
      day: "Day 1"
    },
    {
      ponencia: "BREAK / LUNCHTIME",
      speaker: "TBD",
      hour: "14:35 - 15:35",
      day: "Day 1"
    },
    {
      ponencia: "PANEL: From Onramps to Ownership: Exchanges & Wallets in LATAM",
      speaker: "TBD",
      hour: "15:35 - 16:15",
      day: "Day 1"
    },
    {
      ponencia: "Keynote",
      speaker: "TBD",
      hour: "16:25 - 16:50",
      day: "Day 1"
    },
    {
      ponencia: "Keynote",
      speaker: "TBD",
      hour: "17:00 - 17:25",
      day: "Day 1"
    },
    {
      ponencia: "Keynote",
      speaker: "TBD",
      hour: "17:35 - 18:00",
      day: "Day 1"
    }
  ],
  day2: [
    {
      ponencia: "Acreditaciones & Acceso",
      speaker: "",
      hour: "10:00 - 11:00",
      day: "Day 2"
    },
    {
      ponencia: "Opening Ceremony - Day 2",
      speaker: "Ethereum México Team & ETH Monterrey Team",
      hour: "11:00 - 11:30",
      day: "Day 1"
    },
    {
      ponencia: "Debate: Bitcoin vs Ethereum",
      speaker: "TBD",
      hour: "11:40 - 12:05",
      day: "Day 2"
    },
    {
      ponencia: "Security",
      speaker: "TBD",
      hour: "12:15 - 12:40",
      day: "Day 2"
    },
    {
      ponencia: "Fireside - Identidad Descentralizada en Acción: El Caso de Nuevo León con Sovra",
      speaker: "TBD",
      hour: "12:50 - 13:15",
      day: "Day 2"
    },
    {
      ponencia: "PANEL: The Inclusion Imperative: Unbanked to Onchain",
      speaker: "TBD",
      hour: "13:25 - 14:05",
      day: "Day 2"
    },
    {
      ponencia: "BREAK / LUNCHTIME",
      speaker: "TBD",
      hour: "14:05 - 15:05",
      day: "Day 1"
    },
    {
      ponencia: "Keynote: El futuro corre sobre Scroll: innovación, pagos y la nueva generación de la economía abierta",
      speaker: "TBD",
      hour: "15:05 - 15:30",
      day: "Day 2"
    },
    {
      ponencia: "Keynote",
      speaker: "TBD",
      hour: "15:40 - 16:05",
      day: "Day 2"
    },
    {
      ponencia: "Finanzas 3.0",
      speaker: "TBD",
      hour: "16:15 - 16:40",
      day: "Day 2"
    },
    {
      ponencia: "The Role of Stablecoins and DeFi in Value Creation across the Ethereum Ecosystem",
      speaker: "TBD",
      hour: "16:50 - 17:15",
      day: "Day 2"
    }
  ]
};

function Agenda() {
  const [activeTab, setActiveTab] = useState('day1');

  const renderAgendaTable = (agenda) => (
    <>

    <div className="agenda-container">
      
      <div className="agenda-header">
        <div className="agenda-header-item">Hour</div>
        <div className="agenda-header-item">Ponencia</div>
        <div className="agenda-header-item">Speaker</div>
      </div>
      {agenda.map((item, index) => (
        <div className="agenda-row" key={index}>
          <div className="agenda-item agenda-hour">
            <span className="text-event">{item.hour}</span>
          </div>
          <div className="agenda-item agenda-ponencia">
            <span className="text-event font-weight-bold">{item.ponencia}</span>
          </div>
          <div className="agenda-item agenda-speaker">
            <span className="text-event">{item.speaker}</span>
          </div>
        </div>
      ))}
    </div>
    </>
  );

  return (
    <div
      className="container-fluid container-ethmex-event text-center"
      id="agenda"
    >
      <span
        className="text-event-title d-block mb-4 text-center"
        style={{ color: "#D73535", fontSize: "35px" }}
      >
        AGENDA - CONFERENCIAS
      </span>

      <div className="container">
        {/* Description */}
        <div className="agenda-description mb-4">
          <p className="text-event">
            <i>Horarios aún por definir</i>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="agenda-tabs">
          <button
            className={`agenda-tab ${activeTab === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveTab('day1')}
          >
            Day 1
          </button>
          <button
            className={`agenda-tab ${activeTab === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveTab('day2')}
          >
            Day 2
          </button>
        </div>

        {/* Tab Content */}
        <div className="agenda-tab-content">
          {activeTab === 'day1' && renderAgendaTable(agendaData.day1)}
          {activeTab === 'day2' && renderAgendaTable(agendaData.day2)}
        </div>
      </div>
    </div>
  );
}

export default Agenda;
