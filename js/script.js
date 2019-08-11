/* ********************
        preloader
********************** */
$(window).on('load', function() { //show loader before showing actual page
    // $("#status").fadeOut();
    $("#preloader").fadeOut();
});
/* ********************
      owel carousel team
********************** */
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        dots:false,
        navText: ['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
        responsive: {
            0:{
                items:1
            },
            480:{
                items:2
            }
        }
    });
});

/* ********************
      Progress bar
********************** */
$(function() {
    $(".progress-elements").waypoint(function(){
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    },{
        offset: 'bottom-in-view'
    });
});

/* ********************
      Responsive tabs
********************** */

$(function(){
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/* ********************
      Portfolio filtre
********************** */
$(window).on('load', function(){
    // Initialize Isotop
    $("#isotope-container").isotope({
    });
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function(){
        //get filter value
        var filterValue = $(this).attr('data-filter');
        
        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
        // Active button
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});
/* ********************
      Magnifier
********************** */
$(function() {
    $("#portfolio-wrapper").magnificPopup({
        delegate:'a', //child items selector, by clicking on it popup will open 
        type: 'image',
        gallery:{
            enabled:true
        }
      });
});
/* ******************************
            Testimonials
******************************** */
$(function() {
    $("#testimonials-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        dots:false,
        navText: ['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>']
    });
});
/* ******************************
         stats counter up
******************************** */
$(function (){
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/* ******************************
             Clients
******************************** */
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        dots:false,
        navText: ['<i class="fas fa-angle-left fa-2x"></i>','<i class="fas fa-angle-right fa-2x"></i>'],
        responsive: {
            0:{
                items:2
            },
            480:{
                items:3
            },
            768:{
                items:6
            }
        }
    });
});

/* ******************************
             navigation
******************************** */

$(function(){
    // show & hide white navigation
    showHideNav();

    $(window).scroll(function(){
        //show & hide nav on window's scroll
        showHideNav();
    });

    function showHideNav(){
        if($(window).scrollTop() > 50){
            //show white nav
            $("nav").addClass("white-nav-top");
            //Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            //show back to top button
            $("#back-to-top").fadeIn();
        }else{
            //hide white nav
            $("nav").removeClass("white-nav-top");
            //show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
          //show back to top button
          $("#back-to-top").fadeOut();
        }
    }
});

/* ******************************
            smooth scrooling
******************************** */

$(function(){
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        // get section id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        },1250,"easeInOutExpo");
    });
});
/* ******************************
            Mobile Menu
******************************** */
$(function(){
    //Show mobile nav
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height", "100%");
    });
    //hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height", "0%");
    });
});















