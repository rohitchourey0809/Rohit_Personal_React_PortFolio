// import uniqid from 'uniqid'
import React from 'react'
import { aboutsummary } from '../../portfolio'
import './aboutsummary.css'

// eslint-disable-next-line react/function-component-definition
const Aboutsum = () => {
  if (!aboutsummary.aboutdescrp.length) return null
  const { aboutdescrp } = aboutsummary

  return (
    <section className='about center'>
      <h2 className='about_title'>About</h2>
      {aboutdescrp && (
        // <h4 className='about__role'>
// project__description
        <p className='about__desciption'>{aboutdescrp}</p>
        // </h4>
      )}
    </section>
  )
}

export default Aboutsum
