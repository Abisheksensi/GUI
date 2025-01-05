import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo from "../assets/Logo/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define navigation items for reusability
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
    { href: "#faq", label: "FAQ" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-20 mr-2" src={logo} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-black font-poppins hover:text-blue-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#signin"
              className="font-poppins py-2 px-3 border rounded-md"
            >
              Sign in
            </a>
            <a
              href="#create-account"
              className="font-poppins bg-gradient-to-r from-orange-500 to-orange-200 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-20 bg-neutral-900 p-8 flex flex-col justify-between h-screen lg:hidden">
            {/* Navigation Links */}
            <ul className="space-y-6 overflow-auto">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white font-poppins hover:text-blue-500 text-lg"
                    onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="#signin"
                className="block font-poppins py-2 px-3 border rounded-md text-white text-center border-gray-600 hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </a>
              <a
                href="#create-account"
                className="block font-poppins bg-gradient-to-r from-orange-500 to-orange-200 py-2 px-3 rounded-md text-center text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
