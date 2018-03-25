$(document).ready(function () {

    $('#form-create').change(function () {
        checkInput($('#author'), 10, $('#div-author'));
        checkInput($('#title'), 10, $('#div-title'));
    });


    /**
     *
     * @param btnInput
     * @param condition
     * @param divShows
     */
    function checkInput(btnInput, condition, divShows) {
        if(btnInput.val().length > condition) {
            divShows.show();
            $('#send').addClass('disabled');
        } else {
            divShows.hide();
            $('#send').removeClass('disabled');
        }
    }
});