import './index.scss';
import { ReactComponent as ResumeSVG } from '../../assets/svgs/Resume (7-18-2022).svg';


const Resume = () => {
  return (
    <div className='container resume-page'>
      {/* <h1>
        <AnimatedLetters strArray={['M', 'y', ' ', 'T', 'r', 'a', 'n', 's', 'c', 'r', 'i', 'p', 't']} delay={4}/>
      </h1> */}
      <div className='resume'>
        <ResumeSVG/>
      </div>
    </div>
  )
}

export default Resume;