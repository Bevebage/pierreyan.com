import './index.scss';

const HeadShot = () => {
  return (
    <div className='image-container'>
      <img src={`${process.env.PUBLIC_URL}/Portrait.png`} className='headshot' alt='This should be my headshot' />
    </div>
  )
}

export default HeadShot;