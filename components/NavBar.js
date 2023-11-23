import React, { useState, useEffect, useRef } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react'
import { Hero } from './Hero';

const NavBar = () => {

  const handleAboutClick = (event) => {
    event.preventDefault();
    const screenWidth = window.innerWidth;
  
    // Define breakpoints
    const lgBreakpoint = 1280; // Large screens
    const mdBreakpoint = 768;  // Medium screens
  
    let aboutSectionId;
    if (screenWidth >= lgBreakpoint) {
      aboutSectionId = 'about'; // ID for large screen about section
    } else if (screenWidth >= mdBreakpoint) {
      aboutSectionId = 'about-md'; // ID for medium screen about section
    } else {
      aboutSectionId = 'about-sm'; // ID for small screen about section
    }
  
    const aboutSection = document.getElementById(aboutSectionId);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef();
  

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="w-full">
      <nav className="flex items-center items justify-between bg-black p-6 z-20">
        <div className="lg:ml-4 flex items-center flex-shrink-0">
          <img src="/logo-1.svg" alt="Logo" className="h-16 w-16 mr-2" />
        </div>
        <div className="hidden xl:block">
          <div className="text-sm flex items-center">
            <a href="#about" onClick={handleAboutClick} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-12 menu-item">
              About
            </a>
            <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-12 menu-item">
              Projects
            </a>
            <a href="#resume" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-8 menu-item">
              Resume
            </a>
            <a href="#contact" className="lg:inline-block text-sm px-6 py-4 leading-none text-white border-white bg hover:border-transparent hover:text-black hover:bg-white mr-12 lg:mt-0 menu-item-button">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hidden md:block lg:block xl:hidden">
          <div className="text-sm flex items-center">
            <a href="#about-md" onClick={handleAboutClick} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-12 menu-item">
              About
            </a>
            <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-12 menu-item">
              Projects
            </a>
            <a href="#resume" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-8 menu-item">
              Resume
            </a>
            <a href="#contact" className="lg:inline-block text-sm px-6 py-4 leading-none text-white border-white bg hover:border-transparent hover:text-black hover:bg-white mr-12 lg:mt-0 menu-item-button">
              Get in Touch
            </a>
          </div>
        </div>
        {/* Mobile menu button (hidden for larger screens, visible for small screens) */}
        <div className="xl:hidden lg:hidden md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
      <div className={`menu-panel ${isOpen ? 'open' : ''}`}>
        <a href="#about-sm" onClick={handleAboutClick} className='menu-item'>About</a>
        <a href="#projects" className='menu-item'>Projects</a>
        <a href="#resume" className='menu-item'>Resume</a>
        <a href="#contact" className='menu-item-button-sm px-6 py-4 leading-none text-white border border-white hover:border-transparent hover:text-black hover:bg-white'>Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;
