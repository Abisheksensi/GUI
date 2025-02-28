import React from "react";
import GalleryCard from "../../../Components/Cards/GalleryCard/GalleryCard";
import GalleryImage from "../../../Components/Picture/GalleryImage";
import box_icon from "../../../assets/Icons/box_icon.svg";
import bulb_icon from "../../../assets/Icons/bulb_icon.svg";
import star_icon from "../../../assets/Icons/star_icon.svg";
import wizard_icon from "../../../assets/Icons/wizard_icon.svg";
import "./GallerySec.css"; // Import the custom CSS

const GallerySec = () => {
  // Sample data for gallery cards (replace with real estate data)
  const galleryData = [
    { imageSrc: "https://placehold.co/292x120", text: "Personalized Recommendations", icon: box_icon },
    { imageSrc: "https://placehold.co/292x120", text: "Virtual Tours at Your Fingertips", icon: wizard_icon },
    { imageSrc: "https://placehold.co/292x120", text: "Intelligent Pricing Insights", icon: bulb_icon },
    { imageSrc: "https://placehold.co/292x120", text: "Seamless User Experience", icon: star_icon },
  ];

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-cards">
          <div className="gallery-row">
            <GalleryCard imageSrc={galleryData[0].imageSrc} text={galleryData[0].text} icon={galleryData[0].icon} />
            <GalleryCard imageSrc={galleryData[1].imageSrc} text={galleryData[1].text} icon={galleryData[1].icon} />
          </div>
          <div className="gallery-row">
            <GalleryCard imageSrc={galleryData[2].imageSrc} text={galleryData[2].text} icon={galleryData[2].icon} />
            <GalleryCard imageSrc={galleryData[3].imageSrc} text={galleryData[3].text} icon={galleryData[3].icon} />
          </div>
        </div>
        <div className="gallery-image">
          <GalleryImage src="https://placehold.co/608x450" alt="Real Estate Property" />
        </div>
      </div>
    </div>
  );
};

export default GallerySec;