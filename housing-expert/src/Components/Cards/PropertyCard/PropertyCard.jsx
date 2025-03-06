import React from 'react';
import './PropertyCard.css';
import { Heart, MapPin } from 'lucide-react'; // Added MapPin for location icon

const PropertyCard = ({ title, propertyType, location, price, ratings, facilities, images }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img
          src={images[0] || 'https://via.placeholder.com/300x200'}
          alt={title}
        />
        <div className="rating-badge">{ratings} ★</div>
        <button className="favorite-btn">
          <Heart className="heart-icon" />
        </button>
      </div>
      <div className="property-details">
        <div className="property-header">
          <div className="property-title-type">
            <h3 className="property-title">{title}</h3>
            <div className="property-type">
              <span>Type: </span>{propertyType}
            </div>
          </div>
        </div>
        <div className="property-location">
          <MapPin className="location-icon" />
          <span>{location}</span>
        </div>
        <div className="property-facilities">
          <strong>Facilities:</strong>
          <ul>
            {facilities.length > 0 ? (
              facilities.map((facility, index) => <li key={index}>{facility}</li>)
            ) : (
              <li>None</li>
            )}
          </ul>
        </div>
        <div className="property-price">${price}</div>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;