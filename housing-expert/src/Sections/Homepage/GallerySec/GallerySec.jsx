import React from 'react';
import './GallerySec.css';
import Home02 from "../../../assets/images/Home02.png";
import GalleryCard from '../../../Components/Cards/GalleryCard/GalleryCard';
import box_icon from "../../../assets/Icons/box_icon.svg";
import bulb_icon from "../../../assets/Icons/bulb_icon.svg";
import star_icon from "../../../assets/Icons/star_icon.svg";
import wizard_icon from "../../../assets/Icons/wizard_icon.svg";

const GallerySec = () => {
  return (
    <div className="gallery-section">
      <div className="header-container">
        <div className="header-title">
          How AI Copilot Transforms Your Home Search
        </div>
        <div className="header-description">
          Imagine having a personal assistant that understands your preferences, anticipates your needs, and guides you towards your ideal property. That's exactly what our AI Copilot does
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-column">
          <div className="gallery-row">
            <GalleryCard 
              icon={wizard_icon}
              text="Personalized Recommendations"
              backgroundColor="#ffffff"
              textColor="#3a3a3a" /* Dark gray for white background */
            />
            <GalleryCard 
              icon={box_icon}
              text="Virtual Tours at Your Fingertips"
              backgroundColor="#282828"
              textColor="#ffffff" /* White for dark background */
            />
          </div>
          <div className="gallery-row">
            <GalleryCard 
              icon={bulb_icon}
              text="Intelligent Pricing Insights"
              backgroundColor="#5b5b5b"
              textColor="#ffffff" /* White for medium gray background */
            />
            <GalleryCard 
              icon={star_icon}
              text="Seamless User Experience"
              backgroundColor="#f1efed"
              textColor="#3a3a3a" /* Dark gray for light background */
            />
          </div>
        </div>
        <img className="gallery-image" src={Home02} alt="Gallery Home" />
      </div>
    </div>
  );
};

export default GallerySec;