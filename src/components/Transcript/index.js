import './index.scss';
import { ReactComponent as TranscriptSVG } from '../../assets/svgs/HU_FAS_TSRPT.svg';
import AnimatedLetters from '../AnimatedLetters';

const Transcript = () => {
  return (
    <div className='container transcript-page'>
      {/* <h1>
        <AnimatedLetters strArray={['M', 'y', ' ', 'T', 'r', 'a', 'n', 's', 'c', 'r', 'i', 'p', 't']} delay={4}/>
      </h1> */}
      <div className='transcript'>
        <TranscriptSVG/>
      </div>
    </div>
  )
}

export default Transcript;