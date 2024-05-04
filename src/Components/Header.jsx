import React, { useState } from 'react';

const Header = () => {
  const [selected, setSelected] = useState(""); 

  return (
    <div>
      <nav className="header__container">

        
        <div className="max-w-screen-xl px-3 py-3 mx-auto ">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg mx-auto justify-center">
            <li>  
              <a href="#home" className={`text-gray-900 hover:underline ${selected === "home" ? "underline" : ""}`} onClick={() => setSelected("home")}>Home</a>
            </li>
            <li>
              <a href="#about" className={`text-gray-900 hover:underline ${selected === "about" ? "underline" : ""}`} onClick={() => setSelected("about")}>About Me</a>
            </li>
            <li>
              <a href="#projects" className={`text-gray-900 hover:underline ${selected === "projects" ? "underline" : ""}`} onClick={() => setSelected("projects")}>Projects</a>
            </li>
            <li>
              <a href="#contact" className={`text-gray-900 hover:underline ${selected === "contact" ? "underline" : ""}`} onClick={() => setSelected("contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
};

export default Header;
