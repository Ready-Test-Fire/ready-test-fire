
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {
          question_id: 1,
          user_id: 2,
          answer_text: 'something1'
        },
        {
          question_id: 2,
          user_id: 1,
          answer_text: 'something2'
        },
        {
          question_id: 3,
          user_id: 4,
          answer_text: 'something3'
        },
        {
          question_id: 4,
          user_id: 3,
          answer_text: 'something4'
        }
      ]);
    });
};
