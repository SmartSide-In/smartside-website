import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import { motion } from 'framer-motion'
import Mobile from '../assets/Group 36.png'
import aboutLogo from '../assets/aboutLogo.png'
import icon from '../assets/icon.png'
import service from '../assets/services.png'
import products from '../assets/products.png'
import InfinityScroll from '../Components/InfinityScroll'
import illu from '../assets/illustration.png'
import Projects from '../Components/Projects'
import Faq from '../Components/Faq'
import GotoTop from '../Components/GotoTop'
import Footer from '../Components/Footer'
import LearnBox from '../Components/LearnBox'
import { Helmet } from 'react-helmet'
import ReviewBox from '../Components/ReviewBox'
const LandingPage = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  useEffect(() => {
    if (isVisible) {
      let current = 1;
      const interval = setInterval(() => {
        if (current < 5) {
          setCount((prev) => prev + 1);
          current++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    } else {
      setCount(1);
    }
  }, [isVisible]);


  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>SmartSide - Where Innovation Gets Smarter | Web Development & AI Solutions</title>
        <meta name="title" content="SmartSide - Where Innovation Gets Smarter | Web Development & AI Solutions" />
        <meta name="description" content="SmartSide combines innovation and technology to create powerful, future-ready solutions. Expertise in AI development, cloud computing, web development, and DevOps. Transform your business with custom digital solutions." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartside.com/" />
        <meta property="og:title" content="SmartSide - Where Innovation Gets Smarter | Web Development & AI Solutions" />
        <meta property="og:description" content="Transform your business with SmartSide's innovative digital solutions. Expertise in AI, cloud computing, web development, and DevOps. Get started today!" />
        <meta property="og:image" content="/path-to-your-og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://smartside.com/" />
        <meta property="twitter:title" content="SmartSide - Where Innovation Gets Smarter | Web Development & AI Solutions" />
        <meta property="twitter:description" content="Transform your business with SmartSide's innovative digital solutions. Expertise in AI, cloud computing, web development, and DevOps. Get started today!" />
        <meta property="twitter:image" content="/path-to-your-og-image.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="web development, AI solutions, cloud computing, DevOps, UI/UX design, e-commerce solutions, digital transformation, software development, machine learning, application maintenance" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="SmartSide" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://smartside.com/" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Additional Meta Tags for Better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#FFBB12" />
        <meta name="msapplication-TileColor" content="#FFBB12" />

        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SmartSide",
        "url": "https://smartside.com",
        "logo": "https://smartside.com/logo.png",
        "description": "SmartSide combines innovation and technology to create powerful, future-ready solutions. Expertise in AI development, cloud computing, web development, and DevOps.",
        "address": {
          "@type": "PostalAddress",
          "telephone": "(808) 555-0111"
        },
        "sameAs": [
          "https://facebook.com/smartside",
          "https://twitter.com/smartside",
          "https://linkedin.com/company/smartside"
        ]
      }
    `}
        </script>
      </Helmet>
      <GotoTop />
      {/* home section starts here */}
      <section className='w-full flex flex-col items-center'>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='relative w-[90%] h-[70vh] mt-20 rounded-3xl bg-primary overflow-hidden z-10'
        >
          {/* First floating image */}
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={[
              { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } },
              { y: [0, -10, 0], transition: { repeat: Infinity, repeatType: "reverse", duration: 1.7 } }
            ]}
            src={Mobile}
            alt="design"
            className="z-5 absolute 
            hidden sm:block
            w-[180px] md:w-[220px] lg:w-[280px]
            top-10 md:top-14 lg:top-10
            right-[6%] md:right-[3%] lg:right-[6%]
            object-contain"
          />

          {/* Second floating image */}
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={[
              { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5 } },
              { y: [0, -10, 0], transition: { repeat: Infinity, repeatType: "reverse", duration: 1.7 } }
            ]}
            src={Mobile}
            alt="design"
            className="z-5 absolute 
            hidden sm:block
            w-[180px] md:w-[220px] lg:w-[280px]
            top-25 md:top-25 
            right-[25%] md:right-[22%] lg:right-[25%]
            rotate-[18deg] scale-75 mb-10
            object-contain"
          />

          {/* Background circle */}
          <div className='w-[300px] md:w-[400px] lg:w-[500px] 
                      h-[300px] md:h-[400px] lg:h-[500px] 
                      rounded-full bg-primary-btn-color 
                      absolute 
                      -bottom-[25%] 
                      right-[10%] md:right-[10%] lg:right-[15%] 
                      -z-5 
                      sm:block'
          />

          {/* Content container */}
          <div className='w-full md:w-[90%] lg:w-[80%] h-full flex flex-col justify-center mx-auto z-50 px-4 md:px-8 lg:px-0'>
            <div className='h-full w-full md:w-[65%] lg:w-[50%] flex flex-col items-center md:items-start justify-center'>
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold flex flex-col font-primary text-center md:text-left">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFBB12] to-[#E6A80D]">
                  Where
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#E6A80D] to-[#B3830A]">
                  Innovation Get's
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#B3830A] to-[#99700B]">
                  Smarter.
                </span>
              </h1>

              {/* CTA Buttons */}
              <div className='w-full md:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-6 lg:gap-10 mt-8 md:mt-10'>
                <button className='flex gap-3 md:gap-4 lg:gap-5 items-center 
                               py-3 md:py-4 lg:py-5 
                               px-6 md:px-7 lg:px-8 
                               border border-black cursor-pointer rounded-full 
                               font-secondary text-xs md:text-sm 
                               text-center whitespace-nowrap'>
                  Request Quote <HiArrowRight />
                </button>
                <div className='font-secondary flex items-center gap-2 cursor-pointer text-xs md:text-sm whitespace-nowrap'>
                  <div className="w-[40px] md:w-[45px] lg:w-[50px] 
                              h-[40px] md:h-[45px] lg:h-[50px] 
                              flex items-center justify-center 
                              rounded-full bg-gray-300 
                              hover:bg-primary-btn-color 
                              transition-colors duration-300">
                    <div className="w-0 h-0 
                                border-l-[12px] border-t-[6px] border-b-[6px] 
                                border-solid border-l-black 
                                border-t-transparent border-b-transparent">
                    </div>
                  </div>
                  Watch Our Videos
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* home section ends here */}


      {/* about section starts here */}
      <section
        id="about"
        className='w-full py-16 md:py-20 lg:py-28'
      >
        <div className='w-full flex flex-col items-center'>
          <div className='w-[92%] md:w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-16'>
            {/* Left Column */}
            <div className='w-full lg:w-[25%] flex flex-col items-center gap-10'>
              <div className="w-full max-w-[300px] aspect-square rounded-lg bg-gray-200 relative
                    before:absolute before:left-[15px] before:top-[15px] before:-right-[15px] before:-bottom-[15px]
                    before:border before:rounded-lg before:border-primary-btn-color before:content-['']
                    before:z-10 shadow-md">
              </div>
              <img
                src={aboutLogo}
                alt="Smartside"
                className='w-[50%] lg:w-[85%] object-contain transition-transform hover:scale-105 mb-8 lg:mb-0'
              />
            </div>

            {/* Middle Column */}
            <div ref={sectionRef} className='w-full lg:w-[25%] flex flex-col gap-8'>
              <div className='w-full bg-primary-btn-color rounded-lg p-8 shadow-md'>
                <div className='flex items-center justify-center gap-5'>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-4xl md:text-5xl lg:text-6xl font-header font-bold text-white'
                  >
                    {count}<span>+</span>
                  </motion.h1>
                  <div className='font-header text-white font-medium text-base md:text-lg'>
                    Years Of <br />Experience
                  </div>
                </div>
              </div>
              <div className='w-full aspect-video lg:aspect-[3/4] bg-gray-200 rounded-lg shadow-md'></div>
            </div>

            {/* Right Column */}
            <div className='w-full lg:w-[50%] lg:pl-12'>
              <div className='flex items-center gap-4 mb-6'>
                <img src={icon} alt="icons" className='w-6 h-6 md:w-8 md:h-8' />
                <h6 className='font-header font-medium'>WHY CHOOSE US</h6>
              </div>

              <h2 className='font-primary font-bold text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-[1.2] mb-6'>
                At SmartSide, we don't just build software we create digital solutions that drive success
              </h2>

              <p className='mb-10 text-stone-400 leading-relaxed font-secondary text-base md:text-lg'>
                At SmartSide, we combine innovation and technology to create powerful, future-ready solutions. Our services range from AI-driven development and cloud computing to web development, application maintenance, and DevOps. We assist businesses in scaling, automating, and thriving. Our expert team ensures seamless execution, robust security, and long-term success. Let us help you turn your vision into reality!
              </p>

              {/* Service Boxes */}
              <div className='grid md:grid-cols-2 gap-8 mb-10'>
                <div className='w-full border border-gray-400 rounded-xl p-6'>
                  <div className='flex items-center gap-4 mb-5'>
                    <img src={service} alt="icons" className='w-6 h-6 md:w-8 md:h-8' />
                    <h2 className='font-primary font-bold text-xl md:text-2xl'>Services</h2>
                  </div>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3 text-stone-500'>
                      <HiCheck className="text-primary-btn-color flex-shrink-0" />
                      <span className='font-secondary'>Expertise That Matters</span>
                    </li>
                    <li className='flex items-center gap-3 text-stone-500'>
                      <HiCheck className="text-primary-btn-color flex-shrink-0" />
                      <span className='font-secondary'>Results That Speak</span>
                    </li>
                  </ul>
                </div>

                <div className='w-full border border-gray-400 rounded-xl p-6'>
                  <div className='flex items-center gap-4 mb-5'>
                    <img src={products} alt="icons" className='w-6 h-6 md:w-8 md:h-8' />
                    <h2 className='font-primary font-bold text-xl md:text-2xl'>Products</h2>
                  </div>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3 text-stone-500'>
                      <HiCheck className="text-primary-btn-color flex-shrink-0" />
                      <span className='font-secondary'>Custom & Scalable Solutions</span>
                    </li>
                    <li className='flex items-center gap-3 text-stone-500'>
                      <HiCheck className="text-primary-btn-color flex-shrink-0" />
                      <span className='font-secondary'>Innovation at Core</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className='flex flex-col md:flex-row items-center gap-8 py-4'>
                <button className='w-full md:w-auto flex justify-center gap-3 px-8 py-4 rounded-full border border-primary-btn-color items-center'>
                  Know more <HiArrowRight />
                </button>
                <div className='flex items-center'>
                  <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-btn-color'></div>
                  <div className='flex flex-col font-medium ml-5'>
                    <p>Need help?</p>
                    <p>(808) 555-0111</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Box and Infinity Scroll */}
          <div className='w-[92%] md:w-[90%] mx-auto mt-20'>
            <ReviewBox />
            <div className='mt-12'>
              <InfinityScroll />
            </div>
          </div>
        </div>
      </section>
      {/* about section ends here */}

      {/* services section starts here */}
      <section
        className='w-full pb-10 md:pb-16 lg:pb-20 '
        id='service'
      >
        <div className='w-[90%] md:w-[85%] lg:w-[80%] mx-auto'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl 
                      font-primary font-bold 
                      my-10 md:my-16 lg:my-20 
                      bg-gradient-to-b from-[#FFBB12] to-[#99700B] 
                      bg-clip-text text-transparent'>
            Our Services
          </h1>

          <div className='flex items-center justify-center w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 
                         gap-6 sm:gap-8 md:gap-12 lg:gap-20 
                         w-full'>
              <LearnBox name={'Web Application Development'} />
              <LearnBox name={'E-Commerce Solutions'} />
              <LearnBox name={'AI & Machine Learning Integration'} />
              <LearnBox name={'DevOps & Automation'} />
              <LearnBox name={'Cloud Computing Solutions'} />
              <LearnBox name={'UI/UX Design'} />
            </div>
          </div>
        </div>
      </section>
      {/* services section ends here */}

      {/* project section starts here */}
      <section id='project' className='w-full min-h-screen mt-20 md:mt-28 lg:mt-40'>
        <div className='w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-[3%]'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-primary font-bold bg-transparent bg-clip-text text-transparent leading-relaxed bg-gradient-to-b from-[#FFBB12] to-[#99700B]'>
            Previous Projects
          </h1>
        </div>
        <div className='w-full flex items-center justify-center mt-10 md:mt-16 lg:mt-25'>
          <Projects />
        </div>
      </section>

      {/* career section starts here */}
      <section id="career" className="w-full mt-30 px-5 md:px-0">
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center h-auto md:h-[500px] rounded-4xl bg-primary mx-auto px-5 md:px-[10%] py-10">
          <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-primary font-bold mb-6 md:mb-10">
              Let’s make things happen
            </h1>
            <p className="mb-6 md:mb-7 font-secondary text-lg md:text-xl leading-[28px] md:leading-[30px]">
              Your vision, our expertise—SmartSide turns ideas into reality with innovative web development, AI-driven solutions, cloud computing, and seamless application maintenance.
            </p>
            <p className="font-secondary text-lg md:text-xl leading-[28px]">
              Let’s create something extraordinary!
            </p>
            <p className="mb-3 md:mb-2 font-secondary text-lg md:text-xl leading-[28px]">
              Contact us today and let’s build something amazing together!
            </p>

            <button className="py-3 md:py-5 px-6 md:px-7 rounded-full bg-primary-btn-color font-secondary text-lg md:text-xl">
              Get your free proposal
            </button>
          </div>
          <img src={illu} alt="Illustration" className="max-w-[80%] md:max-w-full w-full md:w-auto mt-8 md:mt-0" />
        </div>

        {/* FAQ Section */}
        <div className="w-[90%] mx-auto my-10 md:my-20 text-center">
          <h1 className="text-3xl md:text-6xl font-primary font-bold my-10 md:my-20 bg-gradient-to-b from-[#FFBB12] to-[#99700B] bg-clip-text text-transparent leading-relaxed">
            FAQ / Ask anything ?
          </h1>
          <Faq />
        </div>
      </section>

      <footer id="contact" className='w-full h-auto overflow-hidden'>
        <div className='w-[80%] border border-black mx-auto'></div>
        <Footer />
      </footer>
      {/* project section ends here */}
    </>
  )
}

export default LandingPage