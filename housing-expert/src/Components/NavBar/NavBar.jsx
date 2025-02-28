import React, { useState, useEffect } from "react";
import "./NavBar.css"; // Import the updated custom CSS
import logo from "../../assets/Logo/logo.png";
// Import Lucide Icons
import { User, Settings, Inbox, HelpCircle, LogOut, Box, FileText, Rocket } from "lucide-react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setIsNavOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const profileMenuItems = [
    { label: "My Profile", icon: User },
    { label: "Edit Profile", icon: Settings },
    { label: "Inbox", icon: Inbox },
    { label: "Help", icon: HelpCircle },
    { label: "Sign Out", icon: LogOut },
  ];

  const navListMenuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];

  const navListItems = [
    { label: "Account", icon: User },
    { label: "Blocks", icon: Box },
    { label: "Docs", icon: FileText },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="Material Tailwind Logo" className="navbar-logo" />
        </a>

        {/* Desktop Nav List */}
        <div className="nav-list hidden lg:flex">
          {/* Pages Dropdown */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              onMouseEnter={() => setIsPagesMenuOpen(true)}
              onMouseLeave={() => setIsPagesMenuOpen(false)}
            >
              Pages{" "}
              <span className={`chevron ${isPagesMenuOpen ? "rotate" : ""}`}>
                ▼
              </span>
            </a>
            {isPagesMenuOpen && (
              <div className="dropdown-menu pages-menu">
                <div className="menu-card">
                  <Rocket size={32} color="white" />
                </div>
                <ul className="menu-items">
                  {navListMenuItems.map(({ title, description }) => (
                    <li key={title}>
                      <a href="#" className="menu-item">
                        <h6>{title}</h6>
                        <p>{description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {navListItems.map(({ label, icon: Icon }) => (
            <a key={label} href="#" className="nav-item">
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
        <button className="login-btn hidden lg:block">Log In</button>

        {/* Profile Menu */}
        <div className="profile-menu">
          <button
            className="profile-toggle"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
              alt="avatar"
              className="avatar"
            />
            <span className={`chevron ${isProfileMenuOpen ? "rotate" : ""}`}>
              ▼
            </span>
          </button>
          {isProfileMenuOpen && (
            <ul className="profile-dropdown">
              {profileMenuItems.map(({ label, icon: Icon }, index) => (
                <li
                  key={label}
                  onClick={closeProfileMenu}
                  className={`profile-item ${
                    index === profileMenuItems.length - 1 ? "sign-out" : ""
                  }`}
                >
                  <Icon size={16} className="icon" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {isNavOpen && (
        <div className="mobile-nav lg:hidden">
          <div className="nav-list">
            <div className="nav-item">
              Pages
              <ul className="mobile-pages">
                {navListMenuItems.map(({ title, description }) => (
                  <li key={title}>
                    <a href="#" className="menu-item">
                      <h6>{title}</h6>
                      <p>{description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {navListItems.map(({ label, icon: Icon }) => (
              <a key={label} href="#" className="nav-item">
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