import React from 'react'
import Presentation from './Presentation';
import AboutMe from './AboutMe';
import Navbar from './Navbar';
import ContactForm from './ContatctForm';
import Projects from './Projects';

export default function Home() {
  return (
    <>
        <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVybiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundSize: 'cover',
            }}
            className='flex flex-col relative'
        >
            <div id='Home'>
                <Presentation/>  
            </div>
            <div id='Skills'>
                <AboutMe/>
            </div>
            <div id='Projects'>
                <Projects/>
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
