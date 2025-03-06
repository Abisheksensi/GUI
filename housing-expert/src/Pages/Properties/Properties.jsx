import React, { useEffect, useState } from 'react';
import './Properties.css';
import PropertyCard from '../../Components/Cards/PropertyCard/PropertyCard';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        const data = await response.json();
        const formattedProperties = data.map(property => ({
          _id: property._id.$oid || property._id,
          title: property.Title,
          propertyType: property.PropertyType,
          location: property.Location,
          price: property.Price,
          ratings: property.Ratings,
          facilities: property.Facilities || [],
          images: property.Images || ['https://via.placeholder.com/300x200']
        }));
        setProperties(formattedProperties);
        setFilteredProperties(formattedProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  // Filter properties based on search term and property type
  useEffect(() => {
    let filtered = properties;

    // Filter by search term (location or title)
    if (searchTerm) {
      filtered = filtered.filter(
        property =>
          property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by property type
    if (filterType) {
      filtered = filtered.filter(property => property.propertyType === filterType);
    }

    setFilteredProperties(filtered);
  }, [searchTerm, filterType, properties]);

  // Get unique property types for the dropdown
  const propertyTypes = [...new Set(properties.map(property => property.propertyType))];

  return (
    <div className="properties-page">
      {/* Enhanced Hero Section */}
      <section className="hero-section2">
        <div className="hero-overlay2"></div>
        <div className="hero-content2">
          <h1>Discover Your Perfect Property</h1>
          <p>Explore a wide range of properties tailored to your needs</p>
          <div className="search-filter-bar">
            <input
              type="text"
              placeholder="Search by location or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="filter-select"
            >
              <option value="">All Types</option>
              {propertyTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="properties-container">
        <h2>Available Properties</h2>
        <div className="property-cards">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
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
            <p>No properties found matching your criteria.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;