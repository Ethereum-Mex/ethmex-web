import './Transparencia.css';
import React from 'react';
import { Link } from 'react-router-dom';

const reportes = [
  { id: 1, nombre: "Reporte Anual 2023 ", enlace: "https://docs.google.com/spreadsheets/d/1XvXDg-pFXg1QulzYTvsLwUKILRdR1rK6KkBJFdPn8u8/edit?usp=sharing" },
  { id: 2, nombre: "Reporte Evento 2023", enlace: "https://docs.google.com/spreadsheets/d/1dwU5ZkSHSKdegO4DWGsRz0XWcYsqBN3hX1V-vhhTkcY/edit?usp=sharing" },
  { id: 3, nombre: "Reporte Q1 2024", enlace: "https://www.notion.so/Ethereum-M-xico-Reporte-Q1-2024-21b6a580104b8083b886d7975945c110" },
  { id: 4, nombre: "Reporte Q2 2024", enlace: "https://www.notion.so/Ethereum-M-xico-Reporte-Q2-2024-21b6a580104b80f6b43dc56b68d67f61" },
  { id: 5, nombre: "Reporte Q3 2024 | Evento", enlace: "https://drive.google.com/file/d/1aLiOA9nQPm3naVHFmavpQNyEWI_GuDWp/view" },
  { id: 6, nombre: "Reporte Q4 2024 ", enlace: "https://www.notion.so/Ethereum-M-xico-Reporte-Q4-2024-21b6a580104b80d99a35c6b3530c866c" },
  { id: 7, nombre: "Reporte Q1 2025 ", enlace: "https://docs.google.com/document/d/1s_jkJM2gs2iyCUkt06qM1ZdV-wSvHuSQbettbRgTB5M/edit?tab=t.0" },
  { id: 7, nombre: "Reporte Q1 2025 ", enlace: "https://docs.google.com/document/d/1XinwnHAuLDz4C_xGHBRPvGLw-1oEH3fLUGi3DX7V_cM/edit?usp=sharing" },
  { id: 8, nombre: "Comparte tu Feedback", enlace: "/feedback" },
   
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
