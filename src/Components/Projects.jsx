import React, { useState, useEffect } from 'react';
import projectData from '../projectData.json';
import todoImage from '../Assets/images/todo.png'; 
import reactorsImage from '../Assets/images/reactors.png';
import fantasyImage from '../Assets/images/fantasy.png';
import matchupImage from '../Assets/images/matchup.png';
import frimarkImage from '../Assets/images/frimark.png';
import KSSSimage from '../Assets/images/KSSS.png'

import '../index.css';

const Projects = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleIndex(parseInt(entry.target.getAttribute('data-index')));
      }
    });
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

    return () => observer.disconnect();
  }, []); 

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
      case 'Matchup Project':
        return matchupImage;
      case 'Frimark Project':
        return frimarkImage;
      default:
        return null;
    }
  };

  return (
    <div className="projects">
      <h2 className='text-3xl font-bold mb-5 mt-4'>Previous Projects</h2>
      <p className='projects__p'>So far projects I have done during my education</p>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div className={`project-card ${visibleIndex === index ? 'fade-in' : ''}`} key={index}>
            <div className="card-content">
              <h3 className='project__title'>{project.title}</h3>
              <p className='project__description'>
                {project.description}
                <br />
                <strong className="tech-stack-label">Tech Stack:</strong> 
                <ul className="tech-stack-list">
                  {project.techStack.map((tech, index) => (
                    <li key={index} className="tech-stack-item">{tech}</li>
                  ))}
                </ul>
              </p>
              <div className="project__buttons">
                <a href={project.codeLink} className="button" target="_blank" rel="noopener noreferrer">Code</a>
                <a href={project.liveSiteLink} className="button" target="_blank" rel="noopener noreferrer">Live Site</a>
              </div>
            </div>
            <div className="card-image">
              <img src={getImage(project.title)} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
