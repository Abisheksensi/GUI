import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../assets/Logo/logo.png";
import { Home, Users, Box, FileText } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setIsNavOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navListItems = [
    { label: "Properties", icon: Home },
    { label: "Agents", icon: Users }, // Added Agents button with Users icon
    { label: "Blocks", icon: Box },
    { label: "Docs", icon: FileText },
  ];

  const handleNavigation = (label) => {
    if (label === "Properties") {
      navigate('/properties');
    } else if (label === "Agents") {
      navigate('/agents'); // Navigate to AgentsPage
    } else if (label === "Login") {
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a onClick={() => navigate('/')} className="navbar-brand">
          <img src={logo} alt="Material Tailwind Logo" className="navbar-logo" />
        </a>
        <div className="w-4"></div>

        <div className="nav-list hidden lg:flex">
          {navListItems.map(({ label, icon: Icon }) => (
            <a key={label} onClick={() => handleNavigation(label)} className="nav-item">
              <Icon size={18} className="icon" /> {label}
            </a>
          ))}
        </div>

        <button className="mobile-toggle lg:hidden" onClick={toggleIsNavOpen}>
          ≡
        </button>

        <button className="login-btn hidden lg:block" onClick={() => handleNavigation("Login")}>
          Log In
        </button>
      </div>

      {isNavOpen && (
        <div className="mobile-nav lg:hidden">
          <div className="nav-list">
            {navListItems.map(({ label, icon: Icon }) => (
              <a key={label} onClick={() => handleNavigation(label)} className="nav-item">
                <Icon size={18} className="icon" /> {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;