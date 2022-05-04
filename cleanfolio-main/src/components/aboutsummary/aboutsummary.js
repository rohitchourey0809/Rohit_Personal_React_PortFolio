// import uniqid from 'uniqid'
import { aboutsummary } from '../../portfolio'
import './aboutsummary.css'

// eslint-disable-next-line react/function-component-definition
const Aboutsum = () => {
  const { aboutdescrp } = aboutsummary

  return (
    <div className='aboutdiv'>
      <h2 className='about_title'>About</h2>
      {aboutdescrp && (
        // <h4 className='about__role'>

        <p className='about__desc'>{aboutdescrp}</p>
        // </h4>
      )}
    </div>
  )
}

export default Aboutsum
