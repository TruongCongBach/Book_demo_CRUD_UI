const express = require('express');
const app = express();
const router = require('./router/router');
const bodyParser = require('body-parser');
const knex = require('knex')(require('./public/js/config'));
const BookRepository = require('./controller/book-repository');

app.set('books', new BookRepository(knex));
app.use(bodyParser.json());
app.use(router);


app.listen(3000,() =>{
    console.log('start sever 3000');
});