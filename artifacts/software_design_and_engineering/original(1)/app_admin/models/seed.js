const mongoose = require('./db');
const trip = require('./travlr');

var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));

const seedDB = async () => {
    await trip.deleteMany({});
    await trip.insertMany(trips);

};

seedDB().then(() => {
    mongoose.connection.close();
    process.exit(0);
});