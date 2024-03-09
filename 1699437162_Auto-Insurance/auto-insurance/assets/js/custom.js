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
			}
			else {
				return;
			}
			/*-------------- Consulting Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.submenu_toggle();
			this.bottom_top();
			this.navbar();
			this.sticky_header();
		    this.navbar();
			this.client_slider();
			this.partner_slider();
			this.search_btn();
		},

		/*-------------- Consulting Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/

		// sub menu start
		submenu_toggle: function () {
			$(document).on("click", function (event) {
				var $trigger = $(".ai-toggle");
				if ($trigger !== event.target && !$trigger.has(event.target).length) {
					$("body").removeClass("toggle");
				}
			});
			$(" .ai-toggle").click(function () {
				$("body").toggleClass("toggle");
			});

		},
		// sub menu end
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
					$('html, body').animate({ scrollTop: 0 }, '300');
				});
			}
		},
		// Bottom To Top
		// loader			
		loader: function () {
			jQuery(window).on('load', function () {
				$(".loader").fadeOut();
				$(".spinner").delay(500).fadeOut("slow");
			});
		},
		// loader
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
		// client-slider-start
		client_slider: function () {
			var swiper = new Swiper('.client-slider .ai-client-swiper-container', {
				slidesPerView: 2,
				spaceBetween: 10,
				loop: true,
				speed: 1000,
				autoplay: false,
				navigation: {
					nextEl: '.slider-btn .swiper-button-next',
					prevEl: '.slider-btn .swiper-button-prev',
				},
				breakpoints: {
					1199: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					992: {
						slidesPerView: 1,
						spaceBetween: 50,
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 50,
					},
					575: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
					,
					0: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				}
			});
        // clinet-slider-end
		},
		// partner-slider-start
		partner_slider: function () {
			var swiper = new Swiper('.ai-partners-slider .ai-partners-swiper-container', {
				slidesPerView: 4,
				spaceBetween: 10,
				loop: true,
				speed: 1000,
				autoplay: false,
				navigation: {
					nextEl: '.slider-btn .swiper-button-next',
					prevEl: '.slider-btn .swiper-button-prev',
				},
				breakpoints: {
					1199: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
					992: {
						slidesPerView: 3,
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
					}
				}
			});
		},
		// paertner-slider-end
		// search-btn-start
		search_btn: function () {
			$('.ai-searchBtn').on("click", function () {
				$('.searchBox').addClass('show');
			});
			$('.closeBtn').on("click", function () {
				$('.searchBox').removeClass('show');
			});
			$('.searchBox').on("click", function () {
				$('.searchBox').removeClass('show');
			});
			$(".search-bar-inner").on('click', function () {
				event.stopPropagation();
			});
		}
		// search-btn-end
	};
	Consulting.init();

}(jQuery));





