import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel} role="region" aria-label={`Carrossel de ${title}`}>
      <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} - Imagem ${index + 1}`}
            loading="lazy" // Performance
            className={styles.slide}
          />
        ))}
      </div>
      <button className={styles.prev} onClick={prevSlide} aria-label="Slide anterior">‹</button>
      <button className={styles.next} onClick={nextSlide} aria-label="Próximo slide">›</button>
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;