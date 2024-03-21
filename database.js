// Import dotenv and call config to load the environment variables
require('dotenv').config();

// Import mongoose
const mongoose = require('mongoose');

// Connect to MongoDB using the connection string from your .env file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Optional: Log a message on successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Optional: Log an error if the connection fails
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});