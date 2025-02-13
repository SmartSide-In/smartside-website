import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: "HOME", path: "/", hasDropdown: false },
    { title: "ABOUT US", path: "/about", hasDropdown: true },
    { title: "SERVICES", path: "/services", hasDropdown: true },
    { title: "PROJECTS", path: "/projects", hasDropdown: true },
    { title: "CAREER", path: "/career", hasDropdown: true },
    { title: "CONTACT", path: "/contact", hasDropdown: false },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto h-20 flex items-center justify-between rounded-full font-header bg-primary shadow-lg px-4 md:px-6 mt-4"
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 font-bold">
          {navItems.map((item) => (
            <Link to={item.path} key={item.title}>
              <li className="cursor-pointer flex items-center hover:text-primary-dark transition-colors">
                {item.title}
                {item.hasDropdown && <HiChevronDown className="ml-1" />}
              </li>
            </Link>
          ))}
        </ul>

        {/* CTA Button - Hidden on mobile */}
        <button className="hidden lg:flex items-center gap-3 py-3 px-6 rounded-full font-semibold bg-primary-btn-color text-white cursor-pointer hover:bg-primary-dark transition">
          Get an appointment
          <HiArrowRight />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden z-50 rounded-b-lg mb-4"
        >
          <ul className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <Link 
                to={item.path} 
                key={item.title}
                onClick={() => setIsOpen(false)}
              >
                <li className="cursor-pointer flex items-center mt-5 justify-between hover:text-primary-dark transition-colors">
                  {item.title}
                  {item.hasDropdown && <HiChevronDown />}
                </li>
              </Link>
            ))}
            <li>
              <button className="w-full flex items-center mt-5 justify-center gap-3 py-3 px-6 rounded-full font-semibold bg-primary-btn-color text-white cursor-pointer hover:bg-primary-dark transition">
                Get an appointment
                <HiArrowRight />
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;