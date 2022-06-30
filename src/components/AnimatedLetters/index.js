import Letter from './letter';
import './index.scss';

const AnimatedLetters = ({ strArray, delay }) => {
  return (
    <span>
      {
        strArray.map((char, i) => (
          <Letter key={char + i} letter={char} delay={delay+i} />
        ))
      }
    </span>
  )
}

export default AnimatedLetters;