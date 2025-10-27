import React, { useState } from "react";
import "./Agenda.css";

const agendaData = {
  day1: {
    conferencias: [
      {
        title: "Acreditaciones & Acceso",
        speaker: "",
        hour: "10:00 - 11:00"
      },
      {
        title: "Opening Ceremony - Day 1",
        speaker: "Estado de Nuevo León & Ethereum México Team",
        hour: "11:00 - 11:30"
      },
      {
        title: "PANEL: Por qué Cripto, Blockchain y la Descentralización Importan",
        speaker: "David - Arbitrum FDNT, Yedid - Her DAO Mexico, Aime Figeroa - Licenciada en  Relaciones Internacionales, Liz Durán - Eth México",
        hour: "11:40 - 12:20"
      },
      {
        title: "PANEL: Confianza en la Blockchain: Salud, Dinero y Datos en la Era Descentralizada",
        speaker: "MaFer - MicrobiomeDAO, Alberto Franco - BWC, Carlos Serna - Gobierno del Estado de NL, Julio Flores - PatrimoXYZ",
        hour: "12:30 - 13:10"
      },
      {
        title: "PANEL: Instituciones Onchain: El Próximo Capítulo de las Finanzas en México",
        speaker: "Javier Murga - Transformación de Activos Digitales, Ale RaMo - Wavy Node, Humberto Besso - Local Nodal de Scroll, Mauricio Cruz - Eth México" ,
        hour: "13:20 - 14:00"
      },
      {
        title: "Cripto-Revolución: El Futuro de la Economía Descentralizada",
        speaker: "Carlos Ocampo - TEDx Speaker",
        hour: "14:10 - 14:35"
      },
      {
        title: "BREAK / LUNCHTIME",
        speaker: "",
        hour: "14:35 - 15:35"
      },
      {
        title: "PANEL: Designing Trust: Exchanges, Wallets & the Future of Everyday Crypto",
        speaker: "Brian Smocovich - Pistachio, Andres Salcedo - Etherfuse, Zeymer Montes - Moca App, Rafa Canseco - Odisea",
        hour: "15:35 - 16:15"
      },
      {
        title: "ARBITRUM Keynote: Expanding Arbitrum Across Mexico and Latin America",
        speaker: "Joao Kury - Arbitrum Foundation",
        hour: "16:25	- 16:50"
      },
      {
        title: "Keynote: Cómo conseguir los primeros 100 usuarios de tu protocolo",
        speaker: "Diego Tenorio - Fundamento",
        hour: "17:00 - 17:25"
      },
      {
        title: "Performance inmersiva en vivo",
        speaker: "Creatress",
        hour: "18:00	- 18:35"
      }
    ],
    hackathon: [
      {
        title: "Presentación Hackathon",
        hour: "18:00 - 19:00",
        speaker: "Mitch & Erezedor"
      },
      {
        title: "Team formation & project ideation",
        hour: "19:00 - 20:00",
        speaker: "Mitch"
      },
      {
        title: "Hacking Time!",
        hour: "19:00 - 23:59",
        speaker: ""
      },
      

    
    ]
  },
  day2: {
    conferencias: [
      {
        title: "Acreditaciones & Acceso",
        speaker: "",
        hour: "10:00 - 11:00"
      },
      {
        title: "Opening Ceremony - Day 2",
        speaker: "Ethereum México Team & ETH Monterrey Team",
        hour: "11:00 - 11:30"
      },
      {
        title: "Debate: Bitcoin vs Ethereum",
        speaker: "Don Pepe - Eth México, Adrian Trevino - Bitcoin Network Monterrey, Rafael - Stacks, Ana Belén - Eth México",
        hour: "11:40 - 12:05"
      },
      {
        title: "ETHERFUSE: Finanzas 3.0",
        speaker: "Andy - Etherfuse",
        hour: "12:15	- 12:40"
      },
      {
        title: "Fireside - Identidad Descentralizada en Acción: El Caso de Nuevo León con Sovra",
        speaker: "Emmanuel Loo - Gobierno del Estado de NL,Chuy Cepeda - Sovra, Mariela Saldivar - Gobierno NL, JuanRah - SEEDGov",
        hour: "12:50	- 13:15"
      },
      {
        title: "PANEL: The Inclusion Imperative: Unbanked to Onchain",
        speaker: "Saswat Sahu - Talisis, Etienne Luquet - Tools for Humanity, Almond - Base, Abraham - Espacio Cripto",
        hour: "13:25 - 14:05"
      },
      {
        title: "BREAK / LUNCHTIME",
        speaker: "",
        hour: "14:05 - 15:05"
      },
      {
        title: "Keynote: El futuro corre sobre Scroll: innovación, pagos y la nueva generación de la economía abierta",
        speaker: "Gabriella Mena - Scroll",
        hour: "15:05 - 15:30"
      },
      {
        title: "Keynote: De Idea a Impacto Onchain: Escala con Base",
        speaker: "Almond - Base",
        hour: "15:40	- 16:05"
      },
      {
        title: "Arquitectura de Confianza: Ethereum y el Futuro de la Seguridad",
        speaker: "Paul Cortés - Hiv3",
        hour: "16:15 - 16:40"
      },
      {
        title: "The Role of Stablecoins and DeFi in Value Creation across the Ethereum Ecosystem",
        speaker: "Rine Dunia - CW3, Alan Kantapin - CW3",
        hour: "16:50	17:15"
      },
      {
        title: "Mercados abiertos, acceso global: el papel de las DEX en la transformación financiera",
        speaker: "Anthony Chávez - Uniswap Labs",
        hour: "17:25	- 17:50"
      }
    ],
    hackathon: [
      {
        title: "El camino del VibeCoder: Universitarios en Web3",
        hour: "09:00 - 10:00",
        speaker: "Gerardo Vela - Cripto UNAM"
      },
      {
        title: "Resolviendo PPU's (P**#*$s Problemas Urgentes)",
        hour: "10:00 - 11:00",
        speaker: "Karina Córdova - Irrazonables"
      },
      {
        title: "Workshop: Scroll",
        hour: "11:00 - 12:00",
        speaker: "Irwing Tello"
      },
      {
        title: "Desarrolla tu propio protocolo DeFi con Uniswap V4 Hooks",
        hour: "12:00 - 13:00",
        speaker: "Constantino Mora - Uniswap Foundation"
      },
      {
        title: "Como pitchear tu proyecto en el hackathon",
        hour: "13:00 - 14:00",
        speaker: "Israel Cortes - Omma Cash"
      },
      {
        title: "Arbitrum - Stylus",
        hour: "14:00 - 15:00",
        speaker: "Erezedor - Eth México"
      },
      {
        title: "Identidad Web3, ENS y L2: Taller para Hackers",
        hour: "15:30 - 17:00",
        speaker: "Scarf"
      },
      {
        title: "Marketing auténtico: captar atención en Web3",
        hour: "17:00 - 18:00",
        speaker: "Scarf"
      }
      

    ]
  },
  day3: {
    conferencias: [
      {}
    ],
    hackathon: [
      {
        title: "Submission Deadline",
        hour: "08:00",
        speaker: ""
      },
      {
        title: "Submission Pitches",
        hour: "8:00 - 9:15",
        speaker: ""
      },
      {
        title: "Evaluación de proyectos",
        hour: "9:15 - 12:00",
        speaker: ""
      },
      {
        title: "Deliberar ganadores",
        hour: "12:00 - 13:00",
        speaker: ""
      },
      {
        title: "Closing Ceremony and Winners Announcement",
        hour: "13:00 - 14:30",
        speaker: ""
      },
    ]
  }
};

function Agenda() {
  const [activeTab, setActiveTab] = useState('day1');

  // Función para calcular duración en minutos
  const calculateDuration = (timeString) => {
    // Si no hay timeString o está vacío, retornar 0
    if (!timeString || timeString.trim() === '') {
      return 0;
    }
    
    // Si no tiene formato de rango (HH:MM - HH:MM), retornar 0
    if (!timeString.includes(' - ')) {
      return 0;
    }
    
    const [start, end] = timeString.split(' - ');
    
    // Si no se puede parsear, retornar 0
    if (!start || !end) {
      return 0;
    }
    
    const startTime = new Date(`2000-01-01 ${start}`);
    const endTime = new Date(`2000-01-01 ${end}`);
    return (endTime - startTime) / (1000 * 60); // duración en minutos
  };

  // Función para formatear duración
  const formatDuration = (minutes) => {
    if (minutes === 0) return '';
    if (minutes < 60) return `${minutes}min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) return `${hours}h`;
    return `${hours}h ${remainingMinutes}min`;
  };

  // Función para calcular altura proporcional basada en duración
  const calculateHeight = (timeString) => {
    const duration = calculateDuration(timeString);
    
    // Si no hay duración, usar altura mínima
    if (duration === 0) {
      return 150;
    }
    
    const minHeight = 150;
    const maxHeight = 500;
    const minDuration = 15;
    const maxDuration = 120;
    
    const ratio = Math.min((duration - minDuration) / (maxDuration - minDuration), 1);
    return Math.max(minHeight + (ratio * (maxHeight - minHeight)), minHeight);
  };

  const renderAgendaTable = (dayData, isDay3 = false) => {
    return (
      <div className="unified-agenda-container" id="Agenda">
        <div className="agenda-grid">
          {/* Columna de Charlas - Solo para Día 1 y 2 */}
          {!isDay3 && (
            <div className="sede-column charlas-column">
              <div className="sede-header">
                <h3 className="sede-title">🎤 CONFERENCIAS</h3>
                <p className="venue-info">📍 Hotel Krystal Monterrey</p>
              </div>
              <div className="sede-activities">
                {dayData.conferencias.map((activity, index) => {
                  const height = calculateHeight(activity.hour);
                  const duration = calculateDuration(activity.hour);
                  const formattedDuration = formatDuration(duration);
                  
                  return (
                    <div 
                      key={index}
                      className="activity-card ponencia-card"
                      style={{ height: `${height}px` }}
                    >
                      <div className="card-header">
                        <span className="activity-time">{activity.hour}</span>
                        {formattedDuration && (
                          <span className="activity-duration">{formattedDuration}</span>
                        )}
                      </div>
                      <div className="card-body">
                        <h4 className="activity-title">{activity.title}</h4>
                        {activity.speaker && (
                          <p className="activity-speaker">{activity.speaker}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Columna de Hackathon */}
          <div className="sede-column hackathon-column">
            <div className="sede-header">
              <h3 className="sede-title">💻 HACKATHON</h3>
              <p className="venue-info">📍 Museo Metropolitano</p>
            </div>
            <div className="sede-activities">
              {dayData.hackathon.map((activity, index) => {
                const height = calculateHeight(activity.hour);
                const duration = calculateDuration(activity.hour);
                const formattedDuration = formatDuration(duration);
                
                return (
                  <div 
                    key={index}
                    className="activity-card hackathon-card"
                    style={{ height: `${height}px` }}
                  >
                    <div className="card-header">
                      <span className="activity-time">{activity.hour}</span>
                      {formattedDuration && (
                        <span className="activity-duration">{formattedDuration}</span>
                      )}
                    </div>
                    <div className="card-body">
                      <h4 className="activity-title">{activity.title}</h4>
                      {activity.speaker && (
                        <p className="activity-speaker">{activity.speaker}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="container-fluid container-ethmex-event text-center"
      id="agenda"
    >
      <span
        className="text-event-title d-block mb-4 text-center"
        style={{ color: "#D73535", fontSize: "35px" }}
      >
        AGENDA - CONFERENCIAS & HACKATHON
      </span>

      <div className="container">
        {/* Description */}
        <div className="agenda-description mb-4">
          <p className="text-event">
            <i>Horarios aún en progreso</i>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="agenda-tabs">
          <button
            className={`agenda-tab ${activeTab === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveTab('day1')}
          >
            Día 1
          </button>
          <button
            className={`agenda-tab ${activeTab === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveTab('day2')}
          >
            Día 2
          </button>
          <button
            className={`agenda-tab ${activeTab === 'day3' ? 'active' : ''}`}
            onClick={() => setActiveTab('day3')}
          >
            Día 3
          </button>
        </div>

        {/* Tab Content */}
        <div className="agenda-tab-content">
          {activeTab === 'day1' && renderAgendaTable(agendaData.day1, false)}
          {activeTab === 'day2' && renderAgendaTable(agendaData.day2, false)}
          {activeTab === 'day3' && renderAgendaTable(agendaData.day3, true)}
        </div>
      </div>
    </div>
  );
}

export default Agenda;