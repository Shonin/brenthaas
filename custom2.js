/* global $ */

$(document).ready(function() {
    
    
    function flipTab(card) {
        $(card).flip({axis: 'x'});
        
        $(".project-link-past > " + card).on("mouseover", function() {
            $(card).flip(true);
        });
        
        $(".project-link-past").on("mouseout", function() {
            $(card).flip(false);
        });
    }
    
    
    flipTab("#current-card1");
    flipTab("#current-card2");
    flipTab("#current-card3");
    flipTab("#current-card4");
    flipTab("#current-card5");
    flipTab("#current-card6");
    flipTab("#current-card7");
    flipTab("#current-card8");
    flipTab("#current-card9");
    flipTab("#current-card10");
    flipTab("#current-card11");
    flipTab("#current-card12");
    
    

});