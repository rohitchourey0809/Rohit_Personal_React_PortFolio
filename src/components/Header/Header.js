import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

// eslint-disable-next-line react/function-component-definition
const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {' '}
        <img
          src='https://i.pinimg.com/originals/48/8c/8b/488c8bf486bd5e36e4bec8b99b054e66.jpg'
          alt='title'
          style={{ width: '5%', height: '100%' }}
        />
        <h3>
          {homepage ? (
            <a href={homepage} className='link'>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
      </div>

      <div>
        {' '}
        <Navbar />
      </div>
    </header>
  )
}

export default Header
