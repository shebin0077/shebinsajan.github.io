
// Enhancement for CS 499 - Database
const mongoose = require('mongoose');
// Embedded Trip Schema
const TripDetailsSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String },
  image: { type: String, required: true }
}, { _id: false }); // Embedded, no need for ID

const TripSchema = new mongoose.Schema({
  destination: { type: String, required: true, index: true },
  trips: [TripDetailsSchema]
}, { timestamps: true });// Enhancement: added timestamps

// Static method for filtering by destination (can be called from controller)
TravlrSchema.statics.filterByDestination = function (destinationQuery) {
  return this.find({ destination: { $regex: destinationQuery, $options: 'i' } });
};


// Enhancement: Added index for performance
TravlrSchema.index({ destination: 1 });

module.exports = mongoose.model('Trip', TravlrSchema);

// This model defines the structure of a trip document in the MongoDB database.
// Each trip document contains a destination and an array of trip details.
// The trip details include fields like code, name, length, start date, resort, price per person,
// description, additional details, and an image URL.
// The schema is designed to allow for multiple trips under a single destination, with each trip having its own set of details.
// The timestamps option automatically adds createdAt and updatedAt fields to the document.
// The TripDetailsSchema is embedded within the TripSchema, allowing for a structured representation of trip details.
// The model is exported for use in other parts of the application, such as controllers or services.
// The Trip model can be used to interact with the trips collection in the MongoDB database,
// allowing for operations like creating, reading, updating, and deleting trip documents.
// The unique constraint on the code field ensures that each trip detail can be uniquely identified by its code.
// The index on the destination field allows for efficient querying of trips by destination.
// The required fields ensure that essential information is provided when creating or updating trip documents.
// The image field is expected to contain a URL or path to the trip's image, which can be used for display purposes.
// The Trip model can be used in conjunction with other models, such as user or booking models,
// to create a comprehensive travel application that manages trips, bookings, and user interactions.
// The model can be extended in the future to include additional features, such as reviews, ratings, or availability.
// The Trip model is a key part of the application's data layer, providing a structured way to manage trip information.
// The use of Mongoose allows for easy validation and type checking of the data,
// ensuring that the application maintains data integrity and consistency.
// The Trip model can be integrated with a RESTful API to provide endpoints for managing trips,         