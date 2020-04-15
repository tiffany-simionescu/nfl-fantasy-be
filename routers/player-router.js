// Router
const playerRouter = require('express').Router();

// Model
const Players = require('../models/player-model');

// Middleware
const {
  validateFanId,
  validatePlayerId,
  validatePlayerPost,
} = require('../middleware/verify-players');

// == ENDPOINTS == //

// GET - /api/players/fan/:id
// Gets all players saved by fan
playerRouter.get('/fan/:id', validateFanId(), (req, res) => {
  Players.findFan(req.params.id)
    .then(players => {
      res.status(200).json(players);
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retrieve the fan's players. Please try again later."
      })
    })
})

// GET - /api/players/:id
playerRouter.get('/:id', validatePlayerId(), (req, res) => {
  Players.findById(req.params.id)
    .then(player => {
      res.status(200).json(player)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retrieve the player. Please try again later."
      })
    })
})

// POST - /api/players
// Adds player to fan account
playerRouter.post('/', validatePlayerPost(), (req, res) => {
  Players.add(req.body)
    .then(player => {
      res.status(200).json(player)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to add the player to the fan's account. Please try again later."
      })
    })
})

// PUT - /api/players/:id
// To move player to a new team
playerRouter.put('/:id', validatePlayerId(), (req, res) => {
  const changes = req.body;

  Players.update(req.params.id, changes)
    .then(player => {
      res.status(200).json(player)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to update the player. Please try again later."
      })
    })
})

// DELETE - /api/players/:id
// Removes player from fan account
playerRouter.delete('/:id', validatePlayerId(), (req, res) => {
  Players.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "The player was removed from the fan's account."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to remove the player from the fan's account. Please try again later."
      })
    })
})

module.exports = playerRouter;