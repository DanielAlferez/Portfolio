import React from 'react'
import Navbar from './Navbar'
import PROFILE from "../assets/Young-Man-PNG-Clipart.png";
import { MdPlace } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { motion } from 'framer-motion';
import { variants } from '../animations/variants';

export default function Presentation() {
  return (
    <div className='flex flex-col items-center h-screen justify-center bg-gradient-to-b backdrop-blur-sm from-gray-900/100 via-gray-900/95 to-black/95'>
        {/* <Navbar/> */}
        <div  className='flex text-white flex-col'>
            <motion.h1 viewport={{once: true}} whileInView={'visible'} variants={variants('left', 0.2, 40)} initial="hidden" className='text-3xl md:text-4xl text-left'>Hi! I Am</motion.h1>
            <motion.p viewport={{once: true}} whileInView={'visible'} variants={variants('right', 0.2, 40)} initial="hidden" className='ml-10 text-4xl md:text-5xl font-bold'>Daniel Alferez</motion.p>
        </div>
        <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('scale', 0.5)} initial="hidden"  style={{backgroundImage: `url(${PROFILE})`, 
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
          backgroundSize: 'cover'
          }}
          className='p-20 rounded-full h-72 w-80'
        />
        <motion.h1 viewport={{once: true}} whileInView={'visible'} variants={variants('right', 0.8, 40)} initial="hidden" className='text-white p-2 mt-5 text-3xl font-medium'>Full Stack Developer</motion.h1>
        <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('right', 1.2, 40)} initial="hidden" className='text-white flex items-center gap-x-1 '>
          <MdPlace className='w-7 h-7'/>
          <p>Villavicencio, Colombia</p>
        </motion.div>
        <div className='text-white flex items-center gap-3 my-3'>
          <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('up', 1.2, 10)} initial="hidden">
            <SiGithub className='w-7 h-7 hover:text-gray-700 cursor-pointer'/>
          </motion.div>
          <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('up', 1.4, 10)} initial="hidden">
            <SiLinkedin className='w-7 h-7 hover:text-blue-500 cursor-pointer'/>
          </motion.div>
        </div>
    </div>
  )
}
