/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]

-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var technicalsupport = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
      this.am_testimonial_slider();
      this.toggle_menu();
      this.search_btn();
      this.counter();
      this.navbar();
      this.sticky_header();
    },

    /*-------------- Functions Calling ---------------------------------------------------
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
    // toggle menu
    toggle_menu: function () {
      $(".pp-toggle-btn").on("click", function () {
        $("body").toggleClass("menu-open");
      });
    },
    // toggle menu
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
    // counter
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

              thisElement.text(mathCount);
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
        duration: 2000,
      });
      $("#number4").jQuerySimpleCounter({
        end: $("#number4").data('to'),
        duration: 2500,
      });
    },
  };
  technicalsupport.init();
})(jQuery);
