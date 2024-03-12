import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { home } from '../../portfolio'
import './Home.css'
import IMAGE from './ResumeProfilePhotos.png'

function Home() {
  // https://drive.google.com/file/d/1skNCc6CmCvn1EcYtW5F4IduMR243L6cm/view?usp=drive_link
  const { name, role, resume, social } = home
  const handleResumeClick = () => {
    // Open the download link in a new tab
    const downloadLink =
      'https://drive.google.com/uc?id=1skNCc6CmCvn1EcYtW5F4IduMR243L6cm'
    // window.open(downloadLink, '_blank')
    window.location.href = downloadLink
  }

  return (
    <div className='section about center'>
      <ul className='home__stack '>
        <li className='home__stack-item'>
          {' '}
          <div className='imagediv'>
            <img src={IMAGE} alt='Avatar' className='avatar center' />
          </div>
        </li>
        <li className='home__stack-item'>
          {name && (
            <h1 className='home__struct'>
              Hi, I am <span className='about__name '>{name}.</span>
            </h1>
          )}
        </li>

        <li className='home__stack-item'>
          {' '}
          {role && <h2 className='about__role center'>A {role}.</h2>}
        </li>
        {/* <h2 className='about__title'>ABOUT</h2> */}
        {/* <p className='about__desc'>{description && description}</p> */}

        <li className='home__stack-item'>
          <div className='about__contact'>
            {resume && (
              <a href={resume} target='_blank' rel='noreferrer'>
                <span
                  type='button'
                  className='btn btn--outline'
                  onClick={handleResumeClick}
                  aria-hidden='true'
                >
                  Resume
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Home
