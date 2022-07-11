import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Experience = () => {
  return (
    <div className='container experience-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} delay={4}/>
          </h1>
          <p>
          Oops! This page is still a work in progress
        </p>
        </div>
      </div>
  )
}

export default Experience;