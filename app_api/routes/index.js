const express = require("express");
const router = express.Router();
const {authenticateJWT} = require('../controllers/middlewares');

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');


router.route("/register").post(authController.register); // Register a new user
router.route("/login").post(authController.login); // Register a new user

// Route for listing trips and adding a new trip
router.route("/trips")
    .get(tripsController.tripsList) // Get all trips
    .post(authenticateJWT,tripsController.tripsAddTrip); // Add a new trip with authentication

// Route for finding a trip by its code
router.route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode) // Get a trip by tripCode
    .put(authenticateJWT,tripsController.tripsUpdateTrip); // Update a trip by tripCode


module.exports = router;