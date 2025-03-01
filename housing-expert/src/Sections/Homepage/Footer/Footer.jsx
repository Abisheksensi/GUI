import React from "react";

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
          <h1 className="footer-title satoshi-font">Material Tailwind</h1>
          <div className="footer-links">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="footer-list">
                <p className="footer-list-title satoshi-font">{title}</p>
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-list-item satoshi-font"
                    >
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
            © {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon">
            </a>
            <a href="#" className="social-icon">
            </a>
            <a href="#" className="social-icon">
            </a>
            <a href="#" className="social-icon">
            </a>
            <a href="#" className="social-icon">
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;