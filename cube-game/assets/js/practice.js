$( document ).ready(function() {
    const squares = $('.square').length;
    let gameScore = 0;

    $( ".squares" ).on( "click", ".square", function() {
        if ( $(this).hasClass('active') ) {
            // reset active squares
            $('.square').removeClass('active');
            $('.square').removeClass('danger');

            let randomSquare = Math.floor((Math.random() * squares) + 1);
            const clickSound = document.createElement('audio');
            clickSound.setAttribute('src', '../cube-game/assets/sounds/hit.mp3');

            gameScore++;
            updateSquares(randomSquare);
            updateGamescore();
            clickSound.play();
        }

        if ( $(this).hasClass('danger') ) {
            const clickSound = document.createElement('audio');
            clickSound.setAttribute('src', '../cube-game/assets/sounds/hit.mp3');

            $(this).hide();

            gameScore = gameScore -5;
            updateSquares();
            updateGamescore();
            clickSound.play();
        }

    });

    function updateSquares() {
        let randomSquare = Math.floor((Math.random() * squares) + 1);
        let i = 0;
        $('.square').each(function() {
    
            // Each round set one active cube
            if ( i == randomSquare ) {
                $(this).addClass('active');
            }
    
            i++;
        });

        insertDangerSquare();
    }

    function insertDangerSquare() {
        let randomSquare = Math.floor((Math.random() * squares) + 1);
        let sometimesDanger = Math.floor(Math.random() * 5);
        let i = 0;

        $('.square').each(function() {
            // Some times set one danger cube
            if ( i == randomSquare && !$(this).hasClass('active') ) {
                console.log(sometimesDanger);
                if ( sometimesDanger == 1 ) {
                    $(this).addClass('danger');
                }
            }

            i++;
        });
    }

    function updateGamescore() {
        $('.game-score').text( gameScore );
    }

    $('.start-practice').click(function(){
        $('.overlay').hide();
        document.querySelector(".myAudio").play();
    });


});