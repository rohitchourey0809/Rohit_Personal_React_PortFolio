import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { home } from '../../portfolio'
import './Home.css'
import IMAGE from './ResumeProfilePhotos.png'

function Home() {
  const { name, role, resume, social } = home
  const handleResumeClick = () => {
    // Create a hidden link element
    // const modifiedResumeLink ='https://drive.google.com/file/d/1gi1__RkKsDERMiy3fk12V5BDZET0vfm4/view'

    const link = document.createElement('a')
    link.href = resume
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.download = 'Resumerohitchourey_fw15_206.pdf' // Specify the desired filename

    // Trigger a click event on the link to initiate the download
    link.click()

    // Clean up by removing the link from the DOM
    // Remove the link from the DOM after a short delay to allow the download to start
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link)
      }
    }, 1000)
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
              // <a href={resume} target='_blank' rel='noreferrer'>
                <span
                  type='button'
                  className='btn btn--outline'
                  onClick={handleResumeClick}
                  aria-hidden='true'
                >
                  Resume
                </span>
              // </a>
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
