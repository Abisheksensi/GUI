import React from "react";
import './FeatureSec.css';
import Home03 from "../../../assets/images/Home03.png";

const FeatureSec = () => {
  const features = [
    {
      heading: "Share Your Preferences",
      description: "Tell us your desired location, budget, and amenities, and let AI Copilot find properties that match your unique needs."
    },
    {
      heading: "Upload a Photo",
      description: "Upload a picture of a property you love, and our AI will analyze it to suggest similar homes in your area."
    },
    {
      heading: "Get Personalized Recommendations",
      description: "Receive tailored property suggestions powered by AI, ensuring you find a home that fits your lifestyle perfectly."
    },
    {
      heading: "Explore with Confidence",
      description: "Trust AI Copilot to guide you through the home search process with insights and recommendations you can rely on."
    }
  ];

  return (
    <div className="containerBIG">
      <div className="header-container">
        <div className="header-title">
          How AI Copilot Transforms Your Home Search
        </div>
        <div className="header-description">
          Imagine having a personal assistant that understands your preferences, anticipates your needs, and guides you towards your ideal property. That's exactly what our AI Copilot does.
        </div>
      </div>
      <div className="preferences-container">
        <div className="preferences-content">
          {features.map((feature, index) => (
            <div className="preference-card" key={index}>
              <div className="preference-header">
                <div className="title">{feature.heading}</div>
              </div>
              <div className="preference-description">
                <div className="description">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="preferences-placeholder">
          <img src={Home03} alt="Home Feature" className="feature-image" />
        </div>
      </div>
    </div>
  );
};

export default FeatureSec;