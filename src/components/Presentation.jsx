import React from 'react'
import PROFILE from "../assets/Young-Man-PNG-Clipart.png";
import { MdPlace, MdOutlineSend, MdDownload } from "react-icons/md";
import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";
import { Link } from 'react-scroll';
import { RxDoubleArrowDown } from "react-icons/rx";
import ContactForm from './ContatctForm';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';

export default function Presentation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='lg:mt-0 -mt-10 flex relative flex-col lg:flex-row items-center justify-center h-screen max-h-screen bg-gradient-to-b backdrop-blur-sm from-gray-800/90 to-gray-900/90'>
        <div className='flex flex-col items-center lg:items-end'>
          <div className='flex text-white flex-col'>
              <h1 className='text-3xl md:text-4xl 2xl:text-5xl text-left'>Hi! I Am</h1>
              <p className='ml-10 text-4xl md:text-5xl 2xl:text-6xl font-bold'>Daniel Alferez</p>
          </div>
          <h1 className='text-white p-2 mt-5 text-3xl 2xl:text-4xl font-medium'>Full Stack Developer</h1>
          <div className='text-white flex items-center'>
            <MdPlace className='w-7 h-7 2xl:w-8 2xl:h-8'/>
            <p className='2xl:text-xl text-lg'>Villavicencio, Colombia</p>
          </div>
          <div className='flex gap-2 mt-5 font-bold'>
            <button className='flex items-center rounded-lg p-2 bg-white text-gray-800 hover:bg-gray-200 group'>
              <a href={PROFILE} target="_blank" rel='noopener noreferrer' download="DanielAlferez">
                Download CV
              </a>
              <MdDownload className='w-6 h-6 ml-1 group-hover:animate-pulse'/>
            </button>
            <button className='flex justify-center items-center rounded-lg p-2 bg-white text-gray-800 hover:bg-gray-200 group' onClick={handleOpen}>
              <p>Contact Me</p>
              <MdOutlineSend className='w-6 h-6 ml-1 group-hover:animate-pulse'/>
            </button>
            <Modal 
              open={open}
              onClose={handleClose}
            >
              <Box
                sx={{position: 'absolute', top: '50%', left: '50%', background: 'black',transform: 'translate(-50%, -50%)', width:400, boxShadow: 24, borderRadius: 4}}
              >
                <ContactForm/> 
              </Box>         
            </Modal>
          </div>
          <Link to='Projects' smooth={true} duration={1200}>
            <button className='text-white font-semibold mt-5' >
              View all my projects &rarr;
            </button>
          </Link>
        </div>
        <div className='m-10 h-60 w-60 lg:h-80 lg:w-80 flex flex-col justify-center items-center'>
          <div className='rounded-full flex justify-center lg:justify-start items-center'>
            <img src={PROFILE} className='object-cover w-full h-full object-top' />
          </div>
          <div className='text-white flex items-center gap-3 my-3'>
            <div >
              <SiLinkedin className='w-8 h-8 hover:text-blue-500 cursor-pointer'/>
            </div>
            <div >
              <SiGithub className='w-8 h-8 hover:text-gray-700 cursor-pointer'/>
            </div>
            <div >
              <SiTelegram className='w-8 h-8 hover:text-sky-400 cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className='lg:block hidden absolute left-1/2 -translate-x-1/2 bottom-0 mb-5 text-white/70'>
          <Link to='Skills' smooth={true} duration={1200} className='cursor-pointer flex flex-col justify-center items-center'>
            <RxDoubleArrowDown className='animate-pulse w-12 h-12'/>
          </Link>
        </div>
    </div>
  )
}
