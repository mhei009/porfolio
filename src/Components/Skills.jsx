import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../Animation - 1714858866071.json'; 
import { ReactComponent as HtmlIcon } from '../Assets/Icons/html-5-logo-svgrepo-com.svg';
import { ReactComponent as CssIcon } from '../Assets/Icons/css-3-svgrepo-com.svg';
import { ReactComponent as JsIcon } from '../Assets/Icons/javascript-svgrepo-com.svg';
import { ReactComponent as ReactIcon } from '../Assets/Icons/react-svgrepo-com.svg';
import { ReactComponent as TailwindIcon } from '../Assets/Icons/tailwind-svgrepo-com.svg';
import { ReactComponent as FigmaIcon } from '../Assets/Icons/figma-svgrepo-com.svg';
import { ReactComponent as AdobeIcon } from '../Assets/Icons/adobe-photoshop-svgrepo-com.svg';
import { ReactComponent as NextIcon } from '../Assets/next.svg';
import { ReactComponent as ShadcnIcon } from '../Assets/shadcn-ui-seeklogo.svg';
import '../index.css';

function Skills() {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById('animation-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData // Your animation JSON object
        });
    }, []); 
  

    const skillsList = [
        { name: 'HTML', icon: <HtmlIcon className='icon' />, progress: 85 },
        { name: 'CSS', icon: <CssIcon className='icon' />, progress: 80 },
        { name: 'JavaScript', icon: <JsIcon className='icon javascript' />, progress: 80 },
        { name: 'React', icon: <ReactIcon className='icon' />, progress: 75 },
        { name: 'Next.js', icon: <NextIcon className='icon' />, progress: 50 },
        { name: 'Tailwind', icon: <TailwindIcon className='icon' />, progress: 50 },
        { name: 'Shadcn/ui', icon: <ShadcnIcon className='icon' />, progress: 40 },
        { name: 'Figma', icon: <FigmaIcon className='icon' />, progress: 50 },
        { name: 'Adobe Photoshop', icon: <AdobeIcon className='icon' />, progress: 70 },
    ];

    return (
      <div className='skills'>
        <div className="skills__container">
            <h2 className='text-3xl font-bold mb-5 mt-4'>Tech Stack</h2>
            <ul className='skill-list'>
                {skillsList.map((skill, index) => (
                    <li className="skill-item" key={index}>
                        {skill.icon}
                        <span>{skill.name}</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ '--progress-percentage': `${skill.progress}%` }} >
                            <div id="animation-container" className="animation-container">
                            </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div></div>
    );
}

export default Skills;
