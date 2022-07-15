import { faChalkboardTeacher, faDesktop, faHospital, faMicroscope, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useEffect, useRef, useState } from 'react';

let experiences = [
  [<FontAwesomeIcon icon={faHospital}/>, '2002', 'Strasbourg, France', 'I was born! My parents were in the middle of a 5 year trip in France obtaining higher degrees. I think this is where I got my love of bread from.'],
  [<FontAwesomeIcon icon={faSchool}/>, '2016 - 2020', 'Haddonfield Memorial High School', 'Graduated from this place, that should be an achievement enough. Joking aside, during my time here I won the Congressional App Challenge with the Robotics team, became Captain of the Varsity Tennis Team, and made it on the Lehigh ARML team.'],
  [<FontAwesomeIcon icon={faChalkboardTeacher}/>, '2018-2020', 'HuaXia Chinese School', 'Worked as a competitive math teacher at my local chinese school. Worked with a class of 3-5th graders once a week to prepare them for middle school math competitions such as MATHCOUNTS.'],
  [<FontAwesomeIcon icon={faMicroscope}/>, '2018 - 2019', 'University of Pennsylvania', 'Worked with the Cremins Lab at the University of Pennsylvania in the study of epigenetics. Worked on an independent project using Python to computationally discover the association between repeating motifs and the formation of gene loops.'],
  [<FontAwesomeIcon icon={faUniversity}/>, '2020 - 2024', 'Harvard University', 'Majoring in Computer Science / Molecular and Cellular Biology. Currently a 3.82 GPA. Currently involved with the Undergraduate Robotics Club and the treasurer of the Skate Club.'],
  [<FontAwesomeIcon icon={faDesktop}/>, '2021', 'DeepMap Inc', "Developed a three dimensional map profiling tool as a software intern. The startup got obtained by Nvidia. I didn't have any internal stock :(."],
]

const pixelHeight = 0.5
const pixelWidth = 0.2
const numPixels = 400

const Pixel = ({ pos }) => {
  return (
    <div className='pixel' style={{
      left: `${pos[0]}vw`,
      top: `${pos[1]}vh`,
      height: `${pixelHeight}vh`,
      width: `${pixelWidth}vw`,
    }}/>
  )
}

const Experience = () => {
  const [pixelPoss, setPixelPoss] = useState(
    Array.from({length: numPixels}, () => [Math.random() * 100, Math.random() * -105])
  )
  const timelineRef = useRef(null)

  useEffect(() => {
    let pixelVels = Array.from({length: numPixels}, () => [Math.random() * 0.4 - 0.2, 0])
    const timelineTop = 2
    const timelineLeft = 31.5
    const timelineRight = 92
    const midLine = (timelineLeft + timelineRight) / 2

    const update = (poss) => {
      let newPixelPoss = []
      poss.forEach((pos, i) => {
        if (timelineLeft <= pos[0]+pixelWidth && pos[0] <= timelineRight && pos[1]+pixelHeight >= timelineTop) {
          if (pos[1] <= timelineTop) {
            pixelVels[i] = [pos[0] < midLine ? -0.1 * Math.random() - 0 : 0.1 * Math.random() + 0, 0]
          } else {
            if (pos[0] < midLine) {
              pixelVels[i] = [-Math.abs(pixelVels[i][0]), pixelVels[i][1]]
              pos[0] = timelineLeft - pixelWidth - 0.01
            } else {
              pixelVels[i] = [Math.abs(pixelVels[i][0]), pixelVels[i][1]]
              pos[0] = timelineRight + 0.01
            }
          }
        } else {
          pixelVels[i][0] *= 0.99
          if (Math.abs(pixelVels[i][0]) < 0.0001) {
            pixelVels[i][0] = 0
          }
          pixelVels[i][1] *= 0.5
          pixelVels[i][1] += 0.1
          if (1.9999 < pixelVels[i][1]) {
            pixelVels = 2
          }
        }

        if (100 < pos[1]) {
          pos = [Math.random() * 100 + pixelVels[i][0], -5 + pixelVels[i][1]]
          pixelVels[i] = [0.1 * Math.random() - 0.05, 0]
        } else {
          pos = [pos[0] + pixelVels[i][0], pos[1] + pixelVels[i][1]]
        }
        newPixelPoss.push(pos)
      })
      return newPixelPoss
    }

    setInterval(() => setPixelPoss(poss => update(poss)), 20)
  }, [])

  return (
    <div className='container experience-page'>
      <div className='water-cont'>
        {
          pixelPoss.map((pos, i) => (
            <Pixel key={`pixel_${i}`} pos={pos}/>
          ))
        }
      </div>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} delay={4}/>
        </h1>
      </div>
      <div className='timeline-cont' ref={timelineRef}>
        <span className="border tl">border-top-left</span>
        <span className="border tr">border-top-right</span>
        <span className="border bl">border-bottom-left</span>
        <span className="border br">border-bottom-right</span>
        <SimpleBar>
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
    </div>
  )
}

export default Experience;