import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'

const Project = () => {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Projects'} />
    </>
  )
}

export default Project