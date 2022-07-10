import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_02ruj4m',
        'template_g6htmek',
        form.current,
        'ojRWEgbzuqgYVkEfD'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} delay={4}/>
          </h1>
          <p>
            Currently, I'm on the hunt for an internship. However, I'm also super interested in 
            any project ideas that you might have. Don't worry, I'm very open to working on open-source
            software, so please feel free to contact me using the form below.
          </p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea name='message' placeholder='Message'></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[39.894970, -75.033070]} zoom={13}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[39.894970, -75.033070]} />
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact;