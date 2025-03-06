import React from 'react';

const PropertyCard = ({ title, propertyType, location, price, ratings, facilities, images }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={images[0] || 'https://via.placeholder.com/300x200'} alt={title} />
      </div>
      <div className="property-details">
        <h3>{title}</h3>
        <p><strong>Type:</strong> {propertyType}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Rating:</strong> {ratings} ★</p>
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
      </div>
    </div>
  );
};

export default PropertyCard;