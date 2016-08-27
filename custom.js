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

    $(".tab").on("click", function() {
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
            $(card).flip(false)
        }, 100);

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
    


    $(".tab-red").on("mouseover", function() {
      $(this).css('background-image', 'url("brent_haas_files/tab-red-hover.png")');
      $(this).find('p').css('color', '#1B191A');
    });

    $(".tab-red").on("mouseout", function() {
        $(this).css('background-image', '');
        $(this).find('p').css('color', '');
    });

    $(".tab-red").on("click", function() {
        $(this).css('background-image', '');
        $(this).find('p').css('color', '');
    });

    function flipTitle0(card) {
        $(card).flip({axis: 'x', speed: '600'})
        $(".tab-red >" + card).on("mouseover", function() {
            $(card).flip(true)
        });
        $(".tab-red").on("mouseout", function() {
            $(card).flip(false);
        });

        $(".tab-red >" + card).on("click", function() {
            $(card).flip(false)
        }, 100);
    }

    flipTitle0("#card-current");

    
});