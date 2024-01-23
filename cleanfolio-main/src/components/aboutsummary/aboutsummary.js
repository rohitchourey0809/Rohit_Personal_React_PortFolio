import uniqid from 'uniqid'
import { aboutsummary} from '../../portfolio'

import './aboutsummary.css'

// eslint-disable-next-line react/function-component-definition
const AboutSummary = () => {
  if (!aboutsummary.length) return null

  return (
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
  )
}

export default AboutSummary
