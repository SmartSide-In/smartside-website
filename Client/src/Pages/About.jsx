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
import { Helmet } from "react-helmet";

const AboutSEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SmartSide",
    "url": "[Your-Website-URL]",
    "logo": "[Your-Website-URL]/logo.png",
    "description": "SmartSide provides expert web development, AI solutions, and cloud services with 25 years of industry experience.",
    "foundingDate": "1999",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9361327770",
      "contactType": "customer service"
    },
    "sameAs": [
      "[Your-LinkedIn-URL]",
      "[Your-Facebook-URL]",
      "[Your-Twitter-URL]"
    ],
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "AI Solutions",
      "Cloud Services",
      "Application Maintenance",
      "DevOps Services"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>About SmartSide | Expert Web Development, AI & Cloud Solutions</title>
      <meta name="title" content="About SmartSide | Expert Web Development, AI & Cloud Solutions" />
      <meta
        name="description"
        content="Discover SmartSide's 25 years of excellence in web development, AI solutions, and cloud services. Our expert team delivers high-performance, SEO-optimized websites and innovative tech solutions for business growth."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content="About SmartSide | Leading Tech Solutions Provider" />
      <meta
        property="og:description"
        content="Transform your business with SmartSide's expert web development, AI automation, and cloud solutions. 25+ years of experience, 100+ clients served, and award-winning services."
      />
      <meta property="og:image" content="[Your-Website-URL]/assets/aboutbox.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content="About SmartSide | Expert Tech Solutions" />
      <meta
        property="twitter:description"
        content="Partner with SmartSide for cutting-edge web development, AI solutions, and cloud services. Trusted by 100+ clients with 10k+ completed projects."
      />
      <meta property="twitter:image" content="[Your-Website-URL]/assets/aboutbox.png" />

      {/* Additional SEO Meta Tags */}
      <meta
        name="keywords"
        content="web development, AI solutions, cloud computing, IT services, digital transformation, SEO optimization, application maintenance, DevOps, tech solutions"
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
const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, team: 0, awards: 0, clients: 0 });
  const buttons = [
    "End-to-End Web Development",
    "AI & Cloud Solutions",
    "Student Services",

  ];

  const contentData = {
    "End-to-End Web Development": {
      heading: "Building High-Performance Websites for Growth",
      content: "We specialize in developing SEO-optimized, user-friendly, and high-performing websites that enhance engagement and drive business success. Our end-to-end web development services cover everything from planning to deployment, ensuring a seamless and efficient process. With modern technologies and industry best practices, we craft websites that are visually appealing, responsive, and tailored to your specific needs.",
      sideHeading1: "Why Choose Us?",
      sideContent1: "Our team focuses on delivering fast, SEO-friendly, and scalable websites. From intuitive UI/UX designs to advanced functionalities, we ensure your website meets industry standards and user expectations.",
      sideItems1: [
        { title: "SEO Optimization:", "content": "We implement best SEO practices, including clean code and fast loading speeds, to help your website rank higher in search engines." },
        { title: "User-Centric Design:", "content": "Our designs ensure a seamless user experience across all devices, enhancing engagement and conversions." },
        { title: "Scalability & Performance:", "content": "We build websites that are scalable, secure, and optimized for high performance to support your business growth." }
      ],
      sideHeading2: "Our Development Process",
      sideContent2: "We follow a structured and efficient process to ensure your website meets high-quality standards while being delivered on time.",
      sideItems2: [
        { title: "Planning & Strategy:", content: "We analyze your business requirements, research industry trends, and create a roadmap for development." },
        { title: "Design & Development:", content: "Our team crafts visually appealing UI/UX designs and develops feature-rich, high-performing websites." },
        { title: "Testing & Deployment:", content: "Before launch, we conduct rigorous testing to ensure the website functions seamlessly, is secure, and performs optimally." }
      ]
    },
    "AI & Cloud Solutions": {
      heading: "Empowering Businesses with AI & Cloud Transformation",
      content: "We provide cutting-edge AI automation and cloud transformation solutions to help businesses enhance efficiency, security, and scalability. Our expertise in AI-driven analytics, process automation, and cloud computing ensures seamless digital transformation, enabling organizations to stay competitive in the evolving tech landscape.",
      sideHeading1: "Why Choose AI & Cloud?",
      sideContent1: "Leveraging AI and cloud technology allows businesses to optimize operations, improve decision-making, and enhance security while reducing costs. Our solutions are tailored to streamline workflows and ensure seamless scalability.",
      sideItems1: [
        { title: "AI-Powered Automation:", content: "Automate repetitive tasks, improve operational efficiency, and make data-driven decisions with AI-driven solutions." },
        { title: "Secure Cloud Infrastructure:", content: "Migrate to a scalable, secure, and high-performance cloud environment to ensure business continuity and flexibility." },
        { title: "Cost-Effective Scaling:", content: "Reduce infrastructure costs and scale operations seamlessly with AI-driven cloud strategies." }
      ],
      sideHeading2: "Our Approach",
      sideContent2: "We follow a structured approach to implementing AI and cloud solutions, ensuring smooth integration and maximum business impact.",
      sideItems2: [
        { title: "AI Strategy & Consulting:", content: "We assess business needs and identify AI-driven solutions that optimize workflows and drive efficiency." },
        { title: "Cloud Migration & Deployment:", content: "Seamlessly migrate and deploy cloud-based infrastructure to enhance agility, security, and performance." },
        { title: "Continuous Monitoring & Optimization:", content: "We provide ongoing support, ensuring AI models and cloud systems operate efficiently and securely." }
      ]
    },

    "Application Maintenance & DevOps": {
      heading: "Ensuring Seamless Application Performance with Maintenance & DevOps",
      content: "We offer 24/7 support, continuous updates, and performance optimization to ensure your applications remain secure, efficient, and up-to-date. Our DevOps-driven approach enhances agility, accelerates deployment cycles, and minimizes downtime, allowing businesses to focus on growth while we handle maintenance and improvements.",
      sideHeading1: "Why Choose Our Maintenance & DevOps Services?",
      sideContent1: "Our expert team ensures that your applications remain reliable, high-performing, and secure by implementing the latest technologies and best practices.",
      sideItems1: [
        { title: "24/7 Monitoring & Support:", content: "We provide real-time monitoring and proactive support to detect and resolve issues before they impact your business." },
        { title: "Regular Updates & Security Patches:", content: "We keep your applications up to date with the latest security patches, bug fixes, and feature enhancements." },
        { title: "Performance Optimization:", content: "Our team continuously analyzes and fine-tunes application performance for faster load times and improved user experience." }
      ],
      sideHeading2: "Our DevOps Approach",
      sideContent2: "We integrate DevOps best practices to streamline development, deployment, and maintenance, ensuring smooth and efficient application management.",
      sideItems2: [
        { title: "CI/CD Automation:", content: "We implement Continuous Integration and Continuous Deployment (CI/CD) pipelines to speed up software releases and maintain code quality." },
        { title: "Infrastructure as Code (IaC):", content: "Automated infrastructure provisioning ensures consistency, scalability, and faster deployments." },
        { title: "Cloud & Containerization:", content: "We leverage cloud platforms and containerization technologies like Docker and Kubernetes to enhance flexibility and reliability." }
      ]
    }


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

  const [selectedButton, setSelectedButton] = useState("End-to-End Web Development");

  const StatBox = ({ value, suffix, label }) => (
    <div className="flex flex-col items-center">
      <motion.h1 className="text-4xl lg:text-6xl mt-3 font-bold text-white" transition={{ duration: 0.5 }}>
        {value}
        <span>{suffix}</span>
      </motion.h1>
      <p className="mt-5 text-sm lg:text-xl">{label}</p>
    </div>
  );
  return (
    <>
      <AboutSEO />
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
                <h2 className="mt-5 text-2xl lg:text-3xl font-bold">Who Choose SmartSide?</h2>
                <p className="mt-5 text-gray-400 leading-[25px] lg:leading-[35px]">With a team of experts dedicated to innovation, scalability, and performance, we transform your ideas into highly functional, future-ready solutions. Whether you need a robust website, AI-powered automation, or seamless application support, we make it happen!
                </p>
                <Link to={'/contact'}>
                  <button className="flex items-center gap-4 border mt-5 w-full lg:w-[30%] border-gray-300 rounded-full px-4 py-4 text-sm font-semibold">
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
                  <p className="text-gray-400 mx-12">Smart Side offers result-driven marketing services to boost brand visibility, engagement, and conversions. From SEO to social media strategies, we help businesses grow effectively.</p>
                </div>
              </div>
              <div className="mt-5 font-header">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-7">
                    <FaCircleCheck size={20} />
                    <h2 className="text-lg lg:text-xl font-semibold">IT Maintenance</h2>
                  </div>
                  <p className="text-gray-400 mx-12">Smart Side provides reliable IT maintenance services, ensuring seamless operations with 24/7 support, security updates, and system optimizations to keep your business running efficiently.</p>
                </div>
                <div className="mt-5 h-[80px] flex items-center">
                  <button className="flex bg-primary-btn-color py-4 lg:py-6 px-6 lg:px-8 rounded-full text-sm items-center gap-3 text-white">
                    Read more
                    <HiArrowRight />
                  </button>

                  <div className="w-[50px] lg:w-[70px] ml-8 h-[50px] lg:h-[70px] bg-primary-btn-color rounded-full"></div>
                  <div className="font-header ml-4">
                    <p className="text-gray-500">Need help ?</p>
                    <h2 className="font-semibold">+91 9361327770</h2>
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