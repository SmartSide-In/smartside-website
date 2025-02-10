import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import { HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import cook from '../assets/cooking.png'
import Footer from '../Components/Footer'
const Project = () => {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Projects'} />
      <div className='w-full flex items-center justify-center mt-30 flex-col'>
        <h1 className='text-6xl font-bold font-primary'>Oopps! We are Cooking.</h1>
        <h1 className='text-6xl font-bold font-primary'>See you soon...</h1>
      </div>
      <div className='w-full flex items-center justify-center mt-15'>
        <p className='flex items-center justify-center font-secondary text-gray-400 w-[60%] mx-auto'>Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra</p>
      </div>
      <div className='w-full flex items-center justify-center mt-10 font-secondary'>
        <div className='w-[30%] bg-[#F1F5EB] flex items-center justify-between relative rounded-4xl'>
          <input type="text" className='w-full px-5 h-[50px]' placeholder='Search Here' />
          <button className='abosolute right-2 bg-primary-btn-color text-white w-[55px] h-[50px] flex items-center justify-center rounded-full'><HiSearch size={20} /></button>
        </div>
      </div>
      <div className='w-full flex items-center justify-center'>
        <Link to={'/'}>
          <button className="mt-20 py-4 px-7 bg-primary-btn-color text-white rounded-4xl">
            Go to Home
          </button>
        </Link>
      </div>
      <div className='w-[80%] mx-auto flex items-center justify-center mt-10 pb-10'>
        <img src={cook} alt="Img" />
      </div>
      <Footer/>
    </>
  )
}

export default Project