class Book {

    getAuther() {
        return this._auther;
    }

    setAuther(value) {
        this._auther = value;
    }

    getPublishor() {
        return this._publishor;
    }

    setPublishor(value) {
        this._publishor = value;
    }

    getPrice() {
        return this._price;
    }

    setPrice(value) {
        this._price = value;
    }

    getTitle(){
        return this.title;
    }

    constructor(title) {
        this.title = title;
    }

    getId(){
        return this.id;
    }

    setId(values){
        this.id = values;
    }
    /**
     *
     * @return {{id: int, title: string}}
     */
    toJson(){
        return {
            id          : this.getId(),
            title       : this.getTitle(),
            author      : this.getAuther(),
            publisher   : this.getPublishor(),
            price       : this.getPrice()
        }
    }
}

module.exports = Book;
