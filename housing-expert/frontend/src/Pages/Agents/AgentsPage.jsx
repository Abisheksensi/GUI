import React, { useEffect, useState } from 'react';
import './AgentsPage.css';
import AgentCard from '../../Components/Cards/AgentsCard/AgentsCard';

const AgentsPage = () => {
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/agents');
        const data = await response.json();
        const formattedAgents = data.map(agent => ({
          _id: agent._id.$oid || agent._id,
          name: agent.Name,
          contactInfo: agent.ContactInfo,
          isActive: agent.IsActive
        }));
        setAgents(formattedAgents);
        setFilteredAgents(formattedAgents);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();
  }, []);

  // Filter agents based on search term and status
  useEffect(() => {
    let filtered = agents;

    // Filter by search term (name or contact info)
    if (searchTerm) {
      filtered = filtered.filter(
        agent =>
          agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          agent.contactInfo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status (active/inactive)
    if (statusFilter) {
      filtered = filtered.filter(agent => {
        if (statusFilter === 'active') return agent.isActive === true;
        if (statusFilter === 'inactive') return agent.isActive === false;
        return true;
      });
    }

    setFilteredAgents(filtered);
  }, [searchTerm, statusFilter, agents]);

  return (
    <div className="agents-page">
      {/* Hero Section */}
      <section className="hero-section3">
        <div className="hero-overlay3"></div>
        <div className="hero-content3">
          <h1>Meet Our Expert Agents</h1>
          <p>Connect with the best real estate agents to find your dream home</p>
          <div className="search-filter-bar">
            <input
              type="text"
              placeholder="Search by name or contact..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="agents-container">
        <h2>Our Agents</h2>
        <div className="agent-cards">
          {filteredAgents.length > 0 ? (
            filteredAgents.map((agent) => (
              <AgentCard
                key={agent._id}
                name={agent.name}
                contactInfo={agent.contactInfo}
                isActive={agent.isActive}
              />
            ))
          ) : (
            <p>No agents found matching your criteria.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AgentsPage;