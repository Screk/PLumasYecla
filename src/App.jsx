import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import React, { useState } from 'react';

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleClick = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
    <div className='App'>
      <header>
        <article className='article1'>
          <nav className='nav1'>
            <NavLink className='link1' to='/pages/Fundacion_PLumasYecla'>Fundación Plumas Yecla</NavLink>
            <NavLink className='link1' to='/pages/Certificaciones'>Certificaciones</NavLink>
          </nav>
          <select name="languages" id="language">
            <option className='option-with-image' value="español">Español</option>
            <option className='option-with-image' value="ingles"> Ingles</option>
            <option className='option-with-image' value="frances"> Frances</option>
            <option className='option-with-image' value="portugues"> Portugues</option>
            <option className='option-with-image' value="aleman"> Aleman</option>
          </select>
          <label className='article1_label' htmlFor="article1_input">Buscador 🔎</label>
          <input className='article1_input' type="text" />
          <button type='checkbox' onClick={toggleClick}>⚙</button>

        </article>

        <nav>                                                   
          <NavLink className='logo' to='/pages/home'><img src="../Caratula-web.jpg" alt="texto" /></NavLink>
        </nav>

        {menuVisible && (
          <article className='article2'>
            
          
            <nav className='nav2'>
              <div className='link2_container'>
              <NavLink className='link2' to='/pages/acerca_de_PlumasYecla'>Acerca_de_PlumasYecla</NavLink>
              </div >
              <div className='link2_container'>
              <NavLink className='link2' to='/pages/cuestiones_de_politica'>Cuestiones_de_politica</NavLink>
              </div>
              <div className='link2_container'>
              <NavLink className='link2' to='/pages/soluciones_de_cumplimineto'>Soluciones_de_cumplimineto</NavLink>
              </div>
              <div className='link2_container'>
              <NavLink className='link2' to='/pages/membresia'>Membresia</NavLink>
              </div>
              <div className='link2_container'>
              <NavLink className='link2' to='/pages/informes'>Informes</NavLink>
              </div>
              <div className='link2_container'>
              <NavLink className='link2' to='/pages/noticias_y_eventos'>Noticias_y_eventos</NavLink>
              </div>
            </nav>
            
          </article>
          )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <h4>Created by Plumas Yecla</h4>
          <span>
            © Derechos de autor 2023 BSA | The Software Alliance. Todos los derechos reservados.
          </span>
        </div>
      </footer>

    </div>

    </>
  )
}

export default App
