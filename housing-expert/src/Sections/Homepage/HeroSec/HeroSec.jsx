import React from "react";
import "./HeroSec.css";
import parallex from "../../../assets/images/parallex.png";
import HeroCard from "../../../Components/Cards/HeroCard/HeroCard";

const HeroSec = () => {
  return (
    <div className="hero-section">
      <img src={parallex} alt="Parallax Background" className="hero-image" />
      <div className="hero-text">
        <span className="hero-part1">Housing Using </span>
        <span style={{ color: "#ffffff" }}> " " </span>
        <span className="hero-part2"> AI</span>
      </div>
      <HeroCard className="property-card" />
    </div>
  );
};

export default HeroSec;