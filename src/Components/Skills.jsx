import React from 'react';

function Skills() {
  const skillsList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Adobe Photoshop',
    'Figma'
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

