import React from 'react'
import whiteLogo from '../assets/Primary2Trans.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='w-[90%] mx-auto mt-[8%] h-[80%] border border-blue-900 rounded-tl-[60px] rounded-tr-[60px] px-[60px] bg-[#191A23]'>
            <div className='flex items-center justify-between mt-10'>
                <img src={whiteLogo} alt="Smartside" />
                <ul className='flex items-center gap-[50px] text-lg text-white font-normal font-number'>
                    <Link to={'/about'}>
                        <li className='underline cursor-pointer'>About us</li>
                    </Link>
                    <Link to={'/services'}>
                        <li className='underline cursor-pointer'>Services</li>
                    </Link>
                    <Link to={'/projects'}>
                        <li className='underline cursor-pointer'>Projects</li>
                    </Link>
                    <Link to={'/career'}>
                        <li className='underline cursor-pointer'>Career</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li className='underline cursor-pointer'>Contact</li>
                    </Link>
                </ul>
                <div className='flex items-center gap-5'>
                    <img src={linkedin} alt="Linked in" className='cursor-pointer' />
                    <img src={facebook} alt="Facebook" className='cursor-pointer' />
                    <img src={twitter} alt="Twitter" className='cursor-pointer' />
                </div>
            </div>
            <div className='flex items-center justify-between mt-20 pb-20 border-b border-white '>
                <div className='w-[30%] h-[250px] flex flex-col gap-y-7 px-5'>
                    <p className='w-28 font-number font-semibold bg-primary-btn-color px-2 py-1 rounded-lg'>Contact us:</p>
                    <p className='font-number text-white'>Email: info@positivus.com</p>
                    <p className='font-number text-white'>Phone: 555-567-8901</p>
                    <p className='font-number text-white'>Address: 1234 Main St
                        Moonstone City, Stardust State 12345</p>
                </div>
                <div className='w-[60%] h-[200px]  flex items-center justify-end'>
                    <div className='w-[90%] h-[80%] rounded-2xl bg-[#292A32] flex items-center justify-center gap-10'>
                        <input type="text" className='w-[40%] py-6 px-5 rounded-xl border border-white text-white text-xl font-number' placeholder='Email' />
                        <button className='w-[40%] py-6 px-5 rounded-xl bg-primary-btn-color text-xl font-semibold font-number'>Subscribe to news</button>
                    </div>
                </div>
            </div>
            <p className='mt-8 text-white font-number'>© 2023 Smartside. All Rights Reserved. <span className='underline mx-10'>Privacy Policy</span></p>
        </div>
    )
}

export default Footer