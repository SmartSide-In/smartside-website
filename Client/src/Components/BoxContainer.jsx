import React from 'react';
import about from '../assets/about.png';
import career from '../assets/career.png';
import product from '../assets/product.png';
import contact from '../assets/contact.png';
import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import { motion } from 'framer-motion';

const BoxContainer = ({ name }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
            className='w-[90%] md:w-[80%] mx-auto md:h-[400px] rounded-3xl bg-primary-btn-color mt-10 md:mt-20 relative overflow-hidden p-6 md:p-10'
        >
            <div className='w-full'>
                <h1 className='text-3xl md:text-6xl font-primary font-bold py-10 md:py-20 px-5 md:px-10'>
                    {name === 'Career' ? 'Life @ Smartside' :
                        name === 'Services' ? 'Our Services' :
                        name === 'Projects' ? 'Our Products' :
                        name === 'Contact' ? 'Contact Us' : 'About Us'}
                </h1>
            </div>

            {name === 'About Us' && (
                <img src={about} alt='About Us' className='absolute md:top-15 top-10 right-10 md:right-15 w-24 md:w-48 lg:w-72' />
            )}

            {name === 'Career' && (
                <img src={career} alt='Career' className='hidden md:block absolute top-15 right-15 w-24 md:w-48 lg:w-72' />
            )}

            {name === 'Services' && (
                <>
                    <img src={service1} alt='Service 1' className='absolute top-20 md:top-[50%] right-[10%] md:right-[25%] w-20 md:w-40 lg:w-60' />
                    <img src={service2} alt='Service 2' className='absolute -top-2 md:-top-5 right-[2%] md:right-[5%] w-24 md:w-48 lg:w-72' />
                </>
            )}

            {name === 'Projects' && (
                <img src={product} alt='Projects' className='absolute top-20 right-20 w-24 md:w-48 lg:w-72' />
            )}

            {name === 'Contact' && (
                <img src={contact} alt='Contact' className='absolute top-12 right-15 w-24 md:w-48 lg:w-72' />
            )}
        </motion.div>
    );
};

export default BoxContainer;
