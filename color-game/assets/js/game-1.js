$( document ).ready(function() {

    $colorArray = ["red", "green", "blue", "yellow", "orange", "purple"]; 
    $currentColor = $colorArray[Math.floor(Math.random()*$colorArray.length)];
    $score = 0;
    var timeHandicap = 0;
    var scoreHandicap = 0;

    var elem = document.querySelector('.timer');
    var gameTimer = setInterval(countdown, 1000);
    var isPaused = false;

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
        if ( $('body').hasClass('game-2') ) {
            if ( $score < 1 ) {
                alert('You lose. Retry.');
            } else {
                timeHandicap += 5;
                scoreHandicap += 1;

                if (confirm('You win. Try a harder level.')) {
                    console.log('test');

                    gameTimer = timeLeft = 6 - timeHandicap;
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

    // Timer
    if ( $('body').hasClass('game-1') ) {
        var timeLeft = 30;
    }

    if ( $('body').hasClass('game-2') ) {
        var timeLeft = 6;
    }

    if ( $('body').hasClass('game-3') ) {
        var timeLeft = 120;
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