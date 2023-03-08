import React from 'react'
import RightSidebar from "./RightSidebar";
import Presentation from './Presentation';
import Back from "../assets/back.jpg"
import Knowledge from './Knowledge';
import AboutMe from './AboutMe';
import Navbar from './Navbar';

export default function Home() {

  return (
    <>
        <div style={{backgroundImage: `url(${Back})`, 
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
        </div>
    </>
    )
}
