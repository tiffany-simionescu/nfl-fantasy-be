exports.up = async function(knex) {
  await knex.schema.createTable("teams", defensePlayers => {

    defensePlayers.increments("team_id")

    // Research fields to be added to DB

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("teams")
};