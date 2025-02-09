import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const GotoTop = ({ visible, setVisible }) => {
  

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-15 right-15 p-3 bg-primary-btn-color z-100 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <HiArrowUp size={24} />
    </button>
  );
};

export default GotoTop;
