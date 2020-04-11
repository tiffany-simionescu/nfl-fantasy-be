exports.up = async function(knex) {
  await knex.schema.createTable("defense_players", defensePlayers => {

    defensePlayers.increments("defense_player_id")

    defensePlayers.string("defense_player_name", 128)
      .notNullable()

    defensePlayers.integer("team_id")
      .notNullable()
      .references("team_id")
      .inTable("teams")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    defensePlayers.integer("player_position_id")
      .notNullable()
      .references("player_position_id")
      .inTable("player_positions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("defense_players")
};