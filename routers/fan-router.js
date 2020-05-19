// Router
const fanRouter = require('express').Router();

// Model
const Fans = require('../actions/fan-actions');

// Middleware
const {
  validateFanId,
  validateFanPost,
} = require('../middleware/verify-fans');

// == ENDPOINTS == //

// GET - /api/fans
fanRouter.get('/', (req, res) => {
  Fans.find(fans => {
    res.status(200).json(fans)
  })
  .catch(err => {
    res.status(500).json({
      message: "There was an error trying to retrieve the Fans. Please try again later."
    })
  })
})

// GET - /api/fans/:id
fanRouter.get('/:id', validateFanId(), (req, res) => {
  Fans.findById(req.params.id)
    .then(fan => {
      res.status(200).json(fan)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error trying to retrieve the Fan. Please try again later."
      })
    })
})

// POST - /api/fans/register
fanRouter.post('/register', (req, res) => {
  let newFan = req.body;
  let hash = bcrypt.hashSync(newFan.password, 10);
  newFan.password = hash;

  Fan.add(newFan)
    .then(saved => {
      res.status(201).json({
        message: `Welcome ${saved.first_name}!`
      })
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error while trying to register the new Fan. Please try again later."
      })
    })
})

// POST - /api/fans/login
fanRouter.post('/login', (req, res) => {
  let { username, password } = req.body;

  Fan.findByFilter({ username }) 
    .then(fan => {
      if (fan && bcrypt.compareSync(password, fan.password)) {
        const token = generateToken(fan);

        res.status(200).json({
          message: `Welcome ${fan.first_name}!`,
          authToken: token,
        })
      } else {
        res.status(400).json({
          message: "You are not authorized. Please try to login again."
        })
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: "There was an error during login. Please try again later."
      })
    })
})

// PUT - /api/fans/:id
fanRouter.put('/:id', validateFanId(), (req, res) => {
  const changes = req.body;

  Fan.update(req.params.id, changes)
    .then(fan => {
      res.status(200).json(fan)
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to update the Fan. Please try again later."
      })
    })
})

// DELETE - /api/fans/:id
fanRouter.delete('/:id', validateFanId(), (req, res) => {
  Fan.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Fan was removed successfully."
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an error while trying to remove the Fan. Please try again later."
      })
    })
})