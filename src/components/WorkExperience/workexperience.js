import uniqid from 'uniqid'
import { WorkExperience } from '../../portfolio'


// eslint-disable-next-line react/function-component-definition
const WorkExperienceSummary = () => {
  if (!WorkExperience) return null

  return (
    <section className='section aboutsummary' id='experience'>
      <h2 className='section__title'>Work Experience</h2>
      <h3 className='section__title'>Indus Net Technologies </h3>
      <h3 className='section__title'>Sep 2022 - Feb 2024 | Kolkata </h3>
      <ul className='aboutsummary__list aboutsummary__list-item btn btn--plain experience'>
        {WorkExperience.map((e) => (
          <div key={uniqid()} className='bullet-list'>
            <li>{e}</li>
          </div>
        ))}
      </ul>
    </section>
  )
}

export default WorkExperienceSummary
