import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import projectData from '../projectData.json';
import todoImage from '../Assets/images/todo.webp'; 
import reactorsImage from '../Assets/images/reactors.png';
import fantasyImage from '../Assets/images/fantasy.png';
import frimarkImage from '../Assets/images/frimark.png';
import KSSSimage from '../Assets/images/KSSS.png';
import '../index.css';

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const projectCardsRef = useRef([]);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '10px',
      threshold: 0.7,
    });

    projectCardsRef.current.forEach((card, index) => {
      observer.observe(card);
    });

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      const index = parseInt(entry.target.getAttribute('data-index'));
      if (entry.isIntersecting) {
        setVisibleIndex(index);
        
        gsap.to(entry.target, { duration: 0.5, filter: 'blur(0px)' });
      } else {
        
        gsap.to(entry.target, { duration: 0.5, filter: 'blur(10px)' });
      }
    });
  };

  const getImage = (title) => {
    switch (title) {
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

  const toggleDescription = (index) => {
    setExpandedDescriptions({
      ...expandedDescriptions,
      [index]: !expandedDescriptions[index],
    });
  };

  const toggleDescriptionText = (index) => {
    return expandedDescriptions[index] ? 'Read Less' : 'Read More';
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
              <p className="project__description">
                {(screenWidth >= 768 || expandedDescriptions[index])
                  ? project.description
                  : `${project.description.slice(0, 150)}...`}
                {(screenWidth < 768 && !expandedDescriptions[index]) && (
                  <button
                    className="read-more-button"
                    onClick={() => toggleDescription(index)}
                  >
                    {toggleDescriptionText(index)}
                  </button>
                )}
              </p>
              {(screenWidth >= 768 || expandedDescriptions[index]) && (
                <>
                  <div className="project__tech-stack">
                    <strong className="tech-stack-label">Tech Stack:</strong>
                    <ul className="tech-stack-list">
                      {project.techStack.map((tech, idx) => (
                        <li key={idx} className="tech-stack-item">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="project__buttons">
                    <a href={project.codeLink} className="button" target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                    <a href={project.liveSiteLink} className="button" target="_blank" rel="noopener noreferrer">
                      Live Site
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
