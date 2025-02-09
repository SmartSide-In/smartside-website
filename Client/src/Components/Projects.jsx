import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import icon from '../assets/icon.png';
import { motion } from 'framer-motion';

const Projects = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const moveForward = () => {
        setOpenIndex((prevIndex) => (prevIndex + 1) % 5);
    };

    const moveBackward = () => {
        setOpenIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
    };

    const handleDivClick = (index) => {
        if (openIndex !== index) {
            setOpenIndex(index);
        }
    };

    const ProjectCard = ({ index, title, description }) => {
        const isOpen = openIndex === index;
        const width = isOpen ? '30%' : '14%';

        return (
            <div
                style={{ width }}
                className={`h-[90%] rounded-lg bg-primary relative cursor-pointer transition-all duration-800 ease-in-out`}
                onClick={() => handleDivClick(index)}
            >
                <div className='absolute top-3 right-3 h-[50px] w-[50px] rounded-full border border-black flex justify-center items-center font-number font-bold'>{index+1}</div>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 ,width:"50%" }}
                        animate={{ opacity: 1, scale: 1 , width:"100%" }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                        className='w-full h-full flex items-end justify-center py-3'
                    >
                        <div className='w-[90%] h-[50%] bg-primary-btn-color rounded-2xl flex flex-col items-start justify-center gap-3 px-2'>
                            <h2 className='text-xl font-bold font-primary'>{title}</h2>
                            <p className='font-secondary text-sm'>{description}</p>
                            <button className='flex gap-4 items-center border border-black rounded-full px-4 py-2 text-sm font-secondary'>
                                Visit Site <HiArrowRight />
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        );
    };

    return (
        <div className='w-[90%] relative rounded-[30px] bg-primary-btn-color h-[70vh] overflow-hidden z-10'>
            <div className='w-3/4 h-full bg-black absolute top-0 right-0 clip-triangle-right z-0'></div>

            <div className='mt-10 w-[80%] mx-auto x-50 h-[25%] relative'>
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

            <div className='mt-10 w-[80%] mx-auto x-50 h-[55%] flex items-center px-5 justify-evenly'>
                {[0, 1, 2, 3, 4].map((index) => (
                    <ProjectCard
                        key={index}
                        index={index}
                        title="Working Visa"
                        description="Lorem Ipsum is simply dummy text the printing and provide best visa ever"
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;