$( document ).ready(function() {

    var clickSound = document.createElement('audio');
    clickSound.setAttribute('src', 'assets/sounds/default-button-noise.mp3');

    $('button, .button').click(function(e){
        if ( localStorage.getItem('ui-sounds') == 1 ) {
            clickSound.play();
        }
    });

    $('.settings-button').on('click', function(e) {
        e.preventDefault();
        $('.settings-overlay').css('display','flex');
        $('.settings-button').toggle();
        $(this).toggle();

        if ( localStorage.getItem('colors-plus') == 1 ) {
            $('#colors-plus').prop('checked', true);
        }

        if ( localStorage.getItem('negative-score') == 1 ) {
            $('#negative-score').prop('checked', true);
        }

        if ( localStorage.getItem('ui-sounds') == 1 ) {
            $('#ui-sounds').prop('checked', true);
        }

        if ( localStorage.getItem('bg-music') == 1 ) {
            $('#bg-music').prop('checked', true);
        }
    });

    $('.help-button').on('click', function(e) {
        e.preventDefault();
        $('.help-overlay').css('display','flex');
    });

    $('.close-help-overlay').on('click', function(e) {
        e.preventDefault();
        $('.help-overlay').css('display','none');
    });

    

    $('.confirm-settings-button').on('click', function(e) {
        e.preventDefault();
        $('.settings-overlay').css('display','none');
        $('.confirm-settings-button').toggle();
        $(this).toggle();

        if ( localStorage.getItem('bg-music') == 1 ) {
            $('.toggle-bg-music-1').show();
            $('.toggle-bg-music-2').show();
        } else {
            $('.toggle-bg-music-1').hide();
            $('.toggle-bg-music-2').hide();
        }
    });

    $('#colors-plus').change(function() {
        if ( $('#colors-plus').is(':checked') ) {
            localStorage.setItem('colors-plus', '1');
        } else {
            localStorage.setItem('colors-plus', '0');
        }
    });

    $('#negative-score').change(function() {
        if ( $('#negative-score').is(':checked') ) {
            localStorage.setItem('negative-score', '1');
        } else {
            localStorage.setItem('negative-score', '0');
        }
    });

    $('#ui-sounds').change(function() {
        if ( $('#ui-sounds').is(':checked') ) {
            localStorage.setItem('ui-sounds', '1');
        } else {
            localStorage.setItem('ui-sounds', '0');
        }
    });

    $('#bg-music').change(function() {
        if ( $('#bg-music').is(':checked') ) {
            localStorage.setItem('bg-music', '1');
        } else {
            localStorage.setItem('bg-music', '0');
        }
    });

    if ( localStorage.getItem('bg-music') == 1 ) {
        $('.toggle-bg-music-1').show();
        $('.toggle-bg-music-2').show();
    } else {
        $('.toggle-bg-music-1').hide();
        $('.toggle-bg-music-2').hide();
    }

});