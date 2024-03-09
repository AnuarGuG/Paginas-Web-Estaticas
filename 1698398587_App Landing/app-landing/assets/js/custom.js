/*--------------------- Copyright (c) 2020 -----------------------
[Master Javascript]
Project: Consulting html
-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var Consulting = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Consulting Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
      this.submenu_toggle();
      this.bottom_top();
      this.loader();
      this.toggle_btn();
      this.search_btn();
      this.screen_slider();
      this.tesmonial_slider();
      this.footer_slider();
      this.sticky_header();
      this.navbar();
    },

    /*-------------- Consulting Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/
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
    // sticky header
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
    // sticky header
    // sub menu start
    submenu_toggle: function () {
      $(".ps-title").click(function (j) {
        var dropDown = $(this).closest(".ps-menu-children").find(".ps-submenu");
        $(this)
          .closest(".ps-toggle")
          .find(".ps-submenu")
          .not(dropDown)
          .slideUp();

        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(this)
            .closest(".ps-toggle")
            .find(".ps-title.active")
            .removeClass("active");
          $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
      });
    },
    // sub menu end
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
    // loader start
    loader: function () {
      jQuery(window).on("load", function () {
        $(".loader").fadeOut();
        $(".spinner").delay(500).fadeOut("slow");
      });
    },
    // loader end
    // toggle start
    toggle_btn: function () {
      $(document).on("click", function (event) {
        var $trigger = $(".app-toggle");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
          $("body").removeClass("toggle");
        }
      });
      $(" .app-toggle").click(function () {
        $("body").toggleClass("toggle");
      });
    },
    // toggle end
    // search btn
    search_btn: function () {
      $(".searchBtn").on("click", function () {
        $(".searchBox").addClass("show");
      });
      $(".closeBtn").on("click", function () {
        $(".searchBox").removeClass("show");
      });
      $(".searchBox").on("click", function () {
        $(".searchBox").removeClass("show");
      });
      $(".search-bar-inner").on("click", function () {
        event.stopPropagation();
      });
    },
    // search btn end
    // screen slider start
    screen_slider: function () {
      var swiper = new Swiper(
        ".app-screen-swiper-content .app-screen-swiper-container",
        {
          slidesPerView: 3,
          spaceBetween: 10,
          loop: true,
          speed: 1000,

          pagination: {
            el: ".am-client-wrapper .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".slider-btn .swiper-button-next",
            prevEl: ".slider-btn .swiper-button-prev",
          },

          breakpoints: {
            1199: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            992: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            575: {
              slidesPerView: 2,
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
        }
      );
    },
    // screen-slider-end
    // testimonial-slider-start

    tesmonial_slider: function () {
      var swiper = new Swiper(
        ".testmonial-content .app-testmonial-swiper-container",
        {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          // autoplay: {
          // 	delay: 2500,
          // 	disableOnInteraction: false,
          // },
          pagination: {
            el: ".testimonial-slider .swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1199: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            575: {
              slidesPerView: 2,
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
        }
      );
    },
    // tesmonial_slider end
    // footer-slider-start
    footer_slider: function () {
      var swiper = new Swiper(".footer-content .app-footer-swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".slider-btn1 .swiper-button-next",
          prevEl: ".slider-btn1 .swiper-button-prev",
        },
        breakpoints: {
          1199: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 1,
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
    // footer-slider-end
  };
  Consulting.init();
})(jQuery);
