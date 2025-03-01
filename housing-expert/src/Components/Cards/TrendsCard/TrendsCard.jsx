// TrendsCard.jsx
import React from 'react';
import './TrendsCard.css';

const TrendsCard = ({ image, text, linkText }) => {
return (
    <div className="trend-card">
      <div className="trend-content">
        <img src={image} alt={`${text} Icon`} className="trend-image" />
        <h3 className="trend-title">{text}</h3>
        <p className="trend-description">
          lorem ipsum dollet lausn domet comet moon gonna be soon bespoke the words of god in his
          own way or the other.
        </p>
        <a href="#" className="trend-link" onClick={(e) => e.preventDefault()}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default TrendsCard;