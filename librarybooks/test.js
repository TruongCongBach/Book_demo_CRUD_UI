const BookReposirory = require('./controller/book-repository');
const Book = require('./public/js/book');

const knex = require('knex') ({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : '1',
        database : 'crudbooks'
    }
});

let repository = new BookReposirory(knex);
let book = new Book('chuyen du hanh');
book.setAuther("asdas");
book.setPublishor('ssadas');
book.setPrice(3333);

// repository.save(books).then(listall => {
//     console.log(listall);
// });

repository.save(book).then(()=>{
    console.log('success');
}).catch(()=>{
        console.log('error');
    }
);