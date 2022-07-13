import { faMicroscope, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Experience = () => {
  return (
    <div className='container experience-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} delay={4}/>
        </h1>
      </div>
      <div className='timeline'>
        <div className='timeline__event timeline__event--type3 _1'>
          <div className='timeline__event__icon'>
            <FontAwesomeIcon icon={faMicroscope}/>
          </div>
          <div className='timeline__event__date'>
            2017 - 2018
          </div>
          <div className='timeline__event__content'>
            <div className='timeline__event__title'>
              Associate Researcher
            </div>
            <div className='timeline__event__description'>
              <p>
              Worked on a independent project to discover the association between epigenetic motifs and gene looping.
              </p>
            </div>
          </div>
        </div>
        <div className='timeline__event timeline__event--type2 _2'>
          <div className='timeline__event__icon'>
            <FontAwesomeIcon icon={faSchool}/>
          </div>
          <div className='timeline__event__date'>
            2016 - 2020
          </div>
          <div className='timeline__event__content'>
            <div className='timeline__event__title'>
              Haddonfield Memorial High School
            </div>
            <div className='timeline__event__description'>
              <p>
              Graduated from this place, that should be an achievement enough.
              </p>
            </div>
          </div>
        </div>
        <div className='timeline__event timeline__event--type1 _3'>
          <div className='timeline__event__icon'>
            <FontAwesomeIcon icon={faUniversity}/>
          </div>
          <div className='timeline__event__date'>
            2020 - 2024
          </div>
          <div className='timeline__event__content'>
            <div className='timeline__event__title'>
              Harvard University
            </div>
            <div className='timeline__event__description'>
              <p>
              Majoring in Computer Science / Molecular and Cellular Biology. Currently a 3.82 GPA.
              </p>
            </div>
          </div>
        </div>
        <div className='timeline__event timeline__event--type3 _4'>
          <div className='timeline__event__icon'>
            <FontAwesomeIcon icon={faMicroscope}/>
          </div>
          <div className='timeline__event__date'>
            2017 - 2018
          </div>
          <div className='timeline__event__content'>
            <div className='timeline__event__title'>
              Associate Researcher
            </div>
            <div className='timeline__event__description'>
              <p>
              Worked on a independent project to discover the association between epigenetic motifs and gene looping.
              </p>
            </div>
          </div>
        </div>
        <div className='timeline__event timeline__event--type2 _5'>
          <div className='timeline__event__icon'>
            <FontAwesomeIcon icon={faSchool}/>
          </div>
          <div className='timeline__event__date'>
            2016 - 2020
          </div>
          <div className='timeline__event__content'>
            <div className='timeline__event__title'>
              Haddonfield Memorial High School
            </div>
            <div className='timeline__event__description'>
              <p>
              Graduated from this place, that should be an achievement enough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;