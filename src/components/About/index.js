import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} delay={4}/>
        </h1>
        <p>
          Oops! This page is still a work in progress
        </p>
      </div>
    </div>
  )
}

export default About;