import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Fundacion_PLumasYecla from './pages/Fundacion_PLumasYecla.jsx'
import Certificaciones from './pages/Certificaciones.jsx'
import Acerca_de_PlumasYecla from './pages/Acerca_de_PlumasYecla.jsx'
import Cuestiones_de_politica from './pages/Cuestiones_de_politica.jsx'
import Soluciones_de_Cumplimineto from './pages/Soluciones_de_Cumplimineto.jsx'
import Membresia from './pages/Membresia.jsx'
import Informes from './pages/Informes.jsx'
import Noticias_y_eventos from './pages/Noticias_y_eventos.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element = {<Home />} />
          <Route path='pages'>
            <Route path='home' element={<Home />} />
            <Route path='fundacion_PLumasYecla' element={<Fundacion_PLumasYecla />} />
            <Route path='certificaciones' element={<Certificaciones />} />
            <Route path='acerca_de_PlumasYecla' element={<Acerca_de_PlumasYecla />} />
            <Route path='cuestiones_de_politica' element={<Cuestiones_de_politica />} />
            <Route path='soluciones_de_cumplimineto' element={<Soluciones_de_Cumplimineto />} />
            <Route path='membresia' element={<Membresia />} />
            <Route path='informes' element={<Informes />} />
            <Route path='noticias_y_eventos' element={<Noticias_y_eventos />} />            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
