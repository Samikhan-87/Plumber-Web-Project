import React from 'react';
import { project } from '../functions/data';
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  
  const handleClick = (obj) => {
    navigate(`/project-overview/${obj.title}`, {
      state: {
        project: obj
      }
    }
    );
  }

  return (
      <div className="bg-white md:mx-5 rounded-2xl py-8">
      {/* Section Header */}
      <div className="text-center mb-2">
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">PORTFOLIO</span>
      </div>
      <h2 className="text-blue-600 font-bold text-[32px] text-center pt-3 pb-2">Recent Works</h2>
      <div className="flex justify-center my-3">
        <span className="w-16 h-1 bg-blue-500 rounded-full"></span>
        <span className="w-4 h-1 bg-blue-300 rounded-full mx-1"></span>
      </div>
      <p className="text-gray-500 max-w-xl mx-auto text-center py-2 px-4" style={{ fontSize: '16px' }}>
        Action speaker louder than word, check our successful completed projects to clear all the doubts.
        We are professional in this work
        </p>
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Projects</h2>
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-1 md:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {project.map((data, index) => (
            <button className="group bg-white shadow-lg hover:shadow-2xl rounded-2xl p-4 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              onClick={() => handleClick(data)}
              key={index}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={data.image}
                  id={index + 1}  
                  alt={data.alt}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
            </div>
              <h3 className="mt-4 text-gray-800 text-center font-bold group-hover:text-blue-600 transition-colors duration-300">{data.title}</h3>
            </button>
          ))}
        </div>
          </div>
          <div className="flex justify-center items-center max-w-xl mx-auto px-4">
            <NavLink to="/projects" className="group border-2 border-blue-500 font-bold text-white
            flex-grow p-4 text-center
            rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 sm:mx-7 xsm:mx-7">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NavLink>
          </div>
    </div>
  );
};

export default Projects;
