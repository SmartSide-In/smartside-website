import React from "react";
import { motion } from "framer-motion";
import gk from "../assets/gk logo2.png";
import gr from "../assets/grcslogo.png";
import sc from "../assets/SC logo1.png";
import sp from "../assets/SP logo.png";

const images = [
  gk,gr,sc,sp
];

const InfinityScroll = () => {
  return (
    <div className="overflow-hidden w-full relative bg-white">
      <motion.div
        className="flex gap-5"
        animate={{
          x: ["0%", "-100%"], // Moves from right to left
        }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        {/* Duplicate images to create seamless looping effect */}
        {[...images, ...images,...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`scroll-img-${index}`}
            className=" object-cover rounded-lg mx-10 h-[100px] p-4 hover:scale-110 transition-all duration-500 ease-in-out"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfinityScroll;
