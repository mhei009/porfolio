import React from 'react';
import GithubIcon from '../Assets/Icons/iconmonstr-github-3.svg';
import LinkedinIcon from '../Assets/Icons/iconmonstr-linkedin-3.svg';
import EmailIcon from '../Assets/Icons/iconmonstr-email-15.svg';
import CvIcon from '../Assets/Icons/iconmonstr-cv-3.svg';
import '../index.css';

const Footer = () => {

  const handleDownloadCV = () => {
    window.open('https://www.dropbox.com/scl/fi/7e6k1fprwkr9x35luwvbz/emhp009-gmail.com-0739-869-834-Upplands-V-sby.-Stockholm-Sweden-reallygreatsite.com-15.pdf?rlkey=okwccib6t9vum16kwljx08cvo&st=4ftuk75u&dl=0', '_blank', 'noopener,noreferrer');
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
            <a className="footer__contact-link" href="mailto:espiritumheidi@gmail.com" aria-label="Email Heidi" target="_blank" rel="noopener noreferrer">
              <img className="footer__contact-icon" src={EmailIcon} alt="Email Icon" />
            </a>
            <p className="footer__contact-text">Email</p>
          </li>
          <li className="footer__contact-item">
            <a className="footer__contact-link" href="https://github.com/mhei009" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
              <img className="footer__contact-icon" src={GithubIcon} alt="GitHub Icon" />
            </a>
            <p className="footer__contact-text">GitHub</p>
          </li>
          <li className="footer__contact-item">
            <a className="footer__contact-link" href="https://www.linkedin.com/in/marieheidiespiritu/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
              <img className="footer__contact-icon" src={LinkedinIcon} alt="LinkedIn Icon" />
            </a>
            <p className="footer__contact-text">LinkedIn</p>
          </li>
        </ul>
        <div className="footer__credits">
          <p className="footer__credits-text">#Heidi Espiritu X Mhei ©2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
