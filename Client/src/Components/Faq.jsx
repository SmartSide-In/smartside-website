import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiArrowRight } from 'react-icons/hi';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            number: "01",
            question: "Consultation",
            answer: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
            number: "02",
            question: "Research and Strategy Development",
            answer: "We conduct thorough research and develop a tailored strategy to meet your business goals.",
        },
        {
            number: "03",
            question: "Implementation",
            answer: "We implement the strategies and plans developed during the research phase.",
        },
        {
            number: "04",
            question: "Monitoring and Optimization",
            answer: "We continuously monitor the performance and optimize the strategies for better results.",
        },
        {
            number: "05",
            question: "Reporting and Communication",
            answer: "We provide regular reports and maintain clear communication to keep you updated on progress.",
        },
        {
            number: "06",
            question: "Continual Improvement",
            answer: "We focus on continual improvement to ensure long-term success and growth.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-[80%] mx-auto px-6 py-6">
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={`mb-7 border border-black border-b-4 overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index ? 'bg-primary-btn-color rounded-3xl' : 'bg-primary rounded-2xl'
                    }`}
                >
                    <div
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left p-4 focus:outline-none flex justify-between items-center h-[90px] cursor-pointer"
                    >
                        <div className='flex gap-3 items-center'>
                            <span className='text-4xl font-semibold font-number mx-6'>{item.number}</span>
                            <span className="font-semibold font-number text-[20px]">{item.question}</span>
                        </div>
                        <span className="transform transition-transform duration-300">
                            {activeIndex === index ? (
                                <div className='font-bold h-[30px] w-[30px] flex items-center justify-center border border-black rounded-full bg-white transition-transform duration-300 rotate-180'>
                                    <FaMinus />
                                </div>
                            ) : (
                                <div className='font-bold h-[30px] w-[30px] flex items-center justify-center border border-black rounded-full transition-transform duration-300 rotate-0'>
                                    <FaPlus />
                                </div>
                            )}
                        </span>
                    </div>

                    {/* Line between question and answer */}
                    <div
                        className={`w-[90%] mx-auto border-t border-black my-2 transition-opacity duration-300 ${
                            activeIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    ></div>

                    {/* Answer content */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="p-4">
                            <p className="w-[90%] mx-auto font-number">{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className='w-full py-10 flex items-center justify-center'>
                <button className='flex items-center gap-4 py-5 border border-black rounded-full px-7 font-secondary hover:bg-gray-100 transition-colors duration-300'>
                    Have More Questions <HiArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Faq;