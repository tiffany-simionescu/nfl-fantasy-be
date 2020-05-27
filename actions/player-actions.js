// Database Configuration File
const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  findFan
}

function find() {
  return db("players")
    .select("*")
}

function findById(id) {
  return db("players")
    .where({ id })
}

function findFan(fan_id) {
  return db("fans")
    .where({ fan_id })
}