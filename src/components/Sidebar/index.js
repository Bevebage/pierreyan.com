import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import { faAngleRight, faFile, faFilePdf, faPlugCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faJsSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Directory = ({ directoryName }) => {
  return (
    <div className='directory'>
      <FontAwesomeIcon icon={faAngleRight} />
      <span> </span>
      {directoryName}
    </div>
  )
}

const File = ({ toPage, children, linkText }) => {
  return (
    <NavLink exact='true' activeclassname='active' to={toPage}>
      |{children}
      <span> </span>
      {linkText}
    </NavLink>
  )
}

const Link = ({ toPage, children, linkText }) => {
  return (
    <a target='_blank' rel='noreferrer' href={toPage}>
      |{children}
      <span> </span>
      {linkText}
    </a>
  )
}

const Sidebar = () => {
  const [navBarClass, setNavBarClass] = useState('nav-bar');

  const sidebarFileSystem = {
    'Pages': [
      ['/', <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e'/>, 'Home'],
      ['/about', <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e'/>, 'About'],
      ['/projects', <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e'/>, 'Projects'],
      ['/experience', <FontAwesomeIcon icon={faJsSquare} color ='#4d4d4e'/>, 'Experience'],
      ['/contact', <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e'/>, 'Contact']
    ],
    'Files': [
      ['/resume', <FontAwesomeIcon icon={faFilePdf} color='4d4d4e'/>, 'Resume'],
      ['/transcript', <FontAwesomeIcon icon={faFilePdf} color='4d4d4e'/>, 'Transcript']
    ],
    'Links': [
      ['https://www.linkedin.com/in/pierre-yan-5625a21b6/', <FontAwesomeIcon icon={faLinkedin} color='4d4d4e'/>, 'Linkedin'],
      ['https://github.com/Bevebage/', <FontAwesomeIcon icon={faGithub} color='4d4d4e'/>, 'Github']
    ]
  }

  return (
    <div className={navBarClass}
      onMouseEnter={() => setNavBarClass('nav-bar-hover')}
      onMouseLeave={() => setNavBarClass('nav-bar')}>
      <div className='label'>
        &lt;Sidebar /&gt;
      </div>
      <nav>
        <div className='title'>
          <FontAwesomeIcon icon={faFile} color='#fff' />
          <span> </span>
          File Directory
        </div>
        {
          Object.entries(sidebarFileSystem).map(([key, value]) => (
            <>
              <Directory directoryName={key} />
              <div className='files'>
                {value.map((navLinkInfo, i) => (
                  <>
                    {key === 'Links' ?
                    <Link key={i} toPage={navLinkInfo[0]} linkText={navLinkInfo[2]}>
                      {navLinkInfo[1]}
                    </Link> :
                    <File key={i} toPage={navLinkInfo[0]} linkText={navLinkInfo[2]}>
                      {navLinkInfo[1]}
                    </File>}
                  </>
                ))}
              </div>
            </>
          ))
        }
        <div className='title'>
          <FontAwesomeIcon icon={faPlugCirclePlus} color='#fff' />
          <span> </span>
          Plugins
        </div>
      </nav>
    </div>
  )
}

export default Sidebar;