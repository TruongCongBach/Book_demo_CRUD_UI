const Book = require('./book');
const SupplierPublisher = require('../../http/middlerware/supplier-publisher');


class BookFactoryReq {

    /**
     *
     * @param bookRaw
     * @return {Book} book
     */
    makeFromRequest(bookRaw) {
       let supplierPublisher = new SupplierPublisher();
        let book = new Book(bookRaw.title, bookRaw.author);
        book.setPrice(bookRaw.price);
        return supplierPublisher.selectPublisher(bookRaw.publisher_id)
            .then((publisher)=>{
               book.setPublisher(publisher);
                return book;
            });



    }
}

module.exports = BookFactoryReq;
