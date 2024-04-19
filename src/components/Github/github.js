import uniqid from 'uniqid'
import { aboutsummary } from '../../portfolio'

import './github.css'

// eslint-disable-next-line react/function-component-definition
const GitHub = () => {
  if (!aboutsummary.length) return null
  return (
    <section className='section aboutsummary' id='abouts'>
      <h2 className='section__title'>GITHUB STATS</h2>
      <ul className='aboutsummary__list'>
        {/* <h3 className='center'></h3> */}

        <p className='center'>
          <a href='https://github.com/rohitchourey0809' aria-label="Save">
            <img
              alt=''
              height='180em'
              src='https://github-readme-streak-stats.herokuapp.com?user=rohitchourey0809&theme=github-dark-blue&date_format=j%20M%5B%20Y%5D'
            />
            <img
              alt=''
              height='180em'
              src='https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=rohitchourey0809&layout=compact&langs_count=8&theme=algolia'
            />
          </a>
          <img
            alt=''
            height='180em'
            src='https://github-readme-stats-eight-theta.vercel.app/api?username=rohitchourey0809&show_icons=true&theme=algolia&include_all_commits=true&count_private=true'
          />
        </p>
        {/* {aboutsummary.map((e) => (
          <li key={uniqid()} className='aboutsummary__list-item btn btn--plain'>
            {e}
          </li>
        ))} */}
      </ul>
    </section>
  )
}

export default GitHub
