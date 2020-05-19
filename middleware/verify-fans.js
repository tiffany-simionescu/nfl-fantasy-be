const Fans = require('../actions/fan-actions');

module.exports = { validateFanId };

function validateFanId() {
  return (req, res, next) => {
    Fans.findById(req.params.id)
      .then(fan => {
        if (fan) {
          req.fan = fan;
          next();
        } else {
          res.status(403).json({
            message: "Invalid Fan Id."
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error while trying to retrieve the Fan. Please try again later."
        })
      })
  }
}