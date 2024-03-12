import React from 'react';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Contact from './Components/Contact';




function App() {
  return (
    <div className="app">
      <Header />
      <LandingPage />
      <AboutMe />
     <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

