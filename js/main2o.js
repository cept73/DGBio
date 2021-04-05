/* ===================================================================
 * Main JS
 * ------------------------------------------------------------------- */

function metaScroll()
{
    const target = location.hash;

    let foundedMeta = ['#ecosystem', '#jared', '#developers', '#foundation', '#dgbat', '#wiki',
        '#telegram', '#socialmedia', '#digiassetservices', '#dgbcore', '#dgbmobile',
        '#dgbgo', '#docs', '#contribute', '#history', '#digidservices'].indexOf(target) >= 0;

    if (foundedMeta || target.length > 0) {
        window.addEventListener("load", function () {
            setTimeout(function () {
                let offset = foundedMeta ? 100 : 0;
                window.scrollTo(0, $(target).offset().top - offset);
            }, 1000);
        });
    }
}

/* Clickable language menu */
function lmenu()
{
    document.getElementById("lddown").classList.toggle("show");
}

function bindEvents()
{
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show'),
                        openDropdown.classList.add('hide')
                }
            }
        }
    }
    /* Remove pace (Run once) */
    window.addEventListener("load", function () {
        setTimeout(function () {
            $('body').addClass('nopace');
        }, 1000);
    });
}

/* Home button script */
function homeButton()
{
    let toggleButton = $('.header-menu-toggle'),
        nav = $('.header-nav-wrap'),
        shead = $('.s-header');

    shead.removeClass('opaque');

    if (toggleButton.hasClass('is-clicked')) {
        toggleButton.removeClass('is-clicked');
        nav.slideToggle();
    }
}

function getLanguageNames()
{
    return {
        'af': 'Afrikaans',
        'cs': 'Čeština',
        'da': 'Dansk',
        'de': 'Deutsch',
        'es': 'Español',
        'fr': 'Français',
        'hr': 'Hrvatski',
        'id': 'Indonesia',
        'it': 'Italiano',
        'sw': 'Kiswahili',
        'hu': 'Magyar',
        'ms': 'Melayu',
        'nl': 'Nederlands',
        'nb': 'Norsk',
        'fil': 'ilipino',
        'pl': 'Polski',
        'pt': 'Português',
        'ro': 'Română',
        'sq': 'Shqip',
        'sl': 'Slovenščina',
        'fi': 'Suomi',
        'sv': 'Svenska',
        'vi': 'Tiếng Việt',
        'tr': 'Türkçe',
        'ru': 'Русский',
        'bg': 'български',
        'el': 'Ελληνικά',
        'hi': 'हिन्दी',
        'th': 'ไทย',
        'ja': '日本語',
        'ko': '한국어',
        'zh': '简体中文',
        'ar': 'العربية',
        'fa': 'فارسی',
        'en': 'English'
    }
}

function getCurrentLang()
{
    const path = location.pathname;
    const menuNames = getLanguageNames();

    for (let langName in menuNames) {
        if (path.includes(langName)) {
            return langName;
        }
    }

    return null;
}

/* lang menu text */
function setLMenuName()
{
    let foundedLang = getCurrentLang();
    if (!foundedLang) {
        foundedLang = 'en';
    }

    const menuNames = getLanguageNames();
    document.getElementById("lmenuname").innerHTML = menuNames[foundedLang] + "&nbsp;&#9662;";
}


function initPage()
{
    metaScroll();
    setLMenuName();
    bindEvents();
}


initPage();


(function($) {
    "use strict";

    let cfg = {
            scrollDuration : 800, // smooth scroll duration
        };

    let $WIN = $(window);

    // Add the User Agent to the <html>
    let doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


    /* Preloader
     * -------------------------------------------------- */
    let ssPreloader = function () {

        $("html").addClass('ss-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations
            $("html").removeClass('ss-preload').addClass('ss-loaded');

        });
    };


    /* Menu on ScrollDown
     * ------------------------------------------------------ */
    let ssMenuOnScrollDown = function () {

        let hdr = $('.s-header');
        let hdrTop = hdr.offset().top;

        $WIN.on('scroll', function() {
            if ($WIN.scrollTop() > hdrTop) {
                hdr.addClass('sticky');
            }
            else {
                hdr.removeClass('sticky');
            }
        });
    };


    /* Mobile Menu
     * ---------------------------------------------------- */
    let ssMobileMenu = function() {

        let toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap'),
            sHead = $('.s-header');

        toggleButton.on('click', function(event){
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
            sHead.toggleClass('opaque');
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');

        $WIN.on('resize', function() {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });

        nav.find('a').on("click", function() {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.slideToggle();
            }
        });

    };


    /* Highlight the current section in the navigation bar
     * ------------------------------------------------------ */
    let ssWaypoints = function() {

        let sections = $(".target-section"),
            navigation_links = $(".header-nav-wrap li a");

        sections.waypoint( {
            handler: function (direction) {
                let active_section = $('section#' + this.element.id);

                if (direction === "up") {
                    active_section = active_section.prevAll(".target-section").first();
                }

                let active_link = $('.header-nav-wrap li a[href="#' + active_section.attr("id") + '"]');

                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");
            },
            offset: '25%'
        });
    };


    /* Slick slider
     * ------------------------------------------------------ */
    let ssSlickSlider = function() {

        $('.about-desc__slider').slick({
            prevArrow: '<a class="slide-arrowab prev-arrowab"></a>',
            nextArrow: '<a class="slide-arrowab next-arrowab"></a>',
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnFocus: true,
            autoplay: false,
            autoplaySpeed: 7500,
            responsive: [
                {
                    breakpoint: 1401,
                    settings: {
                        arrows: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1151,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 701,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        });

        $('.testimonials__slider').slick({
            prevArrow: '<a class="slide-arrow prev-arrow"></a>',
            nextArrow: '<a class="slide-arrow next-arrow"></a>',
            arrows: true,
            dots: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnFocus: true,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1151,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 701,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        });
    };


    /* Stat Counter
   * ------------------------------------------------------ */
    let ssStatCount = function() {

        let statSection = $(".s-stats"),
            stats = $(".stats__count");

        statSection.waypoint({

            handler: function(direction) {

                if (direction === "down") {

                    stats.each(function () {
                        let $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                }

            },

            offset: "90%"

        });
    };

    let scrollBody = function (e, offset) {
        let target = this.hash,
            $target = $(target);

        e.preventDefault();
        e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - offset
        }, cfg.scrollDuration, 'swing').promise().done(function () {
            history.pushState(null, null, target);
        });
    }

    /* Smooth Scrolling
     * ------------------------------------------------------ */
    let ssSmoothScroll = function() {

        $('.smoothscroll').on('click', function (e) {
            scrollBody(e, 0);
        });

        $('.smoothscrollup').on('click', function (e) {
            scrollBody(e, 100);
        });

        $('.ssbc').on('click', function (e) {
            scrollBody(e, -255);
        });

        $('.ssbcm').on('click', function (e) {
            scrollBody(e, -435);
        });

    };


    /* Animate On Scroll
     * ------------------------------------------------------ */
    let ssAOS = function () {
        AOS.init( {
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
            once: false,
        });
    };


    /* Back to Top
    * ------------------------------------------------------ */
    let ssBackToTop = function () {
        let pxShow      = 500,
            goTopButton = $(".go-top");

        if ($(window).scrollTop() >= pxShow) {
            goTopButton.addClass('link-is-visible');
        }

        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                if (!goTopButton.hasClass('link-is-visible')) {
                    goTopButton.addClass('link-is-visible')
                }
            } else {
                goTopButton.removeClass('link-is-visible')
            }
        });
    };


    /* include html */
    function includeHTML() {
        let z, i, elmnt, file, xhttp;
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            file = elmnt.getAttribute("includeHTML");
            if (file) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 200) {elmnt.innerHTML = this.responseText;}
                        if (this.status === 404) {elmnt.innerHTML = "Page not found.";}
                        elmnt.removeAttribute("includeHTML");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    }


    /* Initialize
     * ------------------------------------------------------ */
    (function clInit() {

        ssPreloader();
        ssMenuOnScrollDown();
        ssMobileMenu();
        ssWaypoints();
        ssSlickSlider();
        ssSmoothScroll();
        ssAOS();
        ssBackToTop();
        ssStatCount();
        includeHTML();

    })();

})(jQuery);
