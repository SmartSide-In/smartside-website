import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import BoxContainer from "../Components/BoxContainer";
import { HiOutlineChevronRight, HiArrowRight } from "react-icons/hi";
import GotoTop from "../Components/GotoTop";
import { motion } from "framer-motion";
import aboutBox from "../assets/aboutbox.png";
import { Link } from "react-router-dom";
import object from "../assets/OBJECTS.png";
import { FaCircleCheck } from "react-icons/fa6";
import Footer from "../Components/Footer";

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, team: 0, awards: 0, clients: 0 });
  const buttons = [
    "SAT Coaching",
    "PTE Coaching",
    "Student Services",
    "Skills Exams",
    "OET Coaching",
    "IELTS Coaching",
    "TOEFL Coaching",
  ];

  const contentData = {
    "SAT Coaching": {
      heading: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu",
      sideHeading1: "Why to choose Egypt?",
      sideContent1: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posu",
      sideItems1: [
        { title: "Passport Assistance:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Car Rental Services:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Travel Organization:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
      sideHeading2: "Our Service For Egypt",
      sideItems2: [
        { title: "Cultural Immersion Experiences", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Educational Travel Programs", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Volunteer and Service Travel Opportunities", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
    },
    "PTE Coaching": {
      heading: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      content: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideHeading1: "Why to choose Egypt?",
      sideContent1: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideItems1: [
        { title: "Passport Assistance:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Car Rental Services:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Travel Organization:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
      sideHeading2: "Our Service For Egypt",
      sideItems2: [
        { title: "Cultural Immersion Experiences", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Educational Travel Programs", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Volunteer and Service Travel Opportunities", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
    },
    "Student Services": {
      heading: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      content: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideHeading1: "Why to choose Egypt?",
      sideContent1: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideItems1: [
        { title: "Passport Assistance:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Car Rental Services:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Travel Organization:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
      sideHeading2: "Our Service For Egypt",
      sideItems2: [
        { title: "Cultural Immersion Experiences", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Educational Travel Programs", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Volunteer and Service Travel Opportunities", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
    },
    "Skills Exams": {
      heading: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      content: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideHeading1: "Why to choose Egypt?",
      sideContent1: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideItems1: [
        { title: "Passport Assistance:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Car Rental Services:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Travel Organization:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
      sideHeading2: "Our Service For Egypt",
      sideItems2: [
        { title: "Cultural Immersion Experiences", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Educational Travel Programs", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Volunteer and Service Travel Opportunities", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
    },
    "OET Coaching": {
      heading: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      content: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideHeading1: "Why to choose Egypt?",
      sideContent1: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideItems1: [
        { title: "Passport Assistance:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Car Rental Services:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Travel Organization:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
      sideHeading2: "Our Service For Egypt",
      sideItems2: [
        { title: "Cultural Immersion Experiences", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Educational Travel Programs", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Volunteer and Service Travel Opportunities", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
    },
    "IELTS Coaching": {
      heading: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      content: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideHeading1: "Why to choose Egypt?",
      sideContent1: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideItems1: [
        { title: "Passport Assistance:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Car Rental Services:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Travel Organization:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
      sideHeading2: "Our Service For Egypt",
      sideItems2: [
        { title: "Cultural Immersion Experiences", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Educational Travel Programs", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Volunteer and Service Travel Opportunities", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
    },
    "TOEFL Coaching": {
      heading: "Wonders of Ancient Civilizations: A Journey Through Egypt",
      content: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideHeading1: "Why to choose Egypt?",
      sideContent1: "Aliquam eros justo, posuere loborti viverra laoreet...",
      sideItems1: [
        { title: "Passport Assistance:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Car Rental Services:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Travel Organization:", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
      sideHeading2: "Our Service For Egypt",
      sideItems2: [
        { title: "Cultural Immersion Experiences", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Educational Travel Programs", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
        { title: "Volunteer and Service Travel Opportunities", content: "Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam er" },
      ],
    },
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Mark animation as triggered
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]); // Add hasAnimated as a dependency

  useEffect(() => {
    if (isVisible) {
      const targetValues = { projects: 10, team: 20, awards: 5, clients: 100 };
      const duration = 2000; // Animation duration in milliseconds
      const intervalTime = 50; // Interval time in milliseconds
      const steps = duration / intervalTime; // Total steps

      const incrementCounters = () => {
        setCounts((prevCounts) => ({
          projects:
            prevCounts.projects < targetValues.projects
              ? prevCounts.projects + Math.ceil(targetValues.projects / steps)
              : targetValues.projects, // Stop at target value
          team:
            prevCounts.team < targetValues.team
              ? prevCounts.team + Math.ceil(targetValues.team / steps)
              : targetValues.team, // Stop at target value
          awards:
            prevCounts.awards < targetValues.awards
              ? prevCounts.awards + Math.ceil(targetValues.awards / steps)
              : targetValues.awards, // Stop at target value
          clients:
            prevCounts.clients < targetValues.clients
              ? prevCounts.clients + Math.ceil(targetValues.clients / steps)
              : targetValues.clients, // Stop at target value
        }));
      };

      const interval = setInterval(incrementCounters, intervalTime);

      // Stop the interval after the duration
      setTimeout(() => clearInterval(interval), duration);

      return () => clearInterval(interval);
    }
  }, [isVisible]); // Trigger animation only when isVisible is true

  const [selectedButton, setSelectedButton] = useState("SAT Coaching");

  const StatBox = ({ value, suffix, label }) => (
    <div className="flex flex-col items-center">
      <motion.h1 className="text-4xl lg:text-6xl font-bold text-white" transition={{ duration: 0.5 }}>
        {value}
        <span>{suffix}</span>
      </motion.h1>
      <p className="mt-5 text-sm lg:text-xl">{label}</p>
    </div>
  );
  return (
    <>
      <GotoTop visible={visible} setVisible={setVisible} />
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <BoxContainer name={"About Us"} />
      <div className="w-[90%] mx-auto mt-10 lg:mt-25 flex flex-col lg:flex-row justify-between">
        {/* Main Content */}
        <div className="w-full lg:w-[70%] p-4 lg:p-6 rounded-lg">
          <h1 className="text-3xl lg:text-6xl font-bold font-header">{contentData[selectedButton]?.heading}</h1>
          <p className="mt-5 lg:mt-9 leading-[25px] lg:leading-[35px] font-header text-gray-500 w-full lg:w-[85%]">
            {contentData[selectedButton]?.content}
          </p>

          {/* Side Content 1 */}
          {contentData[selectedButton]?.sideHeading1 && (
            <div className="mt-8">
              <h3 className="text-2xl lg:text-3xl font-semibold">{contentData[selectedButton]?.sideHeading1}</h3>
              <p className="mt-3 leading-[25px] lg:leading-[35px] font-header text-gray-500 w-full lg:w-[85%]">
                {contentData[selectedButton]?.sideContent1}
              </p>
              {/* List of items if available */}
              {contentData[selectedButton]?.sideItems1 &&
                contentData[selectedButton].sideItems1.map((item, index) => (
                  <div key={index} className="mt-4 font-header">
                    <h4 className="text-lg lg:text-xl font-semibold text-[#034833]">{item.title}</h4>
                    <p className="text-gray-500 mt-3 lg:mt-5 leading-[25px] lg:leading-[35px] w-full lg:w-[85%]">{item.content}</p>
                  </div>
                ))}
            </div>
          )}

          {/* Side Content 2 */}
          {contentData[selectedButton]?.sideHeading2 && (
            <div className="mt-8 font-header">
              <h3 className="text-2xl lg:text-3xl font-semibold font-header">{contentData[selectedButton]?.sideHeading2}</h3>
              {/* List of items if available */}
              {contentData[selectedButton]?.sideItems2 &&
                contentData[selectedButton].sideItems2.map((item, index) => (
                  <div key={index} className="mt-6 lg:mt-10">
                    <h4 className="text-lg lg:text-xl font-semibold text-[#034833]">{item.title}</h4>
                    <p className="text-gray-500 mt-3 lg:mt-5 leading-[25px] lg:leading-[35px] w-full lg:w-[85%]">{item.content}</p>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Sidebar with Buttons */}
        <div className="w-full lg:w-[25%] mt-8 lg:mt-0">
          <div className="w-full h-auto bg-[#F1F5EB] rounded-3xl py-5">
            <div className="w-[90%] mx-auto">
              <div className="grid grid-cols-1 gap-4 p-4 mt-5">
                {buttons.map((button, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between px-4 py-3 h-12 rounded-lg font-header text-lg cursor-pointer transition bg-white`}
                    onClick={() => setSelectedButton(button)}
                  >
                    <h4 className="text-sm font-medium whitespace-nowrap">{button}</h4>
                    <div
                      className={`w-[30px] h-[30px] rounded-full flex items-center justify-center ${selectedButton === button ? "bg-primary-btn-color" : "bg-[#F1F5EB]"
                        }`}
                    >
                      <HiOutlineChevronRight className="text-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={sectionRef} className="w-full mt-10 lg:mt-20 flex justify-center items-center h-auto lg:h-screen">
        <div className="w-[90%] h-auto lg:h-[90%] overflow-hidden rounded-3xl flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[30%] bg-primary rounded-4xl"></div>
          <div className="w-full lg:w-[65%] rounded-3xl flex flex-col justify-between mt-8 lg:mt-0">
            <div className="w-full h-auto lg:h-[60%] flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[60%] flex flex-col font-header p-4 lg:p-15">
                <img
                  src={aboutBox}
                  alt="world Image"
                  className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
                />
                <h2 className="mt-5 text-2xl lg:text-3xl font-bold">Who We are ?</h2>
                <p className="mt-5 text-gray-400 leading-[25px] lg:leading-[35px]">Lorem Ipsum is simply dummy text the printing and typese <br /> Lorem Ipsum has been the industry's standard dummy</p>
                <Link to={'/contact'}>
                  <button className="flex items-center gap-4 border mt-5 w-full lg:w-[28%] border-gray-300 rounded-full px-4 py-4 text-sm font-semibold">
                    Contact us
                    <HiArrowRight />
                  </button>
                </Link>
              </div>
              <div className="w-full lg:w-[35%] rounded-3xl bg-primary mt-8 lg:mt-0"></div>
            </div>
            <div className="w-full font-header text-white flex flex-col lg:flex-row justify-between h-auto lg:h-[30%] rounded-3xl bg-primary-btn-color px-4 lg:px-30 py-8 lg:py-20 mt-8 lg:mt-0">
              <StatBox value={counts.projects} suffix="k+" label="Completed Projects" />
              <StatBox value={counts.team} suffix="+" label="Team Members" />
              <StatBox value={counts.awards} suffix="k+" label="Winning Awards" />
              <StatBox value={counts.clients} suffix="+" label="Clients Served" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full h-auto lg:h-screen">
        <div className="w-[90%] h-full mx-auto flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[40%] hidden md:flex items-center justify-center mt-8 lg:mt-0">
            <div className="h-[60%] w-full lg:w-[80%] bg-primary rounded-2xl relative before:absolute before:inset-0 before:border-3 before:rounded-2xl before:border-black before:content-[''] before:scale-[1] before:translate-x-[-45px] before:translate-y-[40px] before:z-10">
              <div className="absolute -right-10 bottom-10 hidden md:flex items-center bg-primary-btn-color w-full lg:w-[40%] h-[100px] z-100 rounded-xl px-5 gap-5 font-header">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">25</h1>
                <p className="text-white">Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%] flex items-center justify-center mt-8 lg:mt-0">
            <div className="h-[60%] w-full lg:w-[90%] rounded-2xl relative">
              <div className="flex items-center mt-3 font-header font-semibold gap-3">
                <p>WHY CHOOSE US</p>
                <img src={object} alt="Img" />
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold font-header mt-5 w-full lg:w-[80%] leading-[50px] lg:leading-[70px]">
                Experiencing Traditions Cultural Immersion
              </h1>
              <div className="mt-5 font-header">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-7">
                    <FaCircleCheck size={20} />
                    <h2 className="text-lg lg:text-xl font-semibold">Marketing Services</h2>
                  </div>
                  <p className="text-gray-400 mx-12">Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa loren ipsum</p>
                </div>
              </div>
              <div className="mt-5 font-header">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-7">
                    <FaCircleCheck size={20} />
                    <h2 className="text-lg lg:text-xl font-semibold">IT Maintenance</h2>
                  </div>
                  <p className="text-gray-400 mx-12">Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa loren ipsum</p>
                </div>
                <div className="mt-5 h-[80px] flex items-center">
                  <button className="flex bg-primary-btn-color py-4 lg:py-6 px-6 lg:px-8 rounded-full text-sm items-center gap-3 text-white">
                    Read more
                    <HiArrowRight />
                  </button>

                  <div className="w-[50px] lg:w-[70px] ml-8 h-[50px] lg:h-[70px] bg-primary-btn-color rounded-full"></div>
                  <div className="font-header ml-4">
                    <p className="text-gray-500">Need help ?</p>
                    <h2 className="font-semibold">(808) 555-0111</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;