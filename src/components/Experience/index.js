import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Card from '../Card';
import './index.scss';

const cards = [
  ['High School', 'Back'],
  ['College', 'Back'],
  ['High School', 'Back'],
  ['College', 'Back'],
  ['High School', 'Back'],
  ['College', 'Back'],
  ['High School', 'Back'],
  ['College', 'Back'],
  ['High School', 'Back'],
  ['College', 'Back'],
  ['High School', 'Back'],
  ['College', 'Back'],
  ['High School', 'Back'],
  ['College', 'Back'],
]

const Experience = () => {
  const cardsRef = useRef(null)

  const onWheel = (e) => {
    let container = cardsRef.current
    let scrollPos = container.scrollLeft
    container.scrollTo({
      left: scrollPos + e.deltaY,
      behaviour: 'smooth'
    })
  }

  return (
    <div className='container experience-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} delay={4}/>
        </h1>
        <h2>
          Scroll and Hover below to find out more.
        </h2>
        <div className='card-cont' ref={cardsRef} onWheel={onWheel}>
          {
            cards.map((card, i) => (
              <React.Fragment key={`card_complex_${i}`}>
                <Card key={`card_${i}`} title={card[0]} disc={card[1]}/>
                {/* <div key={`arrow_${i}`} className='arrow'>
                  <FontAwesomeIcon icon={faArrowRight}/>
                </div> */}
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience;