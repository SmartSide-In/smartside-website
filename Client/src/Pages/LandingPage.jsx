import React from 'react'
import Navbar from '../Components/Navbar'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Mobile from '../assets/Group 36.png'
import aboutLogo from '../assets/aboutLogo.png'
import icon from '../assets/icon.png'
import service from '../assets/services.png'
import banner from '../assets/banner.png'
import products from '../assets/products.png'
import InfinityScroll from '../Components/InfinityScroll'
const LandingPage = () => {
  return (
    <>

      {/* home section starts here */}
      <section className='w-full flex flex-col items-center'>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='relative w-[90%] h-[70vh] mt-20 rounded-3xl bg-primary overflow-hidden z-10'>
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={[
              { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } },
              { y: [0, -10, 0], transition: { repeat: Infinity, repeatType: "reverse", duration: 1.7 } }
            ]}
            src={Mobile}
            alt="design"
            className="z-5 absolute top-8 right-[5%]"
          />

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={[
              { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } },
              { y: [0, -10, 0], transition: { repeat: Infinity, repeatType: "reverse", duration: 1.7 } }
            ]}
            src={Mobile}
            alt="design"
            className="z-5 absolute top-15 right-[25%] rotate-[18deg] scale-75 mb-10"
          />
          <div className='w-[500px] h-[500px] rounded-full bg-primary-btn-color absolute -bottom-[25%] right-[15%] -z-5'></div>
          <div className='w-[80%] h-full flex flex-col justify-center mx-auto z-50'>
            <div className='h-full w-[50%] flex flex-col items-center justify-center'>
              <h1 className="text-7xl font-bold flex flex-col font-primary">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFBB12] to-[#E6A80D]">
                  Where
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#E6A80D] to-[#B3830A]">
                  Innovation Get's
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#B3830A] to-[#99700B]">
                  Smarter.
                </span>
              </h1>
              <div className='w-[80%] flex items-center justify-start gap-10 mt-10'>
                <button className='flex gap-5 items-center py-5 px-8 border border-black cursor-pointer rounded-full font-secondary text-sm'>Request Quote <HiArrowRight /></button>
                <div className='font-secondary flex items-center gap-2 cursor-pointer'>
                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-300 hover:bg-primary-btn-color">
                    <div className="w-0 h-0 border-l-[12px] border-t-[6px] border-b-[6px] border-solid border-l-black border-t-transparent border-b-transparent"></div>
                  </div>
                  Watch Our Videos</div>
              </div>
            </div>
          </div>

        </motion.div>
      </section>
      {/* home section ends here */}


      {/* about section starts here */}
      <section
        id="about"
        className='w-full h-[130vh] border border-green-500 mt-20'
      >
        <div className='w-full h-[80vh] border border-blue-500 flex items-center'>
          <div className='w-[90%] h-full mx-auto flex items-center gap-10'>
            {/* left */}
            <div className='w-[20%] h-full flex items-center flex-col'>
              <div className="w-[90%] h-[50%] rounded-lg bg-gray-300 relative
                              before:absolute before:left-[15px] before:top-[15px] before:-right-[15px] before:-bottom-[15px]
                              before:border before:rounded-lg before:border-primary-btn-color before:content-[''] before:z-10"></div>
              <img src={aboutLogo} alt="Smartside" className='mt-15' />
            </div>
            {/* middle */}
            <div className='w-[20%] h-full flex flex-col'>
              <div className='w-[90%] bg-primary-btn-color h-[20%] rounded-lg flex items-center justify-center gap-8'>
                <h1 className='text-7xl font-header font-bold text-white'>5<span>+</span></h1>
                <div className='font-header text-white font-medium text-lg'>Years Of <br />Experience</div>
              </div>
              <div className='w-[90%] h-[70%] mt-10 bg-gray-300 rounded-lg'></div>
            </div>
            {/* right */}
            <div className='w-[50%] h-full  ml-20'>
              <div className='w-full flex items-center gap-3 '>
                <img src={icon} alt="icons" />
                <h6 className='font-header font-medium'>WHY CHOOSE US</h6>
              </div>
              <div className='font-primary font-bold text-6xl mt-3 leading-[70px]'>
                Where Innovation Meets Dream Destinations .
              </div>
              <div className='mt-5 text-stone-400 leading-[36px] font-secondary w-[90%]'>Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla</div>

              {/* box */}
              <div className='w-full flex items-center justify-between mt-10'>
                <div className='w-[48%]  border border-gray-400 rounded-xl py-5'>
                  <div className='w-[90%] mx-5 flex items-center gap-5'>
                    <img src={service} alt="icons" />
                    <h2 className='font-primary font-bold text-2xl'>Services</h2>
                  </div>
                  <ul className='mt-5 w-[90%] ml-5'>
                    <li className='flex items-center gap-5 leading-[50px] text-lg font-normal font-secondary text-stone-500'><HiCheck color='#FFBB12' />Beyond Border Immigration</li>
                    <li className='flex items-center gap-5 leading-[50px] text-lg font-normal font-secondary text-stone-500'><HiCheck color='#FFBB12' />Worldwide Visa Assistancen</li>
                  </ul>
                </div>
                <div className='w-[48%]  border border-gray-400 rounded-xl py-5'>
                  <div className='w-[90%] mx-5 flex items-center gap-5'>
                    <img src={products} alt="icons" />
                    <h2 className='font-primary font-bold text-2xl'>Products</h2>
                  </div>
                  <ul className='mt-5 w-[90%] ml-5'>
                    <li className='flex items-center gap-5 leading-[50px] text-lg font-normal font-secondary text-stone-500'><HiCheck color='#FFBB12' />GlobeTrot Visa Services</li>
                    <li className='flex items-center gap-5 leading-[50px] text-lg font-normal font-secondary text-stone-500'><HiCheck color='#FFBB12' />Infinity Visa Solutions</li>
                  </ul>
                </div>

              </div>
              {/* buttons */}
              <div className='w-full flex items-center justify-start mt-10 py-3 font-secondary'>
                <button className='flex gap-5 px-8 py-5 rounded-full border border-primary-btn-color items-center'>Know more <HiArrowRight /></button>
                <div className='w-[60px] h-[60px] rounded-full bg-primary-btn-color mx-10'></div>
                <div className='flex flex-col font-medium'>
                  <p>Need help?</p>
                  <p>(808) 555-0111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <img src={banner} alt="banner" />
        </div>
        <div className='w-[80%] mt-10 mx-auto border border-red-500'>
          <InfinityScroll></InfinityScroll>
        </div>
      </section>
      {/* about section ends here */}

      {/* services section starts here */}
      <section className='w-full h-screen border border-red-500' id='service'>

      </section>
      {/* services section ends here */}
    </>
  )
}

export default LandingPage