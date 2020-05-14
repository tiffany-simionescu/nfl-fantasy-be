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
// server.use(cors());
server.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true,
  'Access-Control-Allow-Origin': 'http://localhost:3000' 
  //put development heroku link here, * wildcard bad idea, then set up for www.tacklemytrade.com, once we know it works. in access-control-allow-origin 
}));

// Routes
// server.use('/api/fans', fanRouter);
server.use('/api/players', playerRouter);

// Root Endpoint
server.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tackle My Trade API!",
  });
});

module.exports = server;