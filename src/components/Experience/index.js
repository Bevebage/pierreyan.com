import { faChalkboardTeacher, faDesktop, faHospital, faMicroscope, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

let experiences = [
  [<FontAwesomeIcon icon={faHospital}/>, '2002', 'Strasbourg, France', 'I was born! My parents were in the middle of a 5 year trip in France obtaining higher degrees. I think this is where I got my love of bread from.'],
  [<FontAwesomeIcon icon={faSchool}/>, '2016 - 2020', 'Haddonfield Memorial High School', 'Graduated from this place, that should be an achievement enough. Joking aside, during my time here I won the Congressional App Challenge with the Robotics team, became Captain of the Varsity Tennis Team, and made it on the Lehigh ARML team.'],
  [<FontAwesomeIcon icon={faChalkboardTeacher}/>, '2018-2020', 'HuaXia Chinese School', 'Worked as a competitive math teacher at my local chinese school. Worked with a class of 3-5th graders once a week to prepare them for middle school math competitions such as MATHCOUNTS.'],
  [<FontAwesomeIcon icon={faMicroscope}/>, '2018 - 2019', 'University of Pennsylvania', 'Worked with the Cremins Lab at the University of Pennsylvania in the study of epigenetics. Worked on an independent project using Python to computationally discover the association between repeating motifs and the formation of gene loops.'],
  [<FontAwesomeIcon icon={faUniversity}/>, '2020 - 2024', 'Harvard University', 'Majoring in Computer Science / Molecular and Cellular Biology. Currently a 3.82 GPA. Currently involved with the Undergraduate Robotics Club and the treasurer of the Skate Club.'],
  [<FontAwesomeIcon icon={faDesktop}/>, '2021', 'DeepMap Inc', "Developed a three dimensional map profiling tool as a software intern. The startup got obtained by Nvidia. I didn't have any internal stock :(."],
]

const Experience = () => {
  return (
    <div className='container experience-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} delay={4}/>
        </h1>
      </div>
      <SimpleBar  >
        <div className='wrapper'>
          <div className='timeline'>
            {
              experiences.map((experience, i) => (
                <div key={`experience_${i}`} className={`timeline__event timeline__event--type${i%5+1} _${i}`}>
                  <div className='timeline__event__icon'>
                    {experience[0]}
                  </div>
                  <div className='timeline__event__date'>
                    {experience[1]}
                  </div>
                  <div className='timeline__event__content'>
                    <div className='timeline__event__title'>
                      {experience[2]}
                    </div>
                    <div className='timeline__event__description'>
                      <p>
                      {experience[3]}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </SimpleBar>
    </div>
  )
}

export default Experience;