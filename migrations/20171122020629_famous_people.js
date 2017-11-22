exports.up = function(knex) {
  return knex.schema.table('milestones', function (table) {
    table.integer('famousid');
  })
}

exports.down = function(knex) {
  return knex.schema.dropColumn("famousid");
}
