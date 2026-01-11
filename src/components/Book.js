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
        "Authorization": token
      },
      body: JSON.stringify({
        serviceType: formData.workType,
        appointmentDate: formData.date,
        address: formData.address
      })
    });

    const data = await res.json();
    if (res.ok) {
      alert("Booking successful!");
    } else {
      alert(data.message || "Something went wrong");
    }
  };

  return (
    <div className="shadow-lg rounded-md my-10 bg-white flex flex-col md:flex-row justify-center gap-10 md:mx-5 md:pl-10 pl-4">
      <div className="w-full md:w-2/3 flex flex-col gap-5 my-5">
        <div className="text-center md:text-left">
          <h2 className="font-bold text-[25px] text-blue-500">BOOKING FORM</h2>
          <p className="font-bold text-[20px]">Let Us Make Your Home Better</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}  className="w-full rounded-md border border-gray-300 outline-none" placeholder="Input Your FullName" required />
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="contact">Email / Phone</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full rounded-md border border-gray-300 outline-none" placeholder="Email / Phone Number" required />
            </div>
            <div className="flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="date">Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full rounded-md border border-gray-300 outline-none" required />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Input Your Address" className="rounded-md border border-gray-300 outline-none" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="workType">Work Type</label>
            <select name="workType" value={formData.workType} onChange={handleChange} className="rounded-md border border-gray-300 outline-none">
              <option>Faucet Repair & Installation</option>
              <option>Leak Repairs and Detection</option>
              <option>Water Heater Installations & repairs</option>
              <option>Pipeline Installations and Replacements</option>
              <option>Bathroom Remodeling</option>
              <option>Water Line Repair</option>
            </select>
          </div>
          <button type="submit" className="p-3 text-white font-bold px-8 border rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-500 duration-100">
            Book Now
          </button>
        </form>
      </div>
      <div className="hidden md:flex">
        <img src="https://images.unsplash.com/photo-1552143233-c29bb1292978?auto=format&fit=crop&w=870&q=80" alt="Plumber" />
      </div>
    </div>
  );
};

export default Book;
