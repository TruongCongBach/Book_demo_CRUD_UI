$(document).ready(function () {
    $('#edit').click(function () {
        var r = confirm('Are you sure you want to delete');
        if(r === true) {
            var bookId =$('#edit').data('book-id');

            window.location.href = '../delete/'+bookId;

        }
    });
});

