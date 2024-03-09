/*--------------------- Copyright (c) 2021 -----------------------
[Master Javascript]
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var photographer = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Design Functions Calling ---------------------------------------------------
      ------------------------------------------------------------------------------------------------*/
      this.loader();
      this.toggle();
      this.navbar();
      this.sticky_header();
      this.bottom_top();
      this.testimonialSlider();



    },

    /*-------------- Design Functions Calling ---------------------------------------------------
    --------------------------------------------------------------------------------------------------*/
    testimonialSlider: function() {
      if ($('.sr-testimonials-wrapper .swiper-container').length > 0) {
          var galleryThumbs = new Swiper('.sr-testimonials-wrapper .gallery-thumbs', {
              autoHeight: false,
              loop: true,
              spaceBetween: 0,
              centeredSlides: true,
              speed: 1000,
              allowTouchMove: false,
              slidesPerView: 3,
              spaceBetween: 0,
              effect: 'coverflow',
              coverflowEffect: {
                  rotate: 0,
                  depth: 0,
                  modifier: 1,
                  slideShadows: false
              },
          });
          var galleryTop = new Swiper('.sr-testimonials-wrapper .gallery-top', {
              spaceBetween: 0,
              slidesPerView: 1,
              loop: true,
              allowTouchMove: false,
              speed: 1000,
              slidesPerView: 1,
              autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
              },
              thumbs: {
                  swiper: galleryThumbs,
              },
              pagination: {
                  el: '.sr-testimonial-container .pagination',
                  clickable: true,
              },
              navigation: {
                  nextEl: '.sr-testimonial-container .next-slide',
                  prevEl: '.sr-testimonial-container .prev-slide',
              },
          });
      }
      /* Testimonial Style Two */
      if ($('.testimonials-slider').length > 0) {
          var swiper = new Swiper('.testimonials-slider', {
              slidesPerView: 1,
              spaceBetween: 0,
              loop: true,
              autoplay: false,
              speed: 1000,
              pagination: {
                  el: '.sr-testimonial2-container .pagination',
                  clickable: true,
              },
              navigation: {
                  nextEl: '.sr-testimonial2-container .next-slide',
                  prevEl: '.sr-testimonial2-container .prev-slide',
              },
          });
      }

  },
    // loader           
    loader: function () {
      jQuery(window).on('load', function () {
        $(".ld-loader").fadeOut();
        $(".ld-spinner").delay(500).fadeOut("slow");
      });
    },
    // loader

    //Toggle
    toggle: function () {
      $(document).ready(function(){
        $(document).on("click", function(event){
          var $trigger = $(".ld-toggle-btn");
            if($trigger !== event.target && !$trigger.has(event.target).length){
                $("body").removeClass("open-toggle");
            }            
        });
        $(".ld-toggle-btn").click(function(){
          $("body").toggleClass("open-toggle");
        });
      });
    },
 navbar: function () {
  $('.as-CommonClass-navbar').on('click', function (e) {
    var th = $(this).attr('top-h');                                                                                                                               
    var target = this.hash,
      $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - th
    }, 100, 'swing', function () {
      window.location.hash = target;
    });
  });
},
// fix menu scroll
sticky_header: function () {
  $(window).scroll(function () {
    var wh = window.innerWidth;
    {
      var h = window.innerHeight;
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 100) {
        $(".pp-header-wrapper").addClass("pp-header-fixed");
      } else {
        $(".pp-header-wrapper").removeClass("pp-header-fixed");
      }
    }
  });
},

    // Bottom To Top
    bottom_top: function () {
      if ($('#button').length > 0) {

        var btn = $('#button');

        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });

        btn.on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: 0
          }, '300');
        });


      }
    },
    // Bottom To Top
// magenific popup 
  };
  photographer.init();

}(jQuery));
var swiper = new Swiper(".ld-client-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});








