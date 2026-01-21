import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { service } from '../functions/pictures'
import { feedback } from '../functions/customerFeedback'
import Card from '../components/Card';
import Project from '../components/Project';
import Choose from '../components/Choose';
import image from '../functions/bgImage';
import Book from "../components/Book";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [Image, setImage] = useState('')

  const changer = () => {
    const bg = image[Math.floor(Math.random() * image.length)];
    setImage(bg)
  }

  useEffect(() => {
    setInterval(changer, 5000);
  },[])
 
  return (
    <>
      <Navbar />
        <div className="relative">
        <div className="relative">
          <div className="pt-16 pb-32 z-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-start text-white text-center px-4 mt-10">
            {/* Badge */}
            <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/20">
              <span className="text-sm font-medium tracking-wider">⭐ TRUSTED BY 500+ CUSTOMERS</span>
            </div>
            <h1 className="text-[40px] md:text-[64px] font-bold my-4 animate__animated animate__zoomIn leading-tight">
              Quality Plumbing <span className="text-blue-400">at its Best</span>
            </h1>
            <p className="text-[18px] md:text-[24px] mb-8 text-gray-200 max-w-2xl">Best plumbing and maintenance company in Lahore. Professional service you can trust.</p>
            <div className="flex flex-col sm:flex-row gap-4 z-50">
              <a href="#booking" className="group p-4 font-bold px-10 border-2 border-blue-500 bg-blue-500 rounded-full hover:bg-blue-600 hover:border-blue-600 active:bg-blue-700 active:border-blue-700 duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/30 cursor-pointer">
                   BOOKING
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
              </a>
              <NavLink to="/result" className="group p-4 font-bold px-10 border-2 border-white bg-transparent rounded-full hover:bg-white hover:text-blue-900 active:bg-gray-100 duration-300 flex items-center gap-2 cursor-pointer">
                  OUR SERVICES
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              </NavLink>
            </div>
          </div>
          <img
            className="h-[750px] w-full object-cover"
            src={Image && Image}
            alt="four white ceramic urinal sink"
          />
          <div className="absolute bg-gradient-to-b from-[#0f2b5b]/90 via-[#0f2b5b]/80 to-[#0f2b5b]/90 top-0 left-0 right-0 bottom-0"/>
        </div>
        <div className="absolute top-50 bottom-0 left-0 right-0 z-50">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,165.3C672,181,768,235,864,266.7C960,299,1056,309,1152,293.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </div>
      <div className="bg-white shadow-xl md:mx-5 rounded-2xl py-12 my-8 border border-gray-100">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">OUR SERVICES</span>
        </div>
        <h2 className="text-blue-600 font-bold text-[32px] text-center">Plumbing Repairing Service</h2>
        <div className="flex justify-center my-3">
          <span className="w-16 h-1 bg-blue-500 rounded-full"></span>
          <span className="w-4 h-1 bg-blue-300 rounded-full mx-1"></span>
        </div>
        <p className="text-gray-500 max-w-xl mx-auto text-center py-2 px-4" style={{ fontSize: '16px' }}>
          If you need any help with your plumbing, give us a call at Salman and Ayan Plumbing. We offer variety of
          plumbing services in Salman and Ayan Enterprises
        </p>
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {service.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            alt={data.alt}
            skill={data.skill}
            summary={data.summary}
          />
        ))}
          </div>
        </div>
      </div>
      <div className="my-10 justify-center items-center bg-white shadow-xl pt-12 pb-8 md:mx-5 rounded-2xl border border-gray-100">
        <Project />
      </div>
      <div id="booking">
        <Book />
      </div>
      <div>
        <Choose />
      </div>
      <div className="py-10 bg-white shadow-xl rounded-2xl my-8 md:mx-5 px-3 md:px-0 border border-gray-100">
        <div className='text-center flex flex-col space-y-3 my-6'>
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mx-auto">TESTIMONIALS</span>
          <h2 className="text-blue-600 font-bold text-[32px]">What Our Clients Say</h2>
          <div className="flex justify-center my-2">
            <span className="w-16 h-1 bg-blue-500 rounded-full"></span>
            <span className="w-4 h-1 bg-blue-300 rounded-full mx-1"></span>
          </div>
          <p className="max-w-sm md:max-w-xl mx-auto text-gray-500 py-2 px-4">We place huge value on strong relationships and have seen the benefit they
            bring to our business. Customer feedback is vital in helping us to get it right
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 gap-6
            my-8 justify-center bg-white p-6 md:p-10 md:mx-0 rounded-md">
          {feedback.map((feed, index) => (
            <Testimonial
            key={index}
            image={feed.image}
            alt={feed.alt}
            message={feed.message}
            name={feed.name}
            prof={feed.prof}
          />
          ))}
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Home;
