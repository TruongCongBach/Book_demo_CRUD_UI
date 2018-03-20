$(document).ready(function () {
    let $createBook = $('#create-book');
    let $inputKeyword = $('#input-keyword');
    let $searchAdvance = $('#search-advance');

    $.ajax({
        url: '/list',
        method: 'get',
        contentType: 'application/json'
    }).then(renderBooks);

    $inputKeyword.change(function () {
        $.get('/api/books', {
            keyword: $(this).val(),
        }).then(renderBooks)
    });

    $createBook.click(function () {
        window.location.href = '/book/new';
    });

    $('#btn-search').click(function () {
        $.ajax({
            url: '/publisher'
        }).then(function (publishers) {
            renderOptionPublisher(publishers);
            showSearchBook();
        });
    });


    $(document).on('change', '#ipt-title', function () {
        keyWord();
        $(document).on('change', '#ipt-author',function () {
            keyWord();
            $(document).on('select', '#option-template',function () {
                keyWord();

            })
        })
    });

    /**
     *
     * @return {*|PromiseLike<keyword>|Promise<renderBooks>}
     */
    function keyWord() {
       return $.get('/search-advance', {
            title: $('#ipt-title').val(),
            author: $('#ipt-author').val(),
            publisher: $('#select-publisher').val()
        }).then(renderBooks);
    }

    /**
     *
     *  show condition search advance
     */
    function showSearchBook() {
        let template = $('#search-template').html();
        $searchAdvance.html(template);
    }

    /**
     *
     * @param publishers []
     */
    function renderOptionPublisher(publishers) {
        let template = $('#option-template').html();
        let strHTML = publishers.map(function (publisher) {
            return template.replace(':publisher-name:', publisher.name);
        }).join('');

       $(document).ready(function () {
           $('#select-publisher').html(strHTML);
       })
    }


    /**
     *
     * @param books []
     */
    function renderBooks(books) {
        let template = $('#book-template').html();
        let resultsHTML = books.map(function (book) {
            return template.replace(':bookName:', book.title)
                .replace(':id:', book.id)
                .replace(':author:', book.author)
        }).join('');
        $('#view-books').html(resultsHTML);
    }

});
