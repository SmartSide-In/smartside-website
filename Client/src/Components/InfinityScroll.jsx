import React from "react";
import { motion } from "framer-motion";
import amazon from "../assets/amazon.png";
import dribble from "../assets/dribble.png";
import hubspot from "../assets/hubspot.png";
import notion from "../assets/notion.png";
import netflix from "../assets/netflix.png";
import zoom from "../assets/zoom.png";
const images = [
  amazon,
  dribble,
  hubspot,
  notion,
  netflix,
  zoom
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
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`scroll-img-${index}`}
            className=" object-cover rounded-lg mx-10"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfinityScroll;
