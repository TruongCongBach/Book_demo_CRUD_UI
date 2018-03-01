class BookRepository {

    constructor(connection) {
        this.connection = connection;
    }
    /**
     *
     * @param {Book} book
     * @return {promise<void>}
     *
     */
    save(book) {
        return book.getId() ?
            this.connection('books').update({
                title : book.getTitle(),
                author : book.getAuther(),
                publisher : book.getPublishor(),
                price : book.getPrice()
            }).where({
                id: book.getId()
            }):
            this.connection('books').insert({
                title : book.getTitle(),
                author : book.getAuther(),
                publisher : book.getPublishor(),
                price : book.getPrice()


            });
    }


    /**
     *
     * @return {Promise<Book[]>}
     *
     */
    all() {
        return this.connection
            .select('id','title', 'author', 'publisher', 'price')
            .whereNull('deleted_at')
            .from('books');
    }

    /**
     *
     * @param id
     * @return {Book} book
     */
    seach(id) {
        return this.connection('books')
            .select('id','title', 'author', 'publisher', 'price')
            .where({id : id});
    }

    /**
     *
     * @param id
     * @return {String}
     */
    delete(id) {
       return this.connection('books').update({
           deleted_at : new Date().getDay()
       }).where({
           id : id
       });
    }

    hardDelete(id){
        return this.connection('books').where({
            id : id
        }).delete()
    }
}
module.exports = BookRepository;
