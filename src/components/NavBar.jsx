import {Menu, X} from "lucide-react";
import { useState } from "react";
import React from 'react';
import logo from '../assets/Logo/logo.png';

const NavBar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleNavbar = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className='h-10 w-20 mr-2' src={logo} alt='logo'/>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
            <li><a href="#home" className="text-black font-poppins hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="text-black font-poppins hover:text-blue-500">About</a></li>
            <li><a href="#services" className="text-black font-poppins hover:text-blue-500">Services</a></li>
            <li><a href="#portfolio" className="text-black font-poppins hover:text-blue-500">Portfolio</a></li>
            <li><a href="#blog" className="text-black font-poppins hover:text-blue-500">Blog</a></li>
            <li><a href="#contact" className="text-black font-poppins hover:text-blue-500">Contact</a></li>
            <li><a href="#faq" className="text-black font-poppins hover:text-blue-500">FAQ</a></li>
            <li><a href="#testimonials" className="text-black font-poppins hover:text-blue-500">Testimonials</a></li>

            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#signin" className="font-poppins py-2 px-3 border rounded-md">
                Sign in
              </a>
              <a href="#Login" className="font-poppins bg-gradient-to-r from-orange-500 to-orange-200 py-2 px-3 rounded-md">
                Create an account
              </a>
            </div>
           <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {isMenuOpen ? <X/>:<Menu/>}
            </button>
            </div> 
          </div>
        </div>
    </nav>
  ) 
}

export default NavBar