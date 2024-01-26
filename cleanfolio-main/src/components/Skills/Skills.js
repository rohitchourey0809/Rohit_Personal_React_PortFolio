import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

// eslint-disable-next-line react/function-component-definition
const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((e) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {e}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
