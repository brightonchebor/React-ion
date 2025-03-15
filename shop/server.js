// server.js
require("dotenv").config();
const express = require("express");

// Import the configuration values from index.js
const { app_port } = require("./index");

// Import routes
const routes = require("./routes/index");

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the routes
app.use("/", routes);

// Start the server
app.listen(app_port, () => {
  console.log(`Server is running on port ${app_port}`);
});
