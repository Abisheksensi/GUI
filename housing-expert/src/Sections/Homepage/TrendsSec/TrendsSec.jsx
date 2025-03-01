// TrendsSec.jsx
import React from 'react';
import './TrendsSec.css';
import TrendsCard from '../../../Components/Cards/TrendsCard/TrendsCard';
import Home03 from "../../../assets/images/Home03.png";
import Home02 from "../../../assets/images/Home02.png";
import Home01 from "../../../assets/images/Home01.png";

const TrendsSec = () => {


return (
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
);
};

export default TrendsSec;