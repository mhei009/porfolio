import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-links">
        <ul>
          <li>
            <a href="mailto:your-email@example.com">
              <i className="fa fa-envelope"></i> Email
            </a>
          </li>
          <li>
            <a href="https://github.com/your-github-username">
              <i className="fa fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/your-linkedin-username">
              <i className="fa fa-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
