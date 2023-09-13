import React from 'react'
import './PoliticaGlobal.css'

const PoliticaGlobal = () => {
  return (
    <>
    <div className='PoliticaGlobal-container'>
        <h2>Cuestiones De Politica Global</h2>
        <ul>
            <li><img src="/public/images/IA.png" alt="texto" /><h3>IA</h3></li>
            <li><img src="/public/images/Privacidad.png" alt="texto" /><h3>Privacidad</h3></li>
            <li><img src="/public/images/ciberseguridad.png" alt="texto" /><h3>Ciberseguridad</h3></li>
            <li><img src="/public/images/PI.png" alt="texto" /><h3>PI</h3></li>
            <li><img src="/public/images/comercio.png" alt="texto" /><h3>Comercio</h3></li>
            <li><img src="/public/images/Transferencia.png" alt="texto" /><h3>Tranferencia de Datos Transfronterizos</h3></li>
            <li><img src="/public/images/fuerza_laboral.png" alt="texto" /><h3>Fuerza Laboral</h3></li>
            <li><img src="/public/images/obtencion.png" alt="texto" /><h3>Obtencion</h3></li>
        </ul>
    </div>
    </>
  )
}

export default PoliticaGlobal