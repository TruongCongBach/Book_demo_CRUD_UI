const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/Ajax/book-controller');
const check = require('../http/middlerware/index');

let bookController = new BookController();

router.get('/', check.searchCondition, bookController.search);

router.get('/book/:id', check.searchCondition, bookController.search);

router.post('/book', check.bookRequest, bookController.createBook);

router.put('/book/:id', check.bookRequest, bookController.editBook);

router.delete('/delete/:id', bookController.deleteBook);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);

module.exports = router;
