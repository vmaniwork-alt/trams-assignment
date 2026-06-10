import React from 'react'
import about1 from "../assets/About/about1.png"
import polygon from '../assets/About/polygon.svg'
import about2 from "../assets/About/about2.png"
import polygon1 from '../assets/About/polygon1.svg'
import vector1 from "../assets/About/vector1.svg"

const About = () => {
  return (
    <div className='font-[Gerbil] mt-10 md:mt-16 lg:mt-20'>

      {/* Section 1 */}
      <div className='flex flex-col md:flex-row justify-center md:justify-around
       items-center gap-10 md:gap-6 px-6 md:px-10'>

        {/* Text Block */}
        <div className='w-full sm:w-[480px] lg:w-[550px] relative'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-2'>
            Tomorrow should be better than
            <span className='bg-[#D7EEDD] rounded-full px-4'>today</span>
          </h2>
          <p className='text-sm sm:text-base'>
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse
            to play things safe.
          </p>
          <p className='mt-4 text-sm sm:text-base'>Read more ——————＞</p>

          {/* Yellow lines — hidden on mobile to avoid overflow */}
          <div className="hidden sm:block absolute top-12 left-0 w-60 h-1 bg-yellow-400 -skew-y-2"></div>
          <div className="hidden sm:block absolute top-12 left-0 w-60 h-1 bg-yellow-400 skew-y-2"></div>
          <div className="hidden sm:block absolute top-14 left-28 w-32 h-1 bg-yellow-400 -skew-y-6"></div>
          <img />
        </div>

        {/* Image Block */}
        <div className="relative inline-block mt-6 md:mt-0">
          <img
            src={polygon}
            alt=""
            className="absolute -top-6 -right-8 md:-right-16 w-32 md:w-44 lg:w-56 rotate-0 z-0"
          />
          <img
            src={about1}
            alt=""
            className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Vector decoration — hidden on mobile */}
      <img
        src={vector1}
        className='hidden md:block w-[700px] lg:w-[1100px] absolute right-0 top-[1120px]'
      />

      {/* Section 2 */}
      <div className='flex flex-col-reverse md:flex-row justify-center md:justify-around items-center gap-10 md:gap-6 px-6 md:px-10 mt-16 md:mt-20'>

        {/* Image Block */}
        <div className="relative inline-block mt-6 md:mt-0">
          <img
            src={polygon1}
            alt=""
            className="absolute -top-6 -left-4 md:-left-8 w-32 md:w-44 lg:w-56 rotate-0 z-0"
          />
          <img
            src={about2}
            alt=""
            className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 
            rounded-full object-cover"
          />
          <img
            src={polygon1}
            alt=""
            className="relative w-24 md:w-36 lg:w-44 left-[160px] md:left-[200px] lg:left-[250px] bottom-20 
            md:bottom-28 lg:bottom-32 z-10"
          />
        </div>

        {/* Text Block */}
        <div className='w-full sm:w-[360px] lg:w-[400px] relative'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-2'>
            <span className='bg-[#D7EEDD] rounded-full px-4'>See</span>
            how we can help you progress
          </h2>
          <p className='text-sm sm:text-base'>
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <p className='mt-4 text-sm sm:text-base'>Read more ——————＞</p>

          {/* Yellow lines — hidden on mobile */}
          <div className="hidden sm:block absolute top-28 left-44 w-56 h-1 bg-yellow-400 -skew-y-2"></div>
          <div className="hidden sm:block absolute top-28 left-44 w-56 h-1 bg-yellow-400 skew-y-2"></div>
        </div>

      </div>
    </div>
  )
}

export default About