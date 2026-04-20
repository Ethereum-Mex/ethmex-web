import { Fragment, useState } from "react";
import "./Agenda.css";
import { agendaData } from "./agendaData.js";

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
                          <p className="activity-speaker">
                            {activity.speaker.split(/<br\s*\/?>/i).map((part, idx, arr) => (
                              <Fragment key={idx}>
                                {part}
                                {idx < arr.length - 1 && <br />}
                              </Fragment>
                            ))}
                          </p>
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
                        <p className="activity-speaker">
                          {activity.speaker.split(/<br\s*\/?>/i).map((part, idx, arr) => (
                            <Fragment key={idx}>
                              {part}
                              {idx < arr.length - 1 && <br />}
                            </Fragment>
                          ))}
                        </p>
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