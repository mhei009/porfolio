import React, { useEffect, useState } from 'react';
import video from "../Assets/white.mp4";
import '../index.css'; 

const LandingPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
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
            <h2 className='landingpage__h2'>Based in Stockholm, Sweden. </h2>
            <p className='landingpage__p'>
              I'm all about creating captivating web experiences and exploring the endless possibilities of technology.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
