/* eslint-disable react/function-component-definition */
//  eslint-disable react/function-component-definition
import { useContext, useState } from 'react'

import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import {
  projects,
  skills,
  contact,
  aboutsummary,
  WorkExperience,
} from '../../portfolio'
import './Navbar.css'
// import Aboutsummary from '../Aboutsummary/Aboutsummary'

// import Aboutsummary from '../Aboutsummary/Aboutsummary'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

 const toggleNavList = () => {
   console.log('Before Toggle:', showNavList)
   setShowNavList(!showNavList)
   console.log('After Toggle:', showNavList)
 }


  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <button
          type='button'
          onClick={toggleTheme}
          className='btn btn--icon nav__theme'
          aria-label='toggle theme'
        >
          {themeName === 'light' ? <Brightness2Icon /> : <WbSunnyRoundedIcon />}
        </button>

        <button
          type='button'
          onClick={toggleNavList}
          className='btn btn--icon nav__hamburger'
          aria-label='toggle navigation'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
        {aboutsummary.length ? (
          <li className='nav__list-item'>
            <a
              href='#abouts'
              onClick={toggleNavList}
              className='link link--nav'
            >
              abouts
            </a>
          </li>
        ) : null}

        {WorkExperience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={toggleNavList}
              className='link link--nav'
            >
              WorkExperience
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

export default Navbar
