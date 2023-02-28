import React from 'react'
import RightSidebar from "./RightSidebar";
import Presentation from './Presentation';
import Back from "../assets/MoonHacker.png"
import Knowledge from './Knowledge';
import AboutMe from './AboutMe';
import Contact from './Contact';

export default function Home() {
  return (
    <>
        <div style={{backgroundImage: `url(${Back})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundSize: 'cover',
            }}
            className='lg:grid grid-cols-8'
        >
            <div className='col-span-8'>
                <Presentation/>  
            </div>
            <div className='col-span-8'>
                <AboutMe/>
            </div>
            <div className='col-span-5'>
                <Knowledge/>
            </div>
            <div className='col-span-3 '>
                <RightSidebar/>
            </div>
            <div className='col-span-8'>
                <Contact/>
            </div>
        </div>
    </>
    )
}
