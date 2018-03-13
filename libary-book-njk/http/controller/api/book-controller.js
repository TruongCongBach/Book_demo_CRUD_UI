class BookController {

    createBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.add(request.book).then(() => {
            response.status(201).send({message: "Success!"});
            next();
        }).catch(next);
    }

    deleteBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.remove(request.params.id).then(function () {
            response.status(200).json({message: 'Success'});
            next();
        });
    }

    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((results) => {
                response.status(200).send(results.map(result => result.toJson()))
                next();
            })
            .catch(next)
    }

    editBook(request, response, next) {
        let repo = request.app.get('books.repo');
        repo.edit(request.book).then(function () {
            response.status(200).json({message: 'Success'});
            next();
        });
    }
}

module.exports = BookController;
