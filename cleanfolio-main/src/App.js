/* eslint-disable react/function-component-definition */
// import { Link } from '@material-ui/core'
import { useContext } from 'react'
// import {Routes, Route } from "react-router-dom"
// import { Link } from '@material-ui/core'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
// import About from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
// import Aboutsum from './components/aboutsummary/aboutsummary'

import Home from './components/Home/Home'

// import Aboutsummary from './components/Aboutsummary/Aboutsummary'
import AboutSummary from './components/Aboutsummary/Aboutsummary'

// import Home from './components/Home/Home'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <Home />
        {/* <Aboutsummary /> */}
        <AboutSummary />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
