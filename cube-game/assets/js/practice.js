$( document ).ready(function() {
    const squares = $('.square').length;
    let gameScore = 0;

    $( ".squares" ).on( "click", ".square", function() {

        if ( $(this).hasClass('active') ) {
            resetSquares();
            console.log('active go reset' );
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
            console.log('danger go reset' );
            const clickSound = document.createElement('audio');
            clickSound.setAttribute('src', '../cube-game/assets/sounds/danger.mp3');
            clickSound.play();
            gameScore = gameScore -5;
            updateSquares();
            updateGamescore();
        }

        if ( $(this).hasClass('bonus') ) {
            resetSquares();
            console.log('bonus go reset' );
            const clickSound = document.createElement('audio');
            clickSound.setAttribute('src', '../cube-game/assets/sounds/bonus.mp3');
            clickSound.play();
            gameScore = gameScore +3;
            updateSquares();
            updateGamescore();
        }
    });

    function resetSquares() {
        console.log('resetting' );
        $('.square').removeClass('active');
        $('.square').removeClass('danger');
        $('.square').removeClass('bonus');
    }

    function updateSquares() {
        let randomSquare = Math.floor((Math.random() * squares) + 1);
        let i = 0;
        $('.square').each(function() {
    
            // Each round set one active cube
            console.log('i', i);
            console.log('randomSquare', randomSquare);
            if ( i == randomSquare && !$(this).hasClass('danger') && !$(this).hasClass('bonus') ) {
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
                console.log(sometimesDanger);
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
                console.log(sometimesBonus);
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

    $('.start-practice').click(function(){
        $('.overlay').hide();
        document.querySelector(".myAudio").play();
    });


});