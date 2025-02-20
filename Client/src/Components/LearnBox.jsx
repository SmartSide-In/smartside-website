import React from "react";
import analatics from "../assets/analatics.png";
import content from "../assets/content.png";
import emailMarking from "../assets/emailMarking.png";
import searchEngine from "../assets/searchEngine.png";
import socialMedia from "../assets/socialMedia.png";
import webDevelopment from "../assets/webDevelopment.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const LearnBox = ({ name }) => {
    return (
        <div
            className={`w-full max-w-[735px] h-auto md:h-[300px] border border-black rounded-3xl border-b-5 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 font-number shadow-lg transition-transform hover:scale-[1.02] ${
                name === "E-Commerce Solutions" || name === "Cloud Computing Solutions"
                    ? "bg-primary-btn-color"
                    : name === "AI & Machine Learning Integration" || name === "UI/UX Design"
                    ? "bg-[#191A23] text-white"
                    : "bg-white"
            }`}
        >
            {/* Left Content (Title & Button) */}
            <div className="w-full md:w-[50%] text-center md:text-left">
                <div className="mb-6">
                    <h2
                        className={`inline-block text-2xl font-bold px-3 py-1 rounded-lg ${
                            name === "E-Commerce Solutions" || name === "Cloud Computing Solutions" || name === "AI & Machine Learning Integration"
                                ? "bg-white text-black"
                                : "bg-primary-btn-color text-white"
                        }`}
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
                        className={`inline-block text-2xl font-bold px-3 py-1 rounded-lg ml-2 ${
                            name === "E-Commerce Solutions" || name === "Cloud Computing Solutions" || name === "AI & Machine Learning Integration"
                                ? "bg-white text-black"
                                : "bg-primary-btn-color text-white"
                        }`}
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

                <div className="mt-6 md:mt-12">
                    <button className="flex items-center justify-center md:justify-start gap-2 text-lg md:text-xl font-semibold transition-all hover:scale-105">
                        <BsArrowUpRightCircleFill
                            size={30}
                            className={`${name === "AI & Machine Learning Integration" || name === "UI/UX Design" ? "text-white" : "text-black"}`}
                        />
                        Learn more
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="hidden w-full md:w-[50%] md:flex justify-center md:justify-end mt-6 md:mt-0 md:order-last">
                {name === "Web Application Development" && <img src={searchEngine} alt="Search Engine Optimization" className="w-32 md:w-40" />}
                {name === "E-Commerce Solutions" && <img src={webDevelopment} alt="E-Commerce Development" className="w-32 md:w-40" />}
                {name === "AI & Machine Learning Integration" && <img src={socialMedia} alt="AI & ML Integration" className="w-32 md:w-40" />}
                {name === "DevOps & Automation" && <img src={emailMarking} alt="DevOps & Automation" className="w-32 md:w-40" />}
                {name === "Cloud Computing Solutions" && <img src={content} alt="Cloud Computing" className="w-32 md:w-40" />}
                {name === "UI/UX Design" && <img src={analatics} alt="UI/UX Design" className="w-32 md:w-40" />}
            </div>
        </div>
    );
};

export default LearnBox;