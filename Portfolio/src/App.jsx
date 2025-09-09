import React from 'react'
import './App.css'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'

import Certification from './components/Certification'

function App() {


  return (
    <>
      <div className='overflow-auto'>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certification />
      </div>


    </>
  )
}

export default App
