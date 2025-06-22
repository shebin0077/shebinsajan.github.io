const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Replace with your Mongoose model

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
 
        const trips = await Trip.find({}).exec(); // Use the Trip model directly
        if (!trips || trips.length === 0) {
            return res.status(404).json({ message: 'No trips found' });
        }
        return res.status(200).json(trips); // Return the list of trips
   
};

const tripsFindByCode = async (req, res) => {
    
        const trips = await Trip.find({
            'code': req.params.tripCode
        }).exec(); // Use the Trip model directly
        if (!trips) {
            return res.status(404).json(err);
        }
        return res.status(200).json(trips); // Return the list of trips
    
};

// POST: /trips - Adds a new Trip
const tripsAddTrip = async (req, res) => {
  
        console.log('Request Body:', req.body); // Log the request body
        const trip = new Trip(req.body);
        const savedTrip = await trip.save();
        res.status(201).json(savedTrip);
   
};

// PUT: /trips/:tripCode - Updates an existing Trip
const tripsUpdateTrip = async (req, res) => {
   
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
    
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};

