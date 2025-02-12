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
      <div className='w-full mt-20'>
        <div className='w-[80%] mx-auto'>
          <h1 className='text-4xl font-normal font-project'>Our <span className='text-primary-btn-color'>Values</span></h1>
          <p className='mt-5 font-project font-light w-[90%]'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
        </div>
        <div className='w-[80%] mx-auto mt-20 grid grid-cols-2 gap-y-25 font-project'>
          {/* first card */}
          <div className='border-l-2 border-primary-btn-color flex flex-col gap-5 pl-5'>
            <h1 className='font-medium text-3xl text-[#4C4C4D]'>
              Integrity
            </h1>
            <p className='w-[80%] font-light'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
          </div>

          {/* second card */}
          <div className='border-l-2 border-primary-btn-color flex flex-col gap-5 pl-5'>
            <h1 className='font-medium text-3xl text-[#4C4C4D]'>
              Customer Centricity
            </h1>
            <p className='font-light w-[80%]'>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
          </div>

          {/* third card */}
          <div className='border-l-2 border-primary-btn-color flex flex-col gap-5 pl-5'>
            <h1 className='font-medium text-3xl text-[#4C4C4D]'>
              Collaboration
            </h1>
            <p className='w-[80%] font-light'>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
          </div>

          {/* fourth card */}
          <div className='border-l-2 border-primary-btn-color flex flex-col gap-5 pl-5'>
            <h1 className='font-medium text-3xl text-[#4C4C4D]'>
              Innovation
            </h1>
            <p className='w-[80%] font-light'>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>
          </div>
        </div>
      </div>
      <div className='w-full mt-30'>
        <div className='w-[80%] mx-auto'>
          <h1 className='text-4xl font-normal font-project'>Our <span className='text-primary-btn-color'>Benefits</span></h1>
          <p className='mt-5 font-project font-light w-[90%]'>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
        </div>


        <div className='mt-15 w-[60%] h-auto mx-auto'>
          <div className='w-full flex justify-between'>


            <div className="w-[49.5%] flex flex-col px-10 py-7 relative overflow-hidden rounded-tl-4xl rounded-bl-lg border-l-2 border-t-transparent border-gray-300">

              {/* Top Border (40% width) */}
              <div className="absolute top-0 left-0 w-[60%] h-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>

              {/* Curved Connection at the Top-Left */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-1 border-gray-300 rounded-tl-4xl bg-white"></div>

              {/* Bottom Border Gradient (20%) */}
              <div className="absolute bottom-0 left-0 w-[20%] h-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>

              {/* Content */}
              <div className="flex w-full gap-5 items-center">
                <img src={competative} alt="img" />
                <h1 className="font-project font-normal text-2xl">Competitive Compensation</h1>
              </div>
              <div className="w-[90%]">
                <p className="font-project font-light mt-5">We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
              </div>
            </div>

            <div className='w-[1%] border border-dashed border-gray-400 border-t-transparent border-b-transparent border-l-transparent'></div>


            <div className="w-[49.5%] flex flex-col px-10 py-7 relative overflow-hidden rounded-tr-4xl rounded-br-lg border-r-2 border-t-transparent border-gray-300">

              {/* Top Border (40% width) */}
              <div className="absolute top-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-gray-300 to-transparent"></div>

              {/* Curved Connection at the Top-Left */}
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-1 border-gray-300 rounded-tr-4xl bg-white"></div>

              {/* Bottom Border Gradient (20%) */}
              <div className="absolute bottom-0 right-0 w-[20%] h-[2px] bg-gradient-to-t from-gray-300 to-transparent"></div>

              {/* Content */}
              <div className="flex w-full gap-5 items-center">
                <img src={competative} alt="img" />
                <h1 className="font-project font-normal text-2xl">Competitive Compensation</h1>
              </div>
              <div className="w-[90%]">
                <p className="font-project font-light mt-5">We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
              </div>
            </div>

          </div>
          {/* dashed line */}
          <div className='w-full border border-b-transparent border-dashed border-gray-400 mt-5'></div>

          {/* second one */}
          <div className='w-full flex justify-between mt-5'>


            <div className="w-[49.5%] flex flex-col px-10 py-7 relative overflow-hidden rounded-bl-4xl rounded-tl-lg border-l-2 border-b-transparent border-gray-300">

              {/* Top Border (40% width) */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>

              {/* Curved Connection at the Top-Left */}
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-1 border-gray-300 rounded-bl-4xl bg-white"></div>

              {/* Bottom Border Gradient (20%) */}
              <div className="absolute top-0 left-0 w-[20%] h-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>

              {/* Content */}
              <div className="flex w-full gap-5 items-center">
                <img src={competative} alt="img" />
                <h1 className="font-project font-normal text-2xl">check-1 Compensation</h1>
              </div>
              <div className="w-[90%]">
                <p className="font-project font-light mt-5">We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
              </div>
            </div>

            <div className='w-[1%] border border-dashed border-gray-400 border-t-transparent border-b-transparent border-l-transparent'></div>


            <div className="w-[49.5%] flex flex-col px-10 py-7 relative overflow-hidden rounded-br-4xl rounded-tr-lg border-r-2 border-b-transparent border-gray-300">

              {/* Top Border (40% width) */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-gray-300 to-transparent"></div>

              {/* Curved Connection at the Top-Left */}
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-1 border-gray-300 rounded-br-4xl bg-white"></div>

              {/* Bottom Border Gradient (20%) */}
              <div className="absolute top-0 right-0 w-[20%] h-[2px] bg-gradient-to-b from-gray-300 to-transparent"></div>

              {/* Content */}
              <div className="flex w-full gap-5 items-center">
                <img src={competative} alt="img" />
                <h1 className="font-project font-normal text-2xl">Competitive Compensation</h1>
              </div>
              <div className="w-[90%]">
                <p className="font-project font-light mt-5">We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-30 w-[80%] mx-auto'>
        <div className='w-[80%] mx-auto'>
          <h1 className='text-4xl font-normal font-project text-primary-btn-color'>Job Openings</h1>
          <p className='mt-5 font-project font-light w-[90%]'>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
          <div className='mt-10 grid grid-cols-2 gap-5'>
            <JobBox type={'Relationship Manager'}/>
            <JobBox type={'Risk Analyst'}/>
            <JobBox type={'IT Security Specialist'}/>
          </div>
        </div>
      </div>
      <div className='w-full mt-20'>
        <Footer/>
      </div>
    </>
  )
}

export default Career