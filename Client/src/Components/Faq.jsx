import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
const Faq = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        { number: "01", question: "How can SmartSide help my business grow?", answer: " Our expertise in web development, AI, and DevOps ensures that your digital transformation is smooth and impactful." },
        { number: "02", question: "What industries do you serve?", answer: "We cater to startups, e-commerce, finance, healthcare, and more, offering tailored solutions for diverse business needs." },
        { number: "03", question: "How do I start a project with SmartSide?", answer: " Simply reach out to us! We’ll schedule a consultation to understand your requirements and build a custom roadmap for success." },
        { number: "04", question: "What makes SmartSide different from other tech companies?", answer: "We combine cutting-edge technology, personalized solutions, and expert-driven strategies to deliver high-quality web development, AI, cloud computing, and DevOps services." },
        { number: "05", question: "Do you provide ongoing support and maintenance for applications?", answer: "Yes! We ensure your applications run smoothly with regular updates, performance optimizations, and 24/7 support." },
        { number: "06", question: "Can SmartSide help with scaling my business?", answer: " Absolutely! Our cloud solutions, AI automation, and DevOps strategies help businesses scale efficiently while maintaining top-notch performance." },
        { number: "07", question: "How long does it take to develop a website or application?", answer: "Development time varies based on project complexity, but we always strive for fast, efficient delivery without compromising quality." },
        { number: "08", question: "Is SEO included in your web development services?", answer: "Yes! We optimize all websites for SEO, speed, and user experience to help you rank higher and attract more customers." },
        { number: "09", question: "How can I get started with SmartSide?", answer: "It’s simple! Contact us today for a free consultation, and let’s build something incredible together!" },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full lg:w-[80%] mx-auto px-4 md:px-6 py-6 font-number">
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={`mb-7 border border-black overflow-hidden transition-all duration-500 ease-in-out rounded-2xl md:rounded-3xl ${
                        activeIndex === index ? 'bg-primary-btn-color' : 'bg-primary'
                    }`}
                >
                    <div
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left p-4 md:p-6 focus:outline-none flex justify-between items-center cursor-pointer"
                    >
                        <div className="flex gap-3 items-center">
                            <span className="text-2xl md:text-4xl font-semibold">{item.number}</span>
                            <span className="font-semibold text-lg md:text-2xl">{item.question}</span>
                        </div>
                        <span className="transform transition-transform duration-300">
                            {activeIndex === index ? (
                                <div className="h-8 w-8 flex items-center justify-center border border-black rounded-full bg-white transition-transform duration-300 rotate-180">
                                    <FaMinus />
                                </div>
                            ) : (
                                <div className="h-8 w-8 flex items-center justify-center border border-black rounded-full transition-transform duration-300 rotate-0">
                                    <FaPlus />
                                </div>
                            )}
                        </span>
                    </div>

                    {/* Line between question and answer */}
                    <div className={`w-[90%] mx-auto border-t border-black my-2 transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>

                    {/* Answer content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-4 md:p-6">
                            <p className="text-sm md:text-lg">{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Button Section */}
            <div className="w-full py-8 flex items-center justify-center">
                <button className="flex items-center gap-3 py-4 md:py-5 border border-black rounded-full px-5 md:px-7 text-base md:text-lg hover:bg-gray-100 transition-colors duration-300" onClick={() => navigate('/contact')}>
                    Have More Questions <HiArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Faq;
