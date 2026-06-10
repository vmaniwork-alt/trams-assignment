import React from 'react'
import ellipse from "../assets/Newsletter/Ellipse 739.svg"
import vector1 from "../assets/Newsletter/Vector 2518.svg"
import vector2 from "../assets/Newsletter/Vector 2519.svg"

const Newsletter = () => {
  return (
    <div className='mt-10 md:mt-16 lg:mt-20 bg-[#D7EEDD] relative'>
      <div className='mx-auto text-center py-10 sm:py-14 md:py-16 lg:py-20 px-6 sm:px-10'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl'>Subscribe to</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl'>our newsletter</h1>
        <p className='mt-4 text-sm sm:text-base'>To make your stay special and even more memorable</p>
        <button className='bg-black text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 mt-4 rounded-full text-sm sm:text-base'>
          Subscribe
        </button>
      </div>

      {/* Decorative — hidden on mobile */}
      <img src={ellipse}
        className='hidden sm:block absolute right-6 sm:right-10 lg:right-20 top-16 sm:top-24 lg:top-32 w-20 sm:w-28 lg:w-40 h-20 sm:h-28 lg:h-40' />
      <img src={vector1}
        className='hidden md:block absolute top-0 left-[40%] lg:left-[580px] w-[80px] lg:w-[130px]' />
      <img src={vector2}
        className='hidden md:block absolute top-0 left-[46%] lg:left-[650px] w-[80px] lg:w-[130px]' />

      <p className='h-0.5 bg-slate-500 mx-auto w-[90%] lg:w-[1280px]'></p>
    </div>
  )
}

export default Newsletter