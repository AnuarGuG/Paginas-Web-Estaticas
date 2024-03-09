
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
		this.sticky_header();
		this.navbar();
		this.toggle_menu();
	  },
  
	  /*-------------- Affiliate Marketing Functions Calling ---------------------------------------------------
		  --------------------------------------------------------------------------------------------------*/
	  
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
			$(".sm_toggle").on("click", function () {
			  $("body").toggleClass("open");
			});
		  },
		  // toggle menu
	};
	AffiliateMarketing.init();
  })(jQuery);