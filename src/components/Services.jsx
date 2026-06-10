import React from 'react'
import Vector from '../assets/Services/Vector.svg'

const Services = () => {
  return (
    <div>
      <div className='p-6 sm:p-10 md:p-14 lg:p-[88px] relative mt-10 md:mt-16 lg:mt-20'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl w-full lg:w-[650px] px-2 sm:px-6 md:px-8 lg:px-10 font-[Gerbil]'>
            What we <span className='bg-[#D7EEDD] px-4 rounded-full items-center relative'>can</span> offer you!
            <div className="hidden md:block absolute bottom-0 left-32 z-10 h-40 w-[210px] overflow-hidden">
              <div className="absolute top-16 left-0 w-full h-1 bg-yellow-400 skew-y-3"></div>
              <div className="absolute top-16 left-0 w-full h-1 bg-yellow-400 -skew-y-6"></div>
              <div className="absolute top-20 left-0 w-full h-1 bg-yellow-400 skew-y-2"></div>
            </div>
          </h1>
          <h2></h2>
        </div>

        <img src={Vector}
          className='hidden md:block w-[400px] lg:w-[650px] absolute bottom-32 right-0' />
      </div>

      {/* Service Rows */}
      <div>

        {/* Divider */}
        <p className='h-0.5 bg-slate-500 mx-auto w-[90%] lg:w-[1280px]'></p>

        {/* Row 1 */}
        <div className='flex flex-col sm:flex-row justify-around p-6 sm:p-8 md:p-10 lg:p-12 items-start sm:items-center gap-4 sm:gap-6'>
          <p className='w-full sm:w-44 text-sm sm:text-base'>Office of multiple interest content</p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Colaborative & partnership</h2>
          <p className='text-sm sm:text-base'>Read more ——————＞</p>
        </div>

        <p className='h-0.5 bg-slate-500 mx-auto w-[90%] lg:w-[1280px]'></p>

        {/* Row 2 */}
        <div className='flex flex-col sm:flex-row justify-around p-6 sm:p-8 md:p-10 lg:p-12 items-start sm:items-center gap-4 sm:gap-6'>
          <p className='w-full sm:w-44 text-sm sm:text-base'>The hanger US Air force digital experimental</p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>We talk about our weight</h2>
          <p className='text-sm sm:text-base'>Read more ——————＞</p>
        </div>

        <p className='h-0.5 bg-slate-500 mx-auto w-[90%] lg:w-[1280px]'></p>

        {/* Row 3 */}
        <div className='flex flex-col sm:flex-row justify-around p-6 sm:p-8 md:p-10 lg:p-12 items-start sm:items-center gap-4 sm:gap-6'>
          <p className='w-full sm:w-44 text-sm sm:text-base'>Delta faucet content, social, digital</p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Piloting digital confidence</h2>
          <p className='text-sm sm:text-base'>Read more ——————＞</p>
        </div>

        <p className='h-0.5 bg-slate-500 mx-auto w-[90%] lg:w-[1280px]'></p>

      </div>

      <p className='h-0.5 bg-slate-500 mx-auto w-[90%] lg:w-[1280px]'></p>
    </div>
  )
}

export default Services