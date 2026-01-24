import React from "react";
import { Eye } from 'lucide-react'; // Assuming Lucid React icons (adjust import based on your icon library)
import "./Placeholder01.css";

const Placeholder = ({ label = "Name", placeholder = "Enter Your Name", icon: Icon }) => {
  return (
    <div className="placeholder-container">
      <label className="placeholder-label satoshi-font">{label}</label>
      <div className="input-wrapper">
        {Icon && <Eye size={20} className="input-icon" />} {/* Render icon if provided */}
        <input
          type="text"
          className="input-field satoshi-font"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Placeholder;