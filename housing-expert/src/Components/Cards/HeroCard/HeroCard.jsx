import React from "react";
import "./HeroCard.css"; // Import the external CSS
import puzzleIcon from "../../../assets/Icons/puzzle_icon.png";

const HeroCard = () => {
return (
    <div className="property-card">
            <img
                className="puzzle-icon"
                src={puzzleIcon}
                alt="Puzzle Icon"
            />
        <div className="property-content">
            <div className="property-title">The sample text</div>
            <div className="property-description">
                Users can input their preferences or upload a photo of a property they
                like, and the app suggests similar options in their desired area.
            </div>
        </div>
    </div>
);
};

export default HeroCard;