import React from 'react'
import about from '../assets/about.png'
import career from '../assets/career.png'
import product from '../assets/product.png'
import contact from '../assets/contact.png'
import service1 from '../assets/service-1.png'
import { motion } from 'framer-motion'
const BoxContainer = ({name}) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
    className='w-[90%] mx-auto h-[400px] rounded-[45px] bg-primary-btn-color mt-20 relative overflow-hidden'>
        <div className='w-[90%] mx-auto'>
            <h1 className='text-6xl font-primary font-bold py-20 px-10'>{name === 'Career'? 'Life @ Smartside' : name === "Services"? "Our Services" : name ==="Projects"? "Our Projects" : name === 'Contact'? "Contact Us" : 'About Us'}</h1>
        </div>
        {
            name === 'About Us' && (
                <img src={about} alt="sample" className='absolute top-0 right-25'/>
            )
        }
        {
            name === 'Career' && (
                <img src={career} alt="sample" className='absolute top-0 right-25'/>
            )
        }
        {
            name === 'Services' && (
                <img src={service1} alt="sample" className='absolute top-20 right-[25%]'/>
            )
        }
        {
            name === 'Projects' && (
                <img src={product} alt="sample" className='absolute top-0 right-25'/>
            )
        }
        {
            name === 'Contact' && (
                <img src={contact} alt="sample" className='absolute top-0 right-25'/>
            )
        }
    </motion.div>
  )
}

export default BoxContainer