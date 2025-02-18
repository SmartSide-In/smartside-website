import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar';
import BoxContainer from '../Components/BoxContainer';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { HiClock } from 'react-icons/hi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa6';
import icon from '../assets/icon.png';
import Footer from '../Components/Footer';
import GotoTop from '../Components/GotoTop';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <>
    <GotoTop/>
      {/* SEO Section */}
      <Helmet>
        <title>Contact Us | SmartSide</title>
        <meta
          name="description"
          content="Get in touch with SmartSide. Request a call, send an email, or apply to join our team. We're here to help you with your queries and career opportunities."
        />
        <meta
          name="keywords"
          content="contact SmartSide, request a call, email support, join SmartSide, career opportunities, business hours"
        />
        <meta name="author" content="SmartSide" />
        <meta property="og:title" content="Contact Us - SmartSide" />
        <meta
          property="og:description"
          content="Get in touch with SmartSide. Request a call, send an email, or apply to join our team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.smartside.com/contact" />
        <meta property="og:image" content="https://www.smartside.com/icon.png" />
        <meta property="og:site_name" content="SmartSide" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - SmartSide" />
        <meta
          name="twitter:description"
          content="Get in touch with SmartSide. Request a call, send an email, or apply to join our team."
        />
        <meta name="twitter:image" content="https://www.smartside.com/icon.png" />
      </Helmet>

      {/* Page Content */}
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <BoxContainer name={'Contact'} />

      {/* Contact Info Section */}
      <motion.div 
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5, delay:0.5 }}
      className="mt-8 md:mt-30 w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-8 md:gap-0">
        {/* Contact Details */}
        <div className="w-full md:w-[30%]">
          <div className="flex items-center gap-5">
            <IoCall size={40} className="text-primary-btn-color" />
            <span>
              <p className="font-header text-gray-400">Requesting A Call:</p>
              <p className="font-header font-semibold mt-2">+91 9361327770</p>
            </span>
          </div>
          <div className="flex items-center gap-5 mt-8 md:mt-10">
            <IoIosMail size={40} className="text-primary-btn-color" />
            <span>
              <p className="font-header text-gray-400">E-mail:</p>
              <p className="font-header font-semibold mt-2">support@smartside.com</p>
            </span>
          </div>
        </div>

        {/* Business Hours */}
        <div className="w-full md:w-[30%] border-t md:border-t-0 md:border-l border-gray-400 pt-8 md:pt-0 md:pl-8 lg:pl-30">
          <div className="flex flex-col">
            <p className="font-header text-gray-400">Monday</p>
            <span className="flex items-center gap-3">
              <HiClock className="text-primary-btn-color" />
              <p className="font-header font-semibold mt-2">9am - 8pm</p>
            </span>
          </div>
          <div className="flex flex-col mt-8 md:mt-10">
            <p className="font-header text-gray-400">Tuesday-Friday</p>
            <span className="flex items-center gap-3">
              <HiClock className="text-primary-btn-color" />
              <p className="font-header font-semibold mt-2">12am - 9pm</p>
            </span>
          </div>
          <div className="flex flex-col mt-8 md:mt-10">
            <p className="font-header text-gray-400">Saturday</p>
            <span className="flex items-center gap-3">
              <HiClock className="text-primary-btn-color" />
              <p className="font-header font-semibold mt-2">8am - 3pm</p>
            </span>
          </div>
        </div>

        {/* Background Block */}
        <div className="w-full md:w-[40%] h-48 md:h-auto">
          <div className="w-[90%] md:w-[80%] h-full md:h-[90%] rounded-xl bg-primary mx-auto"></div>
        </div>
      </motion.div>

      {/* Application Section */}
      <div className="mt-8 md:mt-30 w-[95%] md:w-[90%] lg:w-[70%] min-h-screen md:h-[80vh] mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
        {/* Left Section */}
        <div className="w-full md:w-[50%] h-auto md:h-[60%] flex flex-col items-start justify-center">
          <div className="flex items-center gap-3">
            <img src={icon} alt="Icon" />
            <p className="font-semibold font-header">START A NEW STORY</p>
          </div>
          <div className="mt-5">
            <h1 className="font-header text-3xl md:text-4xl font-semibold">
              Join Our Team! <br />Apply Now.
            </h1>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-400 w-full md:w-[80%]">
              We believe in passion, innovation, and collaboration. At SmartSide, our culture fosters.
            </p>
          </div>
          <div className="mt-5 w-full">
            {[
              { text: 'Continuous Learning' },
              { text: 'Work-Life Balance' },
              { text: 'Growth-Oriented Environment' },
              { text: 'Collaborative Teamwork' },
            ].map((value, index) => (
              <span key={index} className="flex my-3 items-center gap-5">
                <FaCheck className="text-primary-btn-color" size={20} />
                <p className="font-header font-semibold">{value.text}</p>
              </span>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[50%] font-header">
          <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-2 md:justify-between">
            <span className="w-full md:w-[49%]">
              <p className="font-header">Your Email</p>
              <span className="relative">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="py-3 px-4 mt-2 w-full border border-gray-400 rounded-full"
                />
                <RiSendPlaneFill className="absolute right-4 top-1 text-gray-500" />
              </span>
            </span>
            <span className="w-full md:w-[49%]">
              <p className="font-header">Your Phone</p>
              <span className="relative">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="py-3 mt-2 px-4 w-full border border-gray-400 rounded-full"
                />
                <IoCall className="absolute right-4 top-1 text-gray-500" />
              </span>
            </span>
          </div>
          <div className="mt-5">
            <p className="font-header">Your Address</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Your Address"
                className="py-3 px-4 mt-2 w-full border border-gray-400 rounded-full"
              />
              <IoLocationSharp className="absolute right-4 top-6 md:top-4 text-gray-500" />
            </div>
          </div>
          <div className="mt-5">
            <p className="font-header">Message</p>
            <div className="relative">
              <textarea
                rows={8}
                placeholder="Write Message .."
                className="mt-2 border border-gray-400 rounded-xl w-full p-5"
              />
            </div>
          </div>
          <div>
            <button className="mt-5 py-4 px-7 bg-primary-btn-color w-full text-white rounded-full md:rounded-4xl">
              Send message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;