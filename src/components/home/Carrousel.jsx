import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const Carousel = () => {
  const images = ["/public/espana.png", "/public/reino-unido.png", "/public/francia.png", "/public/alemania.png", "/public/brasil.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Función para cambiar automáticamente a la siguiente imagen
    const autoChangeImage = () => {
      nextImage();
    };

    // Configurar un temporizador para cambiar automáticamente la imagen cada 3 segundos
    const intervalId = setInterval(autoChangeImage, 5000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      <div className='button-container'>
        <button onClick={prevImage}>Anterior</button>
        <button onClick={nextImage}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carousel;
