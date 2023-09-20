import React from 'react'
import { NavLink } from 'react-router-dom'
import './Acerca_de_PlumasYecla.css'

const Acerca_de_PlumasYecla = () => {
  return (
  <div className='encuentranos_container'>
    <h1>Puedes encontrarnos aqui!</h1>
    <div>
      <img src="../Nave.jpg" alt="" />
    </div >
    <div className='ficha' >
      <div>
        <h2><strong>Dirección:</strong></h2> 
        <h2><strong>Como llegar:</strong></h2> 
      </div>
      <div>
        <p>C. Reina Sofía, 33, 30510 Yecla, Murcia</p>
        <NavLink className='navlink' to='https://www.google.com/maps/place/Plumas+Yecla+S.L./@38.6159071,-1.0602775,17.25z/data=!4m6!3m5!1s0xd63fd2deaaaaaab:0xd07669cae2729cbe!8m2!3d38.6160466!4d-1.0608653!16s%2Fg%2F1hc7c0y2f?authuser=0&entry=ttu'><img src="../Maps_2.png" alt="" /></NavLink>
      </div>
      
    </div>
      
  </div>
  )
}

export default Acerca_de_PlumasYecla