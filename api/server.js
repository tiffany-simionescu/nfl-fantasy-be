// Dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers

// Server
const server = express();

// Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes

// Root Endpoint
server.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tackle The Trade API!",
  });
});

module.exports = server;