import React from 'react';

function Project({ title, description, image }) {
  return (
    <div className="project">
        <h2 className='text-5xl font-bold mb-1 text-cyan-500 mt-4'>Projects</h2>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;
