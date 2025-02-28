import React from "react";
import "./GalleryCard.css"; // Import the custom CSS

const GalleryCard = ({ icon, text }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon" dangerouslySetInnerHTML={{ __html: icon }} />
      <div className="feature-text">{text}</div>
    </div>
  );
};

export default GalleryCard;