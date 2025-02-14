import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import Footer from '../Components/Footer'
import competative from '../assets/competative.png'
import GotoTop from '../Components/GotoTop'
import JobBox from '../Components/JobBox'

const Career = () => {
  return (
    <>
      <GotoTop />
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Career'} />

      {/* Values Section */}
      <div className='w-full mt-10 md:mt-20 px-4'>
        <div className='w-full md:w-[90%] lg:w-[80%] mx-auto'>
          <h1 className='text-3xl md:text-4xl font-normal font-project'>Our <span className='text-primary-btn-color'>Values</span></h1>
          <p className='mt-3 md:mt-5 font-project font-light w-full md:w-[90%] text-base md:text-lg'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
        </div>

        {/* Values Grid */}
        <div className='w-full md:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-25 font-project px-4 md:px-0'>
          {/* Value Cards */}
          {[
            { title: 'Integrity', text: 'At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.' },
            { title: 'Customer Centricity', text: 'Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.' },
            { title: 'Collaboration', text: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.' },
            { title: 'Innovation', text: 'We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.' }
          ].map((value, index) => (
            <div key={index} className='border-l-2 border-primary-btn-color flex flex-col gap-3 md:gap-5 pl-5'>
              <h1 className='font-medium text-2xl md:text-3xl text-[#4C4C4D]'>
                {value.title}
              </h1>
              <p className='w-full md:w-[80%] font-light text-base md:text-lg'>{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      {/* Benefits Section */}
      <div className='w-full mt-20 md:mt-30 px-4'>
        {/* Header */}
        <div className='w-full md:w-[90%] lg:w-[80%] mx-auto'>
          <h1 className='text-3xl md:text-4xl font-normal font-project'>
            Our <span className='text-primary-btn-color'>Benefits</span>
          </h1>
          <p className='mt-3 md:mt-5 font-project font-light w-full md:w-[90%] text-base md:text-lg'>
            At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
          </p>
        </div>

        {/* Benefits Cards Container */}
        <div className='mt-10 md:mt-15 w-full md:w-[80%] lg:w-[60%] h-auto mx-auto px-4 md:px-0'>
          {/* Top Row */}
          <div className='w-full flex flex-col md:flex-row justify-between gap-8 md:gap-4'>
            {/* First Card */}
            <div className="w-full md:w-[49.5%] flex flex-col px-6 md:px-10 py-5 md:py-7 relative overflow-hidden rounded-2xl md:rounded-tl-4xl md:rounded-bl-lg border border-gray-300 hover:shadow-lg transition-shadow">
              {/* Top Border Gradient */}
              {/* <div className="hidden md:block absolute top-0 left-0 w-[60%] h-[2px] bg-gradient-to-r from-gray-300 to-gray-300"></div> */}
              {/* Top-Left Corner */}
              {/* <div className="hidden md:block absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gray-300 rounded-tl-4xl bg-white"></div> */}
              {/* Bottom Border */}
              {/* <div className="hidden md:block absolute bottom-0 left-0 w-[20%] h-[2px] bg-gradient-to-r from-gray-300 to-gray-300"></div> */}

              <div className="flex w-full gap-3 md:gap-5 items-center">
                <img src={competative} alt="img" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h1 className="font-project font-normal text-xl md:text-2xl">Competitive Compensation</h1>
              </div>
              <div className="w-full md:w-[90%]">
                <p className="font-project font-light mt-3 md:mt-5 text-base md:text-lg">
                  We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className='hidden md:block w-[1px] border-r border-dashed border-gray-400'></div>

            {/* Second Card */}
            <div className="w-full md:w-[49.5%] flex flex-col px-6 md:px-10 py-5 md:py-7 relative overflow-hidden rounded-2xl md:rounded-tr-4xl md:rounded-br-lg border border-gray-300 hover:shadow-lg transition-shadow">
              {/* Top Border Gradient */}
              {/* <div className="hidden md:block absolute top-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-gray-300 to-gray-300"></div>
              {/* Top-Right Corner */}
              {/* <div className="hidden md:block absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gray-300 rounded-tr-4xl bg-white"></div> */}
              {/* Bottom Border */}
              {/* <div className="hidden md:block absolute bottom-0 right-0 w-[20%] h-[2px] bg-gradient-to-l from-gray-300 to-gray-300"></div> */} 

              <div className="flex w-full gap-3 md:gap-5 items-center">
                <img src={competative} alt="img" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h1 className="font-project font-normal text-xl md:text-2xl">Health & Wellness</h1>
              </div>
              <div className="w-full md:w-[90%]">
                <p className="font-project font-light mt-3 md:mt-5 text-base md:text-lg">
                  Your health matters to us. We offer comprehensive health insurance, wellness programs, and work-life balance initiatives to ensure your well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className='hidden md:block w-full border-t border-dashed border-gray-400 my-5'></div>

          {/* Bottom Row */}
          <div className='w-full flex flex-col md:flex-row justify-between gap-8 md:gap-4 mt-5'>
            {/* Third Card */}
            <div className="w-full md:w-[49.5%] flex flex-col px-6 md:px-10 py-5 md:py-7 relative overflow-hidden rounded-2xl md:rounded-bl-4xl md:rounded-tl-lg border border-gray-300 hover:shadow-lg transition-shadow">
              {/* Bottom Border Gradient */}
              {/* <div className="hidden md:block absolute bottom-0 left-0 w-[60%] h-[2px] bg-gradient-to-r from-gray-300 to-gray-300"></div> */}
              {/* Bottom-Left Corner */}
              {/* <div className="hidden md:block absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gray-300 rounded-bl-4xl bg-white"></div> */}
              {/* Top Border */}
              {/* <div className="hidden md:block absolute top-0 left-0 w-[20%] h-[2px] bg-gradient-to-r from-gray-300 to-gray-300"></div> */}

              <div className="flex w-full gap-3 md:gap-5 items-center">
                <img src={competative} alt="img" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h1 className="font-project font-normal text-xl md:text-2xl">Professional Development</h1>
              </div>
              <div className="w-full md:w-[90%]">
                <p className="font-project font-light mt-3 md:mt-5 text-base md:text-lg">
                  Grow with us through continuous learning opportunities, mentorship programs, and career advancement pathways designed for your success.
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className='hidden md:block w-[1px] border-r border-dashed border-gray-400'></div>

            {/* Fourth Card */}
            <div className="w-full md:w-[49.5%] flex flex-col px-6 md:px-10 py-5 md:py-7 relative overflow-hidden rounded-2xl md:rounded-br-4xl md:rounded-tr-lg border border-gray-300  hover:shadow-lg transition-shadow">
              {/* Bottom Border Gradient */}
              {/* <div className="hidden md:block absolute bottom-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-gray-300 to-gray-300"></div> */}
              {/* Bottom-Right Corner */}
              {/* <div className="hidden md:block absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gray-300 rounded-br-4xl bg-white"></div> */}
              {/* Top Border */}
              {/* <div className="hidden md:block absolute top-0 right-0 w-[20%] h-[2px] bg-gradient-to-l from-gray-300 to-gray-300"></div> */}

              <div className="flex w-full gap-3 md:gap-5 items-center">
                <img src={competative} alt="img" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h1 className="font-project font-normal text-xl md:text-2xl">Work-Life Balance</h1>
              </div>
              <div className="w-full md:w-[90%]">
                <p className="font-project font-light mt-3 md:mt-5 text-base md:text-lg">
                  Enjoy flexible working hours, remote work options, and generous paid time off to help you maintain a healthy work-life balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className='mt-20 md:mt-30 w-full md:w-[90%] lg:w-[80%] mx-auto px-4 md:px-6'>
        <div className='w-full lg:w-[80%] mx-auto'>
          <h1 className='text-3xl md:text-4xl font-normal font-project text-primary-btn-color'>Job Openings</h1>
          <p className='mt-3 md:mt-5 font-project font-light w-full md:w-[90%] text-base md:text-lg'>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
          <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
            <JobBox type={'Relationship Manager'} />
            <JobBox type={'Risk Analyst'} />
            <JobBox type={'IT Security Specialist'} />
          </div>
        </div>
      </div>

      <div className='w-full mt-16 md:mt-20'>
        <Footer />
      </div>
    </>
  )
}

export default Career