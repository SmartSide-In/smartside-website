import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ReviewBox = () => {
    return (
        <div className='w-full mx-auto shadow-lg rounded-lg p-4 md:p-6 lg:p-10 font-secondary'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4'>

                {/* Companies worked with */}
                <div className='w-full md:w-1/5 flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl lg:text-6xl font-bold font-number'>35+</h1>
                    <p className='text-sm lg:text-base text-gray-400 text-center'>Companies worked with</p>
                </div>

                {/* Clutch Rating */}
                <div className='w-full md:w-1/5 flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl lg:text-6xl font-bold font-number'>4.9</h1>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-1 text-red-600'>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={20} fill="currentColor" />
                            ))}
                        </div>
                        <p className='text-lg lg:text-2xl'>Clutch</p>
                    </div>
                </div>

                {/* Trustpilot Rating */}
                <div className='w-full md:w-1/5 flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl lg:text-6xl font-bold font-number'>4.6</h1>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-1 text-red-600'>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={20} fill="currentColor" />
                            ))}
                        </div>
                        <p className='text-lg lg:text-2xl'>Trustpilot</p>
                    </div>
                </div>

                {/* Google Rating */}
                <div className='w-full md:w-1/5 flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl lg:text-6xl font-bold font-number'>5.0</h1>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-1 text-red-600'>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={20} fill="currentColor" />
                            ))}
                        </div>
                        <p className='text-lg lg:text-2xl'>Google</p>
                    </div>
                </div>

                {/* Completed projects */}
                <div className='w-full md:w-1/5 flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-4xl lg:text-6xl font-bold font-number'>5+</h1>
                    <p className='text-sm lg:text-base text-gray-400 text-center'>Completed projects</p>
                </div>

            </div>
        </div>
    );
};

export default ReviewBox;