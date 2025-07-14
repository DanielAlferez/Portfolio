import React from 'react'
import technologies from '../data/technologies';
import { useDispatch, useSelector } from 'react-redux';
import { filterTech } from '../features/technologies/techSlice';
import { selectField } from '../features/field/fieldSlice';
import CardProject from './CardProject';
import Filter from './Filter';

export default function Projects() {
    const dispatch = useDispatch()
    const filtered = useSelector((state) => state.techs.filteredProjects);
    const field = useSelector((state) => state.fields.field)

    const handleTech = (activeTech, show, field) => {
       if (show) {
            dispatch(filterTech({activeTech: activeTech}))
            dispatch(selectField(field))
       }
    }

    const handleField = (field) => {
        dispatch(selectField(field))
        dispatch(filterTech({activeTech: field}))
    }

    return (
        <div className='min-h-screen backdrop-blur-sm bg-gradient-to-b from-black/90 to-black/90 py-10'>
            <h1 className='font-bold text-center text-white text-5xl py-10'>Projects</h1>
            <div className='flex justify-center'>
                <div className='lg:px-0 px-10 flex flex-wrap gap-10 max-w-lg justify-center'>
                    {technologies.map((tech, i) => (
                        <button
                            key={i}
                            className={`${tech.showProjects ? 'md:cursor-pointer cursor-default' : 'cursor-not-allowed'}  text-white ${tech.color} flex flex-col items-center`}
                            onClick={() => handleTech(tech.name, tech.showProjects, tech.field)}
                        >
                            <div>{React.createElement(tech.icon, { size: "55" })}</div>
                            <p>{tech.name}</p>
                        </button>
                    ))}
                </div>
            </div>

            <div className='bg-white mt-10 lg:pb-10 pb-20'>
                <div className='py-5'>
                    <div className='z-10 grid grid-cols-2 py-3 px-10'>
                        <div/>
                        <div className='text-white flex w-full justify-end'>
                            <button
                            onClick={() => handleField("Backend")}
                            className={`${field === "Backend" ? 'bg-black' : 'bg-gray-600'}  py-2 px-4 rounded-l-2xl`}>Backend</button>
                            <button
                            onClick={() => handleField("Frontend")}
                            className={`${field === "Frontend" ? 'bg-black' : 'bg-gray-600'}  py-2 px-4 rounded-r-2xl`}>Frontend</button>
                        </div>
                    </div>
                    <div className='col-span-2 px-10'>
                        <hr className='my-2'/>
                        <h1 className='text-left font-semibold text-2xl my-5'>Look at my projects!</h1>
                        <p className={`${field === "Backend" ? 'block' : 'hidden'} mb-10`}>I have experience working with popular frameworks such as Django and Flask. I have used these frameworks to build web applications. For database management, I have worked with MySQL and PostgreSQL.</p>
                        <p className={`${field === "Frontend" ? 'block' : 'hidden'} mb-10`}>I have experience working with popular frameworks such as React, Tailwind, and Redux ToolKit</p>
                        <Filter/>
                    </div>
                    <div className='col-span-3 mx-4 gap-5 items-center flex flex-wrap justify-center'>
                        {filtered.map((project) => (
                            <CardProject key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
