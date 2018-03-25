const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/Ajax/book-controller');
const check = require('../http/middlerware/index');

let bookController = new BookController();

router.get('/',function (req, res) {
    res.render('home.html');
});

router.get('/list', check.searchCondition, bookController.search);
router.get('/search-advance', check.searchCondition, bookController.search);
router.get('/detail/:id', check.searchCondition, bookController.detail);
router.post('/book', check.bookRequest, bookController.createBook);
router.get('/edit/:id', check.searchCondition, bookController.bookPublisher);
router.get('/api/books', check.searchCondition, bookController.search);
router.get('/delete/:id', bookController.deleteBook);
router.get('/book/new', check.searchCondition, bookController.Publisher);
router.post('/book/:id', check.bookRequest, bookController.editBook);

module.exports = router;
