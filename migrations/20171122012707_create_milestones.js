exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('milestones', function (table) {
    table.increments();
    table.string('description');
    table.date('date_acheived');
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("milestones");
}
