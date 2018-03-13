const Publisher = require('../publisher/publisher');

class Book{

    /**
     * 
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * 
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     * 
     * @return {string}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * 
     * @return {Publisher}
     */
    getPublisher() {
        return this.publisher;
    }

    /**
     *
     * @return {float}
     */
    getPrice() {
        return this.price;
    }

    /**
     * 
     * @return {INT}
     */
    getId() {
        return this.id;
    }

    /**
     * 
     * @param {string} title
     */
    setTitle(title) {
        this.title = title;
    }

    /**
     * 
     * @param {string} author
     */
    setAuthor(author) {
        this.author = author;
    }

    /**
     * 
     * @param {Publisher} publisher
     */
    setPublisher(publisher) {
        this.publisher = publisher;
    }

    /**
     *
     * @param {float} price
     */
    setPrice(price) {
        this.price = price;
    }

    /**
     * 
     * @param {INT} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {{id: INT, title: string, author: string, publisher: string, price: number}}
     */
    toJson() {
        return {
            id       :this.getId(),
            title    :this.getTitle(),
            author   :this.getAuthor(),
            publisher:this.getPublisher(),
            price    :this.getPrice()
        }
    }
    
}

module.exports = Book;
