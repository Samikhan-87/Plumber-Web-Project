import React, { useState } from "react";

const Book = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    date: "",
    address: "",
    workType: "Faucet Repair & Installation",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login first");
    return;
  }

  const res = await fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      fullName: formData.fullName,        // ADD THIS
      contact: formData.contact,          // ADD THIS
      serviceType: formData.workType,
      appointmentDate: formData.date,
      address: formData.address
    })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Booking successful!");
    // Optionally reset form
    setFormData({
      fullName: "",
      contact: "",
      date: "",
      address: "",
      workType: "Faucet Repair & Installation",
    });
  } else {
    if (res.status === 401) {
      localStorage.removeItem("token");
      alert("Session expired. Please login again.");
      window.location.href = "/login";
    } else {
      alert(data.message || "Something went wrong");
    }
  }
};

  return (
    <div className="shadow-xl rounded-2xl my-10 bg-white flex flex-col md:flex-row justify-center gap-10 md:mx-5 overflow-hidden border border-gray-100">
      <div className="w-full md:w-2/3 flex flex-col gap-6 py-10 px-6 md:px-12">
        {/* Header */}
        <div className="text-center md:text-left">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">BOOK NOW</span>
          <h2 className="font-bold text-[28px] text-gray-800 mt-4">Schedule Your Service</h2>
          <div className="flex md:justify-start justify-center my-3">
            <span className="w-16 h-1 bg-blue-500 rounded-full"></span>
            <span className="w-4 h-1 bg-blue-300 rounded-full mx-1"></span>
          </div>
          <p className="text-gray-500">Let us make your home better with our professional services</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="font-semibold text-gray-700">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full rounded-xl border-2 border-gray-200 outline-none p-3 focus:border-blue-500 transition-colors duration-300" placeholder="Enter your full name" required />
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="contact" className="font-semibold text-gray-700">Email / Phone</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full rounded-xl border-2 border-gray-200 outline-none p-3 focus:border-blue-500 transition-colors duration-300" placeholder="Email or phone number" required />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="date" className="font-semibold text-gray-700">Preferred Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full rounded-xl border-2 border-gray-200 outline-none p-3 focus:border-blue-500 transition-colors duration-300" required />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="font-semibold text-gray-700">Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Enter your complete address" className="rounded-xl border-2 border-gray-200 outline-none p-3 focus:border-blue-500 transition-colors duration-300 resize-none" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="workType" className="font-semibold text-gray-700">Service Type</label>
            <select name="workType" value={formData.workType} onChange={handleChange} className="rounded-xl border-2 border-gray-200 outline-none p-3 focus:border-blue-500 transition-colors duration-300 bg-white">
              <option>Faucet Repair & Installation</option>
              <option>Leak Repairs and Detection</option>
              <option>Water Heater Installations & repairs</option>
              <option>Pipeline Installations and Replacements</option>
              <option>Bathroom Remodeling</option>
              <option>Water Line Repair</option>
            </select>
          </div>
          <button type="submit" className="group p-4 text-white font-bold px-8 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 mt-2">
            Book Appointment
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </form>
      </div>
      
      {/* Image Section */}
      <div className="hidden md:block relative w-1/3">
        <img src="https://images.unsplash.com/photo-1552143233-c29bb1292978?auto=format&fit=crop&w=870&q=80" alt="Plumber" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default Book;
