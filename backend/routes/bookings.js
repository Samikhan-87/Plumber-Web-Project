const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const jwt = require('jsonwebtoken');

// Middleware to verify token
const verify = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
};

// ✅ POST /bookings — Create a booking with fullName + contact
router.post("/", verify, async (req, res) => {
  try {
    const {
      serviceType,
      appointmentDate,
      address,
      fullName,
      contact
    } = req.body;

    if (!fullName || !contact || !serviceType || !appointmentDate || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = new Booking({
      fullName,
      contact,
      serviceType,
      appointmentDate,
      address,
      userId: req.userId
    });

    await booking.save();
    res.status(201).json({ message: "Booking created", booking });
  } catch (err) {
    res.status(500).json({ message: "Booking failed", error: err.message });
  }
});

module.exports = router;
