import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import annon from '../assets/annon.png'
import LearnBox from '../Components/LearnBox'
import Footer from '../Components/Footer'
import PriceCard from '../Components/PriceCard'
import GotoTop from '../Components/GotoTop'

const Service = () => {
  return (
    <>
    <GotoTop/>
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Services'} />
      
      {/* Hero Section */}
      <div className='w-full min-h-[80vh] mt-8 md:mt-12 lg:mt-16 px-4 md:px-6'>
        <div className='w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8'>
          <div className='w-full lg:w-[40%] text-center lg:text-left'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-primary leading-tight lg:leading-[80px]'>
              Navigating the digital landscape for success
            </h1>
            <p className='font-secondary text-lg md:text-xl w-full lg:w-[70%] mt-6 lg:mt-10'>
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button className='bg-black text-white px-6 py-4 font-secondary rounded-xl mt-6 lg:mt-10 hover:bg-gray-800 transition-colors'>
              Book a consultation
            </button>
          </div>
          <img 
            src={annon} 
            alt="Digital Marketing" 
            className='w-full max-w-[500px] lg:w-[50%] h-auto object-contain'
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full h-auto flex items-center justify-center px-4 md:px-6 mt-12">
        <div className="w-full lg:w-[85%] h-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <LearnBox name="searchEngine" />
          <LearnBox name="webDevelopment" />
          <LearnBox name="socialMedia" />
          <LearnBox name="emailMarking" />
          <LearnBox name="content" />
          <LearnBox name="analytics" />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 md:mt-20 w-full h-auto px-4 md:px-6">
        <div className='w-full lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          <PriceCard 
            planType={'Starter Plan'} 
            price={19} 
            text1={'Mistake to Avoid'} 
            text2={'Your Startup'} 
            text3={'Know about font'} 
            text4={'Your Startup'}
          />
          <PriceCard 
            planType={'Basic Plan'} 
            price={29} 
            text1={'Mistake to Avoid'} 
            text2={'Your Startup'} 
            text3={'Know about font'} 
            text4={'Your Startup'}
          />
          <PriceCard 
            planType={'Premium Plan'} 
            price={89} 
            text1={'Mistake to Avoid'} 
            text2={'Your Startup'} 
            text3={'Know about font'} 
            text4={'Your Startup'}
          />
          <PriceCard 
            planType={'Popular Plan'} 
            price={49} 
            text1={'Mistake to Avoid'} 
            text2={'Your Startup'} 
            text3={'Know about font'} 
            text4={'Your Startup'}
          />
          <PriceCard 
            planType={'Master Plan'} 
            price={57} 
            text1={'Mistake to Avoid'} 
            text2={'Your Startup'} 
            text3={'Know about font'} 
            text4={'Your Startup'}
          />
          <PriceCard 
            planType={'Gold Plan'} 
            price={99} 
            text1={'Mistake to Avoid'} 
            text2={'Your Startup'} 
            text3={'Know about font'} 
            text4={'Your Startup'}
          />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Service