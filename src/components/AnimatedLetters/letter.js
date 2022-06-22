import { useState } from "react";
import './letter.scss';

const Letter = ({ letter, delay }) => {
  const [animateClass, setAnimateClass] = useState('text-animate');

  const startBounce = () => {
    if (animateClass === 'text-animate-hover') {
      setAnimateClass('text-animate-hover animate__animated animate__rubberBand');
    }
  }

  return (
    <span key={letter + delay} className={`color-hover ${animateClass} _${delay}`}
      onAnimationEnd={() => {setAnimateClass('text-animate-hover')}}
      onMouseEnter={() => {startBounce()}}
      aria-hidden='true'>
      {letter}
    </span>
  )
}

export default Letter;