import React from 'react'
import PropTypes from "prop-types";

const Card = ({ image, alt, skill, summary }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden h-52">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"  
          src={image}
          alt={alt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
          <span className="w-3 h-1 bg-blue-300 rounded-full"></span>
        </div>
        <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{skill}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {summary}
        </p>
        <button className="mt-4 flex items-center gap-2 text-blue-500 font-semibold text-sm hover:text-blue-700 transition-colors">
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
};
// props validation should be propTypes
Card.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};
export default Card;
