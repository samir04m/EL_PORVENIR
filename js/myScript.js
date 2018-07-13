$(document).ready(function(){

    $('.dropdown-button').dropdown({
          hover: true,
          constrainWidth: false,
          belowOrigin: true,
    });

    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();

    $('.slider').slider({
        height: 500
    });

    $('.modal').modal();
    $('select').material_select();

    // $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

});
