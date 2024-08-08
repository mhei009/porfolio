import React from 'react';
import GithubIcon from '../Assets/Icons/iconmonstr-github-3.svg';
import LinkedinIcon from '../Assets/Icons/iconmonstr-linkedin-3.svg';
import EmailIcon from '../Assets/Icons/iconmonstr-email-15.svg';
import CvIcon from '../Assets/Icons/iconmonstr-cv-3.svg';
import '../index.css';

const Footer = () => {

  const handleDownloadCV = () => {
    window.open('https://www.dropbox.com/scl/fi/0woz3jo6c10zqf64rnjh5/en_cv_heidiespiritu.pdf?rlkey=apzscqim7ojfcg5zyjc6g9nw0&st=7go93e0q&dl=0');
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
