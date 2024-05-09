import React from 'react';
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
    const skillsList = [
        { name: 'HTML', icon: <HtmlIcon className='icon' /> },
        { name: 'CSS', icon: <CssIcon className='icon' /> },
        { name: 'JavaScript', icon: <JsIcon className='icon javascript' /> },
        { name: 'React', icon: <ReactIcon className='icon' /> },
        { name: 'Next.js', icon: <NextIcon className='icon' /> },
        { name: 'Tailwind', icon: <TailwindIcon className='icon' /> },
        { name: 'Shadcn/ui', icon: <ShadcnIcon className='icon' /> },
        { name: 'Figma', icon: <FigmaIcon className='icon' /> },
        { name: 'Adobe Photoshop', icon: <AdobeIcon className='icon' /> },
    ];

    return (
        <div className='skills'>
            <div className="skills__container">
                <h2>Tech Stack</h2>
                <ul className='skill-list'>
                    {skillsList.map((skill, index) => (
                        <li className="skill-item" key={index}>
                            {skill.icon}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
