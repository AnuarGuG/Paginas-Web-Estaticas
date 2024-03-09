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

      this.toggle_menu();
      this.cartbox();
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
    // Cart Box

    cartbox: function () {
      $(".pp-cart-box").on("click", function (e) {
        e.stopPropagation();
        $("body").toggleClass("cart-open");
      });
      $(".close-box").on("click", function () {
        $("body").removeClass("cart-open");
      });
      $(".sb-cartbox").on("click", function (e) {
        e.stopPropagation();
      });
      $(document).on("click", function () {
        $("body").removeClass("cart-open");
      });
    },
    // Cart Box
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
