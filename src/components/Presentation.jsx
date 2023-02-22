import React from 'react'
import Navbar from './Navbar'
import PROFILE from "../assets/Young-Man-PNG-Clipart.png";
import { MdPlace } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Presentation() {
  return (
    <div className='flex flex-col items-center h-full 0 p-8 bg-gradient-to-b backdrop-blur-sm from-gray-900/100 via-gray-900/95 to-black/95'>
        <Navbar/>
        <div className='py-10'>
          <div className='flex items-center'>
              <h1 className='text-white py-2 text-3xl md:text-4xl'>Hi! I Am<br/><p className='text-4xl md:text-5xl font-bold'>{'\u00A0'}{'\u00A0'}{'\u00A0'} Daniel Alferez</p></h1>
          </div>
        </div>
        <div style={{backgroundImage: `url(${PROFILE})`, 
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'center',
                backgroundSize: 'cover'
                }}
                className='p-20 rounded-full h-64 w-72'
            ></div>
        <h1 className='text-white p-2 mt-5 text-3xl font-medium'>Full Stack Developer</h1>
        <div className='text-white flex items-center gap-x-1 '>
          <MdPlace className='w-7 h-7'/>
          <p>Villavicencio, Colombia</p>
        </div>
        <div className='text-white flex items-center gap-3 my-3'>
          <SiGithub className='w-7 h-7 hover:text-gray-700 cursor-pointer'/>
          <SiLinkedin className='w-7 h-7 hover:text-blue-500 cursor-pointer'/>
        </div>
        <div className='text-white max-w-2xl text-lg'>
          <h1 className='font-semibold text-2xl text-center mt-10 mb-5'>ABOUT ME</h1>
          {/* <p>I am so passionate person who love learning, I never stop doing it. Knowledge is very important to me. I have a lot of empathy and patience, i like to analyze the world and all aspects of life</p> */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit voluptatum aliquid iusto quasi provident alias itaque ea! Maiores sed mollitia, natus nesciunt vero, sunt praesentium reprehenderit consequuntur facilis alias quos? Mollitia odit dignissimos ad est sequi accusantium quia aut. Officia id, voluptates eaque architecto alias quibusdam nobis officiis deleniti.</p>
        </div>
        <div className='text-white max-w-2xl text-center'>
          <h1 className='font-semibold text-2xl mt-10 mb-5'>LANGUAGES</h1>
          <p className='font-medium text-xl'>Spanish - Native</p>
          <p className='font-medium text-xl'>English - B2</p>
        </div>
    </div>
  )
}
