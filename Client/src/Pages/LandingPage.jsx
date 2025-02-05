import React from 'react'
import Navbar from '../Components/Navbar'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Mobile from '../assets/Group 36.png'
const LandingPage = () => {
  return (
    <>
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
              <div className='w-[80%] flex items-center justify-start gap-10 mt-10 items-center'>
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
      <section
        id="about"
        className='w-full h-[120vh] border border-green-500 mt-20'
      >

      </section>
      <section className='w-full h-screen border border-red-500'>

      </section>
    </>
  )
}

export default LandingPage