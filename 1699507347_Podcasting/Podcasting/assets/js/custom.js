(function ($) {
  "use strict";
  var supportdesk = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      this.er_nav_menu();
      this.navbar();
      this.sticky_header();
      this.er_sponser_slider();
      this.er_team_slider();
      this.er_testimonial_slider();
      this.er_search_box();
      this.er_search();
      this.counter();
    },


    // nav menu toggle
    er_nav_menu: function () {
      $(document).on("click", function (event) {
        var $trigger = $(".er-toggle");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
          $("body").removeClass("er-menu-open");
        }
      });
      $(".er-toggle").click(function () {
        $("body").toggleClass("er-menu-open");
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

    // our sponser slider
    er_sponser_slider: function () {
      var swiper = new Swiper(".er-sponser-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        },
      });
    },

    // team slider
    er_team_slider: function () {
      var swiper = new Swiper(".er-team-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          675: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
    },

    // testimonial slider
    er_testimonial_slider: function () {
      var swiper = new Swiper(".er-testimonial-slider", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoplay: false,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    },

    // search box

    er_search_box: function () {
      $(document).ready(function () {
        $('.er-search-btn').on("click", function () {
          $('.er-searchBox').addClass('show');
        });
        $('.closeBtn').on("click", function () {
          $('.er-searchBox').removeClass('show');
        });
        $('.er-searchBox').on("click", function () {
          $('.er-searchBox').removeClass('show');
        });
        $(".search_bar_inner").on('click', function () {
          event.stopPropagation();
        });
      });
    },
    er_search: function () {
      $(document).ready(function () {
        $('.er-search-wrapper .er-shop-wrapper').on("click", function () {
          $(".er-cart-box-wrapper").toggleClass("cart-open");
        });
        $(document).on("click", function () {
          $(".er-cart-box-wrapper").removeClass("cart-open");
        });
        $('.er-cart-box-wrapper').on("click", function () {
          event.stopPropagation();
        });
        $('.er-shop-wrapper').on('click', function () {
          event.stopPropagation();
        });
      });
    },
    counter: function () {
      $.fn.jQuerySimpleCounter = function (options) {
        var settings = $.extend(
          {
            start: 0,
            end: 100,
            easing: "swing",
            duration: 400,
            complete: "",
          },
          options
        );
    
        var thisElement = $(this);
    
        $({
          count: settings.start,
        }).animate(
          {
            count: settings.end,
          },
          {
            duration: settings.duration,
            easing: settings.easing,
            step: function () {
              var mathCount = Math.ceil(this.count);
              thisElement.text(mathCount + "+");
            },
            complete: settings.complete,
          }
        );
      };
    
      $("#number1").jQuerySimpleCounter({
        end: $("#number1").data('to'),
        duration: 3000,
      });
      $("#number2").jQuerySimpleCounter({
        end: $("#number2").data('to'),
        duration: 3000,
      });
      $("#number3").jQuerySimpleCounter({
        end: $("#number3").data('to'),
        duration: 3000,
      });
      $("#number4").jQuerySimpleCounter({
        end: $("#number4").data('to'),
        duration: 3000,
      });
    },



  };
  supportdesk.init();

}
  (jQuery));