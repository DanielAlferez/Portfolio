import React from 'react'
import { useInView } from 'react-intersection-observer'


export default function AboutMe() {


  return (
        <div className='pt-10 backdrop-blur-sm bg-gradient-to-b from-gray-900/90 to-black/90 flex flex-col items-center px-10 justify-center'>
            <div className='text-white text-lg flex flex-col max-w-2xl pr-5'>
                <h1 className='font-semibold text-2xl text-center  mb-5'>ABOUT ME</h1>
                <p className=''>I am so passionate person who love learning, I never stop doing it. Knowledge is very important to me. I have a lot of empathy and patience, i like to analyze the world and all aspects of life</p>
            </div>
            <div className='text-white max-w-2xl text-center'>
                <h1 className='font-semibold text-2xl mt-10 mb-5'>LANGUAGES</h1>
                <p className='font-medium text-xl'>Spanish - Native</p>
                <p className='font-medium text-xl'>English - B2</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium vel adipisci, iusto in vitae, maiores molestias rem et quam commodi dolor voluptatem earum optio minima. Repellat veritatis dolor veniam quas temporibus tempore fuga beatae minus voluptatibus sint. Culpa molestias tempora suscipit accusamus labore earum velit at quia voluptate minus explicabo provident temporibus commodi ab perferendis iure dolorem iste rerum, repudiandae non quis unde vero? Voluptate molestiae quibusdam provident mollitia aperiam, ut tempore fugiat laudantium ducimus. Voluptatem ullam est, amet inventore harum, sequi eligendi libero maxime officia facere, quibusdam animi enim itaque? Nobis quam ipsam facere eum, doloribus doloremque non?</p>
            </div>
        </div>
  )
}
