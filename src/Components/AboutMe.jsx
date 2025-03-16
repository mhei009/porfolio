import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { ReactComponent as HtmlIcon } from "../Assets/Icons/html-5-logo-svgrepo-com.svg";
import { ReactComponent as CssIcon } from "../Assets/Icons/css-3-svgrepo-com.svg";
import { ReactComponent as JsIcon } from "../Assets/Icons/javascript-svgrepo-com.svg";
import { ReactComponent as ReactIcon } from "../Assets/Icons/react-svgrepo-com.svg";
import { ReactComponent as TailwindIcon } from "../Assets/Icons/tailwind-svgrepo-com.svg";
import { ReactComponent as FigmaIcon } from "../Assets/Icons/figma-svgrepo-com.svg";
import { ReactComponent as NextIcon } from "../Assets/next.svg";
import { ReactComponent as ShadcnIcon } from "../Assets/shadcn-ui-seeklogo.svg";
import { ReactComponent as TypescriptIcon } from "../Assets/Icons/icons8-typescript.svg";
import { ReactComponent as SanityIcon } from "../Assets/Icons/Sanity.svg";

import "../index.css";

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const bottom = ref.current.getBoundingClientRect().bottom;
      const { innerHeight } = window;

      const isInMiddle = top < innerHeight / 2 && bottom > innerHeight / 2;

      setIsVisible(isInMiddle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    { name: "HTML", icon: <HtmlIcon className="icon" /> },
    { name: "CSS", icon: <CssIcon className="icon" /> },
    { name: "JavaScript", icon: <JsIcon className="icon javascript" /> },
    { name: "React", icon: <ReactIcon className="icon" /> },
    { name: "Next.js", icon: <NextIcon className="icon" /> },
    { name: "Tailwind", icon: <TailwindIcon className="icon" /> },
    { name: "Shadcn/ui", icon: <ShadcnIcon className="icon" /> },
    { name: "Figma", icon: <FigmaIcon className="icon" /> },
    { name: "Typescript", icon: <TypescriptIcon className="icon" /> },
    { name: "Sanity", icon: <SanityIcon className="icon" /> },
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
          <div className="text-center md:text-left mt-20 px-5">
            <p className="mb-4 font-semibold text-lg text-grey">
            Hi, I'm Heidi, a recent Frontend Development graduate from Hyper Island, Stockholm. My journey in tech has been driven by a passion for creating intuitive and dynamic web experiences. I’ve honed my skills in modern frontend technologies and UX/UI design, and I love exploring new ways to bring ideas to life through code.
            </p>
            <p className="mb-6 text-lg text-grey">
            While my focus is currently on frontend development, I’m slowly but surely working towards becoming a full-stack developer. I’m excited to continue expanding my skills in both development and design to help shape the future of web experiences.
            </p>
            <h3 className="mb-6 text-lg text-grey">
            When I'm not coding, you’ll find me enjoying sports, diving into console games, or capturing moments through photography. I’m excited to continue learning and leveraging my skills to help shape the future of web development.

            </h3>
          </div>
        </div>

        <div className="skills__container py-4 sm:py-5 px-4 sm:px-6 md:px-8">
          <h3 className="landingpage__h3 text-center text-lg font-bold mb-4 text-grey">
            Tech Stack skills
          </h3>
          <ul className="skill-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
            {skillsList.map((skill, index) => (
              <li
                className="skill-item flex flex-col items-center space-y-2"
                key={index}
              >
                <div className="icon-wrapper flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                  {skill.icon}
                </div>
                <span className="skill-name text-xs sm:text-sm md:text-base text-center">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <iframe
        src="https://lottie.host/embed/12832fd4-9090-49dd-964a-3324b716d807/4eYHtT3ayt.json"
        className="absolute inset-0 z-0 w-screen h-screen pointer-events-none"
        style={{
          pointerEvents: "none",
          border: "none",
          zIndex: -1,
          animation: "repeat-animation 18s linear infinite",
        }}
        loading="lazy"
      >
        
      </iframe>

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
