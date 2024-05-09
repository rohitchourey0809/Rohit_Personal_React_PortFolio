import uniqid from 'uniqid'
import { WorkExperience } from '../../portfolio'

import './workexperience.css'

// eslint-disable-next-line react/function-component-definition
const WorkExperienceSummary = () => {
  if (!WorkExperience) return null

  return (
    <section className='section aboutsummary' id='experience'>
      <h2 className='section__title'>Work Experience</h2>
      <h3 className='section__title'>Indus Net Technologies </h3>
      <h3 className='section__title'>Sep 2022 - Feb 2024 | Kolkata </h3>
      <ul className='aboutsummary__list aboutsummary__list-item btn btn--plain'>
        {WorkExperience.map((e) => (
          <ul key={uniqid()} className='bullet-list'>
            <div className=''>{/* Symbol or icon can go here */}</div>
            <li>{e}</li>
          </ul>
        ))}
      </ul>
    </section>
  )
}

export default WorkExperienceSummary
