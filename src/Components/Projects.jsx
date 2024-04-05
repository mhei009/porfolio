import React from 'react';
import reactors from '../Assets/reactors.png'
import fantasy from '../Assets/fantasy project.png'
import todo from '../Assets/todo.png'
import matchup from '../Assets/matchup.png'
import frimark from '../Assets/frimark.png'
; 


const Projects = () => {
  return (
    <div className="projects">
      <h2>Previous Projects</h2>
      <div className="projects-list">
        <div className="project-card">
        <div className="project-card">
          <div className="card-image">
            <img src={todo} alt="Fantasy Project" />
          </div>
          <div className="card-content">
            <h3>Fantasy Project</h3>
            <p>Description of the Fantasy Project</p>
          </div>
        </div>
          <div className="card-image">
            <img src={reactors} alt="Fantasy Project" />
          </div>
          <div className="card-content">
            <h3>Fantasy Project</h3>
            <p>Description of the Fantasy Project</p>
          </div>
        </div>
        <div className="project-card">
          <div className="card-image">
            <img src={fantasy} alt="Fantasy Project" />
          </div>
          <div className="card-content">
            <h3>Fantasy Project</h3>
            <p>Description of the Fantasy Project</p>
          </div>
        </div>
        <div className="project-card">
          <div className="card-image">
            <img src={matchup} alt="Fantasy Project" />
          </div>
          <div className="card-content">
            <h3>Fantasy Project</h3>
            <p>Description of the Fantasy Project</p>
          </div>
          <div className="project-card">
          <div className="card-image">
            <img src={frimark} alt="Fantasy Project" />
          </div>
          <div className="card-content">
            <h3>Fantasy Project</h3>
            <p>Description of the Fantasy Project</p>
          </div>
        </div>
        </div>
       

        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
