import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Footer from './Footer'
import Contact from './Contact'
import Skills from './Skills'

const HomePage = () => {
  return (
    <div>
        {/* <Navigation/> */}
        <Hero/>
        {/* <AboutMe/> */}
        <Skills/>
        <Projects/>
        <Contact/>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage