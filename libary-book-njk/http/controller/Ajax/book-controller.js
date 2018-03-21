class BookController {

    createBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(() => {
            //response.status(201).send({message: "Success!"});
            response.redirect('/');
            next();
        }).catch(next);
    }

    deleteBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(function () {
            response.redirect('/');
            //response.status(200).json({message: 'Success'});
            next();
        });
    }

    Publisher(request, response, next) {
        let book = request.app.get('book.searcher').search(request.condition);
        let publisher = request.app.get('publisher.provider').providerAll();
        Promise.all([book, publisher])
            .then(bookEdit => {
                response.render('create.njk', {
                    book: bookEdit[0][0],
                    publishers: bookEdit[1]
                });
            })
            .catch(next)
    }

    PublisherAll(request, response, next) {
        request.app.get('publisher.provider').providerAll()
            .then(publishers => {
                response.send(publishers);
                next();
            })

            .catch(next)
    }
    bookPublisher(request, response, next) {
        let book = request.app.get('book.searcher').search(request.condition);
        let publisher = request.app.get('publisher.provider').providerAll();
        Promise.all([book, publisher])
            .then(bookEdit => {
                response.render('edit.njk', {
                        book: bookEdit[0][0],
                        publishers: bookEdit[1]
                });
            })
            .catch(next)


    }

    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((results) => {
                response.json(results.map(result => result.toJson()));
                next();
            })
            .catch(next)
    }

    detail(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(book => {
                response.render('detail.njk', {
                    book: book[0]
                })
                //response.status(200).send(book.map(book => book.toJson()));

            })
            .catch(next)
    }

    editBook(request, response, next) {

        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(function () {
            // response.status(200).json({message: 'Success'});
            response.redirect('/detail/'+request.book.id);
            next();
        });
    }
}

module.exports = BookController;
