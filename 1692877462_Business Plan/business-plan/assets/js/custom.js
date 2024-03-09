/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]

-------------------------------------------------------------------*/
(function ($) {
  "use strict";
  var BusinessCoaching = {
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
      this.sticky_header();
      this.navbar();
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
    // toggle menu
    toggle_menu: function () {
      $(".pp-toggle-btn").on("click", function () {
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
            $(".pp-header-wrapper").addClass("pp-header-fixed");
          } else {
            $(".pp-header-wrapper").removeClass("pp-header-fixed");
          }
        }
      });
    },
    // sticky header
  };
  BusinessCoaching.init();
})(jQuery);
