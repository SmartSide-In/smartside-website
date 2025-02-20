import React from 'react'
import { Link } from 'react-router-dom'
const CustomErrorPage = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-10 items-center justify-center'>
        <div className='flex items-center font-primary'>
            <h1 className='text-6xl'>4</h1>
            {/* <img src={balloon} alt="Image" className='w-[80px]' />
             */}
            <h1 className='text-6xl'>😟</h1>
            <h1 className='text-6xl'>4</h1>
        </div>
        <div className='font-secondary flex flex-col items-center justify-center gap-7'>
            <h1 className='text-6xl font-bold'>Oops...!</h1>
            <p className='text-xl'>Something went wrong. Please go back to Home page</p>
            <Link to={'/'}>
                <button className='border border-black rounded-full px-4 py-2 text-sm font-secondary hover:bg-primary-btn-color hover:text-white hover:border-white'>Go Home</button>
            </Link>
        </div>
    </div>
  )
}

export default CustomErrorPage