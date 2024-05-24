import React from 'react';
import GithubIcon from '../Assets/Icons/iconmonstr-github-3.svg';
import LinkedinIcon from '../Assets/Icons/iconmonstr-linkedin-3.svg';
import EmailIcon from '../Assets/Icons/iconmonstr-email-15.svg';
import CvIcon from '../Assets/Icons/iconmonstr-cv-3.svg';
import '../index.css';

const Footer = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1TJVXnNVZHc-Pxe4-jAyXlUpT5Ljja57o/view?usp=sharing', '_blank');
  };

  return (
    <footer className="footer">
      <h1 className="footer__title">Interested? Check out my CV and let's connect and collaborate on something amazing!</h1>
      <div className="footer__content">
        <ul className="footer__contact-list">
          <li className="footer__contact-item">
            <button className="footer__contact-link" onClick={handleDownloadCV} aria-label="Download CV">
              <img className="footer__contact-icon" src={CvIcon} alt="CV icon" />
            </button>
            <p className="footer__contact-text">CV</p>
          </li>
          <li className="footer__contact-item">
            <a className="footer__contact-link" href="mailto:espiritumheidi@gmail.com" aria-label="Email Heidi">
              <img className="footer__contact-icon" src={EmailIcon} alt="Email Icon" />
            </a>
            <p className="footer__contact-text">Email</p>
          </li>
          <li className="footer__contact-item">
            <a className="footer__contact-link" href="https://github.com/mhei009" aria-label="GitHub Profile">
              <img className="footer__contact-icon" src={GithubIcon} alt="GitHub Icon" />
            </a>
            <p className="footer__contact-text">GitHub</p>
          </li>
          <li className="footer__contact-item">
            <a className="footer__contact-link" href="https://www.linkedin.com/in/marieheidiespiritu/" aria-label="LinkedIn Profile">
              <img className="footer__contact-icon" src={LinkedinIcon} alt="LinkedIn Icon" />
            </a>
            <p className="footer__contact-text">linkedin</p>
          </li>
        </ul>
        <div className="footer__credits">
          <p className='footer_creditsp'>#Heidi Espiritu X Mhei ©2024</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
