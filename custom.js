/* global $ */

$(document).ready(function() {
    
    $(".project-link-past").on("mouseover", function() {
      $(this).css('background-image', 'url("brent_haas_files/tab_hover.png")');
      $(this).find('p').css('color', '#1B191A');
    });
    
    $(".project-link-past").on("mouseout", function() {
        $(this).css('background-image', '');
        $(this).find('p').css('color', '');
    });
    
    
    
    function flipTitle(card) {
        $(card).flip({axis: 'x', speed: '600'})
        $(".project-link-past >" + card).on("mouseover", function() {
            $(card).flip(true)
        })
        $(".project-link-past").on("mouseout", function() {
            $(card).flip(false);
        });
    }
    
    flipTitle("#card1");
    flipTitle("#card2");
    flipTitle("#card3");
    flipTitle("#card4");
    flipTitle("#card5");
    flipTitle("#card6");
    flipTitle("#card7");
    flipTitle("#card8");
    flipTitle("#card9");
    flipTitle("#card10");
    flipTitle("#card11");
    flipTitle("#card-current")
    
})