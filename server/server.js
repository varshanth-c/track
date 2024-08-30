const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;

// Initialize app
const app = express();

// Use middleware
app.use(cors({
    origin : ["https://track-ashen.vercel.app"],
    methods:["POST","GET","DELETE"],
    credentials:true
            ));
app.use(express.json());

// Connect to MongoDB
const con = require('./db/connection.js');

// Use routes
app.use(require('./routes/route'));

// Start server
module.exports = app;
