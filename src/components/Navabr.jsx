import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex justify-between md:justify-around items-center p-4 px-6 relative'>

      {/* Logo */}
      <div className='font-[Gerbil] text-2xl'>
        Formonium
      </div>

      {/* Desktop Nav Links */}
      <ul className='hidden md:flex gap-10'>
        <li className='cursor-pointer hover:opacity-70'>Home</li>
        <li className='cursor-pointer hover:opacity-70'>Tools</li>
        <li className='cursor-pointer hover:opacity-70'>Learn</li>
        <li className='cursor-pointer hover:opacity-70'>Contact</li>
      </ul>

      {/* Hamburger Button — mobile only */}
      <button
        className='text-xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className='absolute top-full left-0 w-52 h-screen bg-white flex flex-col items-center gap-6 py-6 shadow-md md:hidden z-50'>
          <li className='cursor-pointer hover:opacity-70'>Home</li>
          <li className='cursor-pointer hover:opacity-70'>Tools</li>
          <li className='cursor-pointer hover:opacity-70'>Learn</li>
          <li className='cursor-pointer hover:opacity-70'>Contact</li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar;