import './Eventos.css';
import React from 'react';

const eventos = [
  { id: 1, 
    nombre: "Ethereum México 2023", 
    enlace: "https://www.youtube.com/watch?v=4kBLHlW6T00&t=2s" },
  { id: 2, 
    nombre: "Ethereum México 2024",
    enlace: "https://www.youtube.com/watch?v=i3RyCmujgj8&t=4s" },
  { id: 3, 
    nombre: "Ethereum México 2025", 
    enlace: "https://www.youtube.com/watch?v=IpYQd3MsCi4&t=1s" },
  { id: 4, 
    nombre: "Calendario de Eventos", 
    enlace: "https://lu.ma/user/usr-v1zLEl1mRH1H4md" },
  { id: 5, 
    nombre: "Ethereum México 2025", 
    enlace: "https://www.youtube.com/watch?v=IpYQd3MsCi4&t=1s" },
  {
    id: 6,
    nombre: "Reportes de Transparencia",
    enlace: "https://accessible-mitten-7e2.notion.site/Reportes-de-Transparencia-21b6a580104b8090b621ce5899d91707",
  },
];

function Eventos() {
  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center" id="events">
      <h1 className="ethmex-primary-title text-center mb-5">Eventos</h1>

      <div className="container-ethmex-aux mx-auto">
        <div className="row g-4">
          {eventos.map(evento => (
            <div key={evento.id} className="col-12 col-sm-6 col-md-4 text-center">
              <a 
                href={evento.enlace} 
                className="btn btn-evento" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Abrir enlace de ${evento.nombre}`}
              >
                {evento.nombre}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eventos;
