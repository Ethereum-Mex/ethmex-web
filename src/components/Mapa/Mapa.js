import "./Mapa.css";

function Mapa() {
  

  return (
    <div className="container-fluid align-items-center justify-content-center text-center ">
      <img
        src={`${process.env.PUBLIC_URL}/images/Mapa-ethmex.png`}
        className="img-fluid mapa-ethmex"
        alt="Aprendizaje con líderes del ecosistema"
        
      />
    </div>
  );
}

export default Mapa;
