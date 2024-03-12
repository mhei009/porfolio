import React, { useState } from 'react';

const Header = () => {
  const [selected, setSelected] = useState(""); 

  return (
    <nav className="bg-white border-gray-200 dark:bg-slate-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
      
      </div>
      <div className="max-w-screen-xl px-3 py-3 mx-auto ">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm mx-auto justify-center">
            <li>
              <a href="#home" className={`text-gray-900 dark:text-white hover:underline ${selected === "home" ? "underline" : ""}`} onClick={() => setSelected("home")}>Home</a>
            </li>
            <li>
              <a href="#about" className={`text-gray-900 dark:text-white hover:underline ${selected === "about" ? "underline" : ""}`} onClick={() => setSelected("about")}>About Me</a>
            </li>
            
            <li>
              <a href="#projects" className={`text-gray-900 dark:text-white hover:underline ${selected === "projects" ? "underline" : ""}`} onClick={() => setSelected("projects")}>Projects</a>
            </li>
            <li>
              <a href="#contact" className={`text-gray-900 dark:text-white hover:underline ${selected === "contact" ? "underline" : ""}`} onClick={() => setSelected("contact")}>Contact</a>
            </li>
          </ul>
        </div>
   
    </nav>
  );
};

export default Header;
