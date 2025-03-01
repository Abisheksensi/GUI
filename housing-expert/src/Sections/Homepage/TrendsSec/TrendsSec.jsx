// TrendsSec.jsx
import React from 'react';
import './TrendsSec.css';
import TrendsCard from '../../../Components/Cards/TrendsCard/TrendsCard';
import Home03 from "../../../assets/images/Home03.png";
import Home02 from "../../../assets/images/Home02.png";
import Home01 from "../../../assets/images/Home01.png";

const TrendsSec = () => {


return (
    <div className="trends-section">
      <div className="header-container">
        <div className="header-title">
          How AI Copilot Transforms Your Home Search
        </div>
        <div className="header-description">
          Imagine having a personal assistant that understands your preferences, anticipates your needs, and guides you towards your ideal property. That's exactly what our AI Copilot does
        </div>
      </div>
      <div className="trends-container">
        <TrendsCard 
          image={Home03}
          text="Evolution of real estate business over time and years"
          linkText="Learn More"
        />
        <TrendsCard 
          image={Home02}
          text="Evolution of real estate business over time and years"
          linkText="Learn More"
        />
        <TrendsCard 
          image={Home01}
          text="Evolution of real estate business over time and years"
          linkText="Learn More"
        />
      </div>
    </div>
  );
};

export default TrendsSec;