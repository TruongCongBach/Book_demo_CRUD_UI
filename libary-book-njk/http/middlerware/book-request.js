const BookFactoryReq = require('../../src/book/book-factory-req');

module.exports = function (req, res, next) {
    let bookFactoryReq = new BookFactoryReq();
    bookFactoryReq.makeFromRequest(req.body)
        .then(book => {
            book.setId(req.params.id);
            req.book = book;
            next();
        })
};