$( document ).ready(function() {
    $('.start-practice').click(function(){
        $('.overlay').hide();
        document.querySelector(".myAudio").play();
    });
});