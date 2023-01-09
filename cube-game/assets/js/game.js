$( document ).ready(function() {
    const squares = $('.square').length;
    let gameScore = 0;
    let raceModeGoalScore = 0;
    raceModeGoalScore = $('.game-score-goal').text();
    let level = 0;
    level = parseInt( $('.level').text() );

    let gameTimer;
    let isPaused = true;
    let timeLeft = 0;
    timeLeft = $('.game-time').data('start-time');
    console.log(timeLeft);

    $('.game-score-goal').text(raceModeGoalScore);

    $( ".squares" ).on( "click", ".square", function() {
        if ( $(this).hasClass('active') ) {
            resetSquares();
            let randomSquare = Math.floor((Math.random() * squares) + 1);
            const clickSound = document.createElement('audio');
            clickSound.setAttribute('src', '../cube-game/assets/sounds/hit.mp3');
            clickSound.play();
            gameScore++;
            updateSquares();
            updateGamescore();
        }

        if ( $(this).hasClass('danger') ) {
            resetSquares();
            const clickSound = document.createElement('audio');
            clickSound.setAttribute('src', '../cube-game/assets/sounds/danger.mp3');
            clickSound.play();
            gameScore = gameScore -5;
            updateSquares();
            updateGamescore();
        }

        if ( $(this).hasClass('bonus') ) {
            resetSquares();
            const clickSound = document.createElement('audio');
            clickSound.setAttribute('src', '../cube-game/assets/sounds/bonus.mp3');
            clickSound.play();
            gameScore = gameScore +3;
            updateSquares();
            updateGamescore();
        }

        if ( raceModeGoalScore && ( parseInt( $('.game-score').text() ) >= raceModeGoalScore ) ) {
            console.log( 'game score text: ', $('.game-score').text());
            console.log('raceModeGoalScore: ', raceModeGoalScore );
            gameOver('You win', 'Try again', 'win');
        }
    });

    function gameOver(message, buttonText, status) {
        $('.overlay').show();
        $('.overlay-text').html('').prepend('<p class="regular-text">' + message + '</p>');
        $('.start-race').text(buttonText);

        console.log('game over');

        // reset score and timer
        clearTimeout(gameTimer);
        gameScore = 0;
        updateGamescore();

        if ( $('.game-time').data('start-time') ) {
            timeLeft = $('.game-time').data('start-time');
        }

        if ( status == 'win' ) {
            updateRaceModeGoalScore(2);
            updateLevel(1);
        }
    }

    function resetSquares() {
        $('.square').removeClass('active');
        $('.square').removeClass('danger');
        $('.square').removeClass('bonus');
    }

    function updateSquares() {
        let randomSquare = Math.floor((Math.random() * squares) + 1);
        let i = 0;

        $('.square').each(function() {
    
            // Each round set one active cube
            // if ( i == randomSquare && !$(this).hasClass('danger') && !$(this).hasClass('bonus') ) {
            if ( i == randomSquare ) {
                $(this).addClass('active');
            } 
    
            i++;
        });

        insertDangerSquare();
        insertBonusSquare();
    }

    function insertDangerSquare() {
        let randomSquare = Math.floor((Math.random() * squares) + 1);
        let sometimesDanger = Math.floor(Math.random() * 5);
        let i = 0;

        $('.square').each(function() {
            // Some times set one danger cube
            if ( i == randomSquare && !$(this).hasClass('active') && !$(this).hasClass('bonus') ) {
                if ( sometimesDanger == 1 ) {
                    $(this).addClass('danger');
                }
            }

            i++;
        });
    }

    function insertBonusSquare() {
        let randomSquare = Math.floor((Math.random() * squares) + 1);
        let sometimesBonus = Math.floor(Math.random() * 10);
        let i = 0;

        $('.square').each(function() {
            // Some times set one bonus cube
            if ( i == randomSquare && !$(this).hasClass('active') && !$(this).hasClass('danger') ) {
                if ( sometimesBonus == 1 ) {
                    $(this).addClass('bonus');
                }
            }

            i++;
        });
    }

    function updateGamescore() {
        $('.game-score').text( gameScore );
    }

    function updateLevel(increase) {
        level = parseInt(level) + increase;

        $('.level').text( level );
    }

    function updateRaceModeGoalScore(increase) {
        raceModeGoalScore = parseInt(raceModeGoalScore) + increase;

        $('.game-score-goal').text( raceModeGoalScore );
    }
    
    // Countdown
    function countdown() {
        if ( !isPaused ) {
            console.log('count', timeLeft);

            if (timeLeft == -1) {
                clearTimeout(gameTimer);
                gameOver("you lose", "Try again");
            } else {
                $('.game-time').text(timeLeft);
                timeLeft--;
            }
        }
    }

    // Start games
    $('.start-race, .start-practice, .start-level').click(function(){
        $('.overlay').hide();
        document.querySelector(".myAudio").play();
        isPaused = false;

        // set timer
        if ( $('.game-time').data('start-time') ) {
            timeLeft = $('.game-time').data('start-time');
            countdown(); // <- start countdown on click
            gameTimer = setInterval(countdown, 1000); // cound down every second
        }
    });
});