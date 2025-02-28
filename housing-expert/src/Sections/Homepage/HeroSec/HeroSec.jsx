import React from "react";
import "./HeroSec.css"; // Import the custom CSS
import parallex from "../../../assets/images/parallex.png"; // Adjust path as needed
import HeroCard from "../../../Components/Cards/HeroCard/HeroCard"; // Fixed typo: HeroCrad -> HeroCard

const HeroSec = () => {
  return (
    <div className="hero-section">
      <img src={parallex} alt="Parallax Background" className="hero-image" />
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-part1">Housing Using </span>
          <span className="hero-part2">AI</span>
        </div>
      </div>
      <HeroCard className="hero-card" /> {/* Add class for positioning */}
    </div>
  );
};

export default HeroSec;