import React, { useEffect, useState } from 'react';
import video from "../Assets/white.mp4";
import '../index.css';

const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const currentScroll = window.scrollY;

      if (documentHeight - windowHeight - currentScroll <= 100) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='landingpage' className={`landingpage__container ${loaded ? 'fadeInAnimation' : ''}`}>
      <video autoPlay muted loop className="hero">
        <source src={video} type="video/mp4" />
      </video>

      <div className='landingpage__content'>
        <div className='header__container'>
          <h1 className='header__h1'>Heidi Espiritu</h1>
        </div>

        <div className='introduction'>
          <h2 className='landingpage__h2'>
            Frontend Developer based in Stockholm, Sweden.
          </h2>
          <p className='landingpage__p'>
            🚧 Portfolio redesign in progress. <br />
            Currently running <strong>v1.5-beta</strong>  <br />— stable but evolving. <br />
            New features (and projects!) coming soon.
          </p>
        </div>
      </div>

      {showScrollDown && (
        <iframe
          title="Scroll Down Animation"
          className='scroll__down'
          src="https://lottie.host/embed/b68688cd-ff1c-4c35-941a-f3152b0b9ffe/CGp0Q1noWK.json"
          frameBorder="0"
          aria-hidden="true"
        ></iframe>
      )}
    </section>
  );
};

export default LandingPage;
