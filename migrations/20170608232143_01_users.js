
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username').notNull();
    table.string('password').notNull();
    table.string('email').notNull().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
