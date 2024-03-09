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
      this.pgloader();
      this.pgtoggle();
      this.navbar();
      this.pgserviceslider();
      this.pgtestimonialslider();
      this.pgbottom_top();
      this.pgIsotop_gallery();
      this.pgMagnific_popup();


    },

    /*-------------- Design Functions Calling ---------------------------------------------------
    --------------------------------------------------------------------------------------------------*/

    // loader           
    pgloader: function () {
      jQuery(window).on('load', function () {
        $(".pg-loader").fadeOut();
        $(".pg-spinner").delay(500).fadeOut("slow");
      });
    },
    // loader

    //Toggle
    pgtoggle: function () {
      $(".pg-toggle-btn").on('click', function (e) {
        e.stopPropagation();
        $("body").toggleClass("menu-open");
      });
    },

    navbar: function() {
      $('.as-CommonClass-navbar').on('click',function (e) {
        var th = $(this).attr('top-h');
        var target = this.hash,
          $target = $(target);
  
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top-th
        }, 100, 'swing', function () {
          window.location.hash = target;
        });
      });
    },

    // service slider
    pgserviceslider: function () {
      var swiper = new Swiper(".service-slider", {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
        
          1200: {
              slidesPerView: 4,
              spaceBetween: 30
          },
          991: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          767: {
              slidesPerView: 3,
              spaceBetween: 20
          },
          575: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          480: {
              slidesPerView: 1,
              spaceBetween: 30
          },
          380: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        }

      }
      });


    },
    // Testimonial slider
    pgtestimonialslider: function () {
      var swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1920: {
              slidesPerView: 3,
              spaceBetween: 30
          },
         1400: {
              slidesPerView: 3,
              spaceBetween: 30
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        380: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
      }
       });

    },


    // Bottom To Top
    pgbottom_top: function () {
      if ($('#button').length > 0) {

        var btn = $('#button');
        var fixed = $('.pp-header-wrapper');
        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
            btn.addClass('show');
            fixed.addClass('pp-header-fixed');
          } else {
            btn.removeClass('show');
            fixed.removeClass('pp-header-fixed');
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

    // isotop-fliter
    pgIsotop_gallery: function() {
      $(window).on('load', function(){
        
        $('.pg-gallery_grid').isotope({
            itemSelector: '.pg-grid-item',
            filter: '*'
        }); 
      });
      
      $('#loadMore').on('click', function(){
        $('.pg_view_gallery').addClass('pg_view_gallery_view');
        $('.pg-gallery_grid').isotope({
          itemSelector: '.pg-grid-item',
          filter: '*'
        }); 
        
      });
    },
    // magenific popup 
    pgMagnific_popup: function() {
      if($('.view').length > 0){
      $('.view').magnificPopup({
        type: 'image',
        
        gallery: {
        enabled: true
        }
      });
    }
  },
// magenific popup 




  };
  photographer.init();

}(jQuery));








