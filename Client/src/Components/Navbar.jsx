import React, { useState, useEffect, useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { HiChevronDown, HiArrowRight, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleDropdownClick = useCallback((title, path) => {
    // Desktop behavior remains the same
    if (window.innerWidth >= 1024) {
      navigate(path);
    }
    setActiveDropdown(title === activeDropdown ? null : title);
  }, [navigate, activeDropdown]);

  const handleDropdownHover = useCallback((title) => {
    setActiveDropdown(title);
  }, []);

  const navItems = [
    {
      title: "HOME",
      path: "/",
      hasDropdown: false
    },
    {
      title: "ABOUT US",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        { title: "Know us", scrollTo: "aboutsection" },
        { title: "Why choose SmartSide", scrollTo: "smartside-resources" },
        { title: "Experience", scrollTo: "Choose" }
      ]
    },
    {
      title: "SERVICES",
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        { title: "Book Consultation", scrollTo: "consultation" },
        { title: "Our Services", scrollTo: "services" },
        { title: "Course Plans", scrollTo: "plans" }
      ]
    },
    {
      title: "PRODUCTS",
      path: "/projects",
      hasDropdown: false,
    },
    {
      title: "CAREER",
      path: "/career",
      hasDropdown: true,
      dropdownItems: [
        { title: "Our Values", scrollTo: "values" },
        { title: "Our Benefits", scrollTo: "benefits" },
      ]
    },
    {
      title: "CONTACT",
      path: "/contact",
      hasDropdown: false
    }
  ];

  const DropdownMenu = ({ items, isVisible, parentPath }) => (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {items.map((item) => (
            <ScrollLink
              key={item.scrollTo}
              to={item.scrollTo}
              smooth={true}
              duration={800}
              spy={true}
              offset={-50}
              className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                navigate(parentPath);
                setActiveDropdown(null);
                setTimeout(() => {
                  const element = document.getElementById(item.scrollTo);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              {item.title}
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto h-20 flex items-center justify-between rounded-full font-header bg-primary shadow-lg px-4 md:px-6 mt-4"
      >
        {/* Logo */}
        <RouterLink to="/" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </RouterLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 font-bold">
          {navItems.map((item) => (
            <li key={item.title} className="relative nav-dropdown">
              {item.hasDropdown ? (
                <div
                  onMouseEnter={() => handleDropdownHover(item.title)}
                  className="relative"
                >
                  <button
                    onClick={() => handleDropdownClick(item.title, item.path)}
                    className="flex items-center hover:text-primary-dark transition-colors"
                  >
                    {item.title}
                    <HiChevronDown className="ml-1" />
                  </button>
                  <DropdownMenu
                    items={item.dropdownItems}
                    isVisible={activeDropdown === item.title}
                    parentPath={item.path}
                  />
                </div>
              ) : (
                <RouterLink
                  to={item.path}
                  className="hover:text-primary-dark transition-colors"
                >
                  {item.title}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white rounded-b-lg shadow-lg overflow-hidden"
          >
            <ul className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.title}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        className="w-full flex items-center justify-between hover:text-primary-dark transition-colors"
                      >
                        {item.title}
                        <HiChevronDown className={`transform transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <ScrollLink
                                key={dropdownItem.scrollTo}
                                to={dropdownItem.scrollTo}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="block py-2 hover:text-primary-dark cursor-pointer"
                                onClick={() => {
                                  navigate(item.path);
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                  setTimeout(() => {
                                    const element = document.getElementById(dropdownItem.scrollTo);
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }, 100);
                                }}
                              >
                                {dropdownItem.title}
                              </ScrollLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <RouterLink
                      to={item.path}
                      className="block hover:text-primary-dark transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </RouterLink>
                  )}
                </li>
              ))}
              <li>
                <button className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-full font-semibold bg-primary-btn-color text-white cursor-pointer hover:bg-primary-dark transition">
                  Get an appointment
                  <HiArrowRight />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;