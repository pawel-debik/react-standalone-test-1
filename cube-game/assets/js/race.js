$( document ).ready(function() {
    $('.start-race').click(function(){
        $('.overlay').hide();
        document.querySelector(".myAudio").play();
    });
});