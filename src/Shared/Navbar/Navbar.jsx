import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-l from-[#07f7f7] to-[#16d59c] p-4 fixed w-full z-50">
      <div className="lg:max-w-7xl mx-auto  flex justify-between items-center">
        <div className="hidden md:block">
          <span className="text-white text-xl font-semibold">Nafiz's Portfolio</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform transform ${
                mobileMenuOpen ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-[61px] left-0 bg-gradient-to-l w-full from-[#07f7f7] to-[#16d59c]  transform origin-top transition-transform ${
            mobileMenuOpen ? 'scale-y-100' : 'scale-y-0'
          }`}
        >
          <ul className="py-4 text-white text-center">
            <li>
              <Link to="/" onClick={toggleMobileMenu} className="text-xl tracking-widest block py-2 hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu} className="text-xl tracking-widest block py-2 hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMobileMenu} className="text-xl tracking-widest block py-2 hover:text-gray-300">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMobileMenu} className="text-xl tracking-widest block py-2 hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu} className="text-xl tracking-widest block py-2 hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {/* Menu Items (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="/" className="text-xl tracking-widest text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-xl tracking-widest text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="text-xl tracking-widest text-white hover:text-gray-300">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-xl tracking-widest text-white hover:text-gray-300">
                Projects
              </Link>
            </li>
            
            <li>
              <Link to="/contact" className="text-xl tracking-widest text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
