import React from 'react';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills'
import Projects from './Components/Projects';





function App() {
  return (
    <div className="app">
      <Header />
      <LandingPage />
      <AboutMe />  
      <Projects />
      
    </div>
  );
}

export default App;

