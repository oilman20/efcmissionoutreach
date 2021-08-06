'use strict';
$('.hero-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 1200,
    mouseDrag: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    autoplay: true
});

(function ($) {

    "use strict";

  
    /* Preloader
     * -------------------------------------------------- */
    var clPreloader = function () {

        $("html").addClass('cl-preload');

        $WIN.on('load', function () {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');

        });
    };


    /* Menu on Scrolldown
     * ------------------------------------------------------ */
    var clMenuOnScrolldown = function () {

        var menuTrigger = $('.header-menu-toggle');

        $WIN.on('scroll', function () {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            } else {
                menuTrigger.removeClass('opaque');
            }

        });
    };


    /* OffCanvas Menu
     * ------------------------------------------------------ */
    var clOffCanvas = function () {

        var menuTrigger = $('.header-menu-toggle'),
            nav = $('.header-nav'),
            closeButton = nav.find('.header-nav__close'),
            siteBody = $('body'),
            mainContents = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function (e) {
            e.preventDefault();
            // menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function (e) {
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function (e) {
            if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
                // menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };





    /* Placeholder Plugin Settings
     * ------------------------------------------------------ */
    var clPlaceholder = function () {
        $('input, textarea, select').placeholder();
    };



    /* Initialize
     * ------------------------------------------------------ */
    (function ssInit() {

        clOffCanvas();
        clPlaceholder();

    })();


})(jQuery);