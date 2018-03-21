const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/Ajax/book-controller');
const check = require('../http/middlerware/index');

let bookController = new BookController();

router.get('/',function (req, res, next) {
    res.render('home.html');
});
//show home
router.get('/list', check.searchCondition, bookController.search);

//add render views add book publisher
router.get('/book/new', check.searchCondition, bookController.Publisher);

router.get('/publisher', check.searchCondition, bookController.PublisherAll);

//edit book publishers
router.get('/edit/:id', check.searchCondition, bookController.bookPublisher);

router.post('/book', check.bookRequest, bookController.createBook);

//edit book post
router.post('/book/:id', check.bookRequest, bookController.editBook);

//show book
router.get('/detail/:id', check.searchCondition, bookController.detail);

//delete soft
router.get('/delete/:id', bookController.deleteBook);

router.delete('/delete/:id', bookController.deleteBook);

router.put('/book/:id', check.bookRequest, bookController.editBook);


router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/api/books', check.searchCondition, bookController.search);

module.exports = router;
