$(document).ready(function(){
    var yourNavigation = $("header");
    stickyDiv = "scrolled";
    yourHeader = $('header').height();

    $(window).scroll(function() {
        if( $(this).scrollTop() > yourHeader ) {
            yourNavigation.addClass(stickyDiv);
            $(".nav").addClass("scrolled");
            
        } else {
            yourNavigation.removeClass(stickyDiv);
            $(".nav").removeClass("scrolled");
        }
    });
});