$( document ).ready(function() {

    $colorArray = ["red", "green", "blue", "yellow", "orange", "purple"]; 
    $currentColor = $colorArray[Math.floor(Math.random()*$colorArray.length)];
    $score = 0;
    var timeHandicap = 0;
    var scoreHandicap = 0; // to do: make this work

    var elem = document.querySelector('.timer');
    var gameTimer = setInterval(countdown, 1000);
    var isPaused = false;

    var timeLeft = 30; // default value
    var game1time = 30; // default value
    var game2time = 30; // default value
    var game3time = 120; // default value

    // Timer
    if ( $('body').hasClass('game-1') ) {
        timeLeft = game1time;
    }

    if ( $('body').hasClass('game-2') ) {
        timeLeft = game2time;
    }

    if ( $('body').hasClass('game-3') ) {
        timeLeft = game3time;
    }

    function countdown() {
        if ( !$('body').hasClass('game-4') ) {
            if(!isPaused) {
                if (timeLeft == -1) {
                    clearTimeout(gameTimer);
                    doSomething();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    }

    // Set starting values
    $('.score').text($score);
    $('.color-dot').addClass($currentColor);


    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            someFunction();
        }
    });

    $('.color-submit').click(function(e){
        someFunction();
    });

    function someFunction() {
        if ( $('.color-input').val().toLowerCase() == $currentColor ) {
            $score++;
            $('.score').text($score);
        }

        $currentColor = $colorArray[Math.floor(Math.random()*$colorArray.length)];
        $('.color-dot').removeClass().addClass('color-dot ' + $currentColor);
    }

    function doSomething() {

        if ( $('body').hasClass('game-1') ) {

            if ( $score < 10 ) {
                console.log($('.game-1'));
                $('.game-1').addClass('red-bg');
                alert('You lose. Retry.');
            } else {
                $('.game-1').addClass('light-blue-bg');
                alert('You WIN!. Good job.');
            }
        }

        if ( $('body').hasClass('game-2') ) {
            $('.goal-score').text( parseInt($('.goal-score').text()) + scoreHandicap);

            if ( $score - scoreHandicap < 10 ) {
                if (confirm('You lose. Retry.')) {
                    timeHandicap = 0;
                    scoreHandicap = 0;
                }
            } else {
                timeLeft = game2time;
                timeHandicap += 5;
                scoreHandicap += 1;

                if (confirm('You win. Get ready for a harder level.')) {

                    timeLeft = timeLeft - timeHandicap;

                    gameTimer = setInterval(countdown, 1000);
                }
            }
        }

        if ( $('body').hasClass('game-3') ) {
            if ( $score < 10 ) {
                alert('Score: F');
            } else if ( $score >= 10 && $score < 20 ) {
                alert('Score: E');
            } else if ( $score >= 20 && $score < 30 ) {
                alert('Score: D');
            } else if ( $score >= 30 && $score < 40 ) {
                alert('Score: C');
            } else if ( $score >= 40 && $score < 50 ) {
                alert('Score: B');
            } else if ( $score >= 50 && $score < 60 ) {
                alert('Score: A');
            } else if ( $score >= 60 ) {
                alert('Score: A+');
            }
        }
    }

    //with jquery
    $('.pause-game').on('click', function(e) {
        e.preventDefault();
        isPaused = true;
        $('.resume-game').toggle();
        $('.main-menu').toggle();
        $('.overlay').toggle();
        $(this).toggle();
    });

    $('.resume-game').on('click', function(e) {
        e.preventDefault();
        isPaused = false;
        $('.pause-game').toggle();
        $('.main-menu').toggle();
        $('.overlay').toggle();
        $(this).toggle();
    });



});