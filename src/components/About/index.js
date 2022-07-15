import { faCss3, faGolang, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} delay={4}/>
        </h1>
        <h2>
          I'm a third year student at Harvard University, I'm studying Computer Science / Molecular and Cellular Biology.
        </h2>
        <p>
        I've been self-studying programming since I was 13. Having fun with my friends in the middle school library, 
        we slowly learned about Java and built our own Minecraft mods. We built the coolest TNT blocks you could think of. <br/><br/>
        In high school, I was given the opportunity to work at the University of Pennsylvania as a bioinformatics intern 
        (my first introduction to professional code). Ever since then, my horizons have expanded. <br/><br/>
        Now, attending Harvard University, I haven't forgotten about where I've come from. I'm studying Computer Science and Molecular and Cellular Biology to pursue bioinformatics. 
        In addition, I'm still playing Minecraft (lol). I've vastly expanded my coding skill and am continuing to learn. <br/><br/>
        I'm interested in bioinfomatics and the analysis of the genome. Due to rapidly advancing technology, I believe that bioinformatics will become a major player in research. 
        However, I am also interested in both fields of Computer Science and Biology in their own right.
        </p>
      </div>
      <div className='stars-cont'>
        <div id='stars'/>
        <div id='stars2'/>
        <div id='stars3'/>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGolang} color="#EC4D28" />
            </div>
          </div>
        </div>
        <div className='classes-cont'>
          <h1>
            <AnimatedLetters strArray={['C', 'l', 'a', 's', 's', 'e', 's', ':']} delay={10}/>
          </h1>
          <ul>
            <li>Math 25a: Theorical Linear Algebra</li>
            <li>Math 25b: Theorical Multivariate Calculus and Real Analysis</li>
            <li>CS51: Abstraction and Design in Computation</li>
            <li>CS61: Systems Programming and Machine Organization</li>
            <li>CS124: Data Structures and Algorithms</li>
            <li>CS153: Compilers</li>
            <li>CS181: Machine Learning</li>
            <li>LS1a: Introductary Chemistry, Molecular Biology, and Cell Biology</li>
            <li>LS1b: Introductary Genetics, Genomics, and Evolution</li>
            <li>MCB 60: Cellular Biology and Molecular Medicine</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;