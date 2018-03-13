const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/api/book-controller');
const check = require('../http/middlerware/index');

let bookController = new BookController();

router.get('/', check.searchCondition, bookController.search);

router.post('/book', check.bookRequest, bookController.createBook);

router.get('/edit/:id',(req, res, next) => {
    res.render('save.njk');
});

router.put('/book', check.bookRequest, bookController.editBook);

router.get('/delete/:id', bookController.deleteBook);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);

module.exports = router;
