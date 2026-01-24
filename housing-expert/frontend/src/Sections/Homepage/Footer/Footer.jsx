import React from "react";
import './Footer.css';
import logo from "../../../assets/Logo/logo.png";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Housing Expert Logo" className="footer-logo" />
          </div>
          <div className="footer-links">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="footer-list">
                <p className="footer-list-title satoshi-font">{title}</p>
                {items.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-list-item satoshi-font">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright satoshi-font">
            © {currentYear} Housing Expert. All Rights Reserved.
          </p>
          <p className="footer-design-credit satoshi-font">
            Designed by Abishek Jayathilake
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;