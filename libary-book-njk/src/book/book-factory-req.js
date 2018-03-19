const Book = require('./book');
const supplierPublisher = require('../../http/middlerware/supplier-publisher');
const Publisher = require('../publisher/publisher');
class BookFactoryReq {

    /**
     *
     * @param bookRaw
     * @return {Book} book
     */
    makeFromRequest(bookRaw) {
        let book = new Book(bookRaw.title, bookRaw.author);
        book.setPrice(bookRaw.price);

        return supplierPublisher(bookRaw.publisher_id)
            .then(results => {
                let publisher = new Publisher(results.name);
                publisher.setId(results.id);
                publisher.setAddress(results.address);
                publisher.setPhone(results.phone);
                return publisher;
            })
            .then(function (publisher) {
                book.setPublisher(publisher);
                if (bookRaw.id === 0) {
                    return book;
                } else {
                    book.setId(bookRaw.id);
                    return book;
                }
            });
    }
}

module.exports = BookFactoryReq;
