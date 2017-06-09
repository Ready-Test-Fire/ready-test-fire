
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function() {
      return knex('tests').del();
    }).then(function() {
      return knex('questions').del();
    }).then(function() {
      return knex('users').del()
      .then(function() {
    });
  });
};
