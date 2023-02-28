import React from 'react'
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

export default function CardProject({project}) {
  return (
    <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className='md:cursor-pointer overflow-hidden group relative bg-black rounded-3xl h-48 w-80'>
      <img src={project.image} loading='lazy' className='h-full w-full rounded-3xl group-hover:scale-105 duration-700'/>
      <div className='invisible group-hover:visible absolute inset-0'>
        <div className='abosolute translate-y-[100%] group-hover:translate-y-[10%] transition-all duration-1000 p-3 text-white rounded-3xl h-full bg-gray-900/80'>
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
          <div>
          <a className='text-blue-300 cursor-pointer hover:text-blue-400 flex items-center gap-2 my-4 justify-center'>
            <SiGithub className='w-5 h-5 '/>
            <p className='font-medium'>Ver proyecto...</p>
          </a>
          </div>
        </div>
      </div>      
    </motion.div>
  )
}
