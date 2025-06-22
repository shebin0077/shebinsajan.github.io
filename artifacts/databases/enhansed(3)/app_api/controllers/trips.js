const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Replace with your Mongoose model

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec(); // Use the Trip model directly
        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: 'No trips found' });
        }
        return res.status(200).json(trips); // Return the list of trips
    } catch (err) {
        console.error('Error fetching trips:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const tripsFindByCode = async (req, res) => {
    try {
        const trips = await Trip.find({
            'code': req.params.tripCode
        }).exec(); // Use the Trip model directly
        if (!trips) {
            return res.status(404).json(err);
        }
        return res.status(200).json(trips); // Return the list of trips
    } catch (err) {
        console.error('Error fetching trips:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// POST: /trips - Adds a new Trip
const tripsAddTrip = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the request body
        const trip = new Trip(req.body);
        const savedTrip = await trip.save();
        res.status(201).json(savedTrip);
    } catch (err) {
        console.error('Error adding trip:', err); // Log the error
        res.status(500).json({ error: 'Failed to add trip', details: err.message });
    }
};

// PUT: /trips/:tripCode - Updates an existing Trip
const tripsUpdateTrip = async (req, res) => {
    try {
        console.log('Request Params:', req.params); // Debugging log
        console.log('Request Body:', req.body); // Debugging log

        const updatedTrip = await Trip.findOneAndUpdate(
            { 'code': req.params.tripCode }, // Match the trip by its code
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true } // Return the updated document
        ).exec();

        if (!updatedTrip) { // Database returned no data
            return res.status(404).json({ message: 'Trip not found' });
        }

        console.log('Updated Trip:', updatedTrip); // Debugging log
        return res.status(200).json(updatedTrip); // Return the updated trip
    } catch (err) {
        console.error('Error updating trip:', err); // Debugging log
        return res.status(500).json({ error: 'Failed to update trip', details: err.message });
    }
};


const getFilteredTrips = async (req, res) => {
  try {
    const { destination } = req.query;
    const trips = await Trip.filterByDestination(destination || '');
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error filtering trips:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
// Enhancement for CS 499 - Database
// This controller provides endpoints for managing trips in the application.
// It includes functionality to list all trips, find trips by code, add a new trip, and update an existing trip.
// The tripsList function retrieves all trips from the database and returns them as a JSON response.
// The tripsFindByCode function retrieves a specific trip based on its code and returns it as a JSON response.
// The tripsAddTrip function allows adding a new trip to the database, validating the request body, and returning the created trip.     

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    getFilteredTrips,
};

