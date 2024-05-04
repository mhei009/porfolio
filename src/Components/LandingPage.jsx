import React from 'react';
import { ReactSVG } from 'react-svg';
import BriefcaseOutline from '../Assets/Icons/briefcase-outline.svg'; 
import video from "../Assets/white.mp4"
import GithubIcon from '../Assets/Icons/github-svgrepo-com.svg';
import LinkedinIcon from '../Assets/Icons/linkedin-svgrepo-com.svg';
import EmailIcon from '../Assets/Icons/email-message-svgrepo-com.svg';
import '../index.css'; 


const LandingPage = () => {
  return (
    <section className="landingpage__container">
      <video autoPlay muted loop className="hero">
        <source src={video} type="video/mp4" />
      </video>


      <div className='landingpage__content'>  
      <div className='header__container' style={{ backgroundColor: 'var(--white)', display: 'flex' }}>   
          <h1 className='header__h1' style={{ fontFamily: 'alta_regular', color: 'black', fontSize: '4rem', fontWeight: 500 }}>Heidi Espiritu</h1>
          <div className='header__small' style={{ width: '25rem', backgroundColor: 'white', textAlign: 'center', position: 'relative', top: '-1.2rem' }}><p className='header__p' style={{ fontSize: 'small', fontFamily: 'montserrat' }}><span>☙ ⌗Front-end developer ❧</span></p></div>
        </div>
        <h2 className='landingpage__h2'>A frontend developer student based in Stockholm, Sweden. </h2>
        <p className='landingpage__p'>I'm all about creating captivating web experiences and exploring the endless possibilities of technology.</p><p className='landingpage__p'>Let's connect and collaborate on something amazing!</p>
        <div className='landingpage__briefcase'>
          <ReactSVG src={BriefcaseOutline} className="w-6 h-6 mr-2 text-green-500 mb-3" />
          <p>Available for internship</p>
        </div>
        <div className="contact-links rounded-lg w-1/2  ">
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
        </ul>
      </div>
      </div>
      
    </section>
  );
};

export default LandingPage;
