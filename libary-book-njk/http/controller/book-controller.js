class BookControllerRender {


    createBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(() => {
            response.redirect('/')
        }).catch(function (err) {
            next(err);
        });
    }

    deleteBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(function () {
            response.redirect('/');
        });
    }

    editBook(request, response) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(() => {
            response.redirect('/');
        });
    }

    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((books) =>
                    response.render('list-books.njk', {
                        books: books
                    })
            )
            .catch(next)
    }

    detail(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((book) => {
                if(!book.length) {
                    throw new Error('no book');
                }
                response.render('detail.njk', {
                    book: book[0]
                });
            })
            .catch(next)
    }

    searchEdit(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((book) => {
                if(!book.length) {
                    throw new Error('no book');
                }
                response.render('edit.njk', {
                    book: book[0]
                });
            })
            .catch(next)
    }

    searchAdvance(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((books) =>
                response.render('search-advance.njk', {
                    books: books
                })
            )
            .catch(next)
    }



}

module.exports = BookControllerRender;
