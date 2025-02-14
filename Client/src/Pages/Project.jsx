import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import { HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import cook from '../assets/cooking.png'
import Footer from '../Components/Footer'
import GotoTop from '../Components/GotoTop'

const Project = () => {
  return (
    <>
    <GotoTop/>
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Projects'} />

      {/* Heading Section */}
      <div className='w-full flex items-center justify-center mt-12 md:mt-20 lg:mt-30 flex-col px-4 text-center'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-primary'>
          Oopps! We are Cooking.
        </h1>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-primary mt-2 md:mt-4'>
          See you soon...
        </h1>
      </div>

      {/* Description Text */}
      <div className='w-full flex items-center justify-center mt-8 md:mt-12 lg:mt-15 px-4'>
        <p className='flex items-center justify-center font-secondary text-gray-400 w-full md:w-[80%] lg:w-[60%] mx-auto text-center text-base md:text-lg'>
          Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra
        </p>
      </div>

      {/* Search Bar */}
      <div className='w-full flex items-center justify-center mt-6 md:mt-8 lg:mt-10 font-secondary px-4'>
        <div className='w-full md:w-[60%] lg:w-[30%] bg-[#F1F5EB] flex items-center justify-between relative rounded-full overflow-hidden'>
          <input 
            type="text" 
            className='w-full px-5 h-[50px] bg-transparent outline-none' 
            placeholder='Search Here' 
          />
          <button className='absolute right-0 bg-primary-btn-color text-white w-[55px] h-[50px] flex items-center justify-center rounded-full'>
            <HiSearch size={20} />
          </button>
        </div>
      </div>

      {/* Home Button */}
      <div className='w-full flex items-center justify-center mt-12 md:mt-16 lg:mt-20'>
        <Link to={'/'}>
          <button className="py-3 md:py-4 px-6 md:px-7 bg-primary-btn-color text-white rounded-full hover:bg-opacity-90 transition-colors">
            Go to Home
          </button>
        </Link>
      </div>

      {/* Cooking Image */}
      <div className='w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex items-center justify-center mt-8 md:mt-10 pb-6 md:pb-10'>
        <img 
          src={cook} 
          alt="Cooking in progress" 
          className='w-full h-auto object-contain'
        />
      </div>

      <Footer/>
    </>
  )
}

export default Project