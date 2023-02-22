import React from 'react'
import CardProject from './CardProject';
import Projects from './Projects';
import Filter from './Filter';
import { motion, AnimatePresence } from "framer-motion";

export default function RightSidebar() {
  const [project, setProject] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);  
  const [activeTech, setActiveTech] = React.useState('All');

  React.useEffect(() => {
    getProject();
  }, []);

  const getProject = () => {
    const data = Projects
    console.log(data)
    setProject(data)
    setFiltered(data)
  }

  return (
    <div className='lg:overflow-y-scroll h-full lg:fixed shadow-2xl rounded-2xl bg-white'>
        <div className='pb-5 mt-3'>
            <div className='z-10 rounded-t-2xl grid grid-cols-2 sticky top-0 backdrop-blur-sm bg-white/60 py-4 px-10'>
                <div/>
                <div className='text-white flex w-full justify-end'>
                    <button className='bg-black hover:bg-gray-600 py-2 px-4 rounded-l-2xl'>Frontend</button>
                    <hr/>
                    <button className='bg-gray-600 hover:bg-black py-2 px-4 '>Backend</button>
                    <hr/>
                    <button className='bg-gray-600 hover:bg-black py-2 px-4 rounded-r-2xl'>Hacking</button>
                </div>
            </div>
            <div className='col-span-2 px-10'>
                <hr className='my-2'/>
                <h1 className='text-left font-semibold text-2xl my-5'>Look at my projects!</h1>
                <p className='filteredmb-10'>I have extensive experience working with popular frameworks such as Django, Flask, and FastAPI. I have used these frameworks to build robust and scalable web applications. For database management, I have worked with a variety of popular systems including MongoDB, MySQL, and PostgreSQL. Depending on the specific needs of the project and have experience with designing, configuring, and optimizing databases for optimal performance.</p>
                <Filter project={project} setFiltered={setFiltered} activeTech={activeTech} setActiveTech={setActiveTech} />
            </div>
            <motion.div animate={{ opacity: 1 }} layout className='col-span-3 mx-4 gap-5 items-center flex flex-wrap justify-center'>
                <AnimatePresence>
                    {filtered.map((project) => (
                        <CardProject key={project.id} project={project}/>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    </div>
  )
}
