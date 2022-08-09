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

    $(".pop-link").click(function(pl){
        pl.preventDefault();
        $($(this).attr("href")).addClass("show");
    });
    $(".close-bt").click(function(){
        $(".overlay").removeClass("show");
    });

    $(".burger").click(function(){
        $(".main-menu").toggleClass("show");
        $(".burger i").toggleClass("fa-bars fa-times")
    });

    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href')); 
        $('html, body').animate({
        scrollTop: $section.offset().top - 60
        }, 1000);
    }
    $('.main-menu a').on('click', scrollToSection);
    $(".main-menu a").click(function(){
        $(".main-menu a").removeClass("active");
        $(this).addClass("active");
    });
});