import React from 'react'
import './PoliticaGlobal.css'

const PoliticaGlobal = () => {
  return (
    <>
    <div className='PoliticaGlobal-container'>
        <h2>Cuestiones De Politica Global</h2>
        <ul>
            <li><img src="../IA.png" alt="texto" /><h3>IA</h3></li>
            <li><img src="../Privacidad.png" alt="texto" /><h3>Privacidad</h3></li>
            <li><img src="../ciberseguridad.png" alt="texto" /><h3>Ciberseguridad</h3></li>
            <li><img src="../PI.png" alt="texto" /><h3>PI</h3></li>
            <li><img src="../comercio.png" alt="texto" /><h3>Comercio</h3></li>
            <li><img src="../Transferencia.png" alt="texto" /><h3>Tranferencia de Datos Transfronterizos</h3></li>
            <li><img src="../fuerza_laboral.png" alt="texto" /><h3>Fuerza Laboral</h3></li>
            <li><img src="../obtencion.png" alt="texto" /><h3>Obtencion</h3></li>
        </ul>
    </div>
    </>
  )
}

export default PoliticaGlobal