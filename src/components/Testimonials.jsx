import React from 'react'
import testimon1 from "../assets/Testimonials/Ellipse 263.png"
import testimon2 from "../assets/Testimonials/Ellipse 264.png"
import testimon3 from "../assets/Testimonials/Ellipse 265.png"
import testimon4 from "../assets/Testimonials/Ellipse 266.png"
import testimon5 from "../assets/Testimonials/Ellipse 267.png"
import testimon6 from "../assets/Testimonials/Ellipse 268.png"
import testimon7 from "../assets/Testimonials/Ellipse 269.png"
import testimon8 from "../assets/Testimonials/Ellipse 270.png"

const Testimonials = () => {
  return (
    <div className='relative'>

      {/* Center content */}
      <div className='py-10 md:py-20 mt-6 md:mt-11 w-[90%] sm:w-[500px] md:w-[550px] lg:w-[600px] mx-auto text-center'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
          <span className='bg-[#D7EEDD] rounded-full px-4'>What</span> our customer
          says About Us
        </h2>
        <p className='mt-8 md:mt-16 bg-[#D7EEDD] p-6 sm:p-8 md:p-10 lg:p-14 rounded-3xl text-sm sm:text-base'>
          <span>‟</span>Elementum delivered the site with inthe timeline
          as they requested. Inthe end, the client found a 50%
          increase in traffic with in days since its launch. They
          also had an impressive ability to use technologies that
          the company hasn`t used, which have also proved to
          be easy to use and reliable<span>"</span>
        </p>
      </div>

      {/* Yellow lines — md+ only */}
      <div className="hidden md:block absolute top-36 right-[580px] z-10 h-40 w-[250px] overflow-hidden">
        <div className="absolute top-16 left-0 w-full h-1 bg-yellow-400 skew-y-3"></div>
        <div className="absolute top-16 left-0 w-full h-1 bg-yellow-400 -skew-y-2"></div>
        <div className="absolute top-20 left-0 w-full h-1 bg-yellow-400 skew-y-2"></div>
      </div>

      {/* Floating avatars — hidden on mobile, shown md+ */}
      <img src={testimon1} className='hidden md:block absolute bottom-96 left-72 w-20 h-20 lg:w-28 lg:h-28' />
      <img src={testimon2} className='hidden md:block absolute bottom-72 w-12 h-12 left-8 lg:w-16 lg:h-16' />
      <img src={testimon3} className='hidden md:block absolute bottom-40 left-36 lg:left-48 w-28 h-28 lg:w-36 lg:h-36' />
      <img src={testimon4} className='hidden md:block absolute bottom-10 w-16 h-16 left-9 lg:w-20 lg:h-20' />
      <img src={testimon5} className='hidden md:block absolute right-36 lg:right-44 bottom-72 w-20 h-20 lg:w-28 lg:h-28' />
      <img src={testimon6} className='hidden md:block absolute right-32 lg:right-40 bottom-44 w-10 h-10 lg:w-14 lg:h-14' />
      <img src={testimon7} className='hidden md:block absolute right-6 bottom-6 w-28 h-28 lg:w-36 lg:h-36' />
      <img src={testimon8} className='hidden md:block absolute right-16 lg:right-20 bottom-96 w-10 h-10 lg:w-14 lg:h-14' />

    </div>
  )
}

export default Testimonials