import React, { useEffect, useState } from 'react';
import video from "../Assets/white.mp4";
import '../index.css'; 

const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    // simulate loading completion after component mounts
    setLoaded(true);

    // event listener for scroll to handle hiding the scroll down indicator
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

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <section id='landingpage' className={`landingpage__container ${loaded ? 'fadeInAnimation' : ''}`}>
      <video autoPlay muted loop className="hero">
        <source src={video} type="video/mp4" />
      </video>

      <div className='landingpage__content'>  
        <div className='header__container'>   
          <h1 className='header__h1'>Heidi Espiritu</h1>
          <div className='header__small'>
            <p className='header__p'>
              <span>☙ ⌗Front-end developer ❧</span>
            </p>
          </div>
        </div>
        <div className='introduction'>
          <h2 className='landingpage__h2'>Frontend student looking for an internship. Based in Stockholm, Sweden. </h2>
          <p className='landingpage__p'>
            I'm all about creating captivating web experiences and exploring the endless possibilities of technology.
          </p>
        </div>
      </div>

      {/* Conditional rendering of scroll down indicator */}
      {showScrollDown && (
        <iframe className='scroll__down' src="https://lottie.host/embed/b68688cd-ff1c-4c35-941a-f3152b0b9ffe/CGp0Q1noWK.json"></iframe>
      )}

    </section>
  );
};

export default LandingPage;
