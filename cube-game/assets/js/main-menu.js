$( document ).ready(function() {

    var intervalId = window.setInterval(function(){
        $('#menu-number-1').text(Math.floor((Math.random() * 9) + 1));
        $('#menu-number-2').text(Math.floor((Math.random() * 9) + 1));
        $('#menu-number-3').text(Math.floor((Math.random() * 9) + 1));
    }, 1000);
});