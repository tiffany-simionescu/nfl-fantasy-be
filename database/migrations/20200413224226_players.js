
exports.up = async function(knex) {
  await knex.schema.createTable("players", players => {

    players.increments("playerID")

    players.string("playerFirst", 128)
      .notNullable()

    players.string("playerLast", 128)
      .notNullable()

    players.string("playerFull", 128)
      .notNullable()

    players.string("position", 2)
      .notNullable()

    players.integer("startYear")
      .notNullable()

    players.string("currentTeam", 128)
      .notNullable()

    players.integer("height")
      .notNullable()

    players.integer("weight")
      .notNullable()

    players.date("dob")
      .notNullable()

    players.float("forty")
      .notNullable()

    players.integer("bench")
      .notNullable()

    players.integer("vertical")
      .notNullable()
      
    players.integer("broad")
      .notNullable()

    players.integer("shuttle")
      .notNullable()

    players.integer("cone")
      .notNullable()

    players.integer("arm")
      .notNullable()

    players.integer("hand")
      .notNullable()

    players.integer("dpos")
      .notNullable()

    players.string("col", 128)
      .notNullable()

    players.string("dv", 128)
      .notNullable()

    players.integer("jnum")
      .notNullable()

    players.integer("dcp")
      .notNullable()

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("players")
};