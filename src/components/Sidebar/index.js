import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import { faAngleRight, faFile, faFilePdf, faPlugCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faJsSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Directory = ({ directoryName, toggleClass, toggle }) => {
  return (
    <div className='directory' onClick={toggle}>
      <FontAwesomeIcon className={toggleClass} icon={faAngleRight} />
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
    'Pages': [useState('on'),
      [
        ['/', <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e'/>, 'Home'],
        ['/about', <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e'/>, 'About'],
        ['/projects', <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e'/>, 'Projects'],
        ['/experience', <FontAwesomeIcon icon={faJsSquare} color ='#4d4d4e'/>, 'Experience'],
        ['/contact', <FontAwesomeIcon icon={faJsSquare} color='#4d4d4e'/>, 'Contact']
      ]
    ],
    'Files': [useState('on'),
      [
        ['/resume', <FontAwesomeIcon icon={faFilePdf} color='4d4d4e'/>, 'Resume'],
        ['/transcript', <FontAwesomeIcon icon={faFilePdf} color='4d4d4e'/>, 'Transcript']
      ]
    ],
    'Links': [useState('on'),
      [
        ['https://www.linkedin.com/in/pierre-yan-5625a21b6/', <FontAwesomeIcon icon={faLinkedin} color='4d4d4e'/>, 'Linkedin'],
        ['https://github.com/Bevebage/', <FontAwesomeIcon icon={faGithub} color='4d4d4e'/>, 'Github']
      ]
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
              <Directory directoryName={key} toggleClass={value[0][0]}
                toggle={() => {
                  if (value[0][0] === 'on') {
                    value[0][1]('off')
                  } else {
                    value[0][1]('on')
                  }
                }}
              />
              <div className={`files ${value[0][0]}`}>
                {value[1].map((navLinkInfo, i) => (
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