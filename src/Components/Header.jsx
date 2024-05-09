import React, { useState } from 'react';

const Header = () => {
  const [selected, setSelected] = useState(""); 

  return (
    <div className="fixed top-0 w-full z-10 bg-gray-50 py-3">
      <nav className="max-w-screen-xl px-3 mx-auto">
        <ul className="flex flex-row font-medium space-x-8 text-lg mx-auto justify-center">
          <li>  
            <a href="#home" className={`text-gray-900 hover:underline ${selected === "home" ? "underline" : ""}`} onClick={() => setSelected("home")}>Home</a>
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
