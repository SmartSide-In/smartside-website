import React, { useState } from 'react';
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
import emailjs from '@emailjs/browser';

const Contact = () => {

  const EMAIL_ID = 'service_850lu4i'
  const TEMPLATE_ID = 'template_00cf8yo'
  const PUBLIC_ID = 'dQ9ILQOvzgBlEk-xI'
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, error: false, message: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear status when user starts typing again
    if (status.show) {
      setStatus({ show: false, error: false, message: '' });
    }
  };

  // Email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Phone validation
  const isValidPhone = (phone) => {
    return /^\+?[\d\s-]{10,}$/.test(phone);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ show: false, error: false, message: '' });

    // Enhanced validation
    if (!formData.email || !formData.phone || !formData.message) {
      setStatus({
        show: true,
        error: true,
        message: 'Please Fill in all Required Fields'
      });
      setLoading(false);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus({
        show: true,
        error: true,
        message: 'Please Enter a valid Email Address'
      });
      setLoading(false);
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setStatus({
        show: true,
        error: true,
        message: 'Please Enter a valid Phone Number'
      });
      setLoading(false);
      return;
    }

    // EmailJS configuration
    const templateParams = {
      from_email: formData.email,
      from_phone: formData.phone,
      from_address: formData.address || 'Not provided',
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAIL_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_ID
      );

      // Success
      setStatus({
        show: true,
        error: false,
        message: 'Message sent successfully!'
      },setTimeout(() => {
        setStatus({ show: false, error: false, message: '' });
      }, 5000));

      // Clear form
      setFormData({
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    } catch (error) {
      // Error
      setStatus({
        show: true,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GotoTop />
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

      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <BoxContainer name={'Contact'} />

      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 md:mt-30 w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-8 md:gap-0">
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
        <form onSubmit={handleSubmit} className="w-full md:w-[50%] font-header">
          <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-2 md:justify-between">
            <span className="w-full md:w-[49%]">
              <p className="font-header">Your Email <span className="text-red-500">*</span></p>
              <span className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="py-3 px-4 mt-2 w-full border border-gray-400 rounded-full focus:outline-none focus:border-primary-btn-color"
                  required
                />
                <RiSendPlaneFill className="absolute right-4 top-1 text-gray-500" />
              </span>
            </span>
            <span className="w-full md:w-[49%]">
              <p className="font-header">Your Phone <span className="text-red-500">*</span></p>
              <span className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="py-3 mt-2 px-4 w-full border border-gray-400 rounded-full focus:outline-none focus:border-primary-btn-color"
                  required
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
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
                className="py-3 px-4 mt-2 w-full border border-gray-400 rounded-full focus:outline-none focus:border-primary-btn-color"
              />
              <IoLocationSharp className="absolute right-4 top-6 text-gray-500" />
            </div>
          </div>
          <div className="mt-5">
            <p className="font-header">Message <span className="text-red-500">*</span></p>
            <div className="relative">
              <textarea
                rows={8}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message .."
                className="mt-2 border border-gray-400 rounded-xl w-full p-5 focus:outline-none focus:border-primary-btn-color"
                required
              />
            </div>
          </div>
          {status.show && (
            <div
              className={`mt-4 p-3 rounded-lg ${status.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}
              role="alert"
            >
              {status.message}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="mt-5 py-4 px-7 bg-primary-btn-color w-full text-white rounded-full md:rounded-4xl hover:bg-opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;