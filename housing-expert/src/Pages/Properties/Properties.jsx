import React, { useEffect, useState } from 'react';
import './Properties.css';
import PropertyCard from '../../Components/Cards/PropertyCard/PropertyCard';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties'); // Match backend port
        const data = await response.json();
        // Transform MongoDB data to match expected structure
        const formattedProperties = data.map(property => ({
          _id: property._id.$oid || property._id, // Handle ObjectId format
          title: property.Title, // Match MongoDB field name (capitalized)
          propertyType: property.PropertyType,
          location: property.Location,
          price: property.Price,
          ratings: property.Ratings,
          facilities: property.Facilities || [], // Ensure it's an array, even if empty
          images: property.Images || ['https://via.placeholder.com/300x200'] // Default image if none
        }));
        setProperties(formattedProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="properties-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore Our Properties</h1>
          <p>Find your dream home with Housing Expert</p>
        </div>
      </section>

      <section className="properties-container">
        <h2>Available Properties</h2>
        <div className="property-cards">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard
                key={property._id}
                title={property.title}
                propertyType={property.propertyType}
                location={property.location}
                price={property.price}
                ratings={property.ratings}
                facilities={property.facilities}
                images={property.images}
              />
            ))
          ) : (
            <p>No properties available</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;