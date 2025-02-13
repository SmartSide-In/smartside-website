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
            className={`w-full max-w-[735px] h-auto md:h-[380px] border border-black rounded-3xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 font-number shadow-lg transition-transform hover:scale-[1.02] ${name === "webDevelopment" || name === "content"
                    ? "bg-primary-btn-color"
                    : name === "socialMedia" || name === "analytics"
                        ? "bg-[#191A23] text-white"
                        : "bg-white"
                }`}
        >
            {/* Left Content */}
            <div className="w-full md:w-[50%] text-center md:text-left">
                <div className="mb-6">
                    <h2
                        className={`inline-block text-2xl font-bold px-3 py-1 rounded-lg ${name === "webDevelopment" || name === "content" || name === "socialMedia"
                                ? "bg-white text-black"
                                : "bg-primary-btn-color text-white"
                            }`}
                    >
                        {name === "searchEngine"
                            ? "Search Engine"
                            : name === "webDevelopment"
                                ? "Web "
                                : name === "socialMedia"
                                    ? "Social Media"
                                    : name === "emailMarking"
                                        ? "Email"
                                        : name === "content"
                                            ? "Content"
                                            : "Analytics and"}
                    </h2>
                    <h2
                        className={`inline-block text-2xl font-bold px-3 py-1 rounded-lg ml-2 ${name === "webDevelopment" || name === "content" || name === "socialMedia"
                                ? "bg-white text-black"
                                : "bg-primary-btn-color text-white"
                            }`}
                    >
                        {name === "searchEngine"
                            ? "Optimization"
                            : name === "webDevelopment"
                                ? "Development"
                                : name === "socialMedia"
                                    ? "Marketing"
                                    : name === "emailMarking"
                                        ? "Marketing"
                                        : name === "content"
                                            ? "Creation"
                                            : "Tracking"}
                    </h2>
                </div>
                <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-6 md:mt-0">
                    {name === "searchEngine" && <img src={searchEngine} alt="Search Engine Optimization" className="w-32 md:w-40" />}
                    {name === "webDevelopment" && <img src={webDevelopment} alt="Web Development" className="w-32 md:w-40" />}
                    {name === "socialMedia" && <img src={socialMedia} alt="Social Media Marketing" className="w-32 md:w-40" />}
                    {name === "emailMarking" && <img src={emailMarking} alt="Email Marketing" className="w-32 md:w-40" />}
                    {name === "content" && <img src={content} alt="Content Creation" className="w-32 md:w-40" />}
                    {name === "analytics" && <img src={analatics} alt="Analytics and Tracking" className="w-32 md:w-40" />}
                </div>
                <div className="mt-6 md:mt-12">
                    <button
                        className="flex items-center justify-center md:justify-start gap-2 text-lg md:text-xl font-semibold transition-all hover:scale-105"
                    >
                        <BsArrowUpRightCircleFill
                            size={30}
                            className={`${name === "socialMedia" || name === "analytics" ? "text-white" : "text-black"}`}
                        />
                        Learn more
                    </button>
                </div>
            </div>

            {/* Right Image */}
        </div>
    );
};

export default LearnBox;
