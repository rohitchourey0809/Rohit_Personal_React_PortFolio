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
import Home from './components/Home/Home'
import AboutSummary from './components/aboutsummary/aboutsummary'
import WorkExperienceSummary from './components/WorkExperience/workexperience'
import GitHub from './components/Github/github'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <Home />
        <AboutSummary />
        <WorkExperienceSummary />
        <Skills />
        <Projects />
        <GitHub/>

        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
