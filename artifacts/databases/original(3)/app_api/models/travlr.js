// BEFORE: models/travlr.js

const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: String,
  name: String,
  length: String,
  start: Date,
  resort: String,
  perPerson: String,
  description: String,
  details: String,
  image: String
});

module.exports = mongoose.model('Trip', tripSchema);
