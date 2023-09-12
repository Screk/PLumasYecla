import React from 'react';
import Carousel from '../components/home/Carrousel'; // Ajusta la ruta al componente
import './Home.css'
import NoticiasYEventos from '../components/home/NoticiasYEventos';
import PoliticaGlobal from '../components/home/PoliticaGlobal';
import Miembros from '../components/home/Miembros';

const Home = () => {
  return (
    <>
      
      <div className='carrousel'>
        <Carousel />
      </div>
      <div className='uls'>
        <NoticiasYEventos />
        <PoliticaGlobal />
      </div>  
      <div className='miembros'>
        <Miembros />
      </div>
    </>
  );
};

export default Home;

