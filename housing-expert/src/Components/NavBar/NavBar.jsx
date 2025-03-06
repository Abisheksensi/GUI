import React, { useState, useEffect } from "react";
import "./NavBar.css"; // Import the updated custom CSS
import logo from "../../assets/Logo/logo.png";
// Import Lucide Icons
import { Home, Box, FileText } from "lucide-react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setIsNavOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navListItems = [
    { label: "Properties", icon: Home },
    { label: "Blocks", icon: Box },
    { label: "Docs", icon: FileText },
  ];

  // Handler for navigating to the login page
  const handleLoginClick = () => {
    window.location.href = "/login"; // Navigate to /login page using React DOM
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-brand" onClick={() => window.location.href = "/"}>
          <img src={logo} alt="Material Tailwind Logo" className="navbar-logo" />
        </button>
        {/* Adding a small spacer div for the gap */}
        <div className="w-4"></div>

        {/* Desktop Nav List */}
        <div className="nav-list hidden lg:flex">
          {/* Other Nav Items */}
          {navListItems.map(({ label, icon: Icon }) => (
            <a key={label} href={label === "Properties" ? "/properties" : "/"} className="nav-item">
              <Icon size={18} className="icon" /> {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle lg:hidden"
          onClick={toggleIsNavOpen}
        >
          ≡
        </button>

        {/* Login Button */}
        <button className="login-btn hidden lg:block" onClick={handleLoginClick}>
          Log In
        </button>
      </div>

      {/* Mobile Nav */}
      {isNavOpen && (
        <div className="mobile-nav lg:hidden">
          <div className="nav-list">
            {navListItems.map(({ label, icon: Icon }) => (
              <a key={label} href={label === "Properties" ? "/properties" : "/"} className="nav-item">
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