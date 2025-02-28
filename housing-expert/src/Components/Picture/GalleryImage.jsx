import React from "react";
import "./GalleryImage.css"; // Import the custom CSS

const GalleryImage = ({ src, alt = "Gallery Image" }) => {
  return <img className="gallery-image" src={src} alt={alt} />;
};

export default GalleryImage;