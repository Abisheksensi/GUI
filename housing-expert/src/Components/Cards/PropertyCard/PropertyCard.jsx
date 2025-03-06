import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ title, propertyType, location, price, ratings, facilities, images }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={images[0] || 'https://via.placeholder.com/300x200'} alt={title} />
        <div className="rating-badge">{ratings} ★</div>
      </div>
      <div className="property-details">
        <h3>{title}</h3>
        <p className="property-type">{propertyType}</p>
        <p className="location">{location}</p>
        <p className="price">${price}</p>
        <div className="facilities">
          <strong>Facilities:</strong>
          <ul>
            {facilities.length > 0 ? (
              facilities.map((facility, index) => <li key={index}>{facility}</li>)
            ) : (
              <li>None</li>
            )}
          </ul>
        </div>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;