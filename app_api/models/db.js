const mongoose = require('mongoose');
const readLine = require('readline');

const dbURI = "mongodb+srv://gopakumarcg57:z8PxZskrw2ffk5b5@cluster0.qvlcr3o.mongodb.net/travlr?retryWrites=true&w=majority&tls=true";

// Connect to MongoDB Atlas
const connect = () => {
    setTimeout(() => {
        mongoose.connect(dbURI, {});
    }, 1000);
};

// Connection Events
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to Atlas`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error: ', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Windows SIGINT fix
if (process.platform === 'win32') {
    const r1 = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    r1.on('SIGINT', () => {
        process.emit("SIGINT");
    });
}

// Graceful Shutdown
const gracefulShutdown = (msg) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart');
    process.kill(process.pid, 'SIGUSR2');
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination');
    process.exit(0);
});
process.on('SIGTERM', () => {
    gracefulShutdown('app shutdown');
    process.exit(0);
});

// Start connection
connect();

// Load schema
require('./travlr');

module.exports = mongoose;