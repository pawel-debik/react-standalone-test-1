$( document ).ready(function() {

    $('.settings-button').on('click', function(e) {
        e.preventDefault();
        $('.overlay').css('display','flex');
        $('.settings-button').toggle();
        $(this).toggle();

        if ( localStorage.getItem('colors-plus') == 1 ) {
            $('#colors-plus').prop('checked', true);
        }
    });

    $('.cancel-settings-button').on('click', function(e) {
        e.preventDefault();
        $('.overlay').css('display','none');
        $('.cancel-settings-button').toggle();
        $(this).toggle();
    });

    $('#colors-plus').change(function() {
        console.log('test');

        if ( $('#colors-plus').is(':checked') ) {
            localStorage.setItem('colors-plus', '1');
        } else {
            localStorage.setItem('colors-plus', '0');
        }
        
        console.log( localStorage.getItem('colors-plus') );
    });


});