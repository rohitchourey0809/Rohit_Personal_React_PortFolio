import uniqid from 'uniqid'
import { aboutsummary,WorkExperience} from '../../portfolio'


import './aboutsummary.css'

// eslint-disable-next-line react/function-component-definition
const AboutSummary = () => {
  if (!aboutsummary.length) return null
  if (!WorkExperience) return null

  return (
  <>
    <section className='section aboutsummary' id='aboutsummary'>
      <h2 className='section__title'>About</h2>
      <ul className='aboutsummary__list'>
        {aboutsummary.map((e) => (
          <li key={uniqid()} className='aboutsummary__list-item btn btn--plain'>
            {e}
          </li>
        ))}
      </ul>
    </section>
      <section className='section aboutsummary' id='aboutsummary1'>
      <h2 className='section__title aboutsummary1'>Work Experience</h2>
      <ul className='aboutsummary__list aboutsummary__list-item btn btn--plain '>
        {WorkExperience.map((e) => (
          <ul key={uniqid()} className="bullet-list">
         <div className=''>{/* Symbol or icon can go here */}</div>
          <li>{e}</li>
          </ul>
        ))}
      </ul>
    </section>
  </>
  )
}

export default AboutSummary
