import './NuestrosValores.css';
import React from 'react';

const valores = [
    { id: 'descentralizacion', titulo: 'Descentralización', descripcion: 'Miembros en todo el país, cualquiera puede contribuir y compartir conocimiento sobre Ethereum.' },
    { id: 'inclusion', titulo: 'Equidad e Inclusión', descripcion: 'Creemos en la diversidad de perspectivas y en la importancia de construir una organización accesible para las personas, sin importar su nivel de experiencia, género, ubicación o contexto.' },
    { id: 'educacion', titulo: 'Educación', descripcion: 'Estamos comprometidos con el fortalecimiento del ecosistema Ethereum a través de eventos anuales e iniciativas educativas.' },
    { id: 'innovacion', titulo: 'Innovación', descripcion: 'Nos mantenemos en constante evolución, adaptándonos a los cambios del ecosistema Web3.' },
    { id: 'transparencia', titulo: 'Transparencia', descripcion: 'La transparencia es fundamental en todo lo que hacemos. Los recursos obtenidos se destinan principalmente para crear impacto en la comunidad Web3.' },
    { id: 'comunidad', titulo: 'Comunidad (Infinite Gardeners 🌱)', descripcion: 'Crecemos juntos  e impulsamos a otros a crecer. Nos enfocamos en fomentar un ecosistema descentralizado donde cada persona pueda contribuir, aprender y mejorar continuamente.' }
];

function NuestrosValores() {
    return (
        <div className="container-fluid container-ethmex align-items-center justify-content-center">
            <h1 className="ethmex-primary-title text-center mb-5">Nuestros Valores</h1>
            
            <div className="container-ethmex-aux mx-auto">
                <div className="row g-4">
                    {valores.map(({ id, titulo, descripcion }) => (
                        <div className="col-12 col-md-6 d-flex align-items-start gap-3" key={id}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/${id}-icon.svg`}
                                className="img-fluid valor-icon"
                                alt={`Icono de ${titulo}`}
                                loading="lazy"
                            />
                            <div>
                                <span className="ethmex-primary-subtitle">{titulo}</span>
                                <p className="ethmex-text">{descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NuestrosValores;
