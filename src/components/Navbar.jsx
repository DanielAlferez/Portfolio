import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GoHome, GoBook, GoCode } from "react-icons/go"; 
import { BiMessageAltDetail } from "react-icons/bi";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  
  const handleSetActive = (to) => {
    setActiveLink(to);
  }

  return (
    <nav className='animate-navUp-box lg:animate-navRight-box text-white gap-x-2 gap-y-2 flex lg:flex-col backdrop-blur-md bg-gray-700/50 rounded-full py-1 px-2 lg:px-1 lg:py-2 m-5'>
      <Link className={`lg:cursor-pointer p-2 ${activeLink === 'Home' ? 'bg-gray-900 rounded-full' : ''}`} spy={true} smooth={true} to='Home' onSetActive={handleSetActive}>  
        <GoHome className='w-8 h-8'/>
      </Link>
      <Link className={`lg:cursor-pointer p-2 ${activeLink === 'Skills' ? 'bg-gray-900 rounded-full' : ''}`} spy={true} smooth={true} to='Skills' onSetActive={handleSetActive}>  
        <GoBook className='w-8 h-8'/>
      </Link>
      <Link className={`lg:cursor-pointer p-2 ${activeLink === 'Projects' ? 'bg-gray-900 rounded-full' : ''}`} spy={true} smooth={true} to='Projects' onSetActive={handleSetActive}>
        <GoCode className='w-8 h-8'/>
      </Link>
      <button className='lg:cursor-pointer p-2' spy="true" smooth="true">
        <BiMessageAltDetail className='w-8 h-8'/>
      </button>
    </nav>
  )
}
