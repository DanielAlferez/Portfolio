import { Link } from 'react-scroll';
import React from 'react'
import Knowledge from './Knowledge';
import Skills from './Skills';

export default function Content() {
  return (
    <div className='lg:mr-5 h-full backdrop-blur-sm bg-gradient-to-b from-black/95 to-black/90'>
        <Knowledge/>
    </div>
  )
}
