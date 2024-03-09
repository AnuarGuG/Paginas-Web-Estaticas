/*--------------------- Copyright (c) 2022 -----------------------
[Master Javascript]
Project: Affiliate Marketing html
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var AffiliateMarketing = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Affiliate Marketing Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
      this.am_testimonial_slider();
      this.am_partner_slider();
      this.bottom_top();
      this.loader();
      this.toggle_menu();
      this.sticky_header();
      this.counter();
      this.navbar();
    },

    /*-------------- Affiliate Marketing Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
    // testimonial slider
    am_testimonial_slider: function () {
      var swiper = new Swiper(".pp-client-wrapper .swiper-container", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".pp-client-wrapper .swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          1199: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        },
      });
    },
    // testimonial slider
    // partner slider
    am_partner_slider: function () {
      var swiper = new Swiper(".pp-partner-wrapper .swiper-container", {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        breakpoints: {
          1199: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          280: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        },
      });
    },
    // partner slider

    // Bottom To Top
    bottom_top: function () {
      if ($("#button").length > 0) {
        var btn = $("#button");

        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
            btn.addClass("show");
          } else {
            btn.removeClass("show");
          }
        });

        btn.on("click", function (e) {
          e.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "300");
        });
      }
    },
    // Bottom To Top
    // loader
    loader: function () {
      jQuery(window).on("load", function () {
        $(".loader").fadeOut();
        $(".spinner").delay(500).fadeOut("slow");
      });
    },
    // loader
    // toggle menu
    toggle_menu: function () {
      $(".cc-toggle-btn").on("click", function () {
        $("body").toggleClass("menu-open");
      });
    },
    // toggle menu
    // sticky header
    sticky_header: function () {
      $(window).scroll(function () {
        var wh = window.innerWidth;
        {
        var h = window.innerHeight;
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 100) {
          $(".pp-header-wrapper").addClass("pp-header-fixed animated fadeInDown");
        } else {
          $(".pp-header-wrapper").removeClass("pp-header-fixed animated fadeInDown");
        }
        }
      });
      },
    // sticky header
    // counter
    counter: function () {
      $(".counting").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 3000,
            easing: "linear",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
    },
    // counter
    navbar: function() {
			$('.as-CommonClass-navbar').on('click',function (e) {
				var th = $(this).attr('top-h');
				var target = this.hash,
					$target = $(target)
;
	
				$('html, body').stop().animate({
					'scrollTop': $target.offset().top-th
				}, 100, 'swing', function () {
					window.location.hash = target;
				});
			});
		},

  };
  AffiliateMarketing.init();
})(jQuery);