const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel');


router.get('/', travelController.index);
router.get('/travel', travelController.travel);
router.get('/travel/:code', travelController.travelDetails);

router.get('/rooms', (req, res) => res.render('rooms'));
router.get('/meals', (req, res) => res.render('meals'));
router.get('/news', (req, res) => res.render('news'));
router.get('/about', (req, res) => res.render('about'));
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;