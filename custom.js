/* global $ */

$(document).ready(function() {
    
    $("#card1").flip({axis: 'x', speed: '600'});
    $("#card2").flip({axis: 'x', speed: '600'});
    $("#card3").flip({axis: 'x', speed: '600'});
    $("#card4").flip({axis: 'x', speed: '600'});
    
    $(".project-link-past > #card1").on("mouseover", function() {
        $("#card1").flip(true);
    });
    
    $(".project-link-past > #card2").on("mouseover", function() {
        $("#card2").flip(true);
    });
    
    $(".project-link-past > #card3").on("mouseover", function() {
        $("#card3").flip(true);
    });
    
    $(".project-link-past > #card4").on("mouseover", function() {
        $("#card4").flip(true);
    });




    $(".project-link-past").on("mouseover", function() {
      $(this).css('background-image', 'url("brent_haas_files/tab_hover.png")');
      $(this).find('p').css('color', '#1B191A');
    //   $(this).animate({top : '250px'});
    });
    
    $(".project-link-past").on("mouseout", function() {
        $(this).css('background-image', '');
        $(this).find('p').css('color', '');
        $("#card1").flip(false);
        $("#card2").flip(false);
        $("#card3").flip(false);
        $("#card4").flip(false);
    });
    
    
})