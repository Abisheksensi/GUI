import React from "react";
import "./HeroCard.css";
import puzzleIcon from "../../../assets/Icons/puzzle_icon.png";

const HeroCard = ({ className }) => {
  return (
    <div className={className}>
      <img
        className="puzzle-icon"
        src={puzzleIcon}
        alt="Puzzle Icon"
      />
      <div className="property-content">
        <div className="property-title">Find Your Dream Home with AI</div>
        <div className="property-description">
          Users can input their preferences or upload a photo of a property they
          like, and the app suggests similar options in their desired area.
        </div>
      </div>
    </div>
  );
};

export default HeroCard;