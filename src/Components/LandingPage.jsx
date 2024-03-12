import React from 'react';
import { ReactSVG } from 'react-svg';
import BriefcaseOutline from '../Assets/Icons/briefcase-outline.svg'; 
import CallOutline from '../Assets/Icons/call-outline.svg'


const LandingPage = () => {
  return (
    <section className="min-h-screen bg-blue">
      <div className='hero_container inline-block'>
        <h1 className="text-5xl font-bold mb-1 text-yellow mt-4">Heidi Espiritu</h1>
        <p className="text-gray-400 text-xl">Aspiring Frontend Developer..</p>
      </div>
      <p className='text-gray-100'>A frontend developer student based in Stockholm Sweden</p>
      
      <div className="flex items-center">
        <ReactSVG src={BriefcaseOutline} className="w-6 h-6 mr-2 text-green-500 mb-3" />
        <button className="text-grey mb-3">Available for internship</button>
      </div>

      <div className="flex items-center">
        <ReactSVG src={CallOutline} className="w-6 h-6 mr-2 text-green-500"  />
        <button className="text-grey">Contact me</button>
      </div>
    </section>
  );
};

export default LandingPage;
