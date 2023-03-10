import React from 'react'
import PROFILE from "../assets/Young-Man-PNG-Clipart.png";
import { MdPlace, MdOutlineSend, MdDownload } from "react-icons/md";
import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";
import { motion } from 'framer-motion';
import { variants } from '../animations/variants';
import { Link } from 'react-scroll';

export default function Presentation() {
  return (
    <div className='lg:mt-0 -mt-10 flex flex-col lg:flex-row items-center justify-center h-screen max-h-screen bg-gradient-to-b backdrop-blur-sm from-gray-800/90 to-gray-900/90'>
        <div className='flex flex-col items-center lg:items-end'>
          <div className='flex text-white flex-col'>
              <motion.h1 viewport={{once: true}} whileInView={'visible'} variants={variants('left', 0.2, 40)} initial="hidden" className='text-3xl md:text-4xl 2xl:text-5xl text-left'>Hi! I Am</motion.h1>
              <motion.p viewport={{once: true}} whileInView={'visible'} variants={variants('right', 0.2, 40)} initial="hidden" className='ml-10 text-4xl md:text-5xl 2xl:text-6xl font-bold'>Daniel Alferez</motion.p>
          </div>
          <motion.h1 viewport={{once: true}} whileInView={'visible'} variants={variants('right', 0.8, 40)} initial="hidden" className='text-white p-2 mt-5 text-3xl 2xl:text-4xl font-medium'>Full Stack Developer</motion.h1>
          <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('right', 1.2, 40)} initial="hidden" className='text-white flex items-center'>
            <MdPlace className='w-7 h-7 2xl:w-8 2xl:h-8'/>
            <p className='2xl:text-xl text-lg'>Villavicencio, Colombia</p>
          </motion.div>
          <div className='flex gap-2 mt-5 font-bold'>
            <motion.button viewport={{once: true}} whileInView={'visible'} variants={variants('right', 1.4, 10)} initial="hidden"  className='flex items-center rounded-lg p-2 bg-white text-gray-800 hover:bg-gray-800 hover:text-white group'>
              <a href={PROFILE} target="_blank" rel='noopener noreferrer' download="DanielAlferez">
                Download CV
              </a>
              <MdDownload className='w-6 h-6 ml-1 group-hover:animate-pulse'/>
            </motion.button>
            <motion.button viewport={{once: true}} whileInView={'visible'} variants={variants('left', 1.4, 10)} initial="hidden"  className='flex justify-center items-center rounded-lg p-2 bg-white text-gray-800 hover:bg-gray-800 hover:text-white group'>
              <p>Contact Me</p>
              <MdOutlineSend className='w-6 h-6 ml-1 group-hover:animate-pulse'/>
            </motion.button>
          </div>
          <Link to='Projects' smooth={true} duration={1200}>
            <motion.button viewport={{once: true}} whileInView={'visible'} variants={variants('right', 1.5, 10)} initial="hidden" className='text-white font-semibold mt-5' >
              View all my projects &rarr;
            </motion.button>
          </Link>
        </div>
        <div className='m-10 h-60 w-60 lg:h-80 lg:w-80 flex flex-col justify-center items-center'>
          <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('left', 0.7, 40)} initial="hidden" className='rounded-full flex justify-center lg:justify-start items-center'>
            <img src={PROFILE} className='object-cover w-full h-full object-top' />
          </motion.div>
          <div className='text-white flex items-center gap-3 my-3'>
            <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('up', 1, 10)} initial="hidden">
              <SiLinkedin className='w-8 h-8 hover:animate-up-box animate-down-box hover:text-blue-500 cursor-pointer'/>
            </motion.div>
            <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('up', 1.2, 10)} initial="hidden">
              <SiGithub className='w-8 h-8 hover:animate-up-box animate-down-box hover:text-gray-700 cursor-pointer'/>
            </motion.div>
            <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('up', 1.4, 10)} initial="hidden">
              <SiTelegram className='w-8 h-8 hover:animate-up-box animate-down-box hover:text-sky-400 cursor-pointer'/>
            </motion.div>
          </div>
        </div>
    </div>
  )
}
