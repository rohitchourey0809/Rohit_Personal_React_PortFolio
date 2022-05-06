import { aboutsummary } from '../../portfolio'

import './Aboutsummary.css'

// eslint-disable-next-line react/function-component-definition
const Aboutsummary = () => {
  if (aboutsummary.length) return null
  const { aboutdescrp } = aboutsummary

  return (
    <section className='section about' id='about'>
      <ul className='section__list'>
        <h2 className='section__title'>ABOUT</h2>
        <li>
          <p className='section__desc'>{aboutdescrp && aboutdescrp}</p>
        </li>
      </ul>
    </section>
  )
}

export default Aboutsummary
