import React from 'react';

function Project({ title, description, video1, video2, video3 }) {
  return (
    <div className="project bg-grey">
      <h2 className='text-5xl font-bold mb-1 text-cyan-500 mt-4'>Projects</h2>
      <div className="videos-container">
        <video controls>
          <source src={video1} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src={video2} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src={video3} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;
