import React from 'react'
import experience from "../data/experience"
import { IoMdSchool } from "react-icons/io";

export default function AboutMe() {
  return (
        <div className='gap-y-32 gap-x-14 py-10  lg:h-screen  backdrop-blur-sm bg-gradient-to-b from-gray-900/90 to-black/90 grid lg:grid-cols-2 items-center px-10 lg:px-28 justify-center '>
            <div>
                <div className='text-white text-lg flex flex-col'>
                    <h1 className='font-semibold text-2xl text-center  mb-5'>ABOUT ME</h1>
                    <p className=''>I am so passionate person who love learning, I never stop doing it. Knowledge is very important to me. I have a lot of empathy and patience, i like to analyze the world and all aspects of life</p>
                </div>
                <div className='text-white text-center'>
                    <h1 className='font-semibold text-2xl text-center mt-10 mb-5'>SKILLS</h1>
                    <div className='font-medium text-xl grid grid-cols-2'>
                        <p>Teamwork</p>
                        <p>Empathy</p>
                    </div>
                </div>
                <div className='text-white text-center'>
                    <h1 className='font-semibold text-2xl mt-10 mb-5'>LANGUAGES</h1>
                    <p className='font-medium text-xl'>Spanish - Native</p>
                    <p className='font-medium text-xl'>English - B2</p>
                </div>
            </div>
            <div>
                <div className='flex justify-center mb-10 text-white gap-2'>
                    <IoMdSchool className='h-10 w-10 '/>
                    <h1 className='font-bold text-3xl'>Studies</h1>
                </div>
                <div className='grid grid-cols-5 text-white text-xl'>
                    
                    {experience.map((exp, index) => (
                        <>
                            {console.log(index)}
                            <div className={`${(index + 1) % 2 === 0 ? 'hidden' : 'block'} flex justify-end row-start-${index + 1 } col-start-1 col-span-2`}>
                                <div className='bg-gray-600/20 p-3 rounded-2xl'>
                                    <p className='font-light text-base mb-1'>{exp.initialYear}-{exp.finalYear}</p>
                                    <hr className='opacity-10'/>
                                    <h1 className='font-bold mt-1'>{exp.title}</h1>
                                    <p className='font-light text-lg mb-3'>{exp.place}</p>
                                    <p className='text-lg'>{exp.description}</p>
                                </div>
                            </div>
                            <div className='col-start-3 flex justify-center'>
                                <div className={`h-full bg-white w-1 flex justify-center items-center`}>
                                    <div className='bg-white h-5 rounded-full p-3'/>
                                </div>
                            </div>
                            <div className={`${(index + 1) % 2 === 0 ? 'block' : 'hidden'} flex justify-start row-start-${index + 1 } col-start-4 col-span-2`}>
                            <div className='bg-gray-600/20 p-3 rounded-2xl'>
                                    <p className='font-light text-base mb-1'>{exp.initialYear}-{exp.finalYear}</p>
                                    <hr className='opacity-10'/>
                                    <h1 className='font-bold mt-1'>{exp.title}</h1>
                                    <p className='font-light text-lg mb-3'>{exp.place}</p>
                                    <p className='text-lg'>{exp.description}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
  )
}
