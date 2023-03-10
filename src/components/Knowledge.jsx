import React from 'react'
import technologies from '../data/technologies';
import { useDispatch } from 'react-redux'; 
import { filterTech } from '../features/technologies/techSlice';
import { selectField } from '../features/field/fieldSlice';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { variants } from '../animations/variants'

export default function Knowledge() {

    const dispatch = useDispatch()
    const handleTech = (activeTech, show, field) => {
       if (show) {
            dispatch(filterTech({activeTech: activeTech}))  
            dispatch(selectField(field))  
       }
    }

    function getRandomInt(max){
        return Math.floor(Math.random() * max)
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

  return (
    <div  className=' flex flex-col justify-center h-[35em] backdrop-blur-sm bg-black/90'>
        <h1 className='font-bold text-center text- text-white text-5xl py-20'>Knowledge</h1>
        <div className='pb-20 flex justify-center'>
        <div className='lg:px-0 px-10 flex flex-wrap gap-10 max-w-lg justify-center'>
            {technologies.map((tech, i) => (
                <Link key={i} to={tech.showProjects ? 'techSection' : '' } smooth={true} duration={1200}>  
                    <motion.div viewport={{once: true}} whileInView={'visible'} variants={variants('scale', i+((i*0.15)-i))} initial="hidden" >
                        <button 
                        className={`${tech.showProjects ? 'md:cursor-pointer cursor-default' : 'cursor-not-allowed'}  text-white ${tech.color} ${getRandomAmimation()} flex flex-col items-center`}
                        onClick={() => handleTech(tech.name, tech.showProjects, tech.field)}
                        > 
                            <div>{React.createElement(tech.icon, { size: "55" })}</div>
                            <p>{tech.name}</p>
                        </button>
                    </motion.div>
                </Link>
            ))}
        </div>
        </div>
    </div>
  )
}
