import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { HiClock } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import icon from '../assets/icon.png'
import Footer from '../Components/Footer'
const Contact = () => {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Contact'} />
      <div className='mt-30 w-[80%] mx-auto flex'>
        <div className='w-[30%]'>
          <div className='flex items-center gap-5'>
            <IoCall size={40} className='text-primary-btn-color' />
            <span>
              <p className='font-header text-gray-400'>Requesting A Call:</p>
              <p className='font-header font-semibold mt-2'>(555) 555-5555</p>
            </span>
          </div>
          <div className='flex items-center gap-5 mt-10'>
            <IoIosMail size={40} className='text-primary-btn-color' />
            <span>
              <p className='font-header text-gray-400'>E-mail:</p>
              <p className='font-header font-semibold mt-2'>info@example.com</p>
            </span>
          </div>
          <div className='flex items-center gap-5 mt-10'>
            <IoLocationSharp size={40} className='text-primary-btn-color' />
            <span>
              <p className='font-header text-gray-400'>Location:</p>
              <p className='font-header font-semibold mt-2'>6391 Elgin St. Celina, Delaware 10299</p>
            </span>
          </div>
        </div>
        <div className='w-[30%] border-l border-gray-400 pl-30'>
          <div className='flex flex-col'>
            <p className='font-header text-gray-400'>Monday</p>
            <span className='flex items-center gap-3'>
              <HiClock className='text-primary-btn-color' />
              <p className='font-header font-semibold mt-2'>9am - 8pm</p>
            </span>
          </div>
          <div className='flex flex-col mt-10'>
            <p className='font-header text-gray-400'>Tuesday-Friday</p>
            <span className='flex items-center gap-3'>
              <HiClock className='text-primary-btn-color' />
              <p className='font-header font-semibold mt-2'>12am - 9pm</p>
            </span>
          </div>
          <div className='flex flex-col mt-10'>
            <p className='font-header text-gray-400'>Saturday</p>
            <span className='flex items-center gap-3'>
              <HiClock className='text-primary-btn-color' />
              <p className='font-header font-semibold mt-2'>8am - 3pm</p>
            </span>
          </div>
        </div>
        <div className='w-[40%]'>
          <div className='w-[80%] h-[90%] rounded-xl bg-primary mx-auto'></div>
        </div>
      </div>
      <div className='mt-30 w-[70%] h-[80vh] mx-auto flex justify-center items-center'>
        <div className='w-[50%] h-[60%] flex flex-col items-start justify-center'>
          <div className='flex items-center gap-3'>
            <img src={icon} alt="Icon" />
            <p className='font-semibold font-header'>START A NEW STORY</p>
          </div>
          <div className='mt-5'>
            <h1 className='font-header text-4xl font-semibold'>Join Our Team! <br />Apply Now.</h1>
          </div>
          <div className='mt-3'>
            <p className='font-sm text-gray-400 w-[80%]'>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy text ever</p>
          </div>
          <div className='mt-5'>
            <span className='flex my-3 items-center gap-5'>
              <FaCheck className='text-primary-btn-color' size={20} />
              <p className='font-header font-semibold'>Mistakes To Avoid</p>
            </span>
            <span className='flex my-3 items-center gap-5'>
              <FaCheck className='text-primary-btn-color' size={20} />
              <p className='font-header font-semibold'>Your Startup</p>
            </span>
            <span className='flex my-3 items-center gap-5'>
              <FaCheck className='text-primary-btn-color' size={20} />
              <p className='font-header font-semibold'>Knew About Fonts</p>
            </span>
            <span className='flex my-3 items-center gap-5'>
              <FaCheck className='text-primary-btn-color' size={20} />
              <p className='font-header font-semibold'>Knew About Fonts</p>
            </span>
          </div>
        </div>
        <div className='w-[50%] font-header'>
          <div className='w-full flex items-center justify-between'>
            <span className='w-[49%]'>
              <p className='font-header'>Your Email</p>
              <span className="relative">
                <input type="text" placeholder='Your Email ' className='py-3 px-4 mt-2 w-full border border-gray-400 rounded-full' />
                <RiSendPlaneFill className='absolute right-4 top-1 text-gray-500' />
              </span>
            </span>
            <span className='w-[49%]'>
              <p className='font-header'>Your Phone</p>
              <span className="relative">
                <input type="text" placeholder='Your Email ' className='py-3 mt-2 px-4 w-full border border-gray-400 rounded-full' />
                <IoCall className='absolute right-4 top-1 text-gray-500' />
              </span>
            </span>
          </div>
          <div className='mt-5'>
            <p className='font-header'>Your Address</p>
            <div className='relative'>
              <input type="text" placeholder='Your Address' className='py-3 px-4 mt-2 w-full border border-gray-400 rounded-full' />
              <IoLocationSharp className='absolute right-4 top-4 text-gray-500' />
            </div>
          </div>
          <div className='mt-5'>
            <p className='font-header'>Message</p>
            <div className='relative'>
              <textarea rows={8} placeholder='Write Message ..' className='mt-2 border border-gray-400 rounded-xl w-full p-5'></textarea>
            </div>
          </div>
          <div>
            <button className='mt-5 py-4 px-7 bg-primary-btn-color w-full text-white rounded-4xl'>Send message</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact