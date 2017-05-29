$(document).ready(function () {

    $("#ghost1").click(function () {
        $("#fantasma1").show(0);
        $("#fantasma2").hide(0);
        $("#fantasma3").hide(0);
        $("#fantasma4").hide(0);
        $("#pacmanimg").hide(0);
    });
    $("#ghost2").click(function () {
        $("#fantasma1").hide(0);
        $("#fantasma2").show(0);
        $("#fantasma3").hide(0);
        $("#fantasma4").hide(0);
        $("#pacmanimg").hide(0);
    });
    $("#ghost3").click(function () {
        $("#fantasma1").hide(0);
        $("#fantasma2").hide(0);
        $("#fantasma3").show(0);
        $("#fantasma4").hide(0);
        $("#pacmanimg").hide(0);
    });
    $("#ghost4").click(function () {
        $("#fantasma1").hide(0);
        $("#fantasma2").hide(0);
        $("#fantasma3").hide(0);
        $("#fantasma4").show(0);
        $("#pacmanimg").hide(0);
    });
     $("#pacman").click(function () {
        $("#fantasma1").hide(0);
        $("#fantasma2").hide(0);
        $("#fantasma3").hide(0);
        $("#fantasma4").hide(0);
        $("#pacmanimg").show(0);
    });
});

/*
     $("#flip2").click(function(){
         $("#panel").toggle(1000);
    $("#panel2").show(1000);
     });
});

$("button").click(function(){
        $("#panel").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });*/

