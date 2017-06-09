
exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', function(table) {
    table.increments();
    table.text('answer_text').notNull();
    table.integer('user_id').references('id').inTable('users');
    table.integer('question_id').references('id').inTable('questions');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('answers');
};
