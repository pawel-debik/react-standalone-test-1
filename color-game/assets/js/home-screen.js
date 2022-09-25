$( document ).ready(function() {

    $('.settings-button').on('click', function(e) {
        e.preventDefault();
        $('.overlay').css('display','flex');
        $('.settings-button').toggle();
        $(this).toggle();
    });

    $('.cancel-settings-button').on('click', function(e) {
        e.preventDefault();
        $('.overlay').css('display','none');
        $('.cancel-settings-button').toggle();
        $(this).toggle();
    });



});