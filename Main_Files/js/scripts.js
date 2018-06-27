/*****************************************/

/* Author: radekthemes */
/* Template: Aurora - Personal Portfolio */
/* Version: 1.0 */

/*****************************************/

//Document on ready functions
$(document).ready(function(){
  "use strict";

  /*************************/
  /*       PRELOADER       */
  /*************************/
  //After 2s preloader is fadeOut
  $('.preloader').delay(2000).fadeOut('slow');
  setTimeout(function() {
    //After 2s, the no-scroll class of the body will be removed
    $('body').removeClass('no-scroll');
  }, 2000); //Here you can change preloader time

  /*************************/
  /*  EFFECT AFTER SCROLL  */
  /*************************/
  $(window).on('scroll',function() {
    var buttonUp = $('.button-up'); //scroll-top btn
    var socialBtns = $('.socials-btns'); // social-btns
    var navbarFixedTop = $('.navbar-fixed-top');
    // Adding background for .navbar after scroll more than 220
    if ($('.navbar').offset().top > 220) {
      $(navbarFixedTop).addClass('top-nav-collapse');
      $(buttonUp).fadeIn(300);
      $(socialBtns).fadeIn(300);
    } else {
      //Removing all adding styles
      $(navbarFixedTop).removeClass('top-nav-collapse');
      $(buttonUp).fadeOut(300);
      $(socialBtns).fadeOut(300);
    }
    //Animate progress-bar in About me section
    $(".progress .progress-bar").each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr('aria-valuenow') + '%';
      if(bottom_window > bottom_object) {
        $(this).css({
          width : progressWidth
        });
      }
    });
  });

  //Close the menu by clicking on the link
  $('.navbar-nav li a').on('click', function() {
   //Check if window is small enough so dropdown is created
   var toggle = $('.navbar-toggle').is(':visible');
   if (toggle) {
     //After click on link in menu navbar is close
     $('.navbar-collapse').collapse('hide');
   }
  });

  /*************************/
  /*      SMOOTH SCROLL    */
  /*************************/
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 87,
              }, 1000);
              return false;
          }
    }
  });

  /*******************************************/
  /* OWLCAROUSEL OPTIONS - PORTFOLIO INDEX.2 */
  /*******************************************/
  var owl = $('.owl-full');
    owl.owlCarousel({
      items:3,
      loop:true,
      margin:0,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });

  //Testiomials section options
  var owl = $('.owl-carousel');
      owl.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        smartSpeed :900,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:1
          },
          1000:{
            items:1
          }
        }
    });

  /********************/
  /*    WOW.JS INIT   */
  /********************/
  var wow = new WOW({
    mobile: false //Off animations on mobile devices
  });
  wow.init();

  /******************************************/
  /*    SWIPER.JS PORTFOLIO SECTION INDEX   */
  /******************************************/
  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
      },
    });

}); //end jquery document ready
