// import uniqid from 'uniqid'
import React from 'react'
// import uniqid from 'uniqid'
import { aboutsummary } from '../../portfolio'
import './aboutsummary.css'

// eslint-disable-next-line react/function-component-definition
const Aboutsum = () => {
  if (!aboutsummary.aboutdescrp) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p className='about__desc'>
        {aboutsummary.aboutdescrp && aboutsummary.aboutdescrp}
      </p>
      {/* <p>{aboutsummary.aboutdescrp}</p> */}
    </section>
  )
}

export default Aboutsum
