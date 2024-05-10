import React, { useState, useEffect } from 'react';
import projectData from '../projectData.json';
import todoImage from '../Assets/images/todo.png'; 
import reactorsImage from '../Assets/images/reactors.png';
import fantasyImage from '../Assets/images/fantasy.png';
import ArtQuizeImage from '../Assets/images/matchup.png';
import frimarkImage from '../Assets/images/frimark.png';
import KSSSimage from '../Assets/images/KSSS.png';

import '../index.css';

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    document.querySelectorAll('.project-card').forEach((card, index) => {
      card.setAttribute('data-index', index);
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
      if (entry.isIntersecting) {
        setVisibleIndex(parseInt(entry.target.getAttribute('data-index')));
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
      case 'Art Quize Project':
        return ArtQuizeImage;
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
      <p className="projects__p">So far projects I have done during my education</p>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div className={`project-card ${visibleIndex === index ? 'fade-in' : ''}`} key={index}>
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
                    Read More
                  </button>
                )}
              </p>
              {(screenWidth >= 768 || expandedDescriptions[index]) && (
                <>
                  <div className="project__tech-stack">
                    <strong className="tech-stack-label">Tech Stack:</strong>
                    <ul className="tech-stack-list">
                      {project.techStack.map((tech, index) => (
                        <li key={index} className="tech-stack-item">
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
                    {(screenWidth < 768 && expandedDescriptions[index]) && (
                      <button
                        className="button" 
                        onClick={() => toggleDescription(index)}
                      >
                        {toggleDescriptionText(index)}
                      </button>
                    )}
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
