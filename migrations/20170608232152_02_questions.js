
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function(table) {
    table.increments();
    table.string('prompt');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');
};
