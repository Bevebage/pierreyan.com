import { AnimatePresence, motion } from 'framer-motion';

import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const projects = [
  {title: 'Test', subtitle: 'Subtitle'}
]

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className='container projects-page'>
      <div className='text-zone'>
        <h1>
        <AnimatedLetters strArray={['C', 'u', 'r', 'r', 'e', 'n', 't', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']} delay={4}/>
        </h1>
          <div className='project-cont'>
          {
            projects.map(project => (
              <motion.div layoutId={project.id} onClick={() => setSelectedId(project.id)}>
                <motion.h5>{project.subtitle}</motion.h5>
                <motion.h2>{project.title}</motion.h2>
              </motion.div>
            ))
          }
          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                {/* <motion.h5>{project.subtitle}</motion.h5>
                <motion.h2>{project.title}</motion.h2> */}
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Projects;

// import React, { useRef, useState } from 'react';
// import AnimatedLetters from '../AnimatedLetters';
// import Card from '../Card';
// import './index.scss';

// const cards = [
//   ['High School', 'Back'],
//   ['College', 'Back'],
//   ['High School', 'Back'],
//   ['College', 'Back'],
//   ['High School', 'Back'],
//   ['College', 'Back'],
//   ['High School', 'Back'],
//   ['College', 'Back'],
//   ['High School', 'Back'],
//   ['College', 'Back'],
//   ['High School', 'Back'],
//   ['College', 'Back'],
//   ['High School', 'Back'],
//   ['College', 'Back'],
// ]

// const Experience = () => {
//   const cardsRef = useRef(null)
//   const [hoverIcon, setHoverIcon] = useState('vis')

//   const onWheel = (e) => {
//     if (hoverIcon === 'vis') {
//       setHoverIcon('invis')
//     }

//     let container = cardsRef.current
//     let scrollPos = container.scrollLeft
//     container.scrollTo({
//       left: scrollPos + e.deltaY,
//       behaviour: 'smooth'
//     })
//   }

//   return (
//     <div className='container experience-page'>
//       <div className='text-zone'>
//         <h1>
//           <AnimatedLetters strArray={['M', 'y', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']} delay={4}/>
//         </h1>
//         <h2>
//           <span>Scroll and Hover below to find out more.&nbsp;&nbsp;&nbsp;</span>
//           <div className={`icon-scroll ${hoverIcon}`}></div>
//         </h2>
//         <div className='card-cont' ref={cardsRef} onWheel={onWheel}>
//           {
//             cards.map((card, i) => (
//               <React.Fragment key={`card_complex_${i}`}>
//                 <Card key={`card_${i}`} title={card[0]} disc={card[1]}/>
//               </React.Fragment>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Experience;