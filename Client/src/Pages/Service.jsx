import React from 'react'
import Navbar from '../Components/Navbar'
import BoxContainer from '../Components/BoxContainer'

const Service = () => {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <Navbar />
      </div>
      <BoxContainer name={'Services'} />

    </>
  )
}

export default Service