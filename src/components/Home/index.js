import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { RoughNotation } from 'react-rough-notation';
import './index.scss';
// import HeadShot from '../HeadShot';

const Home = () => {
  const firstLine = ['H', 'i', ',']
  const secondLine_1 = ['I', '\'', 'm', ' ']
  const secondLine_2 = ['P', 'i', 'e', 'r', 'r', 'e', ',']
  const thirdLine_1 = ['3', 'r', 'd', ' ', 'y', 'e', 'a', 'r', ' ']
  const thirdLine_2 = ['s', 't', 'u', 'd', 'e', 'n', 't']
  const thirdLine_3 = [' ', 'a', 't']
  const fourthLine = ['H', 'a', 'r', 'v', 'a', 'r', 'd', ' ', 'U', 'n', 'i', 'v', 'e', 'r', 's', 'i', 't', 'y']

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters strArray={firstLine} delay={4} />
          <br />
          <AnimatedLetters strArray={secondLine_1} delay={7} />
          <RoughNotation type='highlight' show={true} color='#A7C4B5' animationDelay={1000} animationDuration={1000}>
            <AnimatedLetters strArray={secondLine_2} delay={10} />
          </RoughNotation>
          <br />
          <AnimatedLetters strArray={thirdLine_1} delay={18} />
          <RoughNotation type='underline' show={true} color='#000' strokeWidth={3} animationDelay={2700} animationDuration={700}>
            <AnimatedLetters strArray={thirdLine_2} delay={27} />
          </RoughNotation>
          <AnimatedLetters strArray={thirdLine_3} delay={34} />
          <br />
          <RoughNotation type='highlight' show={true} color='#990000' animationDelay={3700} animationDuration={1800}>
            <AnimatedLetters strArray={fourthLine} delay={37} />
          </RoughNotation>
        </h1>
        <h2>
          Student / Programmer / Inventor
        </h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      {/* <HeadShot /> */}
    </div>
  )
}

export default Home;