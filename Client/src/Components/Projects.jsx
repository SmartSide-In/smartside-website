import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import icon from '../assets/icon.png';
import {motion} from 'framer-motion';
const Projects = () => {
    // State to track which div is open (0-4 corresponds to the 5 divs)
    const [openIndex, setOpenIndex] = useState(0);

    const moveForward = () => {
        // Increment the index, looping back to 0 if it exceeds 4
        setOpenIndex((prevIndex) => (prevIndex + 1) % 5);
    };

    const moveBackward = () => {
        // Decrement the index, looping back to 4 if it goes below 0
        setOpenIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
    };

    // Handle the toggling of the divs
    const handleDivClick = (index) => {
        if (openIndex !== index) {
            setOpenIndex(index); // If the same div is clicked, close it
        }
    };

    return (
        <div className='w-[90%] relative rounded-[30px] bg-primary-btn-color h-[70vh] overflow-hidden z-10'>
            <div className='w-3/4 h-full bg-black absolute top-0 right-0 clip-triangle-right -z-10'></div>

            <div className='mt-10 w-[80%] mx-auto x-50 border border-red-500 h-[25%] relative'>
                <p className='flex items-center gap-2 font-primary font-bold'>
                    <img src={icon} alt="icon" />
                    OUR PROJECTS
                </p>
                <h1 className='text-5xl font-bold font-primary leading-[55px] mt-3'>
                    Making Memories Around <br /> World Unforgettable
                </h1>
                <div className='flex items-center gap-8 absolute bottom-5 right-10'>
                    <div
                        className='h-[50px] w-[50px] rounded-full border border-primary-btn-color flex items-center justify-center cursor-pointer'
                        onClick={moveBackward}
                    >
                        <HiArrowLeft color='#FFBB12' />
                    </div>
                    <div
                        className='h-[50px] w-[50px] rounded-full border border-primary-btn-color flex items-center justify-center cursor-pointer'
                        onClick={moveForward}
                    >
                        <HiArrowRight color='#FFBB12' />
                    </div>
                </div>
            </div>

            <div className='mt-10 w-[80%] mx-auto x-50 border border-red-500 h-[55%] flex items-center px-5 justify-evenly'>
                {/* Div 1 */}
                <div
                    className={`w-[${openIndex === 0 ? '30' : '14'}%] h-[90%] rounded-lg bg-primary relative cursor-pointer transition-all duration-500`}
                    onClick={() => handleDivClick(0)}
                >
                    <div className='absolute top-3 right-3 h-[50px] w-[50px] rounded-full border border-black'></div>
                    {openIndex === 0 && (
                        <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5,delay:0.2,ease:"easeInOut" }}
                        className='w-full h-full flex items-end justify-center py-3'>
                            <div className='w-[90%] h-[50%] bg-primary-btn-color rounded-2xl flex flex-col items-start justify-center gap-3 px-2'>
                                <h2 className='text-xl font-bold font-primary'>Working Visa</h2>
                                <p className='font-secondary text-sm'>Lorem Ipsum is simply dummy text the printing and provide best visa ever</p>
                                <button className='flex gap-4 items-center border border-black rounded-full px-4 py-2 text-sm font-secondary'>Visit Site <HiArrowRight/></button>
                            </div>
                        </motion.div>
                    )

                    }
                    {/* You can add content here */}
                </div>

                {/* Div 2 */}
                <div
                    className={`w-[${openIndex === 1 ? '30' : '14'}%] h-[90%] rounded-lg bg-primary relative cursor-pointer transition-all duration-500`}
                    onClick={() => handleDivClick(1)}
                >
                    <div className='absolute top-3 right-3 h-[50px] w-[50px] rounded-full border border-black'></div>
                    {openIndex === 1 && (
                        <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5,delay:0.2,ease:"easeInOut" }}
                        className='w-full h-full flex items-end justify-center py-3'>
                            <div className='w-[90%] h-[50%] bg-primary-btn-color rounded-2xl flex flex-col items-start justify-center gap-3 px-2'>
                                <h2 className='text-xl font-bold font-primary'>Working Visa</h2>
                                <p className='font-secondary text-sm'>Lorem Ipsum is simply dummy text the printing and provide best visa ever</p>
                                <button className='flex gap-4 items-center border border-black rounded-full px-4 py-2 text-sm font-secondary'>Visit Site <HiArrowRight/></button>
                            </div>
                        </motion.div>
                    )

                    }
                    {/* You can add content here */}
                </div>

                {/* Div 3 */}
                <div
                    className={`w-[${openIndex === 2 ? '30' : '14'}%] h-[90%] rounded-lg bg-primary relative cursor-pointer transition-all duration-500`}
                    onClick={() => handleDivClick(2)}
                >
                    <div className='absolute top-3 right-3 h-[50px] w-[50px] rounded-full border border-black'></div>
                    {openIndex === 2 && (
                        <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5,delay:0.2,ease:"easeInOut" }}
                        className='w-full h-full flex items-end justify-center py-3'>
                            <div className='w-[90%] h-[50%] bg-primary-btn-color rounded-2xl flex flex-col items-start justify-center gap-3 px-2'>
                                <h2 className='text-xl font-bold font-primary'>Working Visa</h2>
                                <p className='font-secondary text-sm'>Lorem Ipsum is simply dummy text the printing and provide best visa ever</p>
                                <button className='flex gap-4 items-center border border-black rounded-full px-4 py-2 text-sm font-secondary'>Visit Site <HiArrowRight/></button>
                            </div>
                        </motion.div>
                    )

                    }
                    {/* You can add content here */}
                </div>

                {/* Div 4 */}
                <div
                    className={`w-[${openIndex === 3 ? '30' : '14'}%] h-[90%] rounded-lg bg-primary relative cursor-pointer transition-all duration-500`}
                    onClick={() => handleDivClick(3)}
                >
                    <div className='absolute top-3 right-3 h-[50px] w-[50px] rounded-full border border-black'></div>
                    {openIndex === 3 && (
                        <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5,delay:0.2,ease:"easeInOut" }}
                        className='w-full h-full flex items-end justify-center py-3'>
                            <div className='w-[90%] h-[50%] bg-primary-btn-color rounded-2xl flex flex-col items-start justify-center gap-3 px-2'>
                                <h2 className='text-xl font-bold font-primary'>Working Visa</h2>
                                <p className='font-secondary text-sm'>Lorem Ipsum is simply dummy text the printing and provide best visa ever</p>
                                <button className='flex gap-4 items-center border border-black rounded-full px-4 py-2 text-sm font-secondary'>Visit Site <HiArrowRight/></button>
                            </div>
                        </motion.div>
                    )

                    }
                    {/* You can add content here */}
                </div>

                {/* Div 5 */}
                <div
                    className={`w-[${openIndex === 4 ? '30' : '14'}%] h-[90%] rounded-lg bg-primary relative cursor-pointer transition-all duration-500`}
                    onClick={() => handleDivClick(4)}
                >
                    <div className='absolute top-3 right-3 h-[50px] w-[50px] rounded-full border border-black'></div>
                    {openIndex === 4 && (
                        <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5,delay:0.2,ease:"easeInOut" }}
                        className='w-full h-full flex items-end justify-center py-3'>
                            <div className='w-[90%] h-[50%] bg-primary-btn-color rounded-2xl flex flex-col items-start justify-center gap-3 px-2'>
                                <h2 className='text-xl font-bold font-primary'>Working Visa</h2>
                                <p className='font-secondary text-sm'>Lorem Ipsum is simply dummy text the printing and provide best visa ever</p>
                                <button className='flex gap-4 items-center border border-black rounded-full px-4 py-2 text-sm font-secondary'>Visit Site <HiArrowRight/></button>
                            </div>
                        </motion.div>
                    )

                    }
                    {/* You can add content here */}
                </div>
            </div>
        </div>
    );
};

export default Projects;
