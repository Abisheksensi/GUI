import React from 'react';
import './GalleryCard.css';

const GalleryCard = ({ icon, text, backgroundColor, textColor }) => {
  return (
    <div className="gallery-card" style={{ backgroundColor }}>
      <div className="svg-wrapper">
        <img src={icon} alt={`${text} Icon`} />
      </div>
      <div className="card-title" style={{ color: textColor }}>
        {text}
      </div>
    </div>
  );
};

export default GalleryCard;