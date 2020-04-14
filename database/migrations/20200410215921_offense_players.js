exports.up = async function(knex) {
  await knex.schema.createTable("offense_players", offensePlayers => {

    offensePlayers.increments("offense_player_id")

    offensePlayers.string("offense_player_name", 128)
      .notNullable()

    offensePlayers.integer("team_id")
      .notNullable()
      .references("team_id")
      .inTable("teams")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    offensePlayers.integer("player_position_id")
      .notNullable()
      .references("player_position_id")
      .inTable("player_positions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("offense_players")
};