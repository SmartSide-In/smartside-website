import React from 'react'
import { HiArrowRight, HiCheck } from "react-icons/hi";

const PriceCard = ({planType, price, text1, text2, text3, text4}) => {
  return (
    <div className='w-full max-w-[450px] h-auto min-h-[550px] md:h-[625px] overflow-hidden rounded-2xl border border-gray-300 mx-auto'>
        {/* Header */}
        <div className='w-full py-8 md:h-[20%] bg-[#F1F5EB] flex items-center justify-center font-header text-xl md:text-2xl font-semibold px-4 text-center'>
            {planType}
        </div>

        {/* Price */}
        <div className='w-[80%] py-6 md:h-[20%] border-b-2 border-gray-200 mx-auto flex items-center justify-center'>
           <h1 className='text-4xl md:text-6xl font-bold'>
             ${price}
             <span className='text-xl md:text-3xl'> /mo</span>
           </h1>  
        </div>

        {/* Features List */}
        <ul className='mt-8 md:mt-15 w-[85%] md:w-[80%] mx-auto text-base md:text-lg space-y-4 md:space-y-5'>
            <li className='flex items-center gap-3 font-header'>
              <HiCheck className='text-primary-btn-color flex-shrink-0'/> 
              <span className='flex-1'>{text1}</span>
            </li>
            <li className='flex items-center gap-3 font-header'>
              <HiCheck className='text-primary-btn-color flex-shrink-0'/> 
              <span className='flex-1'>{text2}</span>
            </li>
            <li className='flex items-center gap-3 font-header'>
              <HiCheck className='text-primary-btn-color flex-shrink-0'/> 
              <span className='flex-1'>{text3}</span>
            </li>
            <li className='flex items-center gap-3 font-header'>
              <HiCheck className='text-primary-btn-color flex-shrink-0'/> 
              <span className='flex-1'>{text4}</span>
            </li>
        </ul>

        {/* Button */}
        <div className='w-[85%] md:w-[80%] mx-auto mt-8 md:mt-10 pb-8 md:pb-0'>
            <button className='w-full md:w-auto flex items-center justify-center md:justify-start gap-3 md:gap-5 border border-primary-btn-color rounded-full px-5 md:px-7 py-3 md:py-4 hover:bg-primary-btn-color hover:text-white transition-colors'>
                Buy Plan 
                <HiArrowRight />
            </button>
        </div>
    </div>
  )
}

export default PriceCard