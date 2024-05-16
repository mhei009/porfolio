import React from 'react';
import GithubIcon from '../Assets/Icons/iconmonstr-github-3.svg';
import LinkedinIcon from '../Assets/Icons/iconmonstr-linkedin-3.svg';
import EmailIcon from '../Assets/Icons/iconmonstr-email-15.svg';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer__title">Let's connect and collaborate on something amazing!</h1>
      <div className="footer__content">
        <ul className="footer__contact-list">
          <li className="footer__contact-item">
            <a className="footer__contact-link" href="mailto:emhp009@gmail.com" aria-label="Email Heidi">
              <img className="footer__contact-icon" src={EmailIcon} alt="Email Icon" />
            </a>
          </li>
          <li className="footer__contact-item">
            <a className="footer__contact-link" href="https://github.com/mhei009" aria-label="GitHub Profile">
              <img className="footer__contact-icon" src={GithubIcon} alt="GitHub Icon" />
            </a>
          </li>
          <li className="footer__contact-item">
            <a className="footer__contact-link" href="https://www.linkedin.com/in/marieheidiespiritu/" aria-label="LinkedIn Profile">
              <img className="footer__contact-icon" src={LinkedinIcon} alt="LinkedIn Icon" />
            </a>
          </li>
        </ul>
        <div className="footer__credits">#Heidi Espiritu © Mhei 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
