import React from 'react'
import Hero1 from "../assets/Hero/Hero1.png"
import Hero2 from "../assets/Hero/Hero2.png"
import Hero3 from "../assets/Hero/Hero3.png"
import Hero4 from "../assets/Hero/Hero4.png"
import Hero5 from "../assets/Hero/Hero5.png"
import Hero6 from "../assets/Hero/Hero6.png"
import Hero7 from "../assets/Hero/Hero7.png"
import Hero8 from "../assets/Hero/Hero8.png"
import vector1 from '../assets/Hero/Vector 2510.svg'
import vector2 from '../assets/Hero/Vector 2511.svg'
import Ellipse from '../assets/Hero/Ellipse 736.svg'

const Hero = () => {
  return (
    <section>
      <div
        className='mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-8/12 mt-6 px-4 sm:px-10 md:px-16 lg:px-20 relative text-center z-20'>
        <h1
          className='text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-[Gerbil]'>
          <span className='px-2 sm:px-6 md:px-10 lg:px-14'>The thinkers and </span>
          <span>doers were ch<span className='bg-[#FFC2EA] rounded-full'>anging</span></span>
          <span> the<span className='bg-[#D7EEDD] px-4 rounded-full items-center'>status</span>Quo with</span>
        </h1>
        <div
          className='mx-auto w-full sm:w-5/6 md:w-4/6 lg:w-4/6 mt-6 mb-6'>
          <p className='text-sm sm:text-base md:text-base lg:text-base'>
            We are a team of strategists, designers communicators, researchers. Togeather,
            we belive that progress only hghappens when you refuse to play things safe.
          </p>
        </div>
        <div className="hidden md:block absolute bottom-44 left-80 z-10 h-40 w-[350px] overflow-hidden">
          {/* Top Line */}
          <div className="absolute top-16 left-0 w-full h-1 bg-yellow-400 -skew-y-2"></div>
          {/* Bottom Line */}
          <div className="absolute top-16 left-0 w-full h-1 bg-yellow-400 skew-y-2"></div>
          <div className="absolute top-20 left-0 w-full h-1 bg-yellow-400 -skew-y-2"></div>
        </div>
      </div>

      <div>
        <img src={Ellipse}
          className='hidden lg:block absolute left-[1150px] bottom-96' />
        <img src={vector2}
          className='hidden md:block absolute bottom-32 h-[200px] md:h-[260px] lg:h-[320px] left-6' />
        <img src={vector1}
          className='hidden md:block absolute bottom-32 h-[200px] md:h-[260px] lg:h-[320px]' />
      </div>

      <div className='px-4 sm:px-6 md:px-8 lg:px-10 mt-10 sm:mt-14 md:mt-16 lg:mt-20'>
        {/* Mobile & Tablet: grid layout */}
        <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:hidden p-4 mt-10'>
          <img src={Hero1} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
          <img src={Hero2} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
          <img src={Hero3} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
          <img src={Hero4} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
          <img src={Hero5} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
          <img src={Hero6} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
          <img src={Hero7} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
          <img src={Hero8} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
          <img src={Hero1} className='rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover' alt="" />
        </div>

        {/* Desktop: original absolute layout preserved */}
        <div className='hidden lg:flex relative gap-2 p-10 mt-20'>
          <img src={Hero1}
            className='rounded-full w-36 h-36' alt="" />
          <img src={Hero2}
            className='rounded-full w-36 h-36 absolute bottom-20 left-36' alt="" />
          <img src={Hero3}
            className='rounded-full w-36 h-36 absolute left-96 bottom-32' alt="" />
          <img src={Hero4}
            className='rounded-full w-36 h-36 absolute left-[500px]' alt="" />
          <img src={Hero5}
            className='rounded-full w-36 h-36 absolute left[800px]' alt="" />
          <img src={Hero6}
            className='rounded-full w-36 h-36 absolute left-[700px] bottom-20' alt="" />
          <img src={Hero7}
            className='rounded-full w-36 h-36 absolute left-[800px] top-10' alt="" />
          <img src={Hero8}
            className='rounded-full w-36 h-36 absolute left-[1100px] bottom-20' alt="" />
          <img src={Hero1}
            className='rounded-full w-36 h-36 absolute left-[1230px] top-14' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero