import React from 'react'
import analatics from '../assets/analatics.png'
import content from '../assets/content.png'
import emailMarking from '../assets/emailMarking.png'
import searchEngine from '../assets/searchEngine.png'
import socialMedia from '../assets/socialMedia.png'
import webDevelopment from '../assets/webDevelopment.png'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const LearnBox = ({ name }) => {
    return (
        <div className={`w-[735px] h-[380px] border border-black border-b-5 rounded-4xl flex justify-center items-center font-number ${name === 'webDevelopment' || name === 'content' ? 'bg-primary-btn-color'  : name === 'socialMedia' || name === 'analytics' ? 'bg-[#191A23]' : 'bg-white'}`}>
            <div className='w-[50%] h-full'>
                <div className='h-[60%] pt-20'>
                    <div className='flex'>
                        <h2 className={`text-2xl px-3 py-1 rounded-lg font-bold ${name === 'webDevelopment' || name === 'content' || name === 'socialMedia' ? 'bg-white'  : 'bg-primary-btn-color'}`}>{
                            name === 'searchEngine' ? 'Search Engine' : name === 'webDevelopment' ? 'Web ' : name === 'socialMedia' ? 'Social Media' : name === 'emailMarking' ? 'Email' : name === 'content' ? 'Content' : 'Analytics and'
                            }</h2>
                    </div>
                    <div className='flex'>
                        <h2 className={`text-2xl px-3 py-1 rounded-lg font-bold bg-primary-btn-color ${name === 'webDevelopment' || name === 'content' || name === 'socialMedia' ? 'bg-white'  : 'bg-primary-btn-color'}`}>{
                            name === 'searchEngine' ? 'Optimization' : name === 'webDevelopment' ? 'Development' : name === 'socialMedia' ? 'Marketing' : name === 'emailMarking' ? 'Marking' : name === 'content' ? 'Creation' : 'Tracking'
                            }</h2>
                    </div>
                </div>
                <div className='h-[30%] flex items-end pb-10'>
                    <button className={`flex items-center gap-2 text-xl ${name === 'socialMedia' || name === 'analytics' ? 'text-white' : 'text-black'}`}>
                        <BsArrowUpRightCircleFill size={30} 
                        className={`${name === 'socialMedia' || name === 'analytics' ? 'text-white' : 'text-black'}`}
                        />
                        Learn more
                    </button>
                </div>
            </div>
            <div className='w-[40%]'>
                {name === 'searchEngine' && <img src={searchEngine} alt="Img" />}
                {name === 'webDevelopment' && <img src={webDevelopment} alt="Img" />}
                {name === 'socialMedia' && <img src={socialMedia} alt="Img" />}
                {name === 'emailMarking' && <img src={emailMarking} alt="Img" />}
                {name === 'content' && <img src={content} alt="Img" />}
                {name === 'analytics' && <img src={analatics} alt="Img" />}
            </div>
        </div>
    )
}

export default LearnBox