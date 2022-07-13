import { useState } from 'react';
import './index.scss';

const Card = ({ title, disc }) => {
  const [side, setSide] = useState('forwards')

  return (
    <div className='card'>
      <div className={`content ${side}`} onMouseEnter={() => {setSide(
        {'forwards': 'backwards',
        'backwards': 'forwards'}[side]
      )}}>
        <div className='front'>
          <div className='inner'>
            <h2>{title}</h2>
          </div>
        </div>
        <div className='back'>
          <div className='inner'>
            {disc}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card