import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import { ImageListItem } from '@material-ui/core'
// import { ImageListItemBar } from '@material-ui/core'

function ProjectContainer({ project }) {
  return (
    <div className='project' style={{ zIndex: -20,overflow: 'hidden' }}>
      <h3>{project.name}</h3>

      <div>
        <ImageListItem>
          <img
            className='project-img'
            src={`${project.Imgproject}`}
            alt={project.title}
            loading='lazy'
          />
        </ImageListItem>
      </div>

      {/* <ImageListItemBar src={project.Imgproject} /> */}
      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  )
}

export default ProjectContainer
