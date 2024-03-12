// Skills.jsx
import React from 'react';
import { ReactComponent as HtmlIcon } from '../Assets/Icons/html-5-logo-svgrepo-com.svg';
import { ReactComponent as CssIcon } from '../Assets/Icons/css-3-svgrepo-com.svg';
import { ReactComponent as JsIcon } from '../Assets/Icons/javascript-svgrepo-com.svg';
import { ReactComponent as ReactIcon } from '../Assets/Icons/react-svgrepo-com.svg';
import { ReactComponent as TailwindIcon } from '../Assets/Icons/tailwind-svgrepo-com.svg';
import { ReactComponent as FigmaIcon } from '../Assets/Icons/figma-svgrepo-com.svg';
import { ReactComponent as AdobeIcon } from '../Assets/Icons/adobe-photoshop-svgrepo-com.svg';
import '../index.css';

function Skills() {
    const skillsList = [
      { name: 'HTML', icon: <HtmlIcon className='icon' />, progress: 85 }, 
      { name: 'CSS', icon: <CssIcon className='icon' />, progress: 80 }, 
      { name: 'JavaScript', icon: <JsIcon className='icon javascript' />, progress: 60 },
      { name: 'React', icon: <ReactIcon className='icon' />, progress: 75 },
      { name: 'Tailwind', icon: <TailwindIcon className='icon' />, progress: 50 },
      { name: 'Figma', icon: <FigmaIcon className='icon' />, progress: 50 },
      { name: 'Adobe Photoshop', icon: <AdobeIcon className='icon' />, progress: 70 },
    ];
  
    return (
      <div className="skills min-h-screen">
        <h2 className='text-5xl font-bold mb-1 text-cyan-500 mt-4'>Skills</h2>
        <ul className='skill-list'>
          {skillsList.map((skill, index) => (
            <li className="skill-item" key={index}>
              {skill.icon} 
              <span>{skill.name}</span>
              <div className="progress-bar">
          <div className="progress" style={{ '--progress-percentage': `${skill.progress}%` }} >
             </div>
        </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Skills;
