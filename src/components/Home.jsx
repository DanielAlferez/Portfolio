import React from 'react'
import RightSidebar from "./RightSidebar";
import Presentation from './Presentation';
import Knowledge from './Knowledge';
import AboutMe from './AboutMe';
import Navbar from './Navbar';
import ContactForm from './ContatctForm';

export default function Home() {
  return (
    <>
        <div style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2020/06/01/13/02/mountains-5246545_960_720.jpg)`, 
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundSize: 'cover',
            }}
            className='lg:grid flex flex-col grid-cols-8 relative'
        >
            <div id='Home' className='col-span-8'>
                <Presentation/>  
            </div>
            <div id='Skills' className='col-span-8'>
                <AboutMe/>
            </div>
            <div id='Projects'className='col-span-5'>
                <Knowledge/>
            </div>
            <div className='col-span-3 '>
                <RightSidebar/>
            </div>
            <div className='block lg:hidden bottom-0 fixed left-1/2 -translate-x-1/2 '>
                <Navbar/>
            </div>
            <div className='hidden lg:block fixed -translate-y-1/2 lg:top-1/2'>
                <Navbar/>
            </div>
            {/* <div className='fixed inset-0 flex justify-center items-center bg-gray-900/60'>
                <ContactForm/>
            </div> */}
        </div>
    </>
    )
}
