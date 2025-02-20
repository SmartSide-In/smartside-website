import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import { Link } from 'react-router-dom'
import cook from '../assets/cooking.png'
import Footer from '../Components/Footer'
import GotoTop from '../Components/GotoTop'
import { motion } from 'framer-motion'

const Project = () => {
  // SEO Configuration
  const seoData = {
    title: "Projects | SmartSide - Innovative Digital Solutions",
    description: "Explore SmartSide's upcoming projects and innovations in software development, AI solutions, and digital transformation. New projects coming soon!",
    keywords: "SmartSide projects, software development, digital solutions, upcoming projects, innovation",
    ogImage: cook, // Replace with your actual OG image URL
    ogUrl: "https://smartside.in/projects", // Replace with your actual URL
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.ogUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.ogUrl} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.ogImage} />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="SmartSide" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.ogUrl} />
      </Helmet>

      <GotoTop/>
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Projects'} />

      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5, delay:0.5 }}
        className='w-full flex items-center justify-center mt-12 md:mt-20 lg:mt-30 flex-col px-4 text-center'
      >
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-primary'>
          Oopps! We are Cooking.
        </h1>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-primary mt-2 md:mt-4'>
          See you soon...
        </h1>
      </motion.div>

      {/* Description Text */}
      <div className='w-full flex items-center justify-center mt-8 md:mt-12 lg:mt-15 px-4'>
        <p className='flex items-center justify-center font-secondary text-gray-400 w-full md:w-[80%] lg:w-[60%] mx-auto text-center text-base md:text-lg'>
        We’re excited to share that we’re currently working hard to bring you a range of amazing products. While we don’t have anything to showcase just yet, we’re dedicated to creating high-quality offerings that meet your needs and exceed your expectations.
        </p>
      </div>

      {/* Search Bar */}
      {/* <div className='w-full flex items-center justify-center mt-6 md:mt-8 lg:mt-10 font-secondary px-4'>
        <div className='w-full md:w-[60%] lg:w-[30%] bg-[#F1F5EB] flex items-center justify-between relative rounded-full overflow-hidden'>
          <input 
            type="text" 
            className='w-full px-5 h-[50px] bg-transparent outline-none' 
            placeholder='Search Here' 
            aria-label="Search projects"
          />
          <button 
            className='absolute right-0 bg-primary-btn-color text-white w-[55px] h-[50px] flex items-center justify-center rounded-full'
            aria-label="Search"
          >
            <HiSearch size={20} />
          </button>
        </div>
      </div> */}

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