
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'TheRZA',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          email: "Tongue@yourmom.com"
        },
        {
          username: 'GhostFace',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          email: "ThrowinPancakes@yourmom.com"
        },
        {
          username: 'TheGZA',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          email: "OneShot@yourmom.com"
        },
        {
          username: 'Raekwon',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          email: "EarlGrey@yourmom.com"
        },
        {
          username: 'UGod',
          password: '$2a$10$hm0vyNQXkIExx1Ca4UPAvuXrrBoAEeAzfXKI1uOnfwrYhfLyIsLF2',
          email: "ambivalent@yourmom.com"
        },
      ]);
    });
};
