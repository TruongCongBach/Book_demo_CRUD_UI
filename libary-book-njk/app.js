const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const BookRepository = require('./src/book/book-repository');
const connection = require('./database/connection');
const BookFactory = require('./src/book/book-factory-db');
const Searcher = require('./src/search-services/searcher');

//index api postmen
//let index = require('./routes/index');

//home api view
let home = require('./routes/index');

let app = express();

// view engine setup
nunjucks.configure('views', {
    autoescape: true,
    express: app
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('books.repo', new BookRepository(connection));
app.set('book.searcher', new Searcher(connection, new BookFactory()));

//app.use('/', index);
app.use('/', home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
  