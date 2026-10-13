import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
const App = () => {
  return (
    <main
    className="min-h-screen"  
    >
      <Navbar/>
      <Home/>

      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </main>
  )
}

export default App
