exports.up = async function(knex) {
  await knex.schema.createTable("fans", fans => {

    fans.increments("fan_id")

    fans.string("username", 50)
      .notNullable()
      .unique()

    fans.string("password", 50)
      .notNullable()

    fans.string("email", 128)
      .notNullable()
      .unique()

    fans.string("first_name", 128)
      .notNullable()

    fans.string("last_name", 128)
      .notNullable()

    fans.string("city", 128)
      .notNullable()

    fans.string("state", 2)
      .notNullable()

    // Create an array for players in Fan's account
    // Max players = 17

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fans")
};
