import React from 'react'
import PropTypes from 'prop-types';

const Testimonial = ({image, alt, message, name, prof}) => {
  return (
    <div className="group relative flex flex-col justify-center items-center
      bg-white overflow-hidden shadow-lg hover:shadow-2xl p-8 rounded-2xl
      transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      
      {/* Decorative Background Circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 translate-x-16 group-hover:bg-blue-100 transition-colors duration-300" />
      
      {/* Quote Icon */}
      <div className="absolute top-6 left-6 text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      
      {/* Profile Image */}
      <div className="relative z-10 mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
          <img className="rounded-full w-full h-full object-cover border-3 border-white" src={image} alt={alt} />
        </div>
        {/* Online Indicator */}
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
      </div>
      
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
      
      {/* Message */}
      <div className="relative z-10 py-2 text-center px-2">
        <p className="text-gray-600 text-sm leading-relaxed italic line-clamp-6">&ldquo;{message}&rdquo;</p>
      </div>
      
      {/* Divider */}
      <div className="flex items-center gap-2 my-4">
        <span className="w-8 h-0.5 bg-blue-200 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
        <span className="w-8 h-0.5 bg-blue-200 rounded-full"></span>
      </div>
      
      {/* Name & Profession */}
      <div className="relative z-10 text-center flex flex-col space-y-1">
        <span className="text-gray-800 font-bold text-lg group-hover:text-blue-600 transition-colors duration-300">{name}</span>
        <span className="text-blue-500 text-sm font-medium">{prof}</span>
      </div>
    </div>
  )
}
// props validation should be propTypes
Testimonial.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prof: PropTypes.string.isRequired,
};
export default Testimonial
