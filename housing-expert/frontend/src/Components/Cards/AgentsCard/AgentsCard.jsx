import React from 'react';
import './AgentsCard.css';

const AgentCard = ({ name, contactInfo, isActive }) => {
  return (
    <div className="agent-card">
      <div className="agent-details">
        <h3>{name}</h3>
        <p className="contact-info">{contactInfo}</p>
        <p className={`status ${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </p>
        <button className="contact-btn">Contact Agent</button>
      </div>
    </div>
  );
};

export default AgentCard;