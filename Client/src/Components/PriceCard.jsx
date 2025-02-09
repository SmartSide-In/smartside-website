import React from 'react'
import { HiArrowRight, HiCheck } from "react-icons/hi";
const PriceCard = ({planType, price, text1, text2, text3, text4}) => {
  return (
    <div className='w-[450px] h-[625px] rounded-2xl border border-gray-300'>
        <div className='w-full h-[20%] bg-[#F1F5EB] flex items-center justify-center font-header text-2xl font-semibold'>
            {planType}
        </div>
        <div className='w-[80%] h-[20%] border-b-2 border-gray-200 mx-auto flex items-center justify-center'>
           <h1 className='text-6xl font-bold'>${price}<span className='text-3xl'> /mo</span></h1>  
        </div>
        <ul className='mt-15 w-[80%] mx-auto text-lg'>
            <li className='flex items-center gap-3 mt-5 font-header'><HiCheck className='text-primary-btn-color'/> {text1}</li>
            <li className='flex items-center gap-3 mt-5 font-header'><HiCheck className='text-primary-btn-color'/> {text2}</li>
            <li className='flex items-center gap-3 mt-5 font-header'><HiCheck className='text-primary-btn-color'/> {text3}</li>
            <li className='flex items-center gap-3 mt-5 font-header'><HiCheck className='text-primary-btn-color'/> {text4}</li>
        </ul>
        <div className='w-[80%] mx-auto mt-10'>
            <button className='flex items-center gap-5 border border-primary-btn-color rounded-full px-7 py-4 hover:bg-primary-btn-color hover:text-white'>
                Buy Plan 
                <HiArrowRight />
            </button>
        </div>
    </div>
  )
}

export default PriceCard