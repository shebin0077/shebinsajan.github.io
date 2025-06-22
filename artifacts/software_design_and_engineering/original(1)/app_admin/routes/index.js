const express = require("express");
const router = express.Router();
const {authenticateJWT} = require('../controllers/middlewares');

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');


router.route("/register").post(authController.register); 
router.route("/login").post(authController.login); 

router.route("/trips")
    .get(tripsController.tripsList) 
    .post(authenticateJWT,tripsController.tripsAddTrip); 

router.route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode) 
    .put(authenticateJWT,tripsController.tripsUpdateTrip); 

module.exports = router;