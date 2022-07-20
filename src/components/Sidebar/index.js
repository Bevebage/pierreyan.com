import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './index.scss';
import { faAngleRight, faFile, faFilePdf, faPlugCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faJsSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Directory = ({ directoryName, toggleClass, toggle }) => {
  return (
    <div key={`${directoryName}_directory`} className='directory' onClick={toggle}>
      <FontAwesomeIcon key={`${directoryName}_directory_icon`} className={toggleClass} icon={faAngleRight} />
      <span key={`${directoryName}_directory_span`}> {directoryName}</span>
    </div>
  )
}

const File = ({ toPage, children, linkText }) => {
  return (
    <NavLink key={`${toPage}_file_link`} exact='true' activeclassname='active' to={toPage}>
      <span key={`${toPage}_span_pretext`}>|{children} </span>
      <span key={`${toPage}_span_text`} className='fileText'>
        {linkText}
      </span>
    </NavLink>
  )
}

const Link = ({ toPage, children, linkText }) => {
  return (
    <a key={`${toPage}_link_link`} target='_blank' rel='noreferrer' href={toPage}>
      <span key={`${toPage}_link_text`}>|{children} {linkText}</span>
    </a>
  )
}

const Sidebar = () => {
  const [navBarClass, setNavBarClass] = useState('nav-bar');

  const sidebarFileSystem = {
    'Pages': [useState('on'),
      [
        ['/', <FontAwesomeIcon icon={faJsSquare}/>, 'Home'],
        ['/about', <FontAwesomeIcon icon={faJsSquare}/>, 'About'],
        // ['/projects', <FontAwesomeIcon icon={faJsSquare}/>, 'Projects'],
        ['/experience', <FontAwesomeIcon icon={faJsSquare}/>, 'Experience'],
        ['/contact', <FontAwesomeIcon icon={faJsSquare}/>, 'Contact']
      ]
    ],
    'Files': [useState('on'),
      [
        ['/resume', <FontAwesomeIcon icon={faFilePdf}/>, 'Resume'],
        ['/transcript', <FontAwesomeIcon icon={faFilePdf}/>, 'Transcript']
      ]
    ],
    'Links': [useState('on'),
      [
        ['https://www.linkedin.com/in/pierre-yan-5625a21b6/', <FontAwesomeIcon icon={faLinkedin}/>, 'Linkedin'],
        ['https://github.com/Bevebage/', <FontAwesomeIcon icon={faGithub}/>, 'Github']
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
            <React.Fragment key={`${key}_fragment`}>
              <Directory key={key} directoryName={key} toggleClass={value[0][0]}
                toggle={() => {
                  switch (value[0][0]) {
                    case 'on':
                      value[0][1]('off');
                      break;
                    case 'off':
                      value[0][1]('on');
                      break;
                    default:
                      throw new Error()
                  }
                }}
              />
              <div key={`${key}_files`} className={`files ${value[0][0]}`}>
                {value[1].map((navLinkInfo) => (
                  <React.Fragment key={`${key}_fragment_${navLinkInfo[0]}`}>
                    {key === 'Links' ?
                    <Link key={`${key}_link_${navLinkInfo[0]}`} toPage={navLinkInfo[0]} linkText={navLinkInfo[2]}>
                      {navLinkInfo[1]}
                    </Link> 
                    :
                    <File key={`${key}_file_${navLinkInfo[0]}`} toPage={navLinkInfo[0]} linkText={navLinkInfo[2]}>
                      {navLinkInfo[1]} 
                    </File>}
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          ))
        }
        <div className='title'>
          <FontAwesomeIcon icon={faPlugCirclePlus} color='#fff' />
          <span> </span>
          Plugins
        </div>
        <div>
          <span style={{color: 'white'}}>Oops! This feature is <br/>coming soon. </span>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar;