/* global $ */

$(document).ready(function() {
    
    $(".tab").on("mouseover", function() {
      $(this).css('background-image', 'url("brent_haas_files/tab_hover.png")');
      $(this).find('p').css('color', '#1B191A');
    });
    
    $(".tab").on("mouseout", function() {
        $(this).css('background-image', '');
        $(this).find('p').css('color', '');
    });
    
    
    
    function flipTitle(card) {
        $(card).flip({axis: 'x', speed: '600'})
        $(".tab >" + card).on("mouseover", function() {
            $(card).flip(true)
        });
        $(".tab").on("mouseout", function() {
            $(card).flip(false);
        });

        $(".tab >" + card).on("click", function() {
            $(card).flip(true)
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
    


    $(".tab0").on("mouseover", function() {
      $(this).css('background-image', 'url("brent_haas_files/tab-red-hover.png")');
      $(this).find('p').css('color', '#1B191A');
    });

    $(".tab0").on("mouseout", function() {
        $(this).css('background-image', '');
        $(this).find('p').css('color', '');
    });

    function flipTitle0(card) {
        $(card).flip({axis: 'x', speed: '600'})
        $(".tab0 >" + card).on("mouseover", function() {
            $(card).flip(true)
        })
        $(".tab0").on("mouseout", function() {
            $(card).flip(false);
        });
    }

    flipTitle0("#card-current");

    
})