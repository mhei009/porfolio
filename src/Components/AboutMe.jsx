import React from 'react';
import '../index.css'; 

function AboutMe() {
  return (
    <>  
      <div id="aboutme" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full mx-auto max-w-screen-lg px-4">
          <div className="group grid w-full grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <p className="mb-4 font-semibold text-2xl text-grey">
                Hello! I'm Heidi Espiritu, an aspiring Frontend Developer with a passion for creating engaging and user-friendly web experiences.  I'm constantly expanding my skills in modern frontend technologies.
              </p>
              <p className="mb-6 text-lg text-grey">
                I believe in the power of technology to transform ideas into reality and am enthusiastic about contributing to innovative projects that make a positive impact. With a keen eye for design and a dedication to clean, efficient code, I strive to craft websites that not only look great but also deliver exceptional functionality.
              </p>
              <h3 className="mb-6 text-lg text-grey">
                Outside of coding, I enjoy exploring the latest trends in web development and photography. I’m excited about the opportunities to learn more and look forward to leveraging my skills to build the next generation of web experiences.
              </h3>
            </div>
            <div className="flex justify-center items-center">
              <iframe 
                src="https://lottie.host/embed/91187e3e-b098-4418-b328-7461e120cd1e/ryhfdZCdwg.json" 
                title="Lottie Animation"
                width="300" 
                height="300"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
