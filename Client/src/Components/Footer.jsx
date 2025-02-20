import React from 'react'
import whiteLogo from '../assets/Primary2Trans.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-[90%] mx-auto mt-[8%] h-auto rounded-tl-[60px] rounded-tr-[60px] px-4 md:px-[60px] py-10 bg-[#191A23] box-border'>
            {/* Top Section */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8'>
                <img src={whiteLogo} alt="Smartside" className='w-[120px] md:w-[150px]' />
                <ul className='flex flex-wrap justify-center gap-4 md:gap-10 text-sm md:text-lg text-white font-normal font-number'>
                    <Link to={'/'}><li className='underline cursor-pointer hover:text-primary-btn-color transition-all'>Home</li></Link>
                    <Link to={'/about'}><li className='underline cursor-pointer hover:text-primary-btn-color transition-all'>About us</li></Link>
                    <Link to={'/services'}><li className='underline cursor-pointer hover:text-primary-btn-color transition-all'>Services</li></Link>
                    <Link to={'/projects'}><li className='underline cursor-pointer hover:text-primary-btn-color transition-all'>Products</li></Link>
                    <Link to={'/career'}><li className='underline cursor-pointer hover:text-primary-btn-color transition-all'>Career</li></Link>
                    <Link to={'/contact'}><li className='underline cursor-pointer hover:text-primary-btn-color transition-all'>Contact</li></Link>
                </ul>
                <div className='flex items-center gap-4 md:gap-5'>
                    <img src={linkedin} alt="LinkedIn" className='w-6 md:w-auto cursor-pointer hover:opacity-80 transition-all' onClick={() => window.open('https://www.linkedin.com/company/smart-side-dev','_blank')}/>
                    <img src={facebook} alt="Facebook" className='w-6 md:w-auto cursor-pointer hover:opacity-80 transition-all' />
                    <img src={twitter} alt="Twitter" className='w-6 md:w-auto cursor-pointer hover:opacity-80 transition-all' />
                </div>
            </div>

            {/* Middle Section */}
            <div className='flex flex-col md:flex-row items-center justify-between mt-15 pb-15 border-b border-white'>
                {/* Contact Info */}
                <div className='w-full md:w-[35%] flex flex-col gap-4 px-4 md:px-5'>
                    <p className='w-28 font-number font-semibold bg-primary-btn-color px-2 py-1 rounded-lg'>Contact us:</p>
                    <p className='font-number text-white text-sm md:text-base'>Email: team@smartside.in</p>
                    <p className='font-number text-white text-sm md:text-base'>Phone: +91 9361327770</p>
                    {/* <p className='font-number text-white text-sm md:text-base'>Address: 1234 Main St, Moonstone City, Stardust State 12345</p> */}
                </div>

                {/* Subscription Form */}
                <div className='w-full md:w-[60%] flex justify-center md:justify-end mt-6 md:mt-0'>
                    <div className='w-full md:w-[90%] h-auto rounded-2xl bg-[#292A32] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 p-5'>
                        <input type="email" className='w-full md:w-[45%] py-3 md:py-4 px-4 md:px-5 rounded-xl border border-white text-white text-sm md:text-lg font-number bg-transparent placeholder-white' placeholder='Email' required />
                        <button className='w-full md:w-[45%] py-3 md:py-4 px-4 md:px-5 rounded-xl bg-primary-btn-color text-sm md:text-lg font-semibold font-number hover:bg-opacity-90 transition-all'>Subscribe to news</button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <p className='mt-6 md:mt-8 text-white font-number text-sm md:text-base text-center'>
                © 2023 Smartside. All Rights Reserved. <span className='underline cursor-pointer hover:text-primary-btn-color transition-all'>Privacy Policy</span>
            </p>
        </div>
    )
}

export default Footer
