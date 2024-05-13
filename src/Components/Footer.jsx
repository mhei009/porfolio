import React from 'react';
import GithubIcon from '../Assets/Icons/github-svgrepo-com.svg';
import LinkedinIcon from '../Assets/Icons/linkedin-svgrepo-com.svg';
import EmailIcon from '../Assets/Icons/email-message-svgrepo-com.svg';
import '../index.css'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className='footer__h1'>Let's connect and collaborate on something amazing!</h1>
      <ul className='contact-container'>
        <li className='icon-container'>
          <a className='link-container' href="mailto:emhp009@gmail.com">
            <img className='contact-icon' src={EmailIcon} alt="Email Icon" />
          </a>
        </li>
        <li className='icon-container'>
          <a className='link-container' href="https://github.com/mhei009">
            <img className="contact-icon"  src={GithubIcon} alt="GitHub Icon" />
          </a>
        </li>
        <li className='icon-container'>
          <a className='link-container'  href="https://www.linkedin.com/in/marieheidiespiritu/">
            <img className="contact-icon"  src={LinkedinIcon} alt="LinkedIn Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
