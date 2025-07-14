import React from 'react'
import experience from "../data/experience"
import { IoMdSchool } from "react-icons/io";

export default function AboutMe() {
  return (
        <div className='py-10 min-h-screen backdrop-blur-sm bg-gradient-to-b from-black/90 to-black/90 flex flex-col items-center px-10 lg:px-28 justify-center '>
            <div className='text-white text-lg flex flex-col items-center text-center'>
                <h1 className='font-semibold text-4xl mb-5'>ABOUT ME</h1>
                <p className='max-w-2xl'>I have a strong passion for learning and personal growth. I approach life with empathy and patience, always striving to understand different perspectives. I am dedicated to delivering excellent results and continuously seeking to improve. I believe in the importance of continuous learning and development in both my personal and professional life. </p>
            </div>
            <div className='text-white text-center mt-10'>
                <h1 className='font-semibold text-4xl mb-5'>SKILLS</h1>
                <div className='font-medium text-xl grid grid-cols-2 md:grid-cols-3 gap-5'>
                    <div className='bg-gray-600/20 p-3 rounded-2xl'>Teamwork</div>
                    <div className='bg-gray-600/20 p-3 rounded-2xl'>Critical Thinking</div>
                    <div className='bg-gray-600/20 p-3 rounded-2xl'>Effective Communication</div>
                    <div className='bg-gray-600/20 p-3 rounded-2xl'>Problem-Solving</div>
                    <div className='bg-gray-600/20 p-3 rounded-2xl'>Adaptability</div>
                    <div className='bg-gray-600/20 p-3 rounded-2xl'>Creativity</div>
                </div>
            </div>
            <div className='text-white text-center mt-10'>
                <h1 className='font-semibold text-4xl mb-5'>LANGUAGES</h1>
                <div className='font-medium text-xl grid grid-cols-2 gap-5'>
                    <div className='bg-gray-600/20 p-3 rounded-2xl'>Spanish - Native</div>
                    <div className='bg-gray-600/20 p-3 rounded-2xl'>English - B2</div>
                </div>
            </div>
            <div className='mt-10 w-full max-w-4xl'>
                <div className='flex justify-center mb-10 text-white gap-2'>
                    <IoMdSchool className='h-10 w-10 '/>
                    <h1 className='font-bold text-4xl'>Studies</h1>
                </div>
                <div className='grid grid-cols-1 text-white text-xl gap-5'>
                    {experience.map((exp, index) => (
                        <div key={index} className='bg-gray-600/20 p-3 rounded-2xl'>
                            <p className='font-light text-base mb-1'>{exp.initialYear}-{exp.finalYear}</p>
                            <hr className='opacity-10'/>
                            <h1 className='font-bold mt-1'>{exp.title}</h1>
                            <p className='font-light text-lg mb-3'>{exp.place}</p>
                            <p className='text-sm'>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
