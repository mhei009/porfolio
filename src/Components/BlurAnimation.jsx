import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import projectData from '../projectData.json';
import todoImage from '../Assets/images/todo.png'; 
import reactorsImage from '../Assets/images/reactors.png';
import fantasyImage from '../Assets/images/fantasy.png';
import frimarkImage from '../Assets/images/frimark.png';
import KSSSimage from '../Assets/images/KSSS.png';
import mediximage from '../Assets/images/medix.png';
import '../index.css';

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // threshold for triggering blur effect
    });

    projectCardsRef.current.forEach((card, index) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []); 

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      const index = parseInt(entry.target.getAttribute('data-index'));
      if (entry.isIntersecting && entry.intersectionRatio < 1.0) {
        setVisibleIndex(index);
        gsap.to(entry.target.querySelector('.card-content'), { duration: 0.5, filter: 'blur(10px)' });
      } else {
        gsap.to(entry.target.querySelector('.card-content'), { duration: 0.5, filter: 'blur(0px)' });
      }
    });
  };

  const getImage = (title) => {
    switch (title) {
      case 'Medix, A healthcare booking system (Still in progress)': 
        return mediximage;
      case 'Royal Swedish Sailing Society History / KSSS Historia':
        return KSSSimage;
      case 'Tick':
        return todoImage;
      case 'Reactors Project':
        return reactorsImage;
      case 'Fantasy Project':
        return fantasyImage;
      case 'Frimark Project':
        return frimarkImage;
      default:
        return null;
    }
  };

  return (
    <div id="projects" className="projects">
      <h2 className="projects__h2 text-3xl font-bold mb-5 mt-4" style={{ fontFamily: "Montserrat" }}>
        Previous Projects
      </h2>
      <p className="projects__p">Projects completed during my education</p>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div
            ref={(el) => (projectCardsRef.current[index] = el)}
            className={`project-card ${visibleIndex === index ? 'fade-in' : ''}`}
            key={index}
          >
            <div className="card-image">
              <img src={getImage(project.title)} alt={project.title} />
            </div>
            <div className="card-content">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <div className="project__tech-stack">
                <strong className="tech-stack-label">Tech Stack:</strong>
                <ul className="tech-stack-list">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx} className="tech-stack-item">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="project__buttons">
                <a href={project.codeLink} className="button" target="_blank" rel="noopener noreferrer">Code</a>
                <a href={project.liveSiteLink} className="button" target="_blank" rel="noopener noreferrer">Live Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
