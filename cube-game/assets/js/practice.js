$( document ).ready(function() {
    const squares = $('.square').length;
    let gameScore = 0;

    $( ".squares" ).on( "click", ".square.active", function() {
        // reset active squares
        $('.square').removeClass('active');

        let randomSquare = Math.floor((Math.random() * squares) + 1);
        const clickSound = document.createElement('audio');
        clickSound.setAttribute('src', '../cube-game/assets/sounds/hit.mp3');

        handleSquare(randomSquare);
        updateGamescore();
        clickSound.play();
    });


    function handleSquare(randomSquare) {
        let i = 0;
        $('.square').each(function() {
    
            if ( i == randomSquare ) {
                $(this).addClass('active');
                gameScore++;
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