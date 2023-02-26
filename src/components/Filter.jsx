import React from 'react'
import technologies from '../data/technologies';
import { useDispatch, useSelector } from 'react-redux'; 
import { filterTech } from '../features/technologies/techSlice';

export default function Filter() {

  const dispatch = useDispatch()
  const activeTech = useSelector((state) => state.techs.activeTech);
  const field = useSelector((state) => state.fields.field)

  const handleTech = (activeTech) => {
    dispatch(filterTech({activeTech: activeTech}))
  }

  return (
    <div className='flex flex-wrap justify-center text-white gap-2 my-10'>
        <button onClick={() => handleTech('All')} className={`${activeTech === 'All' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>All</button>
        {technologies.map((tech, i) => (
          <button key={i} onClick={() => handleTech(tech.name)} className={`${tech.showProjects ? 'block' : 'hidden'} ${activeTech === tech.name ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} ${field === tech.field ? 'block' : 'hidden'} rounded-xl py-1 px-3 font-semibold`}>{tech.name}</button>    
        ))}
    </div>
  )
}
