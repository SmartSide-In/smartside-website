import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const GetInternship = () => {

    const handleButton = () => {
        window.open('https://forms.gle/ueWLdJrpWQwW2cxX8', '_blank');
    }
  return (
    <div className='w-full bg-gradient-to-r from-gray-50 to-gray-100 py-16 md:py-20 font-primary'>
      <div className='w-[90%] md:w-[80%] mx-auto px-4 md:px-10 py-8 md:py-12 bg-white rounded-xl shadow-lg'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
          {/* Text Content */}
          <div className='w-full md:w-[60%] flex flex-col gap-4 md:gap-6 text-center md:text-left'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              Get an Internship from SmartSide
            </h1>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl font-secondary'>
              Your internship is not just about work; it's about discovering what you're truly capable of.
            </p>
          </div>

          {/* Button Container */}
          <div className='w-full md:w-auto font-secondary'>
            <button className='w-full md:w-auto px-8 py-4 bg-primary-btn-color hover:bg-primary-btn-color/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-md' onClick = {handleButton}>
              <h2 className='text-lg md:text-xl flex items-center justify-center gap-5 font-semibold whitespace-nowrap'>
                Get Internship
                <FaArrowRight />
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInternship;