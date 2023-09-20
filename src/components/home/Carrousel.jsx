import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const Carousel = () => {
  const images = ["../carrousel1.jpg", "../carrousel2.jpg", "../carrousel3.jpg", "../carrousel4.jpg", "../carrousel5.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
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
      <div className="carousel-content">
        <img className='carrousel_img' src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      </div>
      <div className="thumbnails-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            className={index === currentIndex ? 'active-thumbnail' : 'thumbnail'}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

