import React from 'react';
import workIcon from '../assets/workIcon.png';

const JobBox = ({ type }) => {
    const about = {
        "Relationship Manager": {
            "about": "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.",
            "requiments": [
                "Bachelor's degree in Business, Finance, or a related field",
                "Minimum of 3 years of experience in sales or relationship management in the banking industry",
                "Proven track record of meeting and exceeding sales targets",
                "Excellent interpersonal and negotiation skills",
                "Strong knowledge of banking products and services"
            ]
        },
        "Risk Analyst": {
            "about": "As a Risk Analyst at YourBank, you will be responsible for identifying, analyzing, and mitigating financial risks. Your role will involve assessing market trends, evaluating internal financial data, and ensuring compliance with risk regulations.",
            "requiments": [
                "Bachelor's degree in Finance, Economics, or a related field",
                "Experience in risk assessment and financial analysis",
                "Proficiency in risk management software",
                "Strong analytical and problem-solving skills",
                "Knowledge of regulatory frameworks and compliance standards"
            ]
        }, 
        "IT Security Specialist": {
            "about": "As an IT Security Specialist at YourBank, you will be responsible for securing the bank’s digital infrastructure. You will develop security measures, respond to cyber threats, and ensure compliance with cybersecurity regulations.",
            "requiments": [
                "Bachelor’s degree in Information Technology, Cybersecurity, or a related field",
                "Experience in network security and threat analysis",
                "Proficiency in security tools like SIEM and firewalls",
                "Strong understanding of encryption and authentication methods",
                "Knowledge of cybersecurity regulations and best practices"
            ]
        },
    };

    return (
        <div className='w-full border border-black rounded-2xl'>
            <div className='w-[80%] mx-auto'>
                <h1 className='mt-6 text-xl font-semibold font-project'>{type}</h1>
                <div className='flex items-center gap-3'>
                    <span className='flex'>
                        <p className='mt-2 text-sm font-project font-light py-2 px-4 bg-black text-white rounded-full'>Location: India</p>
                    </span>
                    <span className='flex'>
                        <p className='mt-2 text-sm font-project font-light py-2 px-4 bg-black text-white rounded-full'>
                            Department: {type === "Relationship Manager" ? "Retail Banking" : type === "Risk Analyst" ? "Risk Management" : "Information Technology"}
                        </p>
                    </span>
                </div>
                <div className='w-full mt-8'>
                    <h1 className='mt-6 text-xl font-semibold font-project'>About This Job</h1>
                    <p className='mt-4 text-light text-sm font-project w-[90%]'>
                        {about[type]?.about}
                    </p>
                </div>
                <div className='w-full my-10'>
                    <h1 className='text-xl font-semibold font-project'>Requirements & Qualifications</h1>

                    <div className='mt-5 font-project'>
                        {about[type]?.requiments?.map((item, index) => (
                            <div key={index} className='flex items-center gap-3 mt-4'>
                                <img src={workIcon} alt="Requirement Icon" className='w-5 h-5' />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full mb-10'>
                    <button className='font-project text-white bg-primary-btn-color py-3 px-5 rounded-full'>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobBox;
