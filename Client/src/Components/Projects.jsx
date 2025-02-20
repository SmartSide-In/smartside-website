import React, { useState, useEffect } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import icon from '../assets/icon.png';
import { motion } from 'framer-motion';
import grcss from '../assets/grcss.png';
import startuculturess from '../assets/startupculturess.png';
import gkss from '../assets/gkss.png';
const Projects = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const projectsData = [
        {
            title: "Startup Culture Foundation",
            description: "We collaborated with Startup Culture Foundation to create a dynamic portfolio website showcasing their initiatives and contributions to the startup community.",
            link: "https://startupculture.co.in/",
            bgImage: startuculturess
        },
        {
            title: "GK Wedding and Event Management",
            description: "We partnered with GK Wedding and Event Management to create an elegant, functional website with a seamless user experience.",
            link: "https://gkevents.netlify.app/",
            bgImage: gkss
        },
        {
            title: "Socio Potent",
            description: "We developed a portfolio website for Socio Potent, showcasing their mission to guide individuals in self-discovery, skill enhancement, and career growth.",
            link: "https://sociopotents.in/lander",
            bgImage: "https://your-image-url/socio-potent.jpg"
        },
        {
            title: "Geearr Consumer Solutions",
            description: "We developed a web application for Geearr Consumer Solutions, featuring a portfolio, user and admin dashboards, and an integrated e-commerce section. ",
            link: "https://grcspl.com/",
            bgImage: grcss
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const moveForward = () => {
        setOpenIndex((prevIndex) => (prevIndex + 1) % 4);
    };

    const moveBackward = () => {
        setOpenIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
    };

    const handleDivClick = (index) => {
        if (!isMobile && openIndex !== index) {
            setOpenIndex(index);
        }
    };

    const ProjectCard = ({ index, title, description, link, bgImage, isOpen }) => {
        const handleButtonClick = (e) => {
            e.stopPropagation();
            window.open(link, "_blank");
        };

        return (
            <motion.div
                className={`relative cursor-pointer transition-all duration-800 ease-in-out rounded-lg overflow-hidden
                    w-full md:w-[14%] h-[350px] md:h-[90%] flex flex-col items-center justify-center
                    ${!isOpen ? 'bg-primary' : ''}`}
                style={{
                    width: isOpen ? '100%' : '50%',
                    height: isOpen ? '350px' : '350px',
                    ...(isOpen && {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    })
                }}
                onClick={() => handleDivClick(index)}
            >
                <div className={`absolute top-3 right-3 h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full border ${isOpen ? 'border-white text-white' : 'border-black'} flex justify-center items-center font-number font-bold z-10`}>
                    {index + 1}
                </div>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
                        className="w-full h-full flex items-end justify-center relative z-10"
                    >
                        <div className="w-[90%] h-auto p-4 mb-4 bg-primary-btn-color/90 rounded-2xl flex flex-col items-start justify-center gap-3 backdrop-blur-sm">
                            <h2 className="text-lg md:text-xl font-bold font-primary">{title}</h2>
                            <p className="font-secondary text-sm">{description}</p>
                            <button
                                className="flex gap-4 items-center border border-black rounded-full px-4 py-2 text-sm font-secondary hover:bg-black hover:text-white transition-colors"
                                onClick={handleButtonClick}
                            >
                                Visit Site <HiArrowRight />
                            </button>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        );
    };

    return (
        <div className="w-[90%] relative rounded-[30px] bg-primary-btn-color h-auto md:h-[70vh] overflow-hidden z-10 py-10">
            <div className="w-3/4 h-full bg-black absolute top-0 right-0 clip-triangle-right z-0 hidden md:block"></div>

            <div className="mt-10 w-[80%] mx-auto h-auto md:h-[25%] relative">
                <p className="flex items-center gap-2 font-primary font-bold">
                    <img src={icon} alt="icon" />
                    OUR PROJECTS
                </p>
                <h1 className="text-3xl md:text-5xl font-bold font-primary leading-[45px] md:leading-[55px] mt-3">
                    Making Memories Around <br />The World Unforgettable
                </h1>

                {!isMobile && (
                    <div className="flex items-center gap-8 absolute bottom-5 right-10 md:flex">
                        <div
                            className="h-[50px] w-[50px] rounded-full border border-black md:border-primary-btn-color flex items-center justify-center cursor-pointer"
                            onClick={moveBackward}
                        >
                            <HiArrowLeft className='md:text-[#FFBB12] text-black' />
                        </div>
                        <div
                            className="h-[50px] w-[50px] rounded-full border border-black md:border-primary-btn-color flex items-center justify-center cursor-pointer"
                            onClick={moveForward}
                        >
                            <HiArrowRight className='md:text-[#FFBB12] text-black' />
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-10 w-[80%] mx-auto flex flex-col md:flex-row md:flex-nowrap items-center px-5 justify-center md:justify-evenly gap-6">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        index={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        bgImage={project.bgImage}
                        isOpen={isMobile || openIndex === index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;