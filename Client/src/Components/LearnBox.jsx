import React, { useState } from "react";
import analatics from "../assets/analatics.png";
import content from "../assets/content.png";
import emailMarking from "../assets/emailMarking.png";
import searchEngine from "../assets/searchEngine.png";
import socialMedia from "../assets/socialMedia.png";
import webDevelopment from "../assets/webDevelopment.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const LearnBox = ({ name }) => {
    const [isHovered, setIsHovered] = useState(false);

    const serviceContent = {
        "Web Application Development": {
            description: "Custom web applications built with modern technologies. We create scalable, responsive, and user-friendly solutions tailored to your business needs.",
            features: ["Full-stack Development", "Progressive Web Apps", "API Integration", "Database Design"]
        },
        "E-Commerce Solutions": {
            description: "Complete e-commerce platforms with secure payment gateways, inventory management, and customer relationship tools.",
            features: ["Shopping Cart", "Payment Integration", "Order Management", "Customer Analytics"]
        },
        "AI & Machine Learning Integration": {
            description: "Integrate AI and ML capabilities into your applications for smart automation and data-driven insights.",
            features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Machine Learning Models"]
        },
        "DevOps & Automation": {
            description: "Streamline your development and deployment processes with modern DevOps practices and automation tools.",
            features: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring", "Automated Testing"]
        },
        "Cloud Computing Solutions": {
            description: "Leverage cloud technologies for scalable, reliable, and cost-effective infrastructure solutions.",
            features: ["Cloud Migration", "Serverless Architecture", "Multi-cloud Strategy", "Cloud Security"]
        },
        "UI/UX Design": {
            description: "Create intuitive and engaging user experiences with modern design principles and user-centered approaches.",
            features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
        }
    };

    return (
        <div
            className={`relative w-full h-auto min-h-[200px] sm:min-h-[250px] md:h-[300px] lg:h-[320px] 
            border border-black rounded-3xl border-b-4 
            flex flex-col md:flex-row items-center justify-between 
            p-4 sm:p-6 md:p-8 lg:p-10 
            font-number shadow-lg transition-all duration-300 
            ${name === "E-Commerce Solutions" || name === "Cloud Computing Solutions"
                ? "bg-primary-btn-color"
                : name === "AI & Machine Learning Integration" || name === "UI/UX Design"
                ? "bg-[#191A23] text-white"
                : "bg-white"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Hover Overlay */}
            {isHovered && (
                <div className="absolute inset-0 bg-gray-300 rounded-3xl 
                    p-4 sm:p-6 md:p-8 lg:p-10 
                    flex flex-col justify-center 
                    transition-all duration-300 text-black">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{name}</h3>
                    <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6">{serviceContent[name].description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        {serviceContent[name].features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-btn-color rounded-full"></div>
                                <span className="text-xs sm:text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 sm:gap-3">
                    <h2
                        className={`text-xl sm:text-2xl font-bold px-3 py-1 rounded-lg 
                        ${name === "E-Commerce Solutions" || name === "Cloud Computing Solutions" || name === "AI & Machine Learning Integration"
                            ? "bg-white text-black"
                            : "bg-primary-btn-color text-white"}`}
                    >
                        {name === "Web Application Development"
                            ? "Web Application"
                            : name === "E-Commerce Solutions"
                            ? "E-Commerce"
                            : name === "AI & Machine Learning Integration"
                            ? "AI & Machine Learning"
                            : name === "DevOps & Automation"
                            ? "DevOps &"
                            : name === "Cloud Computing Solutions"
                            ? "Cloud Computing"
                            : "UI/UX"}
                    </h2>
                    <h2
                        className={`text-xl sm:text-2xl font-bold px-3 py-1 rounded-lg
                        ${name === "E-Commerce Solutions" || name === "Cloud Computing Solutions" || name === "AI & Machine Learning Integration"
                            ? "bg-white text-black"
                            : "bg-primary-btn-color text-white"}`}
                    >
                        {name === "Web Application Development"
                            ? "Development"
                            : name === "E-Commerce Solutions"
                            ? "Solutions"
                            : name === "AI & Machine Learning Integration"
                            ? "Integration"
                            : name === "DevOps & Automation"
                            ? "Automation"
                            : name === "Cloud Computing Solutions"
                            ? "Solutions"
                            : "Design"}
                    </h2>
                </div>

                <button className="flex items-center justify-center md:justify-start gap-2 text-base sm:text-lg md:text-xl font-semibold transition-all hover:scale-105">
                    <BsArrowUpRightCircleFill
                        size={24}
                        className={name === "AI & Machine Learning Integration" || name === "UI/UX Design" ? "text-white" : "text-black"}
                    />
                    Learn more
                </button>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                <img
                    src={
                        name === "Web Application Development"
                            ? searchEngine
                            : name === "E-Commerce Solutions"
                            ? webDevelopment
                            : name === "AI & Machine Learning Integration"
                            ? socialMedia
                            : name === "DevOps & Automation"
                            ? emailMarking
                            : name === "Cloud Computing Solutions"
                            ? content
                            : analatics
                    }
                    alt={name}
                    className="w-24 sm:w-28 md:w-32 lg:w-40 object-contain"
                />
            </div>
        </div>
    );
};

export default LearnBox;