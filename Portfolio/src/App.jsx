import React from 'react'
import './index.css'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'

import Certification from './components/Certification'
import Contact from './components/Contact'

function App() {


  return (
    <>
      <div className='overflow-auto'>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certification />
        <Contact />
      </div>


    </>
  )
}

export default App
