import './Eventos.css';
import React from 'react';

const eventos = [
  { id: 1, nombre: "Ethereum México 2023", enlace: "https://www.youtube.com/watch?v=4kBLHlW6T00&t=2s" },
  { id: 2, nombre: "Ethereum México 2024", enlace: "https://www.youtube.com/watch?v=i3RyCmujgj8&t=4s" },
  { id: 3, nombre: "Calendario de Eventos", enlace: "https://lu.ma/user/usr-v1zLEl1mRH1H4md" },
  { id: 3, nombre: "Ethereum México 2025", enlace: "https://ethmexico.org/#/ETHMX2025" }
];

function Eventos() {
  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center" id="eventos">
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
