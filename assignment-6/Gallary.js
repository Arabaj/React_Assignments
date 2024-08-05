// src/ImageGallery.js
import React from 'react';
// import './ImageGallery.css';

const Gallery = () => {
  const images = [
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rEkRWaXceNsqHoiIaAfREqyePKum5KhoEg&s', title: 'Naruto Uzumaki' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rEkRWaXceNsqHoiIaAfREqyePKum5KhoEg&s', title: 'Naruto Uzumaki' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rEkRWaXceNsqHoiIaAfREqyePKum5KhoEg&s', title: 'Naruto Uzumaki' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rEkRWaXceNsqHoiIaAfREqyePKum5KhoEg&s', title: 'Naruto Uzumaki' },
  ];

  return (
    
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.url} alt={image.title} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
