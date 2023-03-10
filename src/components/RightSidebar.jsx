import React from 'react'
import CardProject from './CardProject';
import Filter from './Filter';
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { selectField } from '../features/field/fieldSlice';
import { filterTech } from '../features/technologies/techSlice';
import { Element } from 'react-scroll';
import { variants } from '../animations/variants';

export default function RightSidebar() {
  const filtered = useSelector((state) => state.techs.filteredProjects);
  const field = useSelector((state) => state.fields.field)

  const dispatch = useDispatch()

  const handleField = (field) => {
    dispatch(selectField(field))
    dispatch(filterTech({activeTech: field}))
  }

  return (
    <div className='backdrop-blur-sm bg-gradient-to-b from-black/90 to-black/90 lg:pt-0 pt-10'>
        <motion.section viewport={{once: true}} whileInView={'visible'} variants={variants('right', 0.05, 10)} initial="hidden"  className='lg:overflow-y-scroll lg:h-screen shadow-2xl rounded-2xl bg-white lg:pb-10 pb-20'>
            <Element name="techSection" className='lg:hidden'/>
            <div className='py-5'>
                <div className='z-10 rounded-t-2xl grid grid-cols-2 sticky top-0 backdrop-blur-sm bg-white/60 py-3 px-10'>
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
                    <p className={`${field === "Backend" ? 'block' : 'hidden'} mb-10`}>I have experience working with popular frameworks such as Django, Flask, and FastAPI. I have used these frameworks to build robust and scalable web applications. For database management, I have worked with a variety of popular systems including MongoDB, MySQL, and PostgreSQL. Depending on the specific needs of the project and have experience with designing, configuring, and optimizing databases for optimal performance.</p>
                    <p className={`${field === "Frontend" ? 'block' : 'hidden'} mb-10`}>I have experience working with popular frameworks such as React, Tailwind, and Redux. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam officia ea minus ducimus, reiciendis dolore vero porro, enim quidem modi aperiam tenetur. Voluptas animi amet consectetur at, eos fugit nostrum non quasi assumenda enim iste consequatur, libero accusamus! Dignissimos, sunt?</p>
                    <Filter/>
                </div>
                <motion.div animate={{ opacity: 1 }} layout className='col-span-3 mx-4 gap-5 items-center flex flex-wrap justify-center'>
                    <AnimatePresence>
                        {filtered.map((project) => (
                            <CardProject key={project.id} project={project}/>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.section>
    </div>
  )
}
