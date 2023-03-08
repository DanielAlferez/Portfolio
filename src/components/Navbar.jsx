import React from 'react'
import { GoHome, GoBook, GoCode } from "react-icons/go"; 
import { BiMessageAltDetail } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { setSec } from '../features/menu/menuSlice';
import { Link } from 'react-scroll';


export default function Navbar() {
  return (
    <nav className='animate-navUp-box lg:animate-navRight-box text-white gap-x-2 gap-y-2 flex lg:flex-col backdrop-blur-md bg-gray-700/50 rounded-full py-1 px-2 lg:px-1 lg:py-2 m-5'>
      <Link activeClass='bg-gray-900 rounded-full' className='lg:cursor-pointer p-2' spy={true} smooth={true} to='Home'>  
        <GoHome className='w-8 h-8'/>
      </Link>
      <Link activeClass='bg-gray-900 rounded-full' className='lg:cursor-pointer p-2' spy={true} smooth={true} to='Skills' >  
        <GoBook className='w-8 h-8'/>
      </Link>
      <Link activeClass='bg-gray-900 rounded-full' className='lg:cursor-pointer p-2' spy={true} smooth={true} to='Projects'>
        <GoCode className='w-8 h-8'/>
      </Link>
      <button activeClass='bg-gray-900 rounded-full' className='lg:cursor-pointer p-2' spy={true} smooth={true}>
        <BiMessageAltDetail className='w-8 h-8'/>
      </button>
    </nav>
  )
}
