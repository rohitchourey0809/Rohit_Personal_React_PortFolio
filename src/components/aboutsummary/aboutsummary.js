import uniqid from 'uniqid'
import { aboutsummary } from '../../portfolio'

// eslint-disable-next-line react/function-component-definition
const AboutSummary = () => {
  if (!aboutsummary.length) return null
  return (
    <section className='section aboutsummary' id='abouts'>
      <h2 className='section__title'>About</h2>
      <ul className='aboutsummary__list aboutsummary__list-item btn btn--plain'>
        {aboutsummary.map((e) => (
          <li key={uniqid()} className=''>
            {e}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AboutSummary
