import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { HiChevronDown, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-[90%] md:w-[70%] h-[80px] flex items-center justify-between mt-10 px-6 rounded-full font-header bg-primary shadow-lg"
    >
      <img src={Logo} alt="SmartSide" className="h-12 w-auto" />

      <ul className="hidden md:flex gap-6 font-bold">
        <li className="cursor-pointer">HOME</li>
        <Link to="about" smooth={true} duration={1000}>
          <li className="cursor-pointer flex items-center">
            ABOUT US
            <HiChevronDown />
          </li>
        </Link>
        <Link to="service" smooth={true} duration={1000}>
          <li className="cursor-pointer flex items-center">
            SERVICES <HiChevronDown />
          </li></Link>
        <li className="cursor-pointer flex items-center">
          PROJECTS <HiChevronDown />
        </li>
        <li className="cursor-pointer flex items-center">
          CAREER <HiChevronDown />
        </li>
        <li className="cursor-pointer">CONTACT</li>
      </ul>

      {/* CTA Button */}
      <button className="flex items-center gap-3 py-3 px-6 rounded-full font-semibold bg-primary-btn-color text-white cursor-pointer hover:bg-primary-dark transition">
        Get an appointment
        <HiArrowRight />
      </button>
    </motion.div>
  );
};

export default Navbar;
