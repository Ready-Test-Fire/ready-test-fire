
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          prompt: 'Write a function named test that returns the string "This Works!".'

        },
        {
          prompt: 'Write a function named "sum" that takes an array of numbers and returns the sum.'

        },
        {
          prompt: 'Write a function named "doubleNumbers" takes an array of numbers and returns an array with those numbers doubled.'

        },
        {
          prompt: 'Write a function named "multiplyNumbers" that takes an array of numbers and returns an array with those numbers multiplied by another value.'

        },
        {
          prompt: 'Write a function named "doubleLetters" that takes a string and doubles every letter.'

        },
        {
          prompt: 'Write a function named "sumLetters" that takes a string and returns the sum of every character in the string.'

        },
        {
          prompt: 'Write a function named "repeats" that returns true if the first half of the string equals the last half, and false if doesn\'t.'

        },
        {
          prompt: 'Write a function named "countVowels" that takes a string and returns the number of vowels in the string, excluding "y".'

        },
        {
          prompt: 'Write a function named "onlyEven" that takes an array of numbers and returns only the even numbers.'

        },
        {
          prompt: 'Write a function named "sortNumbers" that takes an array of numbers and sorts them from smallest to largest.'

        },
        {
          prompt: 'Write a function named "everyOther" that takes a string and returns every other character in the string.'
        }

      ]);
    });
};
