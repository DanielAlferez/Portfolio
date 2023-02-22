import React from 'react'

export default function Filter({setActiveTech, activeTech, setFiltered, project}) {
  
  React.useEffect(() => {
    if (activeTech == 'All') {
      setFiltered(project)
      return;
    }
    const filtered = project.filter((project) =>
      project.technologies.some((tech) => tech.name === activeTech)
    );
    setFiltered(filtered)
  }, [activeTech])

  return (
    <div className='flex flex-wrap justify-center text-white gap-2 my-10'>
        <button onClick={() => setActiveTech('All')} className={`${activeTech === 'All' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>All</button>
        <button onClick={() => setActiveTech('Django')} className={`${activeTech === 'Django' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>Django</button>
        <button onClick={() => setActiveTech('Flask')} className={`${activeTech === 'Flask' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>Flask</button>
        <button onClick={() => setActiveTech('FastApi')} className={`${activeTech === 'FastApi' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>FastApi</button>
        <button onClick={() => setActiveTech('PostgreSql')} className={`${activeTech === 'PostgreSql' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>PostgreSql</button>
        <button onClick={() => setActiveTech('MySql')} className={`${activeTech === 'MySql' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>MySql</button>
        <button onClick={() => setActiveTech('MongoDB')} className={`${activeTech === 'MongoDB' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>MongoDB</button>
        <button onClick={() => setActiveTech('Docker')} className={`${activeTech === 'Docker' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>Docker</button>
        <button onClick={() => setActiveTech('Kubernetes')} className={`${activeTech === 'Kubernetes' ? 'bg-gray-800 text-white' : 'text-gray-800 border border-gray-800'} rounded-xl py-1 px-3 font-semibold`}>Kubernetes</button>
    </div>
  )
}
