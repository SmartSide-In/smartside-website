import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import annon from '../assets/annon.png'
import LearnBox from '../Components/LearnBox'
import Footer from '../Components/Footer'
import PriceCard from '../Components/PriceCard'
import GotoTop from '../Components/GotoTop'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'


const ServicesSEO = () => {
  const servicesList = [
    {
      "@type": "Service",
      "name": "Web Application Development",
      "description": "Custom web application development with modern technologies and responsive design",
      "provider": {
        "@type": "Organization",
        "name": "SmartSide"
      }
    },
    {
      "@type": "Service",
      "name": "E-Commerce Solutions",
      "description": "Complete e-commerce website development and maintenance services",
      "provider": {
        "@type": "Organization",
        "name": "SmartSide"
      }
    },
    {
      "@type": "Service",
      "name": "AI & Machine Learning Integration",
      "description": "Advanced AI and ML solutions for business automation and optimization",
      "provider": {
        "@type": "Organization",
        "name": "SmartSide"
      }
    },
    {
      "@type": "Service",
      "name": "DevOps & Automation",
      "description": "Streamlined DevOps services and process automation solutions",
      "provider": {
        "@type": "Organization",
        "name": "SmartSide"
      }
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SmartSide Digital Services & Solutions",
    "description": "Comprehensive digital services including web development, e-commerce, AI integration, and cloud solutions. Transform your business with our expert services.",
    "provider": {
      "@type": "Organization",
      "name": "SmartSide",
      "url": "[Your-Website-URL]"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "19",
      "highPrice": "99",
      "offerCount": "6"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": servicesList
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Digital Services & Solutions | Web Development, AI, Cloud Computing | SmartSide</title>
      <meta
        name="title"
        content="Digital Services & Solutions | Web Development, AI, Cloud Computing | SmartSide"
      />
      <meta
        name="description"
        content="Transform your business with SmartSide's comprehensive digital services. Expert web development, e-commerce solutions, AI integration, cloud computing, and UI/UX design services tailored to your needs."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta
        property="og:title"
        content="SmartSide Digital Services | Transforming Businesses Through Technology"
      />
      <meta
        property="og:description"
        content="Explore our range of digital services: Web Development, E-commerce Solutions, AI Integration, DevOps, Cloud Computing, and UI/UX Design. Start your digital transformation journey today."
      />
      <meta property="og:image" content="[Your-Website-URL]/assets/annon.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta
        property="twitter:title"
        content="Complete Digital Services & Solutions | SmartSide"
      />
      <meta
        property="twitter:description"
        content="Comprehensive digital services for modern businesses. Web development, e-commerce, AI, cloud solutions, and more. Transform your business with SmartSide."
      />
      <meta property="twitter:image" content="[Your-Website-URL]/assets/annon.png" />

      {/* Additional SEO Meta Tags */}
      <meta
        name="keywords"
        content="web development, e-commerce solutions, AI integration, machine learning, DevOps, cloud computing, UI/UX design, digital services, technology solutions, business transformation"
      />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={window.location.href} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
const Service = () => {
  return (
    <>
      <ServicesSEO />
      <GotoTop />
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Services'} />

      {/* Hero Section */}
      <motion.div
      initial={{ opacity: 0, y:100 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5, delay:0.5 }} 
      className='w-full min-h-[70vh] mt-8 md:mt-15 lg:mt-16 px-4 md:px-6' id='consultation'>
        <div className='w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mt-20'>
          <div className='w-full lg:w-[40%] text-center lg:text-left'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-primary leading-tight lg:leading-[80px]'>
              Navigating the digital landscape for success
            </h1>
            <p className='font-secondary text-lg md:text-xl w-full mt-6 lg:mt-10'>
              We provide top-notch web development, application maintenance, and digital marketing to help businesses grow.
              Our expert team builds responsive websites, maintains applications, and enhances your online presence through SEO and social media.
              Let’s create, optimize, and scale your digital journey.

            </p>
            <button className='bg-black text-white px-6 py-4 font-secondary rounded-xl mt-6 lg:mt-10 hover:bg-gray-800 transition-colors'>
              Book a consultation
            </button>
          </div>
          <img
            src={annon}
            alt="Digital Marketing"
            className='w-full max-w-[500px] lg:w-[70%] h-auto object-contain'
          />
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="w-full h-auto flex items-center justify-center px-4 md:px-6 mt-12" id='services'>
        <div className="w-full lg:w-[85%] h-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <LearnBox name={'Web Application Development'} />
          <LearnBox name={'E-Commerce Solutions'} />
          <LearnBox name={'AI & Machine Learning Integration'} />
          <LearnBox name={'DevOps & Automation'} />
          <LearnBox name={'Cloud Computing Solutions'} />
          <LearnBox name={'UI/UX Design'} />
        </div>
      </div>

      {/* Pricing Cards */}
      {/* <div className="mt-16 md:mt-20 w-full h-auto px-4 md:px-6" id='plans'>
        <div className='w-full lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          <PriceCard
            planType={'Starter Plan'}
            price={19}
            text1={'Mistake to Avoid'}
            text2={'Your Startup'}
            text3={'Know about font'}
            text4={'Your Startup'}
          />
          <PriceCard
            planType={'Basic Plan'}
            price={29}
            text1={'Mistake to Avoid'}
            text2={'Your Startup'}
            text3={'Know about font'}
            text4={'Your Startup'}
          />
          <PriceCard
            planType={'Premium Plan'}
            price={89}
            text1={'Mistake to Avoid'}
            text2={'Your Startup'}
            text3={'Know about font'}
            text4={'Your Startup'}
          />
          <PriceCard
            planType={'Popular Plan'}
            price={49}
            text1={'Mistake to Avoid'}
            text2={'Your Startup'}
            text3={'Know about font'}
            text4={'Your Startup'}
          />
          <PriceCard
            planType={'Master Plan'}
            price={57}
            text1={'Mistake to Avoid'}
            text2={'Your Startup'}
            text3={'Know about font'}
            text4={'Your Startup'}
          />
          <PriceCard
            planType={'Gold Plan'}
            price={99}
            text1={'Mistake to Avoid'}
            text2={'Your Startup'}
            text3={'Know about font'}
            text4={'Your Startup'}
          />
        </div>
      </div> */}

      <Footer />
    </>
  )
}

export default Service