import './Transparencia.css';
import React from 'react';
import { Link } from 'react-router-dom';

const reportes = [
  { id: 1, nombre: "Reporte Anual 2023 ", enlace: "https://docs.google.com/spreadsheets/d/1XvXDg-pFXg1QulzYTvsLwUKILRdR1rK6KkBJFdPn8u8/edit?usp=sharing" },
  { id: 2, nombre: "Reporte Evento 2023", enlace: "https://docs.google.com/spreadsheets/d/1dwU5ZkSHSKdegO4DWGsRz0XWcYsqBN3hX1V-vhhTkcY/edit?usp=sharing" },
  { id: 3, nombre: "Reporte Q1 2024", enlace: "https://app.charmverse.io/ethereum-mxico/ethereum-m-xico-reporte-q1-38607541387827093" },
  { id: 4, nombre: "Reporte Q2 2024", enlace: "https://app.charmverse.io/ethereum-mxico/ethereum-m-xico-reporte-q2-571087265739902" },
  { id: 5, nombre: "Reporte Q3 2024 | Evento", enlace: "https://drive.google.com/file/d/1aLiOA9nQPm3naVHFmavpQNyEWI_GuDWp/view" },
  { id: 6, nombre: "Reporte Q4 2024 ", enlace: "https://app.charmverse.io/ethereum-mxico/ethereum-m-xico-reporte-q4-39865205109212476" },
  { id: 7, nombre: "Comparte tu Feedback", enlace: "/feedback" },
   
];

function Transparencia() {
  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center" id="transparencia">
      <h1 className="ethmex-primary-title text-center mb-5">Transparencia</h1>

      <div className="container-ethmex-aux mx-auto">
        <div className="row g-4">
          {reportes.map(reporte => (
            <div key={reporte.id} className="col-12 col-sm-6 col-md-4 text-center">
              <Link 
                to={reporte.enlace} 
                className="btn btn-transparencia" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Abrir enlace de ${reporte.nombre}`}
              >
                {reporte.nombre}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transparencia;
