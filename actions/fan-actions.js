// // Database Configuration File
const db = require('../database/dbConfig');

// module.exports = {
  find,
  findByFilter,
  findById,
  findPlayerById,
  update,
  add,
  remove
// }

// findPlayers - finds all players in fan's account

function find() {
  return db("fans")
    .select("*");
}

function findByFilter(filter) {
  return db("fans")
    .where({ filter });
}

function findById(fan_id) {
  return db("fans")
    .where({ fan_id })
}

function findPlayerById(player_id) {
  return db("players")
    .where({ player_id })
}