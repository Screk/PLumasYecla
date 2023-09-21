import React from 'react'
import './Fundacion_PlumasYecla.css'

const Fundacion_PLumasYecla = () => {
  return (
    <>
    <div className='titulo'>
    <h1>Nuestra empresa</h1>
    </div>
    
    <div className='nave_image'>
      <img src="../panoramica_fabrica.jpg" alt="fabrica" />
    </div>

    <div className='secciones_container'>
      <div className='seccion_de_llenado'>
        <h2>Seccion de llenado</h2>
        <div className='imagenes_llenado'>
          <div className='imagenes'>
            <img src="../imagenes_llenado1.jpg" alt="" />
            <img src="../imagenes_llenado2.jpg" alt="" />
          </div>
          <div className='imagenes'>
            <img src="../imagenes_llenado3.jpg" alt="" />
            <img src="../carrousel3.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='seccion_de_corte_y_cosido'>
        <h2>Seccion de corte y cosido</h2>
        <div className='imagenes_corte'>
          <div>
            <img src="../imagenes_corte_y_cosido1.jpg" alt="" />
            <img src="../imagenes_corte_y_cosido2.jpg" alt="" />
          </div>
          <div>
            <img src="../imagenes_corte_y_cosido3.jpg" alt="" />
            <img src="../imagenes_corte_y_cosido4.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fundacion_PLumasYecla