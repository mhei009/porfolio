import React from 'react';
import { ReactSVG } from 'react-svg';
import BriefcaseOutline from '../Assets/Icons/briefcase-outline.svg'; 
import video from "../Assets/white.mp4"
import GithubIcon from '../Assets/Icons/github-svgrepo-com.svg';
import LinkedinIcon from '../Assets/Icons/linkedin-svgrepo-com.svg';
import EmailIcon from '../Assets/Icons/email-message-svgrepo-com.svg';
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

const LandingPage = () => {
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
    <>
      <section className="landingpage__container">
        <video autoPlay muted loop className="hero">
          <source src={video} type="video/mp4" />
        </video>

        <div className='landingpage__content'>  
          <div className='header__container'>   
            <h1 className='header__h1'>Heidi Espiritu</h1>
            <div className='header__small'><p className='header__p'><span>☙ ⌗Front-end developer ❧</span></p></div>
          </div>
          <div className='introduction'>
          <h2 className='landingpage__h2'>Based in Stockholm, Sweden. </h2>
          <p className='landingpage__p'>I'm all about creating captivating web experiences and exploring the endless possibilities of technology.</p>
          <p className='landingpage__p'>Let's connect and collaborate on something amazing!</p>
          </div>

          
            <ul className='contact-container'>
              <li className='icon-container'>
                <a className='link-container' href="mailto:emhp009@gmail.com">
                  <img className='contact-icon' src={EmailIcon} alt="Email Icon" />
                  <p className='contact-text'>Email</p>
                </a>
              </li>
              <li className='icon-container'>
                <a className='link-container' href="https://github.com/mhei009">
                  <img className="contact-icon"  src={GithubIcon} alt="GitHub Icon" />
                  <p className='contact-text'>GitHub</p>
                </a>
              </li>
              <li className='icon-container'>
                <a className='link-container'  href="https://www.linkedin.com/in/marieheidiespiritu/">
                  <img className="contact-icon"  src={LinkedinIcon} alt="LinkedIn Icon" />
                  <p className='contact-text'>LinkedIn</p>
                </a>
              </li>
            </ul>  <div className="skills__container">
              <h3 className='landingpage__h3'>Tech Stack skills</h3>
              <ul className='skill-list'>
                {skillsList.map((skill, index) => (
                  <li className="skill-item" key={index}>
                    {skill.icon}
                  </li>
                ))}
              </ul>
            </div>
            </div>
           
        
   
      </section>
    </>
  );
};

export default LandingPage;
