import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ReactComponent as HtmlIcon } from '../Assets/Icons/html-5-logo-svgrepo-com.svg';
import { ReactComponent as CssIcon } from '../Assets/Icons/css-3-svgrepo-com.svg';
import { ReactComponent as JsIcon } from '../Assets/Icons/javascript-svgrepo-com.svg';
import { ReactComponent as ReactIcon } from '../Assets/Icons/react-svgrepo-com.svg';
import { ReactComponent as TailwindIcon } from '../Assets/Icons/tailwind-svgrepo-com.svg';
import { ReactComponent as FigmaIcon } from '../Assets/Icons/figma-svgrepo-com.svg';
import { ReactComponent as AdobeIcon } from '../Assets/Icons/adobe-photoshop-svgrepo-com.svg';
import { ReactComponent as NextIcon } from '../Assets/next.svg';
import { ReactComponent as ShadcnIcon } from '../Assets/shadcn-ui-seeklogo.svg';
import '../index.css'; 

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const bottom = ref.current.getBoundingClientRect().bottom;
      const { innerHeight } = window;

      // Calculate if the section is in the middle of the viewport
      const isInMiddle = top < innerHeight / 2 && bottom > innerHeight / 2;

      setIsVisible(isInMiddle);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isVisible, controls]);

  const skillsList = [
    { name: 'HTML', icon: <HtmlIcon className='icon' /> },
    { name: 'CSS', icon: <CssIcon className='icon' /> },
    { name: 'JavaScript', icon: <JsIcon className='icon javascript' /> },
    { name: 'React', icon: <ReactIcon className='icon' /> },
    { name: 'Next.js', icon: <NextIcon className='icon' /> },
    { name: 'Tailwind', icon: <TailwindIcon className='icon' /> },
    { name: 'Shadcn/ui', icon: <ShadcnIcon className='icon' /> },
    { name: 'Figma', icon: <FigmaIcon className='icon' /> },
    { name: 'Adobe Photoshop', icon: <AdobeIcon className='icon' /> },
  ];

  return (
    <div 
      ref={ref}
      id="aboutme" 
      className="relative min-h-screen  py-6 sm:py-12"
    >
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        className="w-full mx-auto max-w-screen-lg px-4 relative z-1"
      >
        <div className="group grid w-full grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left mt-20">
            <p className="mb-4 font-semibold text-2xl text-grey">
              Hello! I'm Heidi a Frontend Developer student from Hyper Island Stockholm. I have a passion for creating engaging and user-friendly web experiences.  I'm constantly expanding my skills in modern frontend technologies.
            </p>
            <p className="mb-6 text-lg text-grey">
              The power of technology has always amazed me since I was little. The idea to transform my ideas into reality  is a thrilling journey filled with creativity, learning challenges, and fulfillment. 
            </p>
            <h3 className="mb-6 text-lg text-grey">
              Outside of coding, I enjoy playing sports, console games, and photography. I’m excited about the opportunities to learn more and look forward to leveraging my skills to build the next generation of web experiences.
            </h3>
          </div>
        </div>
        <div className="skills__container">
          <h3 className='landingpage__h3'>Tech Stack skills</h3>
          <ul className='skill-list'>
            {skillsList.map((skill, index) => (
              <li className="skill-item" key={index}>
                {skill.icon}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <iframe 
        src="https://lottie.host/embed/12832fd4-9090-49dd-964a-3324b716d807/4eYHtT3ayt.json"
        className="absolute inset-0 z-0 w-screen h-screen pointer-events-none"
        style={{ pointerEvents: 'none', border: 'none', zIndex: -1, animation: 'repeat-animation 13s linear infinite' }}
      ></iframe>
      <style>
        {`
          @keyframes repeat-animation {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(-100%, -100%);
            }
          }
        `}
      </style>
    </div>
  );
}

export default AboutMe;
