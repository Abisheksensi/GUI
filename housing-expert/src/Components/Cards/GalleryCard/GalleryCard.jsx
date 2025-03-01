// GalleryCard.jsx
import React from 'react';
import './GalleryCard.css';

const GalleryCard = ({ icon, text, backgroundColor }) => {
  return (
    <div className="gallery-card" style={{ backgroundColor }}>
      <div className="svg-wrapper">
        <img src={icon} alt={`${text} Icon`} />
      </div>
      <div className="card-title">
        {text}
      </div>
    </div>
  );
};

export default GalleryCard;