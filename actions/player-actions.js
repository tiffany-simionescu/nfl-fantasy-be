// Database Configuration File
const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  // findFan,
  // update,
  // add,
  // remove
}

function find() {
  return db("players")
    // .select("*") 
}

function findById(id) {
  return db("players")
    .where({ id })
}

// == Next Release - May need to update == //

// function findFan(fan_id) {
//   return db("fans")
//     .where({ fan_id })
// }

// function update(player_id, changes) {
//   return db("players")
//     .where({ player_id })
//     .update(changes, '*');
// }


// async function add(player) {
//   const [player_id] = await db("players").insert(player);

//   return findById(player_id);
// }

// function remove(player_id) {
//   return db("players")
//     .where({ player_id })
//     .del();
// }