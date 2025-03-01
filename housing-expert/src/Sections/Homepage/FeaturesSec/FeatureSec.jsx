import React from "react";
import './FeatureSec.css';

const FeatureSec = () => {
  return (
    <div className="containerBIG">
          <div className="header-container">
        <div className="header-title">
          How AI Copilot Transforms Your Home Search
        </div>
        <div className="header-description">
          Imagine having a personal assistant that understands your preferences, anticipates your needs, and guides you towards your ideal property. That's exactly what our AI Copilot does
        </div>
      </div>
    <div className="preferences-container">
      <div className="preferences-content">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div className="preference-card" key={index}>
              <div className="preference-header">
                <div className="title">Tell Us Your Preferences</div>
              </div>
              <div className="preference-description">
                <div className="description">
                  Share your desires, from location to amenities, and let AI Copilot understand your unique needs.
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="preferences-placeholder" />
    </div>
    </div>
  );
};

export default FeatureSec;
