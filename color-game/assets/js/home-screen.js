$( document ).ready(function() {

    $('.settings-button').on('click', function(e) {
        e.preventDefault();
        $('.overlay').css('display','flex');
        $('.settings-button').toggle();
        $(this).toggle();

        if ( localStorage.getItem('colors-plus') == 1 ) {
            $('#colors-plus').prop('checked', true);
        }

        if ( localStorage.getItem('negative-score') == 1 ) {
            $('#negative-score').prop('checked', true);
        }
    });

    $('.confirm-settings-button').on('click', function(e) {
        e.preventDefault();
        $('.overlay').css('display','none');
        $('.confirm-settings-button').toggle();
        $(this).toggle();
    });

    $('#colors-plus').change(function() {
        if ( $('#colors-plus').is(':checked') ) {
            localStorage.setItem('colors-plus', '1');
        } else {
            localStorage.setItem('colors-plus', '0');
        }
        
        console.log( localStorage.getItem('colors-plus') );
    });

    $('#negative-score').change(function() {
        if ( $('#negative-score').is(':checked') ) {
            localStorage.setItem('negative-score', '1');
        } else {
            localStorage.setItem('negative-score', '0');
        }
        
        console.log( localStorage.getItem('negative-score') );
    });


});