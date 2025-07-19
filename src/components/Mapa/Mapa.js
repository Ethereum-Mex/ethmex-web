import "./Mapa.css";

function Mapa() {
  

  return (
    <div className="container-fluid align-items-center justify-content-center text-center mapa-ethmex">
      <img
        src={`${process.env.PUBLIC_URL}/images/Mapa-ethmex.png`}
        className="img-fluid "
        alt="ruta global"
        width="1000"
        
      />
    </div>
  );
}

export default Mapa;
