/* eslint-disable react/function-component-definition */
// import { Link } from '@material-ui/core'
import { useContext } from 'react'
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

// import Home from './components/Home/Home'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <Home />
        {/* <Link to='/aboutsummary' elements={<Aboutsum />} /> */}
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
