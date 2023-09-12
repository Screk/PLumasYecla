import React from "react";
import './Noticias_y_eventos.css'
import Noticias from "../components/NoticiasYEventos/Noticias";
import Eventos from "../components/NoticiasYEventos/Eventos";

const Noticias_y_eventos = () => {
  return (
    <>
    <div className="Noticias_container">
      <Noticias />
    </div>
    <div className="separador"></div>
    <div className="Eventos_container">
      <Eventos />
    </div>
    
    </>
  );
};

export default Noticias_y_eventos;
