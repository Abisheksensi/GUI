import React from "react";
import "./HeroCard.css";
import puzzleIcon from "../../../assets/Icons/puzzle_icon.png";

const HeroCard = ({ className }) => {
  return (
    <div className="herocardcalass"> {/* Ensure className is applied to the root div */}
      <div className="hero-card-icon-container">
        <img
          className="hero-card-puzzle"
          src={puzzleIcon}
          alt="Puzzle Icon"
        />
      </div>
      <div className="hero-card-text-section">
        <h3 className="hero-card-heading">Find Your Dream Home with AI</h3>
        <p className="hero-card-text">
          Users can input their preferences or upload a photo of a property they
          like, and the app suggests similar options in their desired area.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
