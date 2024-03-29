$( document ).ready(function() {

    $colorArray = ["red", "green", "blue", "yellow", "orange", "purple"]; 
    $currentColor = $colorArray[Math.floor(Math.random()*$colorArray.length)];
    $score = 0;
    var timeHandicap = 0;
    var scoreHandicap = 0;

    var elem = document.querySelector('.timer');
    var gameTimer = setInterval(countdown, 1000);
    var isPaused = false;

    var timeLeft = 30; // default value
    var game1time = 30; // default value
    var game2time = 90; // default value
    var game3time = 120; // default value

    var goalScore = 10; // default value

    // Set initial goal score
    $('.goal-score').text( parseInt($('.goal-score').text()) + scoreHandicap);

    // Set initial time
    if ( $('body').hasClass('game-1') ) {
        timeLeft = game1time;
    }

    if ( $('body').hasClass('game-2') ) {
        timeLeft = game2time;
    }

    if ( $('body').hasClass('game-3') ) {
        timeLeft = game3time;
        goalScore = 99999;
    }

    // Set starting values
    $('.score').text($score);
    $('.color-dot').addClass($currentColor);

    // Countdown
    function countdown() {
        if ( !$('body').hasClass('game-3') ) {
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

    $('.click-submit').click(function(e){
        $('.color-input').val('');
        someFunction();
    });

    function someFunction() {
        $score++;
        $('.score').text($score);

        $currentColor = $colorArray[Math.floor(Math.random()*$colorArray.length)];
        $('.color-dot').removeClass().addClass('color-dot ' + $currentColor);

        // check to see if player has reached goal score before time runs out        
        // checkScore();
    }

    function checkScore() {
        console.log('checking score');
        if ( $score >= goalScore ) {
            timeLeft = 0;
        }
    }

    function doSomething() {

        if ( $('body').hasClass('game-1') ) {
            if ( $score < 10 ) {
                $('.game-1').addClass('red-bg');
                alert('You lose. Retry.');
            } else {
                $('.game-1').addClass('light-blue-bg');
                alert('You WIN! Good job.');
            }
        }

        if ( $('body').hasClass('game-2') ) {
            if ( $score < goalScore ) {
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
                    goalScore = goalScore + scoreHandicap;

                    // update goal score
                    $('.goal-score').text( parseInt($('.goal-score').text()) + scoreHandicap);

                    // Update stage
                    $('.stage-count').text( parseInt($('.stage-count').text()) + 1 );

                    // reset timer
                    gameTimer = setInterval(countdown, 1000);

                    // reset score
                    $('.score').text('0');
                    $score = 0;
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