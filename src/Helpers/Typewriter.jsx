import React, { useEffect } from 'react';
import '../index.css'

const Typewriter = () => {
  useEffect(() => {
    const TxtType = function(el, toRotate, period) {
      // Your TxtType constructor function code here...
    };

    TxtType.prototype.tick = function() {
      // Your tick method code here...
    };

    const initializeTypewriter = () => {
      const elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      const css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
      document.body.appendChild(css);
    };

    // Call initializeTypewriter function when component mounts
    initializeTypewriter();

    // Cleanup function (optional)
    return () => {
      // Remove any cleanup logic here if needed
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <h1>
      <a href="#" className="typewrite" data-period="2000" data-type='["Aspiring Frontend Developer"]'>
        <span className="wrap"></span>
      </a>
    </h1>
  );
};

export default Typewriter;
