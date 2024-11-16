import React from 'react';
import './Gallery.css'; // Подключите CSS файл

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-scroll">
        <div className="gallery-items">
          <img src="https://mitit.mil.gov.ua/api/images/17374" alt="Photo 1" />
          <img src="https://mitit.mil.gov.ua/api/images/17377" alt="Photo 2" />
          <img src="https://mitit.mil.gov.ua/api/images/17372" alt="Photo 3" />
          <img src="https://mitit.mil.gov.ua/api/images/17376" alt="Photo 4" />
          <img src="https://mitit.mil.gov.ua/api/images/17375" alt="Photo 5" />

          {/* Добавьте сюда больше изображений */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
