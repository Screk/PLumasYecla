import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [idioma, setIdioma] = useState('español'); // Estado para almacenar el idioma seleccionado

  // Función para cambiar el idioma
  const handleChangeIdioma = (event) => {
    setIdioma(event.target.value);
  };

  // Define los textos en diferentes idiomas
  const idiomas = {
    español: {
      menu: 'Menú',
      buscador: 'Buscador 🔎',
      fundacion: 'Fundación Plumas Yecla',
      certificaciones: 'Certificaciones',
      acercaDePlumasYecla:'Acerca de plumas Yecla',
      cuestionesDePolitica:'Cuestiones de politica',
      solucionesDeCumplimineto: 'Soluciones de cumplimiento',
      membresia: 'Membresia',
      informes: 'Informes',
      noticiasYEventos: 'Noticias y eventos'


      // Agrega más textos en español según sea necesario
    },
    ingles: {
      menu: 'Menú',
      buscador: 'Search 🔎',
      fundacion: 'Plumas Yecla Foundation',
      certificaciones: 'Certifications',
      acercaDePlumasYecla:'About Plumas Yecla',
      cuestionesDePolitica:'Political Issues',
      solucionesDeCumplimineto: 'Compliance Solutions',
      membresia: 'Membership',
      informes: 'Reports',
      noticiasYEventos: 'News and events'
      // Agrega más textos en inglés según sea necesario
    },
    // Agrega más idiomas y textos según sea necesario
  };

  const toggleClick = () => {
    setMenuVisible(!menuVisible);
  };
  

  return (
    <>
      <div className='App'>
        <header>
          <article className='article1'>
            <nav className='nav1'>
              <NavLink className='link1' to='/pages/Fundacion_PLumasYecla'>
                {idiomas[idioma].fundacion}
              </NavLink>
              <NavLink className='link1' to='/pages/Certificaciones'>
                {idiomas[idioma].certificaciones}
              </NavLink>
            </nav>
            <select name="languages" id="language" value={idioma} onChange={handleChangeIdioma}>
              <option value="español">Español</option>
              <option value="ingles">Ingles</option>
              {/* Agrega más opciones de idioma según sea necesario */}
            </select>
            <label className='article1_label' htmlFor="article1_input">
              {idiomas[idioma].buscador}
            </label>
            <input className='article1_input' type="text" />
            <button type='button' onClick={toggleClick}>
              {idiomas[idioma].menu}
            </button>
          </article>

          <nav>
            <NavLink className='logo' to='/pages/home'>
              <img src="../Caratula-web.jpg" alt="texto" />
            </NavLink>
          </nav>

          {menuVisible && (
            <article className='article2'>
              <nav className='nav2'>
                <div className='link2_container'>
                  <NavLink className='link2' to='/pages/acerca_de_PlumasYecla'>
                    {idiomas[idioma].acercaDePlumasYecla}
                  </NavLink>
                </div>
                <div className='link2_container'>
                  <NavLink className='link2' to='/pages/cuestiones_de_politica'>
                    {idiomas[idioma].cuestionesDePolitica}
                  </NavLink>
                </div>
                <div className='link2_container'>
                  <NavLink className='link2' to='/pages/soluciones_de_cumplimineto'>
                    {idiomas[idioma].solucionesDeCumplimineto}
                  </NavLink>
                </div>
                <div className='link2_container'>
                  <NavLink className='link2' to='/pages/membresia'>
                    {idiomas[idioma].membresia}
                  </NavLink>
                </div>
                <div className='link2_container'>
                  <NavLink className='link2' to='/pages/informes'>
                    {idiomas[idioma].informes}
                  </NavLink>
                </div>
                <div className='link2_container'>
                  <NavLink className='link2' to='/pages/noticias_y_eventos'>
                    {idiomas[idioma].noticiasYEventos}
                  </NavLink>
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
  );
}

export default App;
