import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'
import Footer from '../Components/Footer'
import competative from '../assets/competative.png'
import GotoTop from '../Components/GotoTop'
import JobBox from '../Components/JobBox'
import { Helmet } from "react-helmet";

const CareersSEO = () => {
  const jobListings = [
    {
      "@type": "JobPosting",
      "title": "Relationship Manager",
      "employmentType": "FULL_TIME",
      "description": "Join our team as a Relationship Manager and help shape customer success.",
      "datePosted": new Date().toISOString(),
      "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString(),
      "hiringOrganization": {
        "@type": "Organization",
        "name": "SmartSide",
        "sameAs": "[Your-Website-URL]"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@type": "JobPosting",
      "title": "Risk Analyst",
      "employmentType": "FULL_TIME",
      "description": "Join our team as a Risk Analyst to help assess and manage business risks.",
      "datePosted": new Date().toISOString(),
      "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString(),
      "hiringOrganization": {
        "@type": "Organization",
        "name": "SmartSide",
        "sameAs": "[Your-Website-URL]"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@type": "JobPosting",
      "title": "IT Security Specialist",
      "employmentType": "FULL_TIME",
      "description": "Join our team as an IT Security Specialist to protect and enhance our digital infrastructure.",
      "datePosted": new Date().toISOString(),
      "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString(),
      "hiringOrganization": {
        "@type": "Organization",
        "name": "SmartSide",
        "sameAs": "[Your-Website-URL]"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      }
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at SmartSide - Join Our Team",
    "description": "Explore exciting career opportunities at SmartSide. We offer competitive compensation, health benefits, professional development, and work-life balance.",
    "mainEntity": jobListings
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Careers at SmartSide | Join Our Innovative Tech Team</title>
      <meta 
        name="title" 
        content="Careers at SmartSide | Join Our Innovative Tech Team" 
      />
      <meta 
        name="description" 
        content="Join SmartSide's dynamic team. We offer competitive compensation, health benefits, professional development, and great work-life balance. Explore current openings in tech, development, and analytics."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta 
        property="og:title" 
        content="Build Your Career at SmartSide | Tech Jobs & Opportunities" 
      />
      <meta 
        property="og:description" 
        content="Looking for an exciting career in tech? Join SmartSide and work with cutting-edge technologies. Competitive benefits, professional growth, and work-life balance await."
      />
      <meta property="og:image" content="[Your-Website-URL]/assets/competative.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta 
        property="twitter:title" 
        content="Join SmartSide | Innovation Meets Opportunity" 
      />
      <meta 
        property="twitter:description" 
        content="Launch your career at SmartSide. We're hiring for various roles including Relationship Manager, Risk Analyst, and IT Security Specialist. Great benefits and growth opportunities!"
      />
      <meta property="twitter:image" content="[Your-Website-URL]/assets/competative.png" />

      {/* Additional SEO Meta Tags */}
      <meta 
        name="keywords" 
        content="tech jobs, IT careers, software development jobs, relationship manager, risk analyst, IT security specialist, tech company careers, work benefits, professional development, work-life balance"
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
const Career = () => {
  return (
    <>
    <CareersSEO />
      <GotoTop />
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Career'} />

      {/* Values Section */}
      <div className='w-full mt-10 md:mt-20 px-4'>
        <div className='w-full md:w-[90%] lg:w-[80%] mx-auto'>
          <h1 className='text-3xl md:text-4xl font-normal font-project'>Our <span className='text-primary-btn-color'>Values</span></h1>
          <p className='mt-3 md:mt-5 font-project font-light w-full md:w-[90%] text-base md:text-lg'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
        </div>

        {/* Values Grid */}
        <div className='w-full md:w-[90%] lg:w-[80%] mx-auto mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-25 font-project px-4 md:px-0'>
          {/* Value Cards */}
          {[
            { title: 'Integrity', text: 'At Smart Side, integrity is at the core of everything we do. We believe in building trust through honesty, accountability, and ethical decision-making. Our team upholds the highest standards of professionalism, ensuring that every project is handled with fairness, transparency, and respect.' },
            { title: 'Customer Centricity', text: 'From personalized consultations to continuous support, we focus on building strong, long-term relationships with our clients. By listening, adapting, and innovating, we create solutions that not only meet but exceed expectations, helping your business grow and thrive.' },
            { title: 'Collaboration', text: 'By working closely with clients and partners, we build solutions that are not only impactful but also scalable. Through teamwork and shared vision, we turn challenges into opportunities, delivering results that drive business growth and long-term success.' },
            { title: 'Innovation', text: 'We foster a culture of continuous learning and experimentation, encouraging our team to push boundaries and develop groundbreaking solutions. By integrating emerging technologies with strategic insights, we help businesses evolve, scale, and stay competitive in a rapidly changing digital world.' },
            { title: 'Adaptability', text: 'Our team stays ahead by continuously learning, experimenting, and refining our approach. Whether it’s adopting new technologies, optimizing workflows, or responding to market shifts, we remain flexible and resilient—helping businesses stay competitive and future-ready.' },
            { title: 'Excellence', text: 'Our team continuously refines processes, leverages industry best practices, and embraces innovation to achieve outstanding results. By prioritizing quality, attention to detail, and customer satisfaction, we empower businesses with solutions that drive success and long-term growth.' },
            { title: 'Trust & Accountability', text: 'By fostering open communication and taking responsibility for every project, we create strong, long-term partnerships with our clients. Whether it’s delivering a project, solving challenges, or providing ongoing support, you can count on us to be dependable, proactive, and results-driven.' },
            { title: 'Sustainability', text: 'We integrate sustainability into our operations by reducing waste, promoting energy-efficient solutions, and supporting businesses in their journey toward greener practices. By prioritizing long-term responsibility over short-term gains, we strive to build a future where innovation and sustainability go hand in hand.' }
          ].map((value, index) => (
            <div key={index} className='border-l-2 border-primary-btn-color flex flex-col gap-3 md:gap-5 pl-5'>
              <h1 className='font-medium text-2xl md:text-3xl text-[#4C4C4D]'>
                {value.title}
              </h1>
              <p className='w-full md:w-[80%] font-light text-base md:text-lg'>{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      {/* Benefits Section */}
      <div className='w-full mt-20 md:mt-30 px-4'>
        {/* Header */}
        <div className='w-full md:w-[90%] lg:w-[80%] mx-auto'>
          <h1 className='text-3xl md:text-4xl font-normal font-project'>
            Our <span className='text-primary-btn-color'>Benefits</span>
          </h1>
          <p className='mt-3 md:mt-5 font-project font-light w-full md:w-[90%] text-base md:text-lg'>
            At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
          </p>
        </div>

        {/* Benefits Cards Container */}
        <div className='mt-10 md:mt-15 w-full md:w-[80%] lg:w-[60%] h-auto mx-auto px-4 md:px-0'>
          {/* Top Row */}
          <div className='w-full flex flex-col md:flex-row justify-between gap-8 md:gap-4'>
            {/* First Card */}
            <div className="w-full md:w-[49.5%] flex flex-col px-6 md:px-10 py-5 md:py-7 relative overflow-hidden rounded-2xl md:rounded-tl-4xl md:rounded-bl-lg border border-gray-300 hover:shadow-lg transition-shadow">
              {/* Top Border Gradient */}
              {/* <div className="hidden md:block absolute top-0 left-0 w-[60%] h-[2px] bg-gradient-to-r from-gray-300 to-gray-300"></div> */}
              {/* Top-Left Corner */}
              {/* <div className="hidden md:block absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gray-300 rounded-tl-4xl bg-white"></div> */}
              {/* Bottom Border */}
              {/* <div className="hidden md:block absolute bottom-0 left-0 w-[20%] h-[2px] bg-gradient-to-r from-gray-300 to-gray-300"></div> */}

              <div className="flex w-full gap-3 md:gap-5 items-center">
                <img src={competative} alt="img" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h1 className="font-project font-normal text-xl md:text-2xl">Competitive Compensation</h1>
              </div>
              <div className="w-full md:w-[90%]">
                <p className="font-project font-light mt-3 md:mt-5 text-base md:text-lg">
                  We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className='hidden md:block w-[1px] border-r border-dashed border-gray-400'></div>

            {/* Second Card */}
            <div className="w-full md:w-[49.5%] flex flex-col px-6 md:px-10 py-5 md:py-7 relative overflow-hidden rounded-2xl md:rounded-tr-4xl md:rounded-br-lg border border-gray-300 hover:shadow-lg transition-shadow">
              {/* Top Border Gradient */}
              {/* <div className="hidden md:block absolute top-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-gray-300 to-gray-300"></div>
              {/* Top-Right Corner */}
              {/* <div className="hidden md:block absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gray-300 rounded-tr-4xl bg-white"></div> */}
              {/* Bottom Border */}
              {/* <div className="hidden md:block absolute bottom-0 right-0 w-[20%] h-[2px] bg-gradient-to-l from-gray-300 to-gray-300"></div> */} 

              <div className="flex w-full gap-3 md:gap-5 items-center">
                <img src={competative} alt="img" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h1 className="font-project font-normal text-xl md:text-2xl">Health & Wellness</h1>
              </div>
              <div className="w-full md:w-[90%]">
                <p className="font-project font-light mt-3 md:mt-5 text-base md:text-lg">
                  Your health matters to us. We offer comprehensive health insurance, wellness programs, and work-life balance initiatives to ensure your well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className='hidden md:block w-full border-t border-dashed border-gray-400 my-5'></div>

          {/* Bottom Row */}
          <div className='w-full flex flex-col md:flex-row justify-between gap-8 md:gap-4 mt-5'>
            {/* Third Card */}
            <div className="w-full md:w-[49.5%] flex flex-col px-6 md:px-10 py-5 md:py-7 relative overflow-hidden rounded-2xl md:rounded-bl-4xl md:rounded-tl-lg border border-gray-300 hover:shadow-lg transition-shadow">
              {/* Bottom Border Gradient */}
              {/* <div className="hidden md:block absolute bottom-0 left-0 w-[60%] h-[2px] bg-gradient-to-r from-gray-300 to-gray-300"></div> */}
              {/* Bottom-Left Corner */}
              {/* <div className="hidden md:block absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gray-300 rounded-bl-4xl bg-white"></div> */}
              {/* Top Border */}
              {/* <div className="hidden md:block absolute top-0 left-0 w-[20%] h-[2px] bg-gradient-to-r from-gray-300 to-gray-300"></div> */}

              <div className="flex w-full gap-3 md:gap-5 items-center">
                <img src={competative} alt="img" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h1 className="font-project font-normal text-xl md:text-2xl">Professional Development</h1>
              </div>
              <div className="w-full md:w-[90%]">
                <p className="font-project font-light mt-3 md:mt-5 text-base md:text-lg">
                  Grow with us through continuous learning opportunities, mentorship programs, and career advancement pathways designed for your success.
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className='hidden md:block w-[1px] border-r border-dashed border-gray-400'></div>

            {/* Fourth Card */}
            <div className="w-full md:w-[49.5%] flex flex-col px-6 md:px-10 py-5 md:py-7 relative overflow-hidden rounded-2xl md:rounded-br-4xl md:rounded-tr-lg border border-gray-300  hover:shadow-lg transition-shadow">
              {/* Bottom Border Gradient */}
              {/* <div className="hidden md:block absolute bottom-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-gray-300 to-gray-300"></div> */}
              {/* Bottom-Right Corner */}
              {/* <div className="hidden md:block absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gray-300 rounded-br-4xl bg-white"></div> */}
              {/* Top Border */}
              {/* <div className="hidden md:block absolute top-0 right-0 w-[20%] h-[2px] bg-gradient-to-l from-gray-300 to-gray-300"></div> */}

              <div className="flex w-full gap-3 md:gap-5 items-center">
                <img src={competative} alt="img" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h1 className="font-project font-normal text-xl md:text-2xl">Work-Life Balance</h1>
              </div>
              <div className="w-full md:w-[90%]">
                <p className="font-project font-light mt-3 md:mt-5 text-base md:text-lg">
                  Enjoy flexible working hours, remote work options, and generous paid time off to help you maintain a healthy work-life balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className='mt-20 md:mt-30 w-full md:w-[90%] lg:w-[80%] mx-auto px-4 md:px-6'>
        <div className='w-full lg:w-[80%] mx-auto'>
          <h1 className='text-3xl md:text-4xl font-normal font-project text-primary-btn-color'>Job Openings</h1>
          <p className='mt-3 md:mt-5 font-project font-light w-full md:w-[90%] text-base md:text-lg'>Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry</p>
          <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
            <JobBox type={'Relationship Manager'} />
            <JobBox type={'Risk Analyst'} />
            <JobBox type={'IT Security Specialist'} />
          </div>
        </div>
      </div>

      <div className='w-full mt-16 md:mt-20'>
        <Footer />
      </div>
    </>
  )
}

export default Career