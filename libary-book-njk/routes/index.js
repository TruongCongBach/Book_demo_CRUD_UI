const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/book-controller');
const check = require('../http/middlerware/index');
const SurfersApi = require('../http/middlerware/surfers-api');


let bookController = new BookController();
let surfersApi = new SurfersApi();

router.get('/', check.searchCondition, bookController.search);

router.get('/book/:id', check.searchCondition, bookController.detail);

router.get('/add',surfersApi.add);
router.post('/book', check.bookRequest, bookController.createBook);

router.get('/edit/:id', check.searchCondition, bookController.searchEdit);

router.post('/edit/book/:id', check.bookRequest, bookController.editBook);

router.get('/delete/:id', bookController.deleteBook);

router.get('/search-advance', check.searchCondition, bookController.searchAdvance);

router.get('/search-basic', check.searchCondition, bookController.searchAdvance);

module.exports = router;
