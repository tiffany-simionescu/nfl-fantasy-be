exports.up = async function(knex) {
  await knex.schema.createTable("fans", offensePlayers => {

    offensePlayers.increments("fan_id")

    offensePlayers.string("username", 50)
      .notNullable()
      .unique()

    offensePlayers.string("password", 50)
      .notNullable()

    offensePlayers.string("email", 128)
      .notNullable()
      .unique()

    offensePlayers.string("first_name", 128)
      .notNullable()

    offensePlayers.string("last_name", 128)
      .notNullable()

    offensePlayers.string("city", 128)
      .notNullable()

    offensePlayers.string("state", 2)
      .notNullable()

    // Create an array for players in Fan's account
    // Max players = 17

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fans")
};
