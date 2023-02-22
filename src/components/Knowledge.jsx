import React from 'react'
import { SiTailwindcss, SiRedux, SiAmazonaws, SiReact, SiDjango, SiFlask, SiFastapi, SiDocker, SiKubernetes, SiLinux, SiCplusplus, SiPostgresql, SiMysql, SiMongodb } from "react-icons/si";

export default function Knowledge() {

    function getRandomInt(max){
        return  Math.floor(Math.random() * max)
    }

    function getRandomAmimation(){
        const num = getRandomInt(3)  
        if (num == 0) {
            return "animate-down-box hover:animate-up-box"
        }else if (num == 1) {
            return "animate-up-box hover:animate-down-box"       
        }else if (num == 2) {
            return "animate-left-box hover:animate-right-box"
        }else{
            return "animate-down-box hover:animate-up-box"
        }
    }

    const technologies = [
        { name: "ReactJS", icon: SiReact, color: 'hover:text-cyan-500'},
        { name: "Redux", icon: SiRedux, color: 'hover:text-purple-400'},
        { name: "Talwindcss", icon: SiTailwindcss, color: 'hover:text-cyan-500'},
        { name: "Django", icon: SiDjango, color: 'hover:text-green-900'},
        { name: "Flask", icon: SiFlask, color: 'hover:text-gray-700'},
        { name: "FastApi", icon: SiFastapi, color: 'hover:text-teal-600'},
        { name: "Postgresql", icon: SiPostgresql, color: 'hover:text-blue-400'},
        { name: "MySql", icon: SiMysql, color: 'hover:text-yellow-600'},
        { name: "MongoDB", icon: SiMongodb, color: 'hover:text-green-700'},
        { name: "Docker", icon: SiDocker, color: 'hover:text-sky-600'},
        { name: "Kubernetes", icon: SiKubernetes, color: 'hover:text-blue-500'},
        { name: "Linux", icon: SiLinux, color: 'hover:text-gray-500'},
        { name: "AWS", icon: SiAmazonaws, color: 'hover:text-yellow-600'},
      ];
    
  return (
    <div className='mx-10'>
          <h1 className='font-bold text-center text- text-white text-5xl py-20'>Knowledge</h1>
          <div className='pb-20 flex justify-center'>
            <div className='flex flex-wrap gap-10  max-w-lg justify-center'>
                {technologies.map((tech, i) => (
                    <button 
                    className={`text-white ${tech.color} ml-${getRandomInt(10)} mt-${getRandomInt(10)} ${getRandomAmimation()} flex flex-col items-center`}
                    key={i}
                    >
                        <div>{React.createElement(tech.icon, { size: "60" })}</div>
                        <p>{tech?.name}</p>
                    </button>
                ))}
            </div>
          </div>
        </div>
  )
}
