import React from 'react'
import Logo from '../assets/logo.png'
import { HiChevronDown, HiArrowRight } from "react-icons/hi";
import { motion } from"framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <motion.div 
    initial={{ opacity:0, y:-100}}
    animate={{ opacity:1, y:0}}
    className='w-[70%] h-[80px] flex items-center justify-between mt-10 px-4 rounded-full font-header bg-primary'>
        <img src={Logo} alt="SmartSide" />
        <ul className='flex gap-5 font-bold'>
            <li className='cursor-pointer'>HOME</li>
            <Link
            to="#about"
            smooth = {true}
            duration = {1000}
            >
                <li className='cursor-pointer flex items-center'>ABOUT US<HiChevronDown /></li>
            </Link>
            <li className='cursor-pointer flex items-center'>SERVICES<HiChevronDown /></li>
            <li className='cursor-pointer flex items-center'>PROJECTS<HiChevronDown /></li>
            <li className='cursor-pointer flex items-center'>CAREER<HiChevronDown /></li>
            <li className='cursor-pointer'>CONTACT</li>
        </ul>
        <button className='flex items-center gap-5 py-4 px-8 rounded-full font-semi-bold bg-primary-btn-color text-white cursor-pointer'>Get an appointment<HiArrowRight /></button>
    </motion.div>
  )
}

export default Navbar