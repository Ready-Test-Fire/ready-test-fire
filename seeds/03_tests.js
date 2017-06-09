
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {
          question_id: 1,
          code_text: 2
        },
        {
          question_id: 2,
          code_text: 1
        },
        {
          question_id: 3,
          code_text: 4
        },
        {
          question_id: 4,
          code_text: 3
        }
      ]);
    });
};
