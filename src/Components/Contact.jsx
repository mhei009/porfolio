import React from 'react';
import GithubIcon from '../Assets/Icons/github-svgrepo-com.svg';
import LinkedinIcon from '../Assets/Icons/linkedin-svgrepo-com.svg';
import EmailIcon from '../Assets/Icons/email-message-svgrepo-com.svg';
import '../index.css'; 


function Contact() {
  return (
    <div className="contact">
      <h2>Reach out!</h2>
      <div className="contact-links border-double border-4 border-sky-500 rounded-lg w-1/2 mt-3 p-3 bg-slate-100 ">
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
  );
}

export default Contact;
