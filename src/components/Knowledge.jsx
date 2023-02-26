import React from 'react'
import technologies from '../data/technologies';
import { useDispatch, useSelector } from 'react-redux'; 
import { filterTech } from '../features/technologies/techSlice';
import { selectField } from '../features/field/fieldSlice';
import { Link } from 'react-scroll';

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
    <div className='mx-10'>
          <h1 className='font-bold text-center text- text-white text-5xl py-20'>Knowledge</h1>
          <div className='pb-20 flex justify-center'>
            <div className='flex flex-wrap gap-10  max-w-lg justify-center'>
                {technologies.map((tech, i) => (
                    <Link key={i} to="techSection" smooth={true} duration={1200}>  
                        <button 
                        className={`${tech.showProjects ? 'md:cursor-pointer cursor-default' : 'cursor-not-allowed'}  text-white ${tech.color} ml-${getRandomInt(10)} mt-${getRandomInt(10)} ${getRandomAmimation()} flex flex-col items-center`}
                        onClick={() => handleTech(tech.name, tech.showProjects, tech.field)}
                        > 
                            <div>{React.createElement(tech.icon, { size: "60" })}</div>
                            <p>{tech.name}</p>
                        </button>
                    </Link>
                ))}
            </div>
          </div>
        </div>
  )
}
