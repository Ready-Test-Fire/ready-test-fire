
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tests', function(table) {
    table.increments();
    table.integer('code_text').notNull();
    table.integer('question_id').references('id').inTable('questions');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tests');
};
