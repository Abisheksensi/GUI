// MapSec.jsx
import React, { useEffect } from 'react';
import './MapSec.css'; // Add a CSS file for styling

export const MapSec = () => {
  useEffect(() => {
    window.initMap = () => {
      const mapProp = {
        center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco (adjust as needed)
        zoom: 12, // Zoom level (0-21, higher for more detail)
      };
      const map = new window.google.maps.Map(document.getElementById("map"), mapProp);

      // Optional: Add a marker
      new window.google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: "San Francisco"
      });
    };

    if (window.google) {
      window.initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBM3nRt0tfwKLrca1jcvbJWIFUb-9d_Bzc&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="map-container">
      <h2 className="map-heading">Explore Your Location</h2>
      <p className="map-subheading">Find your ideal property with our interactive map.</p>
      <div id="map" className="map" />
    </div>
  );
};

export default MapSec;
