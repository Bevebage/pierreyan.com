import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
// eslint-disable-next-line
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [navBarClass, setNavBarClass] = useState('nav-bar');

  return (
    <div className={navBarClass}
      onMouseEnter={() => setNavBarClass('nav-bar-hover')}
      onMouseLeave={() => setNavBarClass('nav-bar')}>
      <div className='menu-icon'>
        <FontAwesomeIcon icon={faBars} color='#fff'/>
      </div>
      <nav>
        <div>
          Pages
          <NavLink exact='true' activeclassname='active' to='/'>
            Home
          </NavLink>
          <NavLink exact='true' activeclassname='active' to='/about'>
            About
          </NavLink>
          <NavLink exact='true' activeclassname='active' to='/projects'>
            Projects
          </NavLink>
          <NavLink exact='true' activeclassname='active' to='/experience'>
            Experience
          </NavLink>
          <NavLink exact='true' activeclassname='active' to='/contact'>
            Contact
          </NavLink>
          Files
          <NavLink exact='true' activeclassname='active' to='/resume'>
            Resume
          </NavLink>
        </div>
      </nav>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pierre-yan-5625a21b6/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/Bevebage/'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;