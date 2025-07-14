import React from 'react'
import { SiGithub } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { TbFaceIdError } from "react-icons/tb";

export default function CardProject({project}) {
  return (
    <div className='md:cursor-pointer overflow-hidden group relative bg-gray-100 rounded-3xl h-48 w-80'>
      <div className='h-full w-full rounded-3xl group-hover:scale-105 duration-700'>
        <img src={project.image} loading='lazy' className='w-full h-full object-cover'/>    
        <div className={`${project.image ? 'hidden' : 'block'} absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center text-gray-300 font-bold text-xl`}>
          <div className='flex flex-col items-center'>
            <TbFaceIdError className='w-14 h-14'/>
            <p>This project doesn't have a preview</p> 
          </div> 
        </div>    
      </div>
      <div className='invisible group-hover:visible absolute inset-0'>
        <div className='abosolute translate-y-[100%] group-hover:translate-y-[10%] transition-all duration-1000 p-2 text-white rounded-3xl h-full bg-gray-900/80'>
          <p className='transition-opacity text-center font-bold text-3xl flex justify-center mb-4'>{project.title}</p>
          <div className='flex flex-wrap gap-3 justify-center'>
            {project.technologies.map((tech, i) => (
                    <button 
                    className={`flex flex-col items-center`}
                    key={i}
                    >
                        <div>{React.createElement(tech.icon, { size: "25" })}</div>
                    </button>
                ))}
          </div>
          <div className='flex gap-x-3 mt-3 justify-center'>
            <a href={project.frontend} target='_blank' className={`${project.frontend ? 'block' : 'hidden'} text-blue-300 cursor-pointer hover:text-blue-400 flex items-center gap-2 justify-center`}>
              <SiGithub className='w-5 h-5 '/>
              <p className='font-medium'>Frontend</p>
            </a>
            <a href={project.backend} target='_blank' className={`${project.backend ? 'block' : 'hidden'} text-blue-300 cursor-pointer hover:text-blue-400 flex items-center gap-2 justify-center`}>
              <SiGithub className='w-5 h-5 '/>
              <p className='font-medium'>Backend</p>
            </a>
            <a href={project.demo} target='_blank' className={`${project.demo ? 'block' : 'hidden'} text-blue-300 cursor-pointer hover:text-blue-400 flex items-center gap-2 justify-center`}>
              <CgWebsite className='w-5 h-5 '/>
              <p className='font-medium'>Demo</p>
            </a>
          </div>
        </div>
      </div>      
    </div>
  )
}
