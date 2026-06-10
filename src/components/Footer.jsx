import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#D7EEDD] flex flex-wrap justify-center sm:justify-around pt-8 gap-8 sm:gap-6 px-6 sm:px-10 pb-8'>

        <div className='w-[45%] sm:w-auto'>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>Company</h2>
          <p>Home</p>
          <p>Studio</p>
          <p>Service</p>
          <p>Blog</p>
        </div>

        <div className='w-[45%] sm:w-auto'>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>Terms & Policies</h2>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Explore</p>
          <p>Accesibility</p>
        </div>

        <div className='w-[45%] sm:w-auto'>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>Follows</h2>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Linkedin</p>
        </div>

        <div className='w-[45%] sm:w-auto'>
          <h2 className='text-lg sm:text-xl font-semibold mb-2'>Contact</h2>
          <p className='max-w-[180px]'>1498w Fluton ste, STE2D Chicgo, IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>

      </div>

      <div className='text-center py-4 sm:py-6 bg-[#D7EEDD] text-sm sm:text-base'>
        ©2026 Elementum. All rights reserved
      </div>
    </div>
  )
}

export default Footer