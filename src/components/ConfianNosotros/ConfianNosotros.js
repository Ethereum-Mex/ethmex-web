import "./ConfianNosotros.css";
import React from "react";

const logos = [
  { src: "esp.svg", alt: "Icono de ESP", width: 150 },
  { src: "ethereum-foundation.svg", alt: "Icono de Ethereum Foundation", width: 170 },
  { src: "geodelabs.png", alt: "Icono de Geode Labs", width: 200 },
  { src: "arbitrum.svg", alt: "Icono de Arbitrum", width: 200 },
  { src: "bitso.svg", alt: "Icono de Bitso", width: 150 },
  { src: "optimism.svg", alt: "Icono de Optimism", width: 170 },
  { src: "Etherfuse_Full-logo_black.png", alt: "Icono de Etherfuse", width: 170 },
  { src: "Base_lockup_2color.svg", alt: "Icono de Base", width: 130 },
  { src: "Scroll_FullLogo.8b9fd528.svg", alt: "Icono de Scroll", width: 160 },
  { src: "UniswapLabs_Horizontal_Pink.svg", alt: "Icono de Uniswap Labs", width: 230 },
  { src: "ledger.svg", alt: "Icono de Ledger", width: 140 },  
  { src: "bitrefill.svg", alt: "Icono de Bitrefill", width: 130 },
  { src: "ens_logo_text_dark.svg", alt: "Icono de ENS", width: 130 },
  { src: "metalogo.svg", alt: "Icono de Metapool", width: 220 },
  { src: "starknet-logo.svg", alt: "Icono de Starknet", width: 180 },
  { src: "obol.svg", alt: "Icono de Obol", width: 170 },
  { src: "Horizontal_Logo_meebits.png", alt: "Icono de Meebits", width: 130 },
  { src: "streameth.svg", alt: "Icono de StreamEth", width: 190 },
];

function ConfianNosotros() {
  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center">
      <h1 className="ethmex-primary-title text-center mb-5">Confían en Nosotros</h1>

      <div className="mx-auto">
        <div className="row justify-content-center align-items-center">
          {logos.map((logo, index) => {
            const widthPx = logo.width;
            return (
              <div
                key={index}
                className="col-6 col-sm-6 col-md-4 col-lg-2 mb-5 mb-md-5 text-center"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/${logo.src}`}
                  className="img-fluid"
                  alt={logo.alt}
                  width={widthPx}
                  style={{
                    width: widthPx,
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ConfianNosotros;
