/* global $ */

$(document).ready(function() {

    $(".project-link-past").on("mouseover", function() {
      $(this).css('background-image', 'url("brent_haas_files/tab_hover.png")');
      $(this).find('p').css('color', '#1B191A');
      $(this).animate({top : '250px'});
     
    });
    
    
    
    $(".project-link-past").on("mouseout", function() {
        $(this).css('background-image', '');
        $(this).find('p').css('color', '');
     
    });
    
})