
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'book1', author: 'tac gia1', publisher_id: 1, price: 12000},
        {title: 'book2', author: 'tac gia2', publisher_id: 2, price: 12000},
        {title: 'book3', author: 'tac gia3', publisher_id: 1, price: 12000},
        {title: 'book4', author: 'tac gia4', publisher_id: 3, price: 12000},
        {title: 'book5', author: 'tac gia5', publisher_id: 2, price: 12000}
      ]);
    });
};
