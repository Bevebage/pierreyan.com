import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Projects = () => {
  return (
    <div className='container projects-page'>
      <div className='text-zone'>
        <h1>
        <AnimatedLetters strArray={['C', 'u', 'r', 'r', 'e', 'n', 't', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']} delay={4}/>
        </h1>
      </div>
    </div>
  )
}

export default Projects;