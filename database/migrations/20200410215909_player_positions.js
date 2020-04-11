exports.up = async function(knex) {
  await knex.schema.createTable("player_positions", playerPositions => {

    playerPositions.increments("player_position_id")

    playerPositions.string("player_position", 128)
      .notNullable()
      .unique()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("player_positions")
};