import React, { useState } from 'react';


const Header = () => {
  const [selected, setSelected] = useState(""); 

  return (
    <div className="header">
      <nav className="max-w-screen-xl px-3 mx-auto">
        <ul className="flex flex-row font-medium space-x-8 text-xl mx-auto justify-center">
          <li>  
            <a href="#landingpage" className={`text-gray-900 hover:underline ${selected === "home" ? "underline" : ""}`} onClick={() => setSelected("home")}>Home</a>
          </li>
          <li>
            <a href="#aboutme" className={`text-gray-900 hover:underline ${selected === "aboutme" ? "underline" : ""}`} onClick={() => setSelected("aboutme")}>About Me</a>
          </li>
          <li>
            <a href="#projects" className={`text-gray-900 hover:underline ${selected === "projects" ? "underline" : ""}`} onClick={() => setSelected("projects")}>Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
