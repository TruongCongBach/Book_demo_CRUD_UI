$(document).ready(function () {
    let $createBook = $('#create-book');
    let $inputKeyword = $('#input-keyword');
    let $searchAdvance = $('#search-advance');
    let $btnSearch = $('#btn-search');
    let check = 1;
    let viewList = 6;

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

    $btnSearch.click(function () {
        lineShowSearch();
    });

    $(document).on('change', '#from-search', function () {
        keyWord();
    });

    $(document).on('click', '#btn-next', function () {
       next();
    });

    $(document).on('click', '#btn-prev', function () {
        prev();
    });

    function next() {
        $('#btn-prev').show();

        $('#view-books > li').slice(0,viewList).hide();
        $('#view-books > li').slice(viewList, viewList + 6).show();
        viewList= viewList + 6;
    }
    function prev() {
        viewList= viewList - 6;
        $('#view-books > li').slice(viewList, viewList + 6).hide();
        $('#view-books > li').slice(viewList - 6, viewList).show();

        if(viewList === 6){
            $('#btn-prev').hide();
        } else {
            $('#btn-prev').show();

        }


    }



    function lineShowSearch(){
        check ++;
        if(check % 2 === 0){
            showSearchBook();
        }else{
            HideSearchBook();
        }
    }


    /**
     *
     * @return {*|PromiseLike<keyword>|Promise<renderBooks>}
     */
    function keyWord() {
       return $.get('/search-advance', {
            title: $('#ipt-title').val(),
            author: $('#ipt-author').val(),
            publisher: $('#ipt-publisher').val()
        }).then(renderBooks);
    }

    function HideSearchBook() {
        $searchAdvance.hide();
    }


    /**
     *
     *  show condition search advance
     */
    function showSearchBook() {
        $searchAdvance.show();
        let template = $('#search-template').html();
        $searchAdvance.html(template);
    }



    /**
     *
     * @param books []
     */
    function renderBooks(books) {
        let template = $('#book-template').html();
        let resultsHTML = books.map(function (book) {
            return template
                .replace(':bookName:', book.title)
                .replace(':id:', book.id)
                .replace(':author:', book.author)
        }).join('');
        $('#view-books').html(resultsHTML);
        $('#view-books > li').slice(0,viewList);
        $('#view-books > li').slice(viewList).hide();
    }

});
