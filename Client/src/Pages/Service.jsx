import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import annon from '../assets/annon.png'
import LearnBox from '../Components/LearnBox'
import Footer from '../Components/Footer'
import PriceCard from '../Components/PriceCard'
const Service = () => {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Services'} />
      <div className='w-full h-[80vh] mt-50'>
        <div className='w-[80%] mx-auto flex justify-between'>
          <div className='w-[40%]'>
            <h1 className='text-6xl font-bold font-primary w-[90%] leading-[80px]'>
              Navigating the digital landscape for success
            </h1>
            <p className='font-secondary text-xl w-[70%] mt-10'>
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button className='bg-black text-white px-6 py-4 font-secondary rounded-xl mt-10'>
              Book a consultation
            </button>
          </div>
          <img src={annon} alt="Img" />
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-center">
        <div className="w-[85%] h-full grid grid-cols-2 gap-y-15 ">
          <LearnBox name="searchEngine" />
          <LearnBox name="webDevelopment" />
          <LearnBox name="socialMedia" />
          <LearnBox name="emailMarking" />
          <LearnBox name="content" />
          <LearnBox name="analytics" />
        </div>
      </div>
      <div className="mt-20 w-full h-auto">
        <div className='w-[80%] mx-auto grid grid-cols-3 space-10 space-y-10'>
        <PriceCard planType={'Starter Plan'} price={19} text1={'Mistake to Avoid'} text2={'Your Startup'} text3={'Know about font'} text4={'Your Startup'}/>
        <PriceCard planType={'Basic Plan'} price={29} text1={'Mistake to Avoid'} text2={'Your Startup'} text3={'Know about font'} text4={'Your Startup'}/>
        <PriceCard planType={'Premium Plan'} price={89} text1={'Mistake to Avoid'} text2={'Your Startup'} text3={'Know about font'} text4={'Your Startup'}/>
        <PriceCard planType={'Popular Plan'} price={49} text1={'Mistake to Avoid'} text2={'Your Startup'} text3={'Know about font'} text4={'Your Startup'}/>
        <PriceCard planType={'Master Plan'} price={57} text1={'Mistake to Avoid'} text2={'Your Startup'} text3={'Know about font'} text4={'Your Startup'}/>
        <PriceCard planType={'Gold Plan'} price={99} text1={'Mistake to Avoid'} text2={'Your Startup'} text3={'Know about font'} text4={'Your Startup'}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Service