import React from 'react'
import RightSidebar from "./RightSidebar";
import Presentation from './Presentation';
import Content from "./Content";
import Back from "../assets/MoonHacker.png"

export default function Home() {
  return (
    <>
        <div className='lg:grid grid-cols-8'>
            <div style={{backgroundImage: `url(${Back})`, 
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'center',
                backgroundSize: 'cover',
                }}
                className='col-span-5 grid grid-cols-5 lg:-mr-7'
            >
                <div className='col-span-5 '>
                    <Presentation/>  
                </div>
                <div className='col-span-5'>
                    <Content/>
                </div>
            </div>
            
            <div className='col-span-3'>
                <RightSidebar/>
            </div>
        </div>
    </>
    )
}
