// const express = require('express');
// const cors = require('cors');
// require('dotenv').config({ path: './config.env' });
// const port = process.env.PORT || 5000;

// app.use(cors({ origin: "https://track-ashen.vercel.app" }));

// // Initialize app
// const app = express();

// // Use middleware
// app.use(cors({
//     origin : ["https://vercel.com/kvs-projects-b0e39d5c/track/JBvrpu6YaPt1dkfgGWsKijEosLwP"],
//     methods: ["POST", "GET", "DELETE"],
//     credentials: true
// }));
// app.use(express.json());

// // Connect to MongoDB
// const con = require('./db/connection.js');

// // Use routes
// app.use(require('./routes/route'));

// // Start server
// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

// module.exports = app;
const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

// Initialize app
const app = express();

// Middleware
app.use(cors({
    origin: [
        "https://track-ashen.vercel.app"
    ],
    methods: ["POST", "GET", "DELETE"],
    credentials: true
}));
app.use(express.json());

// Connect to MongoDB
const con = require('./db/connection.js'); // Ensure this file properly connects to MongoDB

// Routes
app.use(require('./routes/route')); // Ensure './routes/route' exports a valid router

// Port
const port = process.env.PORT || 5000;

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//module.exports = app; // Optional, only needed for testing
