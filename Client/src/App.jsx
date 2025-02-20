import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import LandingPage from './Pages/LandingPage';
import About from './Pages/About';
import Service from './Pages/Service';
import Project from './Pages/Project';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import CustomErrorPage from './Pages/CustomErrorPage';
// Initialize EmailJS outside of the component
emailjs.init("dQ9ILQOvzgBlEk-xI");

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add a catch-all route for 404 */}
        <Route path="*" element={<CustomErrorPage/>} />
      </Routes>
    </Router>
  );
};

export default App;