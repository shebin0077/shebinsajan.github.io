// Enhancement for CS 499 - Database Seeding Script
// Inserts structured trip data using updated schema with timestamps and indexing

const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Adjust if your model path differs

mongoose.connect('mongodb://localhost:27017/travlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected...');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const sampleTrips = [
  {
    destination: "Thailand",
    trips: [
      {
        code: "TH101",
        name: "Bangkok Explorer",
        length: "5 days",
        start: new Date("2025-08-01"),
        resort: "Central Grand",
        perPerson: "450",
        description: "Explore vibrant Bangkok city life",
        details: "Visit temples, markets, and the Grand Palace.",
        image: "thailand1.jpg"
      },
      {
        code: "TH102",
        name: "Chiang Mai Adventure",
        length: "7 days",
        start: new Date("2025-08-15"),
        resort: "Northern Hills",
        perPerson: "600",
        description: "A calm mountain retreat",
        details: "Elephant sanctuary, night bazaar, cooking classes.",
        image: "thailand2.jpg"
      }
    ]
  },
  {
    destination: "Japan",
    trips: [
      {
        code: "JP201",
        name: "Tokyo Discovery",
        length: "4 days",
        start: new Date("2025-09-05"),
        resort: "Shinjuku Plaza",
        perPerson: "800",
        description: "Modern Tokyo experience",
        details: "Skytree, Shibuya crossing, sushi tour.",
        image: "japan1.jpg"
      }
    ]
  }
];

// Clear and seed
Trip.deleteMany({})
  .then(() => Trip.insertMany(sampleTrips))
  .then(() => {
    console.log("Database seeded with trip data.");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Seeding error:", err);
    mongoose.connection.close();
  });
