// Dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers
// const fanRouter = require('../routers/fan-router');
const playerRouter = require('../routers/player-router');

// Server
const server = express();

// Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes
// server.use('/api/fans', fanRouter);
server.use('/api/players', playerRouter);

// Root Endpoint
server.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tackle The Trade API!",
  });
});

module.exports = server;