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

        // display which game music was selected per level
        $('.game-music-wrapper').each(function(){
            let gameName = $(this).find('select').attr('id');

            if ( localStorage.getItem(gameName) ) {
                $(this).find('select').val( localStorage.getItem(gameName) );
            }
        });
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

    // store game music
    $('.game-music-form').find('.row').each(function(){
        $(this).find('select').change(function() {
            console.log($(this).find(":selected").val());
            localStorage.setItem( $(this).attr('id'), $(this).find(":selected").val() );
        });
    });

    $('.tabs .button').click(function(e){
        $('.tabs .button').removeClass('active');
        $(this).addClass('active');

        if ( $(this).hasClass('game-tab') ) {
            console.log('game');
            $('.settings-content').hide();
            $('.game-settings-content').show();
        }

        if ( $(this).hasClass('music-tab') ) {
            console.log('music');

            $('.settings-content').hide();
            $('.music-settings-content').show();
        }
    });

});