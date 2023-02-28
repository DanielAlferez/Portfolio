import React from 'react'
import { useInView } from 'react-intersection-observer'


export default function AboutMe() {

    const [progressSpanish, setProgressSpanish] = React.useState(0);
    const [progressEnglish, setProgressEnglish] = React.useState(0);
  
    const [ref, inView] = useInView({
      triggerOnce: true,
    })
  
    React.useEffect(() => {
      if (inView) {
        const interval = setInterval(() => {
          if (progressEnglish < 70) {
            setProgressEnglish(progressEnglish + 1);
          }
        }, 10)
        return () => clearInterval(interval)
      }
    }, [inView, progressEnglish])
  
    React.useEffect(() => {
      if (inView) {
        const interval = setInterval(() => {
          if (progressSpanish < 100) {
            setProgressSpanish(progressSpanish + 1);
          }
        }, 7)
        return () => clearInterval(interval)
      }
    }, [inView, progressSpanish])

  return (
        <div className='backdrop-blur-sm bg-gradient-to-b from-black/95 to-black/90 flex flex-col items-center px-10 h-screen justify-center'>
            <div className='text-white text-lg flex flex-col  max-w-2xl pr-5'>
                <h1 className='font-semibold text-2xl text-center  mb-5'>ABOUT ME</h1>
                <p className=''>I am so passionate person who love learning, I never stop doing it. Knowledge is very important to me. I have a lot of empathy and patience, i like to analyze the world and all aspects of life</p>
            </div>
            <div ref={ref} className='text-white max-w-2xl text-center'>
                <h1 className='font-semibold text-2xl mt-10 mb-5'>LANGUAGES</h1>
                <p className='font-medium text-xl'>Spanish - Native</p>
                <progress value={progressSpanish} max={100} className='myProgress'/>
                <p className='font-medium text-xl'>English - B2</p>
                <progress value={progressEnglish} max={100} className='myProgress'/>
            </div>
        </div>
  )
}
