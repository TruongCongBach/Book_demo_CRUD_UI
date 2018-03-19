$(document).ready(function () {
    let $ViewList = $('#view-books');
    let $title = $('#title');
    let $author = $('#author');
    let $publisher = $('#publisher');
    let $price = $('#price');
    let $addBook = $('#addBook');

    // $(document).click('#test', function(){
    //     console.log('showbook botion');
    // });

    function showBookList(){
        $ViewList.show();
        $addBook.hide();
        getAjax('/list').then(renderBookList);
    }

    /**
     *
     * @param books []
     */
    function renderBookList(books){
        $ViewList.html('');
        books.forEach(function (book) {
            $ViewList.append('<a class="viewBook"><li>'
                + book.title
                + '</a>'
                + ' Tac Gia: '
                + book.author
                + '</li>');
        });
    }

    function getAjax(url) {
        return $.ajax({
            url: url,
            contentType: 'application/json',
            method: 'get',
        })
    }
    $('#btn-show').click(showBookList);

    $('#liveSearch').keyup(function () {
        $('#fm-add').hide();
        getAjax('/search-basic?keyword=' + this.value)
        .then(function (books) {
            $ViewList.html('');
            books.forEach(function (book) {
                $ViewList.append('<li><a class="link-detail" >'
                    + book.title
                    + '</a>'
                    + ' || Tac Gia: '
                    + book.author
                    + '</li>');
            });
        }).then(function () {
            $('.link-detail').click(function () {
                console.log('asdasd');
            });

        })
    });

    $('#btn-add').click(function () {
        $ViewList.hide();
        $addBook.show();
        $.ajax({
            url: '/new',
            method: 'get',
            contentType: 'application/json'
        }).then(function (bookPublishers) {
            $publisher.html('');
            bookPublishers.publishers.forEach(function (publisher) {
                $publisher.append(
                    '<option value= ' + publisher.id + '>' + publisher.name + '</option>');
            });

        })
    });

    $('#fm-add').on('submit', function (event) {
        $addBook.hide();
        if(!$title.val() ||
           !$author.val() ||
           !$publisher.val() ||
           !$price.val()) {
            alert('can not be empty');
        }
            $.ajax({
                url:'/book',
                method: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    title        : $title.val(),
                    author       : $author.val(),
                    publisher_id : $publisher.val(),
                    price        : $price.val(),
                })
            }).then(function (success) {
                console.log(success);
                alert('success');
                $ViewList.show();
            });
        event.preventDefault();
    })



});